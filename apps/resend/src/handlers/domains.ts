import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postDomainsRoute,
  getDomainsRoute,
  getDomainsDomainIdRoute,
  patchDomainsDomainIdRoute,
  deleteDomainsDomainIdRoute,
  postDomainsDomainIdVerifyRoute,
  postDomainsDomainIdForgeRoute,
  postDomainsClaimRoute,
  getDomainsDomainIdClaimRoute,
  postDomainsDomainIdClaimVerifyRoute,
} from '../routes'

export const postDomainsRouteHandler: RouteHandler<typeof postDomainsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getDomainsRouteHandler: RouteHandler<typeof getDomainsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getDomainsDomainIdRouteHandler: RouteHandler<typeof getDomainsDomainIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchDomainsDomainIdRouteHandler: RouteHandler<
  typeof patchDomainsDomainIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDomainsDomainIdRouteHandler: RouteHandler<
  typeof deleteDomainsDomainIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDomainsDomainIdVerifyRouteHandler: RouteHandler<
  typeof postDomainsDomainIdVerifyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDomainsDomainIdForgeRouteHandler: RouteHandler<
  typeof postDomainsDomainIdForgeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDomainsClaimRouteHandler: RouteHandler<typeof postDomainsClaimRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getDomainsDomainIdClaimRouteHandler: RouteHandler<
  typeof getDomainsDomainIdClaimRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDomainsDomainIdClaimVerifyRouteHandler: RouteHandler<
  typeof postDomainsDomainIdClaimVerifyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
