import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiCatalogPvtStockkeepingunitkitKitIdRoute,
  deleteApiCatalogPvtStockkeepingunitkitRoute,
  getApiCatalogPvtStockkeepingunitkitKitIdRoute,
  getApiCatalogPvtStockkeepingunitkitRoute,
  postApiCatalogPvtStockkeepingunitkitRoute,
} from '../routes'

const app = new OpenAPIHono()

export const skuKitHandler = app
  .openapi(deleteApiCatalogPvtStockkeepingunitkitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogPvtStockkeepingunitkitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCatalogPvtStockkeepingunitkitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCatalogPvtStockkeepingunitkitKitIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogPvtStockkeepingunitkitKitIdRoute, (c) => {
    throw new Error('Not implemented')
  })
