import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAnalysesKey() {
  return ['analyses'] as const
}

export function getProjectsKey() {
  return ['projects'] as const
}

export function getGetAnalysesUsernameProjectSlugKey(
  args: InferRequestType<(typeof client.analyses)[':username'][':project_slug']['$get']>,
) {
  return ['analyses', '/analyses/:username/:project_slug', args] as const
}

export function useGetAnalysesUsernameProjectSlug<TError = unknown>(
  args: InferRequestType<(typeof client.analyses)[':username'][':project_slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.analyses)[':username'][':project_slug']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAnalysesUsernameProjectSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.analyses)[':username'][':project_slug']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.analyses[':username'][':project_slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnalysesUsernameProjectSlug<TError = unknown>(
  args: InferRequestType<(typeof client.analyses)[':username'][':project_slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.analyses)[':username'][':project_slug']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAnalysesUsernameProjectSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.analyses)[':username'][':project_slug']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.analyses[':username'][':project_slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAnalysesUsernameProjectSlugAnalysisSlugKey(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['$get']
  >,
) {
  return ['analyses', '/analyses/:username/:project_slug/:analysis_slug', args] as const
}

export function useGetAnalysesUsernameProjectSlugAnalysisSlug<TError = unknown>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAnalysesUsernameProjectSlugAnalysisSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.analyses[':username'][':project_slug'][':analysis_slug'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnalysesUsernameProjectSlugAnalysisSlug<TError = unknown>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAnalysesUsernameProjectSlugAnalysisSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.analyses[':username'][':project_slug'][':analysis_slug'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsKey(
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

export function useGetAnalysesUsernameProjectSlugAnalysisSlugCrawlStatistics<TError = unknown>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['crawl_statistics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.analyses[':username'][':project_slug'][':analysis_slug'].crawl_statistics.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnalysesUsernameProjectSlugAnalysisSlugCrawlStatistics<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['crawl_statistics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.analyses[':username'][':project_slug'][':analysis_slug'].crawl_statistics.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsTimeKey(
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

export function useGetAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsTime<TError = unknown>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['crawl_statistics']['time']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsTimeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.analyses[':username'][':project_slug'][
            ':analysis_slug'
          ].crawl_statistics.time.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsTime<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['crawl_statistics']['time']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsTimeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.analyses[':username'][':project_slug'][
            ':analysis_slug'
          ].crawl_statistics.time.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsUrlsListTypeKey(
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

export function useGetAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsUrlsListType<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['crawl_statistics']['urls'][':list_type']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsUrlsListTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.analyses[':username'][':project_slug'][':analysis_slug'].crawl_statistics.urls[
            ':list_type'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsUrlsListType<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['crawl_statistics']['urls'][':list_type']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAnalysesUsernameProjectSlugAnalysisSlugCrawlStatisticsUrlsListTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.analyses[':username'][':project_slug'][':analysis_slug'].crawl_statistics.urls[
            ':list_type'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAnalysesUsernameProjectSlugAnalysisSlugFeaturesGanalyticsOrphanUrlsMediumSourceKey(
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

export function useGetAnalysesUsernameProjectSlugAnalysisSlugFeaturesGanalyticsOrphanUrlsMediumSource<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['ganalytics']['orphan_urls'][':medium'][':source']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAnalysesUsernameProjectSlugAnalysisSlugFeaturesGanalyticsOrphanUrlsMediumSourceKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.analyses[':username'][':project_slug'][
            ':analysis_slug'
          ].features.ganalytics.orphan_urls[':medium'][':source'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnalysesUsernameProjectSlugAnalysisSlugFeaturesGanalyticsOrphanUrlsMediumSource<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['ganalytics']['orphan_urls'][':medium'][':source']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAnalysesUsernameProjectSlugAnalysisSlugFeaturesGanalyticsOrphanUrlsMediumSourceKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.analyses[':username'][':project_slug'][
            ':analysis_slug'
          ].features.ganalytics.orphan_urls[':medium'][':source'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAnalysesUsernameProjectSlugAnalysisSlugFeaturesLinksPercentilesKey(
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

export function useGetAnalysesUsernameProjectSlugAnalysisSlugFeaturesLinksPercentiles<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['links']['percentiles']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAnalysesUsernameProjectSlugAnalysisSlugFeaturesLinksPercentilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.analyses[':username'][':project_slug'][
            ':analysis_slug'
          ].features.links.percentiles.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnalysesUsernameProjectSlugAnalysisSlugFeaturesLinksPercentiles<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['links']['percentiles']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAnalysesUsernameProjectSlugAnalysisSlugFeaturesLinksPercentilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.analyses[':username'][':project_slug'][
            ':analysis_slug'
          ].features.links.percentiles.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAnalysesUsernameProjectSlugAnalysisSlugFeaturesPagerankLostKey(
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

export function useGetAnalysesUsernameProjectSlugAnalysisSlugFeaturesPagerankLost<TError = unknown>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['pagerank']['lost']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAnalysesUsernameProjectSlugAnalysisSlugFeaturesPagerankLostKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.analyses[':username'][':project_slug'][
            ':analysis_slug'
          ].features.pagerank.lost.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnalysesUsernameProjectSlugAnalysisSlugFeaturesPagerankLost<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['pagerank']['lost']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAnalysesUsernameProjectSlugAnalysisSlugFeaturesPagerankLostKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.analyses[':username'][':project_slug'][
            ':analysis_slug'
          ].features.pagerank.lost.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsReportKey(
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

export function useGetAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsReport<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['sitemaps']['report']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsReportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.analyses[':username'][':project_slug'][
            ':analysis_slug'
          ].features.sitemaps.report.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsReport<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['sitemaps']['report']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsReportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.analyses[':username'][':project_slug'][
            ':analysis_slug'
          ].features.sitemaps.report.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsSamplesOutOfConfigKey(
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

export function useGetAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsSamplesOutOfConfig<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['sitemaps']['samples']['out_of_config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsSamplesOutOfConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.analyses[':username'][':project_slug'][
            ':analysis_slug'
          ].features.sitemaps.samples.out_of_config.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsSamplesOutOfConfig<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['sitemaps']['samples']['out_of_config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsSamplesOutOfConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.analyses[':username'][':project_slug'][
            ':analysis_slug'
          ].features.sitemaps.samples.out_of_config.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsSamplesSitemapOnlyKey(
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

export function useGetAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsSamplesSitemapOnly<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['sitemaps']['samples']['sitemap_only']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsSamplesSitemapOnlyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.analyses[':username'][':project_slug'][
            ':analysis_slug'
          ].features.sitemaps.samples.sitemap_only.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsSamplesSitemapOnly<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['sitemaps']['samples']['sitemap_only']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAnalysesUsernameProjectSlugAnalysisSlugFeaturesSitemapsSamplesSitemapOnlyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.analyses[':username'][':project_slug'][
            ':analysis_slug'
          ].features.sitemaps.samples.sitemap_only.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAnalysesUsernameProjectSlugAnalysisSlugFeaturesTopDomainsDomainsKey(
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

export function useGetAnalysesUsernameProjectSlugAnalysisSlugFeaturesTopDomainsDomains<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['top_domains']['domains']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAnalysesUsernameProjectSlugAnalysisSlugFeaturesTopDomainsDomainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.analyses[':username'][':project_slug'][
            ':analysis_slug'
          ].features.top_domains.domains.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnalysesUsernameProjectSlugAnalysisSlugFeaturesTopDomainsDomains<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['top_domains']['domains']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAnalysesUsernameProjectSlugAnalysisSlugFeaturesTopDomainsDomainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.analyses[':username'][':project_slug'][
            ':analysis_slug'
          ].features.top_domains.domains.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAnalysesUsernameProjectSlugAnalysisSlugFeaturesTopDomainsSubdomainsKey(
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

export function useGetAnalysesUsernameProjectSlugAnalysisSlugFeaturesTopDomainsSubdomains<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['top_domains']['subdomains']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAnalysesUsernameProjectSlugAnalysisSlugFeaturesTopDomainsSubdomainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.analyses[':username'][':project_slug'][
            ':analysis_slug'
          ].features.top_domains.subdomains.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnalysesUsernameProjectSlugAnalysisSlugFeaturesTopDomainsSubdomains<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['features']['top_domains']['subdomains']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAnalysesUsernameProjectSlugAnalysisSlugFeaturesTopDomainsSubdomainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.analyses[':username'][':project_slug'][
            ':analysis_slug'
          ].features.top_domains.subdomains.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAnalysesUsernameProjectSlugAnalysisSlugUrlsKey() {
  return ['analyses', '/analyses/:username/:project_slug/:analysis_slug/urls', 'POST'] as const
}

export function usePostAnalysesUsernameProjectSlugAnalysisSlugUrls<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnalysesUsernameProjectSlugAnalysisSlugUrlsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['$post']
          >
        },
      ) =>
        parseResponse(
          client.analyses[':username'][':project_slug'][':analysis_slug'].urls.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAnalysesUsernameProjectSlugAnalysisSlugUrlsAggsKey() {
  return ['analyses', '/analyses/:username/:project_slug/:analysis_slug/urls/aggs', 'POST'] as const
}

export function usePostAnalysesUsernameProjectSlugAnalysisSlugUrlsAggs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['aggs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnalysesUsernameProjectSlugAnalysisSlugUrlsAggsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['aggs']['$post']
          >
        },
      ) =>
        parseResponse(
          client.analyses[':username'][':project_slug'][':analysis_slug'].urls.aggs.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAnalysesUsernameProjectSlugAnalysisSlugUrlsDatamodelKey(
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

export function useGetAnalysesUsernameProjectSlugAnalysisSlugUrlsDatamodel<TError = unknown>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['datamodel']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAnalysesUsernameProjectSlugAnalysisSlugUrlsDatamodelKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.analyses[':username'][':project_slug'][':analysis_slug'].urls.datamodel.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnalysesUsernameProjectSlugAnalysisSlugUrlsDatamodel<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['datamodel']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAnalysesUsernameProjectSlugAnalysisSlugUrlsDatamodelKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.analyses[':username'][':project_slug'][':analysis_slug'].urls.datamodel.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAnalysesUsernameProjectSlugAnalysisSlugUrlsExportKey(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['export']['$get']
  >,
) {
  return ['analyses', '/analyses/:username/:project_slug/:analysis_slug/urls/export', args] as const
}

export function useGetAnalysesUsernameProjectSlugAnalysisSlugUrlsExport<TError = unknown>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['export']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAnalysesUsernameProjectSlugAnalysisSlugUrlsExportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.analyses[':username'][':project_slug'][':analysis_slug'].urls.export.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnalysesUsernameProjectSlugAnalysisSlugUrlsExport<TError = unknown>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['export']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAnalysesUsernameProjectSlugAnalysisSlugUrlsExportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.analyses[':username'][':project_slug'][':analysis_slug'].urls.export.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAnalysesUsernameProjectSlugAnalysisSlugUrlsExportKey() {
  return [
    'analyses',
    '/analyses/:username/:project_slug/:analysis_slug/urls/export',
    'POST',
  ] as const
}

export function usePostAnalysesUsernameProjectSlugAnalysisSlugUrlsExport<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['export']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnalysesUsernameProjectSlugAnalysisSlugUrlsExportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['export']['$post']
          >
        },
      ) =>
        parseResponse(
          client.analyses[':username'][':project_slug'][':analysis_slug'].urls.export.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAnalysesUsernameProjectSlugAnalysisSlugUrlsExportUrlExportIdKey(
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

export function useGetAnalysesUsernameProjectSlugAnalysisSlugUrlsExportUrlExportId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['export'][':url_export_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAnalysesUsernameProjectSlugAnalysisSlugUrlsExportUrlExportIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.analyses[':username'][':project_slug'][':analysis_slug'].urls.export[
            ':url_export_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnalysesUsernameProjectSlugAnalysisSlugUrlsExportUrlExportId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['export'][':url_export_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAnalysesUsernameProjectSlugAnalysisSlugUrlsExportUrlExportIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.analyses[':username'][':project_slug'][':analysis_slug'].urls.export[
            ':url_export_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAnalysesUsernameProjectSlugAnalysisSlugUrlsSuggestedFiltersKey() {
  return [
    'analyses',
    '/analyses/:username/:project_slug/:analysis_slug/urls/suggested_filters',
    'POST',
  ] as const
}

export function usePostAnalysesUsernameProjectSlugAnalysisSlugUrlsSuggestedFilters<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['suggested_filters']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostAnalysesUsernameProjectSlugAnalysisSlugUrlsSuggestedFiltersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls']['suggested_filters']['$post']
          >
        },
      ) =>
        parseResponse(
          client.analyses[':username'][':project_slug'][
            ':analysis_slug'
          ].urls.suggested_filters.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAnalysesUsernameProjectSlugAnalysisSlugUrlsUrlKey(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls'][':url']['$get']
  >,
) {
  return ['analyses', '/analyses/:username/:project_slug/:analysis_slug/urls/:url', args] as const
}

export function useGetAnalysesUsernameProjectSlugAnalysisSlugUrlsUrl<TError = unknown>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls'][':url']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAnalysesUsernameProjectSlugAnalysisSlugUrlsUrlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.analyses[':username'][':project_slug'][':analysis_slug'].urls[':url'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnalysesUsernameProjectSlugAnalysisSlugUrlsUrl<TError = unknown>(
  args: InferRequestType<
    (typeof client.analyses)[':username'][':project_slug'][':analysis_slug']['urls'][':url']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAnalysesUsernameProjectSlugAnalysisSlugUrlsUrlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.analyses[':username'][':project_slug'][':analysis_slug'].urls[':url'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetProjectsUsernameKey(
  args: InferRequestType<(typeof client.projects)[':username']['$get']>,
) {
  return ['projects', '/projects/:username', args] as const
}

export function useGetProjectsUsername<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':username']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':username']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProjectsUsernameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':username']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects[':username'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsUsername<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':username']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':username']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProjectsUsernameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':username']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects[':username'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProjectsUsernameProjectSlugFeaturesUrlRewritingRulesValidatorKey() {
  return [
    'projects',
    '/projects/:username/:project_slug/features/url_rewriting/rules_validator',
    'POST',
  ] as const
}

export function usePostProjectsUsernameProjectSlugFeaturesUrlRewritingRulesValidator<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.projects)[':username'][':project_slug']['features']['url_rewriting']['rules_validator']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostProjectsUsernameProjectSlugFeaturesUrlRewritingRulesValidatorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.projects)[':username'][':project_slug']['features']['url_rewriting']['rules_validator']['$post']
          >
        },
      ) =>
        parseResponse(
          client.projects[':username'][
            ':project_slug'
          ].features.url_rewriting.rules_validator.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsUsernameProjectSlugFiltersKey(
  args: InferRequestType<(typeof client.projects)[':username'][':project_slug']['filters']['$get']>,
) {
  return ['projects', '/projects/:username/:project_slug/filters', args] as const
}

export function useGetProjectsUsernameProjectSlugFilters<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':username'][':project_slug']['filters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.projects)[':username'][':project_slug']['filters']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProjectsUsernameProjectSlugFiltersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.projects)[':username'][':project_slug']['filters']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.projects[':username'][':project_slug'].filters.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsUsernameProjectSlugFilters<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':username'][':project_slug']['filters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.projects)[':username'][':project_slug']['filters']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProjectsUsernameProjectSlugFiltersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.projects)[':username'][':project_slug']['filters']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.projects[':username'][':project_slug'].filters.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetProjectsUsernameProjectSlugFiltersIdentifierKey(
  args: InferRequestType<
    (typeof client.projects)[':username'][':project_slug']['filters'][':identifier']['$get']
  >,
) {
  return ['projects', '/projects/:username/:project_slug/filters/:identifier', args] as const
}

export function useGetProjectsUsernameProjectSlugFiltersIdentifier<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':username'][':project_slug']['filters'][':identifier']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProjectsUsernameProjectSlugFiltersIdentifierKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.projects[':username'][':project_slug'].filters[':identifier'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsUsernameProjectSlugFiltersIdentifier<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':username'][':project_slug']['filters'][':identifier']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProjectsUsernameProjectSlugFiltersIdentifierKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.projects[':username'][':project_slug'].filters[':identifier'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostProjectsUsernameProjectSlugUrlsAggsKey() {
  return ['projects', '/projects/:username/:project_slug/urls/aggs', 'POST'] as const
}

export function usePostProjectsUsernameProjectSlugUrlsAggs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.projects)[':username'][':project_slug']['urls']['aggs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectsUsernameProjectSlugUrlsAggsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.projects)[':username'][':project_slug']['urls']['aggs']['$post']
          >
        },
      ) =>
        parseResponse(
          client.projects[':username'][':project_slug'].urls.aggs.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
