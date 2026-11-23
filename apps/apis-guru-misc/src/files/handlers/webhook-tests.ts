import type { RouteHandler } from '@hono/zod-openapi'
import type { postWebhookTestsRoute } from '../routes'

export const postWebhookTestsRouteHandler: RouteHandler<typeof postWebhookTestsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
