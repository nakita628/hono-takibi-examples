import { OpenAPIHono } from '@hono/zod-openapi'
import { getTrangeRoute } from '../routes'

const app = new OpenAPIHono()

export const trangeHandler = app.openapi(getTrangeRoute, (c) => {
  throw new Error('Not implemented')
})
