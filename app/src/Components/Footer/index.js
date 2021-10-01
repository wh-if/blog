import React, { Component } from 'react';

class Footer extends Component {

  render() {

    return (
      <footer id='footer'>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <li><a href="https://github.com/wh-if" target="_blank"><i className="fa fa-github"></i></a></li>
                <li><a href="https://im.qq.com/index"><i className="fa fa-qq" target="_blank"></i></a></li>
                <li><a href="https://weixin.qq.com/"><i className="fa fa-wechat" target="_blank"></i></a></li>
                <li><a href="https://www.foxmail.com/" target="_blank"><i className="fa fa-envelope"></i></a></li>
              </ul>
              <p>
                <a href="http://beian.miit.gov.cn/" target="_blank">湘ICP备2021004774号</a>
              </p>
              <p>
                <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=43060202000440">
                  <img width='12' src="img/beian.png" />
                  <span style={{ paddingLeft: 8 }}>湘公网安备 43060202000440号</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
