import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getInternationalPaymentsInternationalPaymentIdPaymentDetailsRoute,
  getInternationalPaymentsInternationalPaymentIdRoute,
  postInternationalPaymentsRoute,
} from '../routes'

export const postInternationalPaymentsRouteHandler: RouteHandler<
  typeof postInternationalPaymentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getInternationalPaymentsInternationalPaymentIdRouteHandler: RouteHandler<
  typeof getInternationalPaymentsInternationalPaymentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getInternationalPaymentsInternationalPaymentIdPaymentDetailsRouteHandler: RouteHandler<
  typeof getInternationalPaymentsInternationalPaymentIdPaymentDetailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
