import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionPutMetricStreamRoute, postActionPutMetricStreamRoute } from '../routes'

export const getActionPutMetricStreamRouteHandler: RouteHandler<
  typeof getActionPutMetricStreamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionPutMetricStreamRouteHandler: RouteHandler<
  typeof postActionPutMetricStreamRoute
> = async (c) => {
  throw new Error('Not implemented')
}
