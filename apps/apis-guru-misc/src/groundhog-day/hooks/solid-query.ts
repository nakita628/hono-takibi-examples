import { createQuery, queryOptions } from '@tanstack/solid-query'
import type { UndefinedInitialDataOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getApiV1QueryKey() {
  return ['api', '/api/v1'] as const
}

export function getApiV1QueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1QueryKey>
  >({
    queryKey: getApiV1QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getApiV1QueryKey>
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
    return { ...getApiV1QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV1GroundhogsQueryKey(
  args: InferRequestType<typeof client.api.v1.groundhogs.$get>,
) {
  return ['api', '/api/v1/groundhogs', args] as const
}

export function getApiV1GroundhogsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.groundhogs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.groundhogs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.groundhogs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1GroundhogsQueryKey>
  >({
    queryKey: getApiV1GroundhogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.groundhogs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Groundhogs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.groundhogs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.groundhogs.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.groundhogs.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1GroundhogsQueryKey>
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
    return { ...getApiV1GroundhogsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1GroundhogsSlugQueryKey(
  args: InferRequestType<(typeof client.api.v1.groundhogs)[':slug']['$get']>,
) {
  return ['api', '/api/v1/groundhogs/:slug', args] as const
}

export function getApiV1GroundhogsSlugQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.groundhogs)[':slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.groundhogs)[':slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.groundhogs)[':slug']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1GroundhogsSlugQueryKey>
  >({
    queryKey: getApiV1GroundhogsSlugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.groundhogs[':slug'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1GroundhogsSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.groundhogs)[':slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.groundhogs)[':slug']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.groundhogs)[':slug']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1GroundhogsSlugQueryKey>
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
    return { ...getApiV1GroundhogsSlugQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1PredictionsQueryKey(
  args: InferRequestType<typeof client.api.v1.predictions.$get>,
) {
  return ['api', '/api/v1/predictions', args] as const
}

export function getApiV1PredictionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.predictions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.predictions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.predictions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PredictionsQueryKey>
  >({
    queryKey: getApiV1PredictionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.predictions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Predictions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.predictions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.predictions.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.predictions.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1PredictionsQueryKey>
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
    return { ...getApiV1PredictionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1SpecQueryKey() {
  return ['api', '/api/v1/spec'] as const
}

export function getApiV1SpecQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.spec.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.spec.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1SpecQueryKey>
  >({
    queryKey: getApiV1SpecQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.spec.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Spec<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.spec.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.spec.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1SpecQueryKey>
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
    return { ...getApiV1SpecQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}
