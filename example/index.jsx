import '../style/kuma/src/less/kuma.less';
import React from 'react';
import Tooltip from '../index.js';


React.render(
	<div>
		<div>
			<Tooltip title="提示文字" placement="bottom">
				<span>鼠标hover出现提示</span>
			</Tooltip>
		</div>
		<div>
			<Tooltip title="提示文字" placement="right" trigger="click">
				<span>鼠标点击出现提示</span>
			</Tooltip>
		</div>
	</div>,
	document.getElementById('content')
);
