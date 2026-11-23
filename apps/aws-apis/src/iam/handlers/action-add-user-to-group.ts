import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionAddUserToGroupRoute, postActionAddUserToGroupRoute } from '../routes'

export const getActionAddUserToGroupRouteHandler: RouteHandler<
  typeof getActionAddUserToGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionAddUserToGroupRouteHandler: RouteHandler<
  typeof postActionAddUserToGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
