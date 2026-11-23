import { OpenAPIHono } from '@hono/zod-openapi'
import {
  daysSupplyHandler,
  daysToSellHandler,
  getBrandsHandler,
  getDealersByIdHandler,
  getDealersByRegionHandler,
  getDealersHandler,
  getInactiveModelsHandler,
  getModelsHandler,
  getRegionBrandMarketShareHandler,
  getRegionMarketShareHandler,
  getRegionsHandler,
  getSubUserKeysHandler,
  getTokenHandler,
  listings2Handler,
  listingsByDateHandler,
  listingsByRegionAndDateHandler,
  listingsByRegionHandler,
  listingsByZipCodeAndDateHandler,
  listingsByZipCodeHandler,
  listingsHandler,
  listPriceHandler,
  makeSubUserKeyHandler,
  modelYearDistHandler,
  regionDailySalesHandler,
  regionSalesHandler,
  revokeSubUserKeyHandler,
  salePriceHandler,
  salePriceHistogramHandler,
  similarSalePriceHandler,
  topModelsHandler,
  valuationHandler,
  vehicleHistoryHandler,
  vehicleSeenHandler,
  vinDecodeHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', daysSupplyHandler)
  .route('/', daysToSellHandler)
  .route('/', getBrandsHandler)
  .route('/', getDealersHandler)
  .route('/', getDealersByIdHandler)
  .route('/', getDealersByRegionHandler)
  .route('/', getInactiveModelsHandler)
  .route('/', getModelsHandler)
  .route('/', getRegionBrandMarketShareHandler)
  .route('/', getRegionMarketShareHandler)
  .route('/', getRegionsHandler)
  .route('/', getSubUserKeysHandler)
  .route('/', getTokenHandler)
  .route('/', listPriceHandler)
  .route('/', listingsHandler)
  .route('/', listings2Handler)
  .route('/', listingsByDateHandler)
  .route('/', listingsByRegionHandler)
  .route('/', listingsByRegionAndDateHandler)
  .route('/', listingsByZipCodeHandler)
  .route('/', listingsByZipCodeAndDateHandler)
  .route('/', makeSubUserKeyHandler)
  .route('/', modelYearDistHandler)
  .route('/', regionDailySalesHandler)
  .route('/', regionSalesHandler)
  .route('/', revokeSubUserKeyHandler)
  .route('/', salePriceHandler)
  .route('/', salePriceHistogramHandler)
  .route('/', similarSalePriceHandler)
  .route('/', topModelsHandler)
  .route('/', valuationHandler)
  .route('/', vehicleHistoryHandler)
  .route('/', vehicleSeenHandler)
  .route('/', vinDecodeHandler)

export default app
