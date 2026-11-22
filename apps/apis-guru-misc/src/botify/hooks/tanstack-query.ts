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

export function getAnalysesKey() {
  return ['analyses'] as const
}

export function getProjectsKey() {
  return ['projects'] as const
}

export function getAnalysesUsernameProjectSlugQueryKey(
  args: InferRequestType<(typeof client.analyses)[':username'][':project_slug']['$get']>,
) {
  return ['analyses', '/analyses/:username/:project_slug', args] as const
}

export function getAnalysesUsernameProjectSlugQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.analyses)[':username'][':project_slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.analyses)[':username'][':project_slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.analyses)[':username'][':project_slug']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnalysesUsernameProjectSlugQueryKey>
  >({
    queryKey: getAnalysesUsernameProjectSlugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.analyses[':username'][':project_slug'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAnalysesUsernameProjectSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.analyses)[':username'][':project_slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.analyses)[':username'][':project_slug']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.analyses)[':username'][':project_slug']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnalysesUsernameProjectSlugQueryKey>
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
      ...getAnalysesUsernameProjectSlugQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAnalysesUsernameProjectSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.analyses)[':username'][':project_slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.analyses)[':username'][':project_slug']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.analyses)[':username'][':project_slug']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnalysesUsernameProjectSlugQueryKey>
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
      ...getAnalysesUsernameProjectSlugQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAnalysesUsernameProjectSlugAnalysisSlugQueryKey(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['$get']
  >,
) {
  return ['analyses', '/analyses/:username/:project_slug/:analysis_slug', args] as const
}

export function getAnalysesUsernameProjectSlugAnalysisSlugQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnalysesUsernameProjectSlugAnalysisSlugQueryKey>
  >({
    queryKey: getAnalysesUsernameProjectSlugAnalysisSlugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.analyses[':username'][':project_slug'][':analysis_slug'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAnalysesUsernameProjectSlugAnalysisSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnalysesUsernameProjectSlugAnalysisSlugQueryKey>
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
      ...getAnalysesUsernameProjectSlugAnalysisSlugQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAnalysesUsernameProjectSlugAnalysisSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnalysesUsernameProjectSlugAnalysisSlugQueryKey>
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
      ...getAnalysesUsernameProjectSlugAnalysisSlugQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsQueryKey(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['crawl_statistics']['$get']
  >,
) {
  return [
    'analyses',
    '/analyses/:username/:project_slug/:analysis_slug/crawl_statistics',
    args,
  ] as const
}

export function getAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['crawl_statistics']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['crawl_statistics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['crawl_statistics']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsQueryKey>
  >({
    queryKey: getAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.analyses[':username'][':project_slug'][':analysis_slug'].crawl_statistics.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useAnalysesUsernameProjectSlugAnalysisSlugCrawlStatistics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['crawl_statistics']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['crawl_statistics']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['crawl_statistics']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsQueryKey>
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
      ...getAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAnalysesUsernameProjectSlugAnalysisSlugCrawlStatistics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['crawl_statistics']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['crawl_statistics']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['crawl_statistics']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsQueryKey>
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
      ...getAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsTimeQueryKey(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['crawl_statistics']['time']['$get']
  >,
) {
  return [
    'analyses',
    '/analyses/:username/:project_slug/:analysis_slug/crawl_statistics/time',
    args,
  ] as const
}

export function getAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsTimeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['crawl_statistics']['time']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['crawl_statistics']['time']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['crawl_statistics']['time']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsTimeQueryKey>
  >({
    queryKey: getAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsTimeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.analyses[':username'][':project_slug'][':analysis_slug'].crawl_statistics.time.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsTime<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['crawl_statistics']['time']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['crawl_statistics']['time']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['crawl_statistics']['time']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsTimeQueryKey>
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
      ...getAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsTimeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsTime<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['crawl_statistics']['time']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['crawl_statistics']['time']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['crawl_statistics']['time']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsTimeQueryKey>
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
      ...getAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsTimeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsUrlsListTypeQueryKey(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['crawl_statistics']['urls'][':list_type']['$get']
  >,
) {
  return [
    'analyses',
    '/analyses/:username/:project_slug/:analysis_slug/crawl_statistics/urls/:list_type',
    args,
  ] as const
}

export function getAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsUrlsListTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['crawl_statistics']['urls'][':list_type']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['crawl_statistics']['urls'][':list_type']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['crawl_statistics']['urls'][':list_type']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsUrlsListTypeQueryKey>
  >({
    queryKey: getAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsUrlsListTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.analyses[':username'][':project_slug'][':analysis_slug'].crawl_statistics.urls[
          ':list_type'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsUrlsListType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['crawl_statistics']['urls'][':list_type']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['crawl_statistics']['urls'][':list_type']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['crawl_statistics']['urls'][':list_type']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsUrlsListTypeQueryKey
        >
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
      ...getAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsUrlsListTypeQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsUrlsListType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['crawl_statistics']['urls'][':list_type']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['crawl_statistics']['urls'][':list_type']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['crawl_statistics']['urls'][':list_type']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsUrlsListTypeQueryKey
        >
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
      ...getAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsUrlsListTypeQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAnalysesUsernameProjectSlugAnalysisSlugFeaturesGanalyticsOrphanUrlsMediumSourceQueryKey(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['ganalytics']['orphan_urls'][':medium'][':source']['$get']
  >,
) {
  return [
    'analyses',
    '/analyses/:username/:project_slug/:analysis_slug/features/ganalytics/orphan_urls/:medium/:source',
    args,
  ] as const
}

export function getAnalysesUsernameProjectSlugAnalysisSlugFeaturesGanalyticsOrphanUrlsMediumSourceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['ganalytics']['orphan_urls'][':medium'][':source']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['ganalytics']['orphan_urls'][':medium'][':source']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['ganalytics']['orphan_urls'][':medium'][':source']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getAnalysesUsernameProjectSlugAnalysisSlugFeaturesGanalyticsOrphanUrlsMediumSourceQueryKey
    >
  >({
    queryKey:
      getAnalysesUsernameProjectSlugAnalysisSlugFeaturesGanalyticsOrphanUrlsMediumSourceQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.analyses[':username'][':project_slug'][
          ':analysis_slug'
        ].features.ganalytics.orphan_urls[':medium'][':source'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAnalysesUsernameProjectSlugAnalysisSlugFeaturesGanalyticsOrphanUrlsMediumSource<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['ganalytics']['orphan_urls'][':medium'][':source']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['ganalytics']['orphan_urls'][':medium'][':source']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['ganalytics']['orphan_urls'][':medium'][':source']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getAnalysesUsernameProjectSlugAnalysisSlugFeaturesGanalyticsOrphanUrlsMediumSourceQueryKey
        >
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
      ...getAnalysesUsernameProjectSlugAnalysisSlugFeaturesGanalyticsOrphanUrlsMediumSourceQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAnalysesUsernameProjectSlugAnalysisSlugFeaturesGanalyticsOrphanUrlsMediumSource<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['ganalytics']['orphan_urls'][':medium'][':source']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['ganalytics']['orphan_urls'][':medium'][':source']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['ganalytics']['orphan_urls'][':medium'][':source']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getAnalysesUsernameProjectSlugAnalysisSlugFeaturesGanalyticsOrphanUrlsMediumSourceQueryKey
        >
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
      ...getAnalysesUsernameProjectSlugAnalysisSlugFeaturesGanalyticsOrphanUrlsMediumSourceQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAnalysesUsernameProjectSlugAnalysisSlugFeaturesLinksPercentilesQueryKey(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['links']['percentiles']['$get']
  >,
) {
  return [
    'analyses',
    '/analyses/:username/:project_slug/:analysis_slug/features/links/percentiles',
    args,
  ] as const
}

export function getAnalysesUsernameProjectSlugAnalysisSlugFeaturesLinksPercentilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['links']['percentiles']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['links']['percentiles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['links']['percentiles']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnalysesUsernameProjectSlugAnalysisSlugFeaturesLinksPercentilesQueryKey>
  >({
    queryKey: getAnalysesUsernameProjectSlugAnalysisSlugFeaturesLinksPercentilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.analyses[':username'][':project_slug'][
          ':analysis_slug'
        ].features.links.percentiles.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAnalysesUsernameProjectSlugAnalysisSlugFeaturesLinksPercentiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['links']['percentiles']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['links']['percentiles']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['links']['percentiles']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getAnalysesUsernameProjectSlugAnalysisSlugFeaturesLinksPercentilesQueryKey
        >
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
      ...getAnalysesUsernameProjectSlugAnalysisSlugFeaturesLinksPercentilesQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAnalysesUsernameProjectSlugAnalysisSlugFeaturesLinksPercentiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['links']['percentiles']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['links']['percentiles']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['links']['percentiles']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getAnalysesUsernameProjectSlugAnalysisSlugFeaturesLinksPercentilesQueryKey
        >
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
      ...getAnalysesUsernameProjectSlugAnalysisSlugFeaturesLinksPercentilesQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAnalysesUsernameProjectSlugAnalysisSlugFeaturesPagerankLostQueryKey(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['pagerank']['lost']['$get']
  >,
) {
  return [
    'analyses',
    '/analyses/:username/:project_slug/:analysis_slug/features/pagerank/lost',
    args,
  ] as const
}

export function getAnalysesUsernameProjectSlugAnalysisSlugFeaturesPagerankLostQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['pagerank']['lost']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['pagerank']['lost']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['pagerank']['lost']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnalysesUsernameProjectSlugAnalysisSlugFeaturesPagerankLostQueryKey>
  >({
    queryKey: getAnalysesUsernameProjectSlugAnalysisSlugFeaturesPagerankLostQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.analyses[':username'][':project_slug'][':analysis_slug'].features.pagerank.lost.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useAnalysesUsernameProjectSlugAnalysisSlugFeaturesPagerankLost<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['pagerank']['lost']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['pagerank']['lost']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['pagerank']['lost']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnalysesUsernameProjectSlugAnalysisSlugFeaturesPagerankLostQueryKey>
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
      ...getAnalysesUsernameProjectSlugAnalysisSlugFeaturesPagerankLostQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAnalysesUsernameProjectSlugAnalysisSlugFeaturesPagerankLost<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['pagerank']['lost']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['pagerank']['lost']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['pagerank']['lost']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnalysesUsernameProjectSlugAnalysisSlugFeaturesPagerankLostQueryKey>
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
      ...getAnalysesUsernameProjectSlugAnalysisSlugFeaturesPagerankLostQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsReportQueryKey(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['sitemaps']['report']['$get']
  >,
) {
  return [
    'analyses',
    '/analyses/:username/:project_slug/:analysis_slug/features/sitemaps/report',
    args,
  ] as const
}

export function getAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsReportQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['sitemaps']['report']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['sitemaps']['report']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['sitemaps']['report']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsReportQueryKey>
  >({
    queryKey: getAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsReportQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.analyses[':username'][':project_slug'][
          ':analysis_slug'
        ].features.sitemaps.report.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsReport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['sitemaps']['report']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['sitemaps']['report']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['sitemaps']['report']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsReportQueryKey>
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
      ...getAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsReportQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsReport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['sitemaps']['report']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['sitemaps']['report']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['sitemaps']['report']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsReportQueryKey>
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
      ...getAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsReportQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsSamplesOutOfConfigQueryKey(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['sitemaps']['samples']['out_of_config']['$get']
  >,
) {
  return [
    'analyses',
    '/analyses/:username/:project_slug/:analysis_slug/features/sitemaps/samples/out_of_config',
    args,
  ] as const
}

export function getAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsSamplesOutOfConfigQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['sitemaps']['samples']['out_of_config']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['sitemaps']['samples']['out_of_config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['sitemaps']['samples']['out_of_config']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsSamplesOutOfConfigQueryKey
    >
  >({
    queryKey:
      getAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsSamplesOutOfConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.analyses[':username'][':project_slug'][
          ':analysis_slug'
        ].features.sitemaps.samples.out_of_config.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsSamplesOutOfConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['sitemaps']['samples']['out_of_config']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['sitemaps']['samples']['out_of_config']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['sitemaps']['samples']['out_of_config']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsSamplesOutOfConfigQueryKey
        >
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
      ...getAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsSamplesOutOfConfigQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsSamplesOutOfConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['sitemaps']['samples']['out_of_config']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['sitemaps']['samples']['out_of_config']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['sitemaps']['samples']['out_of_config']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsSamplesOutOfConfigQueryKey
        >
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
      ...getAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsSamplesOutOfConfigQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsSamplesSitemapOnlyQueryKey(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['sitemaps']['samples']['sitemap_only']['$get']
  >,
) {
  return [
    'analyses',
    '/analyses/:username/:project_slug/:analysis_slug/features/sitemaps/samples/sitemap_only',
    args,
  ] as const
}

export function getAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsSamplesSitemapOnlyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['sitemaps']['samples']['sitemap_only']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['sitemaps']['samples']['sitemap_only']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['sitemaps']['samples']['sitemap_only']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsSamplesSitemapOnlyQueryKey
    >
  >({
    queryKey:
      getAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsSamplesSitemapOnlyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.analyses[':username'][':project_slug'][
          ':analysis_slug'
        ].features.sitemaps.samples.sitemap_only.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsSamplesSitemapOnly<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['sitemaps']['samples']['sitemap_only']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['sitemaps']['samples']['sitemap_only']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['sitemaps']['samples']['sitemap_only']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsSamplesSitemapOnlyQueryKey
        >
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
      ...getAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsSamplesSitemapOnlyQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsSamplesSitemapOnly<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['sitemaps']['samples']['sitemap_only']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['sitemaps']['samples']['sitemap_only']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['sitemaps']['samples']['sitemap_only']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsSamplesSitemapOnlyQueryKey
        >
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
      ...getAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsSamplesSitemapOnlyQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAnalysesUsernameProjectSlugAnalysisSlugFeaturesTopDomainsDomainsQueryKey(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['top_domains']['domains']['$get']
  >,
) {
  return [
    'analyses',
    '/analyses/:username/:project_slug/:analysis_slug/features/top_domains/domains',
    args,
  ] as const
}

export function getAnalysesUsernameProjectSlugAnalysisSlugFeaturesTopDomainsDomainsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['top_domains']['domains']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['top_domains']['domains']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['top_domains']['domains']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnalysesUsernameProjectSlugAnalysisSlugFeaturesTopDomainsDomainsQueryKey>
  >({
    queryKey: getAnalysesUsernameProjectSlugAnalysisSlugFeaturesTopDomainsDomainsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.analyses[':username'][':project_slug'][
          ':analysis_slug'
        ].features.top_domains.domains.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAnalysesUsernameProjectSlugAnalysisSlugFeaturesTopDomainsDomains<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['top_domains']['domains']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['top_domains']['domains']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['top_domains']['domains']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getAnalysesUsernameProjectSlugAnalysisSlugFeaturesTopDomainsDomainsQueryKey
        >
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
      ...getAnalysesUsernameProjectSlugAnalysisSlugFeaturesTopDomainsDomainsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAnalysesUsernameProjectSlugAnalysisSlugFeaturesTopDomainsDomains<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['top_domains']['domains']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['top_domains']['domains']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['top_domains']['domains']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getAnalysesUsernameProjectSlugAnalysisSlugFeaturesTopDomainsDomainsQueryKey
        >
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
      ...getAnalysesUsernameProjectSlugAnalysisSlugFeaturesTopDomainsDomainsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAnalysesUsernameProjectSlugAnalysisSlugFeaturesTopDomainsSubdomainsQueryKey(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['top_domains']['subdomains']['$get']
  >,
) {
  return [
    'analyses',
    '/analyses/:username/:project_slug/:analysis_slug/features/top_domains/subdomains',
    args,
  ] as const
}

export function getAnalysesUsernameProjectSlugAnalysisSlugFeaturesTopDomainsSubdomainsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['top_domains']['subdomains']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['top_domains']['subdomains']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['top_domains']['subdomains']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getAnalysesUsernameProjectSlugAnalysisSlugFeaturesTopDomainsSubdomainsQueryKey
    >
  >({
    queryKey: getAnalysesUsernameProjectSlugAnalysisSlugFeaturesTopDomainsSubdomainsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.analyses[':username'][':project_slug'][
          ':analysis_slug'
        ].features.top_domains.subdomains.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAnalysesUsernameProjectSlugAnalysisSlugFeaturesTopDomainsSubdomains<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['top_domains']['subdomains']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['top_domains']['subdomains']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['top_domains']['subdomains']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getAnalysesUsernameProjectSlugAnalysisSlugFeaturesTopDomainsSubdomainsQueryKey
        >
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
      ...getAnalysesUsernameProjectSlugAnalysisSlugFeaturesTopDomainsSubdomainsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAnalysesUsernameProjectSlugAnalysisSlugFeaturesTopDomainsSubdomains<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['top_domains']['subdomains']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['top_domains']['subdomains']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['top_domains']['subdomains']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getAnalysesUsernameProjectSlugAnalysisSlugFeaturesTopDomainsSubdomainsQueryKey
        >
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
      ...getAnalysesUsernameProjectSlugAnalysisSlugFeaturesTopDomainsSubdomainsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAnalysesUsernameProjectSlugAnalysisSlugUrlsMutationKey() {
  return ['analyses', '/analyses/:username/:project_slug/:analysis_slug/urls', 'POST'] as const
}

export function getPostAnalysesUsernameProjectSlugAnalysisSlugUrlsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAnalysesUsernameProjectSlugAnalysisSlugUrlsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['$post']
      >,
    ) {
      return parseResponse(
        client.analyses[':username'][':project_slug'][':analysis_slug'].urls.$post(args, options),
      )
    },
  })
}

export function usePostAnalysesUsernameProjectSlugAnalysisSlugUrls<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAnalysesUsernameProjectSlugAnalysisSlugUrlsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAnalysesUsernameProjectSlugAnalysisSlugUrlsAggsMutationKey() {
  return ['analyses', '/analyses/:username/:project_slug/:analysis_slug/urls/aggs', 'POST'] as const
}

export function getPostAnalysesUsernameProjectSlugAnalysisSlugUrlsAggsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['aggs']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['aggs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAnalysesUsernameProjectSlugAnalysisSlugUrlsAggsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['aggs']['$post']
      >,
    ) {
      return parseResponse(
        client.analyses[':username'][':project_slug'][':analysis_slug'].urls.aggs.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAnalysesUsernameProjectSlugAnalysisSlugUrlsAggs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['aggs']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['aggs']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAnalysesUsernameProjectSlugAnalysisSlugUrlsAggsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAnalysesUsernameProjectSlugAnalysisSlugUrlsDatamodelQueryKey(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['datamodel']['$get']
  >,
) {
  return [
    'analyses',
    '/analyses/:username/:project_slug/:analysis_slug/urls/datamodel',
    args,
  ] as const
}

export function getAnalysesUsernameProjectSlugAnalysisSlugUrlsDatamodelQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['datamodel']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['datamodel']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['datamodel']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnalysesUsernameProjectSlugAnalysisSlugUrlsDatamodelQueryKey>
  >({
    queryKey: getAnalysesUsernameProjectSlugAnalysisSlugUrlsDatamodelQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.analyses[':username'][':project_slug'][':analysis_slug'].urls.datamodel.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAnalysesUsernameProjectSlugAnalysisSlugUrlsDatamodel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['datamodel']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['datamodel']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['datamodel']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnalysesUsernameProjectSlugAnalysisSlugUrlsDatamodelQueryKey>
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
      ...getAnalysesUsernameProjectSlugAnalysisSlugUrlsDatamodelQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAnalysesUsernameProjectSlugAnalysisSlugUrlsDatamodel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['datamodel']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['datamodel']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['datamodel']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnalysesUsernameProjectSlugAnalysisSlugUrlsDatamodelQueryKey>
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
      ...getAnalysesUsernameProjectSlugAnalysisSlugUrlsDatamodelQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAnalysesUsernameProjectSlugAnalysisSlugUrlsExportQueryKey(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['export']['$get']
  >,
) {
  return ['analyses', '/analyses/:username/:project_slug/:analysis_slug/urls/export', args] as const
}

export function getAnalysesUsernameProjectSlugAnalysisSlugUrlsExportQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['export']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['export']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['export']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnalysesUsernameProjectSlugAnalysisSlugUrlsExportQueryKey>
  >({
    queryKey: getAnalysesUsernameProjectSlugAnalysisSlugUrlsExportQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.analyses[':username'][':project_slug'][':analysis_slug'].urls.export.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAnalysesUsernameProjectSlugAnalysisSlugUrlsExport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['export']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['export']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['export']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnalysesUsernameProjectSlugAnalysisSlugUrlsExportQueryKey>
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
      ...getAnalysesUsernameProjectSlugAnalysisSlugUrlsExportQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAnalysesUsernameProjectSlugAnalysisSlugUrlsExport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['export']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['export']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['export']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnalysesUsernameProjectSlugAnalysisSlugUrlsExportQueryKey>
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
      ...getAnalysesUsernameProjectSlugAnalysisSlugUrlsExportQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAnalysesUsernameProjectSlugAnalysisSlugUrlsExportMutationKey() {
  return [
    'analyses',
    '/analyses/:username/:project_slug/:analysis_slug/urls/export',
    'POST',
  ] as const
}

export function getPostAnalysesUsernameProjectSlugAnalysisSlugUrlsExportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['export']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['export']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAnalysesUsernameProjectSlugAnalysisSlugUrlsExportMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['export']['$post']
      >,
    ) {
      return parseResponse(
        client.analyses[':username'][':project_slug'][':analysis_slug'].urls.export.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAnalysesUsernameProjectSlugAnalysisSlugUrlsExport<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['export']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['export']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAnalysesUsernameProjectSlugAnalysisSlugUrlsExportMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAnalysesUsernameProjectSlugAnalysisSlugUrlsExportUrlExportIdQueryKey(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['export'][':url_export_id']['$get']
  >,
) {
  return [
    'analyses',
    '/analyses/:username/:project_slug/:analysis_slug/urls/export/:url_export_id',
    args,
  ] as const
}

export function getAnalysesUsernameProjectSlugAnalysisSlugUrlsExportUrlExportIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['export'][':url_export_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['export'][':url_export_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['export'][':url_export_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnalysesUsernameProjectSlugAnalysisSlugUrlsExportUrlExportIdQueryKey>
  >({
    queryKey: getAnalysesUsernameProjectSlugAnalysisSlugUrlsExportUrlExportIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.analyses[':username'][':project_slug'][':analysis_slug'].urls.export[
          ':url_export_id'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAnalysesUsernameProjectSlugAnalysisSlugUrlsExportUrlExportId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['export'][':url_export_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['export'][':url_export_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['export'][':url_export_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnalysesUsernameProjectSlugAnalysisSlugUrlsExportUrlExportIdQueryKey>
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
      ...getAnalysesUsernameProjectSlugAnalysisSlugUrlsExportUrlExportIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAnalysesUsernameProjectSlugAnalysisSlugUrlsExportUrlExportId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['export'][':url_export_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['export'][':url_export_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['export'][':url_export_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnalysesUsernameProjectSlugAnalysisSlugUrlsExportUrlExportIdQueryKey>
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
      ...getAnalysesUsernameProjectSlugAnalysisSlugUrlsExportUrlExportIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAnalysesUsernameProjectSlugAnalysisSlugUrlsSuggestedFiltersMutationKey() {
  return [
    'analyses',
    '/analyses/:username/:project_slug/:analysis_slug/urls/suggested_filters',
    'POST',
  ] as const
}

export function getPostAnalysesUsernameProjectSlugAnalysisSlugUrlsSuggestedFiltersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['suggested_filters']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['suggested_filters']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAnalysesUsernameProjectSlugAnalysisSlugUrlsSuggestedFiltersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['suggested_filters']['$post']
      >,
    ) {
      return parseResponse(
        client.analyses[':username'][':project_slug'][
          ':analysis_slug'
        ].urls.suggested_filters.$post(args, options),
      )
    },
  })
}

export function usePostAnalysesUsernameProjectSlugAnalysisSlugUrlsSuggestedFilters<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['suggested_filters']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['suggested_filters']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostAnalysesUsernameProjectSlugAnalysisSlugUrlsSuggestedFiltersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAnalysesUsernameProjectSlugAnalysisSlugUrlsUrlQueryKey(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls'][':url']['$get']
  >,
) {
  return ['analyses', '/analyses/:username/:project_slug/:analysis_slug/urls/:url', args] as const
}

export function getAnalysesUsernameProjectSlugAnalysisSlugUrlsUrlQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls'][':url']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls'][':url']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls'][':url']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnalysesUsernameProjectSlugAnalysisSlugUrlsUrlQueryKey>
  >({
    queryKey: getAnalysesUsernameProjectSlugAnalysisSlugUrlsUrlQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.analyses[':username'][':project_slug'][':analysis_slug'].urls[':url'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAnalysesUsernameProjectSlugAnalysisSlugUrlsUrl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls'][':url']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls'][':url']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls'][':url']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnalysesUsernameProjectSlugAnalysisSlugUrlsUrlQueryKey>
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
      ...getAnalysesUsernameProjectSlugAnalysisSlugUrlsUrlQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAnalysesUsernameProjectSlugAnalysisSlugUrlsUrl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls'][':url']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls'][':url']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls'][':url']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnalysesUsernameProjectSlugAnalysisSlugUrlsUrlQueryKey>
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
      ...getAnalysesUsernameProjectSlugAnalysisSlugUrlsUrlQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getProjectsUsernameQueryKey(
  args: InferRequestType<(typeof client.projects)[':username']['$get']>,
) {
  return ['projects', '/projects/:username', args] as const
}

export function getProjectsUsernameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':username']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':username']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsUsernameQueryKey>
  >({
    queryKey: getProjectsUsernameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':username'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useProjectsUsername<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':username']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':username']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':username']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsUsernameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getProjectsUsernameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseProjectsUsername<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':username']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':username']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':username']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsUsernameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getProjectsUsernameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostProjectsUsernameProjectSlugFeaturesUrlRewritingRulesValidatorMutationKey() {
  return [
    'projects',
    '/projects/:username/:project_slug/features/url_rewriting/rules_validator',
    'POST',
  ] as const
}

export function getPostProjectsUsernameProjectSlugFeaturesUrlRewritingRulesValidatorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':username'][':project_slug']['features']['url_rewriting']['rules_validator']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.projects)[':username'][':project_slug']['features']['url_rewriting']['rules_validator']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsUsernameProjectSlugFeaturesUrlRewritingRulesValidatorMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':username'][':project_slug']['features']['url_rewriting']['rules_validator']['$post']
      >,
    ) {
      return parseResponse(
        client.projects[':username'][':project_slug'].features.url_rewriting.rules_validator.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostProjectsUsernameProjectSlugFeaturesUrlRewritingRulesValidator<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.projects)[':username'][':project_slug']['features']['url_rewriting']['rules_validator']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.projects)[':username'][':project_slug']['features']['url_rewriting']['rules_validator']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostProjectsUsernameProjectSlugFeaturesUrlRewritingRulesValidatorMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getProjectsUsernameProjectSlugFiltersQueryKey(
  args: InferRequestType<(typeof client.projects)[':username'][':project_slug']['filters']['$get']>,
) {
  return ['projects', '/projects/:username/:project_slug/filters', args] as const
}

export function getProjectsUsernameProjectSlugFiltersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.projects)[':username'][':project_slug']['filters']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':username'][':project_slug']['filters']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.projects)[':username'][':project_slug']['filters']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsUsernameProjectSlugFiltersQueryKey>
  >({
    queryKey: getProjectsUsernameProjectSlugFiltersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':username'][':project_slug'].filters.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProjectsUsernameProjectSlugFilters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.projects)[':username'][':project_slug']['filters']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':username'][':project_slug']['filters']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.projects)[':username'][':project_slug']['filters']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsUsernameProjectSlugFiltersQueryKey>
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
      ...getProjectsUsernameProjectSlugFiltersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProjectsUsernameProjectSlugFilters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.projects)[':username'][':project_slug']['filters']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':username'][':project_slug']['filters']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.projects)[':username'][':project_slug']['filters']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsUsernameProjectSlugFiltersQueryKey>
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
      ...getProjectsUsernameProjectSlugFiltersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getProjectsUsernameProjectSlugFiltersIdentifierQueryKey(
  args: InferRequestType<
    (typeof client.projects)[':username'][':project_slug']['filters'][':identifier']['$get']
  >,
) {
  return ['projects', '/projects/:username/:project_slug/filters/:identifier', args] as const
}

export function getProjectsUsernameProjectSlugFiltersIdentifierQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':username'][':project_slug']['filters'][':identifier']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':username'][':project_slug']['filters'][':identifier']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':username'][':project_slug']['filters'][':identifier']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsUsernameProjectSlugFiltersIdentifierQueryKey>
  >({
    queryKey: getProjectsUsernameProjectSlugFiltersIdentifierQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':username'][':project_slug'].filters[':identifier'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProjectsUsernameProjectSlugFiltersIdentifier<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':username'][':project_slug']['filters'][':identifier']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':username'][':project_slug']['filters'][':identifier']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.projects)[':username'][':project_slug']['filters'][':identifier']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsUsernameProjectSlugFiltersIdentifierQueryKey>
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
      ...getProjectsUsernameProjectSlugFiltersIdentifierQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProjectsUsernameProjectSlugFiltersIdentifier<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':username'][':project_slug']['filters'][':identifier']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':username'][':project_slug']['filters'][':identifier']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.projects)[':username'][':project_slug']['filters'][':identifier']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsUsernameProjectSlugFiltersIdentifierQueryKey>
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
      ...getProjectsUsernameProjectSlugFiltersIdentifierQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostProjectsUsernameProjectSlugUrlsAggsMutationKey() {
  return ['projects', '/projects/:username/:project_slug/urls/aggs', 'POST'] as const
}

export function getPostProjectsUsernameProjectSlugUrlsAggsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':username'][':project_slug']['urls']['aggs']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.projects)[':username'][':project_slug']['urls']['aggs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsUsernameProjectSlugUrlsAggsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':username'][':project_slug']['urls']['aggs']['$post']
      >,
    ) {
      return parseResponse(
        client.projects[':username'][':project_slug'].urls.aggs.$post(args, options),
      )
    },
  })
}

export function usePostProjectsUsernameProjectSlugUrlsAggs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.projects)[':username'][':project_slug']['urls']['aggs']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.projects)[':username'][':project_slug']['urls']['aggs']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectsUsernameProjectSlugUrlsAggsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
