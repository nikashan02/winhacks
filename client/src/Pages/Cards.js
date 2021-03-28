import React from 'react';
import '../App.css';
import { Row, Col, Card, Carousel, Space, Tag } from 'antd';
import {
  LinkOutlined
} from '@ant-design/icons';

class Cards extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {

    let Cards = [];

    for (let i = 0; i < this.props.data.length; ++i) {
      let pictures = [];
      let types = [];
      let pnum = '';

      if (this.props.data[i].photos) {
        for (let j = 0; j < this.props.data[i].photos.length; ++j) {
          pictures.push(<img alt='' height="300" src={`/api/photo/${this.props.data[i].photos[j].photo_reference}`} />)
        }
      } else {
        pictures.push(<img alt='' src={"https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"} />)
      }

      for (let j = 0; j < this.props.data[i].types.length; ++j) {
        types.push(<Tag>{this.props.data[i].types[j]}</Tag>);
      }

      if (this.props.data[i].phoneNum) {
        pnum = this.props.data[i].phoneNum;
      }

      Cards.push(
        <Col style={{ margin: '8px 0' }} span={6}>
          <Card title={this.props.data[i].name}>
            <Carousel autoplay>
              {pictures}
            </Carousel>
            <br></br>
            <p><strong>Phone Number: </strong>{pnum}</p>
            <p><strong>Address: </strong>{this.props.data[i].address}</p>
            <p><strong>Status: </strong>{this.props.data[i].status}</p>
            <Space><LinkOutlined /><a href={this.props.data[i].website}>{this.props.data[i].website}</a></Space>
            <br></br>
            {types}
          </Card>
        </Col>
      )
    }

    return (
      <div>
        <Row gutter={16}>
          {Cards}
        </Row>
      </div>
    )
  }
}

export default Cards;