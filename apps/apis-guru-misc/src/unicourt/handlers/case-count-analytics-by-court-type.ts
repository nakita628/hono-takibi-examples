import type { RouteHandler } from '@hono/zod-openapi'
import type { getCaseCountAnalyticsByCourtTypeRoute } from '../routes'

export const getCaseCountAnalyticsByCourtTypeRouteHandler: RouteHandler<
  typeof getCaseCountAnalyticsByCourtTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
