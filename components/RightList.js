import { List } from 'antd'
import { connect } from 'react-redux'

const RightList = ({ list, rightList }) => {
  return (
    <div>
      <List
        itemLayout="horizontal"
        dataSource={rightList.length > 0 ? rightList : list}
        renderItem={item => (
          <List.Item
            style={{ backgroundColor: '#fff', margin: '10px', padding: '5px' }}
          >
            <List.Item.Meta
              title={
                <a href="https://ant.design">
                  {item.username}/{item.reponame}
                </a>
              }
              description={item.description}
            />
          </List.Item>
        )}
      />
    </div>
  )
}

export default connect(state => ({
  rightList: state.right.rightList
}))(RightList)
