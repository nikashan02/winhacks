import React from 'react';
import './App.css';
import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  FileSearchOutlined,
  QuestionOutlined
} from '@ant-design/icons';
import BusinessInfo from './Pages/BusinessInfo';

const { Sider } = Layout;

class App extends React.Component {
  state = {
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
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<HomeOutlined />}>
              Home
            </Menu.Item>
            <Menu.Item key="2" icon={<FileSearchOutlined />}>
              Business Directory
            </Menu.Item>
            <Menu.Item key="3" icon={<QuestionOutlined />}>
              About
            </Menu.Item>
          </Menu>
        </Sider>
        <BusinessInfo/>
      </Layout>
    );
  }
}

export default App;
