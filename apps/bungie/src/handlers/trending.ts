import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTrendingCategoriesCategoryIdPageNumberIndexRoute,
  getTrendingCategoriesIndexRoute,
  getTrendingDetailsTrendingEntryTypeIdentifierIndexRoute,
} from '../routes'

export const getTrendingCategoriesIndexRouteHandler: RouteHandler<
  typeof getTrendingCategoriesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTrendingCategoriesCategoryIdPageNumberIndexRouteHandler: RouteHandler<
  typeof getTrendingCategoriesCategoryIdPageNumberIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTrendingDetailsTrendingEntryTypeIdentifierIndexRouteHandler: RouteHandler<
  typeof getTrendingDetailsTrendingEntryTypeIdentifierIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
