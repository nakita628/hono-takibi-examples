import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionListPolicyTagsRoute, postActionListPolicyTagsRoute } from '../routes'

export const getActionListPolicyTagsRouteHandler: RouteHandler<
  typeof getActionListPolicyTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListPolicyTagsRouteHandler: RouteHandler<
  typeof postActionListPolicyTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
