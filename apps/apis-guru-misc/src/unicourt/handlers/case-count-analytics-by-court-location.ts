import type { RouteHandler } from '@hono/zod-openapi'
import type { getCaseCountAnalyticsByCourtLocationRoute } from '../routes'

export const getCaseCountAnalyticsByCourtLocationRouteHandler: RouteHandler<
  typeof getCaseCountAnalyticsByCourtLocationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
