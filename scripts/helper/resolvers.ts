export const RESOLVERS: Array<IModuleResolver> = [
    {
        module: 'TileModule',
        resolve: (report) => {
            return report.Type === 100;
        },
        initialArg: 'https://dealercenter.net'
    }
];