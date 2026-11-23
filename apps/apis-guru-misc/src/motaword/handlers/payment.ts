import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePaymentCardIdDeleteRoute,
  getPaymentCardIdRoute,
  getPaymentRoute,
  postPaymentCardIdResetPaymentCodeRoute,
  postPaymentResetCorporatePaymentCodeRoute,
  postPaymentRoute,
  postPaymentToggleCorporateAutoChargeRoute,
} from '../routes'

export const getPaymentRouteHandler: RouteHandler<typeof getPaymentRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postPaymentRouteHandler: RouteHandler<typeof postPaymentRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postPaymentResetCorporatePaymentCodeRouteHandler: RouteHandler<
  typeof postPaymentResetCorporatePaymentCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPaymentToggleCorporateAutoChargeRouteHandler: RouteHandler<
  typeof postPaymentToggleCorporateAutoChargeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPaymentCardIdRouteHandler: RouteHandler<typeof getPaymentCardIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deletePaymentCardIdDeleteRouteHandler: RouteHandler<
  typeof deletePaymentCardIdDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPaymentCardIdResetPaymentCodeRouteHandler: RouteHandler<
  typeof postPaymentCardIdResetPaymentCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
