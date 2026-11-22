import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiCatalogSellerPortalProductsParamRoute,
  getApiCatalogSellerPortalProductsProductIdDescriptionRoute,
  getApiCatalogSellerPortalProductsProductIdRoute,
  postApiCatalogSellerPortalProductsRoute,
  putApiCatalogSellerPortalProductsProductIdDescriptionRoute,
  putApiCatalogSellerPortalProductsProductIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const productHandler = app
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
