import type { RouteHandler } from '@hono/zod-openapi'
import type { getCaseCountAnalyticsByNormAttorneyRoute } from '../routes'

export const getCaseCountAnalyticsByNormAttorneyRouteHandler: RouteHandler<
  typeof getCaseCountAnalyticsByNormAttorneyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
