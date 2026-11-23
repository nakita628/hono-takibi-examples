import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getChartKey() {
  return ['chart'] as const
}

export function getQrKey() {
  return ['qr'] as const
}

export function getChartQueryKey(args: InferRequestType<typeof client.chart.$get>) {
  return ['chart', '/chart', args] as const
}

export function getChartQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.chart.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getChartQueryKey>
  >({
    queryKey: getChartQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.chart.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useChart<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.chart.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getChartQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getChartQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseChart<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.chart.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getChartQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getChartQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostChartMutationKey() {
  return ['chart', '/chart', 'POST'] as const
}

export function getPostChartMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart.$post>>>>>,
    TError,
    InferRequestType<typeof client.chart.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChartMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.chart.$post>) {
      return parseResponse(client.chart.$post(args, options))
    },
  })
}

export function usePostChart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart.$post>>>>>,
        TError,
        InferRequestType<typeof client.chart.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostChartMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getQrQueryKey(args: InferRequestType<typeof client.qr.$get>) {
  return ['qr', '/qr', args] as const
}

export function getQrQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qr.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.qr.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qr.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQrQueryKey>
  >({
    queryKey: getQrQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(client.qr.$get(args, { ...options, init: { ...options?.init, signal } }))
    },
  })
}

export function useQr<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qr.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.qr.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qr.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getQrQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getQrQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseQr<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qr.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.qr.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qr.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getQrQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getQrQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostQrMutationKey() {
  return ['qr', '/qr', 'POST'] as const
}

export function getPostQrMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qr.$post>>>>>,
    TError,
    InferRequestType<typeof client.qr.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQrMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.qr.$post>) {
      return parseResponse(client.qr.$post(args, options))
    },
  })
}

export function usePostQr<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qr.$post>>>>>,
        TError,
        InferRequestType<typeof client.qr.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostQrMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
