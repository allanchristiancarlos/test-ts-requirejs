import { BaseModule } from "./BaseModule";

export class TileModule extends BaseModule {
    constructor(
        private _iframeURL: string,
        private _test: string
    ) {
        super();

        setTimeout(() => {
            this.test();
        }, 3000);
    }
}