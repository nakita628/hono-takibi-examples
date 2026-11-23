import { OpenAPIHono } from '@hono/zod-openapi'
import { getAdminConversationsSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const adminConversationsSearchHandler = app.openapi(
  getAdminConversationsSearchRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
