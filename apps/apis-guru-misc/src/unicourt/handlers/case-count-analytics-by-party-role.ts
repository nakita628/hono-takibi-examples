import type { RouteHandler } from '@hono/zod-openapi'
import type { getCaseCountAnalyticsByPartyRoleRoute } from '../routes'

export const getCaseCountAnalyticsByPartyRoleRouteHandler: RouteHandler<
  typeof getCaseCountAnalyticsByPartyRoleRoute
> = async (c) => {
  throw new Error('Not implemented')
}
