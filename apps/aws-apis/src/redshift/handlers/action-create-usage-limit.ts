import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCreateUsageLimitRoute, postActionCreateUsageLimitRoute } from '../routes'

export const getActionCreateUsageLimitRouteHandler: RouteHandler<
  typeof getActionCreateUsageLimitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateUsageLimitRouteHandler: RouteHandler<
  typeof postActionCreateUsageLimitRoute
> = async (c) => {
  throw new Error('Not implemented')
}
