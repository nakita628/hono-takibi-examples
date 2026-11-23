import type { RouteHandler } from '@hono/zod-openapi'
import type { postZulipOutgoingWebhookRoute } from '../routes'

export const postZulipOutgoingWebhookRouteHandler: RouteHandler<
  typeof postZulipOutgoingWebhookRoute
> = async (c) => {
  throw new Error('Not implemented')
}
