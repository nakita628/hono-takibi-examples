import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsRoute,
  getDomesticStandingOrdersDomesticStandingOrderIdRoute,
  postDomesticStandingOrdersRoute,
} from '../routes'

export const postDomesticStandingOrdersRouteHandler: RouteHandler<
  typeof postDomesticStandingOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDomesticStandingOrdersDomesticStandingOrderIdRouteHandler: RouteHandler<
  typeof getDomesticStandingOrdersDomesticStandingOrderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsRouteHandler: RouteHandler<
  typeof getDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
