import React from 'react';
import '../App.css';
import { Layout, Typography, Row, Col, Button } from 'antd';
import Animation from './Animation'

const { Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;

class Home extends React.Component {

  render() {
    return (
      <Layout className="site-layout">
        <Content style={{ margin: '16px 16px' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Row>
              <Col span={12}>
                <Typography style={{ paddingLeft: 200, paddingTop: 150, paddingRight: 30, minHeight: 360 }} >
                  <Title style={{fontSize: 70}}>Welcome to the Radial Business Directory</Title>
                  <Paragraph>
                  This directory allows anyone to search for local and retail businesses in a given radius from 
                  an address. Search by category, business name, phone number, or any other combination of keywords of your choosing!
                  </Paragraph>
                  <Button type="primary" shape="round" style={{ fontSize: '15px', height: '40px', margin: '20px 0'}}><a href="/#/directory">Get Started</a></Button>
                </Typography>
              </Col>
              <Col span={12}>
                <Animation />
              </Col>
            </Row>
          </div>
        </Content>
          <Footer style={{ textAlign: 'center' }}>The Radial Business Directory</Footer>
      </Layout>
    )
  }
}

export default Home;
