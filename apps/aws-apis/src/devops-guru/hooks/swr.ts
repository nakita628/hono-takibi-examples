import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAccountsKey() {
  return ['accounts'] as const
}

export function getAnomaliesKey() {
  return ['anomalies'] as const
}

export function getChannelsKey() {
  return ['channels'] as const
}

export function getCostEstimationKey() {
  return ['cost-estimation'] as const
}

export function getEventSourcesKey() {
  return ['event-sources'] as const
}

export function getEventsKey() {
  return ['events'] as const
}

export function getFeedbackKey() {
  return ['feedback'] as const
}

export function getInsightsKey() {
  return ['insights'] as const
}

export function getListLogAnomaliesKey() {
  return ['list-log-anomalies'] as const
}

export function getMonitoredResourcesKey() {
  return ['monitoredResources'] as const
}

export function getOrganizationKey() {
  return ['organization'] as const
}

export function getRecommendationsKey() {
  return ['recommendations'] as const
}

export function getResourceCollectionsKey() {
  return ['resource-collections'] as const
}

export function getServiceIntegrationsKey() {
  return ['service-integrations'] as const
}

export function getPutChannelsKey() {
  return ['channels', '/channels', 'PUT'] as const
}

export function usePutChannels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.channels.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutChannelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.channels.$put> }) =>
        parseResponse(client.channels.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostChannelsKey() {
  return ['channels', '/channels', 'POST'] as const
}

export function usePostChannels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.channels.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChannelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.channels.$post> }) =>
        parseResponse(client.channels.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInsightsIdKey(
  args: InferRequestType<(typeof client.insights)[':Id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['insights', '/insights/:Id', keyArgs] as const
}

export function useGetInsightsId<TError = unknown>(
  args: InferRequestType<(typeof client.insights)[':Id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.insights)[':Id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetInsightsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.insights)[':Id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.insights[':Id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInsightsId<TError = unknown>(
  args: InferRequestType<(typeof client.insights)[':Id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.insights)[':Id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetInsightsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.insights)[':Id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.insights[':Id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteInsightsIdKey() {
  return ['insights', '/insights/:Id', 'DELETE'] as const
}

export function useDeleteInsightsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.insights)[':Id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.insights)[':Id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteInsightsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.insights)[':Id']['$delete']> },
      ) => parseResponse(client.insights[':Id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsHealthKey(
  args: InferRequestType<typeof client.accounts.health.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/health', keyArgs] as const
}

export function useGetAccountsHealth<TError = unknown>(
  args: InferRequestType<typeof client.accounts.health.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.health.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountsHealthKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.health.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts.health.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsHealth<TError = unknown>(
  args: InferRequestType<typeof client.accounts.health.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.health.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountsHealthKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.health.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts.health.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountsOverviewKey() {
  return ['accounts', '/accounts/overview', 'POST'] as const
}

export function usePostAccountsOverview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.overview.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.accounts.overview.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsOverviewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.accounts.overview.$post> }) =>
        parseResponse(client.accounts.overview.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAnomaliesIdKey(
  args: InferRequestType<(typeof client.anomalies)[':Id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['anomalies', '/anomalies/:Id', keyArgs] as const
}

export function useGetAnomaliesId<TError = unknown>(
  args: InferRequestType<(typeof client.anomalies)[':Id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.anomalies)[':Id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAnomaliesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.anomalies)[':Id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.anomalies[':Id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnomaliesId<TError = unknown>(
  args: InferRequestType<(typeof client.anomalies)[':Id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.anomalies)[':Id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAnomaliesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.anomalies)[':Id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.anomalies[':Id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutEventSourcesKey() {
  return ['event-sources', '/event-sources', 'PUT'] as const
}

export function usePutEventSources<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['event-sources']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['event-sources']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEventSourcesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['event-sources']['$put']> },
      ) => parseResponse(client['event-sources'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEventSourcesKey() {
  return ['event-sources', '/event-sources', 'POST'] as const
}

export function usePostEventSources<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['event-sources']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['event-sources']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEventSourcesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['event-sources']['$post']> },
      ) => parseResponse(client['event-sources'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutFeedbackKey() {
  return ['feedback', '/feedback', 'PUT'] as const
}

export function usePutFeedback<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feedback.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.feedback.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutFeedbackKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.feedback.$put> }) =>
        parseResponse(client.feedback.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFeedbackKey() {
  return ['feedback', '/feedback', 'POST'] as const
}

export function usePostFeedback<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feedback.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.feedback.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFeedbackKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.feedback.$post> }) =>
        parseResponse(client.feedback.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOrganizationHealthKey() {
  return ['organization', '/organization/health', 'POST'] as const
}

export function usePostOrganizationHealth<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.health.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.organization.health.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationHealthKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.organization.health.$post> }) =>
        parseResponse(client.organization.health.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOrganizationOverviewKey() {
  return ['organization', '/organization/overview', 'POST'] as const
}

export function usePostOrganizationOverview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.overview.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.organization.overview.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationOverviewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.organization.overview.$post> },
      ) => parseResponse(client.organization.overview.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOrganizationHealthResourceCollectionKey() {
  return ['organization', '/organization/health/resource-collection', 'POST'] as const
}

export function usePostOrganizationHealthResourceCollection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organization.health)['resource-collection']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organization.health)['resource-collection']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationHealthResourceCollectionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.organization.health)['resource-collection']['$post']>
        },
      ) =>
        parseResponse(client.organization.health['resource-collection'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsHealthResourceCollectionResourceCollectionTypeKey(
  args: InferRequestType<
    (typeof client.accounts.health)['resource-collection'][':ResourceCollectionType']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'accounts',
    '/accounts/health/resource-collection/:ResourceCollectionType',
    keyArgs,
  ] as const
}

export function useGetAccountsHealthResourceCollectionResourceCollectionType<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts.health)['resource-collection'][':ResourceCollectionType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts.health)['resource-collection'][':ResourceCollectionType']['$get']
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
        ? getGetAccountsHealthResourceCollectionResourceCollectionTypeKey(args)
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
                (typeof client.accounts.health)['resource-collection'][':ResourceCollectionType']['$get']
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
          client.accounts.health['resource-collection'][':ResourceCollectionType'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsHealthResourceCollectionResourceCollectionType<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.accounts.health)['resource-collection'][':ResourceCollectionType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts.health)['resource-collection'][':ResourceCollectionType']['$get']
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
        ? getGetAccountsHealthResourceCollectionResourceCollectionTypeKey(args)
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
                (typeof client.accounts.health)['resource-collection'][':ResourceCollectionType']['$get']
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
          client.accounts.health['resource-collection'][':ResourceCollectionType'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetServiceIntegrationsKey(
  args: InferRequestType<(typeof client)['service-integrations']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['service-integrations', '/service-integrations', keyArgs] as const
}

export function useGetServiceIntegrations<TError = unknown>(
  args: InferRequestType<(typeof client)['service-integrations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['service-integrations']['$get']>>>
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
        ? getGetServiceIntegrationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['service-integrations']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['service-integrations'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServiceIntegrations<TError = unknown>(
  args: InferRequestType<(typeof client)['service-integrations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['service-integrations']['$get']>>>
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
        ? getGetServiceIntegrationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['service-integrations']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['service-integrations'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutServiceIntegrationsKey() {
  return ['service-integrations', '/service-integrations', 'PUT'] as const
}

export function usePutServiceIntegrations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['service-integrations']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['service-integrations']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutServiceIntegrationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['service-integrations']['$put']> },
      ) => parseResponse(client['service-integrations'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCostEstimationKey(
  args: InferRequestType<(typeof client)['cost-estimation']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['cost-estimation', '/cost-estimation', keyArgs] as const
}

export function useGetCostEstimation<TError = unknown>(
  args: InferRequestType<(typeof client)['cost-estimation']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['cost-estimation']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetCostEstimationKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['cost-estimation']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['cost-estimation'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCostEstimation<TError = unknown>(
  args: InferRequestType<(typeof client)['cost-estimation']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['cost-estimation']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetCostEstimationKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['cost-estimation']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['cost-estimation'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutCostEstimationKey() {
  return ['cost-estimation', '/cost-estimation', 'PUT'] as const
}

export function usePutCostEstimation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['cost-estimation']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['cost-estimation']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCostEstimationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['cost-estimation']['$put']> },
      ) => parseResponse(client['cost-estimation'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetResourceCollectionsResourceCollectionTypeKey(
  args: InferRequestType<
    (typeof client)['resource-collections'][':ResourceCollectionType']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['resource-collections', '/resource-collections/:ResourceCollectionType', keyArgs] as const
}

export function useGetResourceCollectionsResourceCollectionType<TError = unknown>(
  args: InferRequestType<
    (typeof client)['resource-collections'][':ResourceCollectionType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['resource-collections'][':ResourceCollectionType']['$get']>
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
        ? getGetResourceCollectionsResourceCollectionTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['resource-collections'][':ResourceCollectionType']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['resource-collections'][':ResourceCollectionType'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResourceCollectionsResourceCollectionType<TError = unknown>(
  args: InferRequestType<
    (typeof client)['resource-collections'][':ResourceCollectionType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['resource-collections'][':ResourceCollectionType']['$get']>
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
        ? getGetResourceCollectionsResourceCollectionTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['resource-collections'][':ResourceCollectionType']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['resource-collections'][':ResourceCollectionType'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAnomaliesInsightInsightIdKey() {
  return ['anomalies', '/anomalies/insight/:InsightId', 'POST'] as const
}

export function usePostAnomaliesInsightInsightId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anomalies.insight)[':InsightId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.anomalies.insight)[':InsightId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnomaliesInsightInsightIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.anomalies.insight)[':InsightId']['$post']> },
      ) => parseResponse(client.anomalies.insight[':InsightId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListLogAnomaliesKey() {
  return ['list-log-anomalies', '/list-log-anomalies', 'POST'] as const
}

export function usePostListLogAnomalies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['list-log-anomalies']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['list-log-anomalies']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListLogAnomaliesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['list-log-anomalies']['$post']> },
      ) => parseResponse(client['list-log-anomalies'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEventsKey() {
  return ['events', '/events', 'POST'] as const
}

export function usePostEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.events.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEventsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.events.$post> }) =>
        parseResponse(client.events.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInsightsKey() {
  return ['insights', '/insights', 'POST'] as const
}

export function usePostInsights<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.insights.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.insights.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInsightsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.insights.$post> }) =>
        parseResponse(client.insights.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMonitoredResourcesKey() {
  return ['monitoredResources', '/monitoredResources', 'POST'] as const
}

export function usePostMonitoredResources<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.monitoredResources.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.monitoredResources.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMonitoredResourcesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.monitoredResources.$post> }) =>
        parseResponse(client.monitoredResources.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOrganizationInsightsKey() {
  return ['organization', '/organization/insights', 'POST'] as const
}

export function usePostOrganizationInsights<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.insights.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.organization.insights.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationInsightsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.organization.insights.$post> },
      ) => parseResponse(client.organization.insights.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRecommendationsKey() {
  return ['recommendations', '/recommendations', 'POST'] as const
}

export function usePostRecommendations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.recommendations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRecommendationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.recommendations.$post> }) =>
        parseResponse(client.recommendations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteChannelsIdKey() {
  return ['channels', '/channels/:Id', 'DELETE'] as const
}

export function useDeleteChannelsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':Id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.channels)[':Id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteChannelsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.channels)[':Id']['$delete']> },
      ) => parseResponse(client.channels[':Id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInsightsSearchKey() {
  return ['insights', '/insights/search', 'POST'] as const
}

export function usePostInsightsSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.insights.search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.insights.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInsightsSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.insights.search.$post> }) =>
        parseResponse(client.insights.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOrganizationInsightsSearchKey() {
  return ['organization', '/organization/insights/search', 'POST'] as const
}

export function usePostOrganizationInsightsSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.insights.search.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.organization.insights.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationInsightsSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.organization.insights.search.$post> },
      ) => parseResponse(client.organization.insights.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutResourceCollectionsKey() {
  return ['resource-collections', '/resource-collections', 'PUT'] as const
}

export function usePutResourceCollections<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['resource-collections']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['resource-collections']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutResourceCollectionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['resource-collections']['$put']> },
      ) => parseResponse(client['resource-collections'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
