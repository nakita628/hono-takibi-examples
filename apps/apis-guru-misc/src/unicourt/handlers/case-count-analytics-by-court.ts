import type { RouteHandler } from '@hono/zod-openapi'
import type { getCaseCountAnalyticsByCourtRoute } from '../routes'

export const getCaseCountAnalyticsByCourtRouteHandler: RouteHandler<
  typeof getCaseCountAnalyticsByCourtRoute
> = async (c) => {
  throw new Error('Not implemented')
}
