import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCreateRoleRoute, postActionCreateRoleRoute } from '../routes'

export const getActionCreateRoleRouteHandler: RouteHandler<
  typeof getActionCreateRoleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateRoleRouteHandler: RouteHandler<
  typeof postActionCreateRoleRoute
> = async (c) => {
  throw new Error('Not implemented')
}
