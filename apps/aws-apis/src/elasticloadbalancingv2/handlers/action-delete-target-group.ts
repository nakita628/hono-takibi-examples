import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeleteTargetGroupRoute, postActionDeleteTargetGroupRoute } from '../routes'

export const getActionDeleteTargetGroupRouteHandler: RouteHandler<
  typeof getActionDeleteTargetGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteTargetGroupRouteHandler: RouteHandler<
  typeof postActionDeleteTargetGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
