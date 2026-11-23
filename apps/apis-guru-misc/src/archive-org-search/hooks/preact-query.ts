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

export function getSearchKey() {
  return ['search'] as const
}

export function getSearchV1FieldsQueryKey(
  args: InferRequestType<typeof client.search.v1.fields.$get>,
) {
  return ['search', '/search/v1/fields', args] as const
}

export function getSearchV1FieldsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.fields.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.search.v1.fields.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.fields.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchV1FieldsQueryKey>
  >({
    queryKey: getSearchV1FieldsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search.v1.fields.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSearchV1Fields<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.fields.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.search.v1.fields.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.fields.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSearchV1FieldsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSearchV1FieldsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSearchV1Fields<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.fields.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.search.v1.fields.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.fields.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSearchV1FieldsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSearchV1FieldsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSearchV1OrganicQueryKey(
  args: InferRequestType<typeof client.search.v1.organic.$get>,
) {
  return ['search', '/search/v1/organic', args] as const
}

export function getSearchV1OrganicQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.organic.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.search.v1.organic.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.organic.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchV1OrganicQueryKey>
  >({
    queryKey: getSearchV1OrganicQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search.v1.organic.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSearchV1Organic<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.organic.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.search.v1.organic.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.organic.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSearchV1OrganicQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSearchV1OrganicQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSearchV1Organic<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.organic.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.search.v1.organic.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.organic.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSearchV1OrganicQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSearchV1OrganicQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSearchV1ScrapeQueryKey(
  args: InferRequestType<typeof client.search.v1.scrape.$get>,
) {
  return ['search', '/search/v1/scrape', args] as const
}

export function getSearchV1ScrapeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.scrape.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.search.v1.scrape.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.scrape.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchV1ScrapeQueryKey>
  >({
    queryKey: getSearchV1ScrapeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search.v1.scrape.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSearchV1Scrape<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.scrape.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.search.v1.scrape.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.scrape.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSearchV1ScrapeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSearchV1ScrapeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSearchV1Scrape<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.scrape.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.search.v1.scrape.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.v1.scrape.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSearchV1ScrapeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSearchV1ScrapeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
