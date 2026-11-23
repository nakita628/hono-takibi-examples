import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteCheckoutDomainsDomainIdRoute,
  getCheckoutDomainsDomainIdRoute,
  getCheckoutDomainsRoute,
  postCheckoutDomainsDomainIdVerifyPaymentMethodRoute,
} from '../routes'

export const getCheckoutDomainsRouteHandler: RouteHandler<typeof getCheckoutDomainsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getCheckoutDomainsDomainIdRouteHandler: RouteHandler<
  typeof getCheckoutDomainsDomainIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCheckoutDomainsDomainIdRouteHandler: RouteHandler<
  typeof deleteCheckoutDomainsDomainIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCheckoutDomainsDomainIdVerifyPaymentMethodRouteHandler: RouteHandler<
  typeof postCheckoutDomainsDomainIdVerifyPaymentMethodRoute
> = async (c) => {
  throw new Error('Not implemented')
}
