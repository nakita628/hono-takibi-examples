import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getDomainsRoute,
  postDomainsRoute,
  deleteDomainsDomainIdRoute,
  patchDomainsDomainIdRoute,
} from '../routes'

export const getDomainsRouteHandler: RouteHandler<typeof getDomainsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postDomainsRouteHandler: RouteHandler<typeof postDomainsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDomainsDomainIdRouteHandler: RouteHandler<
  typeof deleteDomainsDomainIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDomainsDomainIdRouteHandler: RouteHandler<
  typeof patchDomainsDomainIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
