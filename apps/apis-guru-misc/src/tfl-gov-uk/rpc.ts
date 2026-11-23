import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAccidentStatsYear(
  args: InferRequestType<(typeof client.AccidentStats)[':year']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.AccidentStats[':year'].$get(args, options))
}

export async function getAirQuality(options?: ClientRequestOptions) {
  return await parseResponse(client.AirQuality.$get(undefined, options))
}

export async function getBikePoint(options?: ClientRequestOptions) {
  return await parseResponse(client.BikePoint.$get(undefined, options))
}

export async function getBikePointSearch(
  args: InferRequestType<typeof client.BikePoint.Search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.BikePoint.Search.$get(args, options))
}

export async function getBikePointId(
  args: InferRequestType<(typeof client.BikePoint)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.BikePoint[':id'].$get(args, options))
}

export async function getCabwiseSearch(
  args: InferRequestType<typeof client.Cabwise.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Cabwise.search.$get(args, options))
}

export async function getJourneyJourneyResultsFromToTo(
  args: InferRequestType<(typeof client.Journey.JourneyResults)[':from']['to'][':to']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Journey.JourneyResults[':from'].to[':to'].$get(args, options))
}

export async function getJourneyMetaModes(options?: ClientRequestOptions) {
  return await parseResponse(client.Journey.Meta.Modes.$get(undefined, options))
}

export async function getLineMetaDisruptionCategories(options?: ClientRequestOptions) {
  return await parseResponse(client.Line.Meta.DisruptionCategories.$get(undefined, options))
}

export async function getLineMetaModes(options?: ClientRequestOptions) {
  return await parseResponse(client.Line.Meta.Modes.$get(undefined, options))
}

export async function getLineMetaServiceTypes(options?: ClientRequestOptions) {
  return await parseResponse(client.Line.Meta.ServiceTypes.$get(undefined, options))
}

export async function getLineMetaSeverity(options?: ClientRequestOptions) {
  return await parseResponse(client.Line.Meta.Severity.$get(undefined, options))
}

export async function getLineModeModes(
  args: InferRequestType<(typeof client.Line.Mode)[':modes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Line.Mode[':modes'].$get(args, options))
}

export async function getLineModeModesDisruption(
  args: InferRequestType<(typeof client.Line.Mode)[':modes']['Disruption']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Line.Mode[':modes'].Disruption.$get(args, options))
}

export async function getLineModeModesRoute(
  args: InferRequestType<(typeof client.Line.Mode)[':modes']['Route']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Line.Mode[':modes'].Route.$get(args, options))
}

export async function getLineModeModesStatus(
  args: InferRequestType<(typeof client.Line.Mode)[':modes']['Status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Line.Mode[':modes'].Status.$get(args, options))
}

export async function getLineRoute(
  args: InferRequestType<typeof client.Line.Route.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Line.Route.$get(args, options))
}

export async function getLineSearchQuery(
  args: InferRequestType<(typeof client.Line.Search)[':query']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Line.Search[':query'].$get(args, options))
}

export async function getLineStatusSeverity(
  args: InferRequestType<(typeof client.Line.Status)[':severity']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Line.Status[':severity'].$get(args, options))
}

export async function getLineIds(
  args: InferRequestType<(typeof client.Line)[':ids']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Line[':ids'].$get(args, options))
}

export async function getLineIdsArrivalsStopPointId(
  args: InferRequestType<(typeof client.Line)[':ids']['Arrivals'][':stopPointId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Line[':ids'].Arrivals[':stopPointId'].$get(args, options))
}

export async function getLineIdsDisruption(
  args: InferRequestType<(typeof client.Line)[':ids']['Disruption']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Line[':ids'].Disruption.$get(args, options))
}

export async function getLineIdsRoute(
  args: InferRequestType<(typeof client.Line)[':ids']['Route']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Line[':ids'].Route.$get(args, options))
}

export async function getLineIdsStatus(
  args: InferRequestType<(typeof client.Line)[':ids']['Status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Line[':ids'].Status.$get(args, options))
}

export async function getLineIdsStatusStartDateToEndDate(
  args: InferRequestType<
    (typeof client.Line)[':ids']['Status'][':StartDate']['to'][':EndDate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Line[':ids'].Status[':StartDate'].to[':EndDate'].$get(args, options),
  )
}

export async function getLineIdRouteSequenceDirection(
  args: InferRequestType<(typeof client.Line)[':id']['Route']['Sequence'][':direction']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Line[':id'].Route.Sequence[':direction'].$get(args, options))
}

export async function getLineIdStopPoints(
  args: InferRequestType<(typeof client.Line)[':id']['StopPoints']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Line[':id'].StopPoints.$get(args, options))
}

export async function getLineIdTimetableFromStopPointId(
  args: InferRequestType<(typeof client.Line)[':id']['Timetable'][':fromStopPointId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Line[':id'].Timetable[':fromStopPointId'].$get(args, options))
}

export async function getLineIdTimetableFromStopPointIdToToStopPointId(
  args: InferRequestType<
    (typeof client.Line)[':id']['Timetable'][':fromStopPointId']['to'][':toStopPointId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Line[':id'].Timetable[':fromStopPointId'].to[':toStopPointId'].$get(args, options),
  )
}

export async function getModeActiveServiceTypes(options?: ClientRequestOptions) {
  return await parseResponse(client.Mode.ActiveServiceTypes.$get(undefined, options))
}

export async function getModeModeArrivals(
  args: InferRequestType<(typeof client.Mode)[':mode']['Arrivals']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Mode[':mode'].Arrivals.$get(args, options))
}

export async function getOccupancyBikePointsIds(
  args: InferRequestType<(typeof client.Occupancy.BikePoints)[':ids']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Occupancy.BikePoints[':ids'].$get(args, options))
}

export async function getOccupancyCarPark(options?: ClientRequestOptions) {
  return await parseResponse(client.Occupancy.CarPark.$get(undefined, options))
}

export async function getOccupancyCarParkId(
  args: InferRequestType<(typeof client.Occupancy.CarPark)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Occupancy.CarPark[':id'].$get(args, options))
}

export async function getOccupancyChargeConnector(options?: ClientRequestOptions) {
  return await parseResponse(client.Occupancy.ChargeConnector.$get(undefined, options))
}

export async function getOccupancyChargeConnectorIds(
  args: InferRequestType<(typeof client.Occupancy.ChargeConnector)[':ids']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Occupancy.ChargeConnector[':ids'].$get(args, options))
}

export async function getPlace(
  args: InferRequestType<typeof client.Place.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Place.$get(args, options))
}

export async function getPlaceAddressStreetsPostcode(
  args: InferRequestType<(typeof client.Place.Address.Streets)[':Postcode']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Place.Address.Streets[':Postcode'].$get(args, options))
}

export async function getPlaceMetaCategories(options?: ClientRequestOptions) {
  return await parseResponse(client.Place.Meta.Categories.$get(undefined, options))
}

export async function getPlaceMetaPlaceTypes(options?: ClientRequestOptions) {
  return await parseResponse(client.Place.Meta.PlaceTypes.$get(undefined, options))
}

export async function getPlaceSearch(
  args: InferRequestType<typeof client.Place.Search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Place.Search.$get(args, options))
}

export async function getPlaceTypeTypes(
  args: InferRequestType<(typeof client.Place.Type)[':types']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Place.Type[':types'].$get(args, options))
}

export async function getPlaceId(
  args: InferRequestType<(typeof client.Place)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Place[':id'].$get(args, options))
}

export async function getPlaceTypeAtLatLon(
  args: InferRequestType<(typeof client.Place)[':type']['At'][':Lat'][':Lon']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Place[':type'].At[':Lat'][':Lon'].$get(args, options))
}

export async function getPlaceTypeOverlayZLatLonWidthHeight(
  args: InferRequestType<
    (typeof client.Place)[':type']['overlay'][':z'][':Lat'][':Lon'][':width'][':height']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Place[':type'].overlay[':z'][':Lat'][':Lon'][':width'][':height'].$get(args, options),
  )
}

export async function getRoad(options?: ClientRequestOptions) {
  return await parseResponse(client.Road.$get(undefined, options))
}

export async function getRoadMetaCategories(options?: ClientRequestOptions) {
  return await parseResponse(client.Road.Meta.Categories.$get(undefined, options))
}

export async function getRoadMetaSeverities(options?: ClientRequestOptions) {
  return await parseResponse(client.Road.Meta.Severities.$get(undefined, options))
}

export async function getRoadAllDisruptionDisruptionIds(
  args: InferRequestType<(typeof client.Road.all.Disruption)[':disruptionIds']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Road.all.Disruption[':disruptionIds'].$get(args, options))
}

export async function getRoadAllStreetDisruption(
  args: InferRequestType<typeof client.Road.all.Street.Disruption.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Road.all.Street.Disruption.$get(args, options))
}

export async function getRoadIds(
  args: InferRequestType<(typeof client.Road)[':ids']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Road[':ids'].$get(args, options))
}

export async function getRoadIdsDisruption(
  args: InferRequestType<(typeof client.Road)[':ids']['Disruption']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Road[':ids'].Disruption.$get(args, options))
}

export async function getRoadIdsStatus(
  args: InferRequestType<(typeof client.Road)[':ids']['Status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Road[':ids'].Status.$get(args, options))
}

export async function getSearch(
  args: InferRequestType<typeof client.Search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Search.$get(args, options))
}

export async function getSearchBusSchedules(
  args: InferRequestType<typeof client.Search.BusSchedules.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Search.BusSchedules.$get(args, options))
}

export async function getSearchMetaCategories(options?: ClientRequestOptions) {
  return await parseResponse(client.Search.Meta.Categories.$get(undefined, options))
}

export async function getSearchMetaSearchProviders(options?: ClientRequestOptions) {
  return await parseResponse(client.Search.Meta.SearchProviders.$get(undefined, options))
}

export async function getSearchMetaSorts(options?: ClientRequestOptions) {
  return await parseResponse(client.Search.Meta.Sorts.$get(undefined, options))
}

export async function getStopPoint(
  args: InferRequestType<typeof client.StopPoint.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.StopPoint.$get(args, options))
}

export async function getStopPointMetaCategories(options?: ClientRequestOptions) {
  return await parseResponse(client.StopPoint.Meta.Categories.$get(undefined, options))
}

export async function getStopPointMetaModes(options?: ClientRequestOptions) {
  return await parseResponse(client.StopPoint.Meta.Modes.$get(undefined, options))
}

export async function getStopPointMetaStopTypes(options?: ClientRequestOptions) {
  return await parseResponse(client.StopPoint.Meta.StopTypes.$get(undefined, options))
}

export async function getStopPointModeModes(
  args: InferRequestType<(typeof client.StopPoint.Mode)[':modes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.StopPoint.Mode[':modes'].$get(args, options))
}

export async function getStopPointModeModesDisruption(
  args: InferRequestType<(typeof client.StopPoint.Mode)[':modes']['Disruption']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.StopPoint.Mode[':modes'].Disruption.$get(args, options))
}

export async function getStopPointSearch(
  args: InferRequestType<typeof client.StopPoint.Search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.StopPoint.Search.$get(args, options))
}

export async function getStopPointSearchQuery(
  args: InferRequestType<(typeof client.StopPoint.Search)[':query']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.StopPoint.Search[':query'].$get(args, options))
}

export async function getStopPointServiceTypes(
  args: InferRequestType<typeof client.StopPoint.ServiceTypes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.StopPoint.ServiceTypes.$get(args, options))
}

export async function getStopPointSmsId(
  args: InferRequestType<(typeof client.StopPoint.Sms)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.StopPoint.Sms[':id'].$get(args, options))
}

export async function getStopPointTypeTypes(
  args: InferRequestType<(typeof client.StopPoint.Type)[':types']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.StopPoint.Type[':types'].$get(args, options))
}

export async function getStopPointTypeTypesPagePage(
  args: InferRequestType<(typeof client.StopPoint.Type)[':types']['page'][':page']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.StopPoint.Type[':types'].page[':page'].$get(args, options))
}

export async function getStopPointIds(
  args: InferRequestType<(typeof client.StopPoint)[':ids']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.StopPoint[':ids'].$get(args, options))
}

export async function getStopPointIdsDisruption(
  args: InferRequestType<(typeof client.StopPoint)[':ids']['Disruption']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.StopPoint[':ids'].Disruption.$get(args, options))
}

export async function getStopPointIdArrivalDepartures(
  args: InferRequestType<(typeof client.StopPoint)[':id']['ArrivalDepartures']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.StopPoint[':id'].ArrivalDepartures.$get(args, options))
}

export async function getStopPointIdArrivals(
  args: InferRequestType<(typeof client.StopPoint)[':id']['Arrivals']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.StopPoint[':id'].Arrivals.$get(args, options))
}

export async function getStopPointIdCanReachOnLineLineId(
  args: InferRequestType<(typeof client.StopPoint)[':id']['CanReachOnLine'][':lineId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.StopPoint[':id'].CanReachOnLine[':lineId'].$get(args, options))
}

export async function getStopPointIdCrowdingLine(
  args: InferRequestType<(typeof client.StopPoint)[':id']['Crowding'][':line']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.StopPoint[':id'].Crowding[':line'].$get(args, options))
}

export async function getStopPointIdDirectionToToStopPointId(
  args: InferRequestType<(typeof client.StopPoint)[':id']['DirectionTo'][':toStopPointId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.StopPoint[':id'].DirectionTo[':toStopPointId'].$get(args, options),
  )
}

export async function getStopPointIdRoute(
  args: InferRequestType<(typeof client.StopPoint)[':id']['Route']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.StopPoint[':id'].Route.$get(args, options))
}

export async function getStopPointIdPlaceTypes(
  args: InferRequestType<(typeof client.StopPoint)[':id']['placeTypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.StopPoint[':id'].placeTypes.$get(args, options))
}

export async function getStopPointStopPointIdCarParks(
  args: InferRequestType<(typeof client.StopPoint)[':stopPointId']['CarParks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.StopPoint[':stopPointId'].CarParks.$get(args, options))
}

export async function getStopPointStopPointIdTaxiRanks(
  args: InferRequestType<(typeof client.StopPoint)[':stopPointId']['TaxiRanks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.StopPoint[':stopPointId'].TaxiRanks.$get(args, options))
}

export async function getTravelTimesCompareOverlayZMapcenterMapCenterLatMapCenterLonPinlocationPinLatPinLonDimensionsWidthHeight(
  args: InferRequestType<
    (typeof client.TravelTimes.compareOverlay)[':z']['mapcenter'][':mapCenterLat'][':mapCenterLon']['pinlocation'][':pinLat'][':pinLon']['dimensions'][':width'][':height']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.TravelTimes.compareOverlay[':z'].mapcenter[':mapCenterLat'][':mapCenterLon'].pinlocation[
      ':pinLat'
    ][':pinLon'].dimensions[':width'][':height'].$get(args, options),
  )
}

export async function getTravelTimesOverlayZMapcenterMapCenterLatMapCenterLonPinlocationPinLatPinLonDimensionsWidthHeight(
  args: InferRequestType<
    (typeof client.TravelTimes.overlay)[':z']['mapcenter'][':mapCenterLat'][':mapCenterLon']['pinlocation'][':pinLat'][':pinLon']['dimensions'][':width'][':height']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.TravelTimes.overlay[':z'].mapcenter[':mapCenterLat'][':mapCenterLon'].pinlocation[
      ':pinLat'
    ][':pinLon'].dimensions[':width'][':height'].$get(args, options),
  )
}

export async function getVehicleIdsArrivals(
  args: InferRequestType<(typeof client.Vehicle)[':ids']['Arrivals']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Vehicle[':ids'].Arrivals.$get(args, options))
}
