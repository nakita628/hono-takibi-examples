import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeregisterResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const deregisterResourceHandler = app.openapi(postDeregisterResourceRoute, (c) => {
  throw new Error('Not implemented')
})
