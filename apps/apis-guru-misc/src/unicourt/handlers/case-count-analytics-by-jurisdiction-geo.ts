import type { RouteHandler } from '@hono/zod-openapi'
import type { getCaseCountAnalyticsByJurisdictionGeoRoute } from '../routes'

export const getCaseCountAnalyticsByJurisdictionGeoRouteHandler: RouteHandler<
  typeof getCaseCountAnalyticsByJurisdictionGeoRoute
> = async (c) => {
  throw new Error('Not implemented')
}
