import { OpenAPIHono } from '@hono/zod-openapi'
import { postChatUpdateRoute } from '../routes'

const app = new OpenAPIHono()

export const chatUpdateHandler = app.openapi(postChatUpdateRoute, (c) => {
  throw new Error('Not implemented')
})
