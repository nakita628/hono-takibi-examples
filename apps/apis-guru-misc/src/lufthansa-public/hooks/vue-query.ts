import { useQuery } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.cargo.getRoute)[':origin-:destination'][':fromDate'][':productCode']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['cargo', '/cargo/getRoute/:origin-:destination/:fromDate/:productCode', keyArgs] as const
}

export function getCargoGetRouteOriginDestinationFromDateProductCodeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.cargo.getRoute)[':origin-:destination'][':fromDate'][':productCode']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCargoGetRouteOriginDestinationFromDateProductCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cargo.getRoute[':origin-:destination'][':fromDate'][':productCode'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useCargoGetRouteOriginDestinationFromDateProductCode<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.cargo.getRoute)[':origin-:destination'][':fromDate'][':productCode']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          TError,
          TData,
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
          ReturnType<typeof getCargoGetRouteOriginDestinationFromDateProductCodeQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
    TError,
    TData,
    ReturnType<typeof getCargoGetRouteOriginDestinationFromDateProductCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCargoGetRouteOriginDestinationFromDateProductCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cargo.getRoute[':origin-:destination'][':fromDate'][':productCode'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getCargoShipmentTrackingAWBPrefixAWBNumberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cargo.shipmentTracking)[':aWBPrefix-:aWBNumber']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['cargo', '/cargo/shipmentTracking/:aWBPrefix-:aWBNumber', keyArgs] as const
}

export function getCargoShipmentTrackingAWBPrefixAWBNumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cargo.shipmentTracking)[':aWBPrefix-:aWBNumber']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCargoShipmentTrackingAWBPrefixAWBNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cargo.shipmentTracking[':aWBPrefix-:aWBNumber'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCargoShipmentTrackingAWBPrefixAWBNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cargo.shipmentTracking)[':aWBPrefix-:aWBNumber']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cargo.shipmentTracking)[':aWBPrefix-:aWBNumber']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.cargo.shipmentTracking)[':aWBPrefix-:aWBNumber']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.cargo.shipmentTracking)[':aWBPrefix-:aWBNumber']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCargoShipmentTrackingAWBPrefixAWBNumberQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.cargo.shipmentTracking)[':aWBPrefix-:aWBNumber']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCargoShipmentTrackingAWBPrefixAWBNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCargoShipmentTrackingAWBPrefixAWBNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cargo.shipmentTracking[':aWBPrefix-:aWBNumber'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOffersLoungesLocationQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.offers.lounges)[':location']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['offers', '/offers/lounges/:location', keyArgs] as const
}

export function getOffersLoungesLocationQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.offers.lounges)[':location']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOffersLoungesLocationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.offers.lounges[':location'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOffersLoungesLocation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.offers.lounges)[':location']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.offers.lounges)[':location']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.offers.lounges)[':location']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.offers.lounges)[':location']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOffersLoungesLocationQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOffersLoungesLocationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.offers.lounges[':location'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOffersSeatmapsFlightNumberOriginDestinationDateCabinClassQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.offers.seatmaps)[':flightNumber'][':origin'][':destination'][':date'][':cabinClass']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'offers',
    '/offers/seatmaps/:flightNumber/:origin/:destination/:date/:cabinClass',
    keyArgs,
  ] as const
}

export function getOffersSeatmapsFlightNumberOriginDestinationDateCabinClassQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.offers.seatmaps)[':flightNumber'][':origin'][':destination'][':date'][':cabinClass']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOffersSeatmapsFlightNumberOriginDestinationDateCabinClassQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.offers.seatmaps[':flightNumber'][':origin'][':destination'][':date'][
          ':cabinClass'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOffersSeatmapsFlightNumberOriginDestinationDateCabinClass<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.offers.seatmaps)[':flightNumber'][':origin'][':destination'][':date'][':cabinClass']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getOffersSeatmapsFlightNumberOriginDestinationDateCabinClassQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOffersSeatmapsFlightNumberOriginDestinationDateCabinClassQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.offers.seatmaps[':flightNumber'][':origin'][':destination'][':date'][
            ':cabinClass'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getOperationsFlightstatusArrivalsAirportCodeFromDateTimeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.operations.flightstatus.arrivals)[':airportCode'][':fromDateTime']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'operations',
    '/operations/flightstatus/arrivals/:airportCode/:fromDateTime',
    keyArgs,
  ] as const
}

export function getOperationsFlightstatusArrivalsAirportCodeFromDateTimeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.operations.flightstatus.arrivals)[':airportCode'][':fromDateTime']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOperationsFlightstatusArrivalsAirportCodeFromDateTimeQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.operations.flightstatus.arrivals[':airportCode'][':fromDateTime'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOperationsFlightstatusArrivalsAirportCodeFromDateTime<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.operations.flightstatus.arrivals)[':airportCode'][':fromDateTime']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getOperationsFlightstatusArrivalsAirportCodeFromDateTimeQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOperationsFlightstatusArrivalsAirportCodeFromDateTimeQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.operations.flightstatus.arrivals[':airportCode'][':fromDateTime'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getOperationsFlightstatusDeparturesAirportCodeFromDateTimeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.operations.flightstatus.departures)[':airportCode'][':fromDateTime']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'operations',
    '/operations/flightstatus/departures/:airportCode/:fromDateTime',
    keyArgs,
  ] as const
}

export function getOperationsFlightstatusDeparturesAirportCodeFromDateTimeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.operations.flightstatus.departures)[':airportCode'][':fromDateTime']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOperationsFlightstatusDeparturesAirportCodeFromDateTimeQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.operations.flightstatus.departures[':airportCode'][':fromDateTime'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOperationsFlightstatusDeparturesAirportCodeFromDateTime<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.operations.flightstatus.departures)[':airportCode'][':fromDateTime']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getOperationsFlightstatusDeparturesAirportCodeFromDateTimeQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOperationsFlightstatusDeparturesAirportCodeFromDateTimeQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.operations.flightstatus.departures[':airportCode'][':fromDateTime'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getOperationsFlightstatusRouteOriginDestinationDateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.operations.flightstatus.route)[':origin'][':destination'][':date']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'operations',
    '/operations/flightstatus/route/:origin/:destination/:date',
    keyArgs,
  ] as const
}

export function getOperationsFlightstatusRouteOriginDestinationDateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.operations.flightstatus.route)[':origin'][':destination'][':date']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOperationsFlightstatusRouteOriginDestinationDateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.operations.flightstatus.route[':origin'][':destination'][':date'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOperationsFlightstatusRouteOriginDestinationDate<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.operations.flightstatus.route)[':origin'][':destination'][':date']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getOperationsFlightstatusRouteOriginDestinationDateQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOperationsFlightstatusRouteOriginDestinationDateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.operations.flightstatus.route[':origin'][':destination'][':date'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getOperationsFlightstatusFlightNumberDateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.operations.flightstatus)[':flightNumber'][':date']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['operations', '/operations/flightstatus/:flightNumber/:date', keyArgs] as const
}

export function getOperationsFlightstatusFlightNumberDateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.operations.flightstatus)[':flightNumber'][':date']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOperationsFlightstatusFlightNumberDateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.operations.flightstatus[':flightNumber'][':date'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOperationsFlightstatusFlightNumberDate<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.operations.flightstatus)[':flightNumber'][':date']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getOperationsFlightstatusFlightNumberDateQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOperationsFlightstatusFlightNumberDateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.operations.flightstatus[':flightNumber'][':date'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOperationsSchedulesOriginDestinationFromDateTimeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.operations.schedules)[':origin'][':destination'][':fromDateTime']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'operations',
    '/operations/schedules/:origin/:destination/:fromDateTime',
    keyArgs,
  ] as const
}

export function getOperationsSchedulesOriginDestinationFromDateTimeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.operations.schedules)[':origin'][':destination'][':fromDateTime']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOperationsSchedulesOriginDestinationFromDateTimeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.operations.schedules[':origin'][':destination'][':fromDateTime'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOperationsSchedulesOriginDestinationFromDateTime<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.operations.schedules)[':origin'][':destination'][':fromDateTime']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getOperationsSchedulesOriginDestinationFromDateTimeQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOperationsSchedulesOriginDestinationFromDateTimeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.operations.schedules[':origin'][':destination'][':fromDateTime'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getReferencesAircraftAircraftCodeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.references.aircraft)[':aircraftCode']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['references', '/references/aircraft/:aircraftCode', keyArgs] as const
}

export function getReferencesAircraftAircraftCodeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.references.aircraft)[':aircraftCode']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReferencesAircraftAircraftCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.references.aircraft[':aircraftCode'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReferencesAircraftAircraftCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.references.aircraft)[':aircraftCode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.references.aircraft)[':aircraftCode']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.references.aircraft)[':aircraftCode']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.references.aircraft)[':aircraftCode']['$get']>>
              >
            >
          >,
          ReturnType<typeof getReferencesAircraftAircraftCodeQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReferencesAircraftAircraftCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.references.aircraft[':aircraftCode'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReferencesAirlinesAirlineCodeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.references.airlines)[':airlineCode']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['references', '/references/airlines/:airlineCode', keyArgs] as const
}

export function getReferencesAirlinesAirlineCodeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.references.airlines)[':airlineCode']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReferencesAirlinesAirlineCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.references.airlines[':airlineCode'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReferencesAirlinesAirlineCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.references.airlines)[':airlineCode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.references.airlines)[':airlineCode']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.references.airlines)[':airlineCode']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.references.airlines)[':airlineCode']['$get']>>
              >
            >
          >,
          ReturnType<typeof getReferencesAirlinesAirlineCodeQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReferencesAirlinesAirlineCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.references.airlines[':airlineCode'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReferencesAirportsNearestLatitudeLongitudeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.references.airports.nearest)[':latitude,:longitude']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['references', '/references/airports/nearest/:latitude,:longitude', keyArgs] as const
}

export function getReferencesAirportsNearestLatitudeLongitudeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.references.airports.nearest)[':latitude,:longitude']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReferencesAirportsNearestLatitudeLongitudeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.references.airports.nearest[':latitude,:longitude'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReferencesAirportsNearestLatitudeLongitude<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.references.airports.nearest)[':latitude,:longitude']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.references.airports.nearest)[':latitude,:longitude']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          TError,
          TData,
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
          ReturnType<typeof getReferencesAirportsNearestLatitudeLongitudeQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.references.airports.nearest)[':latitude,:longitude']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReferencesAirportsNearestLatitudeLongitudeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReferencesAirportsNearestLatitudeLongitudeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.references.airports.nearest[':latitude,:longitude'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReferencesAirportsAirportCodeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.references.airports)[':airportCode']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['references', '/references/airports/:airportCode', keyArgs] as const
}

export function getReferencesAirportsAirportCodeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.references.airports)[':airportCode']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReferencesAirportsAirportCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.references.airports[':airportCode'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReferencesAirportsAirportCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.references.airports)[':airportCode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.references.airports)[':airportCode']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.references.airports)[':airportCode']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.references.airports)[':airportCode']['$get']>>
              >
            >
          >,
          ReturnType<typeof getReferencesAirportsAirportCodeQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReferencesAirportsAirportCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.references.airports[':airportCode'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReferencesCitiesCityCodeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.references.cities)[':cityCode']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['references', '/references/cities/:cityCode', keyArgs] as const
}

export function getReferencesCitiesCityCodeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.references.cities)[':cityCode']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReferencesCitiesCityCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.references.cities[':cityCode'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReferencesCitiesCityCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.references.cities)[':cityCode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.references.cities)[':cityCode']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.references.cities)[':cityCode']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.references.cities)[':cityCode']['$get']>>
              >
            >
          >,
          ReturnType<typeof getReferencesCitiesCityCodeQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReferencesCitiesCityCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.references.cities[':cityCode'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReferencesCountriesCountryCodeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.references.countries)[':countryCode']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['references', '/references/countries/:countryCode', keyArgs] as const
}

export function getReferencesCountriesCountryCodeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.references.countries)[':countryCode']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReferencesCountriesCountryCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.references.countries[':countryCode'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReferencesCountriesCountryCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.references.countries)[':countryCode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.references.countries)[':countryCode']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.references.countries)[':countryCode']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.references.countries)[':countryCode']['$get']>>
              >
            >
          >,
          ReturnType<typeof getReferencesCountriesCountryCodeQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReferencesCountriesCountryCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.references.countries[':countryCode'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
