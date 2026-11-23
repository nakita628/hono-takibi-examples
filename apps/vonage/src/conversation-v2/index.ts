import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getConversationsConversationIdEventsRoute,
  getConversationsConversationIdMembersRoute,
  getConversationsRoute,
  getUsersRoute,
} from './routes'
import {
  getConversationsConversationIdEventsRouteHandler,
  getConversationsConversationIdMembersRouteHandler,
  getConversationsRouteHandler,
  getUsersRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getConversationsRoute, getConversationsRouteHandler)
  .openapi(
    getConversationsConversationIdEventsRoute,
    getConversationsConversationIdEventsRouteHandler,
  )
  .openapi(
    getConversationsConversationIdMembersRoute,
    getConversationsConversationIdMembersRouteHandler,
  )
  .openapi(getUsersRoute, getUsersRouteHandler)

export default app
