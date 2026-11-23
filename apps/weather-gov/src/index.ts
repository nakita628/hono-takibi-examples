import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAlertsActiveAreaAreaRoute,
  getAlertsActiveCountRoute,
  getAlertsActiveRegionRegionRoute,
  getAlertsActiveRoute,
  getAlertsActiveZoneZoneIdRoute,
  getAlertsIdRoute,
  getAlertsRoute,
  getAlertsTypesRoute,
  getAviationCwsusCwsuIdCwasDateSequenceRoute,
  getAviationCwsusCwsuIdCwasRoute,
  getAviationCwsusCwsuIdRoute,
  getAviationSigmetsAtsuDateRoute,
  getAviationSigmetsAtsuDateTimeRoute,
  getAviationSigmetsAtsuRoute,
  getAviationSigmetsRoute,
  getGlossaryRoute,
  getGridpointsWfoXYForecastHourlyRoute,
  getGridpointsWfoXYForecastRoute,
  getGridpointsWfoXYRoute,
  getGridpointsWfoXYStationsRoute,
  getIconsRoute,
  getIconsSetTimeOfDayFirstRoute,
  getIconsSetTimeOfDayFirstSecondRoute,
  getOfficesOfficeIdBriefingDownloadBriefingIdRoute,
  getOfficesOfficeIdBriefingDownloadLatestRoute,
  getOfficesOfficeIdBriefingRoute,
  getOfficesOfficeIdHeadlinesHeadlineIdRoute,
  getOfficesOfficeIdHeadlinesRoute,
  getOfficesOfficeIdRoute,
  getOfficesOfficeIdWeatherstoriesDownloadImageIdRoute,
  getOfficesOfficeIdWeatherstoriesRoute,
  getPointsLatitudeLongitudeRadioRoute,
  getPointsLatitudeLongitudeRoute,
  getPointsLatitudeLongitudeStationsRoute,
  getProductsLocationsLocationIdTypesRoute,
  getProductsLocationsRoute,
  getProductsProductIdRoute,
  getProductsRoute,
  getProductsTypesRoute,
  getProductsTypesTypeIdLocationsLocationIdLatestRoute,
  getProductsTypesTypeIdLocationsLocationIdRoute,
  getProductsTypesTypeIdLocationsRoute,
  getProductsTypesTypeIdRoute,
  getRadarProfilersStationIdRoute,
  getRadarQueuesHostRoute,
  getRadarServersIdRoute,
  getRadarServersRoute,
  getRadarSpgdsRoute,
  getRadarStationsRoute,
  getRadarStationsStationIdAlarmsRoute,
  getRadarStationsStationIdRoute,
  getRadioCallSignBroadcastRoute,
  getRadioCallSignRoute,
  getRadioRoute,
  getStationsRoute,
  getStationsStationIdObservationsLatestRoute,
  getStationsStationIdObservationsRoute,
  getStationsStationIdObservationsTimeRoute,
  getStationsStationIdRoute,
  getStationsStationIdTafsDateTimeRoute,
  getStationsStationIdTafsRoute,
  getThumbnailsSatelliteAreaRoute,
  getZonesForecastZoneIdObservationsRoute,
  getZonesForecastZoneIdStationsRoute,
  getZonesRoute,
  getZonesTypeRoute,
  getZonesTypeZoneIdForecastRoute,
  getZonesTypeZoneIdRadioRoute,
  getZonesTypeZoneIdRoute,
} from './routes'
import {
  getAlertsActiveAreaAreaRouteHandler,
  getAlertsActiveCountRouteHandler,
  getAlertsActiveRegionRegionRouteHandler,
  getAlertsActiveRouteHandler,
  getAlertsActiveZoneZoneIdRouteHandler,
  getAlertsIdRouteHandler,
  getAlertsRouteHandler,
  getAlertsTypesRouteHandler,
  getAviationCwsusCwsuIdCwasDateSequenceRouteHandler,
  getAviationCwsusCwsuIdCwasRouteHandler,
  getAviationCwsusCwsuIdRouteHandler,
  getAviationSigmetsAtsuDateRouteHandler,
  getAviationSigmetsAtsuDateTimeRouteHandler,
  getAviationSigmetsAtsuRouteHandler,
  getAviationSigmetsRouteHandler,
  getGlossaryRouteHandler,
  getGridpointsWfoXYForecastHourlyRouteHandler,
  getGridpointsWfoXYForecastRouteHandler,
  getGridpointsWfoXYRouteHandler,
  getGridpointsWfoXYStationsRouteHandler,
  getIconsRouteHandler,
  getIconsSetTimeOfDayFirstRouteHandler,
  getIconsSetTimeOfDayFirstSecondRouteHandler,
  getOfficesOfficeIdBriefingDownloadBriefingIdRouteHandler,
  getOfficesOfficeIdBriefingDownloadLatestRouteHandler,
  getOfficesOfficeIdBriefingRouteHandler,
  getOfficesOfficeIdHeadlinesHeadlineIdRouteHandler,
  getOfficesOfficeIdHeadlinesRouteHandler,
  getOfficesOfficeIdRouteHandler,
  getOfficesOfficeIdWeatherstoriesDownloadImageIdRouteHandler,
  getOfficesOfficeIdWeatherstoriesRouteHandler,
  getPointsLatitudeLongitudeRadioRouteHandler,
  getPointsLatitudeLongitudeRouteHandler,
  getPointsLatitudeLongitudeStationsRouteHandler,
  getProductsLocationsLocationIdTypesRouteHandler,
  getProductsLocationsRouteHandler,
  getProductsProductIdRouteHandler,
  getProductsRouteHandler,
  getProductsTypesRouteHandler,
  getProductsTypesTypeIdLocationsLocationIdLatestRouteHandler,
  getProductsTypesTypeIdLocationsLocationIdRouteHandler,
  getProductsTypesTypeIdLocationsRouteHandler,
  getProductsTypesTypeIdRouteHandler,
  getRadarProfilersStationIdRouteHandler,
  getRadarQueuesHostRouteHandler,
  getRadarServersIdRouteHandler,
  getRadarServersRouteHandler,
  getRadarSpgdsRouteHandler,
  getRadarStationsRouteHandler,
  getRadarStationsStationIdAlarmsRouteHandler,
  getRadarStationsStationIdRouteHandler,
  getRadioCallSignBroadcastRouteHandler,
  getRadioCallSignRouteHandler,
  getRadioRouteHandler,
  getStationsRouteHandler,
  getStationsStationIdObservationsLatestRouteHandler,
  getStationsStationIdObservationsRouteHandler,
  getStationsStationIdObservationsTimeRouteHandler,
  getStationsStationIdRouteHandler,
  getStationsStationIdTafsDateTimeRouteHandler,
  getStationsStationIdTafsRouteHandler,
  getThumbnailsSatelliteAreaRouteHandler,
  getZonesForecastZoneIdObservationsRouteHandler,
  getZonesForecastZoneIdStationsRouteHandler,
  getZonesRouteHandler,
  getZonesTypeRouteHandler,
  getZonesTypeZoneIdForecastRouteHandler,
  getZonesTypeZoneIdRadioRouteHandler,
  getZonesTypeZoneIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAlertsRoute, getAlertsRouteHandler)
  .openapi(getAlertsActiveRoute, getAlertsActiveRouteHandler)
  .openapi(getAlertsActiveCountRoute, getAlertsActiveCountRouteHandler)
  .openapi(getAlertsActiveZoneZoneIdRoute, getAlertsActiveZoneZoneIdRouteHandler)
  .openapi(getAlertsActiveAreaAreaRoute, getAlertsActiveAreaAreaRouteHandler)
  .openapi(getAlertsActiveRegionRegionRoute, getAlertsActiveRegionRegionRouteHandler)
  .openapi(getAlertsTypesRoute, getAlertsTypesRouteHandler)
  .openapi(getAlertsIdRoute, getAlertsIdRouteHandler)
  .openapi(getAviationCwsusCwsuIdRoute, getAviationCwsusCwsuIdRouteHandler)
  .openapi(getAviationCwsusCwsuIdCwasRoute, getAviationCwsusCwsuIdCwasRouteHandler)
  .openapi(
    getAviationCwsusCwsuIdCwasDateSequenceRoute,
    getAviationCwsusCwsuIdCwasDateSequenceRouteHandler,
  )
  .openapi(getAviationSigmetsRoute, getAviationSigmetsRouteHandler)
  .openapi(getAviationSigmetsAtsuRoute, getAviationSigmetsAtsuRouteHandler)
  .openapi(getAviationSigmetsAtsuDateRoute, getAviationSigmetsAtsuDateRouteHandler)
  .openapi(getAviationSigmetsAtsuDateTimeRoute, getAviationSigmetsAtsuDateTimeRouteHandler)
  .openapi(getGlossaryRoute, getGlossaryRouteHandler)
  .openapi(getGridpointsWfoXYRoute, getGridpointsWfoXYRouteHandler)
  .openapi(getGridpointsWfoXYForecastRoute, getGridpointsWfoXYForecastRouteHandler)
  .openapi(getGridpointsWfoXYForecastHourlyRoute, getGridpointsWfoXYForecastHourlyRouteHandler)
  .openapi(getGridpointsWfoXYStationsRoute, getGridpointsWfoXYStationsRouteHandler)
  .openapi(getIconsSetTimeOfDayFirstRoute, getIconsSetTimeOfDayFirstRouteHandler)
  .openapi(getIconsSetTimeOfDayFirstSecondRoute, getIconsSetTimeOfDayFirstSecondRouteHandler)
  .openapi(getIconsRoute, getIconsRouteHandler)
  .openapi(getThumbnailsSatelliteAreaRoute, getThumbnailsSatelliteAreaRouteHandler)
  .openapi(getStationsStationIdObservationsRoute, getStationsStationIdObservationsRouteHandler)
  .openapi(
    getStationsStationIdObservationsLatestRoute,
    getStationsStationIdObservationsLatestRouteHandler,
  )
  .openapi(
    getStationsStationIdObservationsTimeRoute,
    getStationsStationIdObservationsTimeRouteHandler,
  )
  .openapi(getStationsStationIdTafsRoute, getStationsStationIdTafsRouteHandler)
  .openapi(getStationsStationIdTafsDateTimeRoute, getStationsStationIdTafsDateTimeRouteHandler)
  .openapi(getStationsRoute, getStationsRouteHandler)
  .openapi(getStationsStationIdRoute, getStationsStationIdRouteHandler)
  .openapi(getOfficesOfficeIdRoute, getOfficesOfficeIdRouteHandler)
  .openapi(getOfficesOfficeIdBriefingRoute, getOfficesOfficeIdBriefingRouteHandler)
  .openapi(
    getOfficesOfficeIdBriefingDownloadLatestRoute,
    getOfficesOfficeIdBriefingDownloadLatestRouteHandler,
  )
  .openapi(
    getOfficesOfficeIdBriefingDownloadBriefingIdRoute,
    getOfficesOfficeIdBriefingDownloadBriefingIdRouteHandler,
  )
  .openapi(
    getOfficesOfficeIdHeadlinesHeadlineIdRoute,
    getOfficesOfficeIdHeadlinesHeadlineIdRouteHandler,
  )
  .openapi(getOfficesOfficeIdHeadlinesRoute, getOfficesOfficeIdHeadlinesRouteHandler)
  .openapi(getOfficesOfficeIdWeatherstoriesRoute, getOfficesOfficeIdWeatherstoriesRouteHandler)
  .openapi(
    getOfficesOfficeIdWeatherstoriesDownloadImageIdRoute,
    getOfficesOfficeIdWeatherstoriesDownloadImageIdRouteHandler,
  )
  .openapi(getPointsLatitudeLongitudeRoute, getPointsLatitudeLongitudeRouteHandler)
  .openapi(getPointsLatitudeLongitudeRadioRoute, getPointsLatitudeLongitudeRadioRouteHandler)
  .openapi(getPointsLatitudeLongitudeStationsRoute, getPointsLatitudeLongitudeStationsRouteHandler)
  .openapi(getRadarServersRoute, getRadarServersRouteHandler)
  .openapi(getRadarServersIdRoute, getRadarServersIdRouteHandler)
  .openapi(getRadarSpgdsRoute, getRadarSpgdsRouteHandler)
  .openapi(getRadarStationsRoute, getRadarStationsRouteHandler)
  .openapi(getRadarStationsStationIdRoute, getRadarStationsStationIdRouteHandler)
  .openapi(getRadarStationsStationIdAlarmsRoute, getRadarStationsStationIdAlarmsRouteHandler)
  .openapi(getRadarQueuesHostRoute, getRadarQueuesHostRouteHandler)
  .openapi(getRadarProfilersStationIdRoute, getRadarProfilersStationIdRouteHandler)
  .openapi(getRadioRoute, getRadioRouteHandler)
  .openapi(getRadioCallSignRoute, getRadioCallSignRouteHandler)
  .openapi(getRadioCallSignBroadcastRoute, getRadioCallSignBroadcastRouteHandler)
  .openapi(getProductsRoute, getProductsRouteHandler)
  .openapi(getProductsLocationsRoute, getProductsLocationsRouteHandler)
  .openapi(getProductsTypesRoute, getProductsTypesRouteHandler)
  .openapi(getProductsProductIdRoute, getProductsProductIdRouteHandler)
  .openapi(getProductsTypesTypeIdRoute, getProductsTypesTypeIdRouteHandler)
  .openapi(getProductsTypesTypeIdLocationsRoute, getProductsTypesTypeIdLocationsRouteHandler)
  .openapi(
    getProductsLocationsLocationIdTypesRoute,
    getProductsLocationsLocationIdTypesRouteHandler,
  )
  .openapi(
    getProductsTypesTypeIdLocationsLocationIdRoute,
    getProductsTypesTypeIdLocationsLocationIdRouteHandler,
  )
  .openapi(
    getProductsTypesTypeIdLocationsLocationIdLatestRoute,
    getProductsTypesTypeIdLocationsLocationIdLatestRouteHandler,
  )
  .openapi(getZonesRoute, getZonesRouteHandler)
  .openapi(getZonesTypeRoute, getZonesTypeRouteHandler)
  .openapi(getZonesTypeZoneIdRoute, getZonesTypeZoneIdRouteHandler)
  .openapi(getZonesTypeZoneIdForecastRoute, getZonesTypeZoneIdForecastRouteHandler)
  .openapi(getZonesTypeZoneIdRadioRoute, getZonesTypeZoneIdRadioRouteHandler)
  .openapi(getZonesForecastZoneIdObservationsRoute, getZonesForecastZoneIdObservationsRouteHandler)
  .openapi(getZonesForecastZoneIdStationsRoute, getZonesForecastZoneIdStationsRouteHandler)

export default app
