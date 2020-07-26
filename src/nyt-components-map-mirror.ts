import { LitElement, html, customElement, property } from 'lit-element'
import { unsafeHTML } from 'lit-html/directives/unsafe-html'

import { styles } from './nyt-components-map.css'
import './nyt-components-map'

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
 * 可配置组件容器镜像组件
 */
@customElement('nyt-components-map-mirror')
export class NytComponentsMapMirror extends LitElement {
  static styles = styles

  /**
   * 配置
   */
  @property({
    type: Array
  })
  settings: Settings[] = []

  _getTag(component: string, settings?: object) {
    return html`
      ${unsafeHTML(
        `<${component} settings='${JSON.stringify(settings)}'></${component}>`
      )
      }
    `
  }

  _computeClasses(spans: {
    normal?: number;
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  }) {
    let classStr = ''
    if (spans.normal) classStr += `col-${spans.normal} `
    if (spans.xs) classStr += `col-xs-${spans.xs} `
    if (spans.sm) classStr += `col-sm-${spans.sm} `
    if (spans.md) classStr += `col-md-${spans.md} `
    if (spans.lg) classStr += `col-lg-${spans.lg} `
    if (spans.xl) classStr += `col-xl-${spans.xl} `
    return classStr.replace(/\s$/, '')
  }

  render() {
    return html`
      ${this.settings.map(i => {
        return i.type === 'col'
        ? html`
            <div class="${this._computeClasses(i.spans || {})}">
              ${i.component ? this._getTag(i.component, i.componentSettings) : ''}
            </div>
          `
        : (
          i.settings
            ? html`
              <nyt-components-map .settings="${i.settings}"></nyt-components-map>
            `
            : html``
        )
      })}
    `
  }
}

// declare global {
//   interface HTMLElementTagNameMap {
//     'nyt-components-map-mirror': NytComponentsMapMirror;
//   }
// }
