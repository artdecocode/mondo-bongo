import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import mondoBongo from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof mondoBongo, 'function')
  },
  async 'calls package without error'() {
    await mondoBongo()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await mondoBongo({
      text: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

export default T