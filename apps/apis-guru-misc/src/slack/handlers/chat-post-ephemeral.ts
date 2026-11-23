import { OpenAPIHono } from '@hono/zod-openapi'
import { postChatPostEphemeralRoute } from '../routes'

const app = new OpenAPIHono()

export const chatPostEphemeralHandler = app.openapi(postChatPostEphemeralRoute, (c) => {
  throw new Error('Not implemented')
})
