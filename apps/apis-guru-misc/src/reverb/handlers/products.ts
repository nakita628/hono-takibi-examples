import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getProductsReviewsIdRoute,
  getProductsSlugReviewsRoute,
  postProductsSlugReviewsRoute,
  putProductsReviewsIdRoute,
} from '../routes'

export const getProductsReviewsIdRouteHandler: RouteHandler<
  typeof getProductsReviewsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putProductsReviewsIdRouteHandler: RouteHandler<
  typeof putProductsReviewsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProductsSlugReviewsRouteHandler: RouteHandler<
  typeof getProductsSlugReviewsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProductsSlugReviewsRouteHandler: RouteHandler<
  typeof postProductsSlugReviewsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
