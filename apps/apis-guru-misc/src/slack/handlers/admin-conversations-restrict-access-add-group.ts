import { OpenAPIHono } from '@hono/zod-openapi'
import { postAdminConversationsRestrictAccessAddGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const adminConversationsRestrictAccessAddGroupHandler = app.openapi(
  postAdminConversationsRestrictAccessAddGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
