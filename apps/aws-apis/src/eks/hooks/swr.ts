import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAddonsKey() {
  return ['addons'] as const
}

export function getClusterRegistrationsKey() {
  return ['cluster-registrations'] as const
}

export function getClustersKey() {
  return ['clusters'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getPostClustersNameEncryptionConfigAssociateKey() {
  return ['clusters', '/clusters/:name/encryption-config/associate', 'POST'] as const
}

export function usePostClustersNameEncryptionConfigAssociate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.clusters)[':name']['encryption-config']['associate']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.clusters)[':name']['encryption-config']['associate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostClustersNameEncryptionConfigAssociateKey()
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
            (typeof client.clusters)[':name']['encryption-config']['associate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.clusters[':name']['encryption-config'].associate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostClustersNameIdentityProviderConfigsAssociateKey() {
  return ['clusters', '/clusters/:name/identity-provider-configs/associate', 'POST'] as const
}

export function usePostClustersNameIdentityProviderConfigsAssociate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.clusters)[':name']['identity-provider-configs']['associate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.clusters)[':name']['identity-provider-configs']['associate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostClustersNameIdentityProviderConfigsAssociateKey()
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
            (typeof client.clusters)[':name']['identity-provider-configs']['associate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.clusters[':name']['identity-provider-configs'].associate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetClustersNameAddonsKey(
  args: InferRequestType<(typeof client.clusters)[':name']['addons']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['clusters', '/clusters/:name/addons', keyArgs] as const
}

export function useGetClustersNameAddons<TError = unknown>(
  args: InferRequestType<(typeof client.clusters)[':name']['addons']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.clusters)[':name']['addons']['$get']>>
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
        ? getGetClustersNameAddonsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.clusters)[':name']['addons']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.clusters[':name'].addons.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClustersNameAddons<TError = unknown>(
  args: InferRequestType<(typeof client.clusters)[':name']['addons']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.clusters)[':name']['addons']['$get']>>
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
        ? getGetClustersNameAddonsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.clusters)[':name']['addons']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.clusters[':name'].addons.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostClustersNameAddonsKey() {
  return ['clusters', '/clusters/:name/addons', 'POST'] as const
}

export function usePostClustersNameAddons<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.clusters)[':name']['addons']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.clusters)[':name']['addons']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostClustersNameAddonsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.clusters)[':name']['addons']['$post']> },
      ) => parseResponse(client.clusters[':name'].addons.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetClustersKey(args: InferRequestType<typeof client.clusters.$get>) {
  const { header: _, ...keyArgs } = args
  return ['clusters', '/clusters', keyArgs] as const
}

export function useGetClusters<TError = unknown>(
  args: InferRequestType<typeof client.clusters.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clusters.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetClustersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clusters.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.clusters.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetClusters<TError = unknown>(
  args: InferRequestType<typeof client.clusters.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clusters.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetClustersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clusters.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.clusters.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostClustersKey() {
  return ['clusters', '/clusters', 'POST'] as const
}

export function usePostClusters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clusters.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.clusters.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostClustersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.clusters.$post> }) =>
        parseResponse(client.clusters.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetClustersNameFargateProfilesKey(
  args: InferRequestType<(typeof client.clusters)[':name']['fargate-profiles']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['clusters', '/clusters/:name/fargate-profiles', keyArgs] as const
}

export function useGetClustersNameFargateProfiles<TError = unknown>(
  args: InferRequestType<(typeof client.clusters)[':name']['fargate-profiles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.clusters)[':name']['fargate-profiles']['$get']>>
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
        ? getGetClustersNameFargateProfilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.clusters)[':name']['fargate-profiles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.clusters[':name']['fargate-profiles'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClustersNameFargateProfiles<TError = unknown>(
  args: InferRequestType<(typeof client.clusters)[':name']['fargate-profiles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.clusters)[':name']['fargate-profiles']['$get']>>
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
        ? getGetClustersNameFargateProfilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.clusters)[':name']['fargate-profiles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.clusters[':name']['fargate-profiles'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostClustersNameFargateProfilesKey() {
  return ['clusters', '/clusters/:name/fargate-profiles', 'POST'] as const
}

export function usePostClustersNameFargateProfiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.clusters)[':name']['fargate-profiles']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.clusters)[':name']['fargate-profiles']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostClustersNameFargateProfilesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.clusters)[':name']['fargate-profiles']['$post']>
        },
      ) => parseResponse(client.clusters[':name']['fargate-profiles'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetClustersNameNodeGroupsKey(
  args: InferRequestType<(typeof client.clusters)[':name']['node-groups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['clusters', '/clusters/:name/node-groups', keyArgs] as const
}

export function useGetClustersNameNodeGroups<TError = unknown>(
  args: InferRequestType<(typeof client.clusters)[':name']['node-groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.clusters)[':name']['node-groups']['$get']>>
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
        ? getGetClustersNameNodeGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.clusters)[':name']['node-groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.clusters[':name']['node-groups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClustersNameNodeGroups<TError = unknown>(
  args: InferRequestType<(typeof client.clusters)[':name']['node-groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.clusters)[':name']['node-groups']['$get']>>
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
        ? getGetClustersNameNodeGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.clusters)[':name']['node-groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.clusters[':name']['node-groups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostClustersNameNodeGroupsKey() {
  return ['clusters', '/clusters/:name/node-groups', 'POST'] as const
}

export function usePostClustersNameNodeGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.clusters)[':name']['node-groups']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.clusters)[':name']['node-groups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostClustersNameNodeGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.clusters)[':name']['node-groups']['$post']> },
      ) => parseResponse(client.clusters[':name']['node-groups'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetClustersNameAddonsAddonNameKey(
  args: InferRequestType<(typeof client.clusters)[':name']['addons'][':addonName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['clusters', '/clusters/:name/addons/:addonName', keyArgs] as const
}

export function useGetClustersNameAddonsAddonName<TError = unknown>(
  args: InferRequestType<(typeof client.clusters)[':name']['addons'][':addonName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.clusters)[':name']['addons'][':addonName']['$get']>>
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
        ? getGetClustersNameAddonsAddonNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.clusters)[':name']['addons'][':addonName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.clusters[':name'].addons[':addonName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClustersNameAddonsAddonName<TError = unknown>(
  args: InferRequestType<(typeof client.clusters)[':name']['addons'][':addonName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.clusters)[':name']['addons'][':addonName']['$get']>>
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
        ? getGetClustersNameAddonsAddonNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.clusters)[':name']['addons'][':addonName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.clusters[':name'].addons[':addonName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteClustersNameAddonsAddonNameKey() {
  return ['clusters', '/clusters/:name/addons/:addonName', 'DELETE'] as const
}

export function useDeleteClustersNameAddonsAddonName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.clusters)[':name']['addons'][':addonName']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.clusters)[':name']['addons'][':addonName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteClustersNameAddonsAddonNameKey()
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
            (typeof client.clusters)[':name']['addons'][':addonName']['$delete']
          >
        },
      ) => parseResponse(client.clusters[':name'].addons[':addonName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetClustersNameKey(
  args: InferRequestType<(typeof client.clusters)[':name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['clusters', '/clusters/:name', keyArgs] as const
}

export function useGetClustersName<TError = unknown>(
  args: InferRequestType<(typeof client.clusters)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.clusters)[':name']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetClustersNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.clusters)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.clusters[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClustersName<TError = unknown>(
  args: InferRequestType<(typeof client.clusters)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.clusters)[':name']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetClustersNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.clusters)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.clusters[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteClustersNameKey() {
  return ['clusters', '/clusters/:name', 'DELETE'] as const
}

export function useDeleteClustersName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.clusters)[':name']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.clusters)[':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteClustersNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.clusters)[':name']['$delete']> },
      ) => parseResponse(client.clusters[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetClustersNameFargateProfilesFargateProfileNameKey(
  args: InferRequestType<
    (typeof client.clusters)[':name']['fargate-profiles'][':fargateProfileName']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['clusters', '/clusters/:name/fargate-profiles/:fargateProfileName', keyArgs] as const
}

export function useGetClustersNameFargateProfilesFargateProfileName<TError = unknown>(
  args: InferRequestType<
    (typeof client.clusters)[':name']['fargate-profiles'][':fargateProfileName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.clusters)[':name']['fargate-profiles'][':fargateProfileName']['$get']
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
        ? getGetClustersNameFargateProfilesFargateProfileNameKey(args)
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
                (typeof client.clusters)[':name']['fargate-profiles'][':fargateProfileName']['$get']
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
          client.clusters[':name']['fargate-profiles'][':fargateProfileName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClustersNameFargateProfilesFargateProfileName<TError = unknown>(
  args: InferRequestType<
    (typeof client.clusters)[':name']['fargate-profiles'][':fargateProfileName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.clusters)[':name']['fargate-profiles'][':fargateProfileName']['$get']
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
        ? getGetClustersNameFargateProfilesFargateProfileNameKey(args)
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
                (typeof client.clusters)[':name']['fargate-profiles'][':fargateProfileName']['$get']
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
          client.clusters[':name']['fargate-profiles'][':fargateProfileName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteClustersNameFargateProfilesFargateProfileNameKey() {
  return ['clusters', '/clusters/:name/fargate-profiles/:fargateProfileName', 'DELETE'] as const
}

export function useDeleteClustersNameFargateProfilesFargateProfileName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.clusters)[':name']['fargate-profiles'][':fargateProfileName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.clusters)[':name']['fargate-profiles'][':fargateProfileName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteClustersNameFargateProfilesFargateProfileNameKey()
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
            (typeof client.clusters)[':name']['fargate-profiles'][':fargateProfileName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.clusters[':name']['fargate-profiles'][':fargateProfileName'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetClustersNameNodeGroupsNodegroupNameKey(
  args: InferRequestType<
    (typeof client.clusters)[':name']['node-groups'][':nodegroupName']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['clusters', '/clusters/:name/node-groups/:nodegroupName', keyArgs] as const
}

export function useGetClustersNameNodeGroupsNodegroupName<TError = unknown>(
  args: InferRequestType<
    (typeof client.clusters)[':name']['node-groups'][':nodegroupName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.clusters)[':name']['node-groups'][':nodegroupName']['$get']>
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
        ? getGetClustersNameNodeGroupsNodegroupNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.clusters)[':name']['node-groups'][':nodegroupName']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.clusters[':name']['node-groups'][':nodegroupName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClustersNameNodeGroupsNodegroupName<TError = unknown>(
  args: InferRequestType<
    (typeof client.clusters)[':name']['node-groups'][':nodegroupName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.clusters)[':name']['node-groups'][':nodegroupName']['$get']>
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
        ? getGetClustersNameNodeGroupsNodegroupNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.clusters)[':name']['node-groups'][':nodegroupName']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.clusters[':name']['node-groups'][':nodegroupName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteClustersNameNodeGroupsNodegroupNameKey() {
  return ['clusters', '/clusters/:name/node-groups/:nodegroupName', 'DELETE'] as const
}

export function useDeleteClustersNameNodeGroupsNodegroupName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.clusters)[':name']['node-groups'][':nodegroupName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.clusters)[':name']['node-groups'][':nodegroupName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteClustersNameNodeGroupsNodegroupNameKey()
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
            (typeof client.clusters)[':name']['node-groups'][':nodegroupName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.clusters[':name']['node-groups'][':nodegroupName'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteClusterRegistrationsNameKey() {
  return ['cluster-registrations', '/cluster-registrations/:name', 'DELETE'] as const
}

export function useDeleteClusterRegistrationsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['cluster-registrations'][':name']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['cluster-registrations'][':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteClusterRegistrationsNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['cluster-registrations'][':name']['$delete']> },
      ) => parseResponse(client['cluster-registrations'][':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAddonsConfigurationSchemasAddonNameAddonVersionKey(
  args: InferRequestType<
    (typeof client.addons)['configuration-schemas#addonName&addonVersion']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['addons', '/addons/configuration-schemas#addonName&addonVersion', keyArgs] as const
}

export function useGetAddonsConfigurationSchemasAddonNameAddonVersion<TError = unknown>(
  args: InferRequestType<
    (typeof client.addons)['configuration-schemas#addonName&addonVersion']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.addons)['configuration-schemas#addonName&addonVersion']['$get']
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
        ? getGetAddonsConfigurationSchemasAddonNameAddonVersionKey(args)
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
                (typeof client.addons)['configuration-schemas#addonName&addonVersion']['$get']
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
          client.addons['configuration-schemas#addonName&addonVersion'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAddonsConfigurationSchemasAddonNameAddonVersion<TError = unknown>(
  args: InferRequestType<
    (typeof client.addons)['configuration-schemas#addonName&addonVersion']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.addons)['configuration-schemas#addonName&addonVersion']['$get']
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
        ? getGetAddonsConfigurationSchemasAddonNameAddonVersionKey(args)
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
                (typeof client.addons)['configuration-schemas#addonName&addonVersion']['$get']
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
          client.addons['configuration-schemas#addonName&addonVersion'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAddonsSupportedVersionsKey(
  args: InferRequestType<(typeof client.addons)['supported-versions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['addons', '/addons/supported-versions', keyArgs] as const
}

export function useGetAddonsSupportedVersions<TError = unknown>(
  args: InferRequestType<(typeof client.addons)['supported-versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.addons)['supported-versions']['$get']>>
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
        ? getGetAddonsSupportedVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.addons)['supported-versions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.addons['supported-versions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAddonsSupportedVersions<TError = unknown>(
  args: InferRequestType<(typeof client.addons)['supported-versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.addons)['supported-versions']['$get']>>
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
        ? getGetAddonsSupportedVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.addons)['supported-versions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.addons['supported-versions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostClustersNameIdentityProviderConfigsDescribeKey() {
  return ['clusters', '/clusters/:name/identity-provider-configs/describe', 'POST'] as const
}

export function usePostClustersNameIdentityProviderConfigsDescribe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.clusters)[':name']['identity-provider-configs']['describe']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.clusters)[':name']['identity-provider-configs']['describe']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostClustersNameIdentityProviderConfigsDescribeKey()
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
            (typeof client.clusters)[':name']['identity-provider-configs']['describe']['$post']
          >
        },
      ) =>
        parseResponse(
          client.clusters[':name']['identity-provider-configs'].describe.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetClustersNameUpdatesUpdateIdKey(
  args: InferRequestType<(typeof client.clusters)[':name']['updates'][':updateId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['clusters', '/clusters/:name/updates/:updateId', keyArgs] as const
}

export function useGetClustersNameUpdatesUpdateId<TError = unknown>(
  args: InferRequestType<(typeof client.clusters)[':name']['updates'][':updateId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.clusters)[':name']['updates'][':updateId']['$get']>>
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
        ? getGetClustersNameUpdatesUpdateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.clusters)[':name']['updates'][':updateId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.clusters[':name'].updates[':updateId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClustersNameUpdatesUpdateId<TError = unknown>(
  args: InferRequestType<(typeof client.clusters)[':name']['updates'][':updateId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.clusters)[':name']['updates'][':updateId']['$get']>>
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
        ? getGetClustersNameUpdatesUpdateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.clusters)[':name']['updates'][':updateId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.clusters[':name'].updates[':updateId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostClustersNameIdentityProviderConfigsDisassociateKey() {
  return ['clusters', '/clusters/:name/identity-provider-configs/disassociate', 'POST'] as const
}

export function usePostClustersNameIdentityProviderConfigsDisassociate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.clusters)[':name']['identity-provider-configs']['disassociate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.clusters)[':name']['identity-provider-configs']['disassociate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostClustersNameIdentityProviderConfigsDisassociateKey()
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
            (typeof client.clusters)[':name']['identity-provider-configs']['disassociate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.clusters[':name']['identity-provider-configs'].disassociate.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetClustersNameIdentityProviderConfigsKey(
  args: InferRequestType<(typeof client.clusters)[':name']['identity-provider-configs']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['clusters', '/clusters/:name/identity-provider-configs', keyArgs] as const
}

export function useGetClustersNameIdentityProviderConfigs<TError = unknown>(
  args: InferRequestType<(typeof client.clusters)[':name']['identity-provider-configs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.clusters)[':name']['identity-provider-configs']['$get']>
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
        ? getGetClustersNameIdentityProviderConfigsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.clusters)[':name']['identity-provider-configs']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.clusters[':name']['identity-provider-configs'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClustersNameIdentityProviderConfigs<TError = unknown>(
  args: InferRequestType<(typeof client.clusters)[':name']['identity-provider-configs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.clusters)[':name']['identity-provider-configs']['$get']>
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
        ? getGetClustersNameIdentityProviderConfigsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.clusters)[':name']['identity-provider-configs']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.clusters[':name']['identity-provider-configs'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetTagsResourceArnKey(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function useGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
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
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
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
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTagsResourceArnKey() {
  return ['tags', '/tags/:resourceArn', 'POST'] as const
}

export function usePostTagsResourceArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':resourceArn']['$post']>
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
        { arg }: { arg: InferRequestType<(typeof client.tags)[':resourceArn']['$post']> },
      ) => parseResponse(client.tags[':resourceArn'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetClustersNameUpdatesKey(
  args: InferRequestType<(typeof client.clusters)[':name']['updates']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['clusters', '/clusters/:name/updates', keyArgs] as const
}

export function useGetClustersNameUpdates<TError = unknown>(
  args: InferRequestType<(typeof client.clusters)[':name']['updates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.clusters)[':name']['updates']['$get']>>
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
        ? getGetClustersNameUpdatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.clusters)[':name']['updates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.clusters[':name'].updates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClustersNameUpdates<TError = unknown>(
  args: InferRequestType<(typeof client.clusters)[':name']['updates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.clusters)[':name']['updates']['$get']>>
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
        ? getGetClustersNameUpdatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.clusters)[':name']['updates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.clusters[':name'].updates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostClustersNameUpdatesKey() {
  return ['clusters', '/clusters/:name/updates', 'POST'] as const
}

export function usePostClustersNameUpdates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.clusters)[':name']['updates']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.clusters)[':name']['updates']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostClustersNameUpdatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.clusters)[':name']['updates']['$post']> },
      ) => parseResponse(client.clusters[':name'].updates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostClusterRegistrationsKey() {
  return ['cluster-registrations', '/cluster-registrations', 'POST'] as const
}

export function usePostClusterRegistrations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['cluster-registrations']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['cluster-registrations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostClusterRegistrationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['cluster-registrations']['$post']> },
      ) => parseResponse(client['cluster-registrations'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTagsResourceArnTagKeysKey() {
  return ['tags', '/tags/:resourceArn#tagKeys', 'DELETE'] as const
}

export function useDeleteTagsResourceArnTagKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>
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
        { arg }: { arg: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']> },
      ) => parseResponse(client.tags[':resourceArn#tagKeys'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostClustersNameAddonsAddonNameUpdateKey() {
  return ['clusters', '/clusters/:name/addons/:addonName/update', 'POST'] as const
}

export function usePostClustersNameAddonsAddonNameUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.clusters)[':name']['addons'][':addonName']['update']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.clusters)[':name']['addons'][':addonName']['update']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostClustersNameAddonsAddonNameUpdateKey()
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
            (typeof client.clusters)[':name']['addons'][':addonName']['update']['$post']
          >
        },
      ) =>
        parseResponse(
          client.clusters[':name'].addons[':addonName'].update.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostClustersNameUpdateConfigKey() {
  return ['clusters', '/clusters/:name/update-config', 'POST'] as const
}

export function usePostClustersNameUpdateConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.clusters)[':name']['update-config']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.clusters)[':name']['update-config']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostClustersNameUpdateConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.clusters)[':name']['update-config']['$post']> },
      ) => parseResponse(client.clusters[':name']['update-config'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostClustersNameNodeGroupsNodegroupNameUpdateConfigKey() {
  return ['clusters', '/clusters/:name/node-groups/:nodegroupName/update-config', 'POST'] as const
}

export function usePostClustersNameNodeGroupsNodegroupNameUpdateConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.clusters)[':name']['node-groups'][':nodegroupName']['update-config']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.clusters)[':name']['node-groups'][':nodegroupName']['update-config']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostClustersNameNodeGroupsNodegroupNameUpdateConfigKey()
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
            (typeof client.clusters)[':name']['node-groups'][':nodegroupName']['update-config']['$post']
          >
        },
      ) =>
        parseResponse(
          client.clusters[':name']['node-groups'][':nodegroupName']['update-config'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostClustersNameNodeGroupsNodegroupNameUpdateVersionKey() {
  return ['clusters', '/clusters/:name/node-groups/:nodegroupName/update-version', 'POST'] as const
}

export function usePostClustersNameNodeGroupsNodegroupNameUpdateVersion<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.clusters)[':name']['node-groups'][':nodegroupName']['update-version']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.clusters)[':name']['node-groups'][':nodegroupName']['update-version']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostClustersNameNodeGroupsNodegroupNameUpdateVersionKey()
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
            (typeof client.clusters)[':name']['node-groups'][':nodegroupName']['update-version']['$post']
          >
        },
      ) =>
        parseResponse(
          client.clusters[':name']['node-groups'][':nodegroupName']['update-version'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
