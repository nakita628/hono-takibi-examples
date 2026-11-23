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

export function getVisualCrossingWebServicesKey() {
  return ['VisualCrossingWebServices'] as const
}

export function getVisualCrossingWebServicesRestServicesTimelineLocationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location']['$get']
    >
  >,
) {
  return [
    'VisualCrossingWebServices',
    '/VisualCrossingWebServices/rest/services/timeline/:location',
    toValue(args),
  ] as const
}

export function getVisualCrossingWebServicesRestServicesTimelineLocationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getVisualCrossingWebServicesRestServicesTimelineLocationQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.VisualCrossingWebServices.rest.services.timeline[':location'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location']['$get']
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
                    (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location']['$get']
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
                    (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVisualCrossingWebServicesRestServicesTimelineLocationQueryKey>
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
              (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVisualCrossingWebServicesRestServicesTimelineLocationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getVisualCrossingWebServicesRestServicesTimelineLocationQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.VisualCrossingWebServices.rest.services.timeline[':location'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVisualCrossingWebServicesRestServicesTimelineLocationStartdateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location'][':startdate']['$get']
    >
  >,
) {
  return [
    'VisualCrossingWebServices',
    '/VisualCrossingWebServices/rest/services/timeline/:location/:startdate',
    toValue(args),
  ] as const
}

export function getVisualCrossingWebServicesRestServicesTimelineLocationStartdateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location'][':startdate']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getVisualCrossingWebServicesRestServicesTimelineLocationStartdateQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.VisualCrossingWebServices.rest.services.timeline[':location'][':startdate'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location'][':startdate']['$get']
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
                    (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location'][':startdate']['$get']
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
                    (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location'][':startdate']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getVisualCrossingWebServicesRestServicesTimelineLocationStartdateQueryKey
          >
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
              (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location'][':startdate']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVisualCrossingWebServicesRestServicesTimelineLocationStartdateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getVisualCrossingWebServicesRestServicesTimelineLocationStartdateQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.VisualCrossingWebServices.rest.services.timeline[':location'][':startdate'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getVisualCrossingWebServicesRestServicesTimelineLocationStartdateEnddateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location'][':startdate'][':enddate']['$get']
    >
  >,
) {
  return [
    'VisualCrossingWebServices',
    '/VisualCrossingWebServices/rest/services/timeline/:location/:startdate/:enddate',
    toValue(args),
  ] as const
}

export function getVisualCrossingWebServicesRestServicesTimelineLocationStartdateEnddateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location'][':startdate'][':enddate']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getVisualCrossingWebServicesRestServicesTimelineLocationStartdateEnddateQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.VisualCrossingWebServices.rest.services.timeline[':location'][':startdate'][
          ':enddate'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location'][':startdate'][':enddate']['$get']
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
                    (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location'][':startdate'][':enddate']['$get']
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
                    (typeof client.VisualCrossingWebServices.rest.services.timeline)[':location'][':startdate'][':enddate']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getVisualCrossingWebServicesRestServicesTimelineLocationStartdateEnddateQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getVisualCrossingWebServicesRestServicesTimelineLocationStartdateEnddateQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.VisualCrossingWebServices.rest.services.timeline[':location'][':startdate'][
            ':enddate'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getVisualCrossingWebServicesRestServicesWeatherdataForecastQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      typeof client.VisualCrossingWebServices.rest.services.weatherdata.forecast.$get
    >
  >,
) {
  return [
    'VisualCrossingWebServices',
    '/VisualCrossingWebServices/rest/services/weatherdata/forecast',
    toValue(args),
  ] as const
}

export function getVisualCrossingWebServicesRestServicesWeatherdataForecastQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      typeof client.VisualCrossingWebServices.rest.services.weatherdata.forecast.$get
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getVisualCrossingWebServicesRestServicesWeatherdataForecastQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.VisualCrossingWebServices.rest.services.weatherdata.forecast.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      typeof client.VisualCrossingWebServices.rest.services.weatherdata.forecast.$get
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
                    typeof client.VisualCrossingWebServices.rest.services.weatherdata.forecast.$get
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
                    typeof client.VisualCrossingWebServices.rest.services.weatherdata.forecast.$get
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVisualCrossingWebServicesRestServicesWeatherdataForecastQueryKey>
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
              typeof client.VisualCrossingWebServices.rest.services.weatherdata.forecast.$get
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVisualCrossingWebServicesRestServicesWeatherdataForecastQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getVisualCrossingWebServicesRestServicesWeatherdataForecastQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.VisualCrossingWebServices.rest.services.weatherdata.forecast.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVisualCrossingWebServicesRestServicesWeatherdataHistoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.VisualCrossingWebServices.rest.services.weatherdata.history.$get>
  >,
) {
  return [
    'VisualCrossingWebServices',
    '/VisualCrossingWebServices/rest/services/weatherdata/history',
    toValue(args),
  ] as const
}

export function getVisualCrossingWebServicesRestServicesWeatherdataHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.VisualCrossingWebServices.rest.services.weatherdata.history.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getVisualCrossingWebServicesRestServicesWeatherdataHistoryQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.VisualCrossingWebServices.rest.services.weatherdata.history.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.VisualCrossingWebServices.rest.services.weatherdata.history.$get>
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
                    typeof client.VisualCrossingWebServices.rest.services.weatherdata.history.$get
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
                    typeof client.VisualCrossingWebServices.rest.services.weatherdata.history.$get
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVisualCrossingWebServicesRestServicesWeatherdataHistoryQueryKey>
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
              typeof client.VisualCrossingWebServices.rest.services.weatherdata.history.$get
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVisualCrossingWebServicesRestServicesWeatherdataHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getVisualCrossingWebServicesRestServicesWeatherdataHistoryQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.VisualCrossingWebServices.rest.services.weatherdata.history.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
