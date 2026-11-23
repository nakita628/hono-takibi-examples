import { OpenAPIHono } from '@hono/zod-openapi'
import { postAdminConversationsArchiveRoute } from '../routes'

const app = new OpenAPIHono()

export const adminConversationsArchiveHandler = app.openapi(
  postAdminConversationsArchiveRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
