import { OpenAPIHono } from '@hono/zod-openapi'
import { postRatesCalculateRoute } from '../routes'

const app = new OpenAPIHono()

export const ratesHandler = app.openapi(postRatesCalculateRoute, (c) => {
  throw new Error('Not implemented')
})
