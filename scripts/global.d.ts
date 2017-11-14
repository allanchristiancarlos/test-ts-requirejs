declare var DealerCenter: any;


interface IModule {

}

interface IReport {
    Type: number;
    Id: number;
    CustomURL: string;
}

interface IModuleResolver {
    moduleName: string;
    resolve: (report: IReport) => boolean;
    resolveArgs?: (report: IReport) => any[];
}