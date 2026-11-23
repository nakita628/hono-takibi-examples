import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiCatalogSellerPortalBrandsBrandIdRoute,
  getApiCatalogSellerPortalBrandsRoute,
  getApiCatalogSellerPortalCategoryTreeCategoriesCategoryIdRoute,
  getApiCatalogSellerPortalCategoryTreeRoute,
  getApiCatalogSellerPortalProductsParamRoute,
  getApiCatalogSellerPortalProductsProductIdDescriptionRoute,
  getApiCatalogSellerPortalProductsProductIdRoute,
  getApiCatalogSellerPortalSkusIdsRoute,
  getApiCatalogSellerPortalSkusSearchRoute,
  postApiCatalogSellerPortalBrandsRoute,
  postApiCatalogSellerPortalCategoryTreeCategoriesRoute,
  postApiCatalogSellerPortalProductsRoute,
  putApiCatalogSellerPortalBrandsBrandIdRoute,
  putApiCatalogSellerPortalCategoryTreeRoute,
  putApiCatalogSellerPortalProductsProductIdDescriptionRoute,
  putApiCatalogSellerPortalProductsProductIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiCatalogSellerPortalBrandsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCatalogSellerPortalBrandsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSellerPortalBrandsBrandIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCatalogSellerPortalBrandsBrandIdRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(postApiCatalogSellerPortalProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSellerPortalProductsParamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSellerPortalProductsProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCatalogSellerPortalProductsProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSellerPortalProductsProductIdDescriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCatalogSellerPortalProductsProductIdDescriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSellerPortalSkusSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSellerPortalSkusIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
