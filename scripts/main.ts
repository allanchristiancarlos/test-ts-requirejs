import { ModuleHelper } from './helper/module';

document.querySelector('#Button').addEventListener('click', (evt) => {
    evt.preventDefault();  
    
    ModuleHelper.loadReportModule(
        {
            Id: 100,
            Type: 100,
            CustomURL: 'test'
        },
        (m) => {
            console.log(m);
        }
    )
});