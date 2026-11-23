import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCreateTargetGroupRoute, postActionCreateTargetGroupRoute } from '../routes'

export const getActionCreateTargetGroupRouteHandler: RouteHandler<
  typeof getActionCreateTargetGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateTargetGroupRouteHandler: RouteHandler<
  typeof postActionCreateTargetGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
