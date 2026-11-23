import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionListMetricsRoute, postActionListMetricsRoute } from '../routes'

export const getActionListMetricsRouteHandler: RouteHandler<
  typeof getActionListMetricsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListMetricsRouteHandler: RouteHandler<
  typeof postActionListMetricsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
