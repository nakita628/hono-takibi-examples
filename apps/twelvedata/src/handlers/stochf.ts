import { OpenAPIHono } from '@hono/zod-openapi'
import { getStochfRoute } from '../routes'

const app = new OpenAPIHono()

export const stochfHandler = app.openapi(getStochfRoute, (c) => {
  throw new Error('Not implemented')
})
