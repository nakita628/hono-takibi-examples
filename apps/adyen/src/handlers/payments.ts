import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postPaymentsDetailsRoute,
  postPaymentsPaymentPspReferenceAmountUpdatesRoute,
  postPaymentsPaymentPspReferenceCancelsRoute,
  postPaymentsPaymentPspReferenceCapturesRoute,
  postPaymentsPaymentPspReferenceRefundsRoute,
  postPaymentsPaymentPspReferenceReversalsRoute,
  postPaymentsRoute,
} from '../routes'

export const postPaymentsRouteHandler: RouteHandler<typeof postPaymentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postPaymentsDetailsRouteHandler: RouteHandler<
  typeof postPaymentsDetailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPaymentsPaymentPspReferenceAmountUpdatesRouteHandler: RouteHandler<
  typeof postPaymentsPaymentPspReferenceAmountUpdatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPaymentsPaymentPspReferenceCancelsRouteHandler: RouteHandler<
  typeof postPaymentsPaymentPspReferenceCancelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPaymentsPaymentPspReferenceCapturesRouteHandler: RouteHandler<
  typeof postPaymentsPaymentPspReferenceCapturesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPaymentsPaymentPspReferenceRefundsRouteHandler: RouteHandler<
  typeof postPaymentsPaymentPspReferenceRefundsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPaymentsPaymentPspReferenceReversalsRouteHandler: RouteHandler<
  typeof postPaymentsPaymentPspReferenceReversalsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
