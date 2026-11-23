import type { RouteHandler } from '@hono/zod-openapi'
import type { putWebhookUpdateJsonRoute } from '../routes'

export const putWebhookUpdateJsonRouteHandler: RouteHandler<
  typeof putWebhookUpdateJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
