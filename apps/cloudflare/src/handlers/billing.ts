import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getBillingRatePlansPublicKeyRoute,
  postBillingAddressValidationRoute,
} from '../routes'

export const postBillingAddressValidationRouteHandler: RouteHandler<
  typeof postBillingAddressValidationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBillingRatePlansPublicKeyRouteHandler: RouteHandler<
  typeof getBillingRatePlansPublicKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
