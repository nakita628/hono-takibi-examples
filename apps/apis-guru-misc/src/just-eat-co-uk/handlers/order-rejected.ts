import { OpenAPIHono } from '@hono/zod-openapi'
import { postOrderRejectedRoute } from '../routes'

const app = new OpenAPIHono()

export const orderRejectedHandler = app.openapi(postOrderRejectedRoute, (c) => {
  throw new Error('Not implemented')
})
