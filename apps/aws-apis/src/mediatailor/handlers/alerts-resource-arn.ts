import type { RouteHandler } from '@hono/zod-openapi'
import type { getAlertsResourceArnRoute } from '../routes'

export const getAlertsResourceArnRouteHandler: RouteHandler<
  typeof getAlertsResourceArnRoute
> = async (c) => {
  throw new Error('Not implemented')
}
