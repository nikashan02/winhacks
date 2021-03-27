import React from 'react';
import '../App.css';
import Cards from './Cards.js'
import { Input, Layout, Select, Row, Col, Button, Modal, Slider } from 'antd';
import {
  SlidersOutlined
} from '@ant-design/icons';

const { Content, Footer } = Layout
const { Option } = Select;
const marks = {
  0: '0 km',
  100: '50 km',
};

class BusinessInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputType: 'Agriculture',
      inputAddress: '',
      inputKeywords: '',
      isModalVisible: false
    }
  }

  handleTypeChange = value => {
    this.setState({ inputType: value })
  }

  handleAddressChange = e => {
    this.setState({ inputAddress: e.target.value })
  }

  onSearch = e => {
    this.setState({ inputKeywords: e.target.value })
  }

  showModal = () => {
    this.setState({ isModalVisible: true })
  };

  handleOk = () => {
    this.setState({ isModalVisible: false }) 
  };

  handleCancel = () => {
    this.setState({ inputAddress: '' })
    this.setState({ isModalVisible: false })
  };
  
  formatter = (value) => {
    return `${value / 2} km`;
  }

  render() {
    return (
      <Layout className="site-layout">
        <Content style={{ margin: '16px 16px' }}>
          <Row>
            <Col span={9} style={{ margin: '0 10px' }}>
              <Input
                placeholder="Search for a business (separate keywords by commas)"
                allowClear
                size="large"
                onChange={this.onSearch}
              />
            </Col>
            <Col span={5} style={{ margin: '0 10px' }}>
              <Select
                defaultValue="Agriculture"
                style={{ width: "100%" }}
                onChange={this.handleTypeChange}
                size={'large'}>
                <Option value="Agriculture">Agriculture</Option>
                <Option value="Groceries">Groceries</Option>
                <Option value="Restaurants">Restaurants</Option>
                <Option value="Greenhouse">Greenhouse</Option>
              </Select>
            </Col>
            <Col span={2.5} style={{ margin: '0 10px' }}>
              <Button onClick={this.showModal} size={'large'}>
                <SlidersOutlined />
                Set Distance
              </Button>
              <Modal title="Set Distance" visible={this.state.isModalVisible} onOk={this.handleOk} onCancel={this.handleCancel}>
                <Input
                  placeholder="Address"
                  size="large"
                  onChange={this.handleAddressChange}
                />
                <Slider tipFormatter={this.formatter} marks={marks} defaultValue={0} />
              </Modal>
            </Col>
            <Col span={2} style={{ margin: '0 10px' }}>
              <Button type='primary' size={'large'}>Search</Button>
            </Col>
          </Row>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Cards />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>The CKWE Business Directory</Footer>
      </Layout>
    )
  }
}

export default BusinessInfo;