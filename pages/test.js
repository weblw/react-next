import { connect } from 'react-redux'
import { incre, decre, async } from '../store/test/actionCreators'
import { Button } from 'antd'

const Test = ({ num, incre, decre, async }) => (
  <div>
    <style jsx>{`
      p {
        color: red;
      }
    `}</style>
    <p>hello world!</p>
    <h1>{num}</h1>
    <Button
      onClick={() => {
        incre(2)
      }}
    >
      +
    </Button>
    <Button
      onClick={() => {
        decre(2)
      }}
    >
      -
    </Button>
    <Button
      onClick={() => {
        async(2)
      }}
    >
      ++
    </Button>
  </div>
)
export default connect(state => ({ num: state.test.num }), {
  incre,
  decre,
  async
})(Test)
