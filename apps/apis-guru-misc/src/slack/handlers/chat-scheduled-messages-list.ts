import type { RouteHandler } from '@hono/zod-openapi'
import type { getChatScheduledMessagesListRoute } from '../routes'

export const getChatScheduledMessagesListRouteHandler: RouteHandler<
  typeof getChatScheduledMessagesListRoute
> = async (c) => {
  throw new Error('Not implemented')
}
