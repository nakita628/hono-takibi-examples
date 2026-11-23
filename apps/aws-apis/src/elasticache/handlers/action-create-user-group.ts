import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCreateUserGroupRoute, postActionCreateUserGroupRoute } from '../routes'

export const getActionCreateUserGroupRouteHandler: RouteHandler<
  typeof getActionCreateUserGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateUserGroupRouteHandler: RouteHandler<
  typeof postActionCreateUserGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
