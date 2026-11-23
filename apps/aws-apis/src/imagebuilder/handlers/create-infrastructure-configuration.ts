import type { RouteHandler } from '@hono/zod-openapi'
import type { putCreateInfrastructureConfigurationRoute } from '../routes'

export const putCreateInfrastructureConfigurationRouteHandler: RouteHandler<
  typeof putCreateInfrastructureConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
