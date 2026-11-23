import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postPartnerCustomerCreateRoute,
  postPartnerCustomerEnableRoute,
  postPartnerCustomerGetRoute,
  postPartnerCustomerOauthInstitutionsGetRoute,
  postPartnerCustomerRemoveRoute,
} from '../routes'

export const postPartnerCustomerCreateRouteHandler: RouteHandler<
  typeof postPartnerCustomerCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPartnerCustomerGetRouteHandler: RouteHandler<
  typeof postPartnerCustomerGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPartnerCustomerEnableRouteHandler: RouteHandler<
  typeof postPartnerCustomerEnableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPartnerCustomerRemoveRouteHandler: RouteHandler<
  typeof postPartnerCustomerRemoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPartnerCustomerOauthInstitutionsGetRouteHandler: RouteHandler<
  typeof postPartnerCustomerOauthInstitutionsGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}
