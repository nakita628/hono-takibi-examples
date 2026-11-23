import type { RouteHandler } from '@hono/zod-openapi'
import type { putCreateDistributionConfigurationRoute } from '../routes'

export const putCreateDistributionConfigurationRouteHandler: RouteHandler<
  typeof putCreateDistributionConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
