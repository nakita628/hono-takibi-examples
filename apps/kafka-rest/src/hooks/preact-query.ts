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

export function getClustersKey() {
  return ['clusters'] as const
}

export function getClustersQueryKey() {
  return ['clusters', '/clusters'] as const
}

export function getClustersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clusters.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clusters.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getClustersQueryKey>
  >({
    queryKey: getClustersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.clusters.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useClusters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clusters.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clusters.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getClustersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getClustersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseClusters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clusters.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clusters.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getClustersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getClustersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getClustersClusterIdQueryKey(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['$get']>,
) {
  return ['clusters', '/clusters/:cluster_id', args] as const
}

export function getClustersClusterIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersClusterIdQueryKey>
  >({
    queryKey: getClustersClusterIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clusters[':cluster_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useClustersClusterId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClustersClusterIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getClustersClusterIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseClustersClusterId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClustersClusterIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getClustersClusterIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostClustersClusterIdAclsBatchMutationKey() {
  return ['clusters', '/clusters/:cluster_id/acls:batch', 'POST'] as const
}

export function getPostClustersClusterIdAclsBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['acls:batch']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.clusters)[':cluster_id']['acls:batch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostClustersClusterIdAclsBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.clusters)[':cluster_id']['acls:batch']['$post']>,
    ) {
      return parseResponse(client.clusters[':cluster_id']['acls:batch'].$post(args, options))
    },
  })
}

export function usePostClustersClusterIdAclsBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['acls:batch']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.clusters)[':cluster_id']['acls:batch']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostClustersClusterIdAclsBatchMutationOptions<
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

export function getClustersClusterIdAclsQueryKey(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['acls']['$get']>,
) {
  return ['clusters', '/clusters/:cluster_id/acls', args] as const
}

export function getClustersClusterIdAclsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['acls']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['acls']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['acls']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersClusterIdAclsQueryKey>
  >({
    queryKey: getClustersClusterIdAclsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clusters[':cluster_id'].acls.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useClustersClusterIdAcls<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['acls']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['acls']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['acls']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClustersClusterIdAclsQueryKey>
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
      ...getClustersClusterIdAclsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseClustersClusterIdAcls<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['acls']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['acls']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['acls']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClustersClusterIdAclsQueryKey>
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
      ...getClustersClusterIdAclsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostClustersClusterIdAclsMutationKey() {
  return ['clusters', '/clusters/:cluster_id/acls', 'POST'] as const
}

export function getPostClustersClusterIdAclsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['acls']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.clusters)[':cluster_id']['acls']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostClustersClusterIdAclsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.clusters)[':cluster_id']['acls']['$post']>,
    ) {
      return parseResponse(client.clusters[':cluster_id'].acls.$post(args, options))
    },
  })
}

export function usePostClustersClusterIdAcls<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['acls']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.clusters)[':cluster_id']['acls']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostClustersClusterIdAclsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteClustersClusterIdAclsMutationKey() {
  return ['clusters', '/clusters/:cluster_id/acls', 'DELETE'] as const
}

export function getDeleteClustersClusterIdAclsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['acls']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.clusters)[':cluster_id']['acls']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteClustersClusterIdAclsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.clusters)[':cluster_id']['acls']['$delete']>,
    ) {
      return parseResponse(client.clusters[':cluster_id'].acls.$delete(args, options))
    },
  })
}

export function useDeleteClustersClusterIdAcls<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['acls']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.clusters)[':cluster_id']['acls']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteClustersClusterIdAclsMutationOptions<TError, TOnMutateResult>(
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

export function getClustersClusterIdBrokerConfigsQueryKey(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['broker-configs']['$get']>,
) {
  return ['clusters', '/clusters/:cluster_id/broker-configs', args] as const
}

export function getClustersClusterIdBrokerConfigsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['broker-configs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['broker-configs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['broker-configs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersClusterIdBrokerConfigsQueryKey>
  >({
    queryKey: getClustersClusterIdBrokerConfigsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clusters[':cluster_id']['broker-configs'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useClustersClusterIdBrokerConfigs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['broker-configs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['broker-configs']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['broker-configs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClustersClusterIdBrokerConfigsQueryKey>
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
      ...getClustersClusterIdBrokerConfigsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseClustersClusterIdBrokerConfigs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['broker-configs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['broker-configs']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['broker-configs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClustersClusterIdBrokerConfigsQueryKey>
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
      ...getClustersClusterIdBrokerConfigsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostClustersClusterIdBrokerConfigsAlterMutationKey() {
  return ['clusters', '/clusters/:cluster_id/broker-configs:alter', 'POST'] as const
}

export function getPostClustersClusterIdBrokerConfigsAlterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.clusters)[':cluster_id']['broker-configs:alter']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.clusters)[':cluster_id']['broker-configs:alter']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostClustersClusterIdBrokerConfigsAlterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.clusters)[':cluster_id']['broker-configs:alter']['$post']
      >,
    ) {
      return parseResponse(
        client.clusters[':cluster_id']['broker-configs:alter'].$post(args, options),
      )
    },
  })
}

export function usePostClustersClusterIdBrokerConfigsAlter<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.clusters)[':cluster_id']['broker-configs:alter']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.clusters)[':cluster_id']['broker-configs:alter']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostClustersClusterIdBrokerConfigsAlterMutationOptions<
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

export function getClustersClusterIdBrokerConfigsNameQueryKey(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['broker-configs'][':name']['$get']
  >,
) {
  return ['clusters', '/clusters/:cluster_id/broker-configs/:name', args] as const
}

export function getClustersClusterIdBrokerConfigsNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.clusters)[':cluster_id']['broker-configs'][':name']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['broker-configs'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.clusters)[':cluster_id']['broker-configs'][':name']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersClusterIdBrokerConfigsNameQueryKey>
  >({
    queryKey: getClustersClusterIdBrokerConfigsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clusters[':cluster_id']['broker-configs'][':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useClustersClusterIdBrokerConfigsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.clusters)[':cluster_id']['broker-configs'][':name']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['broker-configs'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.clusters)[':cluster_id']['broker-configs'][':name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClustersClusterIdBrokerConfigsNameQueryKey>
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
      ...getClustersClusterIdBrokerConfigsNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseClustersClusterIdBrokerConfigsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.clusters)[':cluster_id']['broker-configs'][':name']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['broker-configs'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.clusters)[':cluster_id']['broker-configs'][':name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClustersClusterIdBrokerConfigsNameQueryKey>
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
      ...getClustersClusterIdBrokerConfigsNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutClustersClusterIdBrokerConfigsNameMutationKey() {
  return ['clusters', '/clusters/:cluster_id/broker-configs/:name', 'PUT'] as const
}

export function getPutClustersClusterIdBrokerConfigsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.clusters)[':cluster_id']['broker-configs'][':name']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.clusters)[':cluster_id']['broker-configs'][':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutClustersClusterIdBrokerConfigsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.clusters)[':cluster_id']['broker-configs'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.clusters[':cluster_id']['broker-configs'][':name'].$put(args, options),
      )
    },
  })
}

export function usePutClustersClusterIdBrokerConfigsName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.clusters)[':cluster_id']['broker-configs'][':name']['$put']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.clusters)[':cluster_id']['broker-configs'][':name']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutClustersClusterIdBrokerConfigsNameMutationOptions<
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

export function getDeleteClustersClusterIdBrokerConfigsNameMutationKey() {
  return ['clusters', '/clusters/:cluster_id/broker-configs/:name', 'DELETE'] as const
}

export function getDeleteClustersClusterIdBrokerConfigsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.clusters)[':cluster_id']['broker-configs'][':name']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.clusters)[':cluster_id']['broker-configs'][':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteClustersClusterIdBrokerConfigsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.clusters)[':cluster_id']['broker-configs'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.clusters[':cluster_id']['broker-configs'][':name'].$delete(args, options),
      )
    },
  })
}

export function useDeleteClustersClusterIdBrokerConfigsName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.clusters)[':cluster_id']['broker-configs'][':name']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.clusters)[':cluster_id']['broker-configs'][':name']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteClustersClusterIdBrokerConfigsNameMutationOptions<
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

export function getClustersClusterIdBrokersQueryKey(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['brokers']['$get']>,
) {
  return ['clusters', '/clusters/:cluster_id/brokers', args] as const
}

export function getClustersClusterIdBrokersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['brokers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['brokers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['brokers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersClusterIdBrokersQueryKey>
  >({
    queryKey: getClustersClusterIdBrokersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clusters[':cluster_id'].brokers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useClustersClusterIdBrokers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['brokers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['brokers']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['brokers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClustersClusterIdBrokersQueryKey>
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
      ...getClustersClusterIdBrokersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseClustersClusterIdBrokers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['brokers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['brokers']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['brokers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClustersClusterIdBrokersQueryKey>
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
      ...getClustersClusterIdBrokersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getClustersClusterIdBrokersBrokerIdQueryKey(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['$get']>,
) {
  return ['clusters', '/clusters/:cluster_id/brokers/:broker_id', args] as const
}

export function getClustersClusterIdBrokersBrokerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersClusterIdBrokersBrokerIdQueryKey>
  >({
    queryKey: getClustersClusterIdBrokersBrokerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clusters[':cluster_id'].brokers[':broker_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useClustersClusterIdBrokersBrokerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClustersClusterIdBrokersBrokerIdQueryKey>
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
      ...getClustersClusterIdBrokersBrokerIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseClustersClusterIdBrokersBrokerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClustersClusterIdBrokersBrokerIdQueryKey>
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
      ...getClustersClusterIdBrokersBrokerIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getClustersClusterIdBrokersDashConfigsQueryKey(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['brokers']['-']['configs']['$get']
  >,
) {
  return ['clusters', '/clusters/:cluster_id/brokers/-/configs', args] as const
}

export function getClustersClusterIdBrokersDashConfigsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.clusters)[':cluster_id']['brokers']['-']['configs']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['brokers']['-']['configs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.clusters)[':cluster_id']['brokers']['-']['configs']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersClusterIdBrokersDashConfigsQueryKey>
  >({
    queryKey: getClustersClusterIdBrokersDashConfigsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clusters[':cluster_id'].brokers['-'].configs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useClustersClusterIdBrokersDashConfigs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.clusters)[':cluster_id']['brokers']['-']['configs']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['brokers']['-']['configs']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.clusters)[':cluster_id']['brokers']['-']['configs']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClustersClusterIdBrokersDashConfigsQueryKey>
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
      ...getClustersClusterIdBrokersDashConfigsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseClustersClusterIdBrokersDashConfigs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.clusters)[':cluster_id']['brokers']['-']['configs']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['brokers']['-']['configs']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.clusters)[':cluster_id']['brokers']['-']['configs']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClustersClusterIdBrokersDashConfigsQueryKey>
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
      ...getClustersClusterIdBrokersDashConfigsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getClustersClusterIdBrokersBrokerIdConfigsQueryKey(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs']['$get']
  >,
) {
  return ['clusters', '/clusters/:cluster_id/brokers/:broker_id/configs', args] as const
}

export function getClustersClusterIdBrokersBrokerIdConfigsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersClusterIdBrokersBrokerIdConfigsQueryKey>
  >({
    queryKey: getClustersClusterIdBrokersBrokerIdConfigsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clusters[':cluster_id'].brokers[':broker_id'].configs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useClustersClusterIdBrokersBrokerIdConfigs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClustersClusterIdBrokersBrokerIdConfigsQueryKey>
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
      ...getClustersClusterIdBrokersBrokerIdConfigsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseClustersClusterIdBrokersBrokerIdConfigs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClustersClusterIdBrokersBrokerIdConfigsQueryKey>
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
      ...getClustersClusterIdBrokersBrokerIdConfigsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostClustersClusterIdBrokersBrokerIdConfigsAlterMutationKey() {
  return ['clusters', '/clusters/:cluster_id/brokers/:broker_id/configs:alter', 'POST'] as const
}

export function getPostClustersClusterIdBrokersBrokerIdConfigsAlterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs:alter']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs:alter']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostClustersClusterIdBrokersBrokerIdConfigsAlterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs:alter']['$post']
      >,
    ) {
      return parseResponse(
        client.clusters[':cluster_id'].brokers[':broker_id']['configs:alter'].$post(args, options),
      )
    },
  })
}

export function usePostClustersClusterIdBrokersBrokerIdConfigsAlter<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs:alter']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs:alter']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostClustersClusterIdBrokersBrokerIdConfigsAlterMutationOptions<
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

export function getClustersClusterIdBrokersBrokerIdConfigsNameQueryKey(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs'][':name']['$get']
  >,
) {
  return ['clusters', '/clusters/:cluster_id/brokers/:broker_id/configs/:name', args] as const
}

export function getClustersClusterIdBrokersBrokerIdConfigsNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersClusterIdBrokersBrokerIdConfigsNameQueryKey>
  >({
    queryKey: getClustersClusterIdBrokersBrokerIdConfigsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clusters[':cluster_id'].brokers[':broker_id'].configs[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useClustersClusterIdBrokersBrokerIdConfigsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs'][':name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClustersClusterIdBrokersBrokerIdConfigsNameQueryKey>
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
      ...getClustersClusterIdBrokersBrokerIdConfigsNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseClustersClusterIdBrokersBrokerIdConfigsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs'][':name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClustersClusterIdBrokersBrokerIdConfigsNameQueryKey>
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
      ...getClustersClusterIdBrokersBrokerIdConfigsNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutClustersClusterIdBrokersBrokerIdConfigsNameMutationKey() {
  return ['clusters', '/clusters/:cluster_id/brokers/:broker_id/configs/:name', 'PUT'] as const
}

export function getPutClustersClusterIdBrokersBrokerIdConfigsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs'][':name']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs'][':name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutClustersClusterIdBrokersBrokerIdConfigsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.clusters[':cluster_id'].brokers[':broker_id'].configs[':name'].$put(args, options),
      )
    },
  })
}

export function usePutClustersClusterIdBrokersBrokerIdConfigsName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs'][':name']['$put']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs'][':name']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutClustersClusterIdBrokersBrokerIdConfigsNameMutationOptions<
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

export function getDeleteClustersClusterIdBrokersBrokerIdConfigsNameMutationKey() {
  return ['clusters', '/clusters/:cluster_id/brokers/:broker_id/configs/:name', 'DELETE'] as const
}

export function getDeleteClustersClusterIdBrokersBrokerIdConfigsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs'][':name']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteClustersClusterIdBrokersBrokerIdConfigsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.clusters[':cluster_id'].brokers[':broker_id'].configs[':name'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteClustersClusterIdBrokersBrokerIdConfigsName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs'][':name']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs'][':name']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteClustersClusterIdBrokersBrokerIdConfigsNameMutationOptions<
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

export function getClustersClusterIdBrokersBrokerIdPartitionReplicasQueryKey(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['partition-replicas']['$get']
  >,
) {
  return ['clusters', '/clusters/:cluster_id/brokers/:broker_id/partition-replicas', args] as const
}

export function getClustersClusterIdBrokersBrokerIdPartitionReplicasQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['partition-replicas']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['partition-replicas']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['partition-replicas']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersClusterIdBrokersBrokerIdPartitionReplicasQueryKey>
  >({
    queryKey: getClustersClusterIdBrokersBrokerIdPartitionReplicasQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clusters[':cluster_id'].brokers[':broker_id']['partition-replicas'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useClustersClusterIdBrokersBrokerIdPartitionReplicas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['partition-replicas']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['partition-replicas']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['partition-replicas']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClustersClusterIdBrokersBrokerIdPartitionReplicasQueryKey>
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
      ...getClustersClusterIdBrokersBrokerIdPartitionReplicasQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseClustersClusterIdBrokersBrokerIdPartitionReplicas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['partition-replicas']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['partition-replicas']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['partition-replicas']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClustersClusterIdBrokersBrokerIdPartitionReplicasQueryKey>
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
      ...getClustersClusterIdBrokersBrokerIdPartitionReplicasQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getClustersClusterIdConsumerGroupsQueryKey(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['consumer-groups']['$get']>,
) {
  return ['clusters', '/clusters/:cluster_id/consumer-groups', args] as const
}

export function getClustersClusterIdConsumerGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['consumer-groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['consumer-groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['consumer-groups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersClusterIdConsumerGroupsQueryKey>
  >({
    queryKey: getClustersClusterIdConsumerGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clusters[':cluster_id']['consumer-groups'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useClustersClusterIdConsumerGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['consumer-groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['consumer-groups']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.clusters)[':cluster_id']['consumer-groups']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClustersClusterIdConsumerGroupsQueryKey>
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
      ...getClustersClusterIdConsumerGroupsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseClustersClusterIdConsumerGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['consumer-groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['consumer-groups']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.clusters)[':cluster_id']['consumer-groups']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClustersClusterIdConsumerGroupsQueryKey>
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
      ...getClustersClusterIdConsumerGroupsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getClustersClusterIdConsumerGroupsConsumerGroupIdQueryKey(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['$get']
  >,
) {
  return ['clusters', '/clusters/:cluster_id/consumer-groups/:consumer_group_id', args] as const
}

export function getClustersClusterIdConsumerGroupsConsumerGroupIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersClusterIdConsumerGroupsConsumerGroupIdQueryKey>
  >({
    queryKey: getClustersClusterIdConsumerGroupsConsumerGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clusters[':cluster_id']['consumer-groups'][':consumer_group_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useClustersClusterIdConsumerGroupsConsumerGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClustersClusterIdConsumerGroupsConsumerGroupIdQueryKey>
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
      ...getClustersClusterIdConsumerGroupsConsumerGroupIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseClustersClusterIdConsumerGroupsConsumerGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClustersClusterIdConsumerGroupsConsumerGroupIdQueryKey>
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
      ...getClustersClusterIdConsumerGroupsConsumerGroupIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersQueryKey(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers']['$get']
  >,
) {
  return [
    'clusters',
    '/clusters/:cluster_id/consumer-groups/:consumer_group_id/consumers',
    args,
  ] as const
}

export function getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersQueryKey>
  >({
    queryKey: getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clusters[':cluster_id']['consumer-groups'][':consumer_group_id'].consumers.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useClustersClusterIdConsumerGroupsConsumerGroupIdConsumers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersQueryKey>
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
      ...getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseClustersClusterIdConsumerGroupsConsumerGroupIdConsumers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersQueryKey>
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
      ...getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getClustersClusterIdConsumerGroupsConsumerGroupIdLagSummaryQueryKey(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['lag-summary']['$get']
  >,
) {
  return [
    'clusters',
    '/clusters/:cluster_id/consumer-groups/:consumer_group_id/lag-summary',
    args,
  ] as const
}

export function getClustersClusterIdConsumerGroupsConsumerGroupIdLagSummaryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['lag-summary']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['lag-summary']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['lag-summary']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersClusterIdConsumerGroupsConsumerGroupIdLagSummaryQueryKey>
  >({
    queryKey: getClustersClusterIdConsumerGroupsConsumerGroupIdLagSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clusters[':cluster_id']['consumer-groups'][':consumer_group_id']['lag-summary'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useClustersClusterIdConsumerGroupsConsumerGroupIdLagSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['lag-summary']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['lag-summary']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['lag-summary']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClustersClusterIdConsumerGroupsConsumerGroupIdLagSummaryQueryKey>
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
      ...getClustersClusterIdConsumerGroupsConsumerGroupIdLagSummaryQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseClustersClusterIdConsumerGroupsConsumerGroupIdLagSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['lag-summary']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['lag-summary']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['lag-summary']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClustersClusterIdConsumerGroupsConsumerGroupIdLagSummaryQueryKey>
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
      ...getClustersClusterIdConsumerGroupsConsumerGroupIdLagSummaryQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getClustersClusterIdConsumerGroupsConsumerGroupIdLagsQueryKey(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['lags']['$get']
  >,
) {
  return [
    'clusters',
    '/clusters/:cluster_id/consumer-groups/:consumer_group_id/lags',
    args,
  ] as const
}

export function getClustersClusterIdConsumerGroupsConsumerGroupIdLagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['lags']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['lags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['lags']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersClusterIdConsumerGroupsConsumerGroupIdLagsQueryKey>
  >({
    queryKey: getClustersClusterIdConsumerGroupsConsumerGroupIdLagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clusters[':cluster_id']['consumer-groups'][':consumer_group_id'].lags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useClustersClusterIdConsumerGroupsConsumerGroupIdLags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['lags']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['lags']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['lags']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClustersClusterIdConsumerGroupsConsumerGroupIdLagsQueryKey>
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
      ...getClustersClusterIdConsumerGroupsConsumerGroupIdLagsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseClustersClusterIdConsumerGroupsConsumerGroupIdLags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['lags']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['lags']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['lags']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClustersClusterIdConsumerGroupsConsumerGroupIdLagsQueryKey>
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
      ...getClustersClusterIdConsumerGroupsConsumerGroupIdLagsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getClustersClusterIdConsumerGroupsConsumerGroupIdLagsTopicNamePartitionsPartitionIdQueryKey(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['lags'][':topic_name']['partitions'][':partition_id']['$get']
  >,
) {
  return [
    'clusters',
    '/clusters/:cluster_id/consumer-groups/:consumer_group_id/lags/:topic_name/partitions/:partition_id',
    args,
  ] as const
}

export function getClustersClusterIdConsumerGroupsConsumerGroupIdLagsTopicNamePartitionsPartitionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['lags'][':topic_name']['partitions'][':partition_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['lags'][':topic_name']['partitions'][':partition_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['lags'][':topic_name']['partitions'][':partition_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getClustersClusterIdConsumerGroupsConsumerGroupIdLagsTopicNamePartitionsPartitionIdQueryKey
    >
  >({
    queryKey:
      getClustersClusterIdConsumerGroupsConsumerGroupIdLagsTopicNamePartitionsPartitionIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.clusters[':cluster_id']['consumer-groups'][':consumer_group_id'].lags[
          ':topic_name'
        ].partitions[':partition_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useClustersClusterIdConsumerGroupsConsumerGroupIdLagsTopicNamePartitionsPartitionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['lags'][':topic_name']['partitions'][':partition_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['lags'][':topic_name']['partitions'][':partition_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['lags'][':topic_name']['partitions'][':partition_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getClustersClusterIdConsumerGroupsConsumerGroupIdLagsTopicNamePartitionsPartitionIdQueryKey
        >
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
      ...getClustersClusterIdConsumerGroupsConsumerGroupIdLagsTopicNamePartitionsPartitionIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseClustersClusterIdConsumerGroupsConsumerGroupIdLagsTopicNamePartitionsPartitionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['lags'][':topic_name']['partitions'][':partition_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['lags'][':topic_name']['partitions'][':partition_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['lags'][':topic_name']['partitions'][':partition_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getClustersClusterIdConsumerGroupsConsumerGroupIdLagsTopicNamePartitionsPartitionIdQueryKey
        >
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
      ...getClustersClusterIdConsumerGroupsConsumerGroupIdLagsTopicNamePartitionsPartitionIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdQueryKey(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers'][':consumer_id']['$get']
  >,
) {
  return [
    'clusters',
    '/clusters/:cluster_id/consumer-groups/:consumer_group_id/consumers/:consumer_id',
    args,
  ] as const
}

export function getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers'][':consumer_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers'][':consumer_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers'][':consumer_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdQueryKey>
  >({
    queryKey: getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clusters[':cluster_id']['consumer-groups'][':consumer_group_id'].consumers[
          ':consumer_id'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers'][':consumer_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers'][':consumer_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers'][':consumer_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdQueryKey
        >
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
      ...getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers'][':consumer_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers'][':consumer_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers'][':consumer_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdQueryKey
        >
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
      ...getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdAssignmentsQueryKey(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers'][':consumer_id']['assignments']['$get']
  >,
) {
  return [
    'clusters',
    '/clusters/:cluster_id/consumer-groups/:consumer_group_id/consumers/:consumer_id/assignments',
    args,
  ] as const
}

export function getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdAssignmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers'][':consumer_id']['assignments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers'][':consumer_id']['assignments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers'][':consumer_id']['assignments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdAssignmentsQueryKey
    >
  >({
    queryKey:
      getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdAssignmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clusters[':cluster_id']['consumer-groups'][':consumer_group_id'].consumers[
          ':consumer_id'
        ].assignments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdAssignments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers'][':consumer_id']['assignments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers'][':consumer_id']['assignments']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers'][':consumer_id']['assignments']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdAssignmentsQueryKey
        >
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
      ...getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdAssignmentsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdAssignments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers'][':consumer_id']['assignments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers'][':consumer_id']['assignments']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers'][':consumer_id']['assignments']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdAssignmentsQueryKey
        >
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
      ...getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdAssignmentsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdAssignmentsTopicNamePartitionsPartitionIdQueryKey(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers'][':consumer_id']['assignments'][':topic_name']['partitions'][':partition_id']['$get']
  >,
) {
  return [
    'clusters',
    '/clusters/:cluster_id/consumer-groups/:consumer_group_id/consumers/:consumer_id/assignments/:topic_name/partitions/:partition_id',
    args,
  ] as const
}

export function getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdAssignmentsTopicNamePartitionsPartitionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers'][':consumer_id']['assignments'][':topic_name']['partitions'][':partition_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers'][':consumer_id']['assignments'][':topic_name']['partitions'][':partition_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers'][':consumer_id']['assignments'][':topic_name']['partitions'][':partition_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdAssignmentsTopicNamePartitionsPartitionIdQueryKey
    >
  >({
    queryKey:
      getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdAssignmentsTopicNamePartitionsPartitionIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.clusters[':cluster_id']['consumer-groups'][':consumer_group_id'].consumers[
          ':consumer_id'
        ].assignments[':topic_name'].partitions[':partition_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdAssignmentsTopicNamePartitionsPartitionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers'][':consumer_id']['assignments'][':topic_name']['partitions'][':partition_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers'][':consumer_id']['assignments'][':topic_name']['partitions'][':partition_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers'][':consumer_id']['assignments'][':topic_name']['partitions'][':partition_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdAssignmentsTopicNamePartitionsPartitionIdQueryKey
        >
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
      ...getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdAssignmentsTopicNamePartitionsPartitionIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdAssignmentsTopicNamePartitionsPartitionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers'][':consumer_id']['assignments'][':topic_name']['partitions'][':partition_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers'][':consumer_id']['assignments'][':topic_name']['partitions'][':partition_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers'][':consumer_id']['assignments'][':topic_name']['partitions'][':partition_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdAssignmentsTopicNamePartitionsPartitionIdQueryKey
        >
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
      ...getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdAssignmentsTopicNamePartitionsPartitionIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getClustersClusterIdTopicsQueryKey(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['topics']['$get']>,
) {
  return ['clusters', '/clusters/:cluster_id/topics', args] as const
}

export function getClustersClusterIdTopicsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['topics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['topics']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['topics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersClusterIdTopicsQueryKey>
  >({
    queryKey: getClustersClusterIdTopicsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clusters[':cluster_id'].topics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useClustersClusterIdTopics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['topics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['topics']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['topics']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClustersClusterIdTopicsQueryKey>
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
      ...getClustersClusterIdTopicsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseClustersClusterIdTopics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['topics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['topics']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['topics']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClustersClusterIdTopicsQueryKey>
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
      ...getClustersClusterIdTopicsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostClustersClusterIdTopicsMutationKey() {
  return ['clusters', '/clusters/:cluster_id/topics', 'POST'] as const
}

export function getPostClustersClusterIdTopicsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['topics']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.clusters)[':cluster_id']['topics']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostClustersClusterIdTopicsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.clusters)[':cluster_id']['topics']['$post']>,
    ) {
      return parseResponse(client.clusters[':cluster_id'].topics.$post(args, options))
    },
  })
}

export function usePostClustersClusterIdTopics<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['topics']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.clusters)[':cluster_id']['topics']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostClustersClusterIdTopicsMutationOptions<TError, TOnMutateResult>(
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

export function getClustersClusterIdTopicsTopicNameQueryKey(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['topics'][':topic_name']['$get']>,
) {
  return ['clusters', '/clusters/:cluster_id/topics/:topic_name', args] as const
}

export function getClustersClusterIdTopicsTopicNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.clusters)[':cluster_id']['topics'][':topic_name']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['topics'][':topic_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.clusters)[':cluster_id']['topics'][':topic_name']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersClusterIdTopicsTopicNameQueryKey>
  >({
    queryKey: getClustersClusterIdTopicsTopicNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clusters[':cluster_id'].topics[':topic_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useClustersClusterIdTopicsTopicName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.clusters)[':cluster_id']['topics'][':topic_name']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['topics'][':topic_name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.clusters)[':cluster_id']['topics'][':topic_name']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClustersClusterIdTopicsTopicNameQueryKey>
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
      ...getClustersClusterIdTopicsTopicNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseClustersClusterIdTopicsTopicName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.clusters)[':cluster_id']['topics'][':topic_name']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['topics'][':topic_name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.clusters)[':cluster_id']['topics'][':topic_name']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClustersClusterIdTopicsTopicNameQueryKey>
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
      ...getClustersClusterIdTopicsTopicNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteClustersClusterIdTopicsTopicNameMutationKey() {
  return ['clusters', '/clusters/:cluster_id/topics/:topic_name', 'DELETE'] as const
}

export function getDeleteClustersClusterIdTopicsTopicNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.clusters)[':cluster_id']['topics'][':topic_name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteClustersClusterIdTopicsTopicNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['$delete']
      >,
    ) {
      return parseResponse(
        client.clusters[':cluster_id'].topics[':topic_name'].$delete(args, options),
      )
    },
  })
}

export function useDeleteClustersClusterIdTopicsTopicName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteClustersClusterIdTopicsTopicNameMutationOptions<
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

export function getPatchClustersClusterIdTopicsTopicNameMutationKey() {
  return ['clusters', '/clusters/:cluster_id/topics/:topic_name', 'PATCH'] as const
}

export function getPatchClustersClusterIdTopicsTopicNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.clusters)[':cluster_id']['topics'][':topic_name']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.clusters)[':cluster_id']['topics'][':topic_name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchClustersClusterIdTopicsTopicNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['$patch']
      >,
    ) {
      return parseResponse(
        client.clusters[':cluster_id'].topics[':topic_name'].$patch(args, options),
      )
    },
  })
}

export function usePatchClustersClusterIdTopicsTopicName<
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
                ReturnType<
                  (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchClustersClusterIdTopicsTopicNameMutationOptions<
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

export function getClustersClusterIdTopicsTopicNameConfigsQueryKey(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs']['$get']
  >,
) {
  return ['clusters', '/clusters/:cluster_id/topics/:topic_name/configs', args] as const
}

export function getClustersClusterIdTopicsTopicNameConfigsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersClusterIdTopicsTopicNameConfigsQueryKey>
  >({
    queryKey: getClustersClusterIdTopicsTopicNameConfigsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clusters[':cluster_id'].topics[':topic_name'].configs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useClustersClusterIdTopicsTopicNameConfigs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClustersClusterIdTopicsTopicNameConfigsQueryKey>
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
      ...getClustersClusterIdTopicsTopicNameConfigsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseClustersClusterIdTopicsTopicNameConfigs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClustersClusterIdTopicsTopicNameConfigsQueryKey>
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
      ...getClustersClusterIdTopicsTopicNameConfigsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostClustersClusterIdTopicsTopicNameConfigsAlterMutationKey() {
  return ['clusters', '/clusters/:cluster_id/topics/:topic_name/configs:alter', 'POST'] as const
}

export function getPostClustersClusterIdTopicsTopicNameConfigsAlterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs:alter']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs:alter']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostClustersClusterIdTopicsTopicNameConfigsAlterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs:alter']['$post']
      >,
    ) {
      return parseResponse(
        client.clusters[':cluster_id'].topics[':topic_name']['configs:alter'].$post(args, options),
      )
    },
  })
}

export function usePostClustersClusterIdTopicsTopicNameConfigsAlter<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs:alter']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs:alter']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostClustersClusterIdTopicsTopicNameConfigsAlterMutationOptions<
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

export function getClustersClusterIdTopicsTopicNameConfigsNameQueryKey(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs'][':name']['$get']
  >,
) {
  return ['clusters', '/clusters/:cluster_id/topics/:topic_name/configs/:name', args] as const
}

export function getClustersClusterIdTopicsTopicNameConfigsNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersClusterIdTopicsTopicNameConfigsNameQueryKey>
  >({
    queryKey: getClustersClusterIdTopicsTopicNameConfigsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clusters[':cluster_id'].topics[':topic_name'].configs[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useClustersClusterIdTopicsTopicNameConfigsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs'][':name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClustersClusterIdTopicsTopicNameConfigsNameQueryKey>
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
      ...getClustersClusterIdTopicsTopicNameConfigsNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseClustersClusterIdTopicsTopicNameConfigsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs'][':name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClustersClusterIdTopicsTopicNameConfigsNameQueryKey>
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
      ...getClustersClusterIdTopicsTopicNameConfigsNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutClustersClusterIdTopicsTopicNameConfigsNameMutationKey() {
  return ['clusters', '/clusters/:cluster_id/topics/:topic_name/configs/:name', 'PUT'] as const
}

export function getPutClustersClusterIdTopicsTopicNameConfigsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs'][':name']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs'][':name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutClustersClusterIdTopicsTopicNameConfigsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.clusters[':cluster_id'].topics[':topic_name'].configs[':name'].$put(args, options),
      )
    },
  })
}

export function usePutClustersClusterIdTopicsTopicNameConfigsName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs'][':name']['$put']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs'][':name']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutClustersClusterIdTopicsTopicNameConfigsNameMutationOptions<
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

export function getDeleteClustersClusterIdTopicsTopicNameConfigsNameMutationKey() {
  return ['clusters', '/clusters/:cluster_id/topics/:topic_name/configs/:name', 'DELETE'] as const
}

export function getDeleteClustersClusterIdTopicsTopicNameConfigsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs'][':name']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteClustersClusterIdTopicsTopicNameConfigsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.clusters[':cluster_id'].topics[':topic_name'].configs[':name'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteClustersClusterIdTopicsTopicNameConfigsName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs'][':name']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs'][':name']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteClustersClusterIdTopicsTopicNameConfigsNameMutationOptions<
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

export function getClustersClusterIdTopicsTopicNamePartitionsPartitionIdOffsetQueryKey(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['offset']['$get']
  >,
) {
  return [
    'clusters',
    '/clusters/:cluster_id/topics/:topic_name/partitions/:partition_id/offset',
    args,
  ] as const
}

export function getClustersClusterIdTopicsTopicNamePartitionsPartitionIdOffsetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['offset']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['offset']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['offset']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersClusterIdTopicsTopicNamePartitionsPartitionIdOffsetQueryKey>
  >({
    queryKey: getClustersClusterIdTopicsTopicNamePartitionsPartitionIdOffsetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clusters[':cluster_id'].topics[':topic_name'].partitions[
          ':partition_id'
        ].offset.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useClustersClusterIdTopicsTopicNamePartitionsPartitionIdOffset<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['offset']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['offset']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['offset']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClustersClusterIdTopicsTopicNamePartitionsPartitionIdOffsetQueryKey>
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
      ...getClustersClusterIdTopicsTopicNamePartitionsPartitionIdOffsetQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseClustersClusterIdTopicsTopicNamePartitionsPartitionIdOffset<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['offset']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['offset']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['offset']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClustersClusterIdTopicsTopicNamePartitionsPartitionIdOffsetQueryKey>
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
      ...getClustersClusterIdTopicsTopicNamePartitionsPartitionIdOffsetQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getClustersClusterIdTopicsTopicNamePartitionsQueryKey(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions']['$get']
  >,
) {
  return ['clusters', '/clusters/:cluster_id/topics/:topic_name/partitions', args] as const
}

export function getClustersClusterIdTopicsTopicNamePartitionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersClusterIdTopicsTopicNamePartitionsQueryKey>
  >({
    queryKey: getClustersClusterIdTopicsTopicNamePartitionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clusters[':cluster_id'].topics[':topic_name'].partitions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useClustersClusterIdTopicsTopicNamePartitions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClustersClusterIdTopicsTopicNamePartitionsQueryKey>
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
      ...getClustersClusterIdTopicsTopicNamePartitionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseClustersClusterIdTopicsTopicNamePartitions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClustersClusterIdTopicsTopicNamePartitionsQueryKey>
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
      ...getClustersClusterIdTopicsTopicNamePartitionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getClustersClusterIdTopicsTopicNamePartitionsPartitionIdQueryKey(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['$get']
  >,
) {
  return [
    'clusters',
    '/clusters/:cluster_id/topics/:topic_name/partitions/:partition_id',
    args,
  ] as const
}

export function getClustersClusterIdTopicsTopicNamePartitionsPartitionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersClusterIdTopicsTopicNamePartitionsPartitionIdQueryKey>
  >({
    queryKey: getClustersClusterIdTopicsTopicNamePartitionsPartitionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clusters[':cluster_id'].topics[':topic_name'].partitions[':partition_id'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useClustersClusterIdTopicsTopicNamePartitionsPartitionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClustersClusterIdTopicsTopicNamePartitionsPartitionIdQueryKey>
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
      ...getClustersClusterIdTopicsTopicNamePartitionsPartitionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseClustersClusterIdTopicsTopicNamePartitionsPartitionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClustersClusterIdTopicsTopicNamePartitionsPartitionIdQueryKey>
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
      ...getClustersClusterIdTopicsTopicNamePartitionsPartitionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getClustersClusterIdTopicsDashPartitionsDashReassignmentQueryKey(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics']['-']['partitions']['-']['reassignment']['$get']
  >,
) {
  return ['clusters', '/clusters/:cluster_id/topics/-/partitions/-/reassignment', args] as const
}

export function getClustersClusterIdTopicsDashPartitionsDashReassignmentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.clusters)[':cluster_id']['topics']['-']['partitions']['-']['reassignment']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics']['-']['partitions']['-']['reassignment']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.clusters)[':cluster_id']['topics']['-']['partitions']['-']['reassignment']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersClusterIdTopicsDashPartitionsDashReassignmentQueryKey>
  >({
    queryKey: getClustersClusterIdTopicsDashPartitionsDashReassignmentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clusters[':cluster_id'].topics['-'].partitions['-'].reassignment.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useClustersClusterIdTopicsDashPartitionsDashReassignment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.clusters)[':cluster_id']['topics']['-']['partitions']['-']['reassignment']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics']['-']['partitions']['-']['reassignment']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.clusters)[':cluster_id']['topics']['-']['partitions']['-']['reassignment']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClustersClusterIdTopicsDashPartitionsDashReassignmentQueryKey>
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
      ...getClustersClusterIdTopicsDashPartitionsDashReassignmentQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseClustersClusterIdTopicsDashPartitionsDashReassignment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.clusters)[':cluster_id']['topics']['-']['partitions']['-']['reassignment']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics']['-']['partitions']['-']['reassignment']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.clusters)[':cluster_id']['topics']['-']['partitions']['-']['reassignment']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClustersClusterIdTopicsDashPartitionsDashReassignmentQueryKey>
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
      ...getClustersClusterIdTopicsDashPartitionsDashReassignmentQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getClustersClusterIdTopicsTopicNamePartitionsDashReassignmentQueryKey(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions']['-']['reassignment']['$get']
  >,
) {
  return [
    'clusters',
    '/clusters/:cluster_id/topics/:topic_name/partitions/-/reassignment',
    args,
  ] as const
}

export function getClustersClusterIdTopicsTopicNamePartitionsDashReassignmentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions']['-']['reassignment']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions']['-']['reassignment']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions']['-']['reassignment']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersClusterIdTopicsTopicNamePartitionsDashReassignmentQueryKey>
  >({
    queryKey: getClustersClusterIdTopicsTopicNamePartitionsDashReassignmentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clusters[':cluster_id'].topics[':topic_name'].partitions['-'].reassignment.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useClustersClusterIdTopicsTopicNamePartitionsDashReassignment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions']['-']['reassignment']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions']['-']['reassignment']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions']['-']['reassignment']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClustersClusterIdTopicsTopicNamePartitionsDashReassignmentQueryKey>
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
      ...getClustersClusterIdTopicsTopicNamePartitionsDashReassignmentQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseClustersClusterIdTopicsTopicNamePartitionsDashReassignment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions']['-']['reassignment']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions']['-']['reassignment']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions']['-']['reassignment']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClustersClusterIdTopicsTopicNamePartitionsDashReassignmentQueryKey>
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
      ...getClustersClusterIdTopicsTopicNamePartitionsDashReassignmentQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getClustersClusterIdTopicsTopicNamePartitionsPartitionIdReassignmentQueryKey(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['reassignment']['$get']
  >,
) {
  return [
    'clusters',
    '/clusters/:cluster_id/topics/:topic_name/partitions/:partition_id/reassignment',
    args,
  ] as const
}

export function getClustersClusterIdTopicsTopicNamePartitionsPartitionIdReassignmentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['reassignment']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['reassignment']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['reassignment']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersClusterIdTopicsTopicNamePartitionsPartitionIdReassignmentQueryKey>
  >({
    queryKey: getClustersClusterIdTopicsTopicNamePartitionsPartitionIdReassignmentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clusters[':cluster_id'].topics[':topic_name'].partitions[
          ':partition_id'
        ].reassignment.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useClustersClusterIdTopicsTopicNamePartitionsPartitionIdReassignment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['reassignment']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['reassignment']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['reassignment']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getClustersClusterIdTopicsTopicNamePartitionsPartitionIdReassignmentQueryKey
        >
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
      ...getClustersClusterIdTopicsTopicNamePartitionsPartitionIdReassignmentQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseClustersClusterIdTopicsTopicNamePartitionsPartitionIdReassignment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['reassignment']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['reassignment']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['reassignment']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getClustersClusterIdTopicsTopicNamePartitionsPartitionIdReassignmentQueryKey
        >
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
      ...getClustersClusterIdTopicsTopicNamePartitionsPartitionIdReassignmentQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getClustersClusterIdTopicsTopicNamePartitionsPartitionIdReplicasQueryKey(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['replicas']['$get']
  >,
) {
  return [
    'clusters',
    '/clusters/:cluster_id/topics/:topic_name/partitions/:partition_id/replicas',
    args,
  ] as const
}

export function getClustersClusterIdTopicsTopicNamePartitionsPartitionIdReplicasQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['replicas']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['replicas']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['replicas']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersClusterIdTopicsTopicNamePartitionsPartitionIdReplicasQueryKey>
  >({
    queryKey: getClustersClusterIdTopicsTopicNamePartitionsPartitionIdReplicasQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clusters[':cluster_id'].topics[':topic_name'].partitions[
          ':partition_id'
        ].replicas.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useClustersClusterIdTopicsTopicNamePartitionsPartitionIdReplicas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['replicas']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['replicas']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['replicas']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClustersClusterIdTopicsTopicNamePartitionsPartitionIdReplicasQueryKey>
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
      ...getClustersClusterIdTopicsTopicNamePartitionsPartitionIdReplicasQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseClustersClusterIdTopicsTopicNamePartitionsPartitionIdReplicas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['replicas']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['replicas']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['replicas']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClustersClusterIdTopicsTopicNamePartitionsPartitionIdReplicasQueryKey>
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
      ...getClustersClusterIdTopicsTopicNamePartitionsPartitionIdReplicasQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getClustersClusterIdTopicsTopicNamePartitionsPartitionIdReplicasBrokerIdQueryKey(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['replicas'][':broker_id']['$get']
  >,
) {
  return [
    'clusters',
    '/clusters/:cluster_id/topics/:topic_name/partitions/:partition_id/replicas/:broker_id',
    args,
  ] as const
}

export function getClustersClusterIdTopicsTopicNamePartitionsPartitionIdReplicasBrokerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['replicas'][':broker_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['replicas'][':broker_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['replicas'][':broker_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getClustersClusterIdTopicsTopicNamePartitionsPartitionIdReplicasBrokerIdQueryKey
    >
  >({
    queryKey:
      getClustersClusterIdTopicsTopicNamePartitionsPartitionIdReplicasBrokerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clusters[':cluster_id'].topics[':topic_name'].partitions[':partition_id'].replicas[
          ':broker_id'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useClustersClusterIdTopicsTopicNamePartitionsPartitionIdReplicasBrokerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['replicas'][':broker_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['replicas'][':broker_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['replicas'][':broker_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getClustersClusterIdTopicsTopicNamePartitionsPartitionIdReplicasBrokerIdQueryKey
        >
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
      ...getClustersClusterIdTopicsTopicNamePartitionsPartitionIdReplicasBrokerIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseClustersClusterIdTopicsTopicNamePartitionsPartitionIdReplicasBrokerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['replicas'][':broker_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['replicas'][':broker_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['replicas'][':broker_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getClustersClusterIdTopicsTopicNamePartitionsPartitionIdReplicasBrokerIdQueryKey
        >
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
      ...getClustersClusterIdTopicsTopicNamePartitionsPartitionIdReplicasBrokerIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getClustersClusterIdTopicsDashConfigsQueryKey(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['topics']['-']['configs']['$get']>,
) {
  return ['clusters', '/clusters/:cluster_id/topics/-/configs', args] as const
}

export function getClustersClusterIdTopicsDashConfigsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.clusters)[':cluster_id']['topics']['-']['configs']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['topics']['-']['configs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.clusters)[':cluster_id']['topics']['-']['configs']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersClusterIdTopicsDashConfigsQueryKey>
  >({
    queryKey: getClustersClusterIdTopicsDashConfigsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clusters[':cluster_id'].topics['-'].configs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useClustersClusterIdTopicsDashConfigs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.clusters)[':cluster_id']['topics']['-']['configs']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['topics']['-']['configs']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.clusters)[':cluster_id']['topics']['-']['configs']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClustersClusterIdTopicsDashConfigsQueryKey>
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
      ...getClustersClusterIdTopicsDashConfigsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseClustersClusterIdTopicsDashConfigs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.clusters)[':cluster_id']['topics']['-']['configs']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['topics']['-']['configs']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.clusters)[':cluster_id']['topics']['-']['configs']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClustersClusterIdTopicsDashConfigsQueryKey>
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
      ...getClustersClusterIdTopicsDashConfigsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostClustersClusterIdTopicsTopicNameRecordsMutationKey() {
  return ['clusters', '/clusters/:cluster_id/topics/:topic_name/records', 'POST'] as const
}

export function getPostClustersClusterIdTopicsTopicNameRecordsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['records']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['records']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostClustersClusterIdTopicsTopicNameRecordsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['records']['$post']
      >,
    ) {
      return parseResponse(
        client.clusters[':cluster_id'].topics[':topic_name'].records.$post(args, options),
      )
    },
  })
}

export function usePostClustersClusterIdTopicsTopicNameRecords<
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
                ReturnType<
                  (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['records']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['records']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostClustersClusterIdTopicsTopicNameRecordsMutationOptions<
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

export function getPostClustersClusterIdTopicsTopicNameRecordsBatchMutationKey() {
  return ['clusters', '/clusters/:cluster_id/topics/:topic_name/records:batch', 'POST'] as const
}

export function getPostClustersClusterIdTopicsTopicNameRecordsBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['records:batch']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['records:batch']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostClustersClusterIdTopicsTopicNameRecordsBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['records:batch']['$post']
      >,
    ) {
      return parseResponse(
        client.clusters[':cluster_id'].topics[':topic_name']['records:batch'].$post(args, options),
      )
    },
  })
}

export function usePostClustersClusterIdTopicsTopicNameRecordsBatch<
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
                ReturnType<
                  (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['records:batch']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['records:batch']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostClustersClusterIdTopicsTopicNameRecordsBatchMutationOptions<
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
