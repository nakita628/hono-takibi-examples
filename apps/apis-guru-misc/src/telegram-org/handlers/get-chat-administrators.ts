import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetChatAdministratorsRoute } from '../routes'

const app = new OpenAPIHono()

export const getChatAdministratorsHandler = app.openapi(postGetChatAdministratorsRoute, (c) => {
  throw new Error('Not implemented')
})
