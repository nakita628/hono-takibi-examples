import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionPutDashboardRoute, postActionPutDashboardRoute } from '../routes'

export const getActionPutDashboardRouteHandler: RouteHandler<
  typeof getActionPutDashboardRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionPutDashboardRouteHandler: RouteHandler<
  typeof postActionPutDashboardRoute
> = async (c) => {
  throw new Error('Not implemented')
}
