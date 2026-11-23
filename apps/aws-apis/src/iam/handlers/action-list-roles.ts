import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionListRolesRoute, postActionListRolesRoute } from '../routes'

export const getActionListRolesRouteHandler: RouteHandler<typeof getActionListRolesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postActionListRolesRouteHandler: RouteHandler<
  typeof postActionListRolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
