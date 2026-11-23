import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getProductsProductIdRoute,
  getProductsProductIdVariantsRoute,
  getProductsRoute,
  postProductsProductIdDeleteRoute,
  postProductsProductIdRoute,
  postProductsProductIdUpdateOptionsRoute,
  postProductsProductIdVariantsRoute,
  postProductsRoute,
} from '../routes'

export const getProductsProductIdRouteHandler: RouteHandler<
  typeof getProductsProductIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProductsProductIdRouteHandler: RouteHandler<
  typeof postProductsProductIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProductsProductIdDeleteRouteHandler: RouteHandler<
  typeof postProductsProductIdDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProductsProductIdUpdateOptionsRouteHandler: RouteHandler<
  typeof postProductsProductIdUpdateOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProductsRouteHandler: RouteHandler<typeof getProductsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postProductsRouteHandler: RouteHandler<typeof postProductsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getProductsProductIdVariantsRouteHandler: RouteHandler<
  typeof getProductsProductIdVariantsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProductsProductIdVariantsRouteHandler: RouteHandler<
  typeof postProductsProductIdVariantsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
