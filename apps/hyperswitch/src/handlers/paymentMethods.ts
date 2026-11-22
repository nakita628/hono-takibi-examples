import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePaymentMethodsMethodIdRoute,
  getAccountPaymentMethodsRoute,
  getCustomersCustomerIdPaymentMethodsRoute,
  getCustomersPaymentMethodsRoute,
  getPaymentMethodsMethodIdRoute,
  getPaymentsPaymentIdClientRoute,
  postCustomerIdPaymentMethodsPaymentMethodIdDefaultRoute,
  postPaymentMethodsMethodIdUpdateRoute,
  postPaymentMethodsRoute,
} from '../routes'

export const postPaymentMethodsRouteHandler: RouteHandler<typeof postPaymentMethodsRoute> = async (
  c,
) => {}

export const getAccountPaymentMethodsRouteHandler: RouteHandler<
  typeof getAccountPaymentMethodsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCustomersCustomerIdPaymentMethodsRouteHandler: RouteHandler<
  typeof getCustomersCustomerIdPaymentMethodsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCustomersPaymentMethodsRouteHandler: RouteHandler<
  typeof getCustomersPaymentMethodsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPaymentsPaymentIdClientRouteHandler: RouteHandler<
  typeof getPaymentsPaymentIdClientRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCustomerIdPaymentMethodsPaymentMethodIdDefaultRouteHandler: RouteHandler<
  typeof postCustomerIdPaymentMethodsPaymentMethodIdDefaultRoute
> = async (c) => {
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
