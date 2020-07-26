var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { styles } from './nyt-components-map.css';
import './nyt-components-map-mirror';
/**
 * 可配置组件容器
 */
let NytComponentsMap = class NytComponentsMap extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * 配置
         */
        this.settings = [];
    }
    _getTag(component, settings) {
        return settings ? html `
      ${unsafeHTML(`<${component} settings='${JSON.stringify(settings)}'></${component}>`)}
    ` : html `
      ${unsafeHTML(`<${component}></${component}>`)}
    `;
    }
    _computeClasses(spans) {
        let classStr = '';
        if (spans.normal)
            classStr += `col-${spans.normal} `;
        if (spans.xs)
            classStr += `col-xs-${spans.xs} `;
        if (spans.sm)
            classStr += `col-sm-${spans.sm} `;
        if (spans.md)
            classStr += `col-md-${spans.md} `;
        if (spans.lg)
            classStr += `col-lg-${spans.lg} `;
        if (spans.xl)
            classStr += `col-xl-${spans.xl} `;
        return classStr.replace(/\s$/, '');
    }
    render() {
        return html `
      ${this.settings.map(i => {
            return i.type === 'col'
                ? html `
            <div class="${this._computeClasses(i.spans || {})}">
              ${i.component ? this._getTag(i.component, i.componentSettings) : ''}
            </div>
          `
                : (i.settings
                    ? html `
              <nyt-components-map-mirror .settings="${i.settings}"></nyt-components-map-mirror>
            `
                    : html ``);
        })}
    `;
    }
};
NytComponentsMap.styles = styles;
__decorate([
    property({
        type: Array
    })
], NytComponentsMap.prototype, "settings", void 0);
NytComponentsMap = __decorate([
    customElement('nyt-components-map')
], NytComponentsMap);
export { NytComponentsMap };
// declare global {
//   interface HTMLElementTagNameMap {
//     'nyt-components-map': NytComponentsMap;
//   }
// }
//# sourceMappingURL=nyt-components-map.js.map