import type { RouteHandler } from '@hono/zod-openapi'
import type { getGlobalAlertsIndexRoute } from '../routes'

export const getGlobalAlertsIndexRouteHandler: RouteHandler<
  typeof getGlobalAlertsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
