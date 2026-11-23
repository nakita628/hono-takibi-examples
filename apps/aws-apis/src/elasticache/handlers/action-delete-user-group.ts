import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeleteUserGroupRoute, postActionDeleteUserGroupRoute } from '../routes'

export const getActionDeleteUserGroupRouteHandler: RouteHandler<
  typeof getActionDeleteUserGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteUserGroupRouteHandler: RouteHandler<
  typeof postActionDeleteUserGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
