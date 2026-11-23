import type { RouteHandler } from '@hono/zod-openapi'
import type { putUpdateDistributionConfigurationRoute } from '../routes'

export const putUpdateDistributionConfigurationRouteHandler: RouteHandler<
  typeof putUpdateDistributionConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
