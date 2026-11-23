import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionGetDashboardRoute, postActionGetDashboardRoute } from '../routes'

export const getActionGetDashboardRouteHandler: RouteHandler<
  typeof getActionGetDashboardRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetDashboardRouteHandler: RouteHandler<
  typeof postActionGetDashboardRoute
> = async (c) => {
  throw new Error('Not implemented')
}
