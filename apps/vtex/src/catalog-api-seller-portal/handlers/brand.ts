import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiCatalogSellerPortalBrandsBrandIdRoute,
  getApiCatalogSellerPortalBrandsRoute,
  postApiCatalogSellerPortalBrandsRoute,
  putApiCatalogSellerPortalBrandsBrandIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const brandHandler = app
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
