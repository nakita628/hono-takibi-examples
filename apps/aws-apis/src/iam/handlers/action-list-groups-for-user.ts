import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionListGroupsForUserRoute, postActionListGroupsForUserRoute } from '../routes'

export const getActionListGroupsForUserRouteHandler: RouteHandler<
  typeof getActionListGroupsForUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListGroupsForUserRouteHandler: RouteHandler<
  typeof postActionListGroupsForUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}
