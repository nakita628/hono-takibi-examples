import type { RouteHandler } from '@hono/zod-openapi'
import type { getMessagesScheduledBroadcastsRoute } from '../routes'

export const getMessagesScheduledBroadcastsRouteHandler: RouteHandler<
  typeof getMessagesScheduledBroadcastsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
