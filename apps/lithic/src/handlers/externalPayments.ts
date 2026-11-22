import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV1ExternalPaymentsExternalPaymentTokenRoute,
  getV1ExternalPaymentsRoute,
  postV1ExternalPaymentsExternalPaymentTokenCancelRoute,
  postV1ExternalPaymentsExternalPaymentTokenReleaseRoute,
  postV1ExternalPaymentsExternalPaymentTokenReverseRoute,
  postV1ExternalPaymentsExternalPaymentTokenSettleRoute,
  postV1ExternalPaymentsRoute,
} from '../routes'

export const getV1ExternalPaymentsRouteHandler: RouteHandler<
  typeof getV1ExternalPaymentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ExternalPaymentsRouteHandler: RouteHandler<
  typeof postV1ExternalPaymentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ExternalPaymentsExternalPaymentTokenRouteHandler: RouteHandler<
  typeof getV1ExternalPaymentsExternalPaymentTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ExternalPaymentsExternalPaymentTokenSettleRouteHandler: RouteHandler<
  typeof postV1ExternalPaymentsExternalPaymentTokenSettleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ExternalPaymentsExternalPaymentTokenReleaseRouteHandler: RouteHandler<
  typeof postV1ExternalPaymentsExternalPaymentTokenReleaseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ExternalPaymentsExternalPaymentTokenCancelRouteHandler: RouteHandler<
  typeof postV1ExternalPaymentsExternalPaymentTokenCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ExternalPaymentsExternalPaymentTokenReverseRouteHandler: RouteHandler<
  typeof postV1ExternalPaymentsExternalPaymentTokenReverseRoute
> = async (c) => {
  throw new Error('Not implemented')
}
