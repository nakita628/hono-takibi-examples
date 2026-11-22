import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiCatalogPvtProductProductIdSalespolicyTradepolicyIdRoute,
  getApiCatalogPvtProductProductIdSalespolicyRoute,
  getApiCatalogSystemPvtSkuStockkeepingunitidsbysaleschannelRoute,
  postApiCatalogPvtProductProductIdSalespolicyTradepolicyIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tradePolicyHandler = app
  .openapi(getApiCatalogPvtProductProductIdSalespolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCatalogPvtProductProductIdSalespolicyTradepolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCatalogPvtProductProductIdSalespolicyTradepolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPvtSkuStockkeepingunitidsbysaleschannelRoute, (c) => {
    throw new Error('Not implemented')
  })
