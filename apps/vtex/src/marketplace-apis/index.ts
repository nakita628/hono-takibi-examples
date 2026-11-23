import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSellerRegisterPvtSellerLeadsSellerLeadIdRoute,
  deleteSellerRegisterPvtSellersSellerIdCommissionsCategoryIdRoute,
  getOfferManagerPvtOffersRoute,
  getOfferManagerPvtProductProductIdRoute,
  getOfferManagerPvtProductProductIdSkuSkuIdRoute,
  getSellerRegisterPvtSellerLeadsRoute,
  getSellerRegisterPvtSellerLeadsSellerLeadIdRoute,
  getSellerRegisterPvtSellersRoute,
  getSellerRegisterPvtSellersSellerIdCommissionsCategoryIdRoute,
  getSellerRegisterPvtSellersSellerIdCommissionsRoute,
  getSellerRegisterPvtSellersSellerIdRoute,
  getSellerRegisterPvtSellersSellerIdSalesChannelMappingRoute,
  patchSellerRegisterPvtSellersSellerIdRoute,
  postNotificatorSellerIdChangenotificationSkuIdInventoryRoute,
  postNotificatorSellerIdChangenotificationSkuIdPriceRoute,
  postSellerRegisterPvtSellerLeadsRoute,
  postSellerRegisterPvtSellersRoute,
  putSellerRegisterPvtSellerLeadsSellerLeadIdRoute,
  putSellerRegisterPvtSellerLeadsSellerLeadIdSellerRoute,
  putSellerRegisterPvtSellerLeadsSellerLeadIdStatusRoute,
  putSellerRegisterPvtSellersSellerIdCommissionsCategoriesRoute,
  putSellerRegisterPvtSellersSellerIdCommissionsCategoryIdRoute,
  putSellerRegisterPvtSellersSellerIdSalesChannelMappingRoute,
} from './routes'
import {
  deleteSellerRegisterPvtSellerLeadsSellerLeadIdRouteHandler,
  deleteSellerRegisterPvtSellersSellerIdCommissionsCategoryIdRouteHandler,
  getOfferManagerPvtOffersRouteHandler,
  getOfferManagerPvtProductProductIdRouteHandler,
  getOfferManagerPvtProductProductIdSkuSkuIdRouteHandler,
  getSellerRegisterPvtSellerLeadsRouteHandler,
  getSellerRegisterPvtSellerLeadsSellerLeadIdRouteHandler,
  getSellerRegisterPvtSellersRouteHandler,
  getSellerRegisterPvtSellersSellerIdCommissionsCategoryIdRouteHandler,
  getSellerRegisterPvtSellersSellerIdCommissionsRouteHandler,
  getSellerRegisterPvtSellersSellerIdRouteHandler,
  getSellerRegisterPvtSellersSellerIdSalesChannelMappingRouteHandler,
  patchSellerRegisterPvtSellersSellerIdRouteHandler,
  postNotificatorSellerIdChangenotificationSkuIdInventoryRouteHandler,
  postNotificatorSellerIdChangenotificationSkuIdPriceRouteHandler,
  postSellerRegisterPvtSellerLeadsRouteHandler,
  postSellerRegisterPvtSellersRouteHandler,
  putSellerRegisterPvtSellerLeadsSellerLeadIdRouteHandler,
  putSellerRegisterPvtSellerLeadsSellerLeadIdSellerRouteHandler,
  putSellerRegisterPvtSellerLeadsSellerLeadIdStatusRouteHandler,
  putSellerRegisterPvtSellersSellerIdCommissionsCategoriesRouteHandler,
  putSellerRegisterPvtSellersSellerIdCommissionsCategoryIdRouteHandler,
  putSellerRegisterPvtSellersSellerIdSalesChannelMappingRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postNotificatorSellerIdChangenotificationSkuIdInventoryRoute,
    postNotificatorSellerIdChangenotificationSkuIdInventoryRouteHandler,
  )
  .openapi(
    postNotificatorSellerIdChangenotificationSkuIdPriceRoute,
    postNotificatorSellerIdChangenotificationSkuIdPriceRouteHandler,
  )
  .openapi(getOfferManagerPvtOffersRoute, getOfferManagerPvtOffersRouteHandler)
  .openapi(getOfferManagerPvtProductProductIdRoute, getOfferManagerPvtProductProductIdRouteHandler)
  .openapi(
    getOfferManagerPvtProductProductIdSkuSkuIdRoute,
    getOfferManagerPvtProductProductIdSkuSkuIdRouteHandler,
  )
  .openapi(getSellerRegisterPvtSellerLeadsRoute, getSellerRegisterPvtSellerLeadsRouteHandler)
  .openapi(postSellerRegisterPvtSellerLeadsRoute, postSellerRegisterPvtSellerLeadsRouteHandler)
  .openapi(
    deleteSellerRegisterPvtSellerLeadsSellerLeadIdRoute,
    deleteSellerRegisterPvtSellerLeadsSellerLeadIdRouteHandler,
  )
  .openapi(
    getSellerRegisterPvtSellerLeadsSellerLeadIdRoute,
    getSellerRegisterPvtSellerLeadsSellerLeadIdRouteHandler,
  )
  .openapi(
    putSellerRegisterPvtSellerLeadsSellerLeadIdRoute,
    putSellerRegisterPvtSellerLeadsSellerLeadIdRouteHandler,
  )
  .openapi(
    putSellerRegisterPvtSellerLeadsSellerLeadIdSellerRoute,
    putSellerRegisterPvtSellerLeadsSellerLeadIdSellerRouteHandler,
  )
  .openapi(
    putSellerRegisterPvtSellerLeadsSellerLeadIdStatusRoute,
    putSellerRegisterPvtSellerLeadsSellerLeadIdStatusRouteHandler,
  )
  .openapi(getSellerRegisterPvtSellersRoute, getSellerRegisterPvtSellersRouteHandler)
  .openapi(postSellerRegisterPvtSellersRoute, postSellerRegisterPvtSellersRouteHandler)
  .openapi(
    getSellerRegisterPvtSellersSellerIdRoute,
    getSellerRegisterPvtSellersSellerIdRouteHandler,
  )
  .openapi(
    patchSellerRegisterPvtSellersSellerIdRoute,
    patchSellerRegisterPvtSellersSellerIdRouteHandler,
  )
  .openapi(
    getSellerRegisterPvtSellersSellerIdCommissionsRoute,
    getSellerRegisterPvtSellersSellerIdCommissionsRouteHandler,
  )
  .openapi(
    putSellerRegisterPvtSellersSellerIdCommissionsCategoriesRoute,
    putSellerRegisterPvtSellersSellerIdCommissionsCategoriesRouteHandler,
  )
  .openapi(
    deleteSellerRegisterPvtSellersSellerIdCommissionsCategoryIdRoute,
    deleteSellerRegisterPvtSellersSellerIdCommissionsCategoryIdRouteHandler,
  )
  .openapi(
    getSellerRegisterPvtSellersSellerIdCommissionsCategoryIdRoute,
    getSellerRegisterPvtSellersSellerIdCommissionsCategoryIdRouteHandler,
  )
  .openapi(
    putSellerRegisterPvtSellersSellerIdCommissionsCategoryIdRoute,
    putSellerRegisterPvtSellersSellerIdCommissionsCategoryIdRouteHandler,
  )
  .openapi(
    getSellerRegisterPvtSellersSellerIdSalesChannelMappingRoute,
    getSellerRegisterPvtSellersSellerIdSalesChannelMappingRouteHandler,
  )
  .openapi(
    putSellerRegisterPvtSellersSellerIdSalesChannelMappingRoute,
    putSellerRegisterPvtSellersSellerIdSalesChannelMappingRouteHandler,
  )

export default app
