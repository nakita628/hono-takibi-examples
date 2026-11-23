import type { RouteHandler } from '@hono/zod-openapi'
import type { getDashboardsProjectIdRoute } from '../routes'

export const getDashboardsProjectIdRouteHandler: RouteHandler<
  typeof getDashboardsProjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
