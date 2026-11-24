import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getInternationalPaymentConsentsConsentIdFundsConfirmationRoute,
  getInternationalPaymentConsentsConsentIdRoute,
  postInternationalPaymentConsentsRoute,
} from '../routes'

export const postInternationalPaymentConsentsRouteHandler: RouteHandler<
  typeof postInternationalPaymentConsentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getInternationalPaymentConsentsConsentIdRouteHandler: RouteHandler<
  typeof getInternationalPaymentConsentsConsentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getInternationalPaymentConsentsConsentIdFundsConfirmationRouteHandler: RouteHandler<
  typeof getInternationalPaymentConsentsConsentIdFundsConfirmationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
