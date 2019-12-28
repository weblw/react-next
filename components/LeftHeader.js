import { connect } from 'react-redux'
import { change_category, get_list } from '../store/left/actionCreators'
import { Select } from 'antd'
const { Option } = Select
import { GET_LEFT_LIST } from '../api/leftList'

const LeftHeader = ({ category, change_category, get_list }) => {
  function handleChange(val) {
    change_category(val)
    getList(val)
  }
  async function getList(val) {
    const res = await GET_LEFT_LIST({
      category: val,
      order: 'heat',
      offset: 0,
      limit: 30
    })
    get_list(res.data.data)
  }
  return (
    <div>
      <style jsx>{`
        .left-container {
          display: flex;
          justify-content: space-between;
          line-height: 30px;
          padding: 2px 10px;
          margin: 10px;
          background-color: #fff;
        }
        .left-right span {
          margin-left: 10px;
        }
      `}</style>
      <div className="left-container">
        <div>
          <img
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPCEtLSBDcmVhdG9yOiBDb3JlbERSQVcgWDcgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iOC4zODU3bW0iIGhlaWdodD0iOC4xOTIzbW0iIHZlcnNpb249IjEuMSIgc3R5bGU9InNoYXBlLXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IHRleHQtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjsgaW1hZ2UtcmVuZGVyaW5nOm9wdGltaXplUXVhbGl0eTsgZmlsbC1ydWxlOmV2ZW5vZGQ7IGNsaXAtcnVsZTpldmVub2RkIgp2aWV3Qm94PSIwIDAgNTA5IDQ5NyIKIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KIDxkZWZzPgogIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+CiAgIDwhW0NEQVRBWwogICAgLmZpbDAge2ZpbGw6IzAwNkNGRn0KICAgIC5maWwxIHtmaWxsOndoaXRlfQogICBdXT4KICA8L3N0eWxlPgogPC9kZWZzPgogPGcgaWQ9IuWbvuWxgl94MDAyMF8xIj4KICA8bWV0YWRhdGEgaWQ9IkNvcmVsQ29ycElEXzBDb3JlbC1MYXllciIvPgogIDxyZWN0IGNsYXNzPSJmaWwwIiB3aWR0aD0iNTA5IiBoZWlnaHQ9IjQ5NyIvPgogIDxwYXRoIGlkPSJGaWxsLTEtQ29weSIgY2xhc3M9ImZpbDEiIGQ9Ik0yODUgMTM4bC0zMSAtMjQgLTMzIDI1IC0yIDIgMzUgMjcgMzQgLTI3IC0zIC0zem0xMTkgOTVsLTE1MCAxMTYgLTE1MSAtMTE2IC0yMiAxNyAxNzMgMTM0IDE3MyAtMTM0IC0yMyAtMTd6bS0xNTAgOWwtODIgLTYzIC0yMyAxNyAxMDUgODEgMTA0IC04MSAtMjIgLTE3IC04MiA2M3oiLz4KIDwvZz4KPC9zdmc+Cg=="
            alt=""
          />
          <span>掘金</span>
          <Select
            defaultValue={category}
            style={{ width: 100 }}
            onChange={handleChange}
          >
            <Option value="all">首页</Option>
            <Option value="frontend">前端</Option>
            <Option value="backend">后端</Option>
          </Select>
        </div>
        <div className="left-right">
          <span>热门</span>
          <span>最新</span>
        </div>
      </div>
    </div>
  )
}

export default connect(
  state => ({
    category: state.left.category,
    leftList: state.left.leftList
  }),
  {
    change_category,
    get_list
  }
)(LeftHeader)
