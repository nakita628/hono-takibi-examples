import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2LastTradeOptionsTickerRoute } from '../routes'

const app = new OpenAPIHono()

export const optionsLastTradeHandler = app.openapi(getV2LastTradeOptionsTickerRoute, (c) => {
  throw new Error('Not implemented')
})
