import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAmzAmazonLookupBuyRecommendationsRoute,
  getAmzAmazonLookupProductRoute,
  getAmzAmazonSearchByKeywordRoute,
  getAmzSortOptionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const amzHandler = app
  .openapi(getAmzAmazonLookupBuyRecommendationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAmzAmazonLookupProductRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAmzAmazonSearchByKeywordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAmzSortOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
