import React from 'react';
import '../App.css';
import { Input, Layout, Breadcrumb } from 'antd';

const { Content, Footer } = Layout
const { Search } = Input;
const onSearch = value => console.log(value);

class BusinessInfo extends React.Component {
  render() {
    return(
      <Layout className="site-layout">
        <Content style={{ margin: '16px 16px' }}>
          <Search
            placeholder="Search for a business"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
          />
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Businesses</Breadcrumb.Item>
            <Breadcrumb.Item>The Old Mill</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            Business Info
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>The CKWE Business Directory</Footer>
      </Layout>
    )
  }
}

export default BusinessInfo;