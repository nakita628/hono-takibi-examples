import { useQuery } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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

export function getAssetQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.asset.$get>>,
) {
  return ['asset', '/asset', toValue(args)] as const
}

export function getAssetQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.asset.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.asset.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAsset<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.asset.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.asset.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.asset.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.asset.$get>>>>>,
          ReturnType<typeof getAssetQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.asset.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAssetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.asset.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAssetAssetIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.asset)[':assetId']['$get']>>,
) {
  return ['asset', '/asset/:assetId', toValue(args)] as const
}

export function getAssetAssetIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.asset)[':assetId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssetAssetIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.asset[':assetId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAssetAssetId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.asset)[':assetId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.asset)[':assetId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.asset)[':assetId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.asset)[':assetId']['$get']>>>
            >
          >,
          ReturnType<typeof getAssetAssetIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.asset)[':assetId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssetAssetIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssetAssetIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.asset[':assetId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAssetAssetIdContributorQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.asset)[':assetId']['contributor']['$get']>
  >,
) {
  return ['asset', '/asset/:assetId/contributor', toValue(args)] as const
}

export function getAssetAssetIdContributorQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.asset)[':assetId']['contributor']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssetAssetIdContributorQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.asset[':assetId'].contributor.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAssetAssetIdContributor<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.asset)[':assetId']['contributor']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.asset)[':assetId']['contributor']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.asset)[':assetId']['contributor']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.asset)[':assetId']['contributor']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAssetAssetIdContributorQueryKey>
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
          Awaited<ReturnType<(typeof client.asset)[':assetId']['contributor']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssetAssetIdContributorQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssetAssetIdContributorQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.asset[':assetId'].contributor.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCatalogueQueryKey() {
  return ['catalogue', '/catalogue'] as const
}

export function getCatalogueQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCatalogueQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.catalogue.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCatalogue<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogue.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogue.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogue.$get>>>>
          >,
          ReturnType<typeof getCatalogueQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogue.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCatalogueQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCatalogueQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.catalogue.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCatalogueCatalogueIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.catalogue)[':catalogueId']['$get']>>,
) {
  return ['catalogue', '/catalogue/:catalogueId', toValue(args)] as const
}

export function getCatalogueCatalogueIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.catalogue)[':catalogueId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCatalogueCatalogueIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.catalogue[':catalogueId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCatalogueCatalogueId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.catalogue)[':catalogueId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.catalogue)[':catalogueId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.catalogue)[':catalogueId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.catalogue)[':catalogueId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCatalogueCatalogueIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.catalogue)[':catalogueId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCatalogueCatalogueIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCatalogueCatalogueIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.catalogue[':catalogueId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCatalogueCatalogueIdAssetQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.catalogue)[':catalogueId']['asset']['$get']>
  >,
) {
  return ['catalogue', '/catalogue/:catalogueId/asset', toValue(args)] as const
}

export function getCatalogueCatalogueIdAssetQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.catalogue)[':catalogueId']['asset']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCatalogueCatalogueIdAssetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.catalogue[':catalogueId'].asset.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCatalogueCatalogueIdAsset<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.catalogue)[':catalogueId']['asset']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.catalogue)[':catalogueId']['asset']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.catalogue)[':catalogueId']['asset']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.catalogue)[':catalogueId']['asset']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCatalogueCatalogueIdAssetQueryKey>
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
          Awaited<ReturnType<(typeof client.catalogue)[':catalogueId']['asset']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCatalogueCatalogueIdAssetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCatalogueCatalogueIdAssetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.catalogue[':catalogueId'].asset.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCatalogueCatalogueIdAssetAssetIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.catalogue)[':catalogueId']['asset'][':assetId']['$get']>
  >,
) {
  return ['catalogue', '/catalogue/:catalogueId/asset/:assetId', toValue(args)] as const
}

export function getCatalogueCatalogueIdAssetAssetIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.catalogue)[':catalogueId']['asset'][':assetId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCatalogueCatalogueIdAssetAssetIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.catalogue[':catalogueId'].asset[':assetId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCatalogueCatalogueIdAssetAssetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.catalogue)[':catalogueId']['asset'][':assetId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.catalogue)[':catalogueId']['asset'][':assetId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.catalogue)[':catalogueId']['asset'][':assetId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCatalogueCatalogueIdAssetAssetIdQueryKey>
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
            ReturnType<(typeof client.catalogue)[':catalogueId']['asset'][':assetId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCatalogueCatalogueIdAssetAssetIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCatalogueCatalogueIdAssetAssetIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.catalogue[':catalogueId'].asset[':assetId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChannelQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.channel.$get>>,
) {
  return ['channel', '/channel', toValue(args)] as const
}

export function getChannelQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.channel.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channel.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useChannel<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channel.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.channel.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channel.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channel.$get>>>>
          >,
          ReturnType<typeof getChannelQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channel.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getChannelQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channel.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChannelChannelIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.channel)[':channelId']['$get']>>,
) {
  return ['channel', '/channel/:channelId', toValue(args)] as const
}

export function getChannelChannelIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.channel)[':channelId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelChannelIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channel[':channelId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChannelChannelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.channel)[':channelId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.channel)[':channelId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channel)[':channelId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channel)[':channelId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChannelChannelIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.channel)[':channelId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelChannelIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelChannelIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channel[':channelId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getContributorQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contributor.$get>>,
) {
  return ['contributor', '/contributor', toValue(args)] as const
}

export function getContributorQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contributor.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContributorQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.contributor.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useContributor<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contributor.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contributor.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contributor.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contributor.$get>>>>
          >,
          ReturnType<typeof getContributorQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contributor.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getContributorQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContributorQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.contributor.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getContributorContributorIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.contributor)[':contributorId']['$get']>>,
) {
  return ['contributor', '/contributor/:contributorId', toValue(args)] as const
}

export function getContributorContributorIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.contributor)[':contributorId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContributorContributorIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.contributor[':contributorId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContributorContributorId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contributor)[':contributorId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.contributor)[':contributorId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.contributor)[':contributorId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.contributor)[':contributorId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getContributorContributorIdQueryKey>
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
          Awaited<ReturnType<(typeof client.contributor)[':contributorId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContributorContributorIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContributorContributorIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.contributor[':contributorId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFeatureQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.feature.$get>>,
) {
  return ['feature', '/feature', toValue(args)] as const
}

export function getFeatureQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.feature.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFeatureQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.feature.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useFeature<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feature.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.feature.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feature.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feature.$get>>>>
          >,
          ReturnType<typeof getFeatureQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feature.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFeatureQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFeatureQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.feature.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFeatureTypeQueryKey() {
  return ['feature-type', '/feature-type'] as const
}

export function getFeatureTypeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getFeatureTypeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['feature-type'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useFeatureType<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['feature-type']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['feature-type']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['feature-type']['$get']>>>
            >
          >,
          ReturnType<typeof getFeatureTypeQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['feature-type']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFeatureTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getFeatureTypeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['feature-type'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFeatureFeatureIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.feature)[':featureId']['$get']>>,
) {
  return ['feature', '/feature/:featureId', toValue(args)] as const
}

export function getFeatureFeatureIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.feature)[':featureId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFeatureFeatureIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.feature[':featureId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFeatureFeatureId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.feature)[':featureId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.feature)[':featureId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.feature)[':featureId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.feature)[':featureId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFeatureFeatureIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.feature)[':featureId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFeatureFeatureIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFeatureFeatureIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.feature[':featureId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlatformQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.platform.$get>>,
) {
  return ['platform', '/platform', toValue(args)] as const
}

export function getPlatformQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.platform.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlatformQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.platform.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePlatform<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.platform.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.platform.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.platform.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.platform.$get>>>>
          >,
          ReturnType<typeof getPlatformQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.platform.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPlatformQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlatformQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.platform.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlatformPlatformIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.platform)[':platformId']['$get']>>,
) {
  return ['platform', '/platform/:platformId', toValue(args)] as const
}

export function getPlatformPlatformIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.platform)[':platformId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlatformPlatformIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.platform[':platformId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlatformPlatformId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.platform)[':platformId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.platform)[':platformId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.platform)[':platformId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.platform)[':platformId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPlatformPlatformIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.platform)[':platformId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlatformPlatformIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlatformPlatformIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.platform[':platformId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlatformPlatformIdRegionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.platform)[':platformId']['region']['$get']>
  >,
) {
  return ['platform', '/platform/:platformId/region', toValue(args)] as const
}

export function getPlatformPlatformIdRegionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.platform)[':platformId']['region']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlatformPlatformIdRegionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.platform[':platformId'].region.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlatformPlatformIdRegion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.platform)[':platformId']['region']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.platform)[':platformId']['region']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.platform)[':platformId']['region']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.platform)[':platformId']['region']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPlatformPlatformIdRegionQueryKey>
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
          Awaited<ReturnType<(typeof client.platform)[':platformId']['region']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlatformPlatformIdRegionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlatformPlatformIdRegionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.platform[':platformId'].region.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getScheduleQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schedule.$get>>,
) {
  return ['schedule', '/schedule', toValue(args)] as const
}

export function getScheduleQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schedule.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getScheduleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schedule.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSchedule<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedule.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schedule.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedule.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedule.$get>>>>
          >,
          ReturnType<typeof getScheduleQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedule.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getScheduleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getScheduleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.schedule.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
