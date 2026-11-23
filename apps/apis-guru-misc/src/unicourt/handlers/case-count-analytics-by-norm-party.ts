import type { RouteHandler } from '@hono/zod-openapi'
import type { getCaseCountAnalyticsByNormPartyRoute } from '../routes'

export const getCaseCountAnalyticsByNormPartyRouteHandler: RouteHandler<
  typeof getCaseCountAnalyticsByNormPartyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
