import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteCustomersCustomerIdRoute,
  getCustomersCustomerIdMandatesRoute,
  getCustomersCustomerIdPaymentMethodsRoute,
  getCustomersCustomerIdRoute,
  getCustomersListRoute,
  getCustomersPaymentMethodsRoute,
  postCustomersCustomerIdRoute,
  postCustomersRoute,
} from '../routes'

export const getCustomersCustomerIdMandatesRouteHandler: RouteHandler<
  typeof getCustomersCustomerIdMandatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCustomersRouteHandler: RouteHandler<typeof postCustomersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCustomersCustomerIdRouteHandler: RouteHandler<
  typeof getCustomersCustomerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCustomersCustomerIdRouteHandler: RouteHandler<
  typeof postCustomersCustomerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCustomersCustomerIdRouteHandler: RouteHandler<
  typeof deleteCustomersCustomerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCustomersListRouteHandler: RouteHandler<typeof getCustomersListRoute> = async (
  c,
) => {
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
