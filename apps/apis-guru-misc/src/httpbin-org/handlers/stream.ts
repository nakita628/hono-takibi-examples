import { OpenAPIHono } from '@hono/zod-openapi'
import { getStreamNRoute } from '../routes'

const app = new OpenAPIHono()

export const streamHandler = app.openapi(getStreamNRoute, (c) => {
  throw new Error('Not implemented')
})
