import type { RouteHandler } from '@hono/zod-openapi'
import type { getAccountFailedWebhooksJsonRoute } from '../routes'

export const getAccountFailedWebhooksJsonRouteHandler: RouteHandler<
  typeof getAccountFailedWebhooksJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
