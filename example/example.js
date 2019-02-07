/* yarn example/ */
import mondoBongo from '../src'

(async () => {
  const res = await mondoBongo({
    text: 'example',
  })
  console.log(res)
})()