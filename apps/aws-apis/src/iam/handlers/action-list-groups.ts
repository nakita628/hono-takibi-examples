import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionListGroupsRoute, postActionListGroupsRoute } from '../routes'

export const getActionListGroupsRouteHandler: RouteHandler<
  typeof getActionListGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListGroupsRouteHandler: RouteHandler<
  typeof postActionListGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
