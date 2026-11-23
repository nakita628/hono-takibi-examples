import type { RouteHandler } from '@hono/zod-openapi'
import type { getAppendChatMessageRoute, postAppendChatMessageRoute } from '../routes'

export const getAppendChatMessageRouteHandler: RouteHandler<
  typeof getAppendChatMessageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppendChatMessageRouteHandler: RouteHandler<
  typeof postAppendChatMessageRoute
> = async (c) => {
  throw new Error('Not implemented')
}
