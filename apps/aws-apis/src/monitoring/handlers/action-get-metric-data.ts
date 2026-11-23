import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionGetMetricDataRoute, postActionGetMetricDataRoute } from '../routes'

export const getActionGetMetricDataRouteHandler: RouteHandler<
  typeof getActionGetMetricDataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetMetricDataRouteHandler: RouteHandler<
  typeof postActionGetMetricDataRoute
> = async (c) => {
  throw new Error('Not implemented')
}
