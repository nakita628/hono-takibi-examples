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

export function getForecastKey() {
  return ['forecast'] as const
}

export function getProtectionKey() {
  return ['protection'] as const
}

export function getUvKey() {
  return ['uv'] as const
}

export function getForecastQueryKey(args: InferRequestType<typeof client.forecast.$get>) {
  const { header: _, ...keyArgs } = args
  return ['forecast', '/forecast', keyArgs] as const
}

export function getForecastQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forecast.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.forecast.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forecast.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getForecastQueryKey>
  >({
    queryKey: getForecastQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.forecast.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useForecast<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forecast.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.forecast.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forecast.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getForecastQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getForecastQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseForecast<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forecast.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.forecast.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.forecast.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getForecastQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getForecastQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getProtectionQueryKey(args: InferRequestType<typeof client.protection.$get>) {
  const { header: _, ...keyArgs } = args
  return ['protection', '/protection', keyArgs] as const
}

export function getProtectionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.protection.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.protection.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.protection.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProtectionQueryKey>
  >({
    queryKey: getProtectionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.protection.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useProtection<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.protection.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.protection.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.protection.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getProtectionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getProtectionQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseProtection<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.protection.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.protection.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.protection.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getProtectionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getProtectionQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getUvQueryKey(args: InferRequestType<typeof client.uv.$get>) {
  const { header: _, ...keyArgs } = args
  return ['uv', '/uv', keyArgs] as const
}

export function getUvQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uv.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.uv.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uv.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUvQueryKey>
  >({
    queryKey: getUvQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(client.uv.$get(args, { ...options, init: { ...options?.init, signal } }))
    },
  })
}

export function useUv<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uv.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.uv.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uv.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUvQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUvQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUv<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uv.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.uv.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uv.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUvQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUvQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
