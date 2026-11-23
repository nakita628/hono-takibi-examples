import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteDomainsDomainRoute,
  getDomainsRoute,
  getDomainsVerifyDomainRoute,
  postDomainsRoute,
  postDomainsVerifyDomainRoute,
} from '../routes'

export const getDomainsRouteHandler: RouteHandler<typeof getDomainsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postDomainsRouteHandler: RouteHandler<typeof postDomainsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getDomainsVerifyDomainRouteHandler: RouteHandler<
  typeof getDomainsVerifyDomainRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDomainsVerifyDomainRouteHandler: RouteHandler<
  typeof postDomainsVerifyDomainRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDomainsDomainRouteHandler: RouteHandler<
  typeof deleteDomainsDomainRoute
> = async (c) => {
  throw new Error('Not implemented')
}
