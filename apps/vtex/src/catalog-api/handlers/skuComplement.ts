import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiCatalogPvtSkucomplementSkuComplementIdRoute,
  getApiCatalogPvtSkucomplementSkuComplementIdRoute,
  getApiCatalogPvtStockkeepingunitSkuIdComplementComplementTypeIdRoute,
  getApiCatalogPvtStockkeepingunitSkuIdComplementRoute,
  getApiCatalogSystemPvtSkuComplementsParentSkuIdTypeRoute,
  postApiCatalogPvtSkucomplementRoute,
} from '../routes'

const app = new OpenAPIHono()

export const skuComplementHandler = app
  .openapi(postApiCatalogPvtSkucomplementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCatalogPvtSkucomplementSkuComplementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogPvtSkucomplementSkuComplementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogPvtStockkeepingunitSkuIdComplementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogPvtStockkeepingunitSkuIdComplementComplementTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPvtSkuComplementsParentSkuIdTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
