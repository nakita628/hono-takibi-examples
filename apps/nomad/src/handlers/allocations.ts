import { OpenAPIHono } from '@hono/zod-openapi'
import { getAllocationsRoute } from '../routes'

const app = new OpenAPIHono()

export const allocationsHandler = app.openapi(getAllocationsRoute, (c) => {
  throw new Error('Not implemented')
})
