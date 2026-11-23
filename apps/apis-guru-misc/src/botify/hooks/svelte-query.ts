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

export function createAnalysesUsernameProjectSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.analyses)[':username'][':project_slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.analyses)[':username'][':project_slug']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAnalysesUsernameProjectSlugQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createAnalysesUsernameProjectSlugAnalysisSlug<
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
  args: () => InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAnalysesUsernameProjectSlugAnalysisSlugQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createAnalysesUsernameProjectSlugAnalysisSlugCrawlStatistics<
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
  args: () => InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['crawl_statistics']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsTime<
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
  args: () => InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['crawl_statistics']['time']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsTimeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsUrlsListType<
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
  args: () => InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['crawl_statistics']['urls'][':list_type']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsUrlsListTypeQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createAnalysesUsernameProjectSlugAnalysisSlugFeaturesGanalyticsOrphanUrlsMediumSource<
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
  args: () => InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['ganalytics']['orphan_urls'][':medium'][':source']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAnalysesUsernameProjectSlugAnalysisSlugFeaturesGanalyticsOrphanUrlsMediumSourceQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createAnalysesUsernameProjectSlugAnalysisSlugFeaturesLinksPercentiles<
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
  args: () => InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['links']['percentiles']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAnalysesUsernameProjectSlugAnalysisSlugFeaturesLinksPercentilesQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createAnalysesUsernameProjectSlugAnalysisSlugFeaturesPagerankLost<
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
  args: () => InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['pagerank']['lost']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAnalysesUsernameProjectSlugAnalysisSlugFeaturesPagerankLostQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsReport<
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
  args: () => InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['sitemaps']['report']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsReportQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsSamplesOutOfConfig<
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
  args: () => InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['sitemaps']['samples']['out_of_config']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsSamplesOutOfConfigQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsSamplesSitemapOnly<
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
  args: () => InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['sitemaps']['samples']['sitemap_only']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsSamplesSitemapOnlyQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createAnalysesUsernameProjectSlugAnalysisSlugFeaturesTopDomainsDomains<
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
  args: () => InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['top_domains']['domains']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAnalysesUsernameProjectSlugAnalysisSlugFeaturesTopDomainsDomainsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createAnalysesUsernameProjectSlugAnalysisSlugFeaturesTopDomainsSubdomains<
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
  args: () => InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['top_domains']['subdomains']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAnalysesUsernameProjectSlugAnalysisSlugFeaturesTopDomainsSubdomainsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostAnalysesUsernameProjectSlugAnalysisSlugUrls<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAnalysesUsernameProjectSlugAnalysisSlugUrlsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAnalysesUsernameProjectSlugAnalysisSlugUrlsAggs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAnalysesUsernameProjectSlugAnalysisSlugUrlsAggsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createAnalysesUsernameProjectSlugAnalysisSlugUrlsDatamodel<
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
  args: () => InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['datamodel']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAnalysesUsernameProjectSlugAnalysisSlugUrlsDatamodelQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createAnalysesUsernameProjectSlugAnalysisSlugUrlsExport<
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
  args: () => InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['export']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAnalysesUsernameProjectSlugAnalysisSlugUrlsExportQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostAnalysesUsernameProjectSlugAnalysisSlugUrlsExport<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostAnalysesUsernameProjectSlugAnalysisSlugUrlsExportMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createAnalysesUsernameProjectSlugAnalysisSlugUrlsExportUrlExportId<
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
  args: () => InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['export'][':url_export_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAnalysesUsernameProjectSlugAnalysisSlugUrlsExportUrlExportIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostAnalysesUsernameProjectSlugAnalysisSlugUrlsSuggestedFilters<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostAnalysesUsernameProjectSlugAnalysisSlugUrlsSuggestedFiltersMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createAnalysesUsernameProjectSlugAnalysisSlugUrlsUrl<
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
  args: () => InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls'][':url']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAnalysesUsernameProjectSlugAnalysisSlugUrlsUrlQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createProjectsUsername<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':username']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.projects)[':username']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProjectsUsernameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostProjectsUsernameProjectSlugFeaturesUrlRewritingRulesValidator<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostProjectsUsernameProjectSlugFeaturesUrlRewritingRulesValidatorMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createProjectsUsernameProjectSlugFilters<
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
  args: () => InferRequestType<
    (typeof client.projects)[':username'][':project_slug']['filters']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProjectsUsernameProjectSlugFiltersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createProjectsUsernameProjectSlugFiltersIdentifier<
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
  args: () => InferRequestType<
    (typeof client.projects)[':username'][':project_slug']['filters'][':identifier']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getProjectsUsernameProjectSlugFiltersIdentifierQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostProjectsUsernameProjectSlugUrlsAggs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostProjectsUsernameProjectSlugUrlsAggsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
