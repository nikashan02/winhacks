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
                  This application was originall intended for finding agricultural and greenhouse businesses in the 
                  Windsor-Essex area in Ontario, Canada, however we have expanded our capabilities to include any business
                  in Canada. Check out our code and DevPost below!
                  </Paragraph>
                  <Space>
                    <Button
                      type="primary"
                      shape="round"
                      style={{ fontSize: '15px', height: '40px', margin: '20px 0'}}>
                        <a href="https://github.com/nikashan02/winhacks">Github</a>
                    </Button>
                    <Button
                      type="primary"
                      shape="round"
                      style={{ fontSize: '15px', height: '40px', margin: '20px 0'}}>
                        <a href="/">Devpost</a>
                    </Button>
                  </Space>
                </Typography>
              </Col>
            </Row>
          </div>
        </Content>
          <Footer style={{ textAlign: 'center' }}>The Radial Business Directory</Footer>
      </Layout>
    )
  }
}

export default About;