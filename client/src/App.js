import React from 'react';
import './App.css';
import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  FileSearchOutlined,
  QuestionOutlined
} from '@ant-design/icons';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import BusinessInfo from './Pages/BusinessInfo';
import Home from './Pages/Home';
import About from './Pages/About';

const { Sider } = Layout;

class App extends React.Component {
  state = {
    selected: 'business',
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Router>
          <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1" icon={<HomeOutlined />} >
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<FileSearchOutlined />}>
              <Link to="/directory">Business Directory</Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<QuestionOutlined />}>
                <Link to="/about">About</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Switch>
            <Route path="/directory">
              <BusinessInfo />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </Layout>
    );
  }
}

export default App;
