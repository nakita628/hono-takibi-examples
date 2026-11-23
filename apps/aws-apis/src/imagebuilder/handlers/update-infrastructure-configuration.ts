import type { RouteHandler } from '@hono/zod-openapi'
import type { putUpdateInfrastructureConfigurationRoute } from '../routes'

export const putUpdateInfrastructureConfigurationRouteHandler: RouteHandler<
  typeof putUpdateInfrastructureConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
