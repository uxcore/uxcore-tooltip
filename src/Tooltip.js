import React from 'react';
import RcTooltip from 'rc-tooltip';
import assign from 'object-assign';

export default class Tooltip extends RcTooltip {
	constructor(props){
		super(props);
	}
}
Tooltip.displayName = 'uxcore-tooltip';
Tooltip.propTypes = RcTooltip.propTypes;
Tooltip.defaultProps = assign(Tooltip.defaultProps, {
	prefixCls: 'kuma-tooltip'
});
