import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAssetsKey() {
  return ['assets'] as const
}

export function getPackagingConfigurationsKey() {
  return ['packaging_configurations'] as const
}

export function getPackagingGroupsKey() {
  return ['packaging_groups'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getPutPackagingGroupsIdConfigureLogsMutationKey() {
  return ['packaging_groups', '/packaging_groups/:id/configure_logs', 'PUT'] as const
}

export function getPutPackagingGroupsIdConfigureLogsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.packaging_groups)[':id']['configure_logs']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.packaging_groups)[':id']['configure_logs']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPackagingGroupsIdConfigureLogsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.packaging_groups)[':id']['configure_logs']['$put']>,
    ) {
      return parseResponse(client.packaging_groups[':id'].configure_logs.$put(args, options))
    },
  })
}

export function usePutPackagingGroupsIdConfigureLogs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.packaging_groups)[':id']['configure_logs']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.packaging_groups)[':id']['configure_logs']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutPackagingGroupsIdConfigureLogsMutationOptions<
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

export function getAssetsQueryKey(args: InferRequestType<typeof client.assets.$get>) {
  const { header: _, ...keyArgs } = args
  return ['assets', '/assets', keyArgs] as const
}

export function getAssetsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.assets.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAssetsQueryKey>
  >({
    queryKey: getAssetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.assets.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAssets<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.assets.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAssetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAssetsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAssets<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.assets.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAssetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAssetsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assets.$post>>>>>,
        TError,
        InferRequestType<typeof client.assets.$post>,
        TOnMutateResult
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

export function getPackagingConfigurationsQueryKey(
  args: InferRequestType<typeof client.packaging_configurations.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['packaging_configurations', '/packaging_configurations', keyArgs] as const
}

export function getPackagingConfigurationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.packaging_configurations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.packaging_configurations.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.packaging_configurations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPackagingConfigurationsQueryKey>
  >({
    queryKey: getPackagingConfigurationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.packaging_configurations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePackagingConfigurations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.packaging_configurations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.packaging_configurations.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.packaging_configurations.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPackagingConfigurationsQueryKey>
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
      ...getPackagingConfigurationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePackagingConfigurations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.packaging_configurations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.packaging_configurations.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.packaging_configurations.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPackagingConfigurationsQueryKey>
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
      ...getPackagingConfigurationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostPackagingConfigurationsMutationKey() {
  return ['packaging_configurations', '/packaging_configurations', 'POST'] as const
}

export function getPostPackagingConfigurationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.packaging_configurations.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.packaging_configurations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPackagingConfigurationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.packaging_configurations.$post>) {
      return parseResponse(client.packaging_configurations.$post(args, options))
    },
  })
}

export function usePostPackagingConfigurations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.packaging_configurations.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.packaging_configurations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPackagingConfigurationsMutationOptions<TError, TOnMutateResult>(
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

export function getPackagingGroupsQueryKey(
  args: InferRequestType<typeof client.packaging_groups.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['packaging_groups', '/packaging_groups', keyArgs] as const
}

export function getPackagingGroupsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.packaging_groups.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.packaging_groups.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.packaging_groups.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPackagingGroupsQueryKey>
  >({
    queryKey: getPackagingGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.packaging_groups.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePackagingGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.packaging_groups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.packaging_groups.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.packaging_groups.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPackagingGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPackagingGroupsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePackagingGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.packaging_groups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.packaging_groups.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.packaging_groups.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPackagingGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPackagingGroupsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostPackagingGroupsMutationKey() {
  return ['packaging_groups', '/packaging_groups', 'POST'] as const
}

export function getPostPackagingGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.packaging_groups.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.packaging_groups.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPackagingGroupsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.packaging_groups.$post>) {
      return parseResponse(client.packaging_groups.$post(args, options))
    },
  })
}

export function usePostPackagingGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.packaging_groups.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.packaging_groups.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPackagingGroupsMutationOptions<TError, TOnMutateResult>(
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

export function getAssetsIdQueryKey(args: InferRequestType<(typeof client.assets)[':id']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['assets', '/assets/:id', keyArgs] as const
}

export function getAssetsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.assets)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAssetsIdQueryKey>
  >({
    queryKey: getAssetsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.assets[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAssetsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.assets)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAssetsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAssetsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAssetsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.assets)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAssetsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAssetsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteAssetsIdMutationKey() {
  return ['assets', '/assets/:id', 'DELETE'] as const
}

export function getDeleteAssetsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.assets)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAssetsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.assets)[':id']['$delete']>) {
      return parseResponse(client.assets[':id'].$delete(args, options))
    },
  })
}

export function useDeleteAssetsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.assets)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.assets)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAssetsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPackagingConfigurationsIdQueryKey(
  args: InferRequestType<(typeof client.packaging_configurations)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['packaging_configurations', '/packaging_configurations/:id', keyArgs] as const
}

export function getPackagingConfigurationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.packaging_configurations)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.packaging_configurations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.packaging_configurations)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPackagingConfigurationsIdQueryKey>
  >({
    queryKey: getPackagingConfigurationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.packaging_configurations[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePackagingConfigurationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.packaging_configurations)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.packaging_configurations)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.packaging_configurations)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPackagingConfigurationsIdQueryKey>
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
      ...getPackagingConfigurationsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePackagingConfigurationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.packaging_configurations)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.packaging_configurations)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.packaging_configurations)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPackagingConfigurationsIdQueryKey>
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
      ...getPackagingConfigurationsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeletePackagingConfigurationsIdMutationKey() {
  return ['packaging_configurations', '/packaging_configurations/:id', 'DELETE'] as const
}

export function getDeletePackagingConfigurationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.packaging_configurations)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.packaging_configurations)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePackagingConfigurationsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.packaging_configurations)[':id']['$delete']>,
    ) {
      return parseResponse(client.packaging_configurations[':id'].$delete(args, options))
    },
  })
}

export function useDeletePackagingConfigurationsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.packaging_configurations)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.packaging_configurations)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePackagingConfigurationsIdMutationOptions<
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

export function getPackagingGroupsIdQueryKey(
  args: InferRequestType<(typeof client.packaging_groups)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['packaging_groups', '/packaging_groups/:id', keyArgs] as const
}

export function getPackagingGroupsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.packaging_groups)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.packaging_groups)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.packaging_groups)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPackagingGroupsIdQueryKey>
  >({
    queryKey: getPackagingGroupsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.packaging_groups[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePackagingGroupsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.packaging_groups)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.packaging_groups)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.packaging_groups)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPackagingGroupsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPackagingGroupsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePackagingGroupsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.packaging_groups)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.packaging_groups)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.packaging_groups)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPackagingGroupsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPackagingGroupsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutPackagingGroupsIdMutationKey() {
  return ['packaging_groups', '/packaging_groups/:id', 'PUT'] as const
}

export function getPutPackagingGroupsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.packaging_groups)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.packaging_groups)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPackagingGroupsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.packaging_groups)[':id']['$put']>) {
      return parseResponse(client.packaging_groups[':id'].$put(args, options))
    },
  })
}

export function usePutPackagingGroupsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.packaging_groups)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.packaging_groups)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutPackagingGroupsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeletePackagingGroupsIdMutationKey() {
  return ['packaging_groups', '/packaging_groups/:id', 'DELETE'] as const
}

export function getDeletePackagingGroupsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.packaging_groups)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.packaging_groups)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePackagingGroupsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.packaging_groups)[':id']['$delete']>) {
      return parseResponse(client.packaging_groups[':id'].$delete(args, options))
    },
  })
}

export function useDeletePackagingGroupsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.packaging_groups)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.packaging_groups)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePackagingGroupsIdMutationOptions<TError, TOnMutateResult>(
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

export function getTagsResourceArnQueryKey(
  args: InferRequestType<(typeof client.tags)[':resource-arn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:resource-arn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resource-arn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':resource-arn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resource-arn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >({
    queryKey: getTagsResourceArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags[':resource-arn'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resource-arn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':resource-arn']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resource-arn']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsResourceArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTagsResourceArnQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resource-arn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':resource-arn']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resource-arn']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsResourceArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTagsResourceArnQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostTagsResourceArnMutationKey() {
  return ['tags', '/tags/:resource-arn', 'POST'] as const
}

export function getPostTagsResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resource-arn']['$post']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.tags)[':resource-arn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsResourceArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)[':resource-arn']['$post']>) {
      return parseResponse(client.tags[':resource-arn'].$post(args, options))
    },
  })
}

export function usePostTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resource-arn']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.tags)[':resource-arn']['$post']>,
        TOnMutateResult
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

export function getDeleteTagsResourceArnTagKeysMutationKey() {
  return ['tags', '/tags/:resource-arn#tagKeys', 'DELETE'] as const
}

export function getDeleteTagsResourceArnTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':resource-arn#tagKeys']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.tags)[':resource-arn#tagKeys']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTagsResourceArnTagKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tags)[':resource-arn#tagKeys']['$delete']>,
    ) {
      return parseResponse(client.tags[':resource-arn#tagKeys'].$delete(args, options))
    },
  })
}

export function useDeleteTagsResourceArnTagKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resource-arn#tagKeys']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.tags)[':resource-arn#tagKeys']['$delete']>,
        TOnMutateResult
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
