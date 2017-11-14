import { ModuleHelper } from './helper/module';

document.querySelector('#Button').addEventListener('click', (evt) => {
    evt.preventDefault();  

    const reports = {
        module: 'TileModule',
        resolve: (report) => {
            return report.Type === 100;
        }
    }
    
    ModuleHelper.loadModule('TileModule', 'https://dms-app.dealercenter.net', (m) => {
        console.log(m);
    });
});