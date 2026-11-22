import { OpenAPIHono } from '@hono/zod-openapi'
import { getFuturesV1AggsTickerRoute } from '../routes'

const app = new OpenAPIHono()

export const futuresAggregatesHandler = app.openapi(getFuturesV1AggsTickerRoute, (c) => {
  throw new Error('Not implemented')
})
