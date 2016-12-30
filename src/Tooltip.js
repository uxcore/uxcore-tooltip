import RcTooltip from 'rc-tooltip';
import assign from 'object-assign';

export default class Tooltip extends RcTooltip {}
Tooltip.displayName = 'uxcore-tooltip';
Tooltip.propTypes = RcTooltip.propTypes;

Tooltip.defaultProps = assign(RcTooltip.defaultProps, {
  prefixCls: 'kuma-tooltip',
  transitionName: 'tip-slide',
});
