import type { RouteHandler } from '@hono/zod-openapi'
import type { getWebhookEventsJsonRoute } from '../routes'

export const getWebhookEventsJsonRouteHandler: RouteHandler<
  typeof getWebhookEventsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
