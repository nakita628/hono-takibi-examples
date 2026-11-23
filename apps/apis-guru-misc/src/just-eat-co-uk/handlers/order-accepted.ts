import { OpenAPIHono } from '@hono/zod-openapi'
import { postOrderAcceptedRoute } from '../routes'

const app = new OpenAPIHono()

export const orderAcceptedHandler = app.openapi(postOrderAcceptedRoute, (c) => {
  throw new Error('Not implemented')
})
