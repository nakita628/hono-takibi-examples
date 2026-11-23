import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionSetSecurityGroupsRoute, postActionSetSecurityGroupsRoute } from '../routes'

export const getActionSetSecurityGroupsRouteHandler: RouteHandler<
  typeof getActionSetSecurityGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionSetSecurityGroupsRouteHandler: RouteHandler<
  typeof postActionSetSecurityGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
