import { createQuery, queryOptions } from '@tanstack/solid-query'
import type { UndefinedInitialDataOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getExampleKey() {
  return ['example'] as const
}

export function getExamplesKey() {
  return ['examples'] as const
}

export function getExampleQueryKey() {
  return ['example', '/example'] as const
}

export function getExampleQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.example.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.example.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getExampleQueryKey>
  >({
    queryKey: getExampleQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.example.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createExample<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.example.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.example.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getExampleQueryKey>
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
    return { ...getExampleQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getExamplesQueryKey() {
  return ['examples', '/examples'] as const
}

export function getExamplesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.examples.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.examples.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getExamplesQueryKey>
  >({
    queryKey: getExamplesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.examples.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createExamples<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.examples.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.examples.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getExamplesQueryKey>
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
    return { ...getExamplesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}
