import type { RouteHandler } from '@hono/zod-openapi'
import type { getDbaasExternalIntegrationsServiceNameRoute } from '../routes'

export const getDbaasExternalIntegrationsServiceNameRouteHandler: RouteHandler<
  typeof getDbaasExternalIntegrationsServiceNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
