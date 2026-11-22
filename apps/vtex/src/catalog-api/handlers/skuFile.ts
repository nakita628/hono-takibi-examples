import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiCatalogPvtStockkeepingunitDisassociateSkuIdFileSkuFileIdRoute,
  deleteApiCatalogPvtStockkeepingunitSkuIdFileRoute,
  deleteApiCatalogPvtStockkeepingunitSkuIdFileSkuFileIdRoute,
  getApiCatalogPvtStockkeepingunitSkuIdFileRoute,
  postApiCatalogPvtStockkeepingunitSkuIdFileRoute,
  putApiCatalogPvtStockkeepingunitCopySkuIdfromSkuIdtoFileIndexRoute,
  putApiCatalogPvtStockkeepingunitSkuIdFileSkuFileIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const skuFileHandler = app
  .openapi(putApiCatalogPvtStockkeepingunitCopySkuIdfromSkuIdtoFileIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCatalogPvtStockkeepingunitDisassociateSkuIdFileSkuFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCatalogPvtStockkeepingunitSkuIdFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogPvtStockkeepingunitSkuIdFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCatalogPvtStockkeepingunitSkuIdFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCatalogPvtStockkeepingunitSkuIdFileSkuFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCatalogPvtStockkeepingunitSkuIdFileSkuFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
