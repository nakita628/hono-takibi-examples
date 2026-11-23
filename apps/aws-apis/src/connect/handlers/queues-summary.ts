import type { RouteHandler } from '@hono/zod-openapi'
import type { getQueuesSummaryInstanceIdRoute } from '../routes'

export const getQueuesSummaryInstanceIdRouteHandler: RouteHandler<
  typeof getQueuesSummaryInstanceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
