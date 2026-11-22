import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiCatalogSellerPortalSkusIdsRoute,
  getApiCatalogSellerPortalSkusSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const skuHandler = app
  .openapi(getApiCatalogSellerPortalSkusSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSellerPortalSkusIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
