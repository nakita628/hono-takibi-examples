import type { RouteHandler } from '@hono/zod-openapi'
import type { getCaseCountAnalyticsByAreaOfLawRoute } from '../routes'

export const getCaseCountAnalyticsByAreaOfLawRouteHandler: RouteHandler<
  typeof getCaseCountAnalyticsByAreaOfLawRoute
> = async (c) => {
  throw new Error('Not implemented')
}
