export module ModuleHelper {

    const MODULE_INSTANCES: {[moduleName: string]: any} = {};

    export function loadModule(
        moduleName: string,
        args: any,
        fn: (module: any) => void
    ): void {
        if (isModuleLoaded(moduleName)) {
            fn(getModule(moduleName));
            return;
        }

        require([`../modules/${moduleName}`], (m) => {
            const instance = new m[moduleName](args);
            MODULE_INSTANCES[moduleName] = instance;
            fn(instance);
        });
    }

    export function loadModuleByReport(
        report: IReport,
        fn: (module: any) => void
    ): void {
        
    }

    function isModuleLoaded(moduleName: string): boolean {
        return !!MODULE_INSTANCES[moduleName];
    }

    function getModule(moduleName: string): any {
        return MODULE_INSTANCES[moduleName];
    }
}