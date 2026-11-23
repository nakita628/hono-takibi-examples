import type { RouteHandler } from '@hono/zod-openapi'
import type { getV7DeploymentsRoute, postV7DomainsRoute } from '../routes'

export const postV7DomainsRouteHandler: RouteHandler<typeof postV7DomainsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV7DeploymentsRouteHandler: RouteHandler<typeof getV7DeploymentsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
