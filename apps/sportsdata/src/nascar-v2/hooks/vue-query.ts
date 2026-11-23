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

export function getFormatKey() {
  return ['{format}'] as const
}

export function getFormatDriverRaceProjectionsRaceidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['DriverRaceProjections'][':raceid']['$get']>
  >,
) {
  return [':format', '/:format/DriverRaceProjections/:raceid', toValue(args)] as const
}

export function getFormatDriverRaceProjectionsRaceidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['DriverRaceProjections'][':raceid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatDriverRaceProjectionsRaceidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].DriverRaceProjections[':raceid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['DriverRaceProjections'][':raceid']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':format']['DriverRaceProjections'][':raceid']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getFormatDriverRaceProjectionsRaceidQueryKey>
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
            ReturnType<(typeof client)[':format']['DriverRaceProjections'][':raceid']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatDriverRaceProjectionsRaceidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatDriverRaceProjectionsRaceidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].DriverRaceProjections[':raceid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatDriverDriveridQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['driver'][':driverid']['$get']>
  >,
) {
  return [':format', '/:format/driver/:driverid', toValue(args)] as const
}

export function getFormatDriverDriveridQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['driver'][':driverid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatDriverDriveridQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].driver[':driverid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['driver'][':driverid']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['driver'][':driverid']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatDriverDriveridQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['driver'][':driverid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatDriverDriveridQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatDriverDriveridQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].driver[':driverid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatDriversQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['drivers']['$get']>>,
) {
  return [':format', '/:format/drivers', toValue(args)] as const
}

export function getFormatDriversQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['drivers']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatDriversQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].drivers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatDrivers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['drivers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['drivers']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['drivers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['drivers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatDriversQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['drivers']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatDriversQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatDriversQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].drivers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatRaceresultRaceidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['raceresult'][':raceid']['$get']>
  >,
) {
  return [':format', '/:format/raceresult/:raceid', toValue(args)] as const
}

export function getFormatRaceresultRaceidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['raceresult'][':raceid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatRaceresultRaceidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].raceresult[':raceid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['raceresult'][':raceid']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['raceresult'][':raceid']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatRaceresultRaceidQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['raceresult'][':raceid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatRaceresultRaceidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatRaceresultRaceidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].raceresult[':raceid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatRacesSeasonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['races'][':season']['$get']>>,
) {
  return [':format', '/:format/races/:season', toValue(args)] as const
}

export function getFormatRacesSeasonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['races'][':season']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatRacesSeasonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].races[':season'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['races'][':season']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['races'][':season']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatRacesSeasonQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['races'][':season']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatRacesSeasonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatRacesSeasonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].races[':season'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatSeriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['series']['$get']>>,
) {
  return [':format', '/:format/series', toValue(args)] as const
}

export function getFormatSeriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['series']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatSeriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].series.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatSeries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['series']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['series']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['series']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['series']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatSeriesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['series']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatSeriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatSeriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].series.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
