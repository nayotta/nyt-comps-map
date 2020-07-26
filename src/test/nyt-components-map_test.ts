import { NytComponentsMap } from '../nyt-components-map.js';
import { fixture, html } from '@open-wc/testing';

const assert = chai.assert;

suite('nyt-components-map', () => {
  test('is defined', () => {
    const el = document.createElement('nyt-components-map');
    assert.instanceOf(el, NytComponentsMap);
  });

  test('renders with default values', async () => {
    const el = await fixture(html`<nyt-components-map></nyt-components-map>`);
    assert.shadowDom.equal(
      el,
      ``
    );
  });

  test('renders with a set name', async () => {
    const settings = [{
      type: 'col',
      spans: {
        normal: 4,
        xs: 24,
        sm: 24,
        md: 12,
        lg: 6,
        xl: 3
      },
      components: 'div'
    }, {
      type: 'col',
      spans: {
        normal: 12,
        xs: 24,
        sm: 24,
        md: 12,
        lg: 12,
        xl: 12
      },
      components: 'p'
    }, {
      type: 'row',
      settings: [{
        type: 'col',
        spans: {
          normal: 4,
          xs: 24,
          sm: 24,
          md: 12,
          lg: 6,
          xl: 3
        },
        components: 'span'
      }]
    }]
    const el = await fixture(html`<nyt-components-map .settings="${settings}"></nyt-components-map>`);
    assert.shadowDom.equal(
      el,
      `
      <div class="col-4 col-lg-6 col-md-12 col-sm-24 col-xl-3 col-xs-24">
      </div>
      <div class="col-12 col-lg-12 col-md-12 col-sm-24 col-xl-12 col-xs-24">
      </div>
      <nyt-components-map-mirror>
      </nyt-components-map-mirror>
    `
    );
  });
});
