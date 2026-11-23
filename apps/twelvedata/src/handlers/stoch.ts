import { OpenAPIHono } from '@hono/zod-openapi'
import { getStochRoute } from '../routes'

const app = new OpenAPIHono()

export const stochHandler = app.openapi(getStochRoute, (c) => {
  throw new Error('Not implemented')
})
