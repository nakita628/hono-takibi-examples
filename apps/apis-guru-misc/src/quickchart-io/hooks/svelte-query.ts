import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
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

export function createChart<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.chart.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getChartQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChartQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostChart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chart.$post>>>>>,
        TError,
        InferRequestType<typeof client.chart.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostChartMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createQr<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qr.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.qr.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qr.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getQrQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQrQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostQr<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.qr.$post>>>>>,
        TError,
        InferRequestType<typeof client.qr.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostQrMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
