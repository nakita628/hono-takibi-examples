import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeleteMetricStreamRoute, postActionDeleteMetricStreamRoute } from '../routes'

export const getActionDeleteMetricStreamRouteHandler: RouteHandler<
  typeof getActionDeleteMetricStreamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteMetricStreamRouteHandler: RouteHandler<
  typeof postActionDeleteMetricStreamRoute
> = async (c) => {
  throw new Error('Not implemented')
}
