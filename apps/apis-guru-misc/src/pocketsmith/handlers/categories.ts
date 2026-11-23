import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteCategoriesIdRoute,
  getCategoriesIdRoute,
  getCategoriesIdTransactionsRoute,
  postCategoriesIdCategoryRulesRoute,
  putCategoriesIdRoute,
} from '../routes'

export const deleteCategoriesIdRouteHandler: RouteHandler<typeof deleteCategoriesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getCategoriesIdRouteHandler: RouteHandler<typeof getCategoriesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putCategoriesIdRouteHandler: RouteHandler<typeof putCategoriesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postCategoriesIdCategoryRulesRouteHandler: RouteHandler<
  typeof postCategoriesIdCategoryRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCategoriesIdTransactionsRouteHandler: RouteHandler<
  typeof getCategoriesIdTransactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
