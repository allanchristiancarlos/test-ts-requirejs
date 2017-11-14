declare var DealerCenter: any;


interface IModule {

}

interface IReport {
    Type: number;
    Id: number;
    CustomURL: string;
}

interface IModuleResolver {
    module: string;
    resolve: (report: IReport) => boolean;
    initialArg?: any;
    initialArgs?: any[];
}