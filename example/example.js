/* yarn example/ */
import jsdocDev from '../src'

(async () => {
  const res = await jsdocDev({
    text: 'example',
  })
  console.log(res)
})()