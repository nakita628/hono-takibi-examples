import { OpenAPIHono } from '@hono/zod-openapi'
import { getMarketMoversMarketRoute } from '../routes'

const app = new OpenAPIHono()

export const marketMoversHandler = app.openapi(getMarketMoversMarketRoute, (c) => {
  throw new Error('Not implemented')
})
