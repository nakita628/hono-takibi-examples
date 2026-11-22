import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostAssetsAssetIdAssociateKey() {
  return ['assets', '/assets/:assetId/associate', 'POST'] as const
}

export function usePostAssetsAssetIdAssociate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.assets)[':assetId']['associate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.assets)[':assetId']['associate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssetsAssetIdAssociateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.assets)[':assetId']['associate']['$post']> },
      ) => parseResponse(client.assets[':assetId'].associate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTimeseriesAssociateAliasAssetIdPropertyIdKey() {
  return ['timeseries', '/timeseries/associate/#alias&assetId&propertyId', 'POST'] as const
}

export function usePostTimeseriesAssociateAliasAssetIdPropertyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.timeseries.associate)['#alias&assetId&propertyId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTimeseriesAssociateAliasAssetIdPropertyIdKey()
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
            (typeof client.timeseries.associate)['#alias&assetId&propertyId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.timeseries.associate['#alias&assetId&propertyId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostProjectsProjectIdAssetsAssociateKey() {
  return ['projects', '/projects/:projectId/assets/associate', 'POST'] as const
}

export function usePostProjectsProjectIdAssetsAssociate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.projects)[':projectId']['assets']['associate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectsProjectIdAssetsAssociateKey()
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
            (typeof client.projects)[':projectId']['assets']['associate']['$post']
          >
        },
      ) => parseResponse(client.projects[':projectId'].assets.associate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProjectsProjectIdAssetsDisassociateKey() {
  return ['projects', '/projects/:projectId/assets/disassociate', 'POST'] as const
}

export function usePostProjectsProjectIdAssetsDisassociate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.projects)[':projectId']['assets']['disassociate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectsProjectIdAssetsDisassociateKey()
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
            (typeof client.projects)[':projectId']['assets']['disassociate']['$post']
          >
        },
      ) =>
        parseResponse(client.projects[':projectId'].assets.disassociate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPropertiesBatchAggregatesKey() {
  return ['properties', '/properties/batch/aggregates', 'POST'] as const
}

export function usePostPropertiesBatchAggregates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.properties.batch.aggregates.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.properties.batch.aggregates.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPropertiesBatchAggregatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.properties.batch.aggregates.$post> },
      ) => parseResponse(client.properties.batch.aggregates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPropertiesBatchLatestKey() {
  return ['properties', '/properties/batch/latest', 'POST'] as const
}

export function usePostPropertiesBatchLatest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.properties.batch.latest.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.properties.batch.latest.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPropertiesBatchLatestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.properties.batch.latest.$post> },
      ) => parseResponse(client.properties.batch.latest.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPropertiesBatchHistoryKey() {
  return ['properties', '/properties/batch/history', 'POST'] as const
}

export function usePostPropertiesBatchHistory<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.properties.batch.history.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.properties.batch.history.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPropertiesBatchHistoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.properties.batch.history.$post> },
      ) => parseResponse(client.properties.batch.history.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPropertiesKey() {
  return ['properties', '/properties', 'POST'] as const
}

export function usePostProperties<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.properties.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.properties.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPropertiesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.properties.$post> }) =>
        parseResponse(client.properties.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccessPoliciesKey(
  args: InferRequestType<(typeof client)['access-policies']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['access-policies', '/access-policies', keyArgs] as const
}

export function useGetAccessPolicies<TError = unknown>(
  args: InferRequestType<(typeof client)['access-policies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['access-policies']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAccessPoliciesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['access-policies']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['access-policies'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccessPolicies<TError = unknown>(
  args: InferRequestType<(typeof client)['access-policies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['access-policies']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAccessPoliciesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['access-policies']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['access-policies'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccessPoliciesKey() {
  return ['access-policies', '/access-policies', 'POST'] as const
}

export function usePostAccessPolicies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['access-policies']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['access-policies']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccessPoliciesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['access-policies']['$post']> },
      ) => parseResponse(client['access-policies'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAssetsKey(args: InferRequestType<typeof client.assets.$get>) {
  const { header: _, ...keyArgs } = args
  return ['assets', '/assets', keyArgs] as const
}

export function useGetAssets<TError = unknown>(
  args: InferRequestType<typeof client.assets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAssetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.assets.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetAssets<TError = unknown>(
  args: InferRequestType<typeof client.assets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAssetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.assets.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostAssetsKey() {
  return ['assets', '/assets', 'POST'] as const
}

export function usePostAssets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.assets.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.assets.$post> }) =>
        parseResponse(client.assets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAssetModelsKey(
  args: InferRequestType<(typeof client)['asset-models']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['asset-models', '/asset-models', keyArgs] as const
}

export function useGetAssetModels<TError = unknown>(
  args: InferRequestType<(typeof client)['asset-models']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['asset-models']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAssetModelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['asset-models']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['asset-models'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAssetModels<TError = unknown>(
  args: InferRequestType<(typeof client)['asset-models']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['asset-models']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAssetModelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['asset-models']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['asset-models'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAssetModelsKey() {
  return ['asset-models', '/asset-models', 'POST'] as const
}

export function usePostAssetModels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['asset-models']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['asset-models']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssetModelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['asset-models']['$post']> },
      ) => parseResponse(client['asset-models'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetJobsKey(args: InferRequestType<typeof client.jobs.$get>) {
  const { header: _, ...keyArgs } = args
  return ['jobs', '/jobs', keyArgs] as const
}

export function useGetJobs<TError = unknown>(
  args: InferRequestType<typeof client.jobs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetJobsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.jobs.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetJobs<TError = unknown>(
  args: InferRequestType<typeof client.jobs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetJobsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.jobs.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostJobsKey() {
  return ['jobs', '/jobs', 'POST'] as const
}

export function usePostJobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.jobs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostJobsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.jobs.$post> }) =>
        parseResponse(client.jobs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDashboardsKey() {
  return ['dashboards', '/dashboards', 'POST'] as const
}

export function usePostDashboards<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.dashboards.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDashboardsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.dashboards.$post> }) =>
        parseResponse(client.dashboards.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet20200301GatewaysKey(
  args: InferRequestType<(typeof client)['20200301']['gateways']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['20200301', '/20200301/gateways', keyArgs] as const
}

export function useGet20200301Gateways<TError = unknown>(
  args: InferRequestType<(typeof client)['20200301']['gateways']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['20200301']['gateways']['$get']>>>
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
        ? getGet20200301GatewaysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['20200301']['gateways']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['20200301'].gateways.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200301Gateways<TError = unknown>(
  args: InferRequestType<(typeof client)['20200301']['gateways']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['20200301']['gateways']['$get']>>>
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
        ? getGet20200301GatewaysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['20200301']['gateways']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['20200301'].gateways.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost20200301GatewaysKey() {
  return ['20200301', '/20200301/gateways', 'POST'] as const
}

export function usePost20200301Gateways<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['20200301']['gateways']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['20200301']['gateways']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20200301GatewaysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['20200301']['gateways']['$post']> },
      ) => parseResponse(client['20200301'].gateways.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPortalsKey(args: InferRequestType<typeof client.portals.$get>) {
  const { header: _, ...keyArgs } = args
  return ['portals', '/portals', keyArgs] as const
}

export function useGetPortals<TError = unknown>(
  args: InferRequestType<typeof client.portals.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.portals.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPortalsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.portals.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.portals.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetPortals<TError = unknown>(
  args: InferRequestType<typeof client.portals.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.portals.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPortalsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.portals.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.portals.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostPortalsKey() {
  return ['portals', '/portals', 'POST'] as const
}

export function usePostPortals<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.portals.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.portals.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPortalsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.portals.$post> }) =>
        parseResponse(client.portals.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProjectsKey() {
  return ['projects', '/projects', 'POST'] as const
}

export function usePostProjects<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.projects.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.projects.$post> }) =>
        parseResponse(client.projects.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccessPoliciesAccessPolicyIdKey(
  args: InferRequestType<(typeof client)['access-policies'][':accessPolicyId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['access-policies', '/access-policies/:accessPolicyId', keyArgs] as const
}

export function useGetAccessPoliciesAccessPolicyId<TError = unknown>(
  args: InferRequestType<(typeof client)['access-policies'][':accessPolicyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['access-policies'][':accessPolicyId']['$get']>>
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
        ? getGetAccessPoliciesAccessPolicyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['access-policies'][':accessPolicyId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['access-policies'][':accessPolicyId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccessPoliciesAccessPolicyId<TError = unknown>(
  args: InferRequestType<(typeof client)['access-policies'][':accessPolicyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['access-policies'][':accessPolicyId']['$get']>>
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
        ? getGetAccessPoliciesAccessPolicyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['access-policies'][':accessPolicyId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['access-policies'][':accessPolicyId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAccessPoliciesAccessPolicyIdKey() {
  return ['access-policies', '/access-policies/:accessPolicyId', 'PUT'] as const
}

export function usePutAccessPoliciesAccessPolicyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['access-policies'][':accessPolicyId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['access-policies'][':accessPolicyId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccessPoliciesAccessPolicyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['access-policies'][':accessPolicyId']['$put']> },
      ) => parseResponse(client['access-policies'][':accessPolicyId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccessPoliciesAccessPolicyIdKey() {
  return ['access-policies', '/access-policies/:accessPolicyId', 'DELETE'] as const
}

export function useDeleteAccessPoliciesAccessPolicyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['access-policies'][':accessPolicyId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['access-policies'][':accessPolicyId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccessPoliciesAccessPolicyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['access-policies'][':accessPolicyId']['$delete']>
        },
      ) => parseResponse(client['access-policies'][':accessPolicyId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAssetsAssetIdKey(
  args: InferRequestType<(typeof client.assets)[':assetId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['assets', '/assets/:assetId', keyArgs] as const
}

export function useGetAssetsAssetId<TError = unknown>(
  args: InferRequestType<(typeof client.assets)[':assetId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':assetId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAssetsAssetIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':assetId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.assets[':assetId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAssetsAssetId<TError = unknown>(
  args: InferRequestType<(typeof client.assets)[':assetId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':assetId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAssetsAssetIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':assetId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.assets[':assetId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAssetsAssetIdKey() {
  return ['assets', '/assets/:assetId', 'PUT'] as const
}

export function usePutAssetsAssetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':assetId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.assets)[':assetId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAssetsAssetIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.assets)[':assetId']['$put']> },
      ) => parseResponse(client.assets[':assetId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAssetsAssetIdKey() {
  return ['assets', '/assets/:assetId', 'DELETE'] as const
}

export function useDeleteAssetsAssetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':assetId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.assets)[':assetId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAssetsAssetIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.assets)[':assetId']['$delete']> },
      ) => parseResponse(client.assets[':assetId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAssetModelsAssetModelIdKey(
  args: InferRequestType<(typeof client)['asset-models'][':assetModelId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['asset-models', '/asset-models/:assetModelId', keyArgs] as const
}

export function useGetAssetModelsAssetModelId<TError = unknown>(
  args: InferRequestType<(typeof client)['asset-models'][':assetModelId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['asset-models'][':assetModelId']['$get']>>
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
        ? getGetAssetModelsAssetModelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['asset-models'][':assetModelId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['asset-models'][':assetModelId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAssetModelsAssetModelId<TError = unknown>(
  args: InferRequestType<(typeof client)['asset-models'][':assetModelId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['asset-models'][':assetModelId']['$get']>>
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
        ? getGetAssetModelsAssetModelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['asset-models'][':assetModelId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['asset-models'][':assetModelId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAssetModelsAssetModelIdKey() {
  return ['asset-models', '/asset-models/:assetModelId', 'PUT'] as const
}

export function usePutAssetModelsAssetModelId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['asset-models'][':assetModelId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['asset-models'][':assetModelId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAssetModelsAssetModelIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['asset-models'][':assetModelId']['$put']> },
      ) => parseResponse(client['asset-models'][':assetModelId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAssetModelsAssetModelIdKey() {
  return ['asset-models', '/asset-models/:assetModelId', 'DELETE'] as const
}

export function useDeleteAssetModelsAssetModelId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['asset-models'][':assetModelId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['asset-models'][':assetModelId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAssetModelsAssetModelIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['asset-models'][':assetModelId']['$delete']> },
      ) => parseResponse(client['asset-models'][':assetModelId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDashboardsDashboardIdKey(
  args: InferRequestType<(typeof client.dashboards)[':dashboardId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['dashboards', '/dashboards/:dashboardId', keyArgs] as const
}

export function useGetDashboardsDashboardId<TError = unknown>(
  args: InferRequestType<(typeof client.dashboards)[':dashboardId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dashboards)[':dashboardId']['$get']>>
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
        ? getGetDashboardsDashboardIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dashboards)[':dashboardId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dashboards[':dashboardId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDashboardsDashboardId<TError = unknown>(
  args: InferRequestType<(typeof client.dashboards)[':dashboardId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dashboards)[':dashboardId']['$get']>>
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
        ? getGetDashboardsDashboardIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dashboards)[':dashboardId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dashboards[':dashboardId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDashboardsDashboardIdKey() {
  return ['dashboards', '/dashboards/:dashboardId', 'PUT'] as const
}

export function usePutDashboardsDashboardId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dashboards)[':dashboardId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dashboards)[':dashboardId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDashboardsDashboardIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.dashboards)[':dashboardId']['$put']> },
      ) => parseResponse(client.dashboards[':dashboardId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDashboardsDashboardIdKey() {
  return ['dashboards', '/dashboards/:dashboardId', 'DELETE'] as const
}

export function useDeleteDashboardsDashboardId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dashboards)[':dashboardId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.dashboards)[':dashboardId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDashboardsDashboardIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.dashboards)[':dashboardId']['$delete']> },
      ) => parseResponse(client.dashboards[':dashboardId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet20200301GatewaysGatewayIdKey(
  args: InferRequestType<(typeof client)['20200301']['gateways'][':gatewayId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['20200301', '/20200301/gateways/:gatewayId', keyArgs] as const
}

export function useGet20200301GatewaysGatewayId<TError = unknown>(
  args: InferRequestType<(typeof client)['20200301']['gateways'][':gatewayId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['20200301']['gateways'][':gatewayId']['$get']>>
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
        ? getGet20200301GatewaysGatewayIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['20200301']['gateways'][':gatewayId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['20200301'].gateways[':gatewayId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200301GatewaysGatewayId<TError = unknown>(
  args: InferRequestType<(typeof client)['20200301']['gateways'][':gatewayId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['20200301']['gateways'][':gatewayId']['$get']>>
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
        ? getGet20200301GatewaysGatewayIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['20200301']['gateways'][':gatewayId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['20200301'].gateways[':gatewayId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPut20200301GatewaysGatewayIdKey() {
  return ['20200301', '/20200301/gateways/:gatewayId', 'PUT'] as const
}

export function usePut20200301GatewaysGatewayId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['20200301']['gateways'][':gatewayId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['20200301']['gateways'][':gatewayId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut20200301GatewaysGatewayIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['20200301']['gateways'][':gatewayId']['$put']> },
      ) => parseResponse(client['20200301'].gateways[':gatewayId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDelete20200301GatewaysGatewayIdKey() {
  return ['20200301', '/20200301/gateways/:gatewayId', 'DELETE'] as const
}

export function useDelete20200301GatewaysGatewayId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['20200301']['gateways'][':gatewayId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['20200301']['gateways'][':gatewayId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20200301GatewaysGatewayIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['20200301']['gateways'][':gatewayId']['$delete']>
        },
      ) => parseResponse(client['20200301'].gateways[':gatewayId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPortalsPortalIdKey(
  args: InferRequestType<(typeof client.portals)[':portalId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['portals', '/portals/:portalId', keyArgs] as const
}

export function useGetPortalsPortalId<TError = unknown>(
  args: InferRequestType<(typeof client.portals)[':portalId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.portals)[':portalId']['$get']>>>
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
        ? getGetPortalsPortalIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.portals)[':portalId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.portals[':portalId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPortalsPortalId<TError = unknown>(
  args: InferRequestType<(typeof client.portals)[':portalId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.portals)[':portalId']['$get']>>>
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
        ? getGetPortalsPortalIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.portals)[':portalId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.portals[':portalId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutPortalsPortalIdKey() {
  return ['portals', '/portals/:portalId', 'PUT'] as const
}

export function usePutPortalsPortalId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.portals)[':portalId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.portals)[':portalId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPortalsPortalIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.portals)[':portalId']['$put']> },
      ) => parseResponse(client.portals[':portalId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeletePortalsPortalIdKey() {
  return ['portals', '/portals/:portalId', 'DELETE'] as const
}

export function useDeletePortalsPortalId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.portals)[':portalId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.portals)[':portalId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePortalsPortalIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.portals)[':portalId']['$delete']> },
      ) => parseResponse(client.portals[':portalId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsProjectIdKey(
  args: InferRequestType<(typeof client.projects)[':projectId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['projects', '/projects/:projectId', keyArgs] as const
}

export function useGetProjectsProjectId<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':projectId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':projectId']['$get']>>>
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
        ? getGetProjectsProjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':projectId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects[':projectId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectId<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':projectId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':projectId']['$get']>>>
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
        ? getGetProjectsProjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':projectId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects[':projectId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutProjectsProjectIdKey() {
  return ['projects', '/projects/:projectId', 'PUT'] as const
}

export function usePutProjectsProjectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':projectId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.projects)[':projectId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutProjectsProjectIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.projects)[':projectId']['$put']> },
      ) => parseResponse(client.projects[':projectId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteProjectsProjectIdKey() {
  return ['projects', '/projects/:projectId', 'DELETE'] as const
}

export function useDeleteProjectsProjectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.projects)[':projectId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProjectsProjectIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.projects)[':projectId']['$delete']> },
      ) => parseResponse(client.projects[':projectId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTimeseriesDeleteIndexKey() {
  return ['timeseries', '/timeseries/delete/', 'POST'] as const
}

export function usePostTimeseriesDeleteIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.timeseries.delete.index.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.timeseries.delete.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTimeseriesDeleteIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.timeseries.delete.index.$post> },
      ) => parseResponse(client.timeseries.delete.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAssetsAssetIdPropertiesPropertyIdKey(
  args: InferRequestType<(typeof client.assets)[':assetId']['properties'][':propertyId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['assets', '/assets/:assetId/properties/:propertyId', keyArgs] as const
}

export function useGetAssetsAssetIdPropertiesPropertyId<TError = unknown>(
  args: InferRequestType<(typeof client.assets)[':assetId']['properties'][':propertyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.assets)[':assetId']['properties'][':propertyId']['$get']>
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
        ? getGetAssetsAssetIdPropertiesPropertyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.assets)[':assetId']['properties'][':propertyId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.assets[':assetId'].properties[':propertyId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAssetsAssetIdPropertiesPropertyId<TError = unknown>(
  args: InferRequestType<(typeof client.assets)[':assetId']['properties'][':propertyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.assets)[':assetId']['properties'][':propertyId']['$get']>
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
        ? getGetAssetsAssetIdPropertiesPropertyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.assets)[':assetId']['properties'][':propertyId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.assets[':assetId'].properties[':propertyId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAssetsAssetIdPropertiesPropertyIdKey() {
  return ['assets', '/assets/:assetId/properties/:propertyId', 'PUT'] as const
}

export function usePutAssetsAssetIdPropertiesPropertyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.assets)[':assetId']['properties'][':propertyId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAssetsAssetIdPropertiesPropertyIdKey()
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
            (typeof client.assets)[':assetId']['properties'][':propertyId']['$put']
          >
        },
      ) =>
        parseResponse(client.assets[':assetId'].properties[':propertyId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetJobsJobIdKey(args: InferRequestType<(typeof client.jobs)[':jobId']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['jobs', '/jobs/:jobId', keyArgs] as const
}

export function useGetJobsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.jobs)[':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetJobsJobIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.jobs[':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJobsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.jobs)[':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetJobsJobIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':jobId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.jobs[':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetConfigurationAccountEncryptionKey(
  args: InferRequestType<typeof client.configuration.account.encryption.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['configuration', '/configuration/account/encryption', keyArgs] as const
}

export function useGetConfigurationAccountEncryption<TError = unknown>(
  args: InferRequestType<typeof client.configuration.account.encryption.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.configuration.account.encryption.$get>>
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
        ? getGetConfigurationAccountEncryptionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.configuration.account.encryption.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.configuration.account.encryption.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConfigurationAccountEncryption<TError = unknown>(
  args: InferRequestType<typeof client.configuration.account.encryption.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.configuration.account.encryption.$get>>
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
        ? getGetConfigurationAccountEncryptionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.configuration.account.encryption.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.configuration.account.encryption.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostConfigurationAccountEncryptionKey() {
  return ['configuration', '/configuration/account/encryption', 'POST'] as const
}

export function usePostConfigurationAccountEncryption<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.configuration.account.encryption.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.configuration.account.encryption.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConfigurationAccountEncryptionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.configuration.account.encryption.$post> },
      ) => parseResponse(client.configuration.account.encryption.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet20200301GatewaysGatewayIdCapabilityCapabilityNamespaceKey(
  args: InferRequestType<
    (typeof client)['20200301']['gateways'][':gatewayId']['capability'][':capabilityNamespace']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    '20200301',
    '/20200301/gateways/:gatewayId/capability/:capabilityNamespace',
    keyArgs,
  ] as const
}

export function useGet20200301GatewaysGatewayIdCapabilityCapabilityNamespace<TError = unknown>(
  args: InferRequestType<
    (typeof client)['20200301']['gateways'][':gatewayId']['capability'][':capabilityNamespace']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet20200301GatewaysGatewayIdCapabilityCapabilityNamespaceKey(args)
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
                (typeof client)['20200301']['gateways'][':gatewayId']['capability'][':capabilityNamespace']['$get']
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
          client['20200301'].gateways[':gatewayId'].capability[':capabilityNamespace'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200301GatewaysGatewayIdCapabilityCapabilityNamespace<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['20200301']['gateways'][':gatewayId']['capability'][':capabilityNamespace']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGet20200301GatewaysGatewayIdCapabilityCapabilityNamespaceKey(args)
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
                (typeof client)['20200301']['gateways'][':gatewayId']['capability'][':capabilityNamespace']['$get']
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
          client['20200301'].gateways[':gatewayId'].capability[':capabilityNamespace'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetLoggingKey(args: InferRequestType<typeof client.logging.$get>) {
  const { header: _, ...keyArgs } = args
  return ['logging', '/logging', keyArgs] as const
}

export function useGetLogging<TError = unknown>(
  args: InferRequestType<typeof client.logging.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logging.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLoggingKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logging.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.logging.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetLogging<TError = unknown>(
  args: InferRequestType<typeof client.logging.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logging.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLoggingKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logging.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.logging.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPutLoggingKey() {
  return ['logging', '/logging', 'PUT'] as const
}

export function usePutLogging<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logging.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.logging.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutLoggingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.logging.$put> }) =>
        parseResponse(client.logging.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConfigurationAccountStorageKey(
  args: InferRequestType<typeof client.configuration.account.storage.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['configuration', '/configuration/account/storage', keyArgs] as const
}

export function useGetConfigurationAccountStorage<TError = unknown>(
  args: InferRequestType<typeof client.configuration.account.storage.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.configuration.account.storage.$get>>
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
        ? getGetConfigurationAccountStorageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.configuration.account.storage.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.configuration.account.storage.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConfigurationAccountStorage<TError = unknown>(
  args: InferRequestType<typeof client.configuration.account.storage.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.configuration.account.storage.$get>>
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
        ? getGetConfigurationAccountStorageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.configuration.account.storage.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.configuration.account.storage.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostConfigurationAccountStorageKey() {
  return ['configuration', '/configuration/account/storage', 'POST'] as const
}

export function usePostConfigurationAccountStorage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.configuration.account.storage.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.configuration.account.storage.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConfigurationAccountStorageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.configuration.account.storage.$post> },
      ) => parseResponse(client.configuration.account.storage.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTimeseriesDescribeIndexKey(
  args: InferRequestType<typeof client.timeseries.describe.index.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['timeseries', '/timeseries/describe/', keyArgs] as const
}

export function useGetTimeseriesDescribeIndex<TError = unknown>(
  args: InferRequestType<typeof client.timeseries.describe.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.timeseries.describe.index.$get>>>
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
        ? getGetTimeseriesDescribeIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.timeseries.describe.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.timeseries.describe.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTimeseriesDescribeIndex<TError = unknown>(
  args: InferRequestType<typeof client.timeseries.describe.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.timeseries.describe.index.$get>>>
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
        ? getGetTimeseriesDescribeIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.timeseries.describe.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.timeseries.describe.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAssetsAssetIdDisassociateKey() {
  return ['assets', '/assets/:assetId/disassociate', 'POST'] as const
}

export function usePostAssetsAssetIdDisassociate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.assets)[':assetId']['disassociate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.assets)[':assetId']['disassociate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssetsAssetIdDisassociateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.assets)[':assetId']['disassociate']['$post']> },
      ) => parseResponse(client.assets[':assetId'].disassociate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTimeseriesDisassociateAliasAssetIdPropertyIdKey() {
  return ['timeseries', '/timeseries/disassociate/#alias&assetId&propertyId', 'POST'] as const
}

export function usePostTimeseriesDisassociateAliasAssetIdPropertyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.timeseries.disassociate)['#alias&assetId&propertyId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTimeseriesDisassociateAliasAssetIdPropertyIdKey()
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
            (typeof client.timeseries.disassociate)['#alias&assetId&propertyId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.timeseries.disassociate['#alias&assetId&propertyId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPropertiesAggregatesAggregateTypesResolutionStartDateEndDateKey(
  args: InferRequestType<
    (typeof client.properties)['aggregates#aggregateTypes&resolution&startDate&endDate']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'properties',
    '/properties/aggregates#aggregateTypes&resolution&startDate&endDate',
    keyArgs,
  ] as const
}

export function useGetPropertiesAggregatesAggregateTypesResolutionStartDateEndDate<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.properties)['aggregates#aggregateTypes&resolution&startDate&endDate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetPropertiesAggregatesAggregateTypesResolutionStartDateEndDateKey(args)
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
                (typeof client.properties)['aggregates#aggregateTypes&resolution&startDate&endDate']['$get']
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
          client.properties['aggregates#aggregateTypes&resolution&startDate&endDate'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPropertiesAggregatesAggregateTypesResolutionStartDateEndDate<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.properties)['aggregates#aggregateTypes&resolution&startDate&endDate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetPropertiesAggregatesAggregateTypesResolutionStartDateEndDateKey(args)
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
                (typeof client.properties)['aggregates#aggregateTypes&resolution&startDate&endDate']['$get']
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
          client.properties['aggregates#aggregateTypes&resolution&startDate&endDate'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetPropertiesLatestKey(
  args: InferRequestType<typeof client.properties.latest.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['properties', '/properties/latest', keyArgs] as const
}

export function useGetPropertiesLatest<TError = unknown>(
  args: InferRequestType<typeof client.properties.latest.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.properties.latest.$get>>>>
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
        ? getGetPropertiesLatestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.properties.latest.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.properties.latest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPropertiesLatest<TError = unknown>(
  args: InferRequestType<typeof client.properties.latest.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.properties.latest.$get>>>>
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
        ? getGetPropertiesLatestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.properties.latest.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.properties.latest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPropertiesHistoryKey(
  args: InferRequestType<typeof client.properties.history.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['properties', '/properties/history', keyArgs] as const
}

export function useGetPropertiesHistory<TError = unknown>(
  args: InferRequestType<typeof client.properties.history.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.properties.history.$get>>>>
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
        ? getGetPropertiesHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.properties.history.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.properties.history.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPropertiesHistory<TError = unknown>(
  args: InferRequestType<typeof client.properties.history.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.properties.history.$get>>>>
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
        ? getGetPropertiesHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.properties.history.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.properties.history.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPropertiesInterpolatedStartTimeInSecondsEndTimeInSecondsQualityIntervalInSecondsTypeKey(
  args: InferRequestType<
    (typeof client.properties)['interpolated#startTimeInSeconds&endTimeInSeconds&quality&intervalInSeconds&type']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'properties',
    '/properties/interpolated#startTimeInSeconds&endTimeInSeconds&quality&intervalInSeconds&type',
    keyArgs,
  ] as const
}

export function useGetPropertiesInterpolatedStartTimeInSecondsEndTimeInSecondsQualityIntervalInSecondsType<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.properties)['interpolated#startTimeInSeconds&endTimeInSeconds&quality&intervalInSeconds&type']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetPropertiesInterpolatedStartTimeInSecondsEndTimeInSecondsQualityIntervalInSecondsTypeKey(
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
                (typeof client.properties)['interpolated#startTimeInSeconds&endTimeInSeconds&quality&intervalInSeconds&type']['$get']
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
          client.properties[
            'interpolated#startTimeInSeconds&endTimeInSeconds&quality&intervalInSeconds&type'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPropertiesInterpolatedStartTimeInSecondsEndTimeInSecondsQualityIntervalInSecondsType<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.properties)['interpolated#startTimeInSeconds&endTimeInSeconds&quality&intervalInSeconds&type']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetPropertiesInterpolatedStartTimeInSecondsEndTimeInSecondsQualityIntervalInSecondsTypeKey(
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
                (typeof client.properties)['interpolated#startTimeInSeconds&endTimeInSeconds&quality&intervalInSeconds&type']['$get']
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
          client.properties[
            'interpolated#startTimeInSeconds&endTimeInSeconds&quality&intervalInSeconds&type'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAssetModelsAssetModelIdPropertiesKey(
  args: InferRequestType<(typeof client)['asset-models'][':assetModelId']['properties']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['asset-models', '/asset-models/:assetModelId/properties', keyArgs] as const
}

export function useGetAssetModelsAssetModelIdProperties<TError = unknown>(
  args: InferRequestType<(typeof client)['asset-models'][':assetModelId']['properties']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['asset-models'][':assetModelId']['properties']['$get']>
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
        ? getGetAssetModelsAssetModelIdPropertiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['asset-models'][':assetModelId']['properties']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['asset-models'][':assetModelId'].properties.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAssetModelsAssetModelIdProperties<TError = unknown>(
  args: InferRequestType<(typeof client)['asset-models'][':assetModelId']['properties']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['asset-models'][':assetModelId']['properties']['$get']>
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
        ? getGetAssetModelsAssetModelIdPropertiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['asset-models'][':assetModelId']['properties']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['asset-models'][':assetModelId'].properties.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAssetsAssetIdPropertiesKey(
  args: InferRequestType<(typeof client.assets)[':assetId']['properties']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['assets', '/assets/:assetId/properties', keyArgs] as const
}

export function useGetAssetsAssetIdProperties<TError = unknown>(
  args: InferRequestType<(typeof client.assets)[':assetId']['properties']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.assets)[':assetId']['properties']['$get']>>
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
        ? getGetAssetsAssetIdPropertiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.assets)[':assetId']['properties']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.assets[':assetId'].properties.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAssetsAssetIdProperties<TError = unknown>(
  args: InferRequestType<(typeof client.assets)[':assetId']['properties']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.assets)[':assetId']['properties']['$get']>>
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
        ? getGetAssetsAssetIdPropertiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.assets)[':assetId']['properties']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.assets[':assetId'].properties.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAssetsAssetIdAssetRelationshipsTraversalTypeKey(
  args: InferRequestType<
    (typeof client.assets)[':assetId']['assetRelationships#traversalType']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['assets', '/assets/:assetId/assetRelationships#traversalType', keyArgs] as const
}

export function useGetAssetsAssetIdAssetRelationshipsTraversalType<TError = unknown>(
  args: InferRequestType<
    (typeof client.assets)[':assetId']['assetRelationships#traversalType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAssetsAssetIdAssetRelationshipsTraversalTypeKey(args)
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
                (typeof client.assets)[':assetId']['assetRelationships#traversalType']['$get']
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
          client.assets[':assetId']['assetRelationships#traversalType'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAssetsAssetIdAssetRelationshipsTraversalType<TError = unknown>(
  args: InferRequestType<
    (typeof client.assets)[':assetId']['assetRelationships#traversalType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetAssetsAssetIdAssetRelationshipsTraversalTypeKey(args)
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
                (typeof client.assets)[':assetId']['assetRelationships#traversalType']['$get']
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
          client.assets[':assetId']['assetRelationships#traversalType'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAssetsAssetIdHierarchiesKey(
  args: InferRequestType<(typeof client.assets)[':assetId']['hierarchies']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['assets', '/assets/:assetId/hierarchies', keyArgs] as const
}

export function useGetAssetsAssetIdHierarchies<TError = unknown>(
  args: InferRequestType<(typeof client.assets)[':assetId']['hierarchies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.assets)[':assetId']['hierarchies']['$get']>>
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
        ? getGetAssetsAssetIdHierarchiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.assets)[':assetId']['hierarchies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.assets[':assetId'].hierarchies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAssetsAssetIdHierarchies<TError = unknown>(
  args: InferRequestType<(typeof client.assets)[':assetId']['hierarchies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.assets)[':assetId']['hierarchies']['$get']>>
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
        ? getGetAssetsAssetIdHierarchiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.assets)[':assetId']['hierarchies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.assets[':assetId'].hierarchies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDashboardsProjectIdKey(
  args: InferRequestType<(typeof client)['dashboards#projectId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['dashboards#projectId', '/dashboards#projectId', keyArgs] as const
}

export function useGetDashboardsProjectId<TError = unknown>(
  args: InferRequestType<(typeof client)['dashboards#projectId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['dashboards#projectId']['$get']>>>
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
        ? getGetDashboardsProjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['dashboards#projectId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['dashboards#projectId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDashboardsProjectId<TError = unknown>(
  args: InferRequestType<(typeof client)['dashboards#projectId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['dashboards#projectId']['$get']>>>
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
        ? getGetDashboardsProjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['dashboards#projectId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['dashboards#projectId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProjectsProjectIdAssetsKey(
  args: InferRequestType<(typeof client.projects)[':projectId']['assets']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['projects', '/projects/:projectId/assets', keyArgs] as const
}

export function useGetProjectsProjectIdAssets<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':projectId']['assets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['assets']['$get']>>
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
        ? getGetProjectsProjectIdAssetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['assets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects[':projectId'].assets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsProjectIdAssets<TError = unknown>(
  args: InferRequestType<(typeof client.projects)[':projectId']['assets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['assets']['$get']>>
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
        ? getGetProjectsProjectIdAssetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['assets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.projects[':projectId'].assets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProjectsPortalIdKey(
  args: InferRequestType<(typeof client)['projects#portalId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['projects#portalId', '/projects#portalId', keyArgs] as const
}

export function useGetProjectsPortalId<TError = unknown>(
  args: InferRequestType<(typeof client)['projects#portalId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['projects#portalId']['$get']>>>
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
        ? getGetProjectsPortalIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['projects#portalId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['projects#portalId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsPortalId<TError = unknown>(
  args: InferRequestType<(typeof client)['projects#portalId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['projects#portalId']['$get']>>>
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
        ? getGetProjectsPortalIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['projects#portalId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['projects#portalId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTagsResourceArnKey(
  args: InferRequestType<(typeof client)['tags#resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags#resourceArn', '/tags#resourceArn', keyArgs] as const
}

export function useGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client)['tags#resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$get']>>>
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
        ? getGetTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['tags#resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client)['tags#resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$get']>>>
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
        ? getGetTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['tags#resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTagsResourceArnKey() {
  return ['tags#resourceArn', '/tags#resourceArn', 'POST'] as const
}

export function usePostTagsResourceArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['tags#resourceArn']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['tags#resourceArn']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagsResourceArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['tags#resourceArn']['$post']> },
      ) => parseResponse(client['tags#resourceArn'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTimeseriesIndexKey(
  args: InferRequestType<typeof client.timeseries.index.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['timeseries', '/timeseries/', keyArgs] as const
}

export function useGetTimeseriesIndex<TError = unknown>(
  args: InferRequestType<typeof client.timeseries.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timeseries.index.$get>>>>
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
        ? getGetTimeseriesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timeseries.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.timeseries.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTimeseriesIndex<TError = unknown>(
  args: InferRequestType<typeof client.timeseries.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timeseries.index.$get>>>>
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
        ? getGetTimeseriesIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timeseries.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.timeseries.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteTagsResourceArnTagKeysKey() {
  return ['tags#resourceArn&tagKeys', '/tags#resourceArn&tagKeys', 'DELETE'] as const
}

export function useDeleteTagsResourceArnTagKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['tags#resourceArn&tagKeys']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['tags#resourceArn&tagKeys']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTagsResourceArnTagKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['tags#resourceArn&tagKeys']['$delete']> },
      ) => parseResponse(client['tags#resourceArn&tagKeys'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost20200301GatewaysGatewayIdCapabilityKey() {
  return ['20200301', '/20200301/gateways/:gatewayId/capability', 'POST'] as const
}

export function usePost20200301GatewaysGatewayIdCapability<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['20200301']['gateways'][':gatewayId']['capability']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20200301GatewaysGatewayIdCapabilityKey()
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
            (typeof client)['20200301']['gateways'][':gatewayId']['capability']['$post']
          >
        },
      ) =>
        parseResponse(
          client['20200301'].gateways[':gatewayId'].capability.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
