import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePricingPricesItemIdFixedPriceTableIdRoute,
  deletePricingPricesItemIdRoute,
  getPricingConfigRoute,
  getPricingMigrationRoute,
  getPricingPipelineCatalogPriceTableIdRoute,
  getPricingPipelineCatalogRoute,
  getPricingPricesItemIdComputedPriceTableIdRoute,
  getPricingPricesItemIdFixedPriceTableIdRoute,
  getPricingPricesItemIdFixedRoute,
  getPricingPricesItemIdRoute,
  getPricingTablesRoute,
  postPricingPricesItemIdFixedPriceTableIdRoute,
  putPricingPipelineCatalogPriceTableIdRoute,
  putPricingPricesItemIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pricingHandler = app
  .openapi(getPricingConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPricingMigrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPricingPipelineCatalogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPricingPipelineCatalogPriceTableIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPricingPipelineCatalogPriceTableIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePricingPricesItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPricingPricesItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPricingPricesItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPricingPricesItemIdComputedPriceTableIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPricingPricesItemIdFixedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePricingPricesItemIdFixedPriceTableIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPricingPricesItemIdFixedPriceTableIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPricingPricesItemIdFixedPriceTableIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPricingTablesRoute, (c) => {
    throw new Error('Not implemented')
  })
