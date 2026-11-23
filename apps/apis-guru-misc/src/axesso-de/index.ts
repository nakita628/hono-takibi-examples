import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAmzAmazonLookupBuyRecommendationsRoute,
  getAmzAmazonLookupProductRoute,
  getAmzAmazonSearchByKeywordRoute,
  getAmzSortOptionsRoute,
} from './routes'
import {
  getAmzAmazonLookupBuyRecommendationsRouteHandler,
  getAmzAmazonLookupProductRouteHandler,
  getAmzAmazonSearchByKeywordRouteHandler,
  getAmzSortOptionsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getAmzAmazonLookupBuyRecommendationsRoute,
    getAmzAmazonLookupBuyRecommendationsRouteHandler,
  )
  .openapi(getAmzAmazonLookupProductRoute, getAmzAmazonLookupProductRouteHandler)
  .openapi(getAmzAmazonSearchByKeywordRoute, getAmzAmazonSearchByKeywordRouteHandler)
  .openapi(getAmzSortOptionsRoute, getAmzSortOptionsRouteHandler)

export default app
