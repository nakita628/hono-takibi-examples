import { createQuery, queryOptions } from '@tanstack/solid-query'
import type { UndefinedInitialDataOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getV1OutputFormatKey() {
  return ['v1.{output_format}'] as const
}

export function getV1OutputFormatQueryKey(
  args: InferRequestType<(typeof client)['v1.{output_format}']['$get']>,
) {
  return ['v1.{output_format}', '/v1.{output_format}', args] as const
}

export function getV1OutputFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['v1.{output_format}']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['v1.{output_format}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['v1.{output_format}']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OutputFormatQueryKey>
  >({
    queryKey: getV1OutputFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['v1.{output_format}'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1OutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['v1.{output_format}']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['v1.{output_format}']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['v1.{output_format}']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1OutputFormatQueryKey>
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
    return { ...getV1OutputFormatQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1CategoryListOutputFormatQueryKey(
  args: InferRequestType<(typeof client.v1)['category-list.{output_format}']['$get']>,
) {
  return ['v1', '/v1/category-list.{output_format}', args] as const
}

export function getV1CategoryListOutputFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['category-list.{output_format}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['category-list.{output_format}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['category-list.{output_format}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CategoryListOutputFormatQueryKey>
  >({
    queryKey: getV1CategoryListOutputFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['category-list.{output_format}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CategoryListOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['category-list.{output_format}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['category-list.{output_format}']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['category-list.{output_format}']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1CategoryListOutputFormatQueryKey>
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
    return {
      ...getV1CategoryListOutputFormatQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1PocsOutputFormatQueryKey(
  args: InferRequestType<(typeof client.v1)['pocs.{output_format}']['$get']>,
) {
  return ['v1', '/v1/pocs.{output_format}', args] as const
}

export function getV1PocsOutputFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['pocs.{output_format}']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['pocs.{output_format}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['pocs.{output_format}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PocsOutputFormatQueryKey>
  >({
    queryKey: getV1PocsOutputFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['pocs.{output_format}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1PocsOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['pocs.{output_format}']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['pocs.{output_format}']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['pocs.{output_format}']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1PocsOutputFormatQueryKey>
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
    return { ...getV1PocsOutputFormatQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1IdOutputFormatQueryKey(
  args: InferRequestType<(typeof client.v1)[':id.{output_format}']['$get']>,
) {
  return ['v1', '/v1/:id.{output_format}', args] as const
}

export function getV1IdOutputFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':id.{output_format}']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':id.{output_format}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':id.{output_format}']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1IdOutputFormatQueryKey>
  >({
    queryKey: getV1IdOutputFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':id.{output_format}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1IdOutputFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':id.{output_format}']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':id.{output_format}']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':id.{output_format}']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1IdOutputFormatQueryKey>
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
    return { ...getV1IdOutputFormatQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
