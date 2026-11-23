import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postConversationsActivateRoute,
  postConversationsClearUnreadRoute,
  postConversationsDeleteRoute,
  postConversationsSetUnreadRoute,
} from '../routes'

export const postConversationsClearUnreadRouteHandler: RouteHandler<
  typeof postConversationsClearUnreadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postConversationsSetUnreadRouteHandler: RouteHandler<
  typeof postConversationsSetUnreadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postConversationsDeleteRouteHandler: RouteHandler<
  typeof postConversationsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postConversationsActivateRouteHandler: RouteHandler<
  typeof postConversationsActivateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
