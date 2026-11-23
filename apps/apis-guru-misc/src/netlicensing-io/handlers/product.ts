import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteProductProductNumberRoute,
  getProductProductNumberRoute,
  getProductRoute,
  postProductProductNumberRoute,
  postProductRoute,
} from '../routes'

export const getProductRouteHandler: RouteHandler<typeof getProductRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postProductRouteHandler: RouteHandler<typeof postProductRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProductProductNumberRouteHandler: RouteHandler<
  typeof deleteProductProductNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProductProductNumberRouteHandler: RouteHandler<
  typeof getProductProductNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProductProductNumberRouteHandler: RouteHandler<
  typeof postProductProductNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}
