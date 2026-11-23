import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteProductsIdRoute,
  getProductsIdRoute,
  getProductsRoute,
  postProductsRoute,
  putProductsIdRoute,
} from '../routes'

export const getProductsRouteHandler: RouteHandler<typeof getProductsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postProductsRouteHandler: RouteHandler<typeof postProductsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProductsIdRouteHandler: RouteHandler<typeof deleteProductsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getProductsIdRouteHandler: RouteHandler<typeof getProductsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putProductsIdRouteHandler: RouteHandler<typeof putProductsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
