import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetChatHistoryRoute, postGetChatHistoryRoute } from '../routes'

export const getGetChatHistoryRouteHandler: RouteHandler<typeof getGetChatHistoryRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postGetChatHistoryRouteHandler: RouteHandler<typeof postGetChatHistoryRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
