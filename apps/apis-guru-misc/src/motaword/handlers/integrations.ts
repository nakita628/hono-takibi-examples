import type { RouteHandler } from '@hono/zod-openapi'
import type { getIntegrationsTokenRoute } from '../routes'

export const getIntegrationsTokenRouteHandler: RouteHandler<
  typeof getIntegrationsTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}
