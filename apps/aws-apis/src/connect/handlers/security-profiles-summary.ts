import type { RouteHandler } from '@hono/zod-openapi'
import type { getSecurityProfilesSummaryInstanceIdRoute } from '../routes'

export const getSecurityProfilesSummaryInstanceIdRouteHandler: RouteHandler<
  typeof getSecurityProfilesSummaryInstanceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
