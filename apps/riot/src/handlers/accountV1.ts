import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRiotAccountV1AccountsByPuuidPuuidRoute,
  getRiotAccountV1AccountsByRiotIdGameNameTagLineRoute,
  getRiotAccountV1AccountsMeRoute,
  getRiotAccountV1ActiveShardsByGameGameByPuuidPuuidRoute,
  getRiotAccountV1RegionByGameGameByPuuidPuuidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountV1Handler = app
  .openapi(getRiotAccountV1AccountsByPuuidPuuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRiotAccountV1AccountsByRiotIdGameNameTagLineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRiotAccountV1AccountsMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRiotAccountV1ActiveShardsByGameGameByPuuidPuuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRiotAccountV1RegionByGameGameByPuuidPuuidRoute, (c) => {
    throw new Error('Not implemented')
  })
