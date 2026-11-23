import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteCustomerSupportCustomersIdRoute,
  getCustomerSupportCustomersIdRoute,
  getCustomerSupportCustomersRoute,
  patchCustomerSupportCustomersIdRoute,
  postCustomerSupportCustomersRoute,
} from '../routes'

export const getCustomerSupportCustomersRouteHandler: RouteHandler<
  typeof getCustomerSupportCustomersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCustomerSupportCustomersRouteHandler: RouteHandler<
  typeof postCustomerSupportCustomersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCustomerSupportCustomersIdRouteHandler: RouteHandler<
  typeof deleteCustomerSupportCustomersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCustomerSupportCustomersIdRouteHandler: RouteHandler<
  typeof getCustomerSupportCustomersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchCustomerSupportCustomersIdRouteHandler: RouteHandler<
  typeof patchCustomerSupportCustomersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
