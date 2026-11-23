import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
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

export function createFormatDriverRaceProjectionsRaceid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['DriverRaceProjections'][':raceid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['DriverRaceProjections'][':raceid']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getFormatDriverRaceProjectionsRaceidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createFormatDriverDriverid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['driver'][':driverid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['driver'][':driverid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getFormatDriverDriveridQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createFormatDrivers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['drivers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['drivers']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFormatDriversQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createFormatRaceresultRaceid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['raceresult'][':raceid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['raceresult'][':raceid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getFormatRaceresultRaceidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createFormatRacesSeason<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['races'][':season']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['races'][':season']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFormatRacesSeasonQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createFormatSeries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['series']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['series']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFormatSeriesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
