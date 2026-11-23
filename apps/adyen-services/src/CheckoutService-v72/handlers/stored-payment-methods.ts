import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteStoredPaymentMethodsStoredPaymentMethodIdRoute,
  getStoredPaymentMethodsRoute,
  postStoredPaymentMethodsRoute,
} from '../routes'

export const getStoredPaymentMethodsRouteHandler: RouteHandler<
  typeof getStoredPaymentMethodsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postStoredPaymentMethodsRouteHandler: RouteHandler<
  typeof postStoredPaymentMethodsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteStoredPaymentMethodsStoredPaymentMethodIdRouteHandler: RouteHandler<
  typeof deleteStoredPaymentMethodsStoredPaymentMethodIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
