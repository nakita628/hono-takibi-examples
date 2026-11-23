import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionModifyUsageLimitRoute, postActionModifyUsageLimitRoute } from '../routes'

export const getActionModifyUsageLimitRouteHandler: RouteHandler<
  typeof getActionModifyUsageLimitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyUsageLimitRouteHandler: RouteHandler<
  typeof postActionModifyUsageLimitRoute
> = async (c) => {
  throw new Error('Not implemented')
}
