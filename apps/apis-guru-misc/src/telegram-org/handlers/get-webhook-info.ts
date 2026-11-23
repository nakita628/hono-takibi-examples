import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetWebhookInfoRoute } from '../routes'

export const postGetWebhookInfoRouteHandler: RouteHandler<typeof postGetWebhookInfoRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
