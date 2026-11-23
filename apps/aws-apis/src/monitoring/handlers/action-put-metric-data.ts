import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionPutMetricDataRoute, postActionPutMetricDataRoute } from '../routes'

export const getActionPutMetricDataRouteHandler: RouteHandler<
  typeof getActionPutMetricDataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionPutMetricDataRouteHandler: RouteHandler<
  typeof postActionPutMetricDataRoute
> = async (c) => {
  throw new Error('Not implemented')
}
