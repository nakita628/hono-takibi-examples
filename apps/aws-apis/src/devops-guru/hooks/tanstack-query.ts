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

export function getPutChannelsMutationKey() {
  return ['channels', '/channels', 'PUT'] as const
}

export function getPutChannelsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$put>>>>>,
    TError,
    InferRequestType<typeof client.channels.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutChannelsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.channels.$put>) {
      return parseResponse(client.channels.$put(args, options))
    },
  })
}

export function usePutChannels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$put>>>>>,
        TError,
        InferRequestType<typeof client.channels.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutChannelsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostChannelsMutationKey() {
  return ['channels', '/channels', 'POST'] as const
}

export function getPostChannelsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$post>>>>>,
    TError,
    InferRequestType<typeof client.channels.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.channels.$post>) {
      return parseResponse(client.channels.$post(args, options))
    },
  })
}

export function usePostChannels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.channels.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostChannelsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getInsightsIdQueryKey(
  args: InferRequestType<(typeof client.insights)[':Id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['insights', '/insights/:Id', keyArgs] as const
}

export function getInsightsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.insights)[':Id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.insights)[':Id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.insights)[':Id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getInsightsIdQueryKey>
  >({
    queryKey: getInsightsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.insights[':Id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useInsightsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.insights)[':Id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.insights)[':Id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.insights)[':Id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInsightsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getInsightsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseInsightsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.insights)[':Id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.insights)[':Id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.insights)[':Id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInsightsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getInsightsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteInsightsIdMutationKey() {
  return ['insights', '/insights/:Id', 'DELETE'] as const
}

export function getDeleteInsightsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.insights)[':Id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.insights)[':Id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteInsightsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.insights)[':Id']['$delete']>) {
      return parseResponse(client.insights[':Id'].$delete(args, options))
    },
  })
}

export function useDeleteInsightsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.insights)[':Id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.insights)[':Id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteInsightsIdMutationOptions<TError, TOnMutateResult>(
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

export function getAccountsHealthQueryKey(
  args: InferRequestType<typeof client.accounts.health.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/health', keyArgs] as const
}

export function getAccountsHealthQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.health.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.accounts.health.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.health.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsHealthQueryKey>
  >({
    queryKey: getAccountsHealthQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts.health.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAccountsHealth<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.health.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.accounts.health.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.health.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsHealthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAccountsHealthQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAccountsHealth<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.health.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.accounts.health.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.health.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsHealthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAccountsHealthQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAccountsOverviewMutationKey() {
  return ['accounts', '/accounts/overview', 'POST'] as const
}

export function getPostAccountsOverviewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.overview.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.accounts.overview.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsOverviewMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.accounts.overview.$post>) {
      return parseResponse(client.accounts.overview.$post(args, options))
    },
  })
}

export function usePostAccountsOverview<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.accounts.overview.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.accounts.overview.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountsOverviewMutationOptions<TError, TOnMutateResult>(
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

export function getAnomaliesIdQueryKey(
  args: InferRequestType<(typeof client.anomalies)[':Id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['anomalies', '/anomalies/:Id', keyArgs] as const
}

export function getAnomaliesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.anomalies)[':Id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anomalies)[':Id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.anomalies)[':Id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnomaliesIdQueryKey>
  >({
    queryKey: getAnomaliesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.anomalies[':Id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAnomaliesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.anomalies)[':Id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anomalies)[':Id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.anomalies)[':Id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnomaliesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAnomaliesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAnomaliesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.anomalies)[':Id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.anomalies)[':Id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.anomalies)[':Id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnomaliesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAnomaliesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutEventSourcesMutationKey() {
  return ['event-sources', '/event-sources', 'PUT'] as const
}

export function getPutEventSourcesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['event-sources']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['event-sources']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutEventSourcesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['event-sources']['$put']>) {
      return parseResponse(client['event-sources'].$put(args, options))
    },
  })
}

export function usePutEventSources<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['event-sources']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['event-sources']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutEventSourcesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostEventSourcesMutationKey() {
  return ['event-sources', '/event-sources', 'POST'] as const
}

export function getPostEventSourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['event-sources']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['event-sources']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEventSourcesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['event-sources']['$post']>) {
      return parseResponse(client['event-sources'].$post(args, options))
    },
  })
}

export function usePostEventSources<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['event-sources']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['event-sources']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEventSourcesMutationOptions<TError, TOnMutateResult>(
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

export function getPutFeedbackMutationKey() {
  return ['feedback', '/feedback', 'PUT'] as const
}

export function getPutFeedbackMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feedback.$put>>>>>,
    TError,
    InferRequestType<typeof client.feedback.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutFeedbackMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.feedback.$put>) {
      return parseResponse(client.feedback.$put(args, options))
    },
  })
}

export function usePutFeedback<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feedback.$put>>>>>,
        TError,
        InferRequestType<typeof client.feedback.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutFeedbackMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostFeedbackMutationKey() {
  return ['feedback', '/feedback', 'POST'] as const
}

export function getPostFeedbackMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feedback.$post>>>>>,
    TError,
    InferRequestType<typeof client.feedback.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFeedbackMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.feedback.$post>) {
      return parseResponse(client.feedback.$post(args, options))
    },
  })
}

export function usePostFeedback<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feedback.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.feedback.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFeedbackMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostOrganizationHealthMutationKey() {
  return ['organization', '/organization/health', 'POST'] as const
}

export function getPostOrganizationHealthMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organization.health.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.organization.health.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationHealthMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.organization.health.$post>) {
      return parseResponse(client.organization.health.$post(args, options))
    },
  })
}

export function usePostOrganizationHealth<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.organization.health.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.organization.health.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrganizationHealthMutationOptions<TError, TOnMutateResult>(
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

export function getPostOrganizationOverviewMutationKey() {
  return ['organization', '/organization/overview', 'POST'] as const
}

export function getPostOrganizationOverviewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.overview.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.organization.overview.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationOverviewMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.organization.overview.$post>) {
      return parseResponse(client.organization.overview.$post(args, options))
    },
  })
}

export function usePostOrganizationOverview<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.organization.overview.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.organization.overview.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrganizationOverviewMutationOptions<TError, TOnMutateResult>(
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

export function getPostOrganizationHealthResourceCollectionMutationKey() {
  return ['organization', '/organization/health/resource-collection', 'POST'] as const
}

export function getPostOrganizationHealthResourceCollectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organization.health)['resource-collection']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organization.health)['resource-collection']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationHealthResourceCollectionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organization.health)['resource-collection']['$post']>,
    ) {
      return parseResponse(client.organization.health['resource-collection'].$post(args, options))
    },
  })
}

export function usePostOrganizationHealthResourceCollection<
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
                ReturnType<(typeof client.organization.health)['resource-collection']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.organization.health)['resource-collection']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrganizationHealthResourceCollectionMutationOptions<
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

export function getAccountsHealthResourceCollectionResourceCollectionTypeQueryKey(
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

export function getAccountsHealthResourceCollectionResourceCollectionTypeQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.accounts.health)['resource-collection'][':ResourceCollectionType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAccountsHealthResourceCollectionResourceCollectionTypeQueryKey>
  >({
    queryKey: getAccountsHealthResourceCollectionResourceCollectionTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts.health['resource-collection'][':ResourceCollectionType'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAccountsHealthResourceCollectionResourceCollectionType<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.accounts.health)['resource-collection'][':ResourceCollectionType']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAccountsHealthResourceCollectionResourceCollectionTypeQueryKey>
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
      ...getAccountsHealthResourceCollectionResourceCollectionTypeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountsHealthResourceCollectionResourceCollectionType<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.accounts.health)['resource-collection'][':ResourceCollectionType']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAccountsHealthResourceCollectionResourceCollectionTypeQueryKey>
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
      ...getAccountsHealthResourceCollectionResourceCollectionTypeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getServiceIntegrationsQueryKey(
  args: InferRequestType<(typeof client)['service-integrations']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['service-integrations', '/service-integrations', keyArgs] as const
}

export function getServiceIntegrationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['service-integrations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['service-integrations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['service-integrations']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServiceIntegrationsQueryKey>
  >({
    queryKey: getServiceIntegrationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['service-integrations'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useServiceIntegrations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['service-integrations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['service-integrations']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['service-integrations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getServiceIntegrationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getServiceIntegrationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseServiceIntegrations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['service-integrations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['service-integrations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['service-integrations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getServiceIntegrationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getServiceIntegrationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutServiceIntegrationsMutationKey() {
  return ['service-integrations', '/service-integrations', 'PUT'] as const
}

export function getPutServiceIntegrationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['service-integrations']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['service-integrations']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutServiceIntegrationsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['service-integrations']['$put']>) {
      return parseResponse(client['service-integrations'].$put(args, options))
    },
  })
}

export function usePutServiceIntegrations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['service-integrations']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['service-integrations']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutServiceIntegrationsMutationOptions<TError, TOnMutateResult>(
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

export function getCostEstimationQueryKey(
  args: InferRequestType<(typeof client)['cost-estimation']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['cost-estimation', '/cost-estimation', keyArgs] as const
}

export function getCostEstimationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['cost-estimation']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['cost-estimation']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['cost-estimation']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCostEstimationQueryKey>
  >({
    queryKey: getCostEstimationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['cost-estimation'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCostEstimation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['cost-estimation']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['cost-estimation']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['cost-estimation']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCostEstimationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCostEstimationQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCostEstimation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['cost-estimation']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['cost-estimation']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['cost-estimation']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCostEstimationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCostEstimationQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutCostEstimationMutationKey() {
  return ['cost-estimation', '/cost-estimation', 'PUT'] as const
}

export function getPutCostEstimationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['cost-estimation']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['cost-estimation']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCostEstimationMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['cost-estimation']['$put']>) {
      return parseResponse(client['cost-estimation'].$put(args, options))
    },
  })
}

export function usePutCostEstimation<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['cost-estimation']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['cost-estimation']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutCostEstimationMutationOptions<TError, TOnMutateResult>(
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

export function getResourceCollectionsResourceCollectionTypeQueryKey(
  args: InferRequestType<
    (typeof client)['resource-collections'][':ResourceCollectionType']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['resource-collections', '/resource-collections/:ResourceCollectionType', keyArgs] as const
}

export function getResourceCollectionsResourceCollectionTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['resource-collections'][':ResourceCollectionType']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['resource-collections'][':ResourceCollectionType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['resource-collections'][':ResourceCollectionType']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourceCollectionsResourceCollectionTypeQueryKey>
  >({
    queryKey: getResourceCollectionsResourceCollectionTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['resource-collections'][':ResourceCollectionType'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useResourceCollectionsResourceCollectionType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['resource-collections'][':ResourceCollectionType']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['resource-collections'][':ResourceCollectionType']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['resource-collections'][':ResourceCollectionType']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getResourceCollectionsResourceCollectionTypeQueryKey>
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
      ...getResourceCollectionsResourceCollectionTypeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseResourceCollectionsResourceCollectionType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['resource-collections'][':ResourceCollectionType']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['resource-collections'][':ResourceCollectionType']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['resource-collections'][':ResourceCollectionType']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getResourceCollectionsResourceCollectionTypeQueryKey>
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
      ...getResourceCollectionsResourceCollectionTypeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAnomaliesInsightInsightIdMutationKey() {
  return ['anomalies', '/anomalies/insight/:InsightId', 'POST'] as const
}

export function getPostAnomaliesInsightInsightIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.anomalies.insight)[':InsightId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.anomalies.insight)[':InsightId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAnomaliesInsightInsightIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.anomalies.insight)[':InsightId']['$post']>,
    ) {
      return parseResponse(client.anomalies.insight[':InsightId'].$post(args, options))
    },
  })
}

export function usePostAnomaliesInsightInsightId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.anomalies.insight)[':InsightId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.anomalies.insight)[':InsightId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAnomaliesInsightInsightIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostListLogAnomaliesMutationKey() {
  return ['list-log-anomalies', '/list-log-anomalies', 'POST'] as const
}

export function getPostListLogAnomaliesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['list-log-anomalies']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['list-log-anomalies']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostListLogAnomaliesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['list-log-anomalies']['$post']>) {
      return parseResponse(client['list-log-anomalies'].$post(args, options))
    },
  })
}

export function usePostListLogAnomalies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['list-log-anomalies']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['list-log-anomalies']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListLogAnomaliesMutationOptions<TError, TOnMutateResult>(
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

export function getPostEventsMutationKey() {
  return ['events', '/events', 'POST'] as const
}

export function getPostEventsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$post>>>>>,
    TError,
    InferRequestType<typeof client.events.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEventsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.events.$post>) {
      return parseResponse(client.events.$post(args, options))
    },
  })
}

export function usePostEvents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$post>>>>>,
        TError,
        InferRequestType<typeof client.events.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEventsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostInsightsMutationKey() {
  return ['insights', '/insights', 'POST'] as const
}

export function getPostInsightsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.insights.$post>>>>>,
    TError,
    InferRequestType<typeof client.insights.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInsightsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.insights.$post>) {
      return parseResponse(client.insights.$post(args, options))
    },
  })
}

export function usePostInsights<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.insights.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.insights.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostInsightsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostMonitoredResourcesMutationKey() {
  return ['monitoredResources', '/monitoredResources', 'POST'] as const
}

export function getPostMonitoredResourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.monitoredResources.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.monitoredResources.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMonitoredResourcesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.monitoredResources.$post>) {
      return parseResponse(client.monitoredResources.$post(args, options))
    },
  })
}

export function usePostMonitoredResources<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.monitoredResources.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.monitoredResources.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMonitoredResourcesMutationOptions<TError, TOnMutateResult>(
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

export function getPostOrganizationInsightsMutationKey() {
  return ['organization', '/organization/insights', 'POST'] as const
}

export function getPostOrganizationInsightsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.insights.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.organization.insights.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationInsightsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.organization.insights.$post>) {
      return parseResponse(client.organization.insights.$post(args, options))
    },
  })
}

export function usePostOrganizationInsights<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.organization.insights.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.organization.insights.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrganizationInsightsMutationOptions<TError, TOnMutateResult>(
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

export function getPostRecommendationsMutationKey() {
  return ['recommendations', '/recommendations', 'POST'] as const
}

export function getPostRecommendationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.recommendations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRecommendationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.recommendations.$post>) {
      return parseResponse(client.recommendations.$post(args, options))
    },
  })
}

export function usePostRecommendations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.recommendations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRecommendationsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteChannelsIdMutationKey() {
  return ['channels', '/channels/:Id', 'DELETE'] as const
}

export function getDeleteChannelsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':Id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.channels)[':Id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteChannelsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.channels)[':Id']['$delete']>) {
      return parseResponse(client.channels[':Id'].$delete(args, options))
    },
  })
}

export function useDeleteChannelsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':Id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.channels)[':Id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteChannelsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostInsightsSearchMutationKey() {
  return ['insights', '/insights/search', 'POST'] as const
}

export function getPostInsightsSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.insights.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.insights.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInsightsSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.insights.search.$post>) {
      return parseResponse(client.insights.search.$post(args, options))
    },
  })
}

export function usePostInsightsSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.insights.search.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.insights.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostInsightsSearchMutationOptions<TError, TOnMutateResult>(
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

export function getPostOrganizationInsightsSearchMutationKey() {
  return ['organization', '/organization/insights/search', 'POST'] as const
}

export function getPostOrganizationInsightsSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.insights.search.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.organization.insights.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationInsightsSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.organization.insights.search.$post>) {
      return parseResponse(client.organization.insights.search.$post(args, options))
    },
  })
}

export function usePostOrganizationInsightsSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.organization.insights.search.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.organization.insights.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrganizationInsightsSearchMutationOptions<
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

export function getPutResourceCollectionsMutationKey() {
  return ['resource-collections', '/resource-collections', 'PUT'] as const
}

export function getPutResourceCollectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['resource-collections']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['resource-collections']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutResourceCollectionsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['resource-collections']['$put']>) {
      return parseResponse(client['resource-collections'].$put(args, options))
    },
  })
}

export function usePutResourceCollections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['resource-collections']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['resource-collections']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutResourceCollectionsMutationOptions<TError, TOnMutateResult>(
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
