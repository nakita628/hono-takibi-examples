import { useQuery, useSuspenseQuery, queryOptions } from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCmsKey() {
  return ['cms'] as const
}

export function getCmsSiteSearch202609IndexedDataContentIdQueryKey(
  args: InferRequestType<
    (typeof client.cms)['site-search']['2026-09']['indexed-data'][':contentId']['$get']
  >,
) {
  return ['cms', '/cms/site-search/2026-09/indexed-data/:contentId', args] as const
}

export function getCmsSiteSearch202609IndexedDataContentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.cms)['site-search']['2026-09']['indexed-data'][':contentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.cms)['site-search']['2026-09']['indexed-data'][':contentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cms)['site-search']['2026-09']['indexed-data'][':contentId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCmsSiteSearch202609IndexedDataContentIdQueryKey>
  >({
    queryKey: getCmsSiteSearch202609IndexedDataContentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cms['site-search']['2026-09']['indexed-data'][':contentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCmsSiteSearch202609IndexedDataContentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.cms)['site-search']['2026-09']['indexed-data'][':contentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.cms)['site-search']['2026-09']['indexed-data'][':contentId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.cms)['site-search']['2026-09']['indexed-data'][':contentId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCmsSiteSearch202609IndexedDataContentIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCmsSiteSearch202609IndexedDataContentIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCmsSiteSearch202609IndexedDataContentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.cms)['site-search']['2026-09']['indexed-data'][':contentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.cms)['site-search']['2026-09']['indexed-data'][':contentId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.cms)['site-search']['2026-09']['indexed-data'][':contentId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCmsSiteSearch202609IndexedDataContentIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCmsSiteSearch202609IndexedDataContentIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getCmsSiteSearch202609SearchQueryKey(
  args: InferRequestType<(typeof client.cms)['site-search']['2026-09']['search']['$get']>,
) {
  return ['cms', '/cms/site-search/2026-09/search', args] as const
}

export function getCmsSiteSearch202609SearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cms)['site-search']['2026-09']['search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cms)['site-search']['2026-09']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cms)['site-search']['2026-09']['search']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCmsSiteSearch202609SearchQueryKey>
  >({
    queryKey: getCmsSiteSearch202609SearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cms['site-search']['2026-09'].search.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCmsSiteSearch202609Search<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cms)['site-search']['2026-09']['search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cms)['site-search']['2026-09']['search']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.cms)['site-search']['2026-09']['search']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCmsSiteSearch202609SearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCmsSiteSearch202609SearchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCmsSiteSearch202609Search<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cms)['site-search']['2026-09']['search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cms)['site-search']['2026-09']['search']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.cms)['site-search']['2026-09']['search']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCmsSiteSearch202609SearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCmsSiteSearch202609SearchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
