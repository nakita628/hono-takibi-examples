import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsRoute,
  getDomesticScheduledPaymentsDomesticScheduledPaymentIdRoute,
  postDomesticScheduledPaymentsRoute,
} from '../routes'

export const postDomesticScheduledPaymentsRouteHandler: RouteHandler<
  typeof postDomesticScheduledPaymentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDomesticScheduledPaymentsDomesticScheduledPaymentIdRouteHandler: RouteHandler<
  typeof getDomesticScheduledPaymentsDomesticScheduledPaymentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsRouteHandler: RouteHandler<
  typeof getDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
