import type { RouteHandler } from '@hono/zod-openapi'
import type { postWebhookSubscriptionsDeleteRoute } from '../routes'

export const postWebhookSubscriptionsDeleteRouteHandler: RouteHandler<
  typeof postWebhookSubscriptionsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}
