import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteCustomersCustomerIdRoute,
  getCustomersCustomerIdRoute,
  getCustomersListRoute,
  getV1CustomersReferenceMerchantReferenceIdRoute,
  postCustomersCustomerIdRoute,
  postCustomersRoute,
} from '../routes'

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

export const getV1CustomersReferenceMerchantReferenceIdRouteHandler: RouteHandler<
  typeof getV1CustomersReferenceMerchantReferenceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCustomersListRouteHandler: RouteHandler<typeof getCustomersListRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
