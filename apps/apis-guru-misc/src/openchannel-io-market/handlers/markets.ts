import { OpenAPIHono } from '@hono/zod-openapi'
import { getMarketsThisRoute } from '../routes'

const app = new OpenAPIHono()

export const marketsHandler = app.openapi(getMarketsThisRoute, (c) => {
  throw new Error('Not implemented')
})
