import React from 'react';
import RcTooltip from 'rc-tooltip';

export default class Tooltip extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		var transitionName = ({
			top: 'zoom-down',
			bottom: 'zoom-up',
			left: 'zoom-right',
			right: 'zoom-left'
	    })[this.props.placement];
		return (
			<RcTooltip
				prefixCls="kuma-tooltip"
				transitionName={transitionName}
				delay={this.props.delay}
				overlay={this.props.title}
				trigger={this.props.trigger}
				placement={this.props.placement}>
				{this.props.children}
			</RcTooltip>
		)
	}
}
Tooltip.displayName = 'uxcore-tooltip';
Tooltip.propTypes = {
	placement: React.PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
	tigger: React.PropTypes.oneOf(['hover', 'click']),
	delay: React.PropTypes.number,
	title: React.PropTypes.string
};
Tooltip.defaultProps = {
	placement: 'top',
	trigger: 'hover',
	delay: 0.1,
	title: ''
};
