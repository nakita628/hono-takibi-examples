import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getDomesticPaymentConsentsConsentIdFundsConfirmationRoute,
  getDomesticPaymentConsentsConsentIdRoute,
  postDomesticPaymentConsentsRoute,
} from '../routes'

export const postDomesticPaymentConsentsRouteHandler: RouteHandler<
  typeof postDomesticPaymentConsentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDomesticPaymentConsentsConsentIdRouteHandler: RouteHandler<
  typeof getDomesticPaymentConsentsConsentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDomesticPaymentConsentsConsentIdFundsConfirmationRouteHandler: RouteHandler<
  typeof getDomesticPaymentConsentsConsentIdFundsConfirmationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
