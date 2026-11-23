import type { RouteHandler } from '@hono/zod-openapi'
import type { getTenantTenantnameRoute } from '../routes'

export const getTenantTenantnameRouteHandler: RouteHandler<
  typeof getTenantTenantnameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
