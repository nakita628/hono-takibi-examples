import type { RouteHandler } from '@hono/zod-openapi'
import type { getDomainDomainnameRoute } from '../routes'

export const getDomainDomainnameRouteHandler: RouteHandler<
  typeof getDomainDomainnameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
