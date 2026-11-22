import { createQuery, queryOptions } from '@tanstack/solid-query'
import type { UndefinedInitialDataOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
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

export function createFacilities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.facilities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.facilities.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.facilities.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getFacilitiesQueryKey>
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
    return { ...getFacilitiesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createFacilitiesAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.facilities.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.facilities.all.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.facilities.all.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getFacilitiesAllQueryKey>
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
    return { ...getFacilitiesAllQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createFacilitiesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.facilities)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.facilities)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.facilities)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFacilitiesIdQueryKey>
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
    return { ...getFacilitiesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createIds<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ids.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.ids.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ids.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getIdsQueryKey>
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
    return { ...getIdsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createNearby<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nearby.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.nearby.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nearby.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getNearbyQueryKey>
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
    return { ...getNearbyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
