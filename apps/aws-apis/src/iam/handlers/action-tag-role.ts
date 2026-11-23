import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionTagRoleRoute, postActionTagRoleRoute } from '../routes'

export const getActionTagRoleRouteHandler: RouteHandler<typeof getActionTagRoleRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postActionTagRoleRouteHandler: RouteHandler<typeof postActionTagRoleRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
