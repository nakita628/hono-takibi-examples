import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccidentStatsYearRoute,
  getAirQualityRoute,
  getBikePointIdRoute,
  getBikePointRoute,
  getBikePointSearchRoute,
  getCabwiseSearchRoute,
  getJourneyJourneyResultsFromToToRoute,
  getJourneyMetaModesRoute,
  getLineIdRouteSequenceDirectionRoute,
  getLineIdsArrivalsStopPointIdRoute,
  getLineIdsDisruptionRoute,
  getLineIdsRoute,
  getLineIdsRouteRoute,
  getLineIdsStatusRoute,
  getLineIdsStatusStartDateToEndDateRoute,
  getLineIdStopPointsRoute,
  getLineIdTimetableFromStopPointIdRoute,
  getLineIdTimetableFromStopPointIdToToStopPointIdRoute,
  getLineMetaDisruptionCategoriesRoute,
  getLineMetaModesRoute,
  getLineMetaServiceTypesRoute,
  getLineMetaSeverityRoute,
  getLineModeModesDisruptionRoute,
  getLineModeModesRoute,
  getLineModeModesRouteRoute,
  getLineModeModesStatusRoute,
  getLineRouteRoute,
  getLineSearchQueryRoute,
  getLineStatusSeverityRoute,
  getModeActiveServiceTypesRoute,
  getModeModeArrivalsRoute,
  getOccupancyBikePointsIdsRoute,
  getOccupancyCarParkIdRoute,
  getOccupancyCarParkRoute,
  getOccupancyChargeConnectorIdsRoute,
  getOccupancyChargeConnectorRoute,
  getPlaceAddressStreetsPostcodeRoute,
  getPlaceIdRoute,
  getPlaceMetaCategoriesRoute,
  getPlaceMetaPlaceTypesRoute,
  getPlaceRoute,
  getPlaceSearchRoute,
  getPlaceTypeAtLatLonRoute,
  getPlaceTypeOverlayZLatLonWidthHeightRoute,
  getPlaceTypeTypesRoute,
  getRoadAllDisruptionDisruptionIdsRoute,
  getRoadAllStreetDisruptionRoute,
  getRoadIdsDisruptionRoute,
  getRoadIdsRoute,
  getRoadIdsStatusRoute,
  getRoadMetaCategoriesRoute,
  getRoadMetaSeveritiesRoute,
  getRoadRoute,
  getSearchBusSchedulesRoute,
  getSearchMetaCategoriesRoute,
  getSearchMetaSearchProvidersRoute,
  getSearchMetaSortsRoute,
  getSearchRoute,
  getStopPointIdArrivalDeparturesRoute,
  getStopPointIdArrivalsRoute,
  getStopPointIdCanReachOnLineLineIdRoute,
  getStopPointIdCrowdingLineRoute,
  getStopPointIdDirectionToToStopPointIdRoute,
  getStopPointIdPlaceTypesRoute,
  getStopPointIdRouteRoute,
  getStopPointIdsDisruptionRoute,
  getStopPointIdsRoute,
  getStopPointMetaCategoriesRoute,
  getStopPointMetaModesRoute,
  getStopPointMetaStopTypesRoute,
  getStopPointModeModesDisruptionRoute,
  getStopPointModeModesRoute,
  getStopPointRoute,
  getStopPointSearchQueryRoute,
  getStopPointSearchRoute,
  getStopPointServiceTypesRoute,
  getStopPointSmsIdRoute,
  getStopPointStopPointIdCarParksRoute,
  getStopPointStopPointIdTaxiRanksRoute,
  getStopPointTypeTypesPagePageRoute,
  getStopPointTypeTypesRoute,
  getTravelTimesCompareOverlayZMapcenterMapCenterLatMapCenterLonPinlocationPinLatPinLonDimensionsWidthHeightRoute,
  getTravelTimesOverlayZMapcenterMapCenterLatMapCenterLonPinlocationPinLatPinLonDimensionsWidthHeightRoute,
  getVehicleIdsArrivalsRoute,
} from './routes'
import {
  getAccidentStatsYearRouteHandler,
  getAirQualityRouteHandler,
  getBikePointIdRouteHandler,
  getBikePointRouteHandler,
  getBikePointSearchRouteHandler,
  getCabwiseSearchRouteHandler,
  getJourneyJourneyResultsFromToToRouteHandler,
  getJourneyMetaModesRouteHandler,
  getLineIdRouteSequenceDirectionRouteHandler,
  getLineIdsArrivalsStopPointIdRouteHandler,
  getLineIdsDisruptionRouteHandler,
  getLineIdsRouteHandler,
  getLineIdsRouteRouteHandler,
  getLineIdsStatusRouteHandler,
  getLineIdsStatusStartDateToEndDateRouteHandler,
  getLineIdStopPointsRouteHandler,
  getLineIdTimetableFromStopPointIdRouteHandler,
  getLineIdTimetableFromStopPointIdToToStopPointIdRouteHandler,
  getLineMetaDisruptionCategoriesRouteHandler,
  getLineMetaModesRouteHandler,
  getLineMetaServiceTypesRouteHandler,
  getLineMetaSeverityRouteHandler,
  getLineModeModesDisruptionRouteHandler,
  getLineModeModesRouteHandler,
  getLineModeModesRouteRouteHandler,
  getLineModeModesStatusRouteHandler,
  getLineRouteRouteHandler,
  getLineSearchQueryRouteHandler,
  getLineStatusSeverityRouteHandler,
  getModeActiveServiceTypesRouteHandler,
  getModeModeArrivalsRouteHandler,
  getOccupancyBikePointsIdsRouteHandler,
  getOccupancyCarParkIdRouteHandler,
  getOccupancyCarParkRouteHandler,
  getOccupancyChargeConnectorIdsRouteHandler,
  getOccupancyChargeConnectorRouteHandler,
  getPlaceAddressStreetsPostcodeRouteHandler,
  getPlaceIdRouteHandler,
  getPlaceMetaCategoriesRouteHandler,
  getPlaceMetaPlaceTypesRouteHandler,
  getPlaceRouteHandler,
  getPlaceSearchRouteHandler,
  getPlaceTypeAtLatLonRouteHandler,
  getPlaceTypeOverlayZLatLonWidthHeightRouteHandler,
  getPlaceTypeTypesRouteHandler,
  getRoadAllDisruptionDisruptionIdsRouteHandler,
  getRoadAllStreetDisruptionRouteHandler,
  getRoadIdsDisruptionRouteHandler,
  getRoadIdsRouteHandler,
  getRoadIdsStatusRouteHandler,
  getRoadMetaCategoriesRouteHandler,
  getRoadMetaSeveritiesRouteHandler,
  getRoadRouteHandler,
  getSearchBusSchedulesRouteHandler,
  getSearchMetaCategoriesRouteHandler,
  getSearchMetaSearchProvidersRouteHandler,
  getSearchMetaSortsRouteHandler,
  getSearchRouteHandler,
  getStopPointIdArrivalDeparturesRouteHandler,
  getStopPointIdArrivalsRouteHandler,
  getStopPointIdCanReachOnLineLineIdRouteHandler,
  getStopPointIdCrowdingLineRouteHandler,
  getStopPointIdDirectionToToStopPointIdRouteHandler,
  getStopPointIdPlaceTypesRouteHandler,
  getStopPointIdRouteRouteHandler,
  getStopPointIdsDisruptionRouteHandler,
  getStopPointIdsRouteHandler,
  getStopPointMetaCategoriesRouteHandler,
  getStopPointMetaModesRouteHandler,
  getStopPointMetaStopTypesRouteHandler,
  getStopPointModeModesDisruptionRouteHandler,
  getStopPointModeModesRouteHandler,
  getStopPointRouteHandler,
  getStopPointSearchQueryRouteHandler,
  getStopPointSearchRouteHandler,
  getStopPointServiceTypesRouteHandler,
  getStopPointSmsIdRouteHandler,
  getStopPointStopPointIdCarParksRouteHandler,
  getStopPointStopPointIdTaxiRanksRouteHandler,
  getStopPointTypeTypesPagePageRouteHandler,
  getStopPointTypeTypesRouteHandler,
  getTravelTimesCompareOverlayZMapcenterMapCenterLatMapCenterLonPinlocationPinLatPinLonDimensionsWidthHeightRouteHandler,
  getTravelTimesOverlayZMapcenterMapCenterLatMapCenterLonPinlocationPinLatPinLonDimensionsWidthHeightRouteHandler,
  getVehicleIdsArrivalsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAccidentStatsYearRoute, getAccidentStatsYearRouteHandler)
  .openapi(getAirQualityRoute, getAirQualityRouteHandler)
  .openapi(getBikePointRoute, getBikePointRouteHandler)
  .openapi(getBikePointSearchRoute, getBikePointSearchRouteHandler)
  .openapi(getBikePointIdRoute, getBikePointIdRouteHandler)
  .openapi(getCabwiseSearchRoute, getCabwiseSearchRouteHandler)
  .openapi(getJourneyJourneyResultsFromToToRoute, getJourneyJourneyResultsFromToToRouteHandler)
  .openapi(getJourneyMetaModesRoute, getJourneyMetaModesRouteHandler)
  .openapi(getLineMetaDisruptionCategoriesRoute, getLineMetaDisruptionCategoriesRouteHandler)
  .openapi(getLineMetaModesRoute, getLineMetaModesRouteHandler)
  .openapi(getLineMetaServiceTypesRoute, getLineMetaServiceTypesRouteHandler)
  .openapi(getLineMetaSeverityRoute, getLineMetaSeverityRouteHandler)
  .openapi(getLineModeModesRoute, getLineModeModesRouteHandler)
  .openapi(getLineModeModesDisruptionRoute, getLineModeModesDisruptionRouteHandler)
  .openapi(getLineModeModesRouteRoute, getLineModeModesRouteRouteHandler)
  .openapi(getLineModeModesStatusRoute, getLineModeModesStatusRouteHandler)
  .openapi(getLineRouteRoute, getLineRouteRouteHandler)
  .openapi(getLineSearchQueryRoute, getLineSearchQueryRouteHandler)
  .openapi(getLineStatusSeverityRoute, getLineStatusSeverityRouteHandler)
  .openapi(getLineIdsRoute, getLineIdsRouteHandler)
  .openapi(getLineIdsArrivalsStopPointIdRoute, getLineIdsArrivalsStopPointIdRouteHandler)
  .openapi(getLineIdsDisruptionRoute, getLineIdsDisruptionRouteHandler)
  .openapi(getLineIdsRouteRoute, getLineIdsRouteRouteHandler)
  .openapi(getLineIdsStatusRoute, getLineIdsStatusRouteHandler)
  .openapi(getLineIdsStatusStartDateToEndDateRoute, getLineIdsStatusStartDateToEndDateRouteHandler)
  .openapi(getLineIdRouteSequenceDirectionRoute, getLineIdRouteSequenceDirectionRouteHandler)
  .openapi(getLineIdStopPointsRoute, getLineIdStopPointsRouteHandler)
  .openapi(getLineIdTimetableFromStopPointIdRoute, getLineIdTimetableFromStopPointIdRouteHandler)
  .openapi(
    getLineIdTimetableFromStopPointIdToToStopPointIdRoute,
    getLineIdTimetableFromStopPointIdToToStopPointIdRouteHandler,
  )
  .openapi(getModeActiveServiceTypesRoute, getModeActiveServiceTypesRouteHandler)
  .openapi(getModeModeArrivalsRoute, getModeModeArrivalsRouteHandler)
  .openapi(getOccupancyBikePointsIdsRoute, getOccupancyBikePointsIdsRouteHandler)
  .openapi(getOccupancyCarParkRoute, getOccupancyCarParkRouteHandler)
  .openapi(getOccupancyCarParkIdRoute, getOccupancyCarParkIdRouteHandler)
  .openapi(getOccupancyChargeConnectorRoute, getOccupancyChargeConnectorRouteHandler)
  .openapi(getOccupancyChargeConnectorIdsRoute, getOccupancyChargeConnectorIdsRouteHandler)
  .openapi(getPlaceRoute, getPlaceRouteHandler)
  .openapi(getPlaceAddressStreetsPostcodeRoute, getPlaceAddressStreetsPostcodeRouteHandler)
  .openapi(getPlaceMetaCategoriesRoute, getPlaceMetaCategoriesRouteHandler)
  .openapi(getPlaceMetaPlaceTypesRoute, getPlaceMetaPlaceTypesRouteHandler)
  .openapi(getPlaceSearchRoute, getPlaceSearchRouteHandler)
  .openapi(getPlaceTypeTypesRoute, getPlaceTypeTypesRouteHandler)
  .openapi(getPlaceIdRoute, getPlaceIdRouteHandler)
  .openapi(getPlaceTypeAtLatLonRoute, getPlaceTypeAtLatLonRouteHandler)
  .openapi(
    getPlaceTypeOverlayZLatLonWidthHeightRoute,
    getPlaceTypeOverlayZLatLonWidthHeightRouteHandler,
  )
  .openapi(getRoadRoute, getRoadRouteHandler)
  .openapi(getRoadMetaCategoriesRoute, getRoadMetaCategoriesRouteHandler)
  .openapi(getRoadMetaSeveritiesRoute, getRoadMetaSeveritiesRouteHandler)
  .openapi(getRoadAllDisruptionDisruptionIdsRoute, getRoadAllDisruptionDisruptionIdsRouteHandler)
  .openapi(getRoadAllStreetDisruptionRoute, getRoadAllStreetDisruptionRouteHandler)
  .openapi(getRoadIdsRoute, getRoadIdsRouteHandler)
  .openapi(getRoadIdsDisruptionRoute, getRoadIdsDisruptionRouteHandler)
  .openapi(getRoadIdsStatusRoute, getRoadIdsStatusRouteHandler)
  .openapi(getSearchRoute, getSearchRouteHandler)
  .openapi(getSearchBusSchedulesRoute, getSearchBusSchedulesRouteHandler)
  .openapi(getSearchMetaCategoriesRoute, getSearchMetaCategoriesRouteHandler)
  .openapi(getSearchMetaSearchProvidersRoute, getSearchMetaSearchProvidersRouteHandler)
  .openapi(getSearchMetaSortsRoute, getSearchMetaSortsRouteHandler)
  .openapi(getStopPointRoute, getStopPointRouteHandler)
  .openapi(getStopPointMetaCategoriesRoute, getStopPointMetaCategoriesRouteHandler)
  .openapi(getStopPointMetaModesRoute, getStopPointMetaModesRouteHandler)
  .openapi(getStopPointMetaStopTypesRoute, getStopPointMetaStopTypesRouteHandler)
  .openapi(getStopPointModeModesRoute, getStopPointModeModesRouteHandler)
  .openapi(getStopPointModeModesDisruptionRoute, getStopPointModeModesDisruptionRouteHandler)
  .openapi(getStopPointSearchRoute, getStopPointSearchRouteHandler)
  .openapi(getStopPointSearchQueryRoute, getStopPointSearchQueryRouteHandler)
  .openapi(getStopPointServiceTypesRoute, getStopPointServiceTypesRouteHandler)
  .openapi(getStopPointSmsIdRoute, getStopPointSmsIdRouteHandler)
  .openapi(getStopPointTypeTypesRoute, getStopPointTypeTypesRouteHandler)
  .openapi(getStopPointTypeTypesPagePageRoute, getStopPointTypeTypesPagePageRouteHandler)
  .openapi(getStopPointIdsRoute, getStopPointIdsRouteHandler)
  .openapi(getStopPointIdsDisruptionRoute, getStopPointIdsDisruptionRouteHandler)
  .openapi(getStopPointIdArrivalDeparturesRoute, getStopPointIdArrivalDeparturesRouteHandler)
  .openapi(getStopPointIdArrivalsRoute, getStopPointIdArrivalsRouteHandler)
  .openapi(getStopPointIdCanReachOnLineLineIdRoute, getStopPointIdCanReachOnLineLineIdRouteHandler)
  .openapi(getStopPointIdCrowdingLineRoute, getStopPointIdCrowdingLineRouteHandler)
  .openapi(
    getStopPointIdDirectionToToStopPointIdRoute,
    getStopPointIdDirectionToToStopPointIdRouteHandler,
  )
  .openapi(getStopPointIdRouteRoute, getStopPointIdRouteRouteHandler)
  .openapi(getStopPointIdPlaceTypesRoute, getStopPointIdPlaceTypesRouteHandler)
  .openapi(getStopPointStopPointIdCarParksRoute, getStopPointStopPointIdCarParksRouteHandler)
  .openapi(getStopPointStopPointIdTaxiRanksRoute, getStopPointStopPointIdTaxiRanksRouteHandler)
  .openapi(
    getTravelTimesCompareOverlayZMapcenterMapCenterLatMapCenterLonPinlocationPinLatPinLonDimensionsWidthHeightRoute,
    getTravelTimesCompareOverlayZMapcenterMapCenterLatMapCenterLonPinlocationPinLatPinLonDimensionsWidthHeightRouteHandler,
  )
  .openapi(
    getTravelTimesOverlayZMapcenterMapCenterLatMapCenterLonPinlocationPinLatPinLonDimensionsWidthHeightRoute,
    getTravelTimesOverlayZMapcenterMapCenterLatMapCenterLonPinlocationPinLatPinLonDimensionsWidthHeightRouteHandler,
  )
  .openapi(getVehicleIdsArrivalsRoute, getVehicleIdsArrivalsRouteHandler)

export default app
