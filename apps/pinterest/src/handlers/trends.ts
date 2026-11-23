import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTrendsEditorialArticlesRoute,
  getTrendsKeywordsRegionTopTrendTypeRoute,
  getTrendsProductCategoriesDetailsRoute,
  getTrendsProductCategoriesTrendingRoute,
  getTrendsTopicsFeaturedRoute,
} from '../routes'

export const getTrendsEditorialArticlesRouteHandler: RouteHandler<
  typeof getTrendsEditorialArticlesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTrendsKeywordsRegionTopTrendTypeRouteHandler: RouteHandler<
  typeof getTrendsKeywordsRegionTopTrendTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTrendsProductCategoriesDetailsRouteHandler: RouteHandler<
  typeof getTrendsProductCategoriesDetailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTrendsProductCategoriesTrendingRouteHandler: RouteHandler<
  typeof getTrendsProductCategoriesTrendingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTrendsTopicsFeaturedRouteHandler: RouteHandler<
  typeof getTrendsTopicsFeaturedRoute
> = async (c) => {
  throw new Error('Not implemented')
}
