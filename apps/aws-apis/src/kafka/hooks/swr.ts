import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getV1Key() {
  return ['v1'] as const
}

export function getGetV1ClustersClusterArnScramSecretsKey(
  args: InferRequestType<(typeof client.v1.clusters)[':clusterArn']['scram-secrets']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/clusters/:clusterArn/scram-secrets', keyArgs] as const
}

export function useGetV1ClustersClusterArnScramSecrets<TError = unknown>(
  args: InferRequestType<(typeof client.v1.clusters)[':clusterArn']['scram-secrets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['scram-secrets']['$get']>>
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
        ? getGetV1ClustersClusterArnScramSecretsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['scram-secrets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.clusters[':clusterArn']['scram-secrets'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ClustersClusterArnScramSecrets<TError = unknown>(
  args: InferRequestType<(typeof client.v1.clusters)[':clusterArn']['scram-secrets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['scram-secrets']['$get']>>
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
        ? getGetV1ClustersClusterArnScramSecretsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['scram-secrets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.clusters[':clusterArn']['scram-secrets'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ClustersClusterArnScramSecretsKey() {
  return ['v1', '/v1/clusters/:clusterArn/scram-secrets', 'POST'] as const
}

export function usePostV1ClustersClusterArnScramSecrets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['scram-secrets']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.clusters)[':clusterArn']['scram-secrets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ClustersClusterArnScramSecretsKey()
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
            (typeof client.v1.clusters)[':clusterArn']['scram-secrets']['$post']
          >
        },
      ) =>
        parseResponse(client.v1.clusters[':clusterArn']['scram-secrets'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1ClustersClusterArnScramSecretsKey() {
  return ['v1', '/v1/clusters/:clusterArn/scram-secrets', 'PATCH'] as const
}

export function usePatchV1ClustersClusterArnScramSecrets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['scram-secrets']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.clusters)[':clusterArn']['scram-secrets']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1ClustersClusterArnScramSecretsKey()
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
            (typeof client.v1.clusters)[':clusterArn']['scram-secrets']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.clusters[':clusterArn']['scram-secrets'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ClustersKey(args: InferRequestType<typeof client.v1.clusters.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/clusters', keyArgs] as const
}

export function useGetV1Clusters<TError = unknown>(
  args: InferRequestType<typeof client.v1.clusters.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.clusters.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ClustersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.clusters.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.clusters.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Clusters<TError = unknown>(
  args: InferRequestType<typeof client.v1.clusters.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.clusters.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ClustersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.clusters.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.clusters.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ClustersKey() {
  return ['v1', '/v1/clusters', 'POST'] as const
}

export function usePostV1Clusters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.clusters.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.clusters.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ClustersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.clusters.$post> }) =>
        parseResponse(client.v1.clusters.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ClustersKey(args: InferRequestType<typeof client.api.v2.clusters.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v2/clusters', keyArgs] as const
}

export function useGetApiV2Clusters<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.clusters.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.clusters.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2ClustersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.clusters.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.clusters.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2Clusters<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.clusters.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.clusters.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2ClustersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.clusters.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.clusters.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2ClustersKey() {
  return ['api', '/api/v2/clusters', 'POST'] as const
}

export function usePostApiV2Clusters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.clusters.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v2.clusters.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2ClustersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v2.clusters.$post> }) =>
        parseResponse(client.api.v2.clusters.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ConfigurationsKey(
  args: InferRequestType<typeof client.v1.configurations.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/configurations', keyArgs] as const
}

export function useGetV1Configurations<TError = unknown>(
  args: InferRequestType<typeof client.v1.configurations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.configurations.$get>>>>
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
        ? getGetV1ConfigurationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.configurations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.configurations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Configurations<TError = unknown>(
  args: InferRequestType<typeof client.v1.configurations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.configurations.$get>>>>
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
        ? getGetV1ConfigurationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.configurations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.configurations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ConfigurationsKey() {
  return ['v1', '/v1/configurations', 'POST'] as const
}

export function usePostV1Configurations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.configurations.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.configurations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConfigurationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.configurations.$post> }) =>
        parseResponse(client.v1.configurations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1VpcConnectionKey() {
  return ['v1', '/v1/vpc-connection', 'POST'] as const
}

export function usePostV1VpcConnection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['vpc-connection']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['vpc-connection']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1VpcConnectionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['vpc-connection']['$post']> },
      ) => parseResponse(client.v1['vpc-connection'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ClustersClusterArnKey(
  args: InferRequestType<(typeof client.v1.clusters)[':clusterArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/clusters/:clusterArn', keyArgs] as const
}

export function useGetV1ClustersClusterArn<TError = unknown>(
  args: InferRequestType<(typeof client.v1.clusters)[':clusterArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['$get']>>
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
        ? getGetV1ClustersClusterArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.clusters[':clusterArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ClustersClusterArn<TError = unknown>(
  args: InferRequestType<(typeof client.v1.clusters)[':clusterArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['$get']>>
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
        ? getGetV1ClustersClusterArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.clusters[':clusterArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1ClustersClusterArnKey() {
  return ['v1', '/v1/clusters/:clusterArn', 'DELETE'] as const
}

export function useDeleteV1ClustersClusterArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.clusters)[':clusterArn']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ClustersClusterArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.clusters)[':clusterArn']['$delete']> },
      ) => parseResponse(client.v1.clusters[':clusterArn'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ClustersClusterArnPolicyKey(
  args: InferRequestType<(typeof client.v1.clusters)[':clusterArn']['policy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/clusters/:clusterArn/policy', keyArgs] as const
}

export function useGetV1ClustersClusterArnPolicy<TError = unknown>(
  args: InferRequestType<(typeof client.v1.clusters)[':clusterArn']['policy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['policy']['$get']>>
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
        ? getGetV1ClustersClusterArnPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['policy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.clusters[':clusterArn'].policy.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ClustersClusterArnPolicy<TError = unknown>(
  args: InferRequestType<(typeof client.v1.clusters)[':clusterArn']['policy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['policy']['$get']>>
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
        ? getGetV1ClustersClusterArnPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['policy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.clusters[':clusterArn'].policy.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1ClustersClusterArnPolicyKey() {
  return ['v1', '/v1/clusters/:clusterArn/policy', 'PUT'] as const
}

export function usePutV1ClustersClusterArnPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['policy']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.clusters)[':clusterArn']['policy']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ClustersClusterArnPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.clusters)[':clusterArn']['policy']['$put']> },
      ) => parseResponse(client.v1.clusters[':clusterArn'].policy.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ClustersClusterArnPolicyKey() {
  return ['v1', '/v1/clusters/:clusterArn/policy', 'DELETE'] as const
}

export function useDeleteV1ClustersClusterArnPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['policy']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.clusters)[':clusterArn']['policy']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ClustersClusterArnPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.clusters)[':clusterArn']['policy']['$delete']>
        },
      ) => parseResponse(client.v1.clusters[':clusterArn'].policy.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ConfigurationsArnKey(
  args: InferRequestType<(typeof client.v1.configurations)[':arn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/configurations/:arn', keyArgs] as const
}

export function useGetV1ConfigurationsArn<TError = unknown>(
  args: InferRequestType<(typeof client.v1.configurations)[':arn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.configurations)[':arn']['$get']>>
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
        ? getGetV1ConfigurationsArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.configurations)[':arn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.configurations[':arn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ConfigurationsArn<TError = unknown>(
  args: InferRequestType<(typeof client.v1.configurations)[':arn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.configurations)[':arn']['$get']>>
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
        ? getGetV1ConfigurationsArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.configurations)[':arn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.configurations[':arn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1ConfigurationsArnKey() {
  return ['v1', '/v1/configurations/:arn', 'PUT'] as const
}

export function usePutV1ConfigurationsArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.configurations)[':arn']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.configurations)[':arn']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ConfigurationsArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.configurations)[':arn']['$put']> },
      ) => parseResponse(client.v1.configurations[':arn'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ConfigurationsArnKey() {
  return ['v1', '/v1/configurations/:arn', 'DELETE'] as const
}

export function useDeleteV1ConfigurationsArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.configurations)[':arn']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.configurations)[':arn']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ConfigurationsArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.configurations)[':arn']['$delete']> },
      ) => parseResponse(client.v1.configurations[':arn'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1VpcConnectionArnKey(
  args: InferRequestType<(typeof client.v1)['vpc-connection'][':arn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/vpc-connection/:arn', keyArgs] as const
}

export function useGetV1VpcConnectionArn<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['vpc-connection'][':arn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['vpc-connection'][':arn']['$get']>>
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
        ? getGetV1VpcConnectionArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['vpc-connection'][':arn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['vpc-connection'][':arn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1VpcConnectionArn<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['vpc-connection'][':arn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['vpc-connection'][':arn']['$get']>>
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
        ? getGetV1VpcConnectionArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['vpc-connection'][':arn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['vpc-connection'][':arn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1VpcConnectionArnKey() {
  return ['v1', '/v1/vpc-connection/:arn', 'DELETE'] as const
}

export function useDeleteV1VpcConnectionArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['vpc-connection'][':arn']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['vpc-connection'][':arn']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1VpcConnectionArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['vpc-connection'][':arn']['$delete']> },
      ) => parseResponse(client.v1['vpc-connection'][':arn'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2ClustersClusterArnKey(
  args: InferRequestType<(typeof client.api.v2.clusters)[':clusterArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v2/clusters/:clusterArn', keyArgs] as const
}

export function useGetApiV2ClustersClusterArn<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.clusters)[':clusterArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.clusters)[':clusterArn']['$get']>>
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
        ? getGetApiV2ClustersClusterArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.clusters)[':clusterArn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.clusters[':clusterArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ClustersClusterArn<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.clusters)[':clusterArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.clusters)[':clusterArn']['$get']>>
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
        ? getGetApiV2ClustersClusterArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.clusters)[':clusterArn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.clusters[':clusterArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1OperationsClusterOperationArnKey(
  args: InferRequestType<(typeof client.v1.operations)[':clusterOperationArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/operations/:clusterOperationArn', keyArgs] as const
}

export function useGetV1OperationsClusterOperationArn<TError = unknown>(
  args: InferRequestType<(typeof client.v1.operations)[':clusterOperationArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.operations)[':clusterOperationArn']['$get']>>
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
        ? getGetV1OperationsClusterOperationArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.operations)[':clusterOperationArn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.operations[':clusterOperationArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OperationsClusterOperationArn<TError = unknown>(
  args: InferRequestType<(typeof client.v1.operations)[':clusterOperationArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.operations)[':clusterOperationArn']['$get']>>
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
        ? getGetV1OperationsClusterOperationArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.operations)[':clusterOperationArn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.operations[':clusterOperationArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2OperationsClusterOperationArnKey(
  args: InferRequestType<(typeof client.api.v2.operations)[':clusterOperationArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v2/operations/:clusterOperationArn', keyArgs] as const
}

export function useGetApiV2OperationsClusterOperationArn<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.operations)[':clusterOperationArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.operations)[':clusterOperationArn']['$get']>>
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
        ? getGetApiV2OperationsClusterOperationArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.operations)[':clusterOperationArn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.operations[':clusterOperationArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2OperationsClusterOperationArn<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.operations)[':clusterOperationArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.operations)[':clusterOperationArn']['$get']>>
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
        ? getGetApiV2OperationsClusterOperationArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.operations)[':clusterOperationArn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.operations[':clusterOperationArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ConfigurationsArnRevisionsRevisionKey(
  args: InferRequestType<
    (typeof client.v1.configurations)[':arn']['revisions'][':revision']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/configurations/:arn/revisions/:revision', keyArgs] as const
}

export function useGetV1ConfigurationsArnRevisionsRevision<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.configurations)[':arn']['revisions'][':revision']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.configurations)[':arn']['revisions'][':revision']['$get']
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
        ? getGetV1ConfigurationsArnRevisionsRevisionKey(args)
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
                (typeof client.v1.configurations)[':arn']['revisions'][':revision']['$get']
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
          client.v1.configurations[':arn'].revisions[':revision'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ConfigurationsArnRevisionsRevision<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.configurations)[':arn']['revisions'][':revision']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.configurations)[':arn']['revisions'][':revision']['$get']
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
        ? getGetV1ConfigurationsArnRevisionsRevisionKey(args)
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
                (typeof client.v1.configurations)[':arn']['revisions'][':revision']['$get']
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
          client.v1.configurations[':arn'].revisions[':revision'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ClustersClusterArnBootstrapBrokersKey(
  args: InferRequestType<(typeof client.v1.clusters)[':clusterArn']['bootstrap-brokers']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/clusters/:clusterArn/bootstrap-brokers', keyArgs] as const
}

export function useGetV1ClustersClusterArnBootstrapBrokers<TError = unknown>(
  args: InferRequestType<(typeof client.v1.clusters)[':clusterArn']['bootstrap-brokers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.clusters)[':clusterArn']['bootstrap-brokers']['$get']>
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
        ? getGetV1ClustersClusterArnBootstrapBrokersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.clusters)[':clusterArn']['bootstrap-brokers']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.clusters[':clusterArn']['bootstrap-brokers'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ClustersClusterArnBootstrapBrokers<TError = unknown>(
  args: InferRequestType<(typeof client.v1.clusters)[':clusterArn']['bootstrap-brokers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.clusters)[':clusterArn']['bootstrap-brokers']['$get']>
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
        ? getGetV1ClustersClusterArnBootstrapBrokersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.clusters)[':clusterArn']['bootstrap-brokers']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.clusters[':clusterArn']['bootstrap-brokers'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1CompatibleKafkaVersionsKey(
  args: InferRequestType<(typeof client.v1)['compatible-kafka-versions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/compatible-kafka-versions', keyArgs] as const
}

export function useGetV1CompatibleKafkaVersions<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['compatible-kafka-versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['compatible-kafka-versions']['$get']>>
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
        ? getGetV1CompatibleKafkaVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['compatible-kafka-versions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['compatible-kafka-versions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CompatibleKafkaVersions<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['compatible-kafka-versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['compatible-kafka-versions']['$get']>>
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
        ? getGetV1CompatibleKafkaVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['compatible-kafka-versions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['compatible-kafka-versions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ClustersClusterArnOperationsKey(
  args: InferRequestType<(typeof client.v1.clusters)[':clusterArn']['operations']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/clusters/:clusterArn/operations', keyArgs] as const
}

export function useGetV1ClustersClusterArnOperations<TError = unknown>(
  args: InferRequestType<(typeof client.v1.clusters)[':clusterArn']['operations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['operations']['$get']>>
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
        ? getGetV1ClustersClusterArnOperationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['operations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.clusters[':clusterArn'].operations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ClustersClusterArnOperations<TError = unknown>(
  args: InferRequestType<(typeof client.v1.clusters)[':clusterArn']['operations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['operations']['$get']>>
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
        ? getGetV1ClustersClusterArnOperationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['operations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.clusters[':clusterArn'].operations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2ClustersClusterArnOperationsKey(
  args: InferRequestType<(typeof client.api.v2.clusters)[':clusterArn']['operations']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v2/clusters/:clusterArn/operations', keyArgs] as const
}

export function useGetApiV2ClustersClusterArnOperations<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.clusters)[':clusterArn']['operations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.clusters)[':clusterArn']['operations']['$get']>
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
        ? getGetApiV2ClustersClusterArnOperationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.clusters)[':clusterArn']['operations']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.clusters[':clusterArn'].operations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2ClustersClusterArnOperations<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.clusters)[':clusterArn']['operations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.clusters)[':clusterArn']['operations']['$get']>
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
        ? getGetApiV2ClustersClusterArnOperationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v2.clusters)[':clusterArn']['operations']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.clusters[':clusterArn'].operations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ConfigurationsArnRevisionsKey(
  args: InferRequestType<(typeof client.v1.configurations)[':arn']['revisions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/configurations/:arn/revisions', keyArgs] as const
}

export function useGetV1ConfigurationsArnRevisions<TError = unknown>(
  args: InferRequestType<(typeof client.v1.configurations)[':arn']['revisions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.configurations)[':arn']['revisions']['$get']>>
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
        ? getGetV1ConfigurationsArnRevisionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.configurations)[':arn']['revisions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.configurations[':arn'].revisions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ConfigurationsArnRevisions<TError = unknown>(
  args: InferRequestType<(typeof client.v1.configurations)[':arn']['revisions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.configurations)[':arn']['revisions']['$get']>>
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
        ? getGetV1ConfigurationsArnRevisionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.configurations)[':arn']['revisions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.configurations[':arn'].revisions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1KafkaVersionsKey(
  args: InferRequestType<(typeof client.v1)['kafka-versions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/kafka-versions', keyArgs] as const
}

export function useGetV1KafkaVersions<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['kafka-versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['kafka-versions']['$get']>>>
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
        ? getGetV1KafkaVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['kafka-versions']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['kafka-versions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1KafkaVersions<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['kafka-versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['kafka-versions']['$get']>>>
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
        ? getGetV1KafkaVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['kafka-versions']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['kafka-versions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ClustersClusterArnNodesKey(
  args: InferRequestType<(typeof client.v1.clusters)[':clusterArn']['nodes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/clusters/:clusterArn/nodes', keyArgs] as const
}

export function useGetV1ClustersClusterArnNodes<TError = unknown>(
  args: InferRequestType<(typeof client.v1.clusters)[':clusterArn']['nodes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['nodes']['$get']>>
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
        ? getGetV1ClustersClusterArnNodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['nodes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.clusters[':clusterArn'].nodes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ClustersClusterArnNodes<TError = unknown>(
  args: InferRequestType<(typeof client.v1.clusters)[':clusterArn']['nodes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['nodes']['$get']>>
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
        ? getGetV1ClustersClusterArnNodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['nodes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.clusters[':clusterArn'].nodes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1TagsResourceArnKey(
  args: InferRequestType<(typeof client.v1.tags)[':resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/tags/:resourceArn', keyArgs] as const
}

export function useGetV1TagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.v1.tags)[':resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tags)[':resourceArn']['$get']>>>
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
        ? getGetV1TagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tags)[':resourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.tags[':resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.v1.tags)[':resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tags)[':resourceArn']['$get']>>>
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
        ? getGetV1TagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tags)[':resourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.tags[':resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1TagsResourceArnKey() {
  return ['v1', '/v1/tags/:resourceArn', 'POST'] as const
}

export function usePostV1TagsResourceArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.tags)[':resourceArn']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.tags)[':resourceArn']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TagsResourceArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.tags)[':resourceArn']['$post']> },
      ) => parseResponse(client.v1.tags[':resourceArn'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ClustersClusterArnClientVpcConnectionsKey(
  args: InferRequestType<
    (typeof client.v1.clusters)[':clusterArn']['client-vpc-connections']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/clusters/:clusterArn/client-vpc-connections', keyArgs] as const
}

export function useGetV1ClustersClusterArnClientVpcConnections<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.clusters)[':clusterArn']['client-vpc-connections']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.clusters)[':clusterArn']['client-vpc-connections']['$get']
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
        ? getGetV1ClustersClusterArnClientVpcConnectionsKey(args)
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
                (typeof client.v1.clusters)[':clusterArn']['client-vpc-connections']['$get']
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
          client.v1.clusters[':clusterArn']['client-vpc-connections'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ClustersClusterArnClientVpcConnections<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.clusters)[':clusterArn']['client-vpc-connections']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.clusters)[':clusterArn']['client-vpc-connections']['$get']
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
        ? getGetV1ClustersClusterArnClientVpcConnectionsKey(args)
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
                (typeof client.v1.clusters)[':clusterArn']['client-vpc-connections']['$get']
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
          client.v1.clusters[':clusterArn']['client-vpc-connections'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1VpcConnectionsKey(
  args: InferRequestType<(typeof client.v1)['vpc-connections']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/vpc-connections', keyArgs] as const
}

export function useGetV1VpcConnections<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['vpc-connections']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['vpc-connections']['$get']>>>
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
        ? getGetV1VpcConnectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['vpc-connections']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['vpc-connections'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1VpcConnections<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['vpc-connections']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['vpc-connections']['$get']>>>
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
        ? getGetV1VpcConnectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['vpc-connections']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['vpc-connections'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1ClustersClusterArnClientVpcConnectionKey() {
  return ['v1', '/v1/clusters/:clusterArn/client-vpc-connection', 'PUT'] as const
}

export function usePutV1ClustersClusterArnClientVpcConnection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.clusters)[':clusterArn']['client-vpc-connection']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.clusters)[':clusterArn']['client-vpc-connection']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ClustersClusterArnClientVpcConnectionKey()
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
            (typeof client.v1.clusters)[':clusterArn']['client-vpc-connection']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.clusters[':clusterArn']['client-vpc-connection'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1ClustersClusterArnRebootBrokerKey() {
  return ['v1', '/v1/clusters/:clusterArn/reboot-broker', 'PUT'] as const
}

export function usePutV1ClustersClusterArnRebootBroker<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['reboot-broker']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.clusters)[':clusterArn']['reboot-broker']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ClustersClusterArnRebootBrokerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.clusters)[':clusterArn']['reboot-broker']['$put']>
        },
      ) =>
        parseResponse(client.v1.clusters[':clusterArn']['reboot-broker'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1TagsResourceArnTagKeysKey() {
  return ['v1', '/v1/tags/:resourceArn#tagKeys', 'DELETE'] as const
}

export function useDeleteV1TagsResourceArnTagKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.tags)[':resourceArn#tagKeys']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.tags)[':resourceArn#tagKeys']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1TagsResourceArnTagKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.tags)[':resourceArn#tagKeys']['$delete']> },
      ) => parseResponse(client.v1.tags[':resourceArn#tagKeys'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1ClustersClusterArnNodesCountKey() {
  return ['v1', '/v1/clusters/:clusterArn/nodes/count', 'PUT'] as const
}

export function usePutV1ClustersClusterArnNodesCount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['nodes']['count']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.clusters)[':clusterArn']['nodes']['count']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ClustersClusterArnNodesCountKey()
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
            (typeof client.v1.clusters)[':clusterArn']['nodes']['count']['$put']
          >
        },
      ) => parseResponse(client.v1.clusters[':clusterArn'].nodes.count.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1ClustersClusterArnNodesTypeKey() {
  return ['v1', '/v1/clusters/:clusterArn/nodes/type', 'PUT'] as const
}

export function usePutV1ClustersClusterArnNodesType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['nodes']['type']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.clusters)[':clusterArn']['nodes']['type']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ClustersClusterArnNodesTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.clusters)[':clusterArn']['nodes']['type']['$put']>
        },
      ) => parseResponse(client.v1.clusters[':clusterArn'].nodes.type.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1ClustersClusterArnNodesStorageKey() {
  return ['v1', '/v1/clusters/:clusterArn/nodes/storage', 'PUT'] as const
}

export function usePutV1ClustersClusterArnNodesStorage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.clusters)[':clusterArn']['nodes']['storage']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.clusters)[':clusterArn']['nodes']['storage']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ClustersClusterArnNodesStorageKey()
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
            (typeof client.v1.clusters)[':clusterArn']['nodes']['storage']['$put']
          >
        },
      ) => parseResponse(client.v1.clusters[':clusterArn'].nodes.storage.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1ClustersClusterArnConnectivityKey() {
  return ['v1', '/v1/clusters/:clusterArn/connectivity', 'PUT'] as const
}

export function usePutV1ClustersClusterArnConnectivity<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['connectivity']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.clusters)[':clusterArn']['connectivity']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ClustersClusterArnConnectivityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.clusters)[':clusterArn']['connectivity']['$put']>
        },
      ) => parseResponse(client.v1.clusters[':clusterArn'].connectivity.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1ClustersClusterArnConfigurationKey() {
  return ['v1', '/v1/clusters/:clusterArn/configuration', 'PUT'] as const
}

export function usePutV1ClustersClusterArnConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['configuration']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.clusters)[':clusterArn']['configuration']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ClustersClusterArnConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.clusters)[':clusterArn']['configuration']['$put']>
        },
      ) => parseResponse(client.v1.clusters[':clusterArn'].configuration.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1ClustersClusterArnVersionKey() {
  return ['v1', '/v1/clusters/:clusterArn/version', 'PUT'] as const
}

export function usePutV1ClustersClusterArnVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['version']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.clusters)[':clusterArn']['version']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ClustersClusterArnVersionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.clusters)[':clusterArn']['version']['$put']> },
      ) => parseResponse(client.v1.clusters[':clusterArn'].version.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1ClustersClusterArnMonitoringKey() {
  return ['v1', '/v1/clusters/:clusterArn/monitoring', 'PUT'] as const
}

export function usePutV1ClustersClusterArnMonitoring<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['monitoring']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.clusters)[':clusterArn']['monitoring']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ClustersClusterArnMonitoringKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.clusters)[':clusterArn']['monitoring']['$put']>
        },
      ) => parseResponse(client.v1.clusters[':clusterArn'].monitoring.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1ClustersClusterArnSecurityKey() {
  return ['v1', '/v1/clusters/:clusterArn/security', 'PATCH'] as const
}

export function usePatchV1ClustersClusterArnSecurity<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['security']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.clusters)[':clusterArn']['security']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1ClustersClusterArnSecurityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.clusters)[':clusterArn']['security']['$patch']>
        },
      ) => parseResponse(client.v1.clusters[':clusterArn'].security.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1ClustersClusterArnStorageKey() {
  return ['v1', '/v1/clusters/:clusterArn/storage', 'PUT'] as const
}

export function usePutV1ClustersClusterArnStorage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.clusters)[':clusterArn']['storage']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.clusters)[':clusterArn']['storage']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ClustersClusterArnStorageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.clusters)[':clusterArn']['storage']['$put']> },
      ) => parseResponse(client.v1.clusters[':clusterArn'].storage.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
