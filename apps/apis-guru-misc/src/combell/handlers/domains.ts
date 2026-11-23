import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getDomainsDomainNameRoute,
  getDomainsRoute,
  postDomainsRegistrationsRoute,
  postDomainsTransfersRoute,
  putDomainsDomainNameNameserversRoute,
  putDomainsDomainNameRenewRoute,
} from '../routes'

export const getDomainsRouteHandler: RouteHandler<typeof getDomainsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postDomainsRegistrationsRouteHandler: RouteHandler<
  typeof postDomainsRegistrationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDomainsTransfersRouteHandler: RouteHandler<
  typeof postDomainsTransfersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDomainsDomainNameRouteHandler: RouteHandler<
  typeof getDomainsDomainNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDomainsDomainNameNameserversRouteHandler: RouteHandler<
  typeof putDomainsDomainNameNameserversRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDomainsDomainNameRenewRouteHandler: RouteHandler<
  typeof putDomainsDomainNameRenewRoute
> = async (c) => {
  throw new Error('Not implemented')
}
