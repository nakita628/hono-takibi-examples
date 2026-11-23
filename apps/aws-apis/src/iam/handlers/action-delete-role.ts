import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeleteRoleRoute, postActionDeleteRoleRoute } from '../routes'

export const getActionDeleteRoleRouteHandler: RouteHandler<
  typeof getActionDeleteRoleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteRoleRouteHandler: RouteHandler<
  typeof postActionDeleteRoleRoute
> = async (c) => {
  throw new Error('Not implemented')
}
