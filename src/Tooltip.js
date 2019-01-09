import RcTooltip from 'rc-tooltip';

export default class Tooltip extends RcTooltip {
    static displayName = 'uxcore-tooltip'

    static propTypes = {
        ...RcTooltip.propTypes,
    }

    static defaultProps = {
        ...RcTooltip.defaultProps,
        prefixCls: 'kuma-tooltip',
        transitionName: 'tip-slide',
    }
}
