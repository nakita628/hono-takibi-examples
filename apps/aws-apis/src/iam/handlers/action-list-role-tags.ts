import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionListRoleTagsRoute, postActionListRoleTagsRoute } from '../routes'

export const getActionListRoleTagsRouteHandler: RouteHandler<
  typeof getActionListRoleTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListRoleTagsRouteHandler: RouteHandler<
  typeof postActionListRoleTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
