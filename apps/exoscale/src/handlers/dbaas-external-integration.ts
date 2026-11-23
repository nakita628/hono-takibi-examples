import type { RouteHandler } from '@hono/zod-openapi'
import type { getDbaasExternalIntegrationIntegrationIdRoute } from '../routes'

export const getDbaasExternalIntegrationIntegrationIdRouteHandler: RouteHandler<
  typeof getDbaasExternalIntegrationIntegrationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
