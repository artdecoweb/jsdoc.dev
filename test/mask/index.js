import { makeTestSuite } from 'zoroaster'
import Context from '../context'
import jsdocDev from '../../src'

const ts = makeTestSuite('test/result', {
  async getResults(input) {
    const res = await jsdocDev({
      text: input,
    })
    return res
  },
  context: Context,
})

// export default ts
