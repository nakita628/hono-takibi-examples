import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiCatalogPvtProductProductIdSimilarcategoryCategoryIdRoute,
  getApiCatalogPvtProductProductIdSimilarcategoryIndexRoute,
  postApiCatalogPvtProductProductIdSimilarcategoryCategoryIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const similarCategoryHandler = app
  .openapi(getApiCatalogPvtProductProductIdSimilarcategoryIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCatalogPvtProductProductIdSimilarcategoryCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCatalogPvtProductProductIdSimilarcategoryCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
