import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCargoKey() {
  return ['cargo'] as const
}

export function getOffersKey() {
  return ['offers'] as const
}

export function getOperationsKey() {
  return ['operations'] as const
}

export function getReferencesKey() {
  return ['references'] as const
}

export function getGetCargoGetRouteOriginDestinationFromDateProductCodeKey(
  args: InferRequestType<
    (typeof client.cargo.getRoute)[':origin-:destination'][':fromDate'][':productCode']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['cargo', '/cargo/getRoute/:origin-:destination/:fromDate/:productCode', keyArgs] as const
}

export function useGetCargoGetRouteOriginDestinationFromDateProductCode<TError = unknown>(
  args: InferRequestType<
    (typeof client.cargo.getRoute)[':origin-:destination'][':fromDate'][':productCode']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cargo.getRoute)[':origin-:destination'][':fromDate'][':productCode']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCargoGetRouteOriginDestinationFromDateProductCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cargo.getRoute)[':origin-:destination'][':fromDate'][':productCode']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.cargo.getRoute[':origin-:destination'][':fromDate'][':productCode'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCargoGetRouteOriginDestinationFromDateProductCode<TError = unknown>(
  args: InferRequestType<
    (typeof client.cargo.getRoute)[':origin-:destination'][':fromDate'][':productCode']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cargo.getRoute)[':origin-:destination'][':fromDate'][':productCode']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCargoGetRouteOriginDestinationFromDateProductCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cargo.getRoute)[':origin-:destination'][':fromDate'][':productCode']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.cargo.getRoute[':origin-:destination'][':fromDate'][':productCode'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCargoShipmentTrackingAWBPrefixAWBNumberKey(
  args: InferRequestType<(typeof client.cargo.shipmentTracking)[':aWBPrefix-:aWBNumber']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['cargo', '/cargo/shipmentTracking/:aWBPrefix-:aWBNumber', keyArgs] as const
}

export function useGetCargoShipmentTrackingAWBPrefixAWBNumber<TError = unknown>(
  args: InferRequestType<(typeof client.cargo.shipmentTracking)[':aWBPrefix-:aWBNumber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.cargo.shipmentTracking)[':aWBPrefix-:aWBNumber']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCargoShipmentTrackingAWBPrefixAWBNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.cargo.shipmentTracking)[':aWBPrefix-:aWBNumber']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.cargo.shipmentTracking[':aWBPrefix-:aWBNumber'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCargoShipmentTrackingAWBPrefixAWBNumber<TError = unknown>(
  args: InferRequestType<(typeof client.cargo.shipmentTracking)[':aWBPrefix-:aWBNumber']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.cargo.shipmentTracking)[':aWBPrefix-:aWBNumber']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCargoShipmentTrackingAWBPrefixAWBNumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.cargo.shipmentTracking)[':aWBPrefix-:aWBNumber']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.cargo.shipmentTracking[':aWBPrefix-:aWBNumber'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOffersLoungesLocationKey(
  args: InferRequestType<(typeof client.offers.lounges)[':location']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['offers', '/offers/lounges/:location', keyArgs] as const
}

export function useGetOffersLoungesLocation<TError = unknown>(
  args: InferRequestType<(typeof client.offers.lounges)[':location']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.offers.lounges)[':location']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOffersLoungesLocationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.offers.lounges)[':location']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.offers.lounges[':location'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOffersLoungesLocation<TError = unknown>(
  args: InferRequestType<(typeof client.offers.lounges)[':location']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.offers.lounges)[':location']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOffersLoungesLocationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.offers.lounges)[':location']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.offers.lounges[':location'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOffersSeatmapsFlightNumberOriginDestinationDateCabinClassKey(
  args: InferRequestType<
    (typeof client.offers.seatmaps)[':flightNumber'][':origin'][':destination'][':date'][':cabinClass']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'offers',
    '/offers/seatmaps/:flightNumber/:origin/:destination/:date/:cabinClass',
    keyArgs,
  ] as const
}

export function useGetOffersSeatmapsFlightNumberOriginDestinationDateCabinClass<TError = unknown>(
  args: InferRequestType<
    (typeof client.offers.seatmaps)[':flightNumber'][':origin'][':destination'][':date'][':cabinClass']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.offers.seatmaps)[':flightNumber'][':origin'][':destination'][':date'][':cabinClass']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOffersSeatmapsFlightNumberOriginDestinationDateCabinClassKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.offers.seatmaps)[':flightNumber'][':origin'][':destination'][':date'][':cabinClass']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.offers.seatmaps[':flightNumber'][':origin'][':destination'][':date'][
            ':cabinClass'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOffersSeatmapsFlightNumberOriginDestinationDateCabinClass<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.offers.seatmaps)[':flightNumber'][':origin'][':destination'][':date'][':cabinClass']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.offers.seatmaps)[':flightNumber'][':origin'][':destination'][':date'][':cabinClass']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOffersSeatmapsFlightNumberOriginDestinationDateCabinClassKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.offers.seatmaps)[':flightNumber'][':origin'][':destination'][':date'][':cabinClass']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.offers.seatmaps[':flightNumber'][':origin'][':destination'][':date'][
            ':cabinClass'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOperationsFlightstatusArrivalsAirportCodeFromDateTimeKey(
  args: InferRequestType<
    (typeof client.operations.flightstatus.arrivals)[':airportCode'][':fromDateTime']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'operations',
    '/operations/flightstatus/arrivals/:airportCode/:fromDateTime',
    keyArgs,
  ] as const
}

export function useGetOperationsFlightstatusArrivalsAirportCodeFromDateTime<TError = unknown>(
  args: InferRequestType<
    (typeof client.operations.flightstatus.arrivals)[':airportCode'][':fromDateTime']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.operations.flightstatus.arrivals)[':airportCode'][':fromDateTime']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOperationsFlightstatusArrivalsAirportCodeFromDateTimeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.operations.flightstatus.arrivals)[':airportCode'][':fromDateTime']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.operations.flightstatus.arrivals[':airportCode'][':fromDateTime'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOperationsFlightstatusArrivalsAirportCodeFromDateTime<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.operations.flightstatus.arrivals)[':airportCode'][':fromDateTime']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.operations.flightstatus.arrivals)[':airportCode'][':fromDateTime']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOperationsFlightstatusArrivalsAirportCodeFromDateTimeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.operations.flightstatus.arrivals)[':airportCode'][':fromDateTime']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.operations.flightstatus.arrivals[':airportCode'][':fromDateTime'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOperationsFlightstatusDeparturesAirportCodeFromDateTimeKey(
  args: InferRequestType<
    (typeof client.operations.flightstatus.departures)[':airportCode'][':fromDateTime']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'operations',
    '/operations/flightstatus/departures/:airportCode/:fromDateTime',
    keyArgs,
  ] as const
}

export function useGetOperationsFlightstatusDeparturesAirportCodeFromDateTime<TError = unknown>(
  args: InferRequestType<
    (typeof client.operations.flightstatus.departures)[':airportCode'][':fromDateTime']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.operations.flightstatus.departures)[':airportCode'][':fromDateTime']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOperationsFlightstatusDeparturesAirportCodeFromDateTimeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.operations.flightstatus.departures)[':airportCode'][':fromDateTime']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.operations.flightstatus.departures[':airportCode'][':fromDateTime'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOperationsFlightstatusDeparturesAirportCodeFromDateTime<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.operations.flightstatus.departures)[':airportCode'][':fromDateTime']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.operations.flightstatus.departures)[':airportCode'][':fromDateTime']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOperationsFlightstatusDeparturesAirportCodeFromDateTimeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.operations.flightstatus.departures)[':airportCode'][':fromDateTime']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.operations.flightstatus.departures[':airportCode'][':fromDateTime'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOperationsFlightstatusRouteOriginDestinationDateKey(
  args: InferRequestType<
    (typeof client.operations.flightstatus.route)[':origin'][':destination'][':date']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'operations',
    '/operations/flightstatus/route/:origin/:destination/:date',
    keyArgs,
  ] as const
}

export function useGetOperationsFlightstatusRouteOriginDestinationDate<TError = unknown>(
  args: InferRequestType<
    (typeof client.operations.flightstatus.route)[':origin'][':destination'][':date']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.operations.flightstatus.route)[':origin'][':destination'][':date']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOperationsFlightstatusRouteOriginDestinationDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.operations.flightstatus.route)[':origin'][':destination'][':date']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.operations.flightstatus.route[':origin'][':destination'][':date'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOperationsFlightstatusRouteOriginDestinationDate<TError = unknown>(
  args: InferRequestType<
    (typeof client.operations.flightstatus.route)[':origin'][':destination'][':date']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.operations.flightstatus.route)[':origin'][':destination'][':date']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOperationsFlightstatusRouteOriginDestinationDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.operations.flightstatus.route)[':origin'][':destination'][':date']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.operations.flightstatus.route[':origin'][':destination'][':date'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOperationsFlightstatusFlightNumberDateKey(
  args: InferRequestType<(typeof client.operations.flightstatus)[':flightNumber'][':date']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['operations', '/operations/flightstatus/:flightNumber/:date', keyArgs] as const
}

export function useGetOperationsFlightstatusFlightNumberDate<TError = unknown>(
  args: InferRequestType<(typeof client.operations.flightstatus)[':flightNumber'][':date']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.operations.flightstatus)[':flightNumber'][':date']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOperationsFlightstatusFlightNumberDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.operations.flightstatus)[':flightNumber'][':date']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.operations.flightstatus[':flightNumber'][':date'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOperationsFlightstatusFlightNumberDate<TError = unknown>(
  args: InferRequestType<(typeof client.operations.flightstatus)[':flightNumber'][':date']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.operations.flightstatus)[':flightNumber'][':date']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOperationsFlightstatusFlightNumberDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.operations.flightstatus)[':flightNumber'][':date']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.operations.flightstatus[':flightNumber'][':date'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOperationsSchedulesOriginDestinationFromDateTimeKey(
  args: InferRequestType<
    (typeof client.operations.schedules)[':origin'][':destination'][':fromDateTime']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'operations',
    '/operations/schedules/:origin/:destination/:fromDateTime',
    keyArgs,
  ] as const
}

export function useGetOperationsSchedulesOriginDestinationFromDateTime<TError = unknown>(
  args: InferRequestType<
    (typeof client.operations.schedules)[':origin'][':destination'][':fromDateTime']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.operations.schedules)[':origin'][':destination'][':fromDateTime']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOperationsSchedulesOriginDestinationFromDateTimeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.operations.schedules)[':origin'][':destination'][':fromDateTime']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.operations.schedules[':origin'][':destination'][':fromDateTime'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOperationsSchedulesOriginDestinationFromDateTime<TError = unknown>(
  args: InferRequestType<
    (typeof client.operations.schedules)[':origin'][':destination'][':fromDateTime']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.operations.schedules)[':origin'][':destination'][':fromDateTime']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOperationsSchedulesOriginDestinationFromDateTimeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.operations.schedules)[':origin'][':destination'][':fromDateTime']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.operations.schedules[':origin'][':destination'][':fromDateTime'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetReferencesAircraftAircraftCodeKey(
  args: InferRequestType<(typeof client.references.aircraft)[':aircraftCode']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['references', '/references/aircraft/:aircraftCode', keyArgs] as const
}

export function useGetReferencesAircraftAircraftCode<TError = unknown>(
  args: InferRequestType<(typeof client.references.aircraft)[':aircraftCode']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.references.aircraft)[':aircraftCode']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetReferencesAircraftAircraftCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.references.aircraft)[':aircraftCode']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.references.aircraft[':aircraftCode'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReferencesAircraftAircraftCode<TError = unknown>(
  args: InferRequestType<(typeof client.references.aircraft)[':aircraftCode']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.references.aircraft)[':aircraftCode']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetReferencesAircraftAircraftCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.references.aircraft)[':aircraftCode']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.references.aircraft[':aircraftCode'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReferencesAirlinesAirlineCodeKey(
  args: InferRequestType<(typeof client.references.airlines)[':airlineCode']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['references', '/references/airlines/:airlineCode', keyArgs] as const
}

export function useGetReferencesAirlinesAirlineCode<TError = unknown>(
  args: InferRequestType<(typeof client.references.airlines)[':airlineCode']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.references.airlines)[':airlineCode']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetReferencesAirlinesAirlineCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.references.airlines)[':airlineCode']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.references.airlines[':airlineCode'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReferencesAirlinesAirlineCode<TError = unknown>(
  args: InferRequestType<(typeof client.references.airlines)[':airlineCode']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.references.airlines)[':airlineCode']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetReferencesAirlinesAirlineCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.references.airlines)[':airlineCode']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.references.airlines[':airlineCode'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReferencesAirportsNearestLatitudeLongitudeKey(
  args: InferRequestType<
    (typeof client.references.airports.nearest)[':latitude,:longitude']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['references', '/references/airports/nearest/:latitude,:longitude', keyArgs] as const
}

export function useGetReferencesAirportsNearestLatitudeLongitude<TError = unknown>(
  args: InferRequestType<
    (typeof client.references.airports.nearest)[':latitude,:longitude']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.references.airports.nearest)[':latitude,:longitude']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetReferencesAirportsNearestLatitudeLongitudeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.references.airports.nearest)[':latitude,:longitude']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.references.airports.nearest[':latitude,:longitude'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReferencesAirportsNearestLatitudeLongitude<TError = unknown>(
  args: InferRequestType<
    (typeof client.references.airports.nearest)[':latitude,:longitude']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.references.airports.nearest)[':latitude,:longitude']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetReferencesAirportsNearestLatitudeLongitudeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.references.airports.nearest)[':latitude,:longitude']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.references.airports.nearest[':latitude,:longitude'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetReferencesAirportsAirportCodeKey(
  args: InferRequestType<(typeof client.references.airports)[':airportCode']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['references', '/references/airports/:airportCode', keyArgs] as const
}

export function useGetReferencesAirportsAirportCode<TError = unknown>(
  args: InferRequestType<(typeof client.references.airports)[':airportCode']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.references.airports)[':airportCode']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetReferencesAirportsAirportCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.references.airports)[':airportCode']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.references.airports[':airportCode'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReferencesAirportsAirportCode<TError = unknown>(
  args: InferRequestType<(typeof client.references.airports)[':airportCode']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.references.airports)[':airportCode']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetReferencesAirportsAirportCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.references.airports)[':airportCode']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.references.airports[':airportCode'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReferencesCitiesCityCodeKey(
  args: InferRequestType<(typeof client.references.cities)[':cityCode']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['references', '/references/cities/:cityCode', keyArgs] as const
}

export function useGetReferencesCitiesCityCode<TError = unknown>(
  args: InferRequestType<(typeof client.references.cities)[':cityCode']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.references.cities)[':cityCode']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetReferencesCitiesCityCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.references.cities)[':cityCode']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.references.cities[':cityCode'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReferencesCitiesCityCode<TError = unknown>(
  args: InferRequestType<(typeof client.references.cities)[':cityCode']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.references.cities)[':cityCode']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetReferencesCitiesCityCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.references.cities)[':cityCode']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.references.cities[':cityCode'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReferencesCountriesCountryCodeKey(
  args: InferRequestType<(typeof client.references.countries)[':countryCode']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['references', '/references/countries/:countryCode', keyArgs] as const
}

export function useGetReferencesCountriesCountryCode<TError = unknown>(
  args: InferRequestType<(typeof client.references.countries)[':countryCode']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.references.countries)[':countryCode']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetReferencesCountriesCountryCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.references.countries)[':countryCode']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.references.countries[':countryCode'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReferencesCountriesCountryCode<TError = unknown>(
  args: InferRequestType<(typeof client.references.countries)[':countryCode']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.references.countries)[':countryCode']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetReferencesCountriesCountryCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.references.countries)[':countryCode']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.references.countries[':countryCode'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
