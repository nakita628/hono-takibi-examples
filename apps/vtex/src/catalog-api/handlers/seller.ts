import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiCatalogSystemPvtSellerListRoute,
  getApiCatalogSystemPvtSellerSellerIdRoute,
  getApiCatalogSystemPvtSellersSellerIdRoute,
  postApiCatalogSystemPvtSellerRoute,
  putApiCatalogSystemPvtSellerRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sellerHandler = app
  .openapi(postApiCatalogSystemPvtSellerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCatalogSystemPvtSellerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPvtSellerListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPvtSellerSellerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPvtSellersSellerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
