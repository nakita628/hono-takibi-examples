import type { RouteHandler } from '@hono/zod-openapi'
import type { getInferenceCostTimeseriesRoute, getInferenceCostTotalRoute } from '../routes'

export const getInferenceCostTotalRouteHandler: RouteHandler<
  typeof getInferenceCostTotalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getInferenceCostTimeseriesRouteHandler: RouteHandler<
  typeof getInferenceCostTimeseriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
