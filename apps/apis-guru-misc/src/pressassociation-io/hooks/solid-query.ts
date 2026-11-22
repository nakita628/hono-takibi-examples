import { createQuery, queryOptions } from '@tanstack/solid-query'
import type { UndefinedInitialDataOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAssetKey() {
  return ['asset'] as const
}

export function getCatalogueKey() {
  return ['catalogue'] as const
}

export function getChannelKey() {
  return ['channel'] as const
}

export function getContributorKey() {
  return ['contributor'] as const
}

export function getFeatureKey() {
  return ['feature'] as const
}

export function getFeatureTypeKey() {
  return ['feature-type'] as const
}

export function getPlatformKey() {
  return ['platform'] as const
}

export function getScheduleKey() {
  return ['schedule'] as const
}

export function getAssetQueryKey(args: InferRequestType<typeof client.asset.$get>) {
  return ['asset', '/asset', args] as const
}

export function getAssetQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.asset.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.asset.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.asset.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAssetQueryKey>
  >({
    queryKey: getAssetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.asset.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAsset<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.asset.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.asset.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.asset.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getAssetQueryKey>
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
    return { ...getAssetQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAssetAssetIdQueryKey(
  args: InferRequestType<(typeof client.asset)[':assetId']['$get']>,
) {
  return ['asset', '/asset/:assetId', args] as const
}

export function getAssetAssetIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.asset)[':assetId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.asset)[':assetId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.asset)[':assetId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssetAssetIdQueryKey>
  >({
    queryKey: getAssetAssetIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.asset[':assetId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAssetAssetId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.asset)[':assetId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.asset)[':assetId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.asset)[':assetId']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAssetAssetIdQueryKey>
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
    return { ...getAssetAssetIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAssetAssetIdContributorQueryKey(
  args: InferRequestType<(typeof client.asset)[':assetId']['contributor']['$get']>,
) {
  return ['asset', '/asset/:assetId/contributor', args] as const
}

export function getAssetAssetIdContributorQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.asset)[':assetId']['contributor']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.asset)[':assetId']['contributor']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.asset)[':assetId']['contributor']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssetAssetIdContributorQueryKey>
  >({
    queryKey: getAssetAssetIdContributorQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.asset[':assetId'].contributor.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAssetAssetIdContributor<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.asset)[':assetId']['contributor']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.asset)[':assetId']['contributor']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.asset)[':assetId']['contributor']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAssetAssetIdContributorQueryKey>
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
      ...getAssetAssetIdContributorQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCatalogueQueryKey() {
  return ['catalogue', '/catalogue'] as const
}

export function getCatalogueQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogue.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogue.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCatalogueQueryKey>
  >({
    queryKey: getCatalogueQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.catalogue.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCatalogue<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogue.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogue.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getCatalogueQueryKey>
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
    return { ...getCatalogueQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getCatalogueCatalogueIdQueryKey(
  args: InferRequestType<(typeof client.catalogue)[':catalogueId']['$get']>,
) {
  return ['catalogue', '/catalogue/:catalogueId', args] as const
}

export function getCatalogueCatalogueIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.catalogue)[':catalogueId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.catalogue)[':catalogueId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.catalogue)[':catalogueId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCatalogueCatalogueIdQueryKey>
  >({
    queryKey: getCatalogueCatalogueIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.catalogue[':catalogueId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCatalogueCatalogueId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.catalogue)[':catalogueId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.catalogue)[':catalogueId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.catalogue)[':catalogueId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCatalogueCatalogueIdQueryKey>
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
      ...getCatalogueCatalogueIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCatalogueCatalogueIdAssetQueryKey(
  args: InferRequestType<(typeof client.catalogue)[':catalogueId']['asset']['$get']>,
) {
  return ['catalogue', '/catalogue/:catalogueId/asset', args] as const
}

export function getCatalogueCatalogueIdAssetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.catalogue)[':catalogueId']['asset']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.catalogue)[':catalogueId']['asset']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.catalogue)[':catalogueId']['asset']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCatalogueCatalogueIdAssetQueryKey>
  >({
    queryKey: getCatalogueCatalogueIdAssetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.catalogue[':catalogueId'].asset.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCatalogueCatalogueIdAsset<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.catalogue)[':catalogueId']['asset']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.catalogue)[':catalogueId']['asset']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.catalogue)[':catalogueId']['asset']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCatalogueCatalogueIdAssetQueryKey>
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
      ...getCatalogueCatalogueIdAssetQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCatalogueCatalogueIdAssetAssetIdQueryKey(
  args: InferRequestType<(typeof client.catalogue)[':catalogueId']['asset'][':assetId']['$get']>,
) {
  return ['catalogue', '/catalogue/:catalogueId/asset/:assetId', args] as const
}

export function getCatalogueCatalogueIdAssetAssetIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.catalogue)[':catalogueId']['asset'][':assetId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.catalogue)[':catalogueId']['asset'][':assetId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.catalogue)[':catalogueId']['asset'][':assetId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCatalogueCatalogueIdAssetAssetIdQueryKey>
  >({
    queryKey: getCatalogueCatalogueIdAssetAssetIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.catalogue[':catalogueId'].asset[':assetId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCatalogueCatalogueIdAssetAssetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.catalogue)[':catalogueId']['asset'][':assetId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.catalogue)[':catalogueId']['asset'][':assetId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.catalogue)[':catalogueId']['asset'][':assetId']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCatalogueCatalogueIdAssetAssetIdQueryKey>
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
      ...getCatalogueCatalogueIdAssetAssetIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getChannelQueryKey(args: InferRequestType<typeof client.channel.$get>) {
  return ['channel', '/channel', args] as const
}

export function getChannelQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channel.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.channel.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channel.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getChannelQueryKey>
  >({
    queryKey: getChannelQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channel.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createChannel<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channel.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.channel.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channel.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getChannelQueryKey>
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
    return { ...getChannelQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getChannelChannelIdQueryKey(
  args: InferRequestType<(typeof client.channel)[':channelId']['$get']>,
) {
  return ['channel', '/channel/:channelId', args] as const
}

export function getChannelChannelIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.channel)[':channelId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channel)[':channelId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.channel)[':channelId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelChannelIdQueryKey>
  >({
    queryKey: getChannelChannelIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channel[':channelId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createChannelChannelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.channel)[':channelId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.channel)[':channelId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channel)[':channelId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getChannelChannelIdQueryKey>
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
    return { ...getChannelChannelIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getContributorQueryKey(args: InferRequestType<typeof client.contributor.$get>) {
  return ['contributor', '/contributor', args] as const
}

export function getContributorQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contributor.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.contributor.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contributor.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getContributorQueryKey>
  >({
    queryKey: getContributorQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contributor.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createContributor<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contributor.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.contributor.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contributor.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getContributorQueryKey>
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
    return { ...getContributorQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getContributorContributorIdQueryKey(
  args: InferRequestType<(typeof client.contributor)[':contributorId']['$get']>,
) {
  return ['contributor', '/contributor/:contributorId', args] as const
}

export function getContributorContributorIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contributor)[':contributorId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.contributor)[':contributorId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contributor)[':contributorId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContributorContributorIdQueryKey>
  >({
    queryKey: getContributorContributorIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contributor[':contributorId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createContributorContributorId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contributor)[':contributorId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.contributor)[':contributorId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.contributor)[':contributorId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getContributorContributorIdQueryKey>
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
      ...getContributorContributorIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFeatureQueryKey(args: InferRequestType<typeof client.feature.$get>) {
  return ['feature', '/feature', args] as const
}

export function getFeatureQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feature.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.feature.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feature.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFeatureQueryKey>
  >({
    queryKey: getFeatureQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.feature.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFeature<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feature.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.feature.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feature.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getFeatureQueryKey>
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
    return { ...getFeatureQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getFeatureTypeQueryKey() {
  return ['feature-type', '/feature-type'] as const
}

export function getFeatureTypeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['feature-type']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['feature-type']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFeatureTypeQueryKey>
  >({
    queryKey: getFeatureTypeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['feature-type'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFeatureType<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['feature-type']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['feature-type']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFeatureTypeQueryKey>
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
    return { ...getFeatureTypeQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getFeatureFeatureIdQueryKey(
  args: InferRequestType<(typeof client.feature)[':featureId']['$get']>,
) {
  return ['feature', '/feature/:featureId', args] as const
}

export function getFeatureFeatureIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.feature)[':featureId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.feature)[':featureId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.feature)[':featureId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFeatureFeatureIdQueryKey>
  >({
    queryKey: getFeatureFeatureIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.feature[':featureId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFeatureFeatureId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.feature)[':featureId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.feature)[':featureId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.feature)[':featureId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFeatureFeatureIdQueryKey>
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
    return { ...getFeatureFeatureIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPlatformQueryKey(args: InferRequestType<typeof client.platform.$get>) {
  return ['platform', '/platform', args] as const
}

export function getPlatformQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.platform.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.platform.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.platform.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPlatformQueryKey>
  >({
    queryKey: getPlatformQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.platform.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPlatform<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.platform.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.platform.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.platform.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getPlatformQueryKey>
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
    return { ...getPlatformQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPlatformPlatformIdQueryKey(
  args: InferRequestType<(typeof client.platform)[':platformId']['$get']>,
) {
  return ['platform', '/platform/:platformId', args] as const
}

export function getPlatformPlatformIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.platform)[':platformId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.platform)[':platformId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.platform)[':platformId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlatformPlatformIdQueryKey>
  >({
    queryKey: getPlatformPlatformIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.platform[':platformId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPlatformPlatformId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.platform)[':platformId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.platform)[':platformId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.platform)[':platformId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPlatformPlatformIdQueryKey>
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
    return { ...getPlatformPlatformIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPlatformPlatformIdRegionQueryKey(
  args: InferRequestType<(typeof client.platform)[':platformId']['region']['$get']>,
) {
  return ['platform', '/platform/:platformId/region', args] as const
}

export function getPlatformPlatformIdRegionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.platform)[':platformId']['region']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.platform)[':platformId']['region']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.platform)[':platformId']['region']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlatformPlatformIdRegionQueryKey>
  >({
    queryKey: getPlatformPlatformIdRegionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.platform[':platformId'].region.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPlatformPlatformIdRegion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.platform)[':platformId']['region']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.platform)[':platformId']['region']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.platform)[':platformId']['region']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPlatformPlatformIdRegionQueryKey>
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
      ...getPlatformPlatformIdRegionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getScheduleQueryKey(args: InferRequestType<typeof client.schedule.$get>) {
  return ['schedule', '/schedule', args] as const
}

export function getScheduleQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedule.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.schedule.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedule.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getScheduleQueryKey>
  >({
    queryKey: getScheduleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.schedule.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSchedule<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedule.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.schedule.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedule.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getScheduleQueryKey>
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
    return { ...getScheduleQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
