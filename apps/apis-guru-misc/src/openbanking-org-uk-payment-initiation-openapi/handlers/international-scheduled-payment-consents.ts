import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getInternationalScheduledPaymentConsentsConsentIdFundsConfirmationRoute,
  getInternationalScheduledPaymentConsentsConsentIdRoute,
  postInternationalScheduledPaymentConsentsRoute,
} from '../routes'

export const postInternationalScheduledPaymentConsentsRouteHandler: RouteHandler<
  typeof postInternationalScheduledPaymentConsentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getInternationalScheduledPaymentConsentsConsentIdRouteHandler: RouteHandler<
  typeof getInternationalScheduledPaymentConsentsConsentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getInternationalScheduledPaymentConsentsConsentIdFundsConfirmationRouteHandler: RouteHandler<
  typeof getInternationalScheduledPaymentConsentsConsentIdFundsConfirmationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
