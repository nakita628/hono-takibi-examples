import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionModifyUserGroupRoute, postActionModifyUserGroupRoute } from '../routes'

export const getActionModifyUserGroupRouteHandler: RouteHandler<
  typeof getActionModifyUserGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyUserGroupRouteHandler: RouteHandler<
  typeof postActionModifyUserGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
