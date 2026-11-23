import type { RouteHandler } from '@hono/zod-openapi'
import type { getDomainsDomainIdRoute, getDomainsRoute } from '../routes'

export const getDomainsRouteHandler: RouteHandler<typeof getDomainsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getDomainsDomainIdRouteHandler: RouteHandler<typeof getDomainsDomainIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
