import { Select } from 'antd'
const { Option } = Select
import { connect } from 'react-redux'
import { change_lang, get_list } from '../store/right/actionCreators'
import { GET_RIGHT_LIST } from '../api/rightList'

const RightHeader = ({ lang, change_lang, get_list }) => {
  function handleChange(val) {
    change_lang(val)
    getList(val)
  }
  async function getList(val) {
    const res = await GET_RIGHT_LIST({
      category: 'trending',
      period: 'day',
      lang: val,
      offset: 0,
      limit: 30
    })
    get_list(res.data.data)
  }
  return (
    <div>
      <style jsx>{`
        .right-container {
          display: flex;
          justify-content: space-between;
          line-height: 30px;
          padding: 2px 10px;
          margin: 10px;
          background-color: #fff;
        }
        .icon-img {
          height: 30px;
        }
      `}</style>
      <div className="right-container">
        <div>
          <img
            src="https://e-gold-cdn.xitu.io/static/github.png?9140c37"
            alt=""
            className="icon-img"
          />
          <span>Github</span>
        </div>
        <div>
          <Select
            defaultValue="javascript"
            style={{ width: 100 }}
            onChange={handleChange}
          >
            <Option value="javascript">JavaScript</Option>
            <Option value="css">CSS</Option>
            <Option value="html">HTML</Option>
          </Select>
        </div>
      </div>
    </div>
  )
}

export default connect(
  state => ({
    lang: state.right.lang,
    rightList: state.right.rightList
  }),
  {
    change_lang,
    get_list
  }
)(RightHeader)
