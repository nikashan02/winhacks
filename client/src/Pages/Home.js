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
                <Typography style={{ paddingLeft: 200, paddingTop: 200, paddingRight: 30, minHeight: 360 }} >
                  <Title style={{fontSize: 80}}>Introduction</Title>
                  <Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                  </Paragraph>
                  <Paragraph>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                  totam rem aperiam, eaque ipsa quae ab illo<Text strong> inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni </Text>dolores eos qui ratione.
                  </Paragraph>
                  <Button type="primary" shape="round" style={{ fontSize: '15px', height: '40px', margin: '20px 0'}}><a href="/search">Get Started</a></Button>
                </Typography>
              </Col>
              <Col span={12}>
                <Animation />
              </Col>
            </Row>
          </div>
        </Content>
          <Footer style={{ textAlign: 'center' }}>The CKWE Business Directory</Footer>
      </Layout>
    )
  }
}

export default Home;