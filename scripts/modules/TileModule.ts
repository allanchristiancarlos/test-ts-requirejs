import { LineModule } from "modules/LineModule";

export class TileModule extends LineModule {
    constructor(
        private _iframeURL: string,
        private _test: number
    ) {
        super(_test);

        setTimeout(() => {
            this.test();
        }, 3000);
    }
}