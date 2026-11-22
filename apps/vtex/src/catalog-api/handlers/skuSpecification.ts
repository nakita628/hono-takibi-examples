import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiCatalogPvtStockkeepingunitSkuIdSpecificationRoute,
  deleteApiCatalogPvtStockkeepingunitSkuIdSpecificationSpecificationIdRoute,
  getApiCatalogPvtStockkeepingunitSkuIdSpecificationRoute,
  postApiCatalogPvtStockkeepingunitSkuIdSpecificationRoute,
  putApiCatalogPvtStockkeepingunitSkuIdSpecificationRoute,
  putApiCatalogPvtStockkeepingunitSkuIdSpecificationvalueRoute,
} from '../routes'

const app = new OpenAPIHono()

export const skuSpecificationHandler = app
  .openapi(deleteApiCatalogPvtStockkeepingunitSkuIdSpecificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogPvtStockkeepingunitSkuIdSpecificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCatalogPvtStockkeepingunitSkuIdSpecificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCatalogPvtStockkeepingunitSkuIdSpecificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCatalogPvtStockkeepingunitSkuIdSpecificationSpecificationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCatalogPvtStockkeepingunitSkuIdSpecificationvalueRoute, (c) => {
    throw new Error('Not implemented')
  })
