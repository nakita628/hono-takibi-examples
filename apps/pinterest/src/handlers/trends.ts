import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTrendsEditorialArticlesRoute,
  getTrendsProductCategoriesDetailsRoute,
  getTrendsProductCategoriesTrendingRoute,
  getTrendsTopicsFeaturedRoute,
} from '../routes'

const app = new OpenAPIHono()

export const trendsHandler = app
  .openapi(getTrendsEditorialArticlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTrendsProductCategoriesDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTrendsProductCategoriesTrendingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTrendsTopicsFeaturedRoute, (c) => {
    throw new Error('Not implemented')
  })
