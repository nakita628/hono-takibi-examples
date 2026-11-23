import { OpenAPIHono } from '@hono/zod-openapi'
import { postAdminConversationsDisconnectSharedRoute } from '../routes'

const app = new OpenAPIHono()

export const adminConversationsDisconnectSharedHandler = app.openapi(
  postAdminConversationsDisconnectSharedRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
