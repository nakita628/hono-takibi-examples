import { OpenAPIHono } from '@hono/zod-openapi'
import { postAdminConversationsConvertToPrivateRoute } from '../routes'

const app = new OpenAPIHono()

export const adminConversationsConvertToPrivateHandler = app.openapi(
  postAdminConversationsConvertToPrivateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
