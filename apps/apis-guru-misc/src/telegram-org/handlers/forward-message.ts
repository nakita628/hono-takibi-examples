import { OpenAPIHono } from '@hono/zod-openapi'
import { postForwardMessageRoute } from '../routes'

const app = new OpenAPIHono()

export const forwardMessageHandler = app.openapi(postForwardMessageRoute, (c) => {
  throw new Error('Not implemented')
})
