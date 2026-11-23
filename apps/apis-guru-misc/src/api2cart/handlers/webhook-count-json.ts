import type { RouteHandler } from '@hono/zod-openapi'
import type { getWebhookCountJsonRoute } from '../routes'

export const getWebhookCountJsonRouteHandler: RouteHandler<
  typeof getWebhookCountJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
