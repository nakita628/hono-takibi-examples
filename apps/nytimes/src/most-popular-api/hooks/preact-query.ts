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

export function getMostemailedKey() {
  return ['mostemailed'] as const
}

export function getMostsharedKey() {
  return ['mostshared'] as const
}

export function getMostviewedKey() {
  return ['mostviewed'] as const
}

export function getMostemailedSectionTimePeriodJsonQueryKey(
  args: InferRequestType<(typeof client.mostemailed)[':section'][':time-period.json']['$get']>,
) {
  return ['mostemailed', '/mostemailed/:section/:time-period.json', args] as const
}

export function getMostemailedSectionTimePeriodJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mostemailed)[':section'][':time-period.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mostemailed)[':section'][':time-period.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mostemailed)[':section'][':time-period.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMostemailedSectionTimePeriodJsonQueryKey>
  >({
    queryKey: getMostemailedSectionTimePeriodJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mostemailed[':section'][':time-period.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMostemailedSectionTimePeriodJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mostemailed)[':section'][':time-period.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mostemailed)[':section'][':time-period.json']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.mostemailed)[':section'][':time-period.json']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMostemailedSectionTimePeriodJsonQueryKey>
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
      ...getMostemailedSectionTimePeriodJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMostemailedSectionTimePeriodJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mostemailed)[':section'][':time-period.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mostemailed)[':section'][':time-period.json']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.mostemailed)[':section'][':time-period.json']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMostemailedSectionTimePeriodJsonQueryKey>
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
      ...getMostemailedSectionTimePeriodJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMostsharedSectionTimePeriodJsonQueryKey(
  args: InferRequestType<(typeof client.mostshared)[':section'][':time-period.json']['$get']>,
) {
  return ['mostshared', '/mostshared/:section/:time-period.json', args] as const
}

export function getMostsharedSectionTimePeriodJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mostshared)[':section'][':time-period.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mostshared)[':section'][':time-period.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mostshared)[':section'][':time-period.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMostsharedSectionTimePeriodJsonQueryKey>
  >({
    queryKey: getMostsharedSectionTimePeriodJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mostshared[':section'][':time-period.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMostsharedSectionTimePeriodJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mostshared)[':section'][':time-period.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mostshared)[':section'][':time-period.json']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.mostshared)[':section'][':time-period.json']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMostsharedSectionTimePeriodJsonQueryKey>
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
      ...getMostsharedSectionTimePeriodJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMostsharedSectionTimePeriodJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mostshared)[':section'][':time-period.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mostshared)[':section'][':time-period.json']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.mostshared)[':section'][':time-period.json']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMostsharedSectionTimePeriodJsonQueryKey>
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
      ...getMostsharedSectionTimePeriodJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMostviewedSectionTimePeriodJsonQueryKey(
  args: InferRequestType<(typeof client.mostviewed)[':section'][':time-period.json']['$get']>,
) {
  return ['mostviewed', '/mostviewed/:section/:time-period.json', args] as const
}

export function getMostviewedSectionTimePeriodJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mostviewed)[':section'][':time-period.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mostviewed)[':section'][':time-period.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mostviewed)[':section'][':time-period.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMostviewedSectionTimePeriodJsonQueryKey>
  >({
    queryKey: getMostviewedSectionTimePeriodJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.mostviewed[':section'][':time-period.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMostviewedSectionTimePeriodJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mostviewed)[':section'][':time-period.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mostviewed)[':section'][':time-period.json']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.mostviewed)[':section'][':time-period.json']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMostviewedSectionTimePeriodJsonQueryKey>
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
      ...getMostviewedSectionTimePeriodJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMostviewedSectionTimePeriodJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.mostviewed)[':section'][':time-period.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.mostviewed)[':section'][':time-period.json']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.mostviewed)[':section'][':time-period.json']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMostviewedSectionTimePeriodJsonQueryKey>
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
      ...getMostviewedSectionTimePeriodJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
