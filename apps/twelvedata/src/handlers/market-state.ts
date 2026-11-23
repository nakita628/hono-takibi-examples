import { OpenAPIHono } from '@hono/zod-openapi'
import { getMarketStateRoute } from '../routes'

const app = new OpenAPIHono()

export const marketStateHandler = app.openapi(getMarketStateRoute, (c) => {
  throw new Error('Not implemented')
})
