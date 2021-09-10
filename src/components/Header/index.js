import React from "react";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <div className="nav navbar-fixed-top navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="">
              SSR
            </a>
          </div>
          <div>
            <ul className="nav navbar-nav">
              <li>
                <Link to="/">首页</Link>
              </li>
              <li>
                <Link to="/counter">计数器</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
