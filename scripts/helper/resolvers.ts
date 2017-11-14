export const RESOLVERS: Array<IModuleResolver> = [
    {
        moduleName: 'TileModule',
        resolve: (report) => {
            return report.Type === 100;
        },
        resolveArgs: (report) => {
            return ['https://dealercenter.net', '1'];
        }
    },
    {
        moduleName: 'LineModule',
        resolve: (report) => {
            return report.Type === 1;
        },
        resolveArgs: () => {
            return [1];
        }
    }
];