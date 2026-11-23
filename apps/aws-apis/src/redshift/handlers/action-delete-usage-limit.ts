import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeleteUsageLimitRoute, postActionDeleteUsageLimitRoute } from '../routes'

export const getActionDeleteUsageLimitRouteHandler: RouteHandler<
  typeof getActionDeleteUsageLimitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteUsageLimitRouteHandler: RouteHandler<
  typeof postActionDeleteUsageLimitRoute
> = async (c) => {
  throw new Error('Not implemented')
}
