import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV1PaymentsPaymentTokenRoute,
  getV1PaymentsRoute,
  postV1PaymentsPaymentTokenRetryRoute,
  postV1PaymentsPaymentTokenReturnRoute,
  postV1PaymentsRoute,
  postV1PaymentsStablecoinRoute,
  postV1SimulatePaymentsPaymentTokenActionRoute,
  postV1SimulatePaymentsReceiptRoute,
  postV1SimulatePaymentsReleaseRoute,
  postV1SimulatePaymentsReturnRoute,
} from '../routes'

export const getV1PaymentsRouteHandler: RouteHandler<typeof getV1PaymentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PaymentsRouteHandler: RouteHandler<typeof postV1PaymentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PaymentsStablecoinRouteHandler: RouteHandler<
  typeof postV1PaymentsStablecoinRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PaymentsPaymentTokenRouteHandler: RouteHandler<
  typeof getV1PaymentsPaymentTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PaymentsPaymentTokenRetryRouteHandler: RouteHandler<
  typeof postV1PaymentsPaymentTokenRetryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PaymentsPaymentTokenReturnRouteHandler: RouteHandler<
  typeof postV1PaymentsPaymentTokenReturnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SimulatePaymentsReceiptRouteHandler: RouteHandler<
  typeof postV1SimulatePaymentsReceiptRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SimulatePaymentsReleaseRouteHandler: RouteHandler<
  typeof postV1SimulatePaymentsReleaseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SimulatePaymentsReturnRouteHandler: RouteHandler<
  typeof postV1SimulatePaymentsReturnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SimulatePaymentsPaymentTokenActionRouteHandler: RouteHandler<
  typeof postV1SimulatePaymentsPaymentTokenActionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
