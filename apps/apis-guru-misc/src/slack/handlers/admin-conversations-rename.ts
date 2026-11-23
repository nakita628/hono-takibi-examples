import { OpenAPIHono } from '@hono/zod-openapi'
import { postAdminConversationsRenameRoute } from '../routes'

const app = new OpenAPIHono()

export const adminConversationsRenameHandler = app.openapi(
  postAdminConversationsRenameRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
