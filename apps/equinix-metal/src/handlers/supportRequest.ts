import { OpenAPIHono } from '@hono/zod-openapi'
import { postSupportRequestsRoute } from '../routes'

const app = new OpenAPIHono()

export const supportRequestHandler = app.openapi(postSupportRequestsRoute, (c) => {
  throw new Error('Not implemented')
})
