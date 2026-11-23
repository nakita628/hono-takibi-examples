import type { RouteHandler } from '@hono/zod-openapi'
import type { postWebhookSubscriptionsUpdateRoute } from '../routes'

export const postWebhookSubscriptionsUpdateRouteHandler: RouteHandler<
  typeof postWebhookSubscriptionsUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
