import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getDomesticScheduledPaymentConsentsConsentIdRoute,
  postDomesticScheduledPaymentConsentsRoute,
} from '../routes'

export const postDomesticScheduledPaymentConsentsRouteHandler: RouteHandler<
  typeof postDomesticScheduledPaymentConsentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDomesticScheduledPaymentConsentsConsentIdRouteHandler: RouteHandler<
  typeof getDomesticScheduledPaymentConsentsConsentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
