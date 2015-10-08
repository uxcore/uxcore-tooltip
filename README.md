# uxcore-tooltip

---

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

```js
var Tooltip = require('uxcore-tooltip');
React.render(
	<Tooltip
		placement="top"
		trigger="hover"
		title={title}
		delay={0.1}
		<span>tooltip</span>
	</Tooltip>, document.getElementById('target'));
```

### demo
http://uxcore.github.io/uxcore/components/tooltip/

## API

### props

|参数|说明|类型|默认值|
|---|----|---|------|
|placement|气泡框位置，可选 `top/left/right/bottom`|string|top|
|title|提示文字|string/jsx|无|
|trigger|触发方式，可选`hover/click`|string|hover|
|delay|延迟|number|0.1|
