import type { RouteHandler } from '@hono/zod-openapi'
import type { getAwayStatusReasonsRoute } from '../routes'

export const getAwayStatusReasonsRouteHandler: RouteHandler<
  typeof getAwayStatusReasonsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
