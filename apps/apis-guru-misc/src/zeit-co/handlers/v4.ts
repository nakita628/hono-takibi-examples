import type { RouteHandler } from '@hono/zod-openapi'
import type { getV4DomainsNameRoute, getV4DomainsRoute } from '../routes'

export const getV4DomainsRouteHandler: RouteHandler<typeof getV4DomainsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4DomainsNameRouteHandler: RouteHandler<typeof getV4DomainsNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
