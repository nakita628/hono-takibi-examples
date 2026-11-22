import { OpenAPIHono } from '@hono/zod-openapi'
import { getMarketdataExchangeComponentsRoute, getMarketdataSnapshotRoute } from '../routes'

const app = new OpenAPIHono()

export const marketDataHandler = app
  .openapi(getMarketdataExchangeComponentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketdataSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
