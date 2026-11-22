import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1MarketstatusNowRoute, getV1MarketstatusUpcomingRoute } from '../routes'

const app = new OpenAPIHono()

export const referenceStocksMarketHandler = app
  .openapi(getV1MarketstatusNowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MarketstatusUpcomingRoute, (c) => {
    throw new Error('Not implemented')
  })
