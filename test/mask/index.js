import { makeTestSuite } from 'zoroaster'
import Context from '../context'
import mondoBongo from '../../src'

const ts = makeTestSuite('test/result', {
  async getResults(input) {
    const res = await mondoBongo({
      text: input,
    })
    return res
  },
  context: Context,
})

// export default ts
