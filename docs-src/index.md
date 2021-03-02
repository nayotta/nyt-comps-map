---
layout: page.11ty.cjs
title: <nyt-comps-map> ⌲ Home
---

# &lt;nyt-comps-map>

`<nyt-comps-map>` 用于配置具有栅格系统的响应式页面布局，通过 `settings` 配置，自由调节页面布局。

## As easy as HTML

<section class="columns">
  <div>

`<nyt-comps-map>` 是一个 `custom elements` ，可在任何现代浏览器上使用。所以，它也可以结合其他任何库/框架使用。

```html
<nyt-comps-map></nyt-comps-map>
```

  </div>
  <div>

<nyt-comps-map></nyt-comps-map>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<nyt-comps-map>` can be configured with attributed in plain HTML.

```html
<nyt-comps-map settings="[{ 'type': 'col', 'spans': { 'normal': 4 }, 'component': 'button' }]"></nyt-comps-map>
```

  </div>
  <div>

<nyt-comps-map settings="[{ 'type': 'col', 'spans': { 'normal': 4 }, 'component': 'button' }]"></nyt-comps-map>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<nyt-comps-map>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const settings=[{
  type: 'col',
  spans: {
    normal: 24
  },
  component: 'button'
}];

render(html`
  <h2>This is a &lt;nyt-comps-map&gt;</h2>
  <nyt-comps-map .settings=${JSON.stringify(settings)}></nyt-comps-map>
`, document.body);
```

  </div>
  <div>

<h2>This is a &lt;nyt-comps-map&gt;</h2>
<nyt-comps-map settings="[]"></nyt-comps-map>

  </div>
</section>
