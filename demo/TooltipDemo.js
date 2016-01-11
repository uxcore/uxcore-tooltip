import React from 'react';
import Tooltip from '../src/index';

export default class Demo extends React.Component {
	render(){
		return (
			<div className="demo">
				<div>
					<Tooltip overlay="提示文字" placement="bottom">
						<span>鼠标hover出现提示</span>
					</Tooltip>
				</div>
				<div>
					<p>讲解：鼠标点击出现提示</p>
					<Tooltip overlay="提示文字" placement="top" trigger={['click']}>
						<span>上</span>
					</Tooltip>
					<Tooltip overlay="提示文字" placement="bottom" trigger={['click']}>
						<span>下</span>
					</Tooltip>
					<Tooltip overlay="提示文字" placement="left" trigger={['click']}>
						<span>左</span>
					</Tooltip>
					<Tooltip overlay="提示文字" placement="right" trigger={['click']}>
						<span>右</span>
					</Tooltip>
				</div>
			</div>
		);
	}
}
