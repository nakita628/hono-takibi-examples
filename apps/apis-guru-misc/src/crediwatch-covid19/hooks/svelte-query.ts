import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getApiV1StatusCallQueryKey(
  args: InferRequestType<typeof client.api.v1.status.call.$get>,
) {
  return ['api', '/api/v1/status/call', args] as const
}

export function getApiV1StatusCallQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.status.call.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.status.call.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.status.call.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1StatusCallQueryKey>
  >({
    queryKey: getApiV1StatusCallQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.status.call.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1StatusCall<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.status.call.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.status.call.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.status.call.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1StatusCallQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1StatusCallQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1StatusSkuQueryKey(
  args: InferRequestType<typeof client.api.v1.status.sku.$get>,
) {
  return ['api', '/api/v1/status/sku', args] as const
}

export function getApiV1StatusSkuQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.status.sku.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.status.sku.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.status.sku.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1StatusSkuQueryKey>
  >({
    queryKey: getApiV1StatusSkuQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.status.sku.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1StatusSku<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.status.sku.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.status.sku.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.status.sku.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1StatusSkuQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1StatusSkuQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1VerifyNameQueryKey(
  args: InferRequestType<typeof client.api.v1.verify.name.$get>,
) {
  return ['api', '/api/v1/verify/name', args] as const
}

export function getApiV1VerifyNameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.verify.name.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.verify.name.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.verify.name.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VerifyNameQueryKey>
  >({
    queryKey: getApiV1VerifyNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.verify.name.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1VerifyName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.verify.name.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.verify.name.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.verify.name.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1VerifyNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1VerifyNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1VerifyPhoneQueryKey(
  args: InferRequestType<typeof client.api.v1.verify.phone.$get>,
) {
  return ['api', '/api/v1/verify/phone', args] as const
}

export function getApiV1VerifyPhoneQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.verify.phone.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.verify.phone.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.verify.phone.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VerifyPhoneQueryKey>
  >({
    queryKey: getApiV1VerifyPhoneQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.verify.phone.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1VerifyPhone<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.verify.phone.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.verify.phone.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.verify.phone.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1VerifyPhoneQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1VerifyPhoneQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1VerifySkuQueryKey(
  args: InferRequestType<typeof client.api.v1.verify.sku.$get>,
) {
  return ['api', '/api/v1/verify/sku', args] as const
}

export function getApiV1VerifySkuQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.verify.sku.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.verify.sku.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.verify.sku.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1VerifySkuQueryKey>
  >({
    queryKey: getApiV1VerifySkuQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.verify.sku.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1VerifySku<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.verify.sku.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.verify.sku.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.verify.sku.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1VerifySkuQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1VerifySkuQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
