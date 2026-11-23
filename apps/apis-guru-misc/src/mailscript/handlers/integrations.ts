import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteIntegrationsIntegrationRoute, getIntegrationsRoute } from '../routes'

export const getIntegrationsRouteHandler: RouteHandler<typeof getIntegrationsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteIntegrationsIntegrationRouteHandler: RouteHandler<
  typeof deleteIntegrationsIntegrationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
