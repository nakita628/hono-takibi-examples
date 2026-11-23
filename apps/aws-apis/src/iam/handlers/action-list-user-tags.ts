import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionListUserTagsRoute, postActionListUserTagsRoute } from '../routes'

export const getActionListUserTagsRouteHandler: RouteHandler<
  typeof getActionListUserTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListUserTagsRouteHandler: RouteHandler<
  typeof postActionListUserTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
