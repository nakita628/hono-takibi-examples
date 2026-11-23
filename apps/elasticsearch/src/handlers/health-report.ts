import type { RouteHandler } from '@hono/zod-openapi'
import type { getHealthReportFeatureRoute, getHealthReportRoute } from '../routes'

export const getHealthReportRouteHandler: RouteHandler<typeof getHealthReportRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getHealthReportFeatureRouteHandler: RouteHandler<
  typeof getHealthReportFeatureRoute
> = async (c) => {
  throw new Error('Not implemented')
}
