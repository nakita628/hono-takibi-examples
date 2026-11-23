import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePaymentMethodsIdRoute,
  getPaymentMethodsIdRoute,
  putPaymentMethodsIdRoute,
} from '../routes'

export const deletePaymentMethodsIdRouteHandler: RouteHandler<
  typeof deletePaymentMethodsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPaymentMethodsIdRouteHandler: RouteHandler<
  typeof getPaymentMethodsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPaymentMethodsIdRouteHandler: RouteHandler<
  typeof putPaymentMethodsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
