import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDaysSupplyRoute,
  getDaysToSellRoute,
  getGetBrandsRoute,
  getGetDealersByIDRoute,
  getGetDealersByRegionRoute,
  getGetDealersRoute,
  getGetInactiveModelsRoute,
  getGetModelsRoute,
  getGetRegionBrandMarketShareRoute,
  getGetRegionMarketShareRoute,
  getGetRegionsRoute,
  getGetSubUserKeysRoute,
  getGetTokenRoute,
  getListings2Route,
  getListingsByDateRoute,
  getListingsByRegionAndDateRoute,
  getListingsByRegionRoute,
  getListingsByZipCodeAndDateRoute,
  getListingsByZipCodeRoute,
  getListingsRoute,
  getListPriceRoute,
  getModelYearDistRoute,
  getRegionDailySalesRoute,
  getRegionSalesRoute,
  getSalePriceHistogramRoute,
  getSalePriceRoute,
  getSimilarSalePriceRoute,
  getTopModelsRoute,
  getValuationRoute,
  getVehicleHistoryRoute,
  getVehicleSeenRoute,
  getVinDecodeRoute,
  postGetTokenRoute,
  postMakeSubUserKeyRoute,
  putRevokeSubUserKeyRoute,
} from './routes'
import {
  getDaysSupplyRouteHandler,
  getDaysToSellRouteHandler,
  getGetBrandsRouteHandler,
  getGetDealersByIDRouteHandler,
  getGetDealersByRegionRouteHandler,
  getGetDealersRouteHandler,
  getGetInactiveModelsRouteHandler,
  getGetModelsRouteHandler,
  getGetRegionBrandMarketShareRouteHandler,
  getGetRegionMarketShareRouteHandler,
  getGetRegionsRouteHandler,
  getGetSubUserKeysRouteHandler,
  getGetTokenRouteHandler,
  getListings2RouteHandler,
  getListingsByDateRouteHandler,
  getListingsByRegionAndDateRouteHandler,
  getListingsByRegionRouteHandler,
  getListingsByZipCodeAndDateRouteHandler,
  getListingsByZipCodeRouteHandler,
  getListingsRouteHandler,
  getListPriceRouteHandler,
  getModelYearDistRouteHandler,
  getRegionDailySalesRouteHandler,
  getRegionSalesRouteHandler,
  getSalePriceHistogramRouteHandler,
  getSalePriceRouteHandler,
  getSimilarSalePriceRouteHandler,
  getTopModelsRouteHandler,
  getValuationRouteHandler,
  getVehicleHistoryRouteHandler,
  getVehicleSeenRouteHandler,
  getVinDecodeRouteHandler,
  postGetTokenRouteHandler,
  postMakeSubUserKeyRouteHandler,
  putRevokeSubUserKeyRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getDaysSupplyRoute, getDaysSupplyRouteHandler)
  .openapi(getDaysToSellRoute, getDaysToSellRouteHandler)
  .openapi(getGetBrandsRoute, getGetBrandsRouteHandler)
  .openapi(getGetDealersRoute, getGetDealersRouteHandler)
  .openapi(getGetDealersByIDRoute, getGetDealersByIDRouteHandler)
  .openapi(getGetDealersByRegionRoute, getGetDealersByRegionRouteHandler)
  .openapi(getGetInactiveModelsRoute, getGetInactiveModelsRouteHandler)
  .openapi(getGetModelsRoute, getGetModelsRouteHandler)
  .openapi(getGetRegionBrandMarketShareRoute, getGetRegionBrandMarketShareRouteHandler)
  .openapi(getGetRegionMarketShareRoute, getGetRegionMarketShareRouteHandler)
  .openapi(getGetRegionsRoute, getGetRegionsRouteHandler)
  .openapi(getGetSubUserKeysRoute, getGetSubUserKeysRouteHandler)
  .openapi(getGetTokenRoute, getGetTokenRouteHandler)
  .openapi(postGetTokenRoute, postGetTokenRouteHandler)
  .openapi(getListPriceRoute, getListPriceRouteHandler)
  .openapi(getListingsRoute, getListingsRouteHandler)
  .openapi(getListings2Route, getListings2RouteHandler)
  .openapi(getListingsByDateRoute, getListingsByDateRouteHandler)
  .openapi(getListingsByRegionRoute, getListingsByRegionRouteHandler)
  .openapi(getListingsByRegionAndDateRoute, getListingsByRegionAndDateRouteHandler)
  .openapi(getListingsByZipCodeRoute, getListingsByZipCodeRouteHandler)
  .openapi(getListingsByZipCodeAndDateRoute, getListingsByZipCodeAndDateRouteHandler)
  .openapi(postMakeSubUserKeyRoute, postMakeSubUserKeyRouteHandler)
  .openapi(getModelYearDistRoute, getModelYearDistRouteHandler)
  .openapi(getRegionDailySalesRoute, getRegionDailySalesRouteHandler)
  .openapi(getRegionSalesRoute, getRegionSalesRouteHandler)
  .openapi(putRevokeSubUserKeyRoute, putRevokeSubUserKeyRouteHandler)
  .openapi(getSalePriceRoute, getSalePriceRouteHandler)
  .openapi(getSalePriceHistogramRoute, getSalePriceHistogramRouteHandler)
  .openapi(getSimilarSalePriceRoute, getSimilarSalePriceRouteHandler)
  .openapi(getTopModelsRoute, getTopModelsRouteHandler)
  .openapi(getValuationRoute, getValuationRouteHandler)
  .openapi(getVehicleHistoryRoute, getVehicleHistoryRouteHandler)
  .openapi(getVehicleSeenRoute, getVehicleSeenRouteHandler)
  .openapi(getVinDecodeRoute, getVinDecodeRouteHandler)

export default app
