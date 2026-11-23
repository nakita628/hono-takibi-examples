import type { RouteHandler } from '@hono/zod-openapi'
import type { getDbaasIntegrationTypesRoute } from '../routes'

export const getDbaasIntegrationTypesRouteHandler: RouteHandler<
  typeof getDbaasIntegrationTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
