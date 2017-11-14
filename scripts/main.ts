import { ModuleHelper } from './helper/module';

document.querySelector('#Button').addEventListener('click', (evt) => {
    evt.preventDefault();  

    const reports = [
        {
            Id: 100,
            Type: 100,
            CustomURL: 'test'
        },
        {
            Id: 100,
            Type: 1,
            CustomURL: 'test'
        }
    ];

    reports.forEach((report) => {
        ModuleHelper.loadReportModule(
            report,
            (m) => {
                console.log(m);
            }
        );
    });
});