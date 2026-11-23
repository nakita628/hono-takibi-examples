import { OpenAPIHono } from '@hono/zod-openapi'
import { postForwardRoute } from '../routes'

const app = new OpenAPIHono()

export const forwardHandler = app.openapi(postForwardRoute, (c) => {
  throw new Error('Not implemented')
})
