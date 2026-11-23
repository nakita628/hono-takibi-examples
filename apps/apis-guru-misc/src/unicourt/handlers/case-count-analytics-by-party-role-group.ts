import type { RouteHandler } from '@hono/zod-openapi'
import type { getCaseCountAnalyticsByPartyRoleGroupRoute } from '../routes'

export const getCaseCountAnalyticsByPartyRoleGroupRouteHandler: RouteHandler<
  typeof getCaseCountAnalyticsByPartyRoleGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
