import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
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

export function createVisualCrossingWebServicesRestServicesTimelineLocation<
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
  args: () => InferRequestType<
    (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVisualCrossingWebServicesRestServicesTimelineLocationQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createVisualCrossingWebServicesRestServicesTimelineLocationStartdate<
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
  args: () => InferRequestType<
    (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location'][':startdate']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVisualCrossingWebServicesRestServicesTimelineLocationStartdateQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createVisualCrossingWebServicesRestServicesTimelineLocationStartdateEnddate<
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
  args: () => InferRequestType<
    (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location'][':startdate'][':enddate']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVisualCrossingWebServicesRestServicesTimelineLocationStartdateEnddateQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createVisualCrossingWebServicesRestServicesWeatherdataForecast<
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
  args: () => InferRequestType<
    typeof client.VisualCrossingWebServices.rest.services.weatherdata.forecast.$get
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVisualCrossingWebServicesRestServicesWeatherdataForecastQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createVisualCrossingWebServicesRestServicesWeatherdataHistory<
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
  args: () => InferRequestType<
    typeof client.VisualCrossingWebServices.rest.services.weatherdata.history.$get
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVisualCrossingWebServicesRestServicesWeatherdataHistoryQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}
