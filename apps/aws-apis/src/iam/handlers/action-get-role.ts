import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionGetRoleRoute, postActionGetRoleRoute } from '../routes'

export const getActionGetRoleRouteHandler: RouteHandler<typeof getActionGetRoleRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postActionGetRoleRouteHandler: RouteHandler<typeof postActionGetRoleRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
