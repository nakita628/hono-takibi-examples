import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteCategoriesKeywordsIdKeywordRoute,
  getCategoriesRoute,
  postCategoriesKeywordsRoute,
} from '../routes'

export const getCategoriesRouteHandler: RouteHandler<typeof getCategoriesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postCategoriesKeywordsRouteHandler: RouteHandler<
  typeof postCategoriesKeywordsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCategoriesKeywordsIdKeywordRouteHandler: RouteHandler<
  typeof deleteCategoriesKeywordsIdKeywordRoute
> = async (c) => {
  throw new Error('Not implemented')
}
