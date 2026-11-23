import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionUntagRoleRoute, postActionUntagRoleRoute } from '../routes'

export const getActionUntagRoleRouteHandler: RouteHandler<typeof getActionUntagRoleRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postActionUntagRoleRouteHandler: RouteHandler<
  typeof postActionUntagRoleRoute
> = async (c) => {
  throw new Error('Not implemented')
}
