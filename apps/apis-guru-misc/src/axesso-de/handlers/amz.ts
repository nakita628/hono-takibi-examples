import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAmzAmazonLookupBuyRecommendationsRoute,
  getAmzAmazonLookupProductRoute,
  getAmzAmazonSearchByKeywordRoute,
  getAmzSortOptionsRoute,
} from '../routes'

export const getAmzAmazonLookupBuyRecommendationsRouteHandler: RouteHandler<
  typeof getAmzAmazonLookupBuyRecommendationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAmzAmazonLookupProductRouteHandler: RouteHandler<
  typeof getAmzAmazonLookupProductRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAmzAmazonSearchByKeywordRouteHandler: RouteHandler<
  typeof getAmzAmazonSearchByKeywordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAmzSortOptionsRouteHandler: RouteHandler<typeof getAmzSortOptionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
