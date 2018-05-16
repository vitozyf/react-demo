import React from 'react';
import { Route, Link } from 'react-router-dom';
import RouterConfig from  './router-config.json';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;


const LOAD_MAP = (name) => {
  return require(`components/${name}`).default
}

const config = RouterConfig.config

const links = config.map((item, index) => {
  if (item.children) {
      return (
        <SubMenu key={item.name} title={<span><Icon type={item.icon} /><span>{item.title}</span></span>}>
            {
              item.children.map((child, num) => {
                return (
                  <Menu.Item key={child.name}>
                    <Link to={item.path + child.path}>
                      {child.title}
                    </Link>
                  </Menu.Item>
                )
              })
            }
        </SubMenu>
      )
  } else {
    return (
      <Menu.Item key={item.name}>
        <Link to={item.path}>
          <Icon type={item.icon} />
          {item.title}
        </Link>
      </Menu.Item>
    )
  }
})

const routes = config.map((item, index) => {
  if (item.children) {
    return item.children.map((child, num) => {
      return <Route key={child.name}  path={item.path + child.path} component={LOAD_MAP(`${item.name}/${child.name}`)}></Route>
    })
  } else {
    return  <Route key={item.name}  path={item.path} component={LOAD_MAP(item.name)}></Route>
  }
})

export default {
  links: links,
  routes: routes
}