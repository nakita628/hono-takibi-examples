import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCatalogPvtSkusellersSkuIdRoute,
  getSkuBindingPvtSkusellerAdminRoute,
  getSkuBindingPvtSkusellerListBysellerIdSellerIdRoute,
  getSkuBindingPvtSkusellerPagedSelleridSellerIdRoute,
  getSkuBindingPvtSkusellerSellerIdSellerSkuIdRoute,
  postSkuBindingPvtSkusellerActivateSellerIdSkuSellerIdRoute,
  postSkuBindingPvtSkusellerChangenotificationSellerIdSellerSkuIdRoute,
  postSkuBindingPvtSkusellerChangenotificationSkuIdRoute,
  postSkuBindingPvtSkusellerInactivateSellerIdSkuSellerIdRoute,
  postSkuBindingPvtSkusellerInsertionRoute,
  postSkuBindingPvtSkusellerRemoveSellerIdSellerSkuIdRoute,
  putSkuBindingPvtSkusellerSellerIdSellerSkuIdRoute,
} from './routes'
import {
  getCatalogPvtSkusellersSkuIdRouteHandler,
  getSkuBindingPvtSkusellerAdminRouteHandler,
  getSkuBindingPvtSkusellerListBysellerIdSellerIdRouteHandler,
  getSkuBindingPvtSkusellerPagedSelleridSellerIdRouteHandler,
  getSkuBindingPvtSkusellerSellerIdSellerSkuIdRouteHandler,
  postSkuBindingPvtSkusellerActivateSellerIdSkuSellerIdRouteHandler,
  postSkuBindingPvtSkusellerChangenotificationSellerIdSellerSkuIdRouteHandler,
  postSkuBindingPvtSkusellerChangenotificationSkuIdRouteHandler,
  postSkuBindingPvtSkusellerInactivateSellerIdSkuSellerIdRouteHandler,
  postSkuBindingPvtSkusellerInsertionRouteHandler,
  postSkuBindingPvtSkusellerRemoveSellerIdSellerSkuIdRouteHandler,
  putSkuBindingPvtSkusellerSellerIdSellerSkuIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCatalogPvtSkusellersSkuIdRoute, getCatalogPvtSkusellersSkuIdRouteHandler)
  .openapi(
    postSkuBindingPvtSkusellerActivateSellerIdSkuSellerIdRoute,
    postSkuBindingPvtSkusellerActivateSellerIdSkuSellerIdRouteHandler,
  )
  .openapi(getSkuBindingPvtSkusellerAdminRoute, getSkuBindingPvtSkusellerAdminRouteHandler)
  .openapi(
    postSkuBindingPvtSkusellerChangenotificationSellerIdSellerSkuIdRoute,
    postSkuBindingPvtSkusellerChangenotificationSellerIdSellerSkuIdRouteHandler,
  )
  .openapi(
    postSkuBindingPvtSkusellerChangenotificationSkuIdRoute,
    postSkuBindingPvtSkusellerChangenotificationSkuIdRouteHandler,
  )
  .openapi(
    postSkuBindingPvtSkusellerInactivateSellerIdSkuSellerIdRoute,
    postSkuBindingPvtSkusellerInactivateSellerIdSkuSellerIdRouteHandler,
  )
  .openapi(
    postSkuBindingPvtSkusellerInsertionRoute,
    postSkuBindingPvtSkusellerInsertionRouteHandler,
  )
  .openapi(
    getSkuBindingPvtSkusellerListBysellerIdSellerIdRoute,
    getSkuBindingPvtSkusellerListBysellerIdSellerIdRouteHandler,
  )
  .openapi(
    getSkuBindingPvtSkusellerPagedSelleridSellerIdRoute,
    getSkuBindingPvtSkusellerPagedSelleridSellerIdRouteHandler,
  )
  .openapi(
    postSkuBindingPvtSkusellerRemoveSellerIdSellerSkuIdRoute,
    postSkuBindingPvtSkusellerRemoveSellerIdSellerSkuIdRouteHandler,
  )
  .openapi(
    getSkuBindingPvtSkusellerSellerIdSellerSkuIdRoute,
    getSkuBindingPvtSkusellerSellerIdSellerSkuIdRouteHandler,
  )
  .openapi(
    putSkuBindingPvtSkusellerSellerIdSellerSkuIdRoute,
    putSkuBindingPvtSkusellerSellerIdSellerSkuIdRouteHandler,
  )

export default app
