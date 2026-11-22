import { OpenAPIHono } from '@hono/zod-openapi'
import { getStreamHepRoute } from '../routes'

const app = new OpenAPIHono()

export const streamHandler = app.openapi(getStreamHepRoute, (c) => {
  throw new Error('Not implemented')
})
