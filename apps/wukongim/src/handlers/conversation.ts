import type { RouteHandler } from '@hono/zod-openapi'
import type { postConversationListRoute, postConversationSyncRoute } from '../routes'

export const postConversationListRouteHandler: RouteHandler<
  typeof postConversationListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postConversationSyncRouteHandler: RouteHandler<
  typeof postConversationSyncRoute
> = async (c) => {
  throw new Error('Not implemented')
}
