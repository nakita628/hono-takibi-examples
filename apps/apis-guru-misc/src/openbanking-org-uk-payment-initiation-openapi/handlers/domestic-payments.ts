import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getDomesticPaymentsDomesticPaymentIdPaymentDetailsRoute,
  getDomesticPaymentsDomesticPaymentIdRoute,
  postDomesticPaymentsRoute,
} from '../routes'

export const postDomesticPaymentsRouteHandler: RouteHandler<
  typeof postDomesticPaymentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDomesticPaymentsDomesticPaymentIdRouteHandler: RouteHandler<
  typeof getDomesticPaymentsDomesticPaymentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDomesticPaymentsDomesticPaymentIdPaymentDetailsRouteHandler: RouteHandler<
  typeof getDomesticPaymentsDomesticPaymentIdPaymentDetailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
