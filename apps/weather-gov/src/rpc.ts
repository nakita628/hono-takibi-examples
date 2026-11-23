import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAlerts(
  args: InferRequestType<typeof client.alerts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.alerts.$get(args, options))
}

export async function getAlertsActive(
  args: InferRequestType<typeof client.alerts.active.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.alerts.active.$get(args, options))
}

export async function getAlertsActiveCount(options?: ClientRequestOptions) {
  return await parseResponse(client.alerts.active.count.$get(undefined, options))
}

export async function getAlertsActiveZoneZoneId(
  args: InferRequestType<(typeof client.alerts.active.zone)[':zoneId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.alerts.active.zone[':zoneId'].$get(args, options))
}

export async function getAlertsActiveAreaArea(
  args: InferRequestType<(typeof client.alerts.active.area)[':area']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.alerts.active.area[':area'].$get(args, options))
}

export async function getAlertsActiveRegionRegion(
  args: InferRequestType<(typeof client.alerts.active.region)[':region']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.alerts.active.region[':region'].$get(args, options))
}

export async function getAlertsTypes(options?: ClientRequestOptions) {
  return await parseResponse(client.alerts.types.$get(undefined, options))
}

export async function getAlertsId(
  args: InferRequestType<(typeof client.alerts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.alerts[':id'].$get(args, options))
}

export async function getAviationCwsusCwsuId(
  args: InferRequestType<(typeof client.aviation.cwsus)[':cwsuId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.aviation.cwsus[':cwsuId'].$get(args, options))
}

export async function getAviationCwsusCwsuIdCwas(
  args: InferRequestType<(typeof client.aviation.cwsus)[':cwsuId']['cwas']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.aviation.cwsus[':cwsuId'].cwas.$get(args, options))
}

export async function getAviationCwsusCwsuIdCwasDateSequence(
  args: InferRequestType<
    (typeof client.aviation.cwsus)[':cwsuId']['cwas'][':date'][':sequence']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.aviation.cwsus[':cwsuId'].cwas[':date'][':sequence'].$get(args, options),
  )
}

export async function getAviationSigmets(
  args: InferRequestType<typeof client.aviation.sigmets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.aviation.sigmets.$get(args, options))
}

export async function getAviationSigmetsAtsu(
  args: InferRequestType<(typeof client.aviation.sigmets)[':atsu']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.aviation.sigmets[':atsu'].$get(args, options))
}

export async function getAviationSigmetsAtsuDate(
  args: InferRequestType<(typeof client.aviation.sigmets)[':atsu'][':date']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.aviation.sigmets[':atsu'][':date'].$get(args, options))
}

export async function getAviationSigmetsAtsuDateTime(
  args: InferRequestType<(typeof client.aviation.sigmets)[':atsu'][':date'][':time']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.aviation.sigmets[':atsu'][':date'][':time'].$get(args, options))
}

export async function getGlossary(options?: ClientRequestOptions) {
  return await parseResponse(client.glossary.$get(undefined, options))
}

export async function getGridpointsWfoXY(
  args: InferRequestType<(typeof client.gridpoints)[':wfo'][':x,{y}']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gridpoints[':wfo'][':x,{y}'].$get(args, options))
}

export async function getGridpointsWfoXYForecast(
  args: InferRequestType<(typeof client.gridpoints)[':wfo'][':x,{y}']['forecast']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gridpoints[':wfo'][':x,{y}'].forecast.$get(args, options))
}

export async function getGridpointsWfoXYForecastHourly(
  args: InferRequestType<
    (typeof client.gridpoints)[':wfo'][':x,{y}']['forecast']['hourly']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.gridpoints[':wfo'][':x,{y}'].forecast.hourly.$get(args, options),
  )
}

export async function getGridpointsWfoXYStations(
  args: InferRequestType<(typeof client.gridpoints)[':wfo'][':x,{y}']['stations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gridpoints[':wfo'][':x,{y}'].stations.$get(args, options))
}

export async function getIconsSetTimeOfDayFirst(
  args: InferRequestType<(typeof client.icons)[':set'][':timeOfDay'][':first']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.icons[':set'][':timeOfDay'][':first'].$get(args, options))
}

export async function getIconsSetTimeOfDayFirstSecond(
  args: InferRequestType<(typeof client.icons)[':set'][':timeOfDay'][':first'][':second']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.icons[':set'][':timeOfDay'][':first'][':second'].$get(args, options),
  )
}

export async function getIcons(options?: ClientRequestOptions) {
  return await parseResponse(client.icons.$get(undefined, options))
}

export async function getThumbnailsSatelliteArea(
  args: InferRequestType<(typeof client.thumbnails.satellite)[':area']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.thumbnails.satellite[':area'].$get(args, options))
}

export async function getStationsStationIdObservations(
  args: InferRequestType<(typeof client.stations)[':stationId']['observations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stations[':stationId'].observations.$get(args, options))
}

export async function getStationsStationIdObservationsLatest(
  args: InferRequestType<(typeof client.stations)[':stationId']['observations']['latest']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stations[':stationId'].observations.latest.$get(args, options))
}

export async function getStationsStationIdObservationsTime(
  args: InferRequestType<(typeof client.stations)[':stationId']['observations'][':time']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stations[':stationId'].observations[':time'].$get(args, options),
  )
}

export async function getStationsStationIdTafs(
  args: InferRequestType<(typeof client.stations)[':stationId']['tafs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stations[':stationId'].tafs.$get(args, options))
}

export async function getStationsStationIdTafsDateTime(
  args: InferRequestType<(typeof client.stations)[':stationId']['tafs'][':date'][':time']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.stations[':stationId'].tafs[':date'][':time'].$get(args, options),
  )
}

export async function getStations(
  args: InferRequestType<typeof client.stations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stations.$get(args, options))
}

export async function getStationsStationId(
  args: InferRequestType<(typeof client.stations)[':stationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stations[':stationId'].$get(args, options))
}

export async function getOfficesOfficeId(
  args: InferRequestType<(typeof client.offices)[':officeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.offices[':officeId'].$get(args, options))
}

export async function getOfficesOfficeIdBriefing(
  args: InferRequestType<(typeof client.offices)[':officeId']['briefing']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.offices[':officeId'].briefing.$get(args, options))
}

export async function getOfficesOfficeIdBriefingDownloadLatest(
  args: InferRequestType<
    (typeof client.offices)[':officeId']['briefing']['download']['latest']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.offices[':officeId'].briefing.download.latest.$get(args, options),
  )
}

export async function getOfficesOfficeIdBriefingDownloadBriefingId(
  args: InferRequestType<
    (typeof client.offices)[':officeId']['briefing']['download'][':briefingId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.offices[':officeId'].briefing.download[':briefingId'].$get(args, options),
  )
}

export async function getOfficesOfficeIdHeadlinesHeadlineId(
  args: InferRequestType<(typeof client.offices)[':officeId']['headlines'][':headlineId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.offices[':officeId'].headlines[':headlineId'].$get(args, options),
  )
}

export async function getOfficesOfficeIdHeadlines(
  args: InferRequestType<(typeof client.offices)[':officeId']['headlines']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.offices[':officeId'].headlines.$get(args, options))
}

export async function getOfficesOfficeIdWeatherstories(
  args: InferRequestType<(typeof client.offices)[':officeId']['weatherstories']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.offices[':officeId'].weatherstories.$get(args, options))
}

export async function getOfficesOfficeIdWeatherstoriesDownloadImageId(
  args: InferRequestType<
    (typeof client.offices)[':officeId']['weatherstories']['download'][':imageId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.offices[':officeId'].weatherstories.download[':imageId'].$get(args, options),
  )
}

export async function getPointsLatitudeLongitude(
  args: InferRequestType<(typeof client.points)[':latitude,{longitude}']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.points[':latitude,{longitude}'].$get(args, options))
}

export async function getPointsLatitudeLongitudeRadio(
  args: InferRequestType<(typeof client.points)[':latitude,{longitude}']['radio']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.points[':latitude,{longitude}'].radio.$get(args, options))
}

export async function getPointsLatitudeLongitudeStations(
  args: InferRequestType<(typeof client.points)[':latitude,{longitude}']['stations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.points[':latitude,{longitude}'].stations.$get(args, options))
}

export async function getRadarServers(
  args: InferRequestType<typeof client.radar.servers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.radar.servers.$get(args, options))
}

export async function getRadarServersId(
  args: InferRequestType<(typeof client.radar.servers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.radar.servers[':id'].$get(args, options))
}

export async function getRadarSpgds(
  args: InferRequestType<typeof client.radar.spgds.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.radar.spgds.$get(args, options))
}

export async function getRadarStations(
  args: InferRequestType<typeof client.radar.stations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.radar.stations.$get(args, options))
}

export async function getRadarStationsStationId(
  args: InferRequestType<(typeof client.radar.stations)[':stationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.radar.stations[':stationId'].$get(args, options))
}

export async function getRadarStationsStationIdAlarms(
  args: InferRequestType<(typeof client.radar.stations)[':stationId']['alarms']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.radar.stations[':stationId'].alarms.$get(args, options))
}

export async function getRadarQueuesHost(
  args: InferRequestType<(typeof client.radar.queues)[':host']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.radar.queues[':host'].$get(args, options))
}

export async function getRadarProfilersStationId(
  args: InferRequestType<(typeof client.radar.profilers)[':stationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.radar.profilers[':stationId'].$get(args, options))
}

export async function getRadio(
  args: InferRequestType<typeof client.radio.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.radio.$get(args, options))
}

export async function getRadioCallSign(
  args: InferRequestType<(typeof client.radio)[':callSign']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.radio[':callSign'].$get(args, options))
}

export async function getRadioCallSignBroadcast(
  args: InferRequestType<(typeof client.radio)[':callSign']['broadcast']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.radio[':callSign'].broadcast.$get(args, options))
}

export async function getProducts(
  args: InferRequestType<typeof client.products.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.products.$get(args, options))
}

export async function getProductsLocations(options?: ClientRequestOptions) {
  return await parseResponse(client.products.locations.$get(undefined, options))
}

export async function getProductsTypes(options?: ClientRequestOptions) {
  return await parseResponse(client.products.types.$get(undefined, options))
}

export async function getProductsProductId(
  args: InferRequestType<(typeof client.products)[':productId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.products[':productId'].$get(args, options))
}

export async function getProductsTypesTypeId(
  args: InferRequestType<(typeof client.products.types)[':typeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.products.types[':typeId'].$get(args, options))
}

export async function getProductsTypesTypeIdLocations(
  args: InferRequestType<(typeof client.products.types)[':typeId']['locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.products.types[':typeId'].locations.$get(args, options))
}

export async function getProductsLocationsLocationIdTypes(
  args: InferRequestType<(typeof client.products.locations)[':locationId']['types']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.products.locations[':locationId'].types.$get(args, options))
}

export async function getProductsTypesTypeIdLocationsLocationId(
  args: InferRequestType<
    (typeof client.products.types)[':typeId']['locations'][':locationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.products.types[':typeId'].locations[':locationId'].$get(args, options),
  )
}

export async function getProductsTypesTypeIdLocationsLocationIdLatest(
  args: InferRequestType<
    (typeof client.products.types)[':typeId']['locations'][':locationId']['latest']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.products.types[':typeId'].locations[':locationId'].latest.$get(args, options),
  )
}

export async function getZones(
  args: InferRequestType<typeof client.zones.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.zones.$get(args, options))
}

export async function getZonesType(
  args: InferRequestType<(typeof client.zones)[':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.zones[':type'].$get(args, options))
}

export async function getZonesTypeZoneId(
  args: InferRequestType<(typeof client.zones)[':type'][':zoneId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.zones[':type'][':zoneId'].$get(args, options))
}

export async function getZonesTypeZoneIdForecast(
  args: InferRequestType<(typeof client.zones)[':type'][':zoneId']['forecast']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.zones[':type'][':zoneId'].forecast.$get(args, options))
}

export async function getZonesTypeZoneIdRadio(
  args: InferRequestType<(typeof client.zones)[':type'][':zoneId']['radio']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.zones[':type'][':zoneId'].radio.$get(args, options))
}

export async function getZonesForecastZoneIdObservations(
  args: InferRequestType<(typeof client.zones.forecast)[':zoneId']['observations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.zones.forecast[':zoneId'].observations.$get(args, options))
}

export async function getZonesForecastZoneIdStations(
  args: InferRequestType<(typeof client.zones.forecast)[':zoneId']['stations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.zones.forecast[':zoneId'].stations.$get(args, options))
}
