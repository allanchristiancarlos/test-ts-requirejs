import { RESOLVERS } from './resolvers';
import { LoggerHelper } from './logger';

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
            const className = m[moduleName];
            let instance = Object.create(className.prototype);
            let instanceArgs = Array.isArray(args) ? args : [args];
            className.apply(instance, instanceArgs);
            MODULE_INSTANCES[moduleName] = instance;
            fn(instance);
        });
    }

    export function loadReportModule(
        report: IReport,
        fn: (module: any) => void
    ): void {
        for (let i = 0, resolver: IModuleResolver; resolver = RESOLVERS[i]; i++) {
            const isResolved = resolver.resolve(report);

            if (isResolved) {
                let args;

                if (resolver.resolveArgs) {
                    args = resolver.resolveArgs(report);
                }

                loadModule(
                    resolver.moduleName, 
                    args, 
                    fn
                );
                return;
            }
        }

        LoggerHelper.error(`Report can't be resolved. Please check if it has module first.`);
    }

    function isModuleLoaded(moduleName: string): boolean {
        return !!MODULE_INSTANCES[moduleName];
    }

    function getModule(moduleName: string): any {
        return MODULE_INSTANCES[moduleName];
    }
}