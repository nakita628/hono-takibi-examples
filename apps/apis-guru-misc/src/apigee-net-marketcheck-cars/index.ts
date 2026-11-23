import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCarDealerInventoryActiveRoute,
  getCarRecallVinRoute,
  getClientConfigureGetRoute,
  getCrmCheckCarVinRoute,
  getDealerCarIdRoute,
  getDealerCarUkIdRoute,
  getDealerHeavyEquipmentIdRoute,
  getDealerMotorcycleIdRoute,
  getDealerRvIdRoute,
  getDealersCarRoute,
  getDealersCarUkRoute,
  getDealersHeavyEquipmentRoute,
  getDealersMotorcycleRoute,
  getDealersRvRoute,
  getDecodeCarEpiVinSpecsRoute,
  getDecodeCarNeovinVinSpecsRoute,
  getDecodeCarVinSpecsRoute,
  getHistoryCarUkVrmRoute,
  getHistoryCarVinRoute,
  getImageCacheCarListingIDImageIDRoute,
  getListingCarAuctionIdExtraRoute,
  getListingCarAuctionIdMediaRoute,
  getListingCarAuctionIdRoute,
  getListingCarFsboIdExtraRoute,
  getListingCarFsboIdMediaRoute,
  getListingCarFsboIdRoute,
  getListingCarIdExtraRoute,
  getListingCarIdMediaRoute,
  getListingCarIdRoute,
  getListingCarUkIdExtraRoute,
  getListingCarUkIdMediaRoute,
  getListingCarUkIdRoute,
  getListingHeavyEquipmentIdExtraRoute,
  getListingHeavyEquipmentIdMediaRoute,
  getListingHeavyEquipmentIdRoute,
  getListingMotorcycleIdExtraRoute,
  getListingMotorcycleIdMediaRoute,
  getListingMotorcycleIdRoute,
  getListingRvIdExtraRoute,
  getListingRvIdMediaRoute,
  getListingRvIdRoute,
  getListingRvUkIdExtraRoute,
  getListingRvUkIdMediaRoute,
  getListingRvUkIdRoute,
  getMdsCarRoute,
  getPopularCarsRoute,
  getPredictCarPriceRoute,
  getPredictCarUkFmvRoute,
  getPredictCarUkPriceRoute,
  getSalesCarRoute,
  getSearchCarActiveRoute,
  getSearchCarAuctionActiveRoute,
  getSearchCarAutoCompleteRoute,
  getSearchCarFsboActiveRoute,
  getSearchCarIncentiveOemRoute,
  getSearchCarRecentsRoute,
  getSearchCarUkActiveRoute,
  getSearchCarUkRecentsRoute,
  getSearchHeavyEquipmentActiveRoute,
  getSearchHeavyEquipmentAutoCompleteRoute,
  getSearchMotorcycleActiveRoute,
  getSearchMotorcycleAutoCompleteRoute,
  getSearchRvActiveRoute,
  getSearchRvAutoCompleteRoute,
  getSearchRvUkActiveRoute,
  getSpecsCarAutoCompleteRoute,
  getSpecsCarTermsRoute,
  getStatsCarRoute,
  postClientConfigureSetRoute,
  postSearchCarActiveRankListingsRoute,
  postSearchCarActiveRankRoute,
} from './routes'
import {
  getCarDealerInventoryActiveRouteHandler,
  getCarRecallVinRouteHandler,
  getClientConfigureGetRouteHandler,
  getCrmCheckCarVinRouteHandler,
  getDealerCarIdRouteHandler,
  getDealerCarUkIdRouteHandler,
  getDealerHeavyEquipmentIdRouteHandler,
  getDealerMotorcycleIdRouteHandler,
  getDealerRvIdRouteHandler,
  getDealersCarRouteHandler,
  getDealersCarUkRouteHandler,
  getDealersHeavyEquipmentRouteHandler,
  getDealersMotorcycleRouteHandler,
  getDealersRvRouteHandler,
  getDecodeCarEpiVinSpecsRouteHandler,
  getDecodeCarNeovinVinSpecsRouteHandler,
  getDecodeCarVinSpecsRouteHandler,
  getHistoryCarUkVrmRouteHandler,
  getHistoryCarVinRouteHandler,
  getImageCacheCarListingIDImageIDRouteHandler,
  getListingCarAuctionIdExtraRouteHandler,
  getListingCarAuctionIdMediaRouteHandler,
  getListingCarAuctionIdRouteHandler,
  getListingCarFsboIdExtraRouteHandler,
  getListingCarFsboIdMediaRouteHandler,
  getListingCarFsboIdRouteHandler,
  getListingCarIdExtraRouteHandler,
  getListingCarIdMediaRouteHandler,
  getListingCarIdRouteHandler,
  getListingCarUkIdExtraRouteHandler,
  getListingCarUkIdMediaRouteHandler,
  getListingCarUkIdRouteHandler,
  getListingHeavyEquipmentIdExtraRouteHandler,
  getListingHeavyEquipmentIdMediaRouteHandler,
  getListingHeavyEquipmentIdRouteHandler,
  getListingMotorcycleIdExtraRouteHandler,
  getListingMotorcycleIdMediaRouteHandler,
  getListingMotorcycleIdRouteHandler,
  getListingRvIdExtraRouteHandler,
  getListingRvIdMediaRouteHandler,
  getListingRvIdRouteHandler,
  getListingRvUkIdExtraRouteHandler,
  getListingRvUkIdMediaRouteHandler,
  getListingRvUkIdRouteHandler,
  getMdsCarRouteHandler,
  getPopularCarsRouteHandler,
  getPredictCarPriceRouteHandler,
  getPredictCarUkFmvRouteHandler,
  getPredictCarUkPriceRouteHandler,
  getSalesCarRouteHandler,
  getSearchCarActiveRouteHandler,
  getSearchCarAuctionActiveRouteHandler,
  getSearchCarAutoCompleteRouteHandler,
  getSearchCarFsboActiveRouteHandler,
  getSearchCarIncentiveOemRouteHandler,
  getSearchCarRecentsRouteHandler,
  getSearchCarUkActiveRouteHandler,
  getSearchCarUkRecentsRouteHandler,
  getSearchHeavyEquipmentActiveRouteHandler,
  getSearchHeavyEquipmentAutoCompleteRouteHandler,
  getSearchMotorcycleActiveRouteHandler,
  getSearchMotorcycleAutoCompleteRouteHandler,
  getSearchRvActiveRouteHandler,
  getSearchRvAutoCompleteRouteHandler,
  getSearchRvUkActiveRouteHandler,
  getSpecsCarAutoCompleteRouteHandler,
  getSpecsCarTermsRouteHandler,
  getStatsCarRouteHandler,
  postClientConfigureSetRouteHandler,
  postSearchCarActiveRankListingsRouteHandler,
  postSearchCarActiveRankRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCarDealerInventoryActiveRoute, getCarDealerInventoryActiveRouteHandler)
  .openapi(getCarRecallVinRoute, getCarRecallVinRouteHandler)
  .openapi(getClientConfigureGetRoute, getClientConfigureGetRouteHandler)
  .openapi(postClientConfigureSetRoute, postClientConfigureSetRouteHandler)
  .openapi(getCrmCheckCarVinRoute, getCrmCheckCarVinRouteHandler)
  .openapi(getDealerCarUkIdRoute, getDealerCarUkIdRouteHandler)
  .openapi(getDealerCarIdRoute, getDealerCarIdRouteHandler)
  .openapi(getDealerHeavyEquipmentIdRoute, getDealerHeavyEquipmentIdRouteHandler)
  .openapi(getDealerMotorcycleIdRoute, getDealerMotorcycleIdRouteHandler)
  .openapi(getDealerRvIdRoute, getDealerRvIdRouteHandler)
  .openapi(getDealersCarRoute, getDealersCarRouteHandler)
  .openapi(getDealersCarUkRoute, getDealersCarUkRouteHandler)
  .openapi(getDealersHeavyEquipmentRoute, getDealersHeavyEquipmentRouteHandler)
  .openapi(getDealersMotorcycleRoute, getDealersMotorcycleRouteHandler)
  .openapi(getDealersRvRoute, getDealersRvRouteHandler)
  .openapi(getDecodeCarEpiVinSpecsRoute, getDecodeCarEpiVinSpecsRouteHandler)
  .openapi(getDecodeCarNeovinVinSpecsRoute, getDecodeCarNeovinVinSpecsRouteHandler)
  .openapi(getDecodeCarVinSpecsRoute, getDecodeCarVinSpecsRouteHandler)
  .openapi(getHistoryCarUkVrmRoute, getHistoryCarUkVrmRouteHandler)
  .openapi(getHistoryCarVinRoute, getHistoryCarVinRouteHandler)
  .openapi(getImageCacheCarListingIDImageIDRoute, getImageCacheCarListingIDImageIDRouteHandler)
  .openapi(getListingCarAuctionIdRoute, getListingCarAuctionIdRouteHandler)
  .openapi(getListingCarAuctionIdExtraRoute, getListingCarAuctionIdExtraRouteHandler)
  .openapi(getListingCarAuctionIdMediaRoute, getListingCarAuctionIdMediaRouteHandler)
  .openapi(getListingCarFsboIdRoute, getListingCarFsboIdRouteHandler)
  .openapi(getListingCarFsboIdExtraRoute, getListingCarFsboIdExtraRouteHandler)
  .openapi(getListingCarFsboIdMediaRoute, getListingCarFsboIdMediaRouteHandler)
  .openapi(getListingCarUkIdRoute, getListingCarUkIdRouteHandler)
  .openapi(getListingCarUkIdExtraRoute, getListingCarUkIdExtraRouteHandler)
  .openapi(getListingCarUkIdMediaRoute, getListingCarUkIdMediaRouteHandler)
  .openapi(getListingCarIdRoute, getListingCarIdRouteHandler)
  .openapi(getListingCarIdExtraRoute, getListingCarIdExtraRouteHandler)
  .openapi(getListingCarIdMediaRoute, getListingCarIdMediaRouteHandler)
  .openapi(getListingHeavyEquipmentIdRoute, getListingHeavyEquipmentIdRouteHandler)
  .openapi(getListingHeavyEquipmentIdExtraRoute, getListingHeavyEquipmentIdExtraRouteHandler)
  .openapi(getListingHeavyEquipmentIdMediaRoute, getListingHeavyEquipmentIdMediaRouteHandler)
  .openapi(getListingMotorcycleIdRoute, getListingMotorcycleIdRouteHandler)
  .openapi(getListingMotorcycleIdExtraRoute, getListingMotorcycleIdExtraRouteHandler)
  .openapi(getListingMotorcycleIdMediaRoute, getListingMotorcycleIdMediaRouteHandler)
  .openapi(getListingRvUkIdRoute, getListingRvUkIdRouteHandler)
  .openapi(getListingRvUkIdExtraRoute, getListingRvUkIdExtraRouteHandler)
  .openapi(getListingRvUkIdMediaRoute, getListingRvUkIdMediaRouteHandler)
  .openapi(getListingRvIdRoute, getListingRvIdRouteHandler)
  .openapi(getListingRvIdExtraRoute, getListingRvIdExtraRouteHandler)
  .openapi(getListingRvIdMediaRoute, getListingRvIdMediaRouteHandler)
  .openapi(getMdsCarRoute, getMdsCarRouteHandler)
  .openapi(getPopularCarsRoute, getPopularCarsRouteHandler)
  .openapi(getPredictCarPriceRoute, getPredictCarPriceRouteHandler)
  .openapi(getPredictCarUkFmvRoute, getPredictCarUkFmvRouteHandler)
  .openapi(getPredictCarUkPriceRoute, getPredictCarUkPriceRouteHandler)
  .openapi(getSalesCarRoute, getSalesCarRouteHandler)
  .openapi(getSearchCarActiveRoute, getSearchCarActiveRouteHandler)
  .openapi(postSearchCarActiveRankRoute, postSearchCarActiveRankRouteHandler)
  .openapi(postSearchCarActiveRankListingsRoute, postSearchCarActiveRankListingsRouteHandler)
  .openapi(getSearchCarAuctionActiveRoute, getSearchCarAuctionActiveRouteHandler)
  .openapi(getSearchCarAutoCompleteRoute, getSearchCarAutoCompleteRouteHandler)
  .openapi(getSearchCarFsboActiveRoute, getSearchCarFsboActiveRouteHandler)
  .openapi(getSearchCarIncentiveOemRoute, getSearchCarIncentiveOemRouteHandler)
  .openapi(getSearchCarRecentsRoute, getSearchCarRecentsRouteHandler)
  .openapi(getSearchCarUkActiveRoute, getSearchCarUkActiveRouteHandler)
  .openapi(getSearchCarUkRecentsRoute, getSearchCarUkRecentsRouteHandler)
  .openapi(getSearchHeavyEquipmentActiveRoute, getSearchHeavyEquipmentActiveRouteHandler)
  .openapi(
    getSearchHeavyEquipmentAutoCompleteRoute,
    getSearchHeavyEquipmentAutoCompleteRouteHandler,
  )
  .openapi(getSearchMotorcycleActiveRoute, getSearchMotorcycleActiveRouteHandler)
  .openapi(getSearchMotorcycleAutoCompleteRoute, getSearchMotorcycleAutoCompleteRouteHandler)
  .openapi(getSearchRvActiveRoute, getSearchRvActiveRouteHandler)
  .openapi(getSearchRvAutoCompleteRoute, getSearchRvAutoCompleteRouteHandler)
  .openapi(getSearchRvUkActiveRoute, getSearchRvUkActiveRouteHandler)
  .openapi(getSpecsCarAutoCompleteRoute, getSpecsCarAutoCompleteRouteHandler)
  .openapi(getSpecsCarTermsRoute, getSpecsCarTermsRouteHandler)
  .openapi(getStatsCarRoute, getStatsCarRouteHandler)

export default app
