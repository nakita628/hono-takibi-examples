import type { RouteHandler } from '@hono/zod-openapi'
import type { getCaseCountAnalyticsByCaseTypeRoute } from '../routes'

export const getCaseCountAnalyticsByCaseTypeRouteHandler: RouteHandler<
  typeof getCaseCountAnalyticsByCaseTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
