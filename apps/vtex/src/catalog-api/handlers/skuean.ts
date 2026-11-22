import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiCatalogPvtStockkeepingunitSkuIdEanEanRoute,
  deleteApiCatalogPvtStockkeepingunitSkuIdEanRoute,
  getApiCatalogPvtStockkeepingunitSkuIdEanRoute,
  getApiCatalogSystemPvtSkuStockkeepingunitbyeanEanRoute,
  postApiCatalogPvtStockkeepingunitSkuIdEanEanRoute,
} from '../routes'

const app = new OpenAPIHono()

export const skueanHandler = app
  .openapi(deleteApiCatalogPvtStockkeepingunitSkuIdEanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogPvtStockkeepingunitSkuIdEanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCatalogPvtStockkeepingunitSkuIdEanEanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCatalogPvtStockkeepingunitSkuIdEanEanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPvtSkuStockkeepingunitbyeanEanRoute, (c) => {
    throw new Error('Not implemented')
  })
