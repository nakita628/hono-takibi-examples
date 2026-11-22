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

export function getAreasKey() {
  return ['areas'] as const
}

export function getEventsKey() {
  return ['events'] as const
}

export function getJurisdictionKey() {
  return ['jurisdiction'] as const
}

export function getJurisdictiongeographyKey() {
  return ['jurisdictiongeography'] as const
}

export function getAreasQueryKey(args: InferRequestType<typeof client.areas.$get>) {
  return ['areas', '/areas', args] as const
}

export function getAreasQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.areas.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.areas.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.areas.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAreasQueryKey>
  >({
    queryKey: getAreasQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.areas.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAreas<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.areas.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.areas.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.areas.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAreasQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAreasQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAreas<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.areas.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.areas.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.areas.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAreasQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAreasQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEventsQueryKey(args: InferRequestType<typeof client.events.$get>) {
  return ['events', '/events', args] as const
}

export function getEventsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.events.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEventsQueryKey>
  >({
    queryKey: getEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.events.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useEvents<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.events.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEventsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEvents<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.events.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEventsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getJurisdictionQueryKey(args: InferRequestType<typeof client.jurisdiction.$get>) {
  return ['jurisdiction', '/jurisdiction', args] as const
}

export function getJurisdictionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jurisdiction.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.jurisdiction.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jurisdiction.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getJurisdictionQueryKey>
  >({
    queryKey: getJurisdictionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.jurisdiction.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useJurisdiction<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jurisdiction.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.jurisdiction.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jurisdiction.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getJurisdictionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getJurisdictionQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseJurisdiction<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jurisdiction.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.jurisdiction.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jurisdiction.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getJurisdictionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getJurisdictionQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getJurisdictiongeographyQueryKey(
  args: InferRequestType<typeof client.jurisdictiongeography.$get>,
) {
  return ['jurisdictiongeography', '/jurisdictiongeography', args] as const
}

export function getJurisdictiongeographyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jurisdictiongeography.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.jurisdictiongeography.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.jurisdictiongeography.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJurisdictiongeographyQueryKey>
  >({
    queryKey: getJurisdictiongeographyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.jurisdictiongeography.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useJurisdictiongeography<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jurisdictiongeography.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.jurisdictiongeography.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.jurisdictiongeography.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getJurisdictiongeographyQueryKey>
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
      ...getJurisdictiongeographyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseJurisdictiongeography<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jurisdictiongeography.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.jurisdictiongeography.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.jurisdictiongeography.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getJurisdictiongeographyQueryKey>
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
      ...getJurisdictiongeographyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
