import { LitElement } from 'lit-element';
interface Spans {
    normal?: number;
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
}
interface Settings {
    type: string;
    spans?: Spans;
    component?: string;
    settings?: Settings[];
    componentSettings?: object;
}
/**
 * an container element with configs
 */
export declare class NytCompsMap extends LitElement {
    static styles: import("lit-element").CSSResult;
    /**
     * configs settings
     */
    settings: Settings[];
    _getTag(component: string, settings?: object): import("lit-element").TemplateResult;
    _computeClasses(spans: Spans): string;
    render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'nyt-comps-map': NytCompsMap;
    }
}
export {};
//# sourceMappingURL=nyt-comps-map.d.ts.map