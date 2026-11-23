import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionGetMetricStreamRoute, postActionGetMetricStreamRoute } from '../routes'

export const getActionGetMetricStreamRouteHandler: RouteHandler<
  typeof getActionGetMetricStreamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetMetricStreamRouteHandler: RouteHandler<
  typeof postActionGetMetricStreamRoute
> = async (c) => {
  throw new Error('Not implemented')
}
