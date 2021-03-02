import { LitElement, html, customElement, property } from 'lit-element'
import { unsafeHTML } from 'lit-html/directives/unsafe-html'

import { styles } from './nyt-comps-map.css'

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
@customElement('nyt-comps-map')
export class NytCompsMap extends LitElement {
  static styles = styles

  /**
   * configs settings
   */
  @property({
    type: Array
  })
  settings: Settings[] = []

  _getTag(component: string, settings?: object) {
    return settings ? html`
      ${unsafeHTML(
        `<${component} settings='${JSON.stringify(settings)}'></${component}>`
      )
      }
    ` : html`
      ${unsafeHTML(
        `<${component}></${component}>`
      )
      }
    `
  }

  _computeClasses(spans: Spans) {
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
              <nyt-comps-map .settings="${i.settings}"></nyt-comps-map>
            `
            : html``
        )
      })}
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nyt-comps-map': NytCompsMap;
  }
}
