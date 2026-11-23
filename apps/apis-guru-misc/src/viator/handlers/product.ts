import type { RouteHandler } from '@hono/zod-openapi'
import type { getProductPhotosRoute, getProductReviewsRoute, getProductRoute } from '../routes'

export const getProductRouteHandler: RouteHandler<typeof getProductRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getProductPhotosRouteHandler: RouteHandler<typeof getProductPhotosRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getProductReviewsRouteHandler: RouteHandler<typeof getProductReviewsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
