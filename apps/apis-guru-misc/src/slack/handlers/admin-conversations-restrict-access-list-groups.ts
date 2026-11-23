import { OpenAPIHono } from '@hono/zod-openapi'
import { getAdminConversationsRestrictAccessListGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const adminConversationsRestrictAccessListGroupsHandler = app.openapi(
  getAdminConversationsRestrictAccessListGroupsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
