import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getProductsProductIdRoute,
  getProductsRoute,
  patchProductsProductIdRoute,
  postProductsRoute,
} from '../routes'

export const getProductsRouteHandler: RouteHandler<typeof getProductsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postProductsRouteHandler: RouteHandler<typeof postProductsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getProductsProductIdRouteHandler: RouteHandler<
  typeof getProductsProductIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchProductsProductIdRouteHandler: RouteHandler<
  typeof patchProductsProductIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
