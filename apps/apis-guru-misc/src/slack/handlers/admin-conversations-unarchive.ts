import { OpenAPIHono } from '@hono/zod-openapi'
import { postAdminConversationsUnarchiveRoute } from '../routes'

const app = new OpenAPIHono()

export const adminConversationsUnarchiveHandler = app.openapi(
  postAdminConversationsUnarchiveRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
