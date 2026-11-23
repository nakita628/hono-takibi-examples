import type { RouteHandler } from '@hono/zod-openapi'
import type { getServiceIntegrationsRoute, putServiceIntegrationsRoute } from '../routes'

export const getServiceIntegrationsRouteHandler: RouteHandler<
  typeof getServiceIntegrationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putServiceIntegrationsRouteHandler: RouteHandler<
  typeof putServiceIntegrationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
