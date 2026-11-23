import type { RouteHandler } from '@hono/zod-openapi'
import type { getIntegrationsHubAppMetaRoute, getIntegrationsHubListRoute } from '../routes'

export const getIntegrationsHubListRouteHandler: RouteHandler<
  typeof getIntegrationsHubListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIntegrationsHubAppMetaRouteHandler: RouteHandler<
  typeof getIntegrationsHubAppMetaRoute
> = async (c) => {
  throw new Error('Not implemented')
}
