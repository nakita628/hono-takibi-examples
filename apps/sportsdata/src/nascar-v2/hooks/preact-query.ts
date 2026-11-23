import { useQuery, useSuspenseQuery, queryOptions } from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getFormatKey() {
  return ['{format}'] as const
}

export function getFormatDriverRaceProjectionsRaceidQueryKey(
  args: InferRequestType<(typeof client)[':format']['DriverRaceProjections'][':raceid']['$get']>,
) {
  return [':format', '/:format/DriverRaceProjections/:raceid', args] as const
}

export function getFormatDriverRaceProjectionsRaceidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['DriverRaceProjections'][':raceid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['DriverRaceProjections'][':raceid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':format']['DriverRaceProjections'][':raceid']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatDriverRaceProjectionsRaceidQueryKey>
  >({
    queryKey: getFormatDriverRaceProjectionsRaceidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].DriverRaceProjections[':raceid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFormatDriverRaceProjectionsRaceid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['DriverRaceProjections'][':raceid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['DriverRaceProjections'][':raceid']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':format']['DriverRaceProjections'][':raceid']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatDriverRaceProjectionsRaceidQueryKey>
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
      ...getFormatDriverRaceProjectionsRaceidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFormatDriverRaceProjectionsRaceid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['DriverRaceProjections'][':raceid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['DriverRaceProjections'][':raceid']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':format']['DriverRaceProjections'][':raceid']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatDriverRaceProjectionsRaceidQueryKey>
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
      ...getFormatDriverRaceProjectionsRaceidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getFormatDriverDriveridQueryKey(
  args: InferRequestType<(typeof client)[':format']['driver'][':driverid']['$get']>,
) {
  return [':format', '/:format/driver/:driverid', args] as const
}

export function getFormatDriverDriveridQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['driver'][':driverid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['driver'][':driverid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['driver'][':driverid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatDriverDriveridQueryKey>
  >({
    queryKey: getFormatDriverDriveridQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].driver[':driverid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFormatDriverDriverid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['driver'][':driverid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['driver'][':driverid']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':format']['driver'][':driverid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatDriverDriveridQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFormatDriverDriveridQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFormatDriverDriverid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['driver'][':driverid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['driver'][':driverid']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':format']['driver'][':driverid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatDriverDriveridQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFormatDriverDriveridQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getFormatDriversQueryKey(
  args: InferRequestType<(typeof client)[':format']['drivers']['$get']>,
) {
  return [':format', '/:format/drivers', args] as const
}

export function getFormatDriversQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['drivers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['drivers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['drivers']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatDriversQueryKey>
  >({
    queryKey: getFormatDriversQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].drivers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFormatDrivers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['drivers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['drivers']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['drivers']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatDriversQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFormatDriversQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFormatDrivers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['drivers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['drivers']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['drivers']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatDriversQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFormatDriversQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getFormatRaceresultRaceidQueryKey(
  args: InferRequestType<(typeof client)[':format']['raceresult'][':raceid']['$get']>,
) {
  return [':format', '/:format/raceresult/:raceid', args] as const
}

export function getFormatRaceresultRaceidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['raceresult'][':raceid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['raceresult'][':raceid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['raceresult'][':raceid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatRaceresultRaceidQueryKey>
  >({
    queryKey: getFormatRaceresultRaceidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].raceresult[':raceid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFormatRaceresultRaceid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['raceresult'][':raceid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['raceresult'][':raceid']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':format']['raceresult'][':raceid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatRaceresultRaceidQueryKey>
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
      ...getFormatRaceresultRaceidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFormatRaceresultRaceid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['raceresult'][':raceid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['raceresult'][':raceid']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':format']['raceresult'][':raceid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatRaceresultRaceidQueryKey>
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
      ...getFormatRaceresultRaceidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getFormatRacesSeasonQueryKey(
  args: InferRequestType<(typeof client)[':format']['races'][':season']['$get']>,
) {
  return [':format', '/:format/races/:season', args] as const
}

export function getFormatRacesSeasonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['races'][':season']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['races'][':season']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['races'][':season']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatRacesSeasonQueryKey>
  >({
    queryKey: getFormatRacesSeasonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].races[':season'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFormatRacesSeason<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['races'][':season']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['races'][':season']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':format']['races'][':season']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatRacesSeasonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFormatRacesSeasonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFormatRacesSeason<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['races'][':season']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['races'][':season']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':format']['races'][':season']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatRacesSeasonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFormatRacesSeasonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getFormatSeriesQueryKey(
  args: InferRequestType<(typeof client)[':format']['series']['$get']>,
) {
  return [':format', '/:format/series', args] as const
}

export function getFormatSeriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['series']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['series']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['series']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatSeriesQueryKey>
  >({
    queryKey: getFormatSeriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].series.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFormatSeries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['series']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['series']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['series']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatSeriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFormatSeriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFormatSeries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['series']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['series']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['series']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatSeriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFormatSeriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
