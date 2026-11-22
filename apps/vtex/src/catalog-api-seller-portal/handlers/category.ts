import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiCatalogSellerPortalCategoryTreeCategoriesCategoryIdRoute,
  getApiCatalogSellerPortalCategoryTreeRoute,
  postApiCatalogSellerPortalCategoryTreeCategoriesRoute,
  putApiCatalogSellerPortalCategoryTreeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const categoryHandler = app
  .openapi(getApiCatalogSellerPortalCategoryTreeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCatalogSellerPortalCategoryTreeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCatalogSellerPortalCategoryTreeCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSellerPortalCategoryTreeCategoriesCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
