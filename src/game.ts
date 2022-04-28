import { Spawner } from '../node_modules/decentraland-builder-scripts/spawner'
import ZestyBanner, { Props } from './banner'

const banner = new ZestyBanner()
const spawner = new Spawner<Props>(banner)

spawner.spawn(
  'zestyBanner',
  new Transform({
    position: new Vector3(8, 1, 8),
    scale: new Vector3(2, 2, 1)
  }),
  {
    network: 'polygon',
    space: '999999',
    format: 'square',
    style: 'transparent',
    beacon: true
  }
)
