import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getEnvironmentalImpactReportRoute,
  postEnvironmentalImpactEstimateRoute,
} from '../routes'

export const postEnvironmentalImpactEstimateRouteHandler: RouteHandler<
  typeof postEnvironmentalImpactEstimateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEnvironmentalImpactReportRouteHandler: RouteHandler<
  typeof getEnvironmentalImpactReportRoute
> = async (c) => {
  throw new Error('Not implemented')
}
