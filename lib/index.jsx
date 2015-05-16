/**
* @author: zhouquan.yezq
* @time  : 5/16 2015
*/
import React from 'react';
import Popup from './popup.js';
import  domAlign  from 'dom-align';

import "../style/tooltips.css";


const component = React.createClass({
    mixins: [],
    propTypes: {
        jsxtrigger: React.PropTypes.arrayOf(React.PropTypes.oneOf(['click', 'hover', 'focus'])),
        jsxdir: React.PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
        onVisibleChange: React.PropTypes.func,
        jsxtext: React.PropTypes.node.isRequired
    },
    getDefaultProps() {
        return {
            prefixCls:"uxcore-tooltip",
            jsxdir:"left",
            onVisibleChange: function () {},
            jsxtrigger:['hover'],
            jsxtext:"",
            jsxtransition:""
        };
    },
    getInitialState() {
        ['toggle', 'show', 'hide'].forEach((m)=> {
            this[m] = this[m].bind(this);
        });
        return {
            visible: false,
        };
    },

    toggle() {
        if (this.state.visible) {
          this.hide();
        } else {
          this.show();
        }
    },

    setVisible(visible) {
        this.setState({
          visible: visible
        }, () => {
          this.props.onVisibleChange(this.state.visible);
        });
    },

    show() {
        this.setVisible(true);
    },

    hide() {
        this.setVisible(false);
    },
    createChainedFunction() {
      var args = arguments;
      return function chainedFunction() {
        for (var i = 0; i < args.length; i++) {
          if (args[i] && args[i].apply) {
            args[i].apply(this, arguments);
          }
        }
      };
    },
    getTipContainer() {
        if (!this.tipContainer) {
          this.tipContainer = document.createElement('div');
          document.body.appendChild(this.tipContainer);
        }
        return this.tipContainer;
    },
    renderToolTip(callback) {
        var props = this.props;
        var state = this.state;
         React.render(<Popup prefixCls={props.prefixCls}
            visible={state.visible}
            jsxdir={props.jsxdir}
            jsxtransition={props.jsxtransition}>
            {props.jsxtext}
          </Popup>,
          this.getTipContainer(), function () {
            callback(this);
          });
    },
    render() {
        var props = this.props;
        var children = props.children;
        var child = React.Children.only(children);
        var childProps = child.props || {};
        var newChildProps = {};
        var trigger = props.jsxtrigger;
        if (trigger.indexOf('click') !== -1) {
           newChildProps.onClick = this.createChainedFunction(this.toggle, childProps.onClick);
        }
        if (trigger.indexOf('hover') !== -1) {
           newChildProps.onMouseEnter = this.createChainedFunction(this.show, childProps.onMouseEnter);
           newChildProps.onMouseLeave = this.createChainedFunction(this.hide, childProps.onMouseLeave);
        }
        return React.cloneElement(child, newChildProps);
    },
    componentDidMount: function() {},
    componentDidUpdate: function() {
        var state = this.state;
        this.renderToolTip((tooltip)=> {
          if (state.visible) {
            var rootNode = React.findDOMNode(this);
            var tipNode = tooltip.getRootNode();
            var jsxdir = this.props.jsxdir;
            if (jsxdir && jsxdir.points) {
              domAlign(tipNode, rootNode, jsxdir);
            } else {
              var points = ['cr', 'cl'];
              if (jsxdir === 'right') {
                points = ['cl', 'cr'];
              } else if (jsxdir === 'top') {
                points = ['bc', 'tc'];
              } else if (jsxdir === 'bottom') {
                points = ['tc', 'bc'];
              }
              domAlign(tipNode, rootNode, {
                points: points
              });
            }
          }
        });
    },
    componentWillUnmount: function() {}

});
export default component;
