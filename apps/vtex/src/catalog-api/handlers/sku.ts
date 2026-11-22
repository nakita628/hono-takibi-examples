import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiCatalogPvtStockkeepingunitRoute,
  getApiCatalogPvtStockkeepingunitSkuIdRoute,
  getApiCatalogSystemPvtSkuStockkeepingunitbyalternateIdAlternateIdRoute,
  getApiCatalogSystemPvtSkuStockkeepingunitbyidSkuIdRoute,
  getApiCatalogSystemPvtSkuStockkeepingunitByProductIdProductIdRoute,
  getApiCatalogSystemPvtSkuStockkeepingunitidbyrefidRefIdRoute,
  getApiCatalogSystemPvtSkuStockkeepingunitidsRoute,
  postApiCatalogPvtStockkeepingunitRoute,
  postApiCatalogSystemPubSkuStockkeepingunitidsbyrefidsRoute,
  putApiCatalogPvtStockkeepingunitSkuIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const skuHandler = app
  .openapi(getApiCatalogPvtStockkeepingunitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCatalogPvtStockkeepingunitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogPvtStockkeepingunitSkuIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCatalogPvtStockkeepingunitSkuIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCatalogSystemPubSkuStockkeepingunitidsbyrefidsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPvtSkuStockkeepingunitByProductIdProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPvtSkuStockkeepingunitbyalternateIdAlternateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPvtSkuStockkeepingunitbyidSkuIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPvtSkuStockkeepingunitidbyrefidRefIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPvtSkuStockkeepingunitidsRoute, (c) => {
    throw new Error('Not implemented')
  })
