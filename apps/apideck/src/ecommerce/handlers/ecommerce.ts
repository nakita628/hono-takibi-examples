import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getEcommerceCustomersIdRoute,
  getEcommerceCustomersRoute,
  getEcommerceOrdersIdRoute,
  getEcommerceOrdersRoute,
  getEcommerceProductsIdRoute,
  getEcommerceProductsRoute,
  getEcommerceStoreRoute,
} from '../routes'

export const getEcommerceCustomersRouteHandler: RouteHandler<
  typeof getEcommerceCustomersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEcommerceCustomersIdRouteHandler: RouteHandler<
  typeof getEcommerceCustomersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEcommerceOrdersRouteHandler: RouteHandler<typeof getEcommerceOrdersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getEcommerceOrdersIdRouteHandler: RouteHandler<
  typeof getEcommerceOrdersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEcommerceProductsRouteHandler: RouteHandler<
  typeof getEcommerceProductsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEcommerceProductsIdRouteHandler: RouteHandler<
  typeof getEcommerceProductsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEcommerceStoreRouteHandler: RouteHandler<typeof getEcommerceStoreRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
