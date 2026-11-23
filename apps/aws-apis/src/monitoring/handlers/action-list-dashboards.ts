import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionListDashboardsRoute, postActionListDashboardsRoute } from '../routes'

export const getActionListDashboardsRouteHandler: RouteHandler<
  typeof getActionListDashboardsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListDashboardsRouteHandler: RouteHandler<
  typeof postActionListDashboardsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
