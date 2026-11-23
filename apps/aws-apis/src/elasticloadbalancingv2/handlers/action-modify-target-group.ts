import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionModifyTargetGroupRoute, postActionModifyTargetGroupRoute } from '../routes'

export const getActionModifyTargetGroupRouteHandler: RouteHandler<
  typeof getActionModifyTargetGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyTargetGroupRouteHandler: RouteHandler<
  typeof postActionModifyTargetGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
