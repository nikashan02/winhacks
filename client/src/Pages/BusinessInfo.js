import React from 'react';
import '../App.css';
import Cards from './Cards.js'
import { Input, Layout, Select, Row, Col, Button, Modal, Slider, Typography } from 'antd';
import {
  SlidersOutlined
} from '@ant-design/icons';
import axios from 'axios';

const { Content, Footer } = Layout
const { Option } = Select;
const marks = {
  0: '0 km',
  100: '50 km',
};
const { Paragraph, Title } = Typography;

class BusinessInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputType: 'Select a type',
      inputAddress: '',
      inputKeywords: '',
      isModalVisible: false,
      bySearch: false,
      radius: 0,
      loadings: [],
      data: []
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
    if (e.target.value !== '') {
      this.setState({bySearch: true});
    } else {
      this.setState({bySearch: false}); 
    }
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

  setRadius = (value) => {
    let metres = value * 500;
    this.setState({ radius: metres });
  }

  searchClick = (index) => {
    let keywords = this.state.inputKeywords.split(', ');
    let address = this.state.inputAddress;
    let radius = this.state.radius;
    
    if (radius > 0 && (keywords.length !== 0 || this.state.inputType !== 'Select a type') && address !== '') {

      this.setState(({ loadings }) => {
        const newLoadings = [...loadings];
        newLoadings[index] = true;
  
        return {
          loadings: newLoadings,
        };
      });

      if (this.state.inputType !== 'Select a type') {
        keywords = [this.state.inputType];
      }
      const baseURL = process.env.REACT_APP_BASE_URL;
      const api = axios.create({baseURL});
      api.post('/search', {'addr': address, 'radius': radius, 'keywords': keywords})
        .then((res) => {
          this.setState({ data: res.data });

          this.setState(({ loadings }) => {
            const newLoadings = [...loadings];
            newLoadings[index] = false;
    
            return {
              loadings: newLoadings,
            };
          });

        })
    }
  }

  render() {

    const { loadings } = this.state;

    return (
      <Layout className="site-layout">
        <Content style={{ margin: '16px 16px' }}>
          <Title style={{fontSize: 40}}>Search for a business</Title>
          <Row gutter={16}>
            <Col span={9} >
              <Input
                placeholder="Enter some keywords (separate by commas)"
                allowClear
                size="large"
                onChange={this.onSearch}
              />
            </Col>
            <Col span={1}>
              <Paragraph style={{ fontSize: '25px', textAlign: 'center'}}>or</Paragraph>
            </Col>
            <Col span={5} >
              <Select
                showSearch
                disabled={this.state.bySearch}
                defaultValue="Select a type"
                style={{ width: "100%" }}
                onChange={this.handleTypeChange}
                size={'large'}>
                <Option value="Select a type">Select a type</Option>
                <Option value="Agriculture">Agriculture</Option>
                <Option value="Groceries">Groceries</Option>
                <Option value="Restaurants">Restaurants</Option>
                <Option value="Greenhouse">Greenhouse</Option>
              </Select>
            </Col>
            <Col span={3} >
              <Button onClick={this.showModal} size={'large'} style={{width: '100%'}}>
                <SlidersOutlined />
                Set Distance
              </Button>
              <Modal title="Set Distance" visible={this.state.isModalVisible} onOk={this.handleOk} onCancel={this.handleCancel}>
                <Input
                  placeholder="Address"
                  size="large"
                  onChange={this.handleAddressChange}
                />
                <Slider tipFormatter={this.formatter} onChange={this.setRadius} marks={marks} defaultValue={0} />
              </Modal>
            </Col>
            <Col span={2} >
              <Button type='primary' size={'large'} loading={loadings[0]} onClick={() => this.searchClick(0)}>Search</Button>
            </Col>
          </Row>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Cards data={this.state.data} />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>The CKWE Business Directory</Footer>
      </Layout>
    )
  }
}

export default BusinessInfo;