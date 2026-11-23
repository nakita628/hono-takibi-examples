import type { RouteHandler } from '@hono/zod-openapi'
import type { postUpdateCompanyNetworkConfigurationRoute } from '../routes'

export const postUpdateCompanyNetworkConfigurationRouteHandler: RouteHandler<
  typeof postUpdateCompanyNetworkConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
