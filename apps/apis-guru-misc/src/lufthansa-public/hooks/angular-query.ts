import { injectQuery, queryOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function getCargoGetRouteOriginDestinationFromDateProductCodeQueryKey(
  args: InferRequestType<
    (typeof client.cargo.getRoute)[':origin-{destination}'][':fromDate'][':productCode']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['cargo', '/cargo/getRoute/:origin-{destination}/:fromDate/:productCode', keyArgs] as const
}

export function getCargoGetRouteOriginDestinationFromDateProductCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.cargo.getRoute)[':origin-{destination}'][':fromDate'][':productCode']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.cargo.getRoute)[':origin-{destination}'][':fromDate'][':productCode']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cargo.getRoute)[':origin-{destination}'][':fromDate'][':productCode']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCargoGetRouteOriginDestinationFromDateProductCodeQueryKey>
  >({
    queryKey: getCargoGetRouteOriginDestinationFromDateProductCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cargo.getRoute[':origin-{destination}'][':fromDate'][':productCode'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCargoGetRouteOriginDestinationFromDateProductCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.cargo.getRoute)[':origin-{destination}'][':fromDate'][':productCode']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.cargo.getRoute)[':origin-{destination}'][':fromDate'][':productCode']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.cargo.getRoute)[':origin-{destination}'][':fromDate'][':productCode']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCargoGetRouteOriginDestinationFromDateProductCodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCargoGetRouteOriginDestinationFromDateProductCodeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getCargoShipmentTrackingAWBPrefixAWBNumberQueryKey(
  args: InferRequestType<(typeof client.cargo.shipmentTracking)[':aWBPrefix-{aWBNumber}']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['cargo', '/cargo/shipmentTracking/:aWBPrefix-{aWBNumber}', keyArgs] as const
}

export function getCargoShipmentTrackingAWBPrefixAWBNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.cargo.shipmentTracking)[':aWBPrefix-{aWBNumber}']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cargo.shipmentTracking)[':aWBPrefix-{aWBNumber}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.cargo.shipmentTracking)[':aWBPrefix-{aWBNumber}']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCargoShipmentTrackingAWBPrefixAWBNumberQueryKey>
  >({
    queryKey: getCargoShipmentTrackingAWBPrefixAWBNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cargo.shipmentTracking[':aWBPrefix-{aWBNumber}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCargoShipmentTrackingAWBPrefixAWBNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.cargo.shipmentTracking)[':aWBPrefix-{aWBNumber}']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.cargo.shipmentTracking)[':aWBPrefix-{aWBNumber}']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.cargo.shipmentTracking)[':aWBPrefix-{aWBNumber}']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCargoShipmentTrackingAWBPrefixAWBNumberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCargoShipmentTrackingAWBPrefixAWBNumberQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getOffersLoungesLocationQueryKey(
  args: InferRequestType<(typeof client.offers.lounges)[':location']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['offers', '/offers/lounges/:location', keyArgs] as const
}

export function getOffersLoungesLocationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.offers.lounges)[':location']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.offers.lounges)[':location']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.offers.lounges)[':location']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOffersLoungesLocationQueryKey>
  >({
    queryKey: getOffersLoungesLocationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.offers.lounges[':location'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOffersLoungesLocation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.offers.lounges)[':location']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.offers.lounges)[':location']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.offers.lounges)[':location']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOffersLoungesLocationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOffersLoungesLocationQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getOffersSeatmapsFlightNumberOriginDestinationDateCabinClassQueryKey(
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

export function getOffersSeatmapsFlightNumberOriginDestinationDateCabinClassQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.offers.seatmaps)[':flightNumber'][':origin'][':destination'][':date'][':cabinClass']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOffersSeatmapsFlightNumberOriginDestinationDateCabinClassQueryKey>
  >({
    queryKey: getOffersSeatmapsFlightNumberOriginDestinationDateCabinClassQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.offers.seatmaps[':flightNumber'][':origin'][':destination'][':date'][
          ':cabinClass'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectOffersSeatmapsFlightNumberOriginDestinationDateCabinClass<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.offers.seatmaps)[':flightNumber'][':origin'][':destination'][':date'][':cabinClass']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getOffersSeatmapsFlightNumberOriginDestinationDateCabinClassQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOffersSeatmapsFlightNumberOriginDestinationDateCabinClassQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getOperationsFlightstatusArrivalsAirportCodeFromDateTimeQueryKey(
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

export function getOperationsFlightstatusArrivalsAirportCodeFromDateTimeQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.operations.flightstatus.arrivals)[':airportCode'][':fromDateTime']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOperationsFlightstatusArrivalsAirportCodeFromDateTimeQueryKey>
  >({
    queryKey: getOperationsFlightstatusArrivalsAirportCodeFromDateTimeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.operations.flightstatus.arrivals[':airportCode'][':fromDateTime'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOperationsFlightstatusArrivalsAirportCodeFromDateTime<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.operations.flightstatus.arrivals)[':airportCode'][':fromDateTime']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getOperationsFlightstatusArrivalsAirportCodeFromDateTimeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOperationsFlightstatusArrivalsAirportCodeFromDateTimeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getOperationsFlightstatusDeparturesAirportCodeFromDateTimeQueryKey(
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

export function getOperationsFlightstatusDeparturesAirportCodeFromDateTimeQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.operations.flightstatus.departures)[':airportCode'][':fromDateTime']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOperationsFlightstatusDeparturesAirportCodeFromDateTimeQueryKey>
  >({
    queryKey: getOperationsFlightstatusDeparturesAirportCodeFromDateTimeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.operations.flightstatus.departures[':airportCode'][':fromDateTime'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOperationsFlightstatusDeparturesAirportCodeFromDateTime<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.operations.flightstatus.departures)[':airportCode'][':fromDateTime']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getOperationsFlightstatusDeparturesAirportCodeFromDateTimeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOperationsFlightstatusDeparturesAirportCodeFromDateTimeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getOperationsFlightstatusRouteOriginDestinationDateQueryKey(
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

export function getOperationsFlightstatusRouteOriginDestinationDateQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.operations.flightstatus.route)[':origin'][':destination'][':date']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOperationsFlightstatusRouteOriginDestinationDateQueryKey>
  >({
    queryKey: getOperationsFlightstatusRouteOriginDestinationDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.operations.flightstatus.route[':origin'][':destination'][':date'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOperationsFlightstatusRouteOriginDestinationDate<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.operations.flightstatus.route)[':origin'][':destination'][':date']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getOperationsFlightstatusRouteOriginDestinationDateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOperationsFlightstatusRouteOriginDestinationDateQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getOperationsFlightstatusFlightNumberDateQueryKey(
  args: InferRequestType<(typeof client.operations.flightstatus)[':flightNumber'][':date']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['operations', '/operations/flightstatus/:flightNumber/:date', keyArgs] as const
}

export function getOperationsFlightstatusFlightNumberDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.operations.flightstatus)[':flightNumber'][':date']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.operations.flightstatus)[':flightNumber'][':date']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.operations.flightstatus)[':flightNumber'][':date']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOperationsFlightstatusFlightNumberDateQueryKey>
  >({
    queryKey: getOperationsFlightstatusFlightNumberDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.operations.flightstatus[':flightNumber'][':date'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOperationsFlightstatusFlightNumberDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.operations.flightstatus)[':flightNumber'][':date']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.operations.flightstatus)[':flightNumber'][':date']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.operations.flightstatus)[':flightNumber'][':date']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOperationsFlightstatusFlightNumberDateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOperationsFlightstatusFlightNumberDateQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getOperationsSchedulesOriginDestinationFromDateTimeQueryKey(
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

export function getOperationsSchedulesOriginDestinationFromDateTimeQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.operations.schedules)[':origin'][':destination'][':fromDateTime']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOperationsSchedulesOriginDestinationFromDateTimeQueryKey>
  >({
    queryKey: getOperationsSchedulesOriginDestinationFromDateTimeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.operations.schedules[':origin'][':destination'][':fromDateTime'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOperationsSchedulesOriginDestinationFromDateTime<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.operations.schedules)[':origin'][':destination'][':fromDateTime']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getOperationsSchedulesOriginDestinationFromDateTimeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOperationsSchedulesOriginDestinationFromDateTimeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getReferencesAircraftAircraftCodeQueryKey(
  args: InferRequestType<(typeof client.references.aircraft)[':aircraftCode']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['references', '/references/aircraft/:aircraftCode', keyArgs] as const
}

export function getReferencesAircraftAircraftCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.references.aircraft)[':aircraftCode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.references.aircraft)[':aircraftCode']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.references.aircraft)[':aircraftCode']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReferencesAircraftAircraftCodeQueryKey>
  >({
    queryKey: getReferencesAircraftAircraftCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.references.aircraft[':aircraftCode'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectReferencesAircraftAircraftCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.references.aircraft)[':aircraftCode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.references.aircraft)[':aircraftCode']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.references.aircraft)[':aircraftCode']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReferencesAircraftAircraftCodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getReferencesAircraftAircraftCodeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getReferencesAirlinesAirlineCodeQueryKey(
  args: InferRequestType<(typeof client.references.airlines)[':airlineCode']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['references', '/references/airlines/:airlineCode', keyArgs] as const
}

export function getReferencesAirlinesAirlineCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.references.airlines)[':airlineCode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.references.airlines)[':airlineCode']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.references.airlines)[':airlineCode']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReferencesAirlinesAirlineCodeQueryKey>
  >({
    queryKey: getReferencesAirlinesAirlineCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.references.airlines[':airlineCode'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectReferencesAirlinesAirlineCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.references.airlines)[':airlineCode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.references.airlines)[':airlineCode']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.references.airlines)[':airlineCode']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReferencesAirlinesAirlineCodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getReferencesAirlinesAirlineCodeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getReferencesAirportsNearestLatitudeLongitudeQueryKey(
  args: InferRequestType<
    (typeof client.references.airports.nearest)[':latitude,{longitude}']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['references', '/references/airports/nearest/:latitude,{longitude}', keyArgs] as const
}

export function getReferencesAirportsNearestLatitudeLongitudeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.references.airports.nearest)[':latitude,{longitude}']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.references.airports.nearest)[':latitude,{longitude}']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.references.airports.nearest)[':latitude,{longitude}']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReferencesAirportsNearestLatitudeLongitudeQueryKey>
  >({
    queryKey: getReferencesAirportsNearestLatitudeLongitudeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.references.airports.nearest[':latitude,{longitude}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectReferencesAirportsNearestLatitudeLongitude<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.references.airports.nearest)[':latitude,{longitude}']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.references.airports.nearest)[':latitude,{longitude}']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.references.airports.nearest)[':latitude,{longitude}']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReferencesAirportsNearestLatitudeLongitudeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getReferencesAirportsNearestLatitudeLongitudeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getReferencesAirportsAirportCodeQueryKey(
  args: InferRequestType<(typeof client.references.airports)[':airportCode']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['references', '/references/airports/:airportCode', keyArgs] as const
}

export function getReferencesAirportsAirportCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.references.airports)[':airportCode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.references.airports)[':airportCode']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.references.airports)[':airportCode']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReferencesAirportsAirportCodeQueryKey>
  >({
    queryKey: getReferencesAirportsAirportCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.references.airports[':airportCode'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectReferencesAirportsAirportCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.references.airports)[':airportCode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.references.airports)[':airportCode']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.references.airports)[':airportCode']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReferencesAirportsAirportCodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getReferencesAirportsAirportCodeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getReferencesCitiesCityCodeQueryKey(
  args: InferRequestType<(typeof client.references.cities)[':cityCode']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['references', '/references/cities/:cityCode', keyArgs] as const
}

export function getReferencesCitiesCityCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.references.cities)[':cityCode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.references.cities)[':cityCode']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.references.cities)[':cityCode']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReferencesCitiesCityCodeQueryKey>
  >({
    queryKey: getReferencesCitiesCityCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.references.cities[':cityCode'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectReferencesCitiesCityCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.references.cities)[':cityCode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.references.cities)[':cityCode']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.references.cities)[':cityCode']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReferencesCitiesCityCodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getReferencesCitiesCityCodeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getReferencesCountriesCountryCodeQueryKey(
  args: InferRequestType<(typeof client.references.countries)[':countryCode']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['references', '/references/countries/:countryCode', keyArgs] as const
}

export function getReferencesCountriesCountryCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.references.countries)[':countryCode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.references.countries)[':countryCode']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.references.countries)[':countryCode']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReferencesCountriesCountryCodeQueryKey>
  >({
    queryKey: getReferencesCountriesCountryCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.references.countries[':countryCode'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectReferencesCountriesCountryCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.references.countries)[':countryCode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.references.countries)[':countryCode']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.references.countries)[':countryCode']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReferencesCountriesCountryCodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getReferencesCountriesCountryCodeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}
