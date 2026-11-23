import type { RouteHandler } from '@hono/zod-openapi'
import type { postDashboardUserGetRoute, postDashboardUserListRoute } from '../routes'

export const postDashboardUserGetRouteHandler: RouteHandler<
  typeof postDashboardUserGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDashboardUserListRouteHandler: RouteHandler<
  typeof postDashboardUserListRoute
> = async (c) => {
  throw new Error('Not implemented')
}
