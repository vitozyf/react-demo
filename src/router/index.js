import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from 'components/Home';
import RouterConfig from  './router-config.json';
import {Layout} from 'antd';


const LOAD_MAP = (name) => {
  return require(`components/${name}`).default
}

class CreatRouter extends Component {


  render () {

    const cinfigs = RouterConfig.config

    const links = cinfigs.map((item, index) => {
      if (item.children) {
          return (
            <li  key={index}>
              <div>{item.title}</div>
              <ul>
                {
                  item.children.map((child, num) => {
                    return (
                      <li key={num}>
                        <Link to={item.path + child.path}>
                          {child.title}
                        </Link>
                      </li>
                    )
                  })
                }
              </ul>
            </li>
          )
      } else {
        return (
          <li key={index}>
            <Link to={item.path}>
              {item.title}
            </Link>
          </li>
        )
      }
    })

    const routes = cinfigs.map((item, index) => {
      if (item.children) {
        return item.children.map((child, num) => {
          return <Route key={num}  path={item.path + child.path} component={LOAD_MAP(`${item.name}/${child.name}`)}></Route>
        })
      } else {
        return  <Route key={index}  path={item.path} component={LOAD_MAP(item.name)}></Route>
      }
    })

    return (
      <Router>
        {/* <div>
          <div className="slide">
            <ul>
              <li><Link to={'/'}>首页</Link></li>
              {links}
            </ul>
          </div>
          <div className="content">
            <Route exact path="/" component={Home}></Route>
            {routes}
          </div>
        </div> */}
        <Layout>
          <Layout.Header>header</Layout.Header>
          <Layout>
            <Layout.Sider>
              <ul>
                <li><Link to={'/'}>首页</Link></li>
                {links}
              </ul>
            </Layout.Sider>
            <Layout.Content>
              <Route exact path="/" component={Home}></Route>
              {routes}
            </Layout.Content>
          </Layout>
          <Layout.Footer>footer</Layout.Footer>
        </Layout>
      </Router>
    )
  }
}

export default CreatRouter