import { createQuery, queryOptions } from '@tanstack/solid-query'
import type { UndefinedInitialDataOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCustomsearchKey() {
  return ['customsearch'] as const
}

export function getCustomsearchV1QueryKey(
  args: InferRequestType<typeof client.customsearch.v1.$get>,
) {
  return ['customsearch', '/customsearch/v1', args] as const
}

export function getCustomsearchV1QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customsearch.v1.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.customsearch.v1.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customsearch.v1.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCustomsearchV1QueryKey>
  >({
    queryKey: getCustomsearchV1QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.customsearch.v1.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCustomsearchV1<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customsearch.v1.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.customsearch.v1.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.customsearch.v1.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCustomsearchV1QueryKey>
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
    return { ...getCustomsearchV1QueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCustomsearchV1SiterestrictQueryKey(
  args: InferRequestType<typeof client.customsearch.v1.siterestrict.$get>,
) {
  return ['customsearch', '/customsearch/v1/siterestrict', args] as const
}

export function getCustomsearchV1SiterestrictQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.customsearch.v1.siterestrict.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.customsearch.v1.siterestrict.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.customsearch.v1.siterestrict.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomsearchV1SiterestrictQueryKey>
  >({
    queryKey: getCustomsearchV1SiterestrictQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.customsearch.v1.siterestrict.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCustomsearchV1Siterestrict<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.customsearch.v1.siterestrict.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.customsearch.v1.siterestrict.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.customsearch.v1.siterestrict.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCustomsearchV1SiterestrictQueryKey>
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
      ...getCustomsearchV1SiterestrictQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
