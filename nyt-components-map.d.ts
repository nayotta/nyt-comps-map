import { LitElement } from 'lit-element';
import './nyt-components-map-mirror';
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
 * 可配置组件容器
 */
export declare class NytComponentsMap extends LitElement {
    static styles: import("lit-element").CSSResult;
    /**
     * 配置
     */
    settings: Settings[];
    _getTag(component: string, settings?: object): import("lit-element").TemplateResult;
    _computeClasses(spans: Spans): string;
    render(): import("lit-element").TemplateResult;
}
export {};
//# sourceMappingURL=nyt-components-map.d.ts.map