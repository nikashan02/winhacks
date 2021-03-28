import React from 'react';
import '../App.css';
import { Layout, Typography, Row, Col, Button, Space } from 'antd';
const { Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;

class About extends React.Component {

  render() {
    return (
      <Layout className="site-layout">
        <Content style={{ margin: '16px 16px' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Row>
              <Col span={16}>
                <Typography style={{ paddingLeft: 200, paddingTop: 200, paddingRight: 30, minHeight: 360 }} >
                  <Title style={{fontSize: 80}}>About</Title>
                  <Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                  </Paragraph>
                  <Space>
                    <Button
                      type="primary"
                      shape="round"
                      style={{ fontSize: '15px', height: '40px', margin: '20px 0'}}>
                        <a href="/search">Github</a>
                    </Button>
                    <Button
                      type="primary"
                      shape="round"
                      style={{ fontSize: '15px', height: '40px', margin: '20px 0'}}>
                        <a href="/search">Devpost</a>
                    </Button>
                  </Space>
                </Typography>
              </Col>
            </Row>
          </div>
        </Content>
          <Footer style={{ textAlign: 'center' }}>The CKWE Business Directory</Footer>
      </Layout>
    )
  }
}

export default About;