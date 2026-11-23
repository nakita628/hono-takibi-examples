import { useQuery, useSuspenseQuery, queryOptions } from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getVisualCrossingWebServicesKey() {
  return ['VisualCrossingWebServices'] as const
}

export function getVisualCrossingWebServicesRestServicesTimelineLocationQueryKey(
  args: InferRequestType<
    (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location']['$get']
  >,
) {
  return [
    'VisualCrossingWebServices',
    '/VisualCrossingWebServices/rest/services/timeline/:location',
    args,
  ] as const
}

export function getVisualCrossingWebServicesRestServicesTimelineLocationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVisualCrossingWebServicesRestServicesTimelineLocationQueryKey>
  >({
    queryKey: getVisualCrossingWebServicesRestServicesTimelineLocationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.VisualCrossingWebServices.rest.services.timeline[':location'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useVisualCrossingWebServicesRestServicesTimelineLocation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVisualCrossingWebServicesRestServicesTimelineLocationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getVisualCrossingWebServicesRestServicesTimelineLocationQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseVisualCrossingWebServicesRestServicesTimelineLocation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVisualCrossingWebServicesRestServicesTimelineLocationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getVisualCrossingWebServicesRestServicesTimelineLocationQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getVisualCrossingWebServicesRestServicesTimelineLocationStartdateQueryKey(
  args: InferRequestType<
    (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location'][':startdate']['$get']
  >,
) {
  return [
    'VisualCrossingWebServices',
    '/VisualCrossingWebServices/rest/services/timeline/:location/:startdate',
    args,
  ] as const
}

export function getVisualCrossingWebServicesRestServicesTimelineLocationStartdateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location'][':startdate']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location'][':startdate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location'][':startdate']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVisualCrossingWebServicesRestServicesTimelineLocationStartdateQueryKey>
  >({
    queryKey: getVisualCrossingWebServicesRestServicesTimelineLocationStartdateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.VisualCrossingWebServices.rest.services.timeline[':location'][':startdate'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useVisualCrossingWebServicesRestServicesTimelineLocationStartdate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location'][':startdate']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location'][':startdate']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location'][':startdate']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVisualCrossingWebServicesRestServicesTimelineLocationStartdateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getVisualCrossingWebServicesRestServicesTimelineLocationStartdateQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseVisualCrossingWebServicesRestServicesTimelineLocationStartdate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location'][':startdate']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location'][':startdate']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location'][':startdate']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVisualCrossingWebServicesRestServicesTimelineLocationStartdateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getVisualCrossingWebServicesRestServicesTimelineLocationStartdateQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getVisualCrossingWebServicesRestServicesTimelineLocationStartdateEnddateQueryKey(
  args: InferRequestType<
    (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location'][':startdate'][':enddate']['$get']
  >,
) {
  return [
    'VisualCrossingWebServices',
    '/VisualCrossingWebServices/rest/services/timeline/:location/:startdate/:enddate',
    args,
  ] as const
}

export function getVisualCrossingWebServicesRestServicesTimelineLocationStartdateEnddateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location'][':startdate'][':enddate']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location'][':startdate'][':enddate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location'][':startdate'][':enddate']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getVisualCrossingWebServicesRestServicesTimelineLocationStartdateEnddateQueryKey
    >
  >({
    queryKey:
      getVisualCrossingWebServicesRestServicesTimelineLocationStartdateEnddateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.VisualCrossingWebServices.rest.services.timeline[':location'][':startdate'][
          ':enddate'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useVisualCrossingWebServicesRestServicesTimelineLocationStartdateEnddate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location'][':startdate'][':enddate']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location'][':startdate'][':enddate']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location'][':startdate'][':enddate']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getVisualCrossingWebServicesRestServicesTimelineLocationStartdateEnddateQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getVisualCrossingWebServicesRestServicesTimelineLocationStartdateEnddateQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseVisualCrossingWebServicesRestServicesTimelineLocationStartdateEnddate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location'][':startdate'][':enddate']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location'][':startdate'][':enddate']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location'][':startdate'][':enddate']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getVisualCrossingWebServicesRestServicesTimelineLocationStartdateEnddateQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getVisualCrossingWebServicesRestServicesTimelineLocationStartdateEnddateQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getVisualCrossingWebServicesRestServicesWeatherdataForecastQueryKey(
  args: InferRequestType<
    typeof client.VisualCrossingWebServices.rest.services.weatherdata.forecast.$get
  >,
) {
  return [
    'VisualCrossingWebServices',
    '/VisualCrossingWebServices/rest/services/weatherdata/forecast',
    args,
  ] as const
}

export function getVisualCrossingWebServicesRestServicesWeatherdataForecastQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            typeof client.VisualCrossingWebServices.rest.services.weatherdata.forecast.$get
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    typeof client.VisualCrossingWebServices.rest.services.weatherdata.forecast.$get
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              typeof client.VisualCrossingWebServices.rest.services.weatherdata.forecast.$get
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVisualCrossingWebServicesRestServicesWeatherdataForecastQueryKey>
  >({
    queryKey: getVisualCrossingWebServicesRestServicesWeatherdataForecastQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.VisualCrossingWebServices.rest.services.weatherdata.forecast.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useVisualCrossingWebServicesRestServicesWeatherdataForecast<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            typeof client.VisualCrossingWebServices.rest.services.weatherdata.forecast.$get
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    typeof client.VisualCrossingWebServices.rest.services.weatherdata.forecast.$get
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  typeof client.VisualCrossingWebServices.rest.services.weatherdata.forecast.$get
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVisualCrossingWebServicesRestServicesWeatherdataForecastQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getVisualCrossingWebServicesRestServicesWeatherdataForecastQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseVisualCrossingWebServicesRestServicesWeatherdataForecast<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            typeof client.VisualCrossingWebServices.rest.services.weatherdata.forecast.$get
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    typeof client.VisualCrossingWebServices.rest.services.weatherdata.forecast.$get
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  typeof client.VisualCrossingWebServices.rest.services.weatherdata.forecast.$get
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVisualCrossingWebServicesRestServicesWeatherdataForecastQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getVisualCrossingWebServicesRestServicesWeatherdataForecastQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getVisualCrossingWebServicesRestServicesWeatherdataHistoryQueryKey(
  args: InferRequestType<
    typeof client.VisualCrossingWebServices.rest.services.weatherdata.history.$get
  >,
) {
  return [
    'VisualCrossingWebServices',
    '/VisualCrossingWebServices/rest/services/weatherdata/history',
    args,
  ] as const
}

export function getVisualCrossingWebServicesRestServicesWeatherdataHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<typeof client.VisualCrossingWebServices.rest.services.weatherdata.history.$get>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    typeof client.VisualCrossingWebServices.rest.services.weatherdata.history.$get
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              typeof client.VisualCrossingWebServices.rest.services.weatherdata.history.$get
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVisualCrossingWebServicesRestServicesWeatherdataHistoryQueryKey>
  >({
    queryKey: getVisualCrossingWebServicesRestServicesWeatherdataHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.VisualCrossingWebServices.rest.services.weatherdata.history.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useVisualCrossingWebServicesRestServicesWeatherdataHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<typeof client.VisualCrossingWebServices.rest.services.weatherdata.history.$get>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    typeof client.VisualCrossingWebServices.rest.services.weatherdata.history.$get
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  typeof client.VisualCrossingWebServices.rest.services.weatherdata.history.$get
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVisualCrossingWebServicesRestServicesWeatherdataHistoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getVisualCrossingWebServicesRestServicesWeatherdataHistoryQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseVisualCrossingWebServicesRestServicesWeatherdataHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<typeof client.VisualCrossingWebServices.rest.services.weatherdata.history.$get>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    typeof client.VisualCrossingWebServices.rest.services.weatherdata.history.$get
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  typeof client.VisualCrossingWebServices.rest.services.weatherdata.history.$get
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVisualCrossingWebServicesRestServicesWeatherdataHistoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getVisualCrossingWebServicesRestServicesWeatherdataHistoryQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}
