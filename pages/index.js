import React from 'react'
import { Row, Col } from 'antd'

import LeftHeader from '../components/LeftHeader'
import LeftList from '../components/LeftList'
import RightHeader from '../components/RightHeader'
import RightList from '../components/RightList'

import { GET_LEFT_LIST } from '../api/leftList'
import { GET_RIGHT_LIST } from '../api/rightList'

const Index = ({ leftList, rightList }) => (
  <div>
    <style jsx>{`
      .container {
        font-size: 16px;
        background-color: #ccc;
      }
    `}</style>
    <div className="container">
      <Row>
        <Col span={8}>
          <LeftHeader />
          <LeftList list={leftList} />
        </Col>
        <Col span={16}>
          <RightHeader />
          <Row>
            <Col span={12}>
              <RightList list={rightList} />
            </Col>
            <Col span={12}>
              <RightList list={rightList} />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  </div>
)
Index.getInitialProps = async ({ req }) => {
  const res1 = await GET_LEFT_LIST({
    category: 'all',
    order: 'heat',
    offset: 0,
    limit: 30
  })
  const res2 = await GET_RIGHT_LIST({
    category: 'trending',
    period: 'day',
    lang: 'javascript',
    offset: 0,
    limit: 30
  })
  return {
    leftList: res1.data.data,
    rightList: res2.data.data
  }
}

export default Index
