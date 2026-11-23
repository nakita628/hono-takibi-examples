import type { RouteHandler } from '@hono/zod-openapi'
import type { getCaseCountAnalyticsByNormLawFirmRoute } from '../routes'

export const getCaseCountAnalyticsByNormLawFirmRouteHandler: RouteHandler<
  typeof getCaseCountAnalyticsByNormLawFirmRoute
> = async (c) => {
  throw new Error('Not implemented')
}
