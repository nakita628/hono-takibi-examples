import { OpenAPIHono } from '@hono/zod-openapi'
import { getMarketsRoute } from '../routes'

const app = new OpenAPIHono()

export const marketsHandler = app.openapi(getMarketsRoute, (c) => {
  throw new Error('Not implemented')
})
