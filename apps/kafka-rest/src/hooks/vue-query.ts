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

export function getClustersKey() {
  return ['clusters'] as const
}

export function getClustersQueryKey() {
  return ['clusters', '/clusters'] as const
}

export function getClustersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getClustersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clusters.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useClusters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clusters.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clusters.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clusters.$get>>>>
          >,
          ReturnType<typeof getClustersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clusters.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getClustersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getClustersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.clusters.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getClustersClusterIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.clusters)[':cluster_id']['$get']>>,
) {
  return ['clusters', '/clusters/:cluster_id', toValue(args)] as const
}

export function getClustersClusterIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.clusters)[':cluster_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClustersClusterIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clusters[':cluster_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useClustersClusterId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.clusters)[':cluster_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getClustersClusterIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersClusterIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClustersClusterIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.clusters[':cluster_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.clusters)[':cluster_id']['acls']['$get']>>,
) {
  return ['clusters', '/clusters/:cluster_id/acls', toValue(args)] as const
}

export function getClustersClusterIdAclsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.clusters)[':cluster_id']['acls']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClustersClusterIdAclsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clusters[':cluster_id'].acls.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.clusters)[':cluster_id']['acls']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['acls']['$get']>>
              >
            >
          >,
          ReturnType<typeof getClustersClusterIdAclsQueryKey>
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
          Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['acls']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersClusterIdAclsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClustersClusterIdAclsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.clusters[':cluster_id'].acls.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.clusters)[':cluster_id']['broker-configs']['$get']>
  >,
) {
  return ['clusters', '/clusters/:cluster_id/broker-configs', toValue(args)] as const
}

export function getClustersClusterIdBrokerConfigsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.clusters)[':cluster_id']['broker-configs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClustersClusterIdBrokerConfigsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clusters[':cluster_id']['broker-configs'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.clusters)[':cluster_id']['broker-configs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.clusters)[':cluster_id']['broker-configs']['$get']>
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
                  ReturnType<(typeof client.clusters)[':cluster_id']['broker-configs']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getClustersClusterIdBrokerConfigsQueryKey>
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
          Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['broker-configs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersClusterIdBrokerConfigsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClustersClusterIdBrokerConfigsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.clusters[':cluster_id']['broker-configs'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
          InferRequestType<
            (typeof client.clusters)[':cluster_id']['broker-configs:alter']['$post']
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.clusters)[':cluster_id']['broker-configs'][':name']['$get']>
  >,
) {
  return ['clusters', '/clusters/:cluster_id/broker-configs/:name', toValue(args)] as const
}

export function getClustersClusterIdBrokerConfigsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.clusters)[':cluster_id']['broker-configs'][':name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClustersClusterIdBrokerConfigsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clusters[':cluster_id']['broker-configs'][':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.clusters)[':cluster_id']['broker-configs'][':name']['$get']>
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
                    (typeof client.clusters)[':cluster_id']['broker-configs'][':name']['$get']
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
                    (typeof client.clusters)[':cluster_id']['broker-configs'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getClustersClusterIdBrokerConfigsNameQueryKey>
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
            ReturnType<(typeof client.clusters)[':cluster_id']['broker-configs'][':name']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersClusterIdBrokerConfigsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClustersClusterIdBrokerConfigsNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.clusters[':cluster_id']['broker-configs'][':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.clusters)[':cluster_id']['brokers']['$get']>
  >,
) {
  return ['clusters', '/clusters/:cluster_id/brokers', toValue(args)] as const
}

export function getClustersClusterIdBrokersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.clusters)[':cluster_id']['brokers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClustersClusterIdBrokersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clusters[':cluster_id'].brokers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.clusters)[':cluster_id']['brokers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['brokers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getClustersClusterIdBrokersQueryKey>
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
          Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['brokers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersClusterIdBrokersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClustersClusterIdBrokersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.clusters[':cluster_id'].brokers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getClustersClusterIdBrokersBrokerIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['$get']>
  >,
) {
  return ['clusters', '/clusters/:cluster_id/brokers/:broker_id', toValue(args)] as const
}

export function getClustersClusterIdBrokersBrokerIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClustersClusterIdBrokersBrokerIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clusters[':cluster_id'].brokers[':broker_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['$get']>
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
                    (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['$get']
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
                    (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getClustersClusterIdBrokersBrokerIdQueryKey>
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
            ReturnType<(typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersClusterIdBrokersBrokerIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClustersClusterIdBrokersBrokerIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.clusters[':cluster_id'].brokers[':broker_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getClustersClusterIdBrokersDashConfigsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.clusters)[':cluster_id']['brokers']['-']['configs']['$get']>
  >,
) {
  return ['clusters', '/clusters/:cluster_id/brokers/-/configs', toValue(args)] as const
}

export function getClustersClusterIdBrokersDashConfigsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.clusters)[':cluster_id']['brokers']['-']['configs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClustersClusterIdBrokersDashConfigsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clusters[':cluster_id'].brokers['-'].configs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.clusters)[':cluster_id']['brokers']['-']['configs']['$get']>
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
                    (typeof client.clusters)[':cluster_id']['brokers']['-']['configs']['$get']
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
                    (typeof client.clusters)[':cluster_id']['brokers']['-']['configs']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getClustersClusterIdBrokersDashConfigsQueryKey>
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
            ReturnType<(typeof client.clusters)[':cluster_id']['brokers']['-']['configs']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersClusterIdBrokersDashConfigsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClustersClusterIdBrokersDashConfigsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.clusters[':cluster_id'].brokers['-'].configs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getClustersClusterIdBrokersBrokerIdConfigsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs']['$get']
    >
  >,
) {
  return ['clusters', '/clusters/:cluster_id/brokers/:broker_id/configs', toValue(args)] as const
}

export function getClustersClusterIdBrokersBrokerIdConfigsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClustersClusterIdBrokersBrokerIdConfigsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clusters[':cluster_id'].brokers[':broker_id'].configs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs']['$get']
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
                    (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs']['$get']
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
                    (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getClustersClusterIdBrokersBrokerIdConfigsQueryKey>
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
              (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersClusterIdBrokersBrokerIdConfigsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClustersClusterIdBrokersBrokerIdConfigsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.clusters[':cluster_id'].brokers[':broker_id'].configs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs'][':name']['$get']
    >
  >,
) {
  return [
    'clusters',
    '/clusters/:cluster_id/brokers/:broker_id/configs/:name',
    toValue(args),
  ] as const
}

export function getClustersClusterIdBrokersBrokerIdConfigsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClustersClusterIdBrokersBrokerIdConfigsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clusters[':cluster_id'].brokers[':broker_id'].configs[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs'][':name']['$get']
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
                    (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs'][':name']['$get']
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
                    (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getClustersClusterIdBrokersBrokerIdConfigsNameQueryKey>
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
              (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersClusterIdBrokersBrokerIdConfigsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClustersClusterIdBrokersBrokerIdConfigsNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.clusters[':cluster_id'].brokers[':broker_id'].configs[':name'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['partition-replicas']['$get']
    >
  >,
) {
  return [
    'clusters',
    '/clusters/:cluster_id/brokers/:broker_id/partition-replicas',
    toValue(args),
  ] as const
}

export function getClustersClusterIdBrokersBrokerIdPartitionReplicasQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['partition-replicas']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClustersClusterIdBrokersBrokerIdPartitionReplicasQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clusters[':cluster_id'].brokers[':broker_id']['partition-replicas'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['partition-replicas']['$get']
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
                    (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['partition-replicas']['$get']
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
                    (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['partition-replicas']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getClustersClusterIdBrokersBrokerIdPartitionReplicasQueryKey>
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
              (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['partition-replicas']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersClusterIdBrokersBrokerIdPartitionReplicasQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClustersClusterIdBrokersBrokerIdPartitionReplicasQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.clusters[':cluster_id'].brokers[':broker_id']['partition-replicas'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getClustersClusterIdConsumerGroupsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.clusters)[':cluster_id']['consumer-groups']['$get']>
  >,
) {
  return ['clusters', '/clusters/:cluster_id/consumer-groups', toValue(args)] as const
}

export function getClustersClusterIdConsumerGroupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.clusters)[':cluster_id']['consumer-groups']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClustersClusterIdConsumerGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clusters[':cluster_id']['consumer-groups'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.clusters)[':cluster_id']['consumer-groups']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.clusters)[':cluster_id']['consumer-groups']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getClustersClusterIdConsumerGroupsQueryKey>
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
          Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['consumer-groups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersClusterIdConsumerGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClustersClusterIdConsumerGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.clusters[':cluster_id']['consumer-groups'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getClustersClusterIdConsumerGroupsConsumerGroupIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['$get']
    >
  >,
) {
  return [
    'clusters',
    '/clusters/:cluster_id/consumer-groups/:consumer_group_id',
    toValue(args),
  ] as const
}

export function getClustersClusterIdConsumerGroupsConsumerGroupIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClustersClusterIdConsumerGroupsConsumerGroupIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clusters[':cluster_id']['consumer-groups'][':consumer_group_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['$get']
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
                    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['$get']
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
                    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getClustersClusterIdConsumerGroupsConsumerGroupIdQueryKey>
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
              (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersClusterIdConsumerGroupsConsumerGroupIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClustersClusterIdConsumerGroupsConsumerGroupIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.clusters[':cluster_id']['consumer-groups'][':consumer_group_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers']['$get']
    >
  >,
) {
  return [
    'clusters',
    '/clusters/:cluster_id/consumer-groups/:consumer_group_id/consumers',
    toValue(args),
  ] as const
}

export function getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clusters[':cluster_id']['consumer-groups'][':consumer_group_id'].consumers.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers']['$get']
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
                    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers']['$get']
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
                    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersQueryKey>
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
              (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.clusters[':cluster_id']['consumer-groups'][':consumer_group_id'].consumers.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getClustersClusterIdConsumerGroupsConsumerGroupIdLagSummaryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['lag-summary']['$get']
    >
  >,
) {
  return [
    'clusters',
    '/clusters/:cluster_id/consumer-groups/:consumer_group_id/lag-summary',
    toValue(args),
  ] as const
}

export function getClustersClusterIdConsumerGroupsConsumerGroupIdLagSummaryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['lag-summary']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getClustersClusterIdConsumerGroupsConsumerGroupIdLagSummaryQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clusters[':cluster_id']['consumer-groups'][':consumer_group_id']['lag-summary'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['lag-summary']['$get']
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
                    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['lag-summary']['$get']
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
                    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['lag-summary']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getClustersClusterIdConsumerGroupsConsumerGroupIdLagSummaryQueryKey>
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
              (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['lag-summary']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersClusterIdConsumerGroupsConsumerGroupIdLagSummaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getClustersClusterIdConsumerGroupsConsumerGroupIdLagSummaryQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.clusters[':cluster_id']['consumer-groups'][':consumer_group_id'][
            'lag-summary'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getClustersClusterIdConsumerGroupsConsumerGroupIdLagsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['lags']['$get']
    >
  >,
) {
  return [
    'clusters',
    '/clusters/:cluster_id/consumer-groups/:consumer_group_id/lags',
    toValue(args),
  ] as const
}

export function getClustersClusterIdConsumerGroupsConsumerGroupIdLagsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['lags']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClustersClusterIdConsumerGroupsConsumerGroupIdLagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clusters[':cluster_id']['consumer-groups'][':consumer_group_id'].lags.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['lags']['$get']
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
                    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['lags']['$get']
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
                    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['lags']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getClustersClusterIdConsumerGroupsConsumerGroupIdLagsQueryKey>
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
              (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['lags']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersClusterIdConsumerGroupsConsumerGroupIdLagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClustersClusterIdConsumerGroupsConsumerGroupIdLagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.clusters[':cluster_id']['consumer-groups'][':consumer_group_id'].lags.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getClustersClusterIdConsumerGroupsConsumerGroupIdLagsTopicNamePartitionsPartitionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['lags'][':topic_name']['partitions'][':partition_id']['$get']
    >
  >,
) {
  return [
    'clusters',
    '/clusters/:cluster_id/consumer-groups/:consumer_group_id/lags/:topic_name/partitions/:partition_id',
    toValue(args),
  ] as const
}

export function getClustersClusterIdConsumerGroupsConsumerGroupIdLagsTopicNamePartitionsPartitionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['lags'][':topic_name']['partitions'][':partition_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getClustersClusterIdConsumerGroupsConsumerGroupIdLagsTopicNamePartitionsPartitionIdQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clusters[':cluster_id']['consumer-groups'][':consumer_group_id'].lags[
          ':topic_name'
        ].partitions[':partition_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['lags'][':topic_name']['partitions'][':partition_id']['$get']
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
                    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['lags'][':topic_name']['partitions'][':partition_id']['$get']
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
                    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['lags'][':topic_name']['partitions'][':partition_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getClustersClusterIdConsumerGroupsConsumerGroupIdLagsTopicNamePartitionsPartitionIdQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getClustersClusterIdConsumerGroupsConsumerGroupIdLagsTopicNamePartitionsPartitionIdQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.clusters[':cluster_id']['consumer-groups'][':consumer_group_id'].lags[
            ':topic_name'
          ].partitions[':partition_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers'][':consumer_id']['$get']
    >
  >,
) {
  return [
    'clusters',
    '/clusters/:cluster_id/consumer-groups/:consumer_group_id/consumers/:consumer_id',
    toValue(args),
  ] as const
}

export function getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers'][':consumer_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clusters[':cluster_id']['consumer-groups'][':consumer_group_id'].consumers[
          ':consumer_id'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers'][':consumer_id']['$get']
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
                    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers'][':consumer_id']['$get']
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
                    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers'][':consumer_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdQueryKey
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
              (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers'][':consumer_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.clusters[':cluster_id']['consumer-groups'][':consumer_group_id'].consumers[
            ':consumer_id'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdAssignmentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers'][':consumer_id']['assignments']['$get']
    >
  >,
) {
  return [
    'clusters',
    '/clusters/:cluster_id/consumer-groups/:consumer_group_id/consumers/:consumer_id/assignments',
    toValue(args),
  ] as const
}

export function getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdAssignmentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers'][':consumer_id']['assignments']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdAssignmentsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clusters[':cluster_id']['consumer-groups'][':consumer_group_id'].consumers[
          ':consumer_id'
        ].assignments.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers'][':consumer_id']['assignments']['$get']
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
                    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers'][':consumer_id']['assignments']['$get']
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
                    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers'][':consumer_id']['assignments']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdAssignmentsQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdAssignmentsQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.clusters[':cluster_id']['consumer-groups'][':consumer_group_id'].consumers[
            ':consumer_id'
          ].assignments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdAssignmentsTopicNamePartitionsPartitionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers'][':consumer_id']['assignments'][':topic_name']['partitions'][':partition_id']['$get']
    >
  >,
) {
  return [
    'clusters',
    '/clusters/:cluster_id/consumer-groups/:consumer_group_id/consumers/:consumer_id/assignments/:topic_name/partitions/:partition_id',
    toValue(args),
  ] as const
}

export function getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdAssignmentsTopicNamePartitionsPartitionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers'][':consumer_id']['assignments'][':topic_name']['partitions'][':partition_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdAssignmentsTopicNamePartitionsPartitionIdQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clusters[':cluster_id']['consumer-groups'][':consumer_group_id'].consumers[
          ':consumer_id'
        ].assignments[':topic_name'].partitions[':partition_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers'][':consumer_id']['assignments'][':topic_name']['partitions'][':partition_id']['$get']
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
                    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers'][':consumer_id']['assignments'][':topic_name']['partitions'][':partition_id']['$get']
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
                    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers'][':consumer_id']['assignments'][':topic_name']['partitions'][':partition_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdAssignmentsTopicNamePartitionsPartitionIdQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdAssignmentsTopicNamePartitionsPartitionIdQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.clusters[':cluster_id']['consumer-groups'][':consumer_group_id'].consumers[
            ':consumer_id'
          ].assignments[':topic_name'].partitions[':partition_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getClustersClusterIdTopicsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.clusters)[':cluster_id']['topics']['$get']>
  >,
) {
  return ['clusters', '/clusters/:cluster_id/topics', toValue(args)] as const
}

export function getClustersClusterIdTopicsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.clusters)[':cluster_id']['topics']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClustersClusterIdTopicsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clusters[':cluster_id'].topics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.clusters)[':cluster_id']['topics']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['topics']['$get']>>
              >
            >
          >,
          ReturnType<typeof getClustersClusterIdTopicsQueryKey>
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
          Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['topics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersClusterIdTopicsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClustersClusterIdTopicsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.clusters[':cluster_id'].topics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.clusters)[':cluster_id']['topics'][':topic_name']['$get']>
  >,
) {
  return ['clusters', '/clusters/:cluster_id/topics/:topic_name', toValue(args)] as const
}

export function getClustersClusterIdTopicsTopicNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.clusters)[':cluster_id']['topics'][':topic_name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClustersClusterIdTopicsTopicNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clusters[':cluster_id'].topics[':topic_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.clusters)[':cluster_id']['topics'][':topic_name']['$get']>
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
                    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['$get']
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
                    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getClustersClusterIdTopicsTopicNameQueryKey>
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
            ReturnType<(typeof client.clusters)[':cluster_id']['topics'][':topic_name']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersClusterIdTopicsTopicNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClustersClusterIdTopicsTopicNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.clusters[':cluster_id'].topics[':topic_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs']['$get']
    >
  >,
) {
  return ['clusters', '/clusters/:cluster_id/topics/:topic_name/configs', toValue(args)] as const
}

export function getClustersClusterIdTopicsTopicNameConfigsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClustersClusterIdTopicsTopicNameConfigsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clusters[':cluster_id'].topics[':topic_name'].configs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs']['$get']
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
                    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs']['$get']
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
                    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getClustersClusterIdTopicsTopicNameConfigsQueryKey>
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
              (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersClusterIdTopicsTopicNameConfigsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClustersClusterIdTopicsTopicNameConfigsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.clusters[':cluster_id'].topics[':topic_name'].configs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs'][':name']['$get']
    >
  >,
) {
  return [
    'clusters',
    '/clusters/:cluster_id/topics/:topic_name/configs/:name',
    toValue(args),
  ] as const
}

export function getClustersClusterIdTopicsTopicNameConfigsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClustersClusterIdTopicsTopicNameConfigsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clusters[':cluster_id'].topics[':topic_name'].configs[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs'][':name']['$get']
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
                    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs'][':name']['$get']
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
                    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getClustersClusterIdTopicsTopicNameConfigsNameQueryKey>
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
              (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersClusterIdTopicsTopicNameConfigsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClustersClusterIdTopicsTopicNameConfigsNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.clusters[':cluster_id'].topics[':topic_name'].configs[':name'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['offset']['$get']
    >
  >,
) {
  return [
    'clusters',
    '/clusters/:cluster_id/topics/:topic_name/partitions/:partition_id/offset',
    toValue(args),
  ] as const
}

export function getClustersClusterIdTopicsTopicNamePartitionsPartitionIdOffsetQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['offset']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getClustersClusterIdTopicsTopicNamePartitionsPartitionIdOffsetQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clusters[':cluster_id'].topics[':topic_name'].partitions[
          ':partition_id'
        ].offset.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['offset']['$get']
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
                    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['offset']['$get']
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
                    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['offset']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getClustersClusterIdTopicsTopicNamePartitionsPartitionIdOffsetQueryKey>
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
              (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['offset']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersClusterIdTopicsTopicNamePartitionsPartitionIdOffsetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getClustersClusterIdTopicsTopicNamePartitionsPartitionIdOffsetQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.clusters[':cluster_id'].topics[':topic_name'].partitions[
            ':partition_id'
          ].offset.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getClustersClusterIdTopicsTopicNamePartitionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions']['$get']
    >
  >,
) {
  return ['clusters', '/clusters/:cluster_id/topics/:topic_name/partitions', toValue(args)] as const
}

export function getClustersClusterIdTopicsTopicNamePartitionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClustersClusterIdTopicsTopicNamePartitionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clusters[':cluster_id'].topics[':topic_name'].partitions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions']['$get']
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
                    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions']['$get']
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
                    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getClustersClusterIdTopicsTopicNamePartitionsQueryKey>
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
              (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersClusterIdTopicsTopicNamePartitionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClustersClusterIdTopicsTopicNamePartitionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.clusters[':cluster_id'].topics[':topic_name'].partitions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getClustersClusterIdTopicsTopicNamePartitionsPartitionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['$get']
    >
  >,
) {
  return [
    'clusters',
    '/clusters/:cluster_id/topics/:topic_name/partitions/:partition_id',
    toValue(args),
  ] as const
}

export function getClustersClusterIdTopicsTopicNamePartitionsPartitionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getClustersClusterIdTopicsTopicNamePartitionsPartitionIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clusters[':cluster_id'].topics[':topic_name'].partitions[':partition_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['$get']
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
                    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['$get']
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
                    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getClustersClusterIdTopicsTopicNamePartitionsPartitionIdQueryKey>
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
              (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersClusterIdTopicsTopicNamePartitionsPartitionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getClustersClusterIdTopicsTopicNamePartitionsPartitionIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.clusters[':cluster_id'].topics[':topic_name'].partitions[':partition_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getClustersClusterIdTopicsDashPartitionsDashReassignmentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['topics']['-']['partitions']['-']['reassignment']['$get']
    >
  >,
) {
  return [
    'clusters',
    '/clusters/:cluster_id/topics/-/partitions/-/reassignment',
    toValue(args),
  ] as const
}

export function getClustersClusterIdTopicsDashPartitionsDashReassignmentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['topics']['-']['partitions']['-']['reassignment']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getClustersClusterIdTopicsDashPartitionsDashReassignmentQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clusters[':cluster_id'].topics['-'].partitions['-'].reassignment.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['topics']['-']['partitions']['-']['reassignment']['$get']
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
                    (typeof client.clusters)[':cluster_id']['topics']['-']['partitions']['-']['reassignment']['$get']
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
                    (typeof client.clusters)[':cluster_id']['topics']['-']['partitions']['-']['reassignment']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getClustersClusterIdTopicsDashPartitionsDashReassignmentQueryKey>
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
              (typeof client.clusters)[':cluster_id']['topics']['-']['partitions']['-']['reassignment']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersClusterIdTopicsDashPartitionsDashReassignmentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getClustersClusterIdTopicsDashPartitionsDashReassignmentQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.clusters[':cluster_id'].topics['-'].partitions['-'].reassignment.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getClustersClusterIdTopicsTopicNamePartitionsDashReassignmentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions']['-']['reassignment']['$get']
    >
  >,
) {
  return [
    'clusters',
    '/clusters/:cluster_id/topics/:topic_name/partitions/-/reassignment',
    toValue(args),
  ] as const
}

export function getClustersClusterIdTopicsTopicNamePartitionsDashReassignmentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions']['-']['reassignment']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getClustersClusterIdTopicsTopicNamePartitionsDashReassignmentQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clusters[':cluster_id'].topics[':topic_name'].partitions['-'].reassignment.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions']['-']['reassignment']['$get']
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
                    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions']['-']['reassignment']['$get']
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
                    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions']['-']['reassignment']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getClustersClusterIdTopicsTopicNamePartitionsDashReassignmentQueryKey>
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
              (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions']['-']['reassignment']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersClusterIdTopicsTopicNamePartitionsDashReassignmentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getClustersClusterIdTopicsTopicNamePartitionsDashReassignmentQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.clusters[':cluster_id'].topics[':topic_name'].partitions['-'].reassignment.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getClustersClusterIdTopicsTopicNamePartitionsPartitionIdReassignmentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['reassignment']['$get']
    >
  >,
) {
  return [
    'clusters',
    '/clusters/:cluster_id/topics/:topic_name/partitions/:partition_id/reassignment',
    toValue(args),
  ] as const
}

export function getClustersClusterIdTopicsTopicNamePartitionsPartitionIdReassignmentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['reassignment']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getClustersClusterIdTopicsTopicNamePartitionsPartitionIdReassignmentQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clusters[':cluster_id'].topics[':topic_name'].partitions[
          ':partition_id'
        ].reassignment.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['reassignment']['$get']
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
                    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['reassignment']['$get']
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
                    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['reassignment']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getClustersClusterIdTopicsTopicNamePartitionsPartitionIdReassignmentQueryKey
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
              (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['reassignment']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersClusterIdTopicsTopicNamePartitionsPartitionIdReassignmentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getClustersClusterIdTopicsTopicNamePartitionsPartitionIdReassignmentQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.clusters[':cluster_id'].topics[':topic_name'].partitions[
            ':partition_id'
          ].reassignment.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getClustersClusterIdTopicsTopicNamePartitionsPartitionIdReplicasQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['replicas']['$get']
    >
  >,
) {
  return [
    'clusters',
    '/clusters/:cluster_id/topics/:topic_name/partitions/:partition_id/replicas',
    toValue(args),
  ] as const
}

export function getClustersClusterIdTopicsTopicNamePartitionsPartitionIdReplicasQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['replicas']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getClustersClusterIdTopicsTopicNamePartitionsPartitionIdReplicasQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clusters[':cluster_id'].topics[':topic_name'].partitions[
          ':partition_id'
        ].replicas.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['replicas']['$get']
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
                    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['replicas']['$get']
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
                    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['replicas']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getClustersClusterIdTopicsTopicNamePartitionsPartitionIdReplicasQueryKey
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
              (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['replicas']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersClusterIdTopicsTopicNamePartitionsPartitionIdReplicasQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getClustersClusterIdTopicsTopicNamePartitionsPartitionIdReplicasQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.clusters[':cluster_id'].topics[':topic_name'].partitions[
            ':partition_id'
          ].replicas.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getClustersClusterIdTopicsTopicNamePartitionsPartitionIdReplicasBrokerIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['replicas'][':broker_id']['$get']
    >
  >,
) {
  return [
    'clusters',
    '/clusters/:cluster_id/topics/:topic_name/partitions/:partition_id/replicas/:broker_id',
    toValue(args),
  ] as const
}

export function getClustersClusterIdTopicsTopicNamePartitionsPartitionIdReplicasBrokerIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['replicas'][':broker_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getClustersClusterIdTopicsTopicNamePartitionsPartitionIdReplicasBrokerIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clusters[':cluster_id'].topics[':topic_name'].partitions[':partition_id'].replicas[
          ':broker_id'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['replicas'][':broker_id']['$get']
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
                    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['replicas'][':broker_id']['$get']
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
                    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['replicas'][':broker_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getClustersClusterIdTopicsTopicNamePartitionsPartitionIdReplicasBrokerIdQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getClustersClusterIdTopicsTopicNamePartitionsPartitionIdReplicasBrokerIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.clusters[':cluster_id'].topics[':topic_name'].partitions[':partition_id'].replicas[
            ':broker_id'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getClustersClusterIdTopicsDashConfigsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.clusters)[':cluster_id']['topics']['-']['configs']['$get']>
  >,
) {
  return ['clusters', '/clusters/:cluster_id/topics/-/configs', toValue(args)] as const
}

export function getClustersClusterIdTopicsDashConfigsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.clusters)[':cluster_id']['topics']['-']['configs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClustersClusterIdTopicsDashConfigsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clusters[':cluster_id'].topics['-'].configs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.clusters)[':cluster_id']['topics']['-']['configs']['$get']>
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
                    (typeof client.clusters)[':cluster_id']['topics']['-']['configs']['$get']
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
                    (typeof client.clusters)[':cluster_id']['topics']['-']['configs']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getClustersClusterIdTopicsDashConfigsQueryKey>
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
            ReturnType<(typeof client.clusters)[':cluster_id']['topics']['-']['configs']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersClusterIdTopicsDashConfigsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClustersClusterIdTopicsDashConfigsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.clusters[':cluster_id'].topics['-'].configs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
