import type { RouteHandler } from '@hono/zod-openapi'
import type { getCaseCountAnalyticsByCaseClassRoute } from '../routes'

export const getCaseCountAnalyticsByCaseClassRouteHandler: RouteHandler<
  typeof getCaseCountAnalyticsByCaseClassRoute
> = async (c) => {
  throw new Error('Not implemented')
}
