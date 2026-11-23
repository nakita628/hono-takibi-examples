import { OpenAPIHono } from '@hono/zod-openapi'
import { getAdminConversationsEkmListOriginalConnectedChannelInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const adminConversationsEkmListOriginalConnectedChannelInfoHandler = app.openapi(
  getAdminConversationsEkmListOriginalConnectedChannelInfoRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
