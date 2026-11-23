import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getComparisonShoppingPagesFindRoute,
  getComparisonShoppingPagesIdListingsRoute,
  getComparisonShoppingPagesIdReviewsRoute,
  getComparisonShoppingPagesIdRoute,
  getComparisonShoppingPagesRoute,
} from '../routes'

export const getComparisonShoppingPagesRouteHandler: RouteHandler<
  typeof getComparisonShoppingPagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getComparisonShoppingPagesFindRouteHandler: RouteHandler<
  typeof getComparisonShoppingPagesFindRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getComparisonShoppingPagesIdRouteHandler: RouteHandler<
  typeof getComparisonShoppingPagesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getComparisonShoppingPagesIdListingsRouteHandler: RouteHandler<
  typeof getComparisonShoppingPagesIdListingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getComparisonShoppingPagesIdReviewsRouteHandler: RouteHandler<
  typeof getComparisonShoppingPagesIdReviewsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
