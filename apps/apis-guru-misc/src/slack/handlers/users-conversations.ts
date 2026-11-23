import { OpenAPIHono } from '@hono/zod-openapi'
import { getUsersConversationsRoute } from '../routes'

const app = new OpenAPIHono()

export const usersConversationsHandler = app.openapi(getUsersConversationsRoute, (c) => {
  throw new Error('Not implemented')
})
