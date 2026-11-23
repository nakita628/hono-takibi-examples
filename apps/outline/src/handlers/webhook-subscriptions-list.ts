import type { RouteHandler } from '@hono/zod-openapi'
import type { postWebhookSubscriptionsListRoute } from '../routes'

export const postWebhookSubscriptionsListRouteHandler: RouteHandler<
  typeof postWebhookSubscriptionsListRoute
> = async (c) => {
  throw new Error('Not implemented')
}
