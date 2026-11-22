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

export function getFacilitiesKey() {
  return ['facilities'] as const
}

export function getIdsKey() {
  return ['ids'] as const
}

export function getNearbyKey() {
  return ['nearby'] as const
}

export function getFacilitiesQueryKey(args: InferRequestType<typeof client.facilities.$get>) {
  return ['facilities', '/facilities', args] as const
}

export function getFacilitiesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.facilities.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.facilities.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.facilities.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFacilitiesQueryKey>
  >({
    queryKey: getFacilitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.facilities.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFacilities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.facilities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.facilities.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.facilities.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFacilitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFacilitiesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFacilities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.facilities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.facilities.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.facilities.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFacilitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFacilitiesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getFacilitiesAllQueryKey(
  args: InferRequestType<typeof client.facilities.all.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['facilities', '/facilities/all', keyArgs] as const
}

export function getFacilitiesAllQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.facilities.all.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.facilities.all.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.facilities.all.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFacilitiesAllQueryKey>
  >({
    queryKey: getFacilitiesAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.facilities.all.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFacilitiesAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.facilities.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.facilities.all.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.facilities.all.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFacilitiesAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFacilitiesAllQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFacilitiesAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.facilities.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.facilities.all.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.facilities.all.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFacilitiesAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFacilitiesAllQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getFacilitiesIdQueryKey(
  args: InferRequestType<(typeof client.facilities)[':id']['$get']>,
) {
  return ['facilities', '/facilities/:id', args] as const
}

export function getFacilitiesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.facilities)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.facilities)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.facilities)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFacilitiesIdQueryKey>
  >({
    queryKey: getFacilitiesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.facilities[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFacilitiesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.facilities)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.facilities)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.facilities)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFacilitiesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFacilitiesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFacilitiesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.facilities)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.facilities)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.facilities)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFacilitiesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFacilitiesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getIdsQueryKey(args: InferRequestType<typeof client.ids.$get>) {
  return ['ids', '/ids', args] as const
}

export function getIdsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ids.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ids.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ids.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIdsQueryKey>
  >({
    queryKey: getIdsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ids.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useIds<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ids.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ids.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ids.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getIdsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getIdsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseIds<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ids.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ids.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ids.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getIdsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getIdsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getNearbyQueryKey(args: InferRequestType<typeof client.nearby.$get>) {
  return ['nearby', '/nearby', args] as const
}

export function getNearbyQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nearby.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.nearby.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nearby.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNearbyQueryKey>
  >({
    queryKey: getNearbyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nearby.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useNearby<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nearby.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.nearby.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nearby.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getNearbyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNearbyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNearby<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nearby.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.nearby.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nearby.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getNearbyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNearbyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
