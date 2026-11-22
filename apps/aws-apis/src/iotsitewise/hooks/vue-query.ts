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

export function get_20200301Key() {
  return ['20200301'] as const
}

export function getAccessPoliciesKey() {
  return ['access-policies'] as const
}

export function getAssetModelsKey() {
  return ['asset-models'] as const
}

export function getAssetsKey() {
  return ['assets'] as const
}

export function getConfigurationKey() {
  return ['configuration'] as const
}

export function getDashboardsKey() {
  return ['dashboards'] as const
}

export function getDashboardsProjectIdKey() {
  return ['dashboards#projectId'] as const
}

export function getJobsKey() {
  return ['jobs'] as const
}

export function getLoggingKey() {
  return ['logging'] as const
}

export function getPortalsKey() {
  return ['portals'] as const
}

export function getProjectsKey() {
  return ['projects'] as const
}

export function getProjectsPortalIdKey() {
  return ['projects#portalId'] as const
}

export function getPropertiesKey() {
  return ['properties'] as const
}

export function getTagsResourceArnKey() {
  return ['tags#resourceArn'] as const
}

export function getTagsResourceArnTagKeysKey() {
  return ['tags#resourceArn&tagKeys'] as const
}

export function getTimeseriesKey() {
  return ['timeseries'] as const
}

export function getPostAssetsAssetIdAssociateMutationKey() {
  return ['assets', '/assets/:assetId/associate', 'POST'] as const
}

export function getPostAssetsAssetIdAssociateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.assets)[':assetId']['associate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.assets)[':assetId']['associate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAssetsAssetIdAssociateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.assets)[':assetId']['associate']['$post']>,
    ) {
      return parseResponse(client.assets[':assetId'].associate.$post(args, options))
    },
  })
}

export function usePostAssetsAssetIdAssociate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.assets)[':assetId']['associate']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.assets)[':assetId']['associate']['$post']>,
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
  const mutationDefaults = getPostAssetsAssetIdAssociateMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostTimeseriesAssociateAliasAssetIdPropertyIdMutationKey() {
  return ['timeseries', '/timeseries/associate/#alias&assetId&propertyId', 'POST'] as const
}

export function getPostTimeseriesAssociateAliasAssetIdPropertyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.timeseries.associate)['#alias&assetId&propertyId']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.timeseries.associate)['#alias&assetId&propertyId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTimeseriesAssociateAliasAssetIdPropertyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.timeseries.associate)['#alias&assetId&propertyId']['$post']
      >,
    ) {
      return parseResponse(
        client.timeseries.associate['#alias&assetId&propertyId'].$post(args, options),
      )
    },
  })
}

export function usePostTimeseriesAssociateAliasAssetIdPropertyId<
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
                    (typeof client.timeseries.associate)['#alias&assetId&propertyId']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.timeseries.associate)['#alias&assetId&propertyId']['$post']
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
  const mutationDefaults = getPostTimeseriesAssociateAliasAssetIdPropertyIdMutationOptions<
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

export function getPostProjectsProjectIdAssetsAssociateMutationKey() {
  return ['projects', '/projects/:projectId/assets/associate', 'POST'] as const
}

export function getPostProjectsProjectIdAssetsAssociateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.projects)[':projectId']['assets']['associate']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':projectId']['assets']['associate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectIdAssetsAssociateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':projectId']['assets']['associate']['$post']
      >,
    ) {
      return parseResponse(client.projects[':projectId'].assets.associate.$post(args, options))
    },
  })
}

export function usePostProjectsProjectIdAssetsAssociate<
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
                  ReturnType<(typeof client.projects)[':projectId']['assets']['associate']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.projects)[':projectId']['assets']['associate']['$post']>,
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
  const mutationDefaults = getPostProjectsProjectIdAssetsAssociateMutationOptions<
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

export function getPostProjectsProjectIdAssetsDisassociateMutationKey() {
  return ['projects', '/projects/:projectId/assets/disassociate', 'POST'] as const
}

export function getPostProjectsProjectIdAssetsDisassociateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.projects)[':projectId']['assets']['disassociate']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':projectId']['assets']['disassociate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectIdAssetsDisassociateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':projectId']['assets']['disassociate']['$post']
      >,
    ) {
      return parseResponse(client.projects[':projectId'].assets.disassociate.$post(args, options))
    },
  })
}

export function usePostProjectsProjectIdAssetsDisassociate<
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
                    (typeof client.projects)[':projectId']['assets']['disassociate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.projects)[':projectId']['assets']['disassociate']['$post']
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
  const mutationDefaults = getPostProjectsProjectIdAssetsDisassociateMutationOptions<
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

export function getPostPropertiesBatchAggregatesMutationKey() {
  return ['properties', '/properties/batch/aggregates', 'POST'] as const
}

export function getPostPropertiesBatchAggregatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.properties.batch.aggregates.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.properties.batch.aggregates.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPropertiesBatchAggregatesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.properties.batch.aggregates.$post>) {
      return parseResponse(client.properties.batch.aggregates.$post(args, options))
    },
  })
}

export function usePostPropertiesBatchAggregates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.properties.batch.aggregates.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.properties.batch.aggregates.$post>,
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
  const mutationDefaults = getPostPropertiesBatchAggregatesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostPropertiesBatchLatestMutationKey() {
  return ['properties', '/properties/batch/latest', 'POST'] as const
}

export function getPostPropertiesBatchLatestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.properties.batch.latest.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.properties.batch.latest.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPropertiesBatchLatestMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.properties.batch.latest.$post>) {
      return parseResponse(client.properties.batch.latest.$post(args, options))
    },
  })
}

export function usePostPropertiesBatchLatest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.properties.batch.latest.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.properties.batch.latest.$post>,
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
  const mutationDefaults = getPostPropertiesBatchLatestMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostPropertiesBatchHistoryMutationKey() {
  return ['properties', '/properties/batch/history', 'POST'] as const
}

export function getPostPropertiesBatchHistoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.properties.batch.history.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.properties.batch.history.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPropertiesBatchHistoryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.properties.batch.history.$post>) {
      return parseResponse(client.properties.batch.history.$post(args, options))
    },
  })
}

export function usePostPropertiesBatchHistory<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.properties.batch.history.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.properties.batch.history.$post>,
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
  const mutationDefaults = getPostPropertiesBatchHistoryMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostPropertiesMutationKey() {
  return ['properties', '/properties', 'POST'] as const
}

export function getPostPropertiesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.properties.$post>>>>>,
    TError,
    InferRequestType<typeof client.properties.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPropertiesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.properties.$post>) {
      return parseResponse(client.properties.$post(args, options))
    },
  })
}

export function usePostProperties<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.properties.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.properties.$post>,
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
  const mutationDefaults = getPostPropertiesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccessPoliciesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['access-policies']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['access-policies', '/access-policies', keyArgs] as const
}

export function getAccessPoliciesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['access-policies']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccessPoliciesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['access-policies'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccessPolicies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['access-policies']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['access-policies']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['access-policies']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['access-policies']['$get']>>>
            >
          >,
          ReturnType<typeof getAccessPoliciesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['access-policies']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccessPoliciesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccessPoliciesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['access-policies'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAccessPoliciesMutationKey() {
  return ['access-policies', '/access-policies', 'POST'] as const
}

export function getPostAccessPoliciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['access-policies']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['access-policies']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccessPoliciesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['access-policies']['$post']>) {
      return parseResponse(client['access-policies'].$post(args, options))
    },
  })
}

export function usePostAccessPolicies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['access-policies']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['access-policies']['$post']>,
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
  const mutationDefaults = getPostAccessPoliciesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAssetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.assets.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['assets', '/assets', keyArgs] as const
}

export function getAssetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.assets.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.assets.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAssets<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.assets.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$get>>>>>,
          ReturnType<typeof getAssetsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAssetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.assets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAssetsMutationKey() {
  return ['assets', '/assets', 'POST'] as const
}

export function getPostAssetsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$post>>>>>,
    TError,
    InferRequestType<typeof client.assets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAssetsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.assets.$post>) {
      return parseResponse(client.assets.$post(args, options))
    },
  })
}

export function usePostAssets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.assets.$post>,
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
  const mutationDefaults = getPostAssetsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAssetModelsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['asset-models']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['asset-models', '/asset-models', keyArgs] as const
}

export function getAssetModelsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['asset-models']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssetModelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['asset-models'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAssetModels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['asset-models']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['asset-models']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['asset-models']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['asset-models']['$get']>>>
            >
          >,
          ReturnType<typeof getAssetModelsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['asset-models']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAssetModelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssetModelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['asset-models'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAssetModelsMutationKey() {
  return ['asset-models', '/asset-models', 'POST'] as const
}

export function getPostAssetModelsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['asset-models']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['asset-models']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAssetModelsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['asset-models']['$post']>) {
      return parseResponse(client['asset-models'].$post(args, options))
    },
  })
}

export function usePostAssetModels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['asset-models']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['asset-models']['$post']>,
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
  const mutationDefaults = getPostAssetModelsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getJobsQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.jobs.$get>>) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['jobs', '/jobs', keyArgs] as const
}

export function getJobsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.jobs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getJobsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.jobs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useJobs<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.jobs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
          ReturnType<typeof getJobsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getJobsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getJobsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.jobs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostJobsMutationKey() {
  return ['jobs', '/jobs', 'POST'] as const
}

export function getPostJobsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$post>>>>>,
    TError,
    InferRequestType<typeof client.jobs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostJobsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.jobs.$post>) {
      return parseResponse(client.jobs.$post(args, options))
    },
  })
}

export function usePostJobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$post>>>>>,
          TError,
          InferRequestType<typeof client.jobs.$post>,
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
  const mutationDefaults = getPostJobsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostDashboardsMutationKey() {
  return ['dashboards', '/dashboards', 'POST'] as const
}

export function getPostDashboardsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.$post>>>>>,
    TError,
    InferRequestType<typeof client.dashboards.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDashboardsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.dashboards.$post>) {
      return parseResponse(client.dashboards.$post(args, options))
    },
  })
}

export function usePostDashboards<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.dashboards.$post>,
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
  const mutationDefaults = getPostDashboardsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function get20200301GatewaysQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['20200301']['gateways']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['20200301', '/20200301/gateways', keyArgs] as const
}

export function get20200301GatewaysQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['20200301']['gateways']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20200301GatewaysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['20200301'].gateways.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20200301Gateways<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['20200301']['gateways']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['20200301']['gateways']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['20200301']['gateways']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['20200301']['gateways']['$get']>>
              >
            >
          >,
          ReturnType<typeof get20200301GatewaysQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['20200301']['gateways']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20200301GatewaysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20200301GatewaysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['20200301'].gateways.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPost20200301GatewaysMutationKey() {
  return ['20200301', '/20200301/gateways', 'POST'] as const
}

export function getPost20200301GatewaysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['20200301']['gateways']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['20200301']['gateways']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20200301GatewaysMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['20200301']['gateways']['$post']>) {
      return parseResponse(client['20200301'].gateways.$post(args, options))
    },
  })
}

export function usePost20200301Gateways<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['20200301']['gateways']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['20200301']['gateways']['$post']>,
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
  const mutationDefaults = getPost20200301GatewaysMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPortalsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.portals.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['portals', '/portals', keyArgs] as const
}

export function getPortalsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.portals.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPortalsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.portals.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePortals<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.portals.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.portals.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.portals.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.portals.$get>>>>
          >,
          ReturnType<typeof getPortalsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.portals.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPortalsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPortalsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.portals.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPortalsMutationKey() {
  return ['portals', '/portals', 'POST'] as const
}

export function getPostPortalsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.portals.$post>>>>>,
    TError,
    InferRequestType<typeof client.portals.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPortalsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.portals.$post>) {
      return parseResponse(client.portals.$post(args, options))
    },
  })
}

export function usePostPortals<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.portals.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.portals.$post>,
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
  const mutationDefaults = getPostPortalsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostProjectsMutationKey() {
  return ['projects', '/projects', 'POST'] as const
}

export function getPostProjectsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$post>>>>>,
    TError,
    InferRequestType<typeof client.projects.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.projects.$post>) {
      return parseResponse(client.projects.$post(args, options))
    },
  })
}

export function usePostProjects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.projects.$post>,
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
  const mutationDefaults = getPostProjectsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccessPoliciesAccessPolicyIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['access-policies'][':accessPolicyId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['access-policies', '/access-policies/:accessPolicyId', keyArgs] as const
}

export function getAccessPoliciesAccessPolicyIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['access-policies'][':accessPolicyId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccessPoliciesAccessPolicyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['access-policies'][':accessPolicyId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccessPoliciesAccessPolicyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['access-policies'][':accessPolicyId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['access-policies'][':accessPolicyId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['access-policies'][':accessPolicyId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['access-policies'][':accessPolicyId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccessPoliciesAccessPolicyIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['access-policies'][':accessPolicyId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccessPoliciesAccessPolicyIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccessPoliciesAccessPolicyIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['access-policies'][':accessPolicyId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAccessPoliciesAccessPolicyIdMutationKey() {
  return ['access-policies', '/access-policies/:accessPolicyId', 'PUT'] as const
}

export function getPutAccessPoliciesAccessPolicyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['access-policies'][':accessPolicyId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['access-policies'][':accessPolicyId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAccessPoliciesAccessPolicyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['access-policies'][':accessPolicyId']['$put']>,
    ) {
      return parseResponse(client['access-policies'][':accessPolicyId'].$put(args, options))
    },
  })
}

export function usePutAccessPoliciesAccessPolicyId<
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
                Awaited<ReturnType<(typeof client)['access-policies'][':accessPolicyId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['access-policies'][':accessPolicyId']['$put']>,
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
  const mutationDefaults = getPutAccessPoliciesAccessPolicyIdMutationOptions<
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

export function getDeleteAccessPoliciesAccessPolicyIdMutationKey() {
  return ['access-policies', '/access-policies/:accessPolicyId', 'DELETE'] as const
}

export function getDeleteAccessPoliciesAccessPolicyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['access-policies'][':accessPolicyId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['access-policies'][':accessPolicyId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccessPoliciesAccessPolicyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['access-policies'][':accessPolicyId']['$delete']>,
    ) {
      return parseResponse(client['access-policies'][':accessPolicyId'].$delete(args, options))
    },
  })
}

export function useDeleteAccessPoliciesAccessPolicyId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client)['access-policies'][':accessPolicyId']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['access-policies'][':accessPolicyId']['$delete']>,
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
  const mutationDefaults = getDeleteAccessPoliciesAccessPolicyIdMutationOptions<
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

export function getAssetsAssetIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.assets)[':assetId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['assets', '/assets/:assetId', keyArgs] as const
}

export function getAssetsAssetIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.assets)[':assetId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssetsAssetIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.assets[':assetId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAssetsAssetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':assetId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.assets)[':assetId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':assetId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':assetId']['$get']>>>
            >
          >,
          ReturnType<typeof getAssetsAssetIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':assetId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssetsAssetIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssetsAssetIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.assets[':assetId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAssetsAssetIdMutationKey() {
  return ['assets', '/assets/:assetId', 'PUT'] as const
}

export function getPutAssetsAssetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':assetId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.assets)[':assetId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAssetsAssetIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.assets)[':assetId']['$put']>) {
      return parseResponse(client.assets[':assetId'].$put(args, options))
    },
  })
}

export function usePutAssetsAssetId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':assetId']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.assets)[':assetId']['$put']>,
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
  const mutationDefaults = getPutAssetsAssetIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteAssetsAssetIdMutationKey() {
  return ['assets', '/assets/:assetId', 'DELETE'] as const
}

export function getDeleteAssetsAssetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':assetId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.assets)[':assetId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAssetsAssetIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.assets)[':assetId']['$delete']>) {
      return parseResponse(client.assets[':assetId'].$delete(args, options))
    },
  })
}

export function useDeleteAssetsAssetId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.assets)[':assetId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.assets)[':assetId']['$delete']>,
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
  const mutationDefaults = getDeleteAssetsAssetIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAssetModelsAssetModelIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['asset-models'][':assetModelId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['asset-models', '/asset-models/:assetModelId', keyArgs] as const
}

export function getAssetModelsAssetModelIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['asset-models'][':assetModelId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssetModelsAssetModelIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['asset-models'][':assetModelId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAssetModelsAssetModelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['asset-models'][':assetModelId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['asset-models'][':assetModelId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['asset-models'][':assetModelId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['asset-models'][':assetModelId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAssetModelsAssetModelIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['asset-models'][':assetModelId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssetModelsAssetModelIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssetModelsAssetModelIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['asset-models'][':assetModelId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAssetModelsAssetModelIdMutationKey() {
  return ['asset-models', '/asset-models/:assetModelId', 'PUT'] as const
}

export function getPutAssetModelsAssetModelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['asset-models'][':assetModelId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['asset-models'][':assetModelId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAssetModelsAssetModelIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['asset-models'][':assetModelId']['$put']>,
    ) {
      return parseResponse(client['asset-models'][':assetModelId'].$put(args, options))
    },
  })
}

export function usePutAssetModelsAssetModelId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['asset-models'][':assetModelId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['asset-models'][':assetModelId']['$put']>,
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
  const mutationDefaults = getPutAssetModelsAssetModelIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteAssetModelsAssetModelIdMutationKey() {
  return ['asset-models', '/asset-models/:assetModelId', 'DELETE'] as const
}

export function getDeleteAssetModelsAssetModelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['asset-models'][':assetModelId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['asset-models'][':assetModelId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAssetModelsAssetModelIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['asset-models'][':assetModelId']['$delete']>,
    ) {
      return parseResponse(client['asset-models'][':assetModelId'].$delete(args, options))
    },
  })
}

export function useDeleteAssetModelsAssetModelId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['asset-models'][':assetModelId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['asset-models'][':assetModelId']['$delete']>,
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
  const mutationDefaults = getDeleteAssetModelsAssetModelIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDashboardsDashboardIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dashboards)[':dashboardId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['dashboards', '/dashboards/:dashboardId', keyArgs] as const
}

export function getDashboardsDashboardIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dashboards)[':dashboardId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDashboardsDashboardIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dashboards[':dashboardId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDashboardsDashboardId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dashboards)[':dashboardId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dashboards)[':dashboardId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dashboards)[':dashboardId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dashboards)[':dashboardId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDashboardsDashboardIdQueryKey>
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
          Awaited<ReturnType<(typeof client.dashboards)[':dashboardId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDashboardsDashboardIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDashboardsDashboardIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dashboards[':dashboardId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDashboardsDashboardIdMutationKey() {
  return ['dashboards', '/dashboards/:dashboardId', 'PUT'] as const
}

export function getPutDashboardsDashboardIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dashboards)[':dashboardId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dashboards)[':dashboardId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDashboardsDashboardIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.dashboards)[':dashboardId']['$put']>) {
      return parseResponse(client.dashboards[':dashboardId'].$put(args, options))
    },
  })
}

export function usePutDashboardsDashboardId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dashboards)[':dashboardId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dashboards)[':dashboardId']['$put']>,
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
  const mutationDefaults = getPutDashboardsDashboardIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteDashboardsDashboardIdMutationKey() {
  return ['dashboards', '/dashboards/:dashboardId', 'DELETE'] as const
}

export function getDeleteDashboardsDashboardIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dashboards)[':dashboardId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.dashboards)[':dashboardId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDashboardsDashboardIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dashboards)[':dashboardId']['$delete']>,
    ) {
      return parseResponse(client.dashboards[':dashboardId'].$delete(args, options))
    },
  })
}

export function useDeleteDashboardsDashboardId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.dashboards)[':dashboardId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.dashboards)[':dashboardId']['$delete']>,
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
  const mutationDefaults = getDeleteDashboardsDashboardIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function get20200301GatewaysGatewayIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['20200301']['gateways'][':gatewayId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['20200301', '/20200301/gateways/:gatewayId', keyArgs] as const
}

export function get20200301GatewaysGatewayIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['20200301']['gateways'][':gatewayId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20200301GatewaysGatewayIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['20200301'].gateways[':gatewayId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20200301GatewaysGatewayId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['20200301']['gateways'][':gatewayId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['20200301']['gateways'][':gatewayId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['20200301']['gateways'][':gatewayId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['20200301']['gateways'][':gatewayId']['$get']>>
              >
            >
          >,
          ReturnType<typeof get20200301GatewaysGatewayIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['20200301']['gateways'][':gatewayId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20200301GatewaysGatewayIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20200301GatewaysGatewayIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['20200301'].gateways[':gatewayId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPut20200301GatewaysGatewayIdMutationKey() {
  return ['20200301', '/20200301/gateways/:gatewayId', 'PUT'] as const
}

export function getPut20200301GatewaysGatewayIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['20200301']['gateways'][':gatewayId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['20200301']['gateways'][':gatewayId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPut20200301GatewaysGatewayIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['20200301']['gateways'][':gatewayId']['$put']>,
    ) {
      return parseResponse(client['20200301'].gateways[':gatewayId'].$put(args, options))
    },
  })
}

export function usePut20200301GatewaysGatewayId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['20200301']['gateways'][':gatewayId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['20200301']['gateways'][':gatewayId']['$put']>,
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
  const mutationDefaults = getPut20200301GatewaysGatewayIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDelete20200301GatewaysGatewayIdMutationKey() {
  return ['20200301', '/20200301/gateways/:gatewayId', 'DELETE'] as const
}

export function getDelete20200301GatewaysGatewayIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['20200301']['gateways'][':gatewayId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['20200301']['gateways'][':gatewayId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete20200301GatewaysGatewayIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['20200301']['gateways'][':gatewayId']['$delete']>,
    ) {
      return parseResponse(client['20200301'].gateways[':gatewayId'].$delete(args, options))
    },
  })
}

export function useDelete20200301GatewaysGatewayId<
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
                  ReturnType<(typeof client)['20200301']['gateways'][':gatewayId']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['20200301']['gateways'][':gatewayId']['$delete']>,
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
  const mutationDefaults = getDelete20200301GatewaysGatewayIdMutationOptions<
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

export function getPortalsPortalIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.portals)[':portalId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['portals', '/portals/:portalId', keyArgs] as const
}

export function getPortalsPortalIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.portals)[':portalId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPortalsPortalIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.portals[':portalId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePortalsPortalId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.portals)[':portalId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.portals)[':portalId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.portals)[':portalId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.portals)[':portalId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPortalsPortalIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.portals)[':portalId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPortalsPortalIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPortalsPortalIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.portals[':portalId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutPortalsPortalIdMutationKey() {
  return ['portals', '/portals/:portalId', 'PUT'] as const
}

export function getPutPortalsPortalIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.portals)[':portalId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.portals)[':portalId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPortalsPortalIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.portals)[':portalId']['$put']>) {
      return parseResponse(client.portals[':portalId'].$put(args, options))
    },
  })
}

export function usePutPortalsPortalId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.portals)[':portalId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.portals)[':portalId']['$put']>,
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
  const mutationDefaults = getPutPortalsPortalIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeletePortalsPortalIdMutationKey() {
  return ['portals', '/portals/:portalId', 'DELETE'] as const
}

export function getDeletePortalsPortalIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.portals)[':portalId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.portals)[':portalId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePortalsPortalIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.portals)[':portalId']['$delete']>) {
      return parseResponse(client.portals[':portalId'].$delete(args, options))
    },
  })
}

export function useDeletePortalsPortalId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.portals)[':portalId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.portals)[':portalId']['$delete']>,
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
  const mutationDefaults = getDeletePortalsPortalIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getProjectsProjectIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':projectId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['projects', '/projects/:projectId', keyArgs] as const
}

export function getProjectsProjectIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':projectId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':projectId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':projectId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.projects)[':projectId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':projectId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':projectId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':projectId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':projectId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutProjectsProjectIdMutationKey() {
  return ['projects', '/projects/:projectId', 'PUT'] as const
}

export function getPutProjectsProjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':projectId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':projectId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutProjectsProjectIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.projects)[':projectId']['$put']>) {
      return parseResponse(client.projects[':projectId'].$put(args, options))
    },
  })
}

export function usePutProjectsProjectId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':projectId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.projects)[':projectId']['$put']>,
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
  const mutationDefaults = getPutProjectsProjectIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteProjectsProjectIdMutationKey() {
  return ['projects', '/projects/:projectId', 'DELETE'] as const
}

export function getDeleteProjectsProjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.projects)[':projectId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProjectsProjectIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.projects)[':projectId']['$delete']>) {
      return parseResponse(client.projects[':projectId'].$delete(args, options))
    },
  })
}

export function useDeleteProjectsProjectId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.projects)[':projectId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.projects)[':projectId']['$delete']>,
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
  const mutationDefaults = getDeleteProjectsProjectIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostTimeseriesDeleteIndexMutationKey() {
  return ['timeseries', '/timeseries/delete/', 'POST'] as const
}

export function getPostTimeseriesDeleteIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.timeseries.delete.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.timeseries.delete.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTimeseriesDeleteIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.timeseries.delete.index.$post>) {
      return parseResponse(client.timeseries.delete.index.$post(args, options))
    },
  })
}

export function usePostTimeseriesDeleteIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.timeseries.delete.index.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.timeseries.delete.index.$post>,
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
  const mutationDefaults = getPostTimeseriesDeleteIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAssetsAssetIdPropertiesPropertyIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.assets)[':assetId']['properties'][':propertyId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['assets', '/assets/:assetId/properties/:propertyId', keyArgs] as const
}

export function getAssetsAssetIdPropertiesPropertyIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.assets)[':assetId']['properties'][':propertyId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssetsAssetIdPropertiesPropertyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.assets[':assetId'].properties[':propertyId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAssetsAssetIdPropertiesPropertyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.assets)[':assetId']['properties'][':propertyId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.assets)[':assetId']['properties'][':propertyId']['$get']>
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
                    (typeof client.assets)[':assetId']['properties'][':propertyId']['$get']
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
                    (typeof client.assets)[':assetId']['properties'][':propertyId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAssetsAssetIdPropertiesPropertyIdQueryKey>
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
            ReturnType<(typeof client.assets)[':assetId']['properties'][':propertyId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssetsAssetIdPropertiesPropertyIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssetsAssetIdPropertiesPropertyIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.assets[':assetId'].properties[':propertyId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAssetsAssetIdPropertiesPropertyIdMutationKey() {
  return ['assets', '/assets/:assetId/properties/:propertyId', 'PUT'] as const
}

export function getPutAssetsAssetIdPropertiesPropertyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.assets)[':assetId']['properties'][':propertyId']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.assets)[':assetId']['properties'][':propertyId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAssetsAssetIdPropertiesPropertyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.assets)[':assetId']['properties'][':propertyId']['$put']
      >,
    ) {
      return parseResponse(client.assets[':assetId'].properties[':propertyId'].$put(args, options))
    },
  })
}

export function usePutAssetsAssetIdPropertiesPropertyId<
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
                    (typeof client.assets)[':assetId']['properties'][':propertyId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.assets)[':assetId']['properties'][':propertyId']['$put']>,
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
  const mutationDefaults = getPutAssetsAssetIdPropertiesPropertyIdMutationOptions<
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

export function getJobsJobIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.jobs)[':jobId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['jobs', '/jobs/:jobId', keyArgs] as const
}

export function getJobsJobIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.jobs)[':jobId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getJobsJobIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.jobs[':jobId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useJobsJobId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.jobs)[':jobId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$get']>>>
            >
          >,
          ReturnType<typeof getJobsJobIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getJobsJobIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getJobsJobIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.jobs[':jobId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConfigurationAccountEncryptionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.configuration.account.encryption.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['configuration', '/configuration/account/encryption', keyArgs] as const
}

export function getConfigurationAccountEncryptionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.configuration.account.encryption.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConfigurationAccountEncryptionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.configuration.account.encryption.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConfigurationAccountEncryption<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.configuration.account.encryption.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.configuration.account.encryption.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.configuration.account.encryption.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.configuration.account.encryption.$get>>
              >
            >
          >,
          ReturnType<typeof getConfigurationAccountEncryptionQueryKey>
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
          Awaited<ReturnType<typeof client.configuration.account.encryption.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConfigurationAccountEncryptionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConfigurationAccountEncryptionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.configuration.account.encryption.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostConfigurationAccountEncryptionMutationKey() {
  return ['configuration', '/configuration/account/encryption', 'POST'] as const
}

export function getPostConfigurationAccountEncryptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.configuration.account.encryption.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.configuration.account.encryption.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConfigurationAccountEncryptionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.configuration.account.encryption.$post>) {
      return parseResponse(client.configuration.account.encryption.$post(args, options))
    },
  })
}

export function usePostConfigurationAccountEncryption<
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
                Awaited<ReturnType<typeof client.configuration.account.encryption.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.configuration.account.encryption.$post>,
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
  const mutationDefaults = getPostConfigurationAccountEncryptionMutationOptions<
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

export function get20200301GatewaysGatewayIdCapabilityCapabilityNamespaceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['20200301']['gateways'][':gatewayId']['capability'][':capabilityNamespace']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '20200301',
    '/20200301/gateways/:gatewayId/capability/:capabilityNamespace',
    keyArgs,
  ] as const
}

export function get20200301GatewaysGatewayIdCapabilityCapabilityNamespaceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['20200301']['gateways'][':gatewayId']['capability'][':capabilityNamespace']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get20200301GatewaysGatewayIdCapabilityCapabilityNamespaceQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['20200301'].gateways[':gatewayId'].capability[':capabilityNamespace'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function use20200301GatewaysGatewayIdCapabilityCapabilityNamespace<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['20200301']['gateways'][':gatewayId']['capability'][':capabilityNamespace']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['20200301']['gateways'][':gatewayId']['capability'][':capabilityNamespace']['$get']
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
                    (typeof client)['20200301']['gateways'][':gatewayId']['capability'][':capabilityNamespace']['$get']
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
                    (typeof client)['20200301']['gateways'][':gatewayId']['capability'][':capabilityNamespace']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20200301GatewaysGatewayIdCapabilityCapabilityNamespaceQueryKey>
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
              (typeof client)['20200301']['gateways'][':gatewayId']['capability'][':capabilityNamespace']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20200301GatewaysGatewayIdCapabilityCapabilityNamespaceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20200301GatewaysGatewayIdCapabilityCapabilityNamespaceQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['20200301'].gateways[':gatewayId'].capability[':capabilityNamespace'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getLoggingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.logging.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['logging', '/logging', keyArgs] as const
}

export function getLoggingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.logging.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLoggingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.logging.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLogging<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logging.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.logging.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logging.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logging.$get>>>>
          >,
          ReturnType<typeof getLoggingQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logging.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLoggingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLoggingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.logging.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutLoggingMutationKey() {
  return ['logging', '/logging', 'PUT'] as const
}

export function getPutLoggingMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logging.$put>>>>>,
    TError,
    InferRequestType<typeof client.logging.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutLoggingMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.logging.$put>) {
      return parseResponse(client.logging.$put(args, options))
    },
  })
}

export function usePutLogging<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logging.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.logging.$put>,
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
  const mutationDefaults = getPutLoggingMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getConfigurationAccountStorageQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.configuration.account.storage.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['configuration', '/configuration/account/storage', keyArgs] as const
}

export function getConfigurationAccountStorageQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.configuration.account.storage.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConfigurationAccountStorageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.configuration.account.storage.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConfigurationAccountStorage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.configuration.account.storage.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.configuration.account.storage.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.configuration.account.storage.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.configuration.account.storage.$get>>
              >
            >
          >,
          ReturnType<typeof getConfigurationAccountStorageQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.configuration.account.storage.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConfigurationAccountStorageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConfigurationAccountStorageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.configuration.account.storage.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostConfigurationAccountStorageMutationKey() {
  return ['configuration', '/configuration/account/storage', 'POST'] as const
}

export function getPostConfigurationAccountStorageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.configuration.account.storage.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.configuration.account.storage.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConfigurationAccountStorageMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.configuration.account.storage.$post>) {
      return parseResponse(client.configuration.account.storage.$post(args, options))
    },
  })
}

export function usePostConfigurationAccountStorage<
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
                Awaited<ReturnType<typeof client.configuration.account.storage.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.configuration.account.storage.$post>,
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
  const mutationDefaults = getPostConfigurationAccountStorageMutationOptions<
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

export function getTimeseriesDescribeIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.timeseries.describe.index.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['timeseries', '/timeseries/describe/', keyArgs] as const
}

export function getTimeseriesDescribeIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.timeseries.describe.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTimeseriesDescribeIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.timeseries.describe.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTimeseriesDescribeIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.timeseries.describe.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.timeseries.describe.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.timeseries.describe.index.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.timeseries.describe.index.$get>>
              >
            >
          >,
          ReturnType<typeof getTimeseriesDescribeIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.timeseries.describe.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTimeseriesDescribeIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTimeseriesDescribeIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.timeseries.describe.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAssetsAssetIdDisassociateMutationKey() {
  return ['assets', '/assets/:assetId/disassociate', 'POST'] as const
}

export function getPostAssetsAssetIdDisassociateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.assets)[':assetId']['disassociate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.assets)[':assetId']['disassociate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAssetsAssetIdDisassociateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.assets)[':assetId']['disassociate']['$post']>,
    ) {
      return parseResponse(client.assets[':assetId'].disassociate.$post(args, options))
    },
  })
}

export function usePostAssetsAssetIdDisassociate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.assets)[':assetId']['disassociate']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.assets)[':assetId']['disassociate']['$post']>,
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
  const mutationDefaults = getPostAssetsAssetIdDisassociateMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostTimeseriesDisassociateAliasAssetIdPropertyIdMutationKey() {
  return ['timeseries', '/timeseries/disassociate/#alias&assetId&propertyId', 'POST'] as const
}

export function getPostTimeseriesDisassociateAliasAssetIdPropertyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.timeseries.disassociate)['#alias&assetId&propertyId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.timeseries.disassociate)['#alias&assetId&propertyId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTimeseriesDisassociateAliasAssetIdPropertyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.timeseries.disassociate)['#alias&assetId&propertyId']['$post']
      >,
    ) {
      return parseResponse(
        client.timeseries.disassociate['#alias&assetId&propertyId'].$post(args, options),
      )
    },
  })
}

export function usePostTimeseriesDisassociateAliasAssetIdPropertyId<
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
                    (typeof client.timeseries.disassociate)['#alias&assetId&propertyId']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.timeseries.disassociate)['#alias&assetId&propertyId']['$post']
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
  const mutationDefaults = getPostTimeseriesDisassociateAliasAssetIdPropertyIdMutationOptions<
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

export function getPropertiesAggregatesAggregateTypesResolutionStartDateEndDateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.properties)['aggregates#aggregateTypes&resolution&startDate&endDate']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'properties',
    '/properties/aggregates#aggregateTypes&resolution&startDate&endDate',
    keyArgs,
  ] as const
}

export function getPropertiesAggregatesAggregateTypesResolutionStartDateEndDateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.properties)['aggregates#aggregateTypes&resolution&startDate&endDate']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getPropertiesAggregatesAggregateTypesResolutionStartDateEndDateQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.properties['aggregates#aggregateTypes&resolution&startDate&endDate'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function usePropertiesAggregatesAggregateTypesResolutionStartDateEndDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.properties)['aggregates#aggregateTypes&resolution&startDate&endDate']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.properties)['aggregates#aggregateTypes&resolution&startDate&endDate']['$get']
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
                    (typeof client.properties)['aggregates#aggregateTypes&resolution&startDate&endDate']['$get']
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
                    (typeof client.properties)['aggregates#aggregateTypes&resolution&startDate&endDate']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getPropertiesAggregatesAggregateTypesResolutionStartDateEndDateQueryKey>
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
              (typeof client.properties)['aggregates#aggregateTypes&resolution&startDate&endDate']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPropertiesAggregatesAggregateTypesResolutionStartDateEndDateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getPropertiesAggregatesAggregateTypesResolutionStartDateEndDateQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.properties['aggregates#aggregateTypes&resolution&startDate&endDate'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPropertiesLatestQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.properties.latest.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['properties', '/properties/latest', keyArgs] as const
}

export function getPropertiesLatestQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.properties.latest.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPropertiesLatestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.properties.latest.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePropertiesLatest<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.properties.latest.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.properties.latest.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.properties.latest.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.properties.latest.$get>>>
            >
          >,
          ReturnType<typeof getPropertiesLatestQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.properties.latest.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPropertiesLatestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPropertiesLatestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.properties.latest.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPropertiesHistoryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.properties.history.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['properties', '/properties/history', keyArgs] as const
}

export function getPropertiesHistoryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.properties.history.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPropertiesHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.properties.history.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePropertiesHistory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.properties.history.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.properties.history.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.properties.history.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.properties.history.$get>>>
            >
          >,
          ReturnType<typeof getPropertiesHistoryQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.properties.history.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPropertiesHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPropertiesHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.properties.history.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPropertiesInterpolatedStartTimeInSecondsEndTimeInSecondsQualityIntervalInSecondsTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.properties)['interpolated#startTimeInSeconds&endTimeInSeconds&quality&intervalInSeconds&type']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'properties',
    '/properties/interpolated#startTimeInSeconds&endTimeInSeconds&quality&intervalInSeconds&type',
    keyArgs,
  ] as const
}

export function getPropertiesInterpolatedStartTimeInSecondsEndTimeInSecondsQualityIntervalInSecondsTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.properties)['interpolated#startTimeInSeconds&endTimeInSeconds&quality&intervalInSeconds&type']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getPropertiesInterpolatedStartTimeInSecondsEndTimeInSecondsQualityIntervalInSecondsTypeQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.properties[
          'interpolated#startTimeInSeconds&endTimeInSeconds&quality&intervalInSeconds&type'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePropertiesInterpolatedStartTimeInSecondsEndTimeInSecondsQualityIntervalInSecondsType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.properties)['interpolated#startTimeInSeconds&endTimeInSeconds&quality&intervalInSeconds&type']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.properties)['interpolated#startTimeInSeconds&endTimeInSeconds&quality&intervalInSeconds&type']['$get']
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
                    (typeof client.properties)['interpolated#startTimeInSeconds&endTimeInSeconds&quality&intervalInSeconds&type']['$get']
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
                    (typeof client.properties)['interpolated#startTimeInSeconds&endTimeInSeconds&quality&intervalInSeconds&type']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getPropertiesInterpolatedStartTimeInSecondsEndTimeInSecondsQualityIntervalInSecondsTypeQueryKey
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
              (typeof client.properties)['interpolated#startTimeInSeconds&endTimeInSeconds&quality&intervalInSeconds&type']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getPropertiesInterpolatedStartTimeInSecondsEndTimeInSecondsQualityIntervalInSecondsTypeQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getPropertiesInterpolatedStartTimeInSecondsEndTimeInSecondsQualityIntervalInSecondsTypeQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.properties[
            'interpolated#startTimeInSeconds&endTimeInSeconds&quality&intervalInSeconds&type'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getAssetModelsAssetModelIdPropertiesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['asset-models'][':assetModelId']['properties']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['asset-models', '/asset-models/:assetModelId/properties', keyArgs] as const
}

export function getAssetModelsAssetModelIdPropertiesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['asset-models'][':assetModelId']['properties']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssetModelsAssetModelIdPropertiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['asset-models'][':assetModelId'].properties.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAssetModelsAssetModelIdProperties<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['asset-models'][':assetModelId']['properties']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['asset-models'][':assetModelId']['properties']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['asset-models'][':assetModelId']['properties']['$get']>
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
                  ReturnType<(typeof client)['asset-models'][':assetModelId']['properties']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAssetModelsAssetModelIdPropertiesQueryKey>
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
            ReturnType<(typeof client)['asset-models'][':assetModelId']['properties']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssetModelsAssetModelIdPropertiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssetModelsAssetModelIdPropertiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['asset-models'][':assetModelId'].properties.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAssetsAssetIdPropertiesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.assets)[':assetId']['properties']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['assets', '/assets/:assetId/properties', keyArgs] as const
}

export function getAssetsAssetIdPropertiesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.assets)[':assetId']['properties']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssetsAssetIdPropertiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.assets[':assetId'].properties.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAssetsAssetIdProperties<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.assets)[':assetId']['properties']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.assets)[':assetId']['properties']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.assets)[':assetId']['properties']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.assets)[':assetId']['properties']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAssetsAssetIdPropertiesQueryKey>
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
          Awaited<ReturnType<(typeof client.assets)[':assetId']['properties']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssetsAssetIdPropertiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssetsAssetIdPropertiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.assets[':assetId'].properties.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAssetsAssetIdAssetRelationshipsTraversalTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.assets)[':assetId']['assetRelationships#traversalType']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['assets', '/assets/:assetId/assetRelationships#traversalType', keyArgs] as const
}

export function getAssetsAssetIdAssetRelationshipsTraversalTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.assets)[':assetId']['assetRelationships#traversalType']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssetsAssetIdAssetRelationshipsTraversalTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.assets[':assetId']['assetRelationships#traversalType'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAssetsAssetIdAssetRelationshipsTraversalType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.assets)[':assetId']['assetRelationships#traversalType']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.assets)[':assetId']['assetRelationships#traversalType']['$get']>
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
                    (typeof client.assets)[':assetId']['assetRelationships#traversalType']['$get']
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
                    (typeof client.assets)[':assetId']['assetRelationships#traversalType']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAssetsAssetIdAssetRelationshipsTraversalTypeQueryKey>
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
              (typeof client.assets)[':assetId']['assetRelationships#traversalType']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssetsAssetIdAssetRelationshipsTraversalTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssetsAssetIdAssetRelationshipsTraversalTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.assets[':assetId']['assetRelationships#traversalType'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAssetsAssetIdHierarchiesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.assets)[':assetId']['hierarchies']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['assets', '/assets/:assetId/hierarchies', keyArgs] as const
}

export function getAssetsAssetIdHierarchiesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.assets)[':assetId']['hierarchies']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssetsAssetIdHierarchiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.assets[':assetId'].hierarchies.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAssetsAssetIdHierarchies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.assets)[':assetId']['hierarchies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.assets)[':assetId']['hierarchies']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.assets)[':assetId']['hierarchies']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.assets)[':assetId']['hierarchies']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAssetsAssetIdHierarchiesQueryKey>
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
          Awaited<ReturnType<(typeof client.assets)[':assetId']['hierarchies']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssetsAssetIdHierarchiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssetsAssetIdHierarchiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.assets[':assetId'].hierarchies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDashboardsProjectIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['dashboards#projectId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['dashboards#projectId', '/dashboards#projectId', keyArgs] as const
}

export function getDashboardsProjectIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['dashboards#projectId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDashboardsProjectIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['dashboards#projectId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDashboardsProjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['dashboards#projectId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['dashboards#projectId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dashboards#projectId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['dashboards#projectId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDashboardsProjectIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dashboards#projectId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDashboardsProjectIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDashboardsProjectIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['dashboards#projectId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProjectsProjectIdAssetsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['assets']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['projects', '/projects/:projectId/assets', keyArgs] as const
}

export function getProjectsProjectIdAssetsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['assets']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectIdAssetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':projectId'].assets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsProjectIdAssets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['assets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':projectId']['assets']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':projectId']['assets']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':projectId']['assets']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectsProjectIdAssetsQueryKey>
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
          Awaited<ReturnType<(typeof client.projects)[':projectId']['assets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdAssetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectIdAssetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':projectId'].assets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProjectsPortalIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['projects#portalId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['projects#portalId', '/projects#portalId', keyArgs] as const
}

export function getProjectsPortalIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['projects#portalId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsPortalIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['projects#portalId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsPortalId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['projects#portalId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['projects#portalId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['projects#portalId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['projects#portalId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectsPortalIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['projects#portalId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsPortalIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsPortalIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['projects#portalId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTagsResourceArnQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['tags#resourceArn']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['tags#resourceArn', '/tags#resourceArn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['tags#resourceArn']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsResourceArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['tags#resourceArn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['tags#resourceArn']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$get']>>>
            >
          >,
          ReturnType<typeof getTagsResourceArnQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagsResourceArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['tags#resourceArn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTagsResourceArnMutationKey() {
  return ['tags#resourceArn', '/tags#resourceArn', 'POST'] as const
}

export function getPostTagsResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['tags#resourceArn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsResourceArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['tags#resourceArn']['$post']>) {
      return parseResponse(client['tags#resourceArn'].$post(args, options))
    },
  })
}

export function usePostTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['tags#resourceArn']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['tags#resourceArn']['$post']>,
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
  const mutationDefaults = getPostTagsResourceArnMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTimeseriesIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.timeseries.index.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['timeseries', '/timeseries/', keyArgs] as const
}

export function getTimeseriesIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.timeseries.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTimeseriesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.timeseries.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTimeseriesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timeseries.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.timeseries.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.timeseries.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.timeseries.index.$get>>>
            >
          >,
          ReturnType<typeof getTimeseriesIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timeseries.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTimeseriesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTimeseriesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.timeseries.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteTagsResourceArnTagKeysMutationKey() {
  return ['tags#resourceArn&tagKeys', '/tags#resourceArn&tagKeys', 'DELETE'] as const
}

export function getDeleteTagsResourceArnTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['tags#resourceArn&tagKeys']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['tags#resourceArn&tagKeys']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTagsResourceArnTagKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['tags#resourceArn&tagKeys']['$delete']>,
    ) {
      return parseResponse(client['tags#resourceArn&tagKeys'].$delete(args, options))
    },
  })
}

export function useDeleteTagsResourceArnTagKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['tags#resourceArn&tagKeys']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['tags#resourceArn&tagKeys']['$delete']>,
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
  const mutationDefaults = getDeleteTagsResourceArnTagKeysMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPost20200301GatewaysGatewayIdCapabilityMutationKey() {
  return ['20200301', '/20200301/gateways/:gatewayId/capability', 'POST'] as const
}

export function getPost20200301GatewaysGatewayIdCapabilityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['20200301']['gateways'][':gatewayId']['capability']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['20200301']['gateways'][':gatewayId']['capability']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20200301GatewaysGatewayIdCapabilityMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['20200301']['gateways'][':gatewayId']['capability']['$post']
      >,
    ) {
      return parseResponse(
        client['20200301'].gateways[':gatewayId'].capability.$post(args, options),
      )
    },
  })
}

export function usePost20200301GatewaysGatewayIdCapability<
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
                    (typeof client)['20200301']['gateways'][':gatewayId']['capability']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['20200301']['gateways'][':gatewayId']['capability']['$post']
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
  const mutationDefaults = getPost20200301GatewaysGatewayIdCapabilityMutationOptions<
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
