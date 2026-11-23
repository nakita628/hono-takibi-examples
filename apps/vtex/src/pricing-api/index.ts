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
} from './routes'
import {
  deletePricingPricesItemIdFixedPriceTableIdRouteHandler,
  deletePricingPricesItemIdRouteHandler,
  getPricingConfigRouteHandler,
  getPricingMigrationRouteHandler,
  getPricingPipelineCatalogPriceTableIdRouteHandler,
  getPricingPipelineCatalogRouteHandler,
  getPricingPricesItemIdComputedPriceTableIdRouteHandler,
  getPricingPricesItemIdFixedPriceTableIdRouteHandler,
  getPricingPricesItemIdFixedRouteHandler,
  getPricingPricesItemIdRouteHandler,
  getPricingTablesRouteHandler,
  postPricingPricesItemIdFixedPriceTableIdRouteHandler,
  putPricingPipelineCatalogPriceTableIdRouteHandler,
  putPricingPricesItemIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getPricingConfigRoute, getPricingConfigRouteHandler)
  .openapi(getPricingMigrationRoute, getPricingMigrationRouteHandler)
  .openapi(getPricingPipelineCatalogRoute, getPricingPipelineCatalogRouteHandler)
  .openapi(
    getPricingPipelineCatalogPriceTableIdRoute,
    getPricingPipelineCatalogPriceTableIdRouteHandler,
  )
  .openapi(
    putPricingPipelineCatalogPriceTableIdRoute,
    putPricingPipelineCatalogPriceTableIdRouteHandler,
  )
  .openapi(deletePricingPricesItemIdRoute, deletePricingPricesItemIdRouteHandler)
  .openapi(getPricingPricesItemIdRoute, getPricingPricesItemIdRouteHandler)
  .openapi(putPricingPricesItemIdRoute, putPricingPricesItemIdRouteHandler)
  .openapi(
    getPricingPricesItemIdComputedPriceTableIdRoute,
    getPricingPricesItemIdComputedPriceTableIdRouteHandler,
  )
  .openapi(getPricingPricesItemIdFixedRoute, getPricingPricesItemIdFixedRouteHandler)
  .openapi(
    deletePricingPricesItemIdFixedPriceTableIdRoute,
    deletePricingPricesItemIdFixedPriceTableIdRouteHandler,
  )
  .openapi(
    getPricingPricesItemIdFixedPriceTableIdRoute,
    getPricingPricesItemIdFixedPriceTableIdRouteHandler,
  )
  .openapi(
    postPricingPricesItemIdFixedPriceTableIdRoute,
    postPricingPricesItemIdFixedPriceTableIdRouteHandler,
  )
  .openapi(getPricingTablesRoute, getPricingTablesRouteHandler)

export default app
