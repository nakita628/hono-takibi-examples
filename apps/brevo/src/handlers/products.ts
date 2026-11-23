import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getProductsIdRoute,
  getProductsRoute,
  postProductsBatchRoute,
  postProductsIdAlertsTypeRoute,
  postProductsRoute,
} from '../routes'

export const getProductsRouteHandler: RouteHandler<typeof getProductsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postProductsRouteHandler: RouteHandler<typeof postProductsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postProductsBatchRouteHandler: RouteHandler<typeof postProductsBatchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getProductsIdRouteHandler: RouteHandler<typeof getProductsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postProductsIdAlertsTypeRouteHandler: RouteHandler<
  typeof postProductsIdAlertsTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
