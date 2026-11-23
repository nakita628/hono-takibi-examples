import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteDomainsDomainIdRoute,
  getDomainsDomainIdRoute,
  getDomainsRoute,
  postDomainsRoute,
} from '../routes'

export const getDomainsDomainIdRouteHandler: RouteHandler<typeof getDomainsDomainIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteDomainsDomainIdRouteHandler: RouteHandler<
  typeof deleteDomainsDomainIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDomainsRouteHandler: RouteHandler<typeof postDomainsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getDomainsRouteHandler: RouteHandler<typeof getDomainsRoute> = async (c) => {
  throw new Error('Not implemented')
}
