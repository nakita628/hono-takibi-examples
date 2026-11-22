import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPricingPipelineCatalogPriceTableIdRoute,
  getPricingPipelineCatalogRoute,
  getPricingTablesRoute,
  putPricingPipelineCatalogPriceTableIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const priceTablesHandler = app
  .openapi(getPricingPipelineCatalogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPricingPipelineCatalogPriceTableIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPricingPipelineCatalogPriceTableIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPricingTablesRoute, (c) => {
    throw new Error('Not implemented')
  })
