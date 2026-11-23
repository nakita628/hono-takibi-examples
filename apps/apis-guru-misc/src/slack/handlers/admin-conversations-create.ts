import { OpenAPIHono } from '@hono/zod-openapi'
import { postAdminConversationsCreateRoute } from '../routes'

const app = new OpenAPIHono()

export const adminConversationsCreateHandler = app.openapi(
  postAdminConversationsCreateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
