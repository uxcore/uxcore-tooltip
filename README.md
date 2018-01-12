# uxcore-tooltip

---

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]
[![Dependency Status][dep-image]][dep-url]
[![devDependency Status][devdep-image]][devdep-url] 
[![NPM downloads][downloads-image]][npm-url]

[![Sauce Test Status][sauce-image]][sauce-url]

[npm-image]: http://img.shields.io/npm/v/uxcore-tooltip.svg?style=flat-square
[npm-url]: http://npmjs.org/package/uxcore-tooltip
[travis-image]: https://img.shields.io/travis/uxcore/uxcore-tooltip.svg?style=flat-square
[travis-url]: https://travis-ci.org/uxcore/uxcore-tooltip
[coveralls-image]: https://img.shields.io/coveralls/uxcore/uxcore-tooltip.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/uxcore/uxcore-tooltip?branch=master
[dep-image]: http://img.shields.io/david/uxcore/uxcore-tooltip.svg?style=flat-square
[dep-url]: https://david-dm.org/uxcore/uxcore-tooltip
[devdep-image]: http://img.shields.io/david/dev/uxcore/uxcore-tooltip.svg?style=flat-square
[devdep-url]: https://david-dm.org/uxcore/uxcore-tooltip#info=devDependencies
[downloads-image]: https://img.shields.io/npm/dm/uxcore-tooltip.svg
[sauce-image]: https://saucelabs.com/browser-matrix/uxcore-tooltip.svg
[sauce-url]: https://saucelabs.com/u/uxcore-tooltip

## TL;DR

tooltip ui component for react

#### setup develop environment

```sh
$ git clone https://github.com/uxcore/uxcore-tooltip
$ cd uxcore-tooltip
$ npm install
$ gulp server
```

## Usage

```jsx
import Tooltip from 'uxcore-tooltip';

ReactDOM.render(
	<Tooltip
		placement="top"
		trigger="hover"
		overlay={title}
		<span>tooltip</span>
	</Tooltip>, document.getElementById('target'));
```

### demo
http://uxcore.github.io/uxcore/components/tooltip/

## API

### props

|参数|类型|默认值|说明|
|---|----|---|------|
|overlayClassName | string | uxcore | additional className added to popup overlay |
|trigger | string[] | ['hover'] | which actions cause tooltip shown. enum of 'hover','click','focus' |
|mouseEnterDelay | number | 0 | delay time to show when mouse enter.unit: s. |
|mouseLeaveDelay | number | 0.1 | delay time to hide when mouse leave.unit: s. |
|overlayStyle | Object |  | additional style of overlay node |
|wrapStyle | Object |  | additional style of wrap node |
|prefixCls | String | kuma-tooltip | prefix class name |
|onVisibleChange | Function |  | call when visible is changed |
|visible | boolean |  | whether tooltip is visible |
|defaultVisible | boolean |  | whether tooltip is visible initially |
|placement | String|Object |  | one of ['left','right','top','bottom', 'topLeft', 'topRight', 'bottomLeft', | 'bottomRight'] or alignConfig of [dom-align](https://github.com/yiminghe/dom-align)
|align | Object: alignConfig of [dom-align](https://github.com/yiminghe/dom-align) |  | only valid when placement's type | is String. value will be merged into placement's align config. note: can only accept offset and targetOffset
|overlay | React.Element |  | popup content |
|getTooltipContainer | function |  | function returning html node which will act as tooltip contaier |
