import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePaymentMethodsPaymentMethodIdRoute,
  getPaymentMethodsPaymentMethodIdRoute,
  getPaymentMethodsRoute,
  optionsPaymentMethodsPaymentMethodIdRoute,
  optionsPaymentMethodsRoute,
  patchPaymentMethodsPaymentMethodIdRoute,
  postPaymentMethodsRoute,
} from '../routes'

export const getPaymentMethodsRouteHandler: RouteHandler<typeof getPaymentMethodsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const optionsPaymentMethodsRouteHandler: RouteHandler<
  typeof optionsPaymentMethodsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPaymentMethodsRouteHandler: RouteHandler<typeof postPaymentMethodsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deletePaymentMethodsPaymentMethodIdRouteHandler: RouteHandler<
  typeof deletePaymentMethodsPaymentMethodIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPaymentMethodsPaymentMethodIdRouteHandler: RouteHandler<
  typeof getPaymentMethodsPaymentMethodIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsPaymentMethodsPaymentMethodIdRouteHandler: RouteHandler<
  typeof optionsPaymentMethodsPaymentMethodIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPaymentMethodsPaymentMethodIdRouteHandler: RouteHandler<
  typeof patchPaymentMethodsPaymentMethodIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
