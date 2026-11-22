import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiCatalogPvtCategoryCategoryIdRoute,
  getApiCatalogSystemPubCategoryTreeCategoryLevelsRoute,
  postApiCatalogPvtCategoryRoute,
  putApiCatalogPvtCategoryCategoryIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const categoryHandler = app
  .openapi(postApiCatalogPvtCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogPvtCategoryCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCatalogPvtCategoryCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPubCategoryTreeCategoryLevelsRoute, (c) => {
    throw new Error('Not implemented')
  })
