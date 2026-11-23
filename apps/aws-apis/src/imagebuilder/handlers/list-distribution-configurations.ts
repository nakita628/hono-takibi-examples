import type { RouteHandler } from '@hono/zod-openapi'
import type { postListDistributionConfigurationsRoute } from '../routes'

export const postListDistributionConfigurationsRouteHandler: RouteHandler<
  typeof postListDistributionConfigurationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
