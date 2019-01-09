import React from 'react';
import Tooltip from '../src/index';
import Button from 'uxcore-button';

export default class Demo extends React.Component {
  render() {
    const overlay = <div style={{}}>提示文字</div>;
    const longOverlay = <div style={{}}>特别特别长的提示文字特别特别长的提示文字特别特别长的提示文字特别特别长的提示文字</div>;
    return (
      <div className="demo">
        <div>
          <h3>讲解：鼠标 Hover 出现提示</h3>
          <Tooltip overlay={overlay} placement="bottom">
            <span>hover出现提示</span>
          </Tooltip>
        </div>
        <div>
          <h3>讲解：鼠标点击出现提示</h3>
          <div className="container">
            <div className="top">
              <Tooltip overlayClassName="kuma-tooltip-dark" overlay={overlay} placement="topLeft" trigger={['click']}>
                <Button size="small" type="outline">上左</Button>
              </Tooltip>
              <Tooltip overlayClassName="kuma-tooltip-dark" overlay={longOverlay} placement="top" trigger={['click']}>
                <Button style={{ marginLeft: 10 }} size="small" type="outline">上</Button>
              </Tooltip>
              <Tooltip overlay={longOverlay} placement="topRight" trigger={['click']} overlayStyle={{ maxWidth: 200 }}>
                <Button style={{ marginLeft: 10 }} size="small" type="outline">上右</Button>
              </Tooltip>
            </div>
            <div className="bottom">
              <Tooltip overlay={overlay} placement="bottomLeft" trigger={['click']}>
                <Button size="small" type="outline">下左</Button>
              </Tooltip>
              <Tooltip overlay={overlay} placement="bottom" trigger={['click']}>
                <Button style={{ marginLeft: 10 }} size="small" type="outline">下</Button>
              </Tooltip>
              <Tooltip overlay={overlay} placement="bottomRight" trigger={['click']}>
                <Button style={{ marginLeft: 10 }} size="small" type="outline">下右</Button>
              </Tooltip>
            </div>
            <div className="left">
              <Tooltip overlay={overlay} placement="leftTop" trigger={['click']}>
                <Button size="small" type="outline">左上</Button>
              </Tooltip>
              <Tooltip overlay={overlay} placement="left" trigger={['click']}>
                <Button style={{ marginTop: 10 }} size="small" type="outline">左</Button>
              </Tooltip>
              <Tooltip overlay={overlay} placement="leftBottom" trigger={['click']}>
                <Button style={{ marginTop: 10 }} size="small" type="outline">左下</Button>
              </Tooltip>
            </div>
            <div className="right">
              <Tooltip overlay={overlay} placement="rightTop" trigger={['click']}>
                <Button size="small" type="outline">右上</Button>
              </Tooltip>
              <Tooltip overlay={overlay} placement="right" trigger={['click']}>
                <Button style={{ marginTop: 10 }} size="small" type="outline">右</Button>
              </Tooltip>
              <Tooltip overlay={overlay} placement="rightBottom" trigger={['click']}>
                <Button style={{ marginTop: 10 }} size="small" type="outline">右下</Button>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
