import type { RouteHandler } from '@hono/zod-openapi'
import type { getWebhookListJsonRoute } from '../routes'

export const getWebhookListJsonRouteHandler: RouteHandler<typeof getWebhookListJsonRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
