import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import jsdocDev from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof jsdocDev, 'function')
  },
  async 'calls package without error'() {
    await jsdocDev()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await jsdocDev({
      text: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

export default T