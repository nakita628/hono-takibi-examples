import { OpenAPIHono } from '@hono/zod-openapi'
import { getSalesCarRoute } from '../routes'

const app = new OpenAPIHono()

export const salesHandler = app.openapi(getSalesCarRoute, (c) => {
  throw new Error('Not implemented')
})
