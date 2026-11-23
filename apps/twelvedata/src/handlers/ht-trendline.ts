import { OpenAPIHono } from '@hono/zod-openapi'
import { getHtTrendlineRoute } from '../routes'

const app = new OpenAPIHono()

export const htTrendlineHandler = app.openapi(getHtTrendlineRoute, (c) => {
  throw new Error('Not implemented')
})
