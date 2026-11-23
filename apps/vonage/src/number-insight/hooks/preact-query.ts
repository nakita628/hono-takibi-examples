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

export function getAdvancedKey() {
  return ['advanced'] as const
}

export function getBasicKey() {
  return ['basic'] as const
}

export function getStandardKey() {
  return ['standard'] as const
}

export function getAdvancedAsyncFormatQueryKey(
  args: InferRequestType<(typeof client.advanced.async)[':format']['$get']>,
) {
  return ['advanced', '/advanced/async/:format', args] as const
}

export function getAdvancedAsyncFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.advanced.async)[':format']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.advanced.async)[':format']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.advanced.async)[':format']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdvancedAsyncFormatQueryKey>
  >({
    queryKey: getAdvancedAsyncFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.advanced.async[':format'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAdvancedAsyncFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.advanced.async)[':format']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.advanced.async)[':format']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.advanced.async)[':format']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdvancedAsyncFormatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAdvancedAsyncFormatQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAdvancedAsyncFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.advanced.async)[':format']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.advanced.async)[':format']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.advanced.async)[':format']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdvancedAsyncFormatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAdvancedAsyncFormatQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAdvancedFormatQueryKey(
  args: InferRequestType<(typeof client.advanced)[':format']['$get']>,
) {
  return ['advanced', '/advanced/:format', args] as const
}

export function getAdvancedFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.advanced)[':format']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.advanced)[':format']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.advanced)[':format']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdvancedFormatQueryKey>
  >({
    queryKey: getAdvancedFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.advanced[':format'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAdvancedFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.advanced)[':format']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.advanced)[':format']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.advanced)[':format']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdvancedFormatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAdvancedFormatQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAdvancedFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.advanced)[':format']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.advanced)[':format']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.advanced)[':format']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdvancedFormatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAdvancedFormatQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getBasicFormatQueryKey(
  args: InferRequestType<(typeof client.basic)[':format']['$get']>,
) {
  return ['basic', '/basic/:format', args] as const
}

export function getBasicFormatQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.basic)[':format']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.basic)[':format']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.basic)[':format']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBasicFormatQueryKey>
  >({
    queryKey: getBasicFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.basic[':format'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useBasicFormat<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.basic)[':format']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.basic)[':format']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.basic)[':format']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBasicFormatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBasicFormatQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBasicFormat<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.basic)[':format']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.basic)[':format']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.basic)[':format']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBasicFormatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBasicFormatQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getStandardFormatQueryKey(
  args: InferRequestType<(typeof client.standard)[':format']['$get']>,
) {
  return ['standard', '/standard/:format', args] as const
}

export function getStandardFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.standard)[':format']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.standard)[':format']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.standard)[':format']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStandardFormatQueryKey>
  >({
    queryKey: getStandardFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.standard[':format'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useStandardFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.standard)[':format']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.standard)[':format']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.standard)[':format']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStandardFormatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStandardFormatQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStandardFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.standard)[':format']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.standard)[':format']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.standard)[':format']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStandardFormatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStandardFormatQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
