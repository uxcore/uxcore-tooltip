var Tooltip = require('../lib/index.jsx');

var jsxdom=(<div>
		<div style={{margin: '50px 200px'}}>
		    <Tooltip jsxdir="right" 
					jsxtrigger="hover" 
					jsxtext={<span>i am a tooltip</span>}
					jsxtransition="">
						<a href="#" >right has tooltip</a>
			</Tooltip>
		</div>
		<div style={{margin: '50px 200px'}}>
		    <Tooltip jsxdir="left" 
					jsxtrigger="hover" 
					jsxtext={<span>i am a tooltip</span>}
					jsxtransition="">
						<a href="#" >left has tooltip</a>
			</Tooltip>
		</div>
		<div style={{margin: '50px 200px'}}>
		    <Tooltip jsxdir="top" 
					jsxtrigger="hover" 
					jsxtext={<span>i am a tooltip</span>}
					jsxtransition="">
						<a href="#" >top has tooltip</a>
			</Tooltip>
		</div>
		<div style={{margin: '50px 200px'}}>
		    <Tooltip jsxdir="bottom" 
					jsxtrigger="hover" 
					jsxtext={<span>i am a tooltip</span>}
					jsxtransition="">
						<a href="#" >bottom has tooltip</a>
			</Tooltip>
		</div>
	</div>);
React.render(jsxdom, document.getElementById('content'))