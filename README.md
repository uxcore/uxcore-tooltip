# uxcore-tips
---

uxcore-tips ui component for react


```sh
$ git clone https://github.com/uxcore/uxcore-tips
$ cd uxcore-tips
$ npm install
$ npm run dev
```

then nav http://localhost:9090/example/ to see the demo


## Apply scope

* some customise tooltip

	```
		<Tooltip jsxdir="" 
			jsxtrigger="hover" 
			jsxtext={<span>i am a tooltip</span>}
			jsxtransition={this.state.transition}>
			<a href="#">here has tooltip</a>
		</Tooltip>
	```

## Attr

* jsxdir
  * left
  * right
  * top
  * bottom
* jsxtrigger
  * hover
  * focus
  * click
* jsxtext
  * text or html
* jsxtransition
  * css3 transition animation
 

