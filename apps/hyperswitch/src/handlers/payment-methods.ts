import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePaymentMethodsMethodIdRoute,
  getPaymentMethodsMethodIdRoute,
  postPaymentMethodsMethodIdUpdateRoute,
  postPaymentMethodsRoute,
} from '../routes'

export const postPaymentMethodsRouteHandler: RouteHandler<typeof postPaymentMethodsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getPaymentMethodsMethodIdRouteHandler: RouteHandler<
  typeof getPaymentMethodsMethodIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePaymentMethodsMethodIdRouteHandler: RouteHandler<
  typeof deletePaymentMethodsMethodIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPaymentMethodsMethodIdUpdateRouteHandler: RouteHandler<
  typeof postPaymentMethodsMethodIdUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
