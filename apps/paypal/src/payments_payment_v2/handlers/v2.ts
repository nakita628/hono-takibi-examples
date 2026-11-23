import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV2PaymentsAuthorizationsAuthorizationIdRoute,
  getV2PaymentsCapturesCaptureIdRoute,
  getV2PaymentsRefundsRefundIdRoute,
  postV2PaymentsAuthorizationsAuthorizationIdCaptureRoute,
  postV2PaymentsAuthorizationsAuthorizationIdReauthorizeRoute,
  postV2PaymentsAuthorizationsAuthorizationIdVoidRoute,
  postV2PaymentsCapturesCaptureIdRefundRoute,
  postV2PaymentsFindEligibleMethodsRoute,
} from '../routes'

export const getV2PaymentsAuthorizationsAuthorizationIdRouteHandler: RouteHandler<
  typeof getV2PaymentsAuthorizationsAuthorizationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2PaymentsAuthorizationsAuthorizationIdCaptureRouteHandler: RouteHandler<
  typeof postV2PaymentsAuthorizationsAuthorizationIdCaptureRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2PaymentsAuthorizationsAuthorizationIdReauthorizeRouteHandler: RouteHandler<
  typeof postV2PaymentsAuthorizationsAuthorizationIdReauthorizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2PaymentsAuthorizationsAuthorizationIdVoidRouteHandler: RouteHandler<
  typeof postV2PaymentsAuthorizationsAuthorizationIdVoidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2PaymentsCapturesCaptureIdRouteHandler: RouteHandler<
  typeof getV2PaymentsCapturesCaptureIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2PaymentsCapturesCaptureIdRefundRouteHandler: RouteHandler<
  typeof postV2PaymentsCapturesCaptureIdRefundRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2PaymentsFindEligibleMethodsRouteHandler: RouteHandler<
  typeof postV2PaymentsFindEligibleMethodsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2PaymentsRefundsRefundIdRouteHandler: RouteHandler<
  typeof getV2PaymentsRefundsRefundIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
