import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionUpdateRoleRoute, postActionUpdateRoleRoute } from '../routes'

export const getActionUpdateRoleRouteHandler: RouteHandler<
  typeof getActionUpdateRoleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionUpdateRoleRouteHandler: RouteHandler<
  typeof postActionUpdateRoleRoute
> = async (c) => {
  throw new Error('Not implemented')
}
