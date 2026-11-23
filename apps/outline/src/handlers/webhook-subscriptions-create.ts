import type { RouteHandler } from '@hono/zod-openapi'
import type { postWebhookSubscriptionsCreateRoute } from '../routes'

export const postWebhookSubscriptionsCreateRouteHandler: RouteHandler<
  typeof postWebhookSubscriptionsCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
