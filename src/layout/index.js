import React, {Component} from 'react'
import {Layout} from 'antd'
import AppSlide from './slide'
import MyRouter from 'router/index'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from 'components/Home'

class AppLayout extends Component{
  render () {
    return (
      <Layout>
        <Layout.Header>header</Layout.Header>
          <Router>
            <Layout>
              <Layout.Sider>
                <AppSlide></AppSlide>
              </Layout.Sider>
                  <Layout.Content>
                      <Route 
                        key='home'
                        path='/'
                        exact
                        component={Home}>
                      </Route>
                      {MyRouter.routes}
                  </Layout.Content>
            </Layout>
          </Router>
        <Layout.Footer>footer</Layout.Footer>
      </Layout>
    )
  }
}

export default AppLayout