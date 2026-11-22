import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiCatalogSystemPvtSkusellerSellerIdSellerSkuIdRoute,
  postApiCatalogSystemPvtSkusellerChangenotificationSellerIdSellerSkuIdRoute,
  postApiCatalogSystemPvtSkusellerChangenotificationSkuIdRoute,
  postApiCatalogSystemPvtSkusellerRemoveSellerIdSellerSkuIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const skuSellerHandler = app
  .openapi(postApiCatalogSystemPvtSkusellerChangenotificationSellerIdSellerSkuIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCatalogSystemPvtSkusellerChangenotificationSkuIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCatalogSystemPvtSkusellerRemoveSellerIdSellerSkuIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPvtSkusellerSellerIdSellerSkuIdRoute, (c) => {
    throw new Error('Not implemented')
  })
