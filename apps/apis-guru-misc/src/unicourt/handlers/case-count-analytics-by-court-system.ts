import type { RouteHandler } from '@hono/zod-openapi'
import type { getCaseCountAnalyticsByCourtSystemRoute } from '../routes'

export const getCaseCountAnalyticsByCourtSystemRouteHandler: RouteHandler<
  typeof getCaseCountAnalyticsByCourtSystemRoute
> = async (c) => {
  throw new Error('Not implemented')
}
