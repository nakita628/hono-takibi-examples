import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCargoGetRouteOriginDestinationFromDateProductCode(
  args: InferRequestType<
    (typeof client.cargo.getRoute)[':origin-:destination'][':fromDate'][':productCode']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cargo.getRoute[':origin-:destination'][':fromDate'][':productCode'].$get(args, options),
  )
}

export async function getCargoShipmentTrackingAWBPrefixAWBNumber(
  args: InferRequestType<(typeof client.cargo.shipmentTracking)[':aWBPrefix-:aWBNumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.cargo.shipmentTracking[':aWBPrefix-:aWBNumber'].$get(args, options),
  )
}

export async function getOffersLoungesLocation(
  args: InferRequestType<(typeof client.offers.lounges)[':location']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.offers.lounges[':location'].$get(args, options))
}

export async function getOffersSeatmapsFlightNumberOriginDestinationDateCabinClass(
  args: InferRequestType<
    (typeof client.offers.seatmaps)[':flightNumber'][':origin'][':destination'][':date'][':cabinClass']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.offers.seatmaps[':flightNumber'][':origin'][':destination'][':date'][':cabinClass'].$get(
      args,
      options,
    ),
  )
}

export async function getOperationsFlightstatusArrivalsAirportCodeFromDateTime(
  args: InferRequestType<
    (typeof client.operations.flightstatus.arrivals)[':airportCode'][':fromDateTime']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.operations.flightstatus.arrivals[':airportCode'][':fromDateTime'].$get(args, options),
  )
}

export async function getOperationsFlightstatusDeparturesAirportCodeFromDateTime(
  args: InferRequestType<
    (typeof client.operations.flightstatus.departures)[':airportCode'][':fromDateTime']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.operations.flightstatus.departures[':airportCode'][':fromDateTime'].$get(args, options),
  )
}

export async function getOperationsFlightstatusRouteOriginDestinationDate(
  args: InferRequestType<
    (typeof client.operations.flightstatus.route)[':origin'][':destination'][':date']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.operations.flightstatus.route[':origin'][':destination'][':date'].$get(args, options),
  )
}

export async function getOperationsFlightstatusFlightNumberDate(
  args: InferRequestType<(typeof client.operations.flightstatus)[':flightNumber'][':date']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.operations.flightstatus[':flightNumber'][':date'].$get(args, options),
  )
}

export async function getOperationsSchedulesOriginDestinationFromDateTime(
  args: InferRequestType<
    (typeof client.operations.schedules)[':origin'][':destination'][':fromDateTime']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.operations.schedules[':origin'][':destination'][':fromDateTime'].$get(args, options),
  )
}

export async function getReferencesAircraftAircraftCode(
  args: InferRequestType<(typeof client.references.aircraft)[':aircraftCode']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.references.aircraft[':aircraftCode'].$get(args, options))
}

export async function getReferencesAirlinesAirlineCode(
  args: InferRequestType<(typeof client.references.airlines)[':airlineCode']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.references.airlines[':airlineCode'].$get(args, options))
}

export async function getReferencesAirportsNearestLatitudeLongitude(
  args: InferRequestType<
    (typeof client.references.airports.nearest)[':latitude,:longitude']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.references.airports.nearest[':latitude,:longitude'].$get(args, options),
  )
}

export async function getReferencesAirportsAirportCode(
  args: InferRequestType<(typeof client.references.airports)[':airportCode']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.references.airports[':airportCode'].$get(args, options))
}

export async function getReferencesCitiesCityCode(
  args: InferRequestType<(typeof client.references.cities)[':cityCode']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.references.cities[':cityCode'].$get(args, options))
}

export async function getReferencesCountriesCountryCode(
  args: InferRequestType<(typeof client.references.countries)[':countryCode']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.references.countries[':countryCode'].$get(args, options))
}
