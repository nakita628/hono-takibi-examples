import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getClustersKey() {
  return ['clusters'] as const
}

export function getGetClustersKey() {
  return ['clusters', '/clusters'] as const
}

export function useGetClusters<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clusters.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetClustersKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clusters.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.clusters.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClusters<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clusters.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetClustersKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clusters.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.clusters.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetClustersClusterIdKey(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['$get']>,
) {
  return ['clusters', '/clusters/:cluster_id', args] as const
}

export function useGetClustersClusterId<TError = unknown>(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['$get']>>>
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
        ? getGetClustersClusterIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.clusters[':cluster_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClustersClusterId<TError = unknown>(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['$get']>>>
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
        ? getGetClustersClusterIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.clusters[':cluster_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostClustersClusterIdAclsBatchKey() {
  return ['clusters', '/clusters/:cluster_id/acls:batch', 'POST'] as const
}

export function usePostClustersClusterIdAclsBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['acls:batch']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.clusters)[':cluster_id']['acls:batch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostClustersClusterIdAclsBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.clusters)[':cluster_id']['acls:batch']['$post']>
        },
      ) => parseResponse(client.clusters[':cluster_id']['acls:batch'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetClustersClusterIdAclsKey(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['acls']['$get']>,
) {
  return ['clusters', '/clusters/:cluster_id/acls', args] as const
}

export function useGetClustersClusterIdAcls<TError = unknown>(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['acls']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['acls']['$get']>>
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
        ? getGetClustersClusterIdAclsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['acls']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.clusters[':cluster_id'].acls.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClustersClusterIdAcls<TError = unknown>(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['acls']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['acls']['$get']>>
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
        ? getGetClustersClusterIdAclsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['acls']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.clusters[':cluster_id'].acls.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostClustersClusterIdAclsKey() {
  return ['clusters', '/clusters/:cluster_id/acls', 'POST'] as const
}

export function usePostClustersClusterIdAcls<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['acls']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.clusters)[':cluster_id']['acls']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostClustersClusterIdAclsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.clusters)[':cluster_id']['acls']['$post']> },
      ) => parseResponse(client.clusters[':cluster_id'].acls.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteClustersClusterIdAclsKey() {
  return ['clusters', '/clusters/:cluster_id/acls', 'DELETE'] as const
}

export function useDeleteClustersClusterIdAcls<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['acls']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.clusters)[':cluster_id']['acls']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteClustersClusterIdAclsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.clusters)[':cluster_id']['acls']['$delete']> },
      ) => parseResponse(client.clusters[':cluster_id'].acls.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetClustersClusterIdBrokerConfigsKey(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['broker-configs']['$get']>,
) {
  return ['clusters', '/clusters/:cluster_id/broker-configs', args] as const
}

export function useGetClustersClusterIdBrokerConfigs<TError = unknown>(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['broker-configs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['broker-configs']['$get']>>
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
        ? getGetClustersClusterIdBrokerConfigsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['broker-configs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.clusters[':cluster_id']['broker-configs'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClustersClusterIdBrokerConfigs<TError = unknown>(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['broker-configs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['broker-configs']['$get']>>
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
        ? getGetClustersClusterIdBrokerConfigsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['broker-configs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.clusters[':cluster_id']['broker-configs'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostClustersClusterIdBrokerConfigsAlterKey() {
  return ['clusters', '/clusters/:cluster_id/broker-configs:alter', 'POST'] as const
}

export function usePostClustersClusterIdBrokerConfigsAlter<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.clusters)[':cluster_id']['broker-configs:alter']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostClustersClusterIdBrokerConfigsAlterKey()
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
            (typeof client.clusters)[':cluster_id']['broker-configs:alter']['$post']
          >
        },
      ) =>
        parseResponse(
          client.clusters[':cluster_id']['broker-configs:alter'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetClustersClusterIdBrokerConfigsNameKey(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['broker-configs'][':name']['$get']
  >,
) {
  return ['clusters', '/clusters/:cluster_id/broker-configs/:name', args] as const
}

export function useGetClustersClusterIdBrokerConfigsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['broker-configs'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.clusters)[':cluster_id']['broker-configs'][':name']['$get']>
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
        ? getGetClustersClusterIdBrokerConfigsNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.clusters)[':cluster_id']['broker-configs'][':name']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.clusters[':cluster_id']['broker-configs'][':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClustersClusterIdBrokerConfigsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['broker-configs'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.clusters)[':cluster_id']['broker-configs'][':name']['$get']>
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
        ? getGetClustersClusterIdBrokerConfigsNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.clusters)[':cluster_id']['broker-configs'][':name']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.clusters[':cluster_id']['broker-configs'][':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutClustersClusterIdBrokerConfigsNameKey() {
  return ['clusters', '/clusters/:cluster_id/broker-configs/:name', 'PUT'] as const
}

export function usePutClustersClusterIdBrokerConfigsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.clusters)[':cluster_id']['broker-configs'][':name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutClustersClusterIdBrokerConfigsNameKey()
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
            (typeof client.clusters)[':cluster_id']['broker-configs'][':name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.clusters[':cluster_id']['broker-configs'][':name'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteClustersClusterIdBrokerConfigsNameKey() {
  return ['clusters', '/clusters/:cluster_id/broker-configs/:name', 'DELETE'] as const
}

export function useDeleteClustersClusterIdBrokerConfigsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.clusters)[':cluster_id']['broker-configs'][':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteClustersClusterIdBrokerConfigsNameKey()
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
            (typeof client.clusters)[':cluster_id']['broker-configs'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.clusters[':cluster_id']['broker-configs'][':name'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetClustersClusterIdBrokersKey(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['brokers']['$get']>,
) {
  return ['clusters', '/clusters/:cluster_id/brokers', args] as const
}

export function useGetClustersClusterIdBrokers<TError = unknown>(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['brokers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['brokers']['$get']>>
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
        ? getGetClustersClusterIdBrokersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['brokers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.clusters[':cluster_id'].brokers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClustersClusterIdBrokers<TError = unknown>(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['brokers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['brokers']['$get']>>
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
        ? getGetClustersClusterIdBrokersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['brokers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.clusters[':cluster_id'].brokers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetClustersClusterIdBrokersBrokerIdKey(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['$get']>,
) {
  return ['clusters', '/clusters/:cluster_id/brokers/:broker_id', args] as const
}

export function useGetClustersClusterIdBrokersBrokerId<TError = unknown>(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['$get']>
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
        ? getGetClustersClusterIdBrokersBrokerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.clusters[':cluster_id'].brokers[':broker_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClustersClusterIdBrokersBrokerId<TError = unknown>(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['$get']>
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
        ? getGetClustersClusterIdBrokersBrokerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.clusters[':cluster_id'].brokers[':broker_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetClustersClusterIdBrokersDashConfigsKey(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['brokers']['-']['configs']['$get']
  >,
) {
  return ['clusters', '/clusters/:cluster_id/brokers/-/configs', args] as const
}

export function useGetClustersClusterIdBrokersDashConfigs<TError = unknown>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['brokers']['-']['configs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.clusters)[':cluster_id']['brokers']['-']['configs']['$get']>
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
        ? getGetClustersClusterIdBrokersDashConfigsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.clusters)[':cluster_id']['brokers']['-']['configs']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.clusters[':cluster_id'].brokers['-'].configs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClustersClusterIdBrokersDashConfigs<TError = unknown>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['brokers']['-']['configs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.clusters)[':cluster_id']['brokers']['-']['configs']['$get']>
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
        ? getGetClustersClusterIdBrokersDashConfigsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.clusters)[':cluster_id']['brokers']['-']['configs']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.clusters[':cluster_id'].brokers['-'].configs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetClustersClusterIdBrokersBrokerIdConfigsKey(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs']['$get']
  >,
) {
  return ['clusters', '/clusters/:cluster_id/brokers/:broker_id/configs', args] as const
}

export function useGetClustersClusterIdBrokersBrokerIdConfigs<TError = unknown>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetClustersClusterIdBrokersBrokerIdConfigsKey(args)
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
                (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs']['$get']
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
          client.clusters[':cluster_id'].brokers[':broker_id'].configs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClustersClusterIdBrokersBrokerIdConfigs<TError = unknown>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetClustersClusterIdBrokersBrokerIdConfigsKey(args)
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
                (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs']['$get']
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
          client.clusters[':cluster_id'].brokers[':broker_id'].configs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostClustersClusterIdBrokersBrokerIdConfigsAlterKey() {
  return ['clusters', '/clusters/:cluster_id/brokers/:broker_id/configs:alter', 'POST'] as const
}

export function usePostClustersClusterIdBrokersBrokerIdConfigsAlter<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs:alter']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostClustersClusterIdBrokersBrokerIdConfigsAlterKey()
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
            (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs:alter']['$post']
          >
        },
      ) =>
        parseResponse(
          client.clusters[':cluster_id'].brokers[':broker_id']['configs:alter'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetClustersClusterIdBrokersBrokerIdConfigsNameKey(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs'][':name']['$get']
  >,
) {
  return ['clusters', '/clusters/:cluster_id/brokers/:broker_id/configs/:name', args] as const
}

export function useGetClustersClusterIdBrokersBrokerIdConfigsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetClustersClusterIdBrokersBrokerIdConfigsNameKey(args)
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
                (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs'][':name']['$get']
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
          client.clusters[':cluster_id'].brokers[':broker_id'].configs[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClustersClusterIdBrokersBrokerIdConfigsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetClustersClusterIdBrokersBrokerIdConfigsNameKey(args)
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
                (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs'][':name']['$get']
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
          client.clusters[':cluster_id'].brokers[':broker_id'].configs[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutClustersClusterIdBrokersBrokerIdConfigsNameKey() {
  return ['clusters', '/clusters/:cluster_id/brokers/:broker_id/configs/:name', 'PUT'] as const
}

export function usePutClustersClusterIdBrokersBrokerIdConfigsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs'][':name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutClustersClusterIdBrokersBrokerIdConfigsNameKey()
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
            (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs'][':name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.clusters[':cluster_id'].brokers[':broker_id'].configs[':name'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteClustersClusterIdBrokersBrokerIdConfigsNameKey() {
  return ['clusters', '/clusters/:cluster_id/brokers/:broker_id/configs/:name', 'DELETE'] as const
}

export function useDeleteClustersClusterIdBrokersBrokerIdConfigsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs'][':name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteClustersClusterIdBrokersBrokerIdConfigsNameKey()
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
            (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.clusters[':cluster_id'].brokers[':broker_id'].configs[':name'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetClustersClusterIdBrokersBrokerIdPartitionReplicasKey(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['partition-replicas']['$get']
  >,
) {
  return ['clusters', '/clusters/:cluster_id/brokers/:broker_id/partition-replicas', args] as const
}

export function useGetClustersClusterIdBrokersBrokerIdPartitionReplicas<TError = unknown>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['partition-replicas']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetClustersClusterIdBrokersBrokerIdPartitionReplicasKey(args)
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
                (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['partition-replicas']['$get']
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
          client.clusters[':cluster_id'].brokers[':broker_id']['partition-replicas'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClustersClusterIdBrokersBrokerIdPartitionReplicas<TError = unknown>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['partition-replicas']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetClustersClusterIdBrokersBrokerIdPartitionReplicasKey(args)
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
                (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['partition-replicas']['$get']
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
          client.clusters[':cluster_id'].brokers[':broker_id']['partition-replicas'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetClustersClusterIdConsumerGroupsKey(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['consumer-groups']['$get']>,
) {
  return ['clusters', '/clusters/:cluster_id/consumer-groups', args] as const
}

export function useGetClustersClusterIdConsumerGroups<TError = unknown>(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['consumer-groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['consumer-groups']['$get']>>
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
        ? getGetClustersClusterIdConsumerGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['consumer-groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.clusters[':cluster_id']['consumer-groups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClustersClusterIdConsumerGroups<TError = unknown>(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['consumer-groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['consumer-groups']['$get']>>
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
        ? getGetClustersClusterIdConsumerGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['consumer-groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.clusters[':cluster_id']['consumer-groups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetClustersClusterIdConsumerGroupsConsumerGroupIdKey(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['$get']
  >,
) {
  return ['clusters', '/clusters/:cluster_id/consumer-groups/:consumer_group_id', args] as const
}

export function useGetClustersClusterIdConsumerGroupsConsumerGroupId<TError = unknown>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetClustersClusterIdConsumerGroupsConsumerGroupIdKey(args)
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
                (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['$get']
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
          client.clusters[':cluster_id']['consumer-groups'][':consumer_group_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClustersClusterIdConsumerGroupsConsumerGroupId<TError = unknown>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetClustersClusterIdConsumerGroupsConsumerGroupIdKey(args)
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
                (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['$get']
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
          client.clusters[':cluster_id']['consumer-groups'][':consumer_group_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetClustersClusterIdConsumerGroupsConsumerGroupIdConsumersKey(
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

export function useGetClustersClusterIdConsumerGroupsConsumerGroupIdConsumers<TError = unknown>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetClustersClusterIdConsumerGroupsConsumerGroupIdConsumersKey(args)
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
                (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers']['$get']
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
          client.clusters[':cluster_id']['consumer-groups'][':consumer_group_id'].consumers.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClustersClusterIdConsumerGroupsConsumerGroupIdConsumers<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetClustersClusterIdConsumerGroupsConsumerGroupIdConsumersKey(args)
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
                (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers']['$get']
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
          client.clusters[':cluster_id']['consumer-groups'][':consumer_group_id'].consumers.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetClustersClusterIdConsumerGroupsConsumerGroupIdLagSummaryKey(
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

export function useGetClustersClusterIdConsumerGroupsConsumerGroupIdLagSummary<TError = unknown>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['lag-summary']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetClustersClusterIdConsumerGroupsConsumerGroupIdLagSummaryKey(args)
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
                (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['lag-summary']['$get']
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
          client.clusters[':cluster_id']['consumer-groups'][':consumer_group_id'][
            'lag-summary'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClustersClusterIdConsumerGroupsConsumerGroupIdLagSummary<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['lag-summary']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetClustersClusterIdConsumerGroupsConsumerGroupIdLagSummaryKey(args)
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
                (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['lag-summary']['$get']
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
          client.clusters[':cluster_id']['consumer-groups'][':consumer_group_id'][
            'lag-summary'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetClustersClusterIdConsumerGroupsConsumerGroupIdLagsKey(
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

export function useGetClustersClusterIdConsumerGroupsConsumerGroupIdLags<TError = unknown>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['lags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetClustersClusterIdConsumerGroupsConsumerGroupIdLagsKey(args)
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
                (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['lags']['$get']
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
          client.clusters[':cluster_id']['consumer-groups'][':consumer_group_id'].lags.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClustersClusterIdConsumerGroupsConsumerGroupIdLags<TError = unknown>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['lags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetClustersClusterIdConsumerGroupsConsumerGroupIdLagsKey(args)
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
                (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['lags']['$get']
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
          client.clusters[':cluster_id']['consumer-groups'][':consumer_group_id'].lags.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetClustersClusterIdConsumerGroupsConsumerGroupIdLagsTopicNamePartitionsPartitionIdKey(
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

export function useGetClustersClusterIdConsumerGroupsConsumerGroupIdLagsTopicNamePartitionsPartitionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['lags'][':topic_name']['partitions'][':partition_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetClustersClusterIdConsumerGroupsConsumerGroupIdLagsTopicNamePartitionsPartitionIdKey(
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
                (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['lags'][':topic_name']['partitions'][':partition_id']['$get']
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
          client.clusters[':cluster_id']['consumer-groups'][':consumer_group_id'].lags[
            ':topic_name'
          ].partitions[':partition_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClustersClusterIdConsumerGroupsConsumerGroupIdLagsTopicNamePartitionsPartitionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['lags'][':topic_name']['partitions'][':partition_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetClustersClusterIdConsumerGroupsConsumerGroupIdLagsTopicNamePartitionsPartitionIdKey(
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
                (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['lags'][':topic_name']['partitions'][':partition_id']['$get']
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
          client.clusters[':cluster_id']['consumer-groups'][':consumer_group_id'].lags[
            ':topic_name'
          ].partitions[':partition_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdKey(
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

export function useGetClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers'][':consumer_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdKey(args)
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
                (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers'][':consumer_id']['$get']
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
          client.clusters[':cluster_id']['consumer-groups'][':consumer_group_id'].consumers[
            ':consumer_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers'][':consumer_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdKey(args)
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
                (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers'][':consumer_id']['$get']
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
          client.clusters[':cluster_id']['consumer-groups'][':consumer_group_id'].consumers[
            ':consumer_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdAssignmentsKey(
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

export function useGetClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdAssignments<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers'][':consumer_id']['assignments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdAssignmentsKey(
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
                (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers'][':consumer_id']['assignments']['$get']
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
          client.clusters[':cluster_id']['consumer-groups'][':consumer_group_id'].consumers[
            ':consumer_id'
          ].assignments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdAssignments<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers'][':consumer_id']['assignments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdAssignmentsKey(
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
                (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers'][':consumer_id']['assignments']['$get']
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
          client.clusters[':cluster_id']['consumer-groups'][':consumer_group_id'].consumers[
            ':consumer_id'
          ].assignments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdAssignmentsTopicNamePartitionsPartitionIdKey(
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

export function useGetClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdAssignmentsTopicNamePartitionsPartitionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers'][':consumer_id']['assignments'][':topic_name']['partitions'][':partition_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdAssignmentsTopicNamePartitionsPartitionIdKey(
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
                (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers'][':consumer_id']['assignments'][':topic_name']['partitions'][':partition_id']['$get']
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
          client.clusters[':cluster_id']['consumer-groups'][':consumer_group_id'].consumers[
            ':consumer_id'
          ].assignments[':topic_name'].partitions[':partition_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdAssignmentsTopicNamePartitionsPartitionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers'][':consumer_id']['assignments'][':topic_name']['partitions'][':partition_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdAssignmentsTopicNamePartitionsPartitionIdKey(
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
                (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers'][':consumer_id']['assignments'][':topic_name']['partitions'][':partition_id']['$get']
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
          client.clusters[':cluster_id']['consumer-groups'][':consumer_group_id'].consumers[
            ':consumer_id'
          ].assignments[':topic_name'].partitions[':partition_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetClustersClusterIdTopicsKey(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['topics']['$get']>,
) {
  return ['clusters', '/clusters/:cluster_id/topics', args] as const
}

export function useGetClustersClusterIdTopics<TError = unknown>(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['topics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['topics']['$get']>>
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
        ? getGetClustersClusterIdTopicsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['topics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.clusters[':cluster_id'].topics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClustersClusterIdTopics<TError = unknown>(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['topics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['topics']['$get']>>
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
        ? getGetClustersClusterIdTopicsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['topics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.clusters[':cluster_id'].topics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostClustersClusterIdTopicsKey() {
  return ['clusters', '/clusters/:cluster_id/topics', 'POST'] as const
}

export function usePostClustersClusterIdTopics<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.clusters)[':cluster_id']['topics']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.clusters)[':cluster_id']['topics']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostClustersClusterIdTopicsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.clusters)[':cluster_id']['topics']['$post']> },
      ) => parseResponse(client.clusters[':cluster_id'].topics.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetClustersClusterIdTopicsTopicNameKey(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['topics'][':topic_name']['$get']>,
) {
  return ['clusters', '/clusters/:cluster_id/topics/:topic_name', args] as const
}

export function useGetClustersClusterIdTopicsTopicName<TError = unknown>(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['topics'][':topic_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.clusters)[':cluster_id']['topics'][':topic_name']['$get']>
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
        ? getGetClustersClusterIdTopicsTopicNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.clusters)[':cluster_id']['topics'][':topic_name']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.clusters[':cluster_id'].topics[':topic_name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClustersClusterIdTopicsTopicName<TError = unknown>(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['topics'][':topic_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.clusters)[':cluster_id']['topics'][':topic_name']['$get']>
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
        ? getGetClustersClusterIdTopicsTopicNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.clusters)[':cluster_id']['topics'][':topic_name']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.clusters[':cluster_id'].topics[':topic_name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteClustersClusterIdTopicsTopicNameKey() {
  return ['clusters', '/clusters/:cluster_id/topics/:topic_name', 'DELETE'] as const
}

export function useDeleteClustersClusterIdTopicsTopicName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.clusters)[':cluster_id']['topics'][':topic_name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteClustersClusterIdTopicsTopicNameKey()
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
            (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.clusters[':cluster_id'].topics[':topic_name'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchClustersClusterIdTopicsTopicNameKey() {
  return ['clusters', '/clusters/:cluster_id/topics/:topic_name', 'PATCH'] as const
}

export function usePatchClustersClusterIdTopicsTopicName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.clusters)[':cluster_id']['topics'][':topic_name']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchClustersClusterIdTopicsTopicNameKey()
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
            (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.clusters[':cluster_id'].topics[':topic_name'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetClustersClusterIdTopicsTopicNameConfigsKey(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs']['$get']
  >,
) {
  return ['clusters', '/clusters/:cluster_id/topics/:topic_name/configs', args] as const
}

export function useGetClustersClusterIdTopicsTopicNameConfigs<TError = unknown>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetClustersClusterIdTopicsTopicNameConfigsKey(args)
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
                (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs']['$get']
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
          client.clusters[':cluster_id'].topics[':topic_name'].configs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClustersClusterIdTopicsTopicNameConfigs<TError = unknown>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetClustersClusterIdTopicsTopicNameConfigsKey(args)
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
                (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs']['$get']
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
          client.clusters[':cluster_id'].topics[':topic_name'].configs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostClustersClusterIdTopicsTopicNameConfigsAlterKey() {
  return ['clusters', '/clusters/:cluster_id/topics/:topic_name/configs:alter', 'POST'] as const
}

export function usePostClustersClusterIdTopicsTopicNameConfigsAlter<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs:alter']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostClustersClusterIdTopicsTopicNameConfigsAlterKey()
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
            (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs:alter']['$post']
          >
        },
      ) =>
        parseResponse(
          client.clusters[':cluster_id'].topics[':topic_name']['configs:alter'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetClustersClusterIdTopicsTopicNameConfigsNameKey(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs'][':name']['$get']
  >,
) {
  return ['clusters', '/clusters/:cluster_id/topics/:topic_name/configs/:name', args] as const
}

export function useGetClustersClusterIdTopicsTopicNameConfigsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetClustersClusterIdTopicsTopicNameConfigsNameKey(args)
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
                (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs'][':name']['$get']
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
          client.clusters[':cluster_id'].topics[':topic_name'].configs[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClustersClusterIdTopicsTopicNameConfigsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetClustersClusterIdTopicsTopicNameConfigsNameKey(args)
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
                (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs'][':name']['$get']
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
          client.clusters[':cluster_id'].topics[':topic_name'].configs[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutClustersClusterIdTopicsTopicNameConfigsNameKey() {
  return ['clusters', '/clusters/:cluster_id/topics/:topic_name/configs/:name', 'PUT'] as const
}

export function usePutClustersClusterIdTopicsTopicNameConfigsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs'][':name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutClustersClusterIdTopicsTopicNameConfigsNameKey()
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
            (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs'][':name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.clusters[':cluster_id'].topics[':topic_name'].configs[':name'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteClustersClusterIdTopicsTopicNameConfigsNameKey() {
  return ['clusters', '/clusters/:cluster_id/topics/:topic_name/configs/:name', 'DELETE'] as const
}

export function useDeleteClustersClusterIdTopicsTopicNameConfigsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs'][':name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteClustersClusterIdTopicsTopicNameConfigsNameKey()
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
            (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.clusters[':cluster_id'].topics[':topic_name'].configs[':name'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetClustersClusterIdTopicsTopicNamePartitionsPartitionIdOffsetKey(
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

export function useGetClustersClusterIdTopicsTopicNamePartitionsPartitionIdOffset<TError = unknown>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['offset']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetClustersClusterIdTopicsTopicNamePartitionsPartitionIdOffsetKey(args)
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
                (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['offset']['$get']
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
          client.clusters[':cluster_id'].topics[':topic_name'].partitions[
            ':partition_id'
          ].offset.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClustersClusterIdTopicsTopicNamePartitionsPartitionIdOffset<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['offset']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetClustersClusterIdTopicsTopicNamePartitionsPartitionIdOffsetKey(args)
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
                (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['offset']['$get']
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
          client.clusters[':cluster_id'].topics[':topic_name'].partitions[
            ':partition_id'
          ].offset.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetClustersClusterIdTopicsTopicNamePartitionsKey(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions']['$get']
  >,
) {
  return ['clusters', '/clusters/:cluster_id/topics/:topic_name/partitions', args] as const
}

export function useGetClustersClusterIdTopicsTopicNamePartitions<TError = unknown>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetClustersClusterIdTopicsTopicNamePartitionsKey(args)
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
                (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions']['$get']
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
          client.clusters[':cluster_id'].topics[':topic_name'].partitions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClustersClusterIdTopicsTopicNamePartitions<TError = unknown>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetClustersClusterIdTopicsTopicNamePartitionsKey(args)
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
                (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions']['$get']
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
          client.clusters[':cluster_id'].topics[':topic_name'].partitions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetClustersClusterIdTopicsTopicNamePartitionsPartitionIdKey(
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

export function useGetClustersClusterIdTopicsTopicNamePartitionsPartitionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetClustersClusterIdTopicsTopicNamePartitionsPartitionIdKey(args)
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
                (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['$get']
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
          client.clusters[':cluster_id'].topics[':topic_name'].partitions[':partition_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClustersClusterIdTopicsTopicNamePartitionsPartitionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetClustersClusterIdTopicsTopicNamePartitionsPartitionIdKey(args)
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
                (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['$get']
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
          client.clusters[':cluster_id'].topics[':topic_name'].partitions[':partition_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetClustersClusterIdTopicsDashPartitionsDashReassignmentKey(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics']['-']['partitions']['-']['reassignment']['$get']
  >,
) {
  return ['clusters', '/clusters/:cluster_id/topics/-/partitions/-/reassignment', args] as const
}

export function useGetClustersClusterIdTopicsDashPartitionsDashReassignment<TError = unknown>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics']['-']['partitions']['-']['reassignment']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetClustersClusterIdTopicsDashPartitionsDashReassignmentKey(args)
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
                (typeof client.clusters)[':cluster_id']['topics']['-']['partitions']['-']['reassignment']['$get']
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
          client.clusters[':cluster_id'].topics['-'].partitions['-'].reassignment.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClustersClusterIdTopicsDashPartitionsDashReassignment<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics']['-']['partitions']['-']['reassignment']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetClustersClusterIdTopicsDashPartitionsDashReassignmentKey(args)
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
                (typeof client.clusters)[':cluster_id']['topics']['-']['partitions']['-']['reassignment']['$get']
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
          client.clusters[':cluster_id'].topics['-'].partitions['-'].reassignment.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetClustersClusterIdTopicsTopicNamePartitionsDashReassignmentKey(
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

export function useGetClustersClusterIdTopicsTopicNamePartitionsDashReassignment<TError = unknown>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions']['-']['reassignment']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetClustersClusterIdTopicsTopicNamePartitionsDashReassignmentKey(args)
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
                (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions']['-']['reassignment']['$get']
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
          client.clusters[':cluster_id'].topics[':topic_name'].partitions['-'].reassignment.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClustersClusterIdTopicsTopicNamePartitionsDashReassignment<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions']['-']['reassignment']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetClustersClusterIdTopicsTopicNamePartitionsDashReassignmentKey(args)
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
                (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions']['-']['reassignment']['$get']
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
          client.clusters[':cluster_id'].topics[':topic_name'].partitions['-'].reassignment.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetClustersClusterIdTopicsTopicNamePartitionsPartitionIdReassignmentKey(
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

export function useGetClustersClusterIdTopicsTopicNamePartitionsPartitionIdReassignment<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['reassignment']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetClustersClusterIdTopicsTopicNamePartitionsPartitionIdReassignmentKey(args)
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
                (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['reassignment']['$get']
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
          client.clusters[':cluster_id'].topics[':topic_name'].partitions[
            ':partition_id'
          ].reassignment.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClustersClusterIdTopicsTopicNamePartitionsPartitionIdReassignment<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['reassignment']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetClustersClusterIdTopicsTopicNamePartitionsPartitionIdReassignmentKey(args)
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
                (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['reassignment']['$get']
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
          client.clusters[':cluster_id'].topics[':topic_name'].partitions[
            ':partition_id'
          ].reassignment.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetClustersClusterIdTopicsTopicNamePartitionsPartitionIdReplicasKey(
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

export function useGetClustersClusterIdTopicsTopicNamePartitionsPartitionIdReplicas<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['replicas']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetClustersClusterIdTopicsTopicNamePartitionsPartitionIdReplicasKey(args)
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
                (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['replicas']['$get']
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
          client.clusters[':cluster_id'].topics[':topic_name'].partitions[
            ':partition_id'
          ].replicas.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClustersClusterIdTopicsTopicNamePartitionsPartitionIdReplicas<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['replicas']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetClustersClusterIdTopicsTopicNamePartitionsPartitionIdReplicasKey(args)
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
                (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['replicas']['$get']
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
          client.clusters[':cluster_id'].topics[':topic_name'].partitions[
            ':partition_id'
          ].replicas.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetClustersClusterIdTopicsTopicNamePartitionsPartitionIdReplicasBrokerIdKey(
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

export function useGetClustersClusterIdTopicsTopicNamePartitionsPartitionIdReplicasBrokerId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['replicas'][':broker_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetClustersClusterIdTopicsTopicNamePartitionsPartitionIdReplicasBrokerIdKey(args)
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
                (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['replicas'][':broker_id']['$get']
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
          client.clusters[':cluster_id'].topics[':topic_name'].partitions[':partition_id'].replicas[
            ':broker_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClustersClusterIdTopicsTopicNamePartitionsPartitionIdReplicasBrokerId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['replicas'][':broker_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetClustersClusterIdTopicsTopicNamePartitionsPartitionIdReplicasBrokerIdKey(args)
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
                (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['replicas'][':broker_id']['$get']
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
          client.clusters[':cluster_id'].topics[':topic_name'].partitions[':partition_id'].replicas[
            ':broker_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetClustersClusterIdTopicsDashConfigsKey(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['topics']['-']['configs']['$get']>,
) {
  return ['clusters', '/clusters/:cluster_id/topics/-/configs', args] as const
}

export function useGetClustersClusterIdTopicsDashConfigs<TError = unknown>(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['topics']['-']['configs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.clusters)[':cluster_id']['topics']['-']['configs']['$get']>
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
        ? getGetClustersClusterIdTopicsDashConfigsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.clusters)[':cluster_id']['topics']['-']['configs']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.clusters[':cluster_id'].topics['-'].configs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClustersClusterIdTopicsDashConfigs<TError = unknown>(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['topics']['-']['configs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.clusters)[':cluster_id']['topics']['-']['configs']['$get']>
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
        ? getGetClustersClusterIdTopicsDashConfigsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.clusters)[':cluster_id']['topics']['-']['configs']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.clusters[':cluster_id'].topics['-'].configs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostClustersClusterIdTopicsTopicNameRecordsKey() {
  return ['clusters', '/clusters/:cluster_id/topics/:topic_name/records', 'POST'] as const
}

export function usePostClustersClusterIdTopicsTopicNameRecords<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['records']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostClustersClusterIdTopicsTopicNameRecordsKey()
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
            (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['records']['$post']
          >
        },
      ) =>
        parseResponse(
          client.clusters[':cluster_id'].topics[':topic_name'].records.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostClustersClusterIdTopicsTopicNameRecordsBatchKey() {
  return ['clusters', '/clusters/:cluster_id/topics/:topic_name/records:batch', 'POST'] as const
}

export function usePostClustersClusterIdTopicsTopicNameRecordsBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['records:batch']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostClustersClusterIdTopicsTopicNameRecordsBatchKey()
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
            (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['records:batch']['$post']
          >
        },
      ) =>
        parseResponse(
          client.clusters[':cluster_id'].topics[':topic_name']['records:batch'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
