import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTrendingCategoriesCategoryIdPageNumberIndexRoute,
  getTrendingCategoriesIndexRoute,
  getTrendingDetailsTrendingEntryTypeIdentifierIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const trendingHandler = app
  .openapi(getTrendingCategoriesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTrendingCategoriesCategoryIdPageNumberIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTrendingDetailsTrendingEntryTypeIdentifierIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
