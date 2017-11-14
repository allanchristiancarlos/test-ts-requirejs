import { BaseModule } from "./BaseModule";

export class TileModule extends BaseModule {
    constructor(
        private _iframeURL: string
    ) {
        super();
    }
}