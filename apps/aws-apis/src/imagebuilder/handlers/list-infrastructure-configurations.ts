import type { RouteHandler } from '@hono/zod-openapi'
import type { postListInfrastructureConfigurationsRoute } from '../routes'

export const postListInfrastructureConfigurationsRouteHandler: RouteHandler<
  typeof postListInfrastructureConfigurationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
