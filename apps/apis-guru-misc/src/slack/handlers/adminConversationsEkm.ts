import { OpenAPIHono } from '@hono/zod-openapi'
import { getAdminConversationsEkmListOriginalConnectedChannelInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const adminConversationsEkmHandler = app.openapi(
  getAdminConversationsEkmListOriginalConnectedChannelInfoRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
