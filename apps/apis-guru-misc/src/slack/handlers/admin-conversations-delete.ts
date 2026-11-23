import { OpenAPIHono } from '@hono/zod-openapi'
import { postAdminConversationsDeleteRoute } from '../routes'

const app = new OpenAPIHono()

export const adminConversationsDeleteHandler = app.openapi(
  postAdminConversationsDeleteRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
