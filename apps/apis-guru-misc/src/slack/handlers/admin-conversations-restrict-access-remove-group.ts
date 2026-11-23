import { OpenAPIHono } from '@hono/zod-openapi'
import { postAdminConversationsRestrictAccessRemoveGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const adminConversationsRestrictAccessRemoveGroupHandler = app.openapi(
  postAdminConversationsRestrictAccessRemoveGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
