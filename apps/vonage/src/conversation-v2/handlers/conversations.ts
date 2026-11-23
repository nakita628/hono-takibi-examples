import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getConversationsConversationIdEventsRoute,
  getConversationsConversationIdMembersRoute,
  getConversationsRoute,
} from '../routes'

export const getConversationsRouteHandler: RouteHandler<typeof getConversationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getConversationsConversationIdEventsRouteHandler: RouteHandler<
  typeof getConversationsConversationIdEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getConversationsConversationIdMembersRouteHandler: RouteHandler<
  typeof getConversationsConversationIdMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
