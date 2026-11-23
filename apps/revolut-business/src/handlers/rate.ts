import { OpenAPIHono } from '@hono/zod-openapi'
import { getRateRoute } from '../routes'

const app = new OpenAPIHono()

export const rateHandler = app.openapi(getRateRoute, (c) => {
  throw new Error('Not implemented')
})
