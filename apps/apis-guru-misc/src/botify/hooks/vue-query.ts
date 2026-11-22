import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.analyses)[':username'][':project_slug']['$get']>
  >,
) {
  return ['analyses', '/analyses/:username/:project_slug', toValue(args)] as const
}

export function getAnalysesUsernameProjectSlugQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.analyses)[':username'][':project_slug']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnalysesUsernameProjectSlugQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.analyses[':username'][':project_slug'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.analyses)[':username'][':project_slug']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.analyses)[':username'][':project_slug']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAnalysesUsernameProjectSlugQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnalysesUsernameProjectSlugQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.analyses[':username'][':project_slug'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnalysesUsernameProjectSlugAnalysisSlugQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['$get']
    >
  >,
) {
  return ['analyses', '/analyses/:username/:project_slug/:analysis_slug', toValue(args)] as const
}

export function getAnalysesUsernameProjectSlugAnalysisSlugQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnalysesUsernameProjectSlugAnalysisSlugQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.analyses[':username'][':project_slug'][':analysis_slug'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getAnalysesUsernameProjectSlugAnalysisSlugQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnalysesUsernameProjectSlugAnalysisSlugQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.analyses[':username'][':project_slug'][':analysis_slug'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['crawl_statistics']['$get']
    >
  >,
) {
  return [
    'analyses',
    '/analyses/:username/:project_slug/:analysis_slug/crawl_statistics',
    toValue(args),
  ] as const
}

export function getAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['crawl_statistics']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.analyses[':username'][':project_slug'][':analysis_slug'].crawl_statistics.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['crawl_statistics']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.analyses[':username'][':project_slug'][':analysis_slug'].crawl_statistics.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsTimeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['crawl_statistics']['time']['$get']
    >
  >,
) {
  return [
    'analyses',
    '/analyses/:username/:project_slug/:analysis_slug/crawl_statistics/time',
    toValue(args),
  ] as const
}

export function getAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsTimeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['crawl_statistics']['time']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsTimeQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.analyses[':username'][':project_slug'][':analysis_slug'].crawl_statistics.time.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['crawl_statistics']['time']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsTimeQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsTimeQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.analyses[':username'][':project_slug'][
            ':analysis_slug'
          ].crawl_statistics.time.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsUrlsListTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['crawl_statistics']['urls'][':list_type']['$get']
    >
  >,
) {
  return [
    'analyses',
    '/analyses/:username/:project_slug/:analysis_slug/crawl_statistics/urls/:list_type',
    toValue(args),
  ] as const
}

export function getAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsUrlsListTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['crawl_statistics']['urls'][':list_type']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsUrlsListTypeQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.analyses[':username'][':project_slug'][':analysis_slug'].crawl_statistics.urls[
          ':list_type'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['crawl_statistics']['urls'][':list_type']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<
            typeof getAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsUrlsListTypeQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsUrlsListTypeQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.analyses[':username'][':project_slug'][':analysis_slug'].crawl_statistics.urls[
            ':list_type'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getAnalysesUsernameProjectSlugAnalysisSlugFeaturesGanalyticsOrphanUrlsMediumSourceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['ganalytics']['orphan_urls'][':medium'][':source']['$get']
    >
  >,
) {
  return [
    'analyses',
    '/analyses/:username/:project_slug/:analysis_slug/features/ganalytics/orphan_urls/:medium/:source',
    toValue(args),
  ] as const
}

export function getAnalysesUsernameProjectSlugAnalysisSlugFeaturesGanalyticsOrphanUrlsMediumSourceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['ganalytics']['orphan_urls'][':medium'][':source']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAnalysesUsernameProjectSlugAnalysisSlugFeaturesGanalyticsOrphanUrlsMediumSourceQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.analyses[':username'][':project_slug'][
          ':analysis_slug'
        ].features.ganalytics.orphan_urls[':medium'][':source'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['ganalytics']['orphan_urls'][':medium'][':source']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<
            typeof getAnalysesUsernameProjectSlugAnalysisSlugFeaturesGanalyticsOrphanUrlsMediumSourceQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAnalysesUsernameProjectSlugAnalysisSlugFeaturesGanalyticsOrphanUrlsMediumSourceQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.analyses[':username'][':project_slug'][
            ':analysis_slug'
          ].features.ganalytics.orphan_urls[':medium'][':source'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnalysesUsernameProjectSlugAnalysisSlugFeaturesLinksPercentilesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['links']['percentiles']['$get']
    >
  >,
) {
  return [
    'analyses',
    '/analyses/:username/:project_slug/:analysis_slug/features/links/percentiles',
    toValue(args),
  ] as const
}

export function getAnalysesUsernameProjectSlugAnalysisSlugFeaturesLinksPercentilesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['links']['percentiles']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAnalysesUsernameProjectSlugAnalysisSlugFeaturesLinksPercentilesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.analyses[':username'][':project_slug'][
          ':analysis_slug'
        ].features.links.percentiles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['links']['percentiles']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<
            typeof getAnalysesUsernameProjectSlugAnalysisSlugFeaturesLinksPercentilesQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAnalysesUsernameProjectSlugAnalysisSlugFeaturesLinksPercentilesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.analyses[':username'][':project_slug'][
            ':analysis_slug'
          ].features.links.percentiles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnalysesUsernameProjectSlugAnalysisSlugFeaturesPagerankLostQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['pagerank']['lost']['$get']
    >
  >,
) {
  return [
    'analyses',
    '/analyses/:username/:project_slug/:analysis_slug/features/pagerank/lost',
    toValue(args),
  ] as const
}

export function getAnalysesUsernameProjectSlugAnalysisSlugFeaturesPagerankLostQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['pagerank']['lost']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAnalysesUsernameProjectSlugAnalysisSlugFeaturesPagerankLostQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.analyses[':username'][':project_slug'][':analysis_slug'].features.pagerank.lost.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['pagerank']['lost']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getAnalysesUsernameProjectSlugAnalysisSlugFeaturesPagerankLostQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAnalysesUsernameProjectSlugAnalysisSlugFeaturesPagerankLostQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.analyses[':username'][':project_slug'][
            ':analysis_slug'
          ].features.pagerank.lost.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsReportQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['sitemaps']['report']['$get']
    >
  >,
) {
  return [
    'analyses',
    '/analyses/:username/:project_slug/:analysis_slug/features/sitemaps/report',
    toValue(args),
  ] as const
}

export function getAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsReportQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['sitemaps']['report']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsReportQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.analyses[':username'][':project_slug'][
          ':analysis_slug'
        ].features.sitemaps.report.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['sitemaps']['report']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<
            typeof getAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsReportQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsReportQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.analyses[':username'][':project_slug'][
            ':analysis_slug'
          ].features.sitemaps.report.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsSamplesOutOfConfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['sitemaps']['samples']['out_of_config']['$get']
    >
  >,
) {
  return [
    'analyses',
    '/analyses/:username/:project_slug/:analysis_slug/features/sitemaps/samples/out_of_config',
    toValue(args),
  ] as const
}

export function getAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsSamplesOutOfConfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['sitemaps']['samples']['out_of_config']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsSamplesOutOfConfigQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.analyses[':username'][':project_slug'][
          ':analysis_slug'
        ].features.sitemaps.samples.out_of_config.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['sitemaps']['samples']['out_of_config']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<
            typeof getAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsSamplesOutOfConfigQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsSamplesOutOfConfigQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.analyses[':username'][':project_slug'][
            ':analysis_slug'
          ].features.sitemaps.samples.out_of_config.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsSamplesSitemapOnlyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['sitemaps']['samples']['sitemap_only']['$get']
    >
  >,
) {
  return [
    'analyses',
    '/analyses/:username/:project_slug/:analysis_slug/features/sitemaps/samples/sitemap_only',
    toValue(args),
  ] as const
}

export function getAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsSamplesSitemapOnlyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['sitemaps']['samples']['sitemap_only']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsSamplesSitemapOnlyQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.analyses[':username'][':project_slug'][
          ':analysis_slug'
        ].features.sitemaps.samples.sitemap_only.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['sitemaps']['samples']['sitemap_only']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<
            typeof getAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsSamplesSitemapOnlyQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsSamplesSitemapOnlyQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.analyses[':username'][':project_slug'][
            ':analysis_slug'
          ].features.sitemaps.samples.sitemap_only.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnalysesUsernameProjectSlugAnalysisSlugFeaturesTopDomainsDomainsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['top_domains']['domains']['$get']
    >
  >,
) {
  return [
    'analyses',
    '/analyses/:username/:project_slug/:analysis_slug/features/top_domains/domains',
    toValue(args),
  ] as const
}

export function getAnalysesUsernameProjectSlugAnalysisSlugFeaturesTopDomainsDomainsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['top_domains']['domains']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAnalysesUsernameProjectSlugAnalysisSlugFeaturesTopDomainsDomainsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.analyses[':username'][':project_slug'][
          ':analysis_slug'
        ].features.top_domains.domains.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['top_domains']['domains']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<
            typeof getAnalysesUsernameProjectSlugAnalysisSlugFeaturesTopDomainsDomainsQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAnalysesUsernameProjectSlugAnalysisSlugFeaturesTopDomainsDomainsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.analyses[':username'][':project_slug'][
            ':analysis_slug'
          ].features.top_domains.domains.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnalysesUsernameProjectSlugAnalysisSlugFeaturesTopDomainsSubdomainsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['top_domains']['subdomains']['$get']
    >
  >,
) {
  return [
    'analyses',
    '/analyses/:username/:project_slug/:analysis_slug/features/top_domains/subdomains',
    toValue(args),
  ] as const
}

export function getAnalysesUsernameProjectSlugAnalysisSlugFeaturesTopDomainsSubdomainsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['top_domains']['subdomains']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAnalysesUsernameProjectSlugAnalysisSlugFeaturesTopDomainsSubdomainsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.analyses[':username'][':project_slug'][
          ':analysis_slug'
        ].features.top_domains.subdomains.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['top_domains']['subdomains']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<
            typeof getAnalysesUsernameProjectSlugAnalysisSlugFeaturesTopDomainsSubdomainsQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAnalysesUsernameProjectSlugAnalysisSlugFeaturesTopDomainsSubdomainsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.analyses[':username'][':project_slug'][
            ':analysis_slug'
          ].features.top_domains.subdomains.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['datamodel']['$get']
    >
  >,
) {
  return [
    'analyses',
    '/analyses/:username/:project_slug/:analysis_slug/urls/datamodel',
    toValue(args),
  ] as const
}

export function getAnalysesUsernameProjectSlugAnalysisSlugUrlsDatamodelQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['datamodel']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnalysesUsernameProjectSlugAnalysisSlugUrlsDatamodelQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.analyses[':username'][':project_slug'][':analysis_slug'].urls.datamodel.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['datamodel']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getAnalysesUsernameProjectSlugAnalysisSlugUrlsDatamodelQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAnalysesUsernameProjectSlugAnalysisSlugUrlsDatamodelQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.analyses[':username'][':project_slug'][':analysis_slug'].urls.datamodel.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getAnalysesUsernameProjectSlugAnalysisSlugUrlsExportQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['export']['$get']
    >
  >,
) {
  return [
    'analyses',
    '/analyses/:username/:project_slug/:analysis_slug/urls/export',
    toValue(args),
  ] as const
}

export function getAnalysesUsernameProjectSlugAnalysisSlugUrlsExportQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['export']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnalysesUsernameProjectSlugAnalysisSlugUrlsExportQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.analyses[':username'][':project_slug'][':analysis_slug'].urls.export.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['export']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getAnalysesUsernameProjectSlugAnalysisSlugUrlsExportQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnalysesUsernameProjectSlugAnalysisSlugUrlsExportQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.analyses[':username'][':project_slug'][':analysis_slug'].urls.export.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['export'][':url_export_id']['$get']
    >
  >,
) {
  return [
    'analyses',
    '/analyses/:username/:project_slug/:analysis_slug/urls/export/:url_export_id',
    toValue(args),
  ] as const
}

export function getAnalysesUsernameProjectSlugAnalysisSlugUrlsExportUrlExportIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['export'][':url_export_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAnalysesUsernameProjectSlugAnalysisSlugUrlsExportUrlExportIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.analyses[':username'][':project_slug'][':analysis_slug'].urls.export[
          ':url_export_id'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['export'][':url_export_id']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getAnalysesUsernameProjectSlugAnalysisSlugUrlsExportUrlExportIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAnalysesUsernameProjectSlugAnalysisSlugUrlsExportUrlExportIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.analyses[':username'][':project_slug'][':analysis_slug'].urls.export[
            ':url_export_id'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls'][':url']['$get']
    >
  >,
) {
  return [
    'analyses',
    '/analyses/:username/:project_slug/:analysis_slug/urls/:url',
    toValue(args),
  ] as const
}

export function getAnalysesUsernameProjectSlugAnalysisSlugUrlsUrlQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls'][':url']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnalysesUsernameProjectSlugAnalysisSlugUrlsUrlQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.analyses[':username'][':project_slug'][':analysis_slug'].urls[':url'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls'][':url']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getAnalysesUsernameProjectSlugAnalysisSlugUrlsUrlQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnalysesUsernameProjectSlugAnalysisSlugUrlsUrlQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.analyses[':username'][':project_slug'][':analysis_slug'].urls[':url'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getProjectsUsernameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':username']['$get']>>,
) {
  return ['projects', '/projects/:username', toValue(args)] as const
}

export function getProjectsUsernameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':username']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsUsernameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':username'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsUsername<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':username']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':username']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':username']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':username']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectsUsernameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':username']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsUsernameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsUsernameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':username'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':username'][':project_slug']['filters']['$get']>
  >,
) {
  return ['projects', '/projects/:username/:project_slug/filters', toValue(args)] as const
}

export function getProjectsUsernameProjectSlugFiltersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':username'][':project_slug']['filters']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsUsernameProjectSlugFiltersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':username'][':project_slug'].filters.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':username'][':project_slug']['filters']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getProjectsUsernameProjectSlugFiltersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsUsernameProjectSlugFiltersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':username'][':project_slug'].filters.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProjectsUsernameProjectSlugFiltersIdentifierQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':username'][':project_slug']['filters'][':identifier']['$get']
    >
  >,
) {
  return [
    'projects',
    '/projects/:username/:project_slug/filters/:identifier',
    toValue(args),
  ] as const
}

export function getProjectsUsernameProjectSlugFiltersIdentifierQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':username'][':project_slug']['filters'][':identifier']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsUsernameProjectSlugFiltersIdentifierQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':username'][':project_slug'].filters[':identifier'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':username'][':project_slug']['filters'][':identifier']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getProjectsUsernameProjectSlugFiltersIdentifierQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsUsernameProjectSlugFiltersIdentifierQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':username'][':project_slug'].filters[':identifier'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
