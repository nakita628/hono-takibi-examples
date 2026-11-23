import type { RouteHandler } from '@hono/zod-openapi'
import type { getCaseCountAnalyticsByCaseTypeGroupRoute } from '../routes'

export const getCaseCountAnalyticsByCaseTypeGroupRouteHandler: RouteHandler<
  typeof getCaseCountAnalyticsByCaseTypeGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
