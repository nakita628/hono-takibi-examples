import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeleteDashboardsRoute, postActionDeleteDashboardsRoute } from '../routes'

export const getActionDeleteDashboardsRouteHandler: RouteHandler<
  typeof getActionDeleteDashboardsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteDashboardsRouteHandler: RouteHandler<
  typeof postActionDeleteDashboardsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
