import React, {Component} from 'react'
import { Menu } from 'antd';
import MyRouter from 'router/index'
// const SubMenu = Menu.SubMenu;

class AppSlide extends Component {
  state = {

  }

  toggleCollapsed = () => {

  }

  render () {
    return (
        <div>
          <Menu
            defaultSelectedKeys={['1']}
            mode="inline"
            theme="light"
            inlineCollapsed={this.state.collapsed}
          >

            {MyRouter.links}
            
          </Menu>
        </div>
    )
  }
}

export default AppSlide