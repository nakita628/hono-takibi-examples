import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
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

export function getPostClustersNameEncryptionConfigAssociateMutationKey() {
  return ['clusters', '/clusters/:name/encryption-config/associate', 'POST'] as const
}

export function getPostClustersNameEncryptionConfigAssociateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.clusters)[':name']['encryption-config']['associate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostClustersNameEncryptionConfigAssociateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.clusters)[':name']['encryption-config']['associate']['$post']
      >,
    ) {
      return parseResponse(
        client.clusters[':name']['encryption-config'].associate.$post(args, options),
      )
    },
  })
}

export function createPostClustersNameEncryptionConfigAssociate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.clusters)[':name']['encryption-config']['associate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.clusters)[':name']['encryption-config']['associate']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostClustersNameEncryptionConfigAssociateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostClustersNameIdentityProviderConfigsAssociateMutationKey() {
  return ['clusters', '/clusters/:name/identity-provider-configs/associate', 'POST'] as const
}

export function getPostClustersNameIdentityProviderConfigsAssociateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.clusters)[':name']['identity-provider-configs']['associate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostClustersNameIdentityProviderConfigsAssociateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.clusters)[':name']['identity-provider-configs']['associate']['$post']
      >,
    ) {
      return parseResponse(
        client.clusters[':name']['identity-provider-configs'].associate.$post(args, options),
      )
    },
  })
}

export function createPostClustersNameIdentityProviderConfigsAssociate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.clusters)[':name']['identity-provider-configs']['associate']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostClustersNameIdentityProviderConfigsAssociateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getClustersNameAddonsQueryKey(
  args: InferRequestType<(typeof client.clusters)[':name']['addons']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['clusters', '/clusters/:name/addons', keyArgs] as const
}

export function getClustersNameAddonsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.clusters)[':name']['addons']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.clusters)[':name']['addons']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.clusters)[':name']['addons']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersNameAddonsQueryKey>
  >({
    queryKey: getClustersNameAddonsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clusters[':name'].addons.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createClustersNameAddons<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.clusters)[':name']['addons']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.clusters)[':name']['addons']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.clusters)[':name']['addons']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getClustersNameAddonsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getClustersNameAddonsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostClustersNameAddonsMutationKey() {
  return ['clusters', '/clusters/:name/addons', 'POST'] as const
}

export function getPostClustersNameAddonsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.clusters)[':name']['addons']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.clusters)[':name']['addons']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostClustersNameAddonsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.clusters)[':name']['addons']['$post']>) {
      return parseResponse(client.clusters[':name'].addons.$post(args, options))
    },
  })
}

export function createPostClustersNameAddons<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.clusters)[':name']['addons']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.clusters)[':name']['addons']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostClustersNameAddonsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getClustersQueryKey(args: InferRequestType<typeof client.clusters.$get>) {
  const { header: _, ...keyArgs } = args
  return ['clusters', '/clusters', keyArgs] as const
}

export function getClustersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clusters.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.clusters.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clusters.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getClustersQueryKey>
  >({
    queryKey: getClustersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clusters.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createClusters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clusters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.clusters.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clusters.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getClustersQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getClustersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostClustersMutationKey() {
  return ['clusters', '/clusters', 'POST'] as const
}

export function getPostClustersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clusters.$post>>>>>,
    TError,
    InferRequestType<typeof client.clusters.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostClustersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.clusters.$post>) {
      return parseResponse(client.clusters.$post(args, options))
    },
  })
}

export function createPostClusters<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clusters.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.clusters.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostClustersMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getClustersNameFargateProfilesQueryKey(
  args: InferRequestType<(typeof client.clusters)[':name']['fargate-profiles']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['clusters', '/clusters/:name/fargate-profiles', keyArgs] as const
}

export function getClustersNameFargateProfilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.clusters)[':name']['fargate-profiles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.clusters)[':name']['fargate-profiles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.clusters)[':name']['fargate-profiles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersNameFargateProfilesQueryKey>
  >({
    queryKey: getClustersNameFargateProfilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clusters[':name']['fargate-profiles'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createClustersNameFargateProfiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.clusters)[':name']['fargate-profiles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.clusters)[':name']['fargate-profiles']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.clusters)[':name']['fargate-profiles']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getClustersNameFargateProfilesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getClustersNameFargateProfilesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostClustersNameFargateProfilesMutationKey() {
  return ['clusters', '/clusters/:name/fargate-profiles', 'POST'] as const
}

export function getPostClustersNameFargateProfilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.clusters)[':name']['fargate-profiles']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.clusters)[':name']['fargate-profiles']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostClustersNameFargateProfilesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.clusters)[':name']['fargate-profiles']['$post']>,
    ) {
      return parseResponse(client.clusters[':name']['fargate-profiles'].$post(args, options))
    },
  })
}

export function createPostClustersNameFargateProfiles<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.clusters)[':name']['fargate-profiles']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.clusters)[':name']['fargate-profiles']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostClustersNameFargateProfilesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getClustersNameNodeGroupsQueryKey(
  args: InferRequestType<(typeof client.clusters)[':name']['node-groups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['clusters', '/clusters/:name/node-groups', keyArgs] as const
}

export function getClustersNameNodeGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.clusters)[':name']['node-groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.clusters)[':name']['node-groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.clusters)[':name']['node-groups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersNameNodeGroupsQueryKey>
  >({
    queryKey: getClustersNameNodeGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clusters[':name']['node-groups'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createClustersNameNodeGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.clusters)[':name']['node-groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.clusters)[':name']['node-groups']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.clusters)[':name']['node-groups']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getClustersNameNodeGroupsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getClustersNameNodeGroupsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostClustersNameNodeGroupsMutationKey() {
  return ['clusters', '/clusters/:name/node-groups', 'POST'] as const
}

export function getPostClustersNameNodeGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.clusters)[':name']['node-groups']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.clusters)[':name']['node-groups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostClustersNameNodeGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.clusters)[':name']['node-groups']['$post']>,
    ) {
      return parseResponse(client.clusters[':name']['node-groups'].$post(args, options))
    },
  })
}

export function createPostClustersNameNodeGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.clusters)[':name']['node-groups']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.clusters)[':name']['node-groups']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostClustersNameNodeGroupsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getClustersNameAddonsAddonNameQueryKey(
  args: InferRequestType<(typeof client.clusters)[':name']['addons'][':addonName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['clusters', '/clusters/:name/addons/:addonName', keyArgs] as const
}

export function getClustersNameAddonsAddonNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.clusters)[':name']['addons'][':addonName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.clusters)[':name']['addons'][':addonName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.clusters)[':name']['addons'][':addonName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersNameAddonsAddonNameQueryKey>
  >({
    queryKey: getClustersNameAddonsAddonNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clusters[':name'].addons[':addonName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createClustersNameAddonsAddonName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.clusters)[':name']['addons'][':addonName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.clusters)[':name']['addons'][':addonName']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.clusters)[':name']['addons'][':addonName']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getClustersNameAddonsAddonNameQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getClustersNameAddonsAddonNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteClustersNameAddonsAddonNameMutationKey() {
  return ['clusters', '/clusters/:name/addons/:addonName', 'DELETE'] as const
}

export function getDeleteClustersNameAddonsAddonNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.clusters)[':name']['addons'][':addonName']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.clusters)[':name']['addons'][':addonName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteClustersNameAddonsAddonNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.clusters)[':name']['addons'][':addonName']['$delete']>,
    ) {
      return parseResponse(client.clusters[':name'].addons[':addonName'].$delete(args, options))
    },
  })
}

export function createDeleteClustersNameAddonsAddonName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.clusters)[':name']['addons'][':addonName']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.clusters)[':name']['addons'][':addonName']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteClustersNameAddonsAddonNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getClustersNameQueryKey(
  args: InferRequestType<(typeof client.clusters)[':name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['clusters', '/clusters/:name', keyArgs] as const
}

export function getClustersNameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.clusters)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.clusters)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.clusters)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersNameQueryKey>
  >({
    queryKey: getClustersNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clusters[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createClustersName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.clusters)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.clusters)[':name']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.clusters)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getClustersNameQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getClustersNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteClustersNameMutationKey() {
  return ['clusters', '/clusters/:name', 'DELETE'] as const
}

export function getDeleteClustersNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.clusters)[':name']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.clusters)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteClustersNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.clusters)[':name']['$delete']>) {
      return parseResponse(client.clusters[':name'].$delete(args, options))
    },
  })
}

export function createDeleteClustersName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.clusters)[':name']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.clusters)[':name']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteClustersNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getClustersNameFargateProfilesFargateProfileNameQueryKey(
  args: InferRequestType<
    (typeof client.clusters)[':name']['fargate-profiles'][':fargateProfileName']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['clusters', '/clusters/:name/fargate-profiles/:fargateProfileName', keyArgs] as const
}

export function getClustersNameFargateProfilesFargateProfileNameQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':name']['fargate-profiles'][':fargateProfileName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getClustersNameFargateProfilesFargateProfileNameQueryKey>
  >({
    queryKey: getClustersNameFargateProfilesFargateProfileNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clusters[':name']['fargate-profiles'][':fargateProfileName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createClustersNameFargateProfilesFargateProfileName<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.clusters)[':name']['fargate-profiles'][':fargateProfileName']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getClustersNameFargateProfilesFargateProfileNameQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getClustersNameFargateProfilesFargateProfileNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDeleteClustersNameFargateProfilesFargateProfileNameMutationKey() {
  return ['clusters', '/clusters/:name/fargate-profiles/:fargateProfileName', 'DELETE'] as const
}

export function getDeleteClustersNameFargateProfilesFargateProfileNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.clusters)[':name']['fargate-profiles'][':fargateProfileName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteClustersNameFargateProfilesFargateProfileNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.clusters)[':name']['fargate-profiles'][':fargateProfileName']['$delete']
      >,
    ) {
      return parseResponse(
        client.clusters[':name']['fargate-profiles'][':fargateProfileName'].$delete(args, options),
      )
    },
  })
}

export function createDeleteClustersNameFargateProfilesFargateProfileName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.clusters)[':name']['fargate-profiles'][':fargateProfileName']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteClustersNameFargateProfilesFargateProfileNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getClustersNameNodeGroupsNodegroupNameQueryKey(
  args: InferRequestType<
    (typeof client.clusters)[':name']['node-groups'][':nodegroupName']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['clusters', '/clusters/:name/node-groups/:nodegroupName', keyArgs] as const
}

export function getClustersNameNodeGroupsNodegroupNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.clusters)[':name']['node-groups'][':nodegroupName']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':name']['node-groups'][':nodegroupName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.clusters)[':name']['node-groups'][':nodegroupName']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersNameNodeGroupsNodegroupNameQueryKey>
  >({
    queryKey: getClustersNameNodeGroupsNodegroupNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clusters[':name']['node-groups'][':nodegroupName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createClustersNameNodeGroupsNodegroupName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.clusters)[':name']['node-groups'][':nodegroupName']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.clusters)[':name']['node-groups'][':nodegroupName']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.clusters)[':name']['node-groups'][':nodegroupName']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getClustersNameNodeGroupsNodegroupNameQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getClustersNameNodeGroupsNodegroupNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteClustersNameNodeGroupsNodegroupNameMutationKey() {
  return ['clusters', '/clusters/:name/node-groups/:nodegroupName', 'DELETE'] as const
}

export function getDeleteClustersNameNodeGroupsNodegroupNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.clusters)[':name']['node-groups'][':nodegroupName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteClustersNameNodeGroupsNodegroupNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.clusters)[':name']['node-groups'][':nodegroupName']['$delete']
      >,
    ) {
      return parseResponse(
        client.clusters[':name']['node-groups'][':nodegroupName'].$delete(args, options),
      )
    },
  })
}

export function createDeleteClustersNameNodeGroupsNodegroupName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.clusters)[':name']['node-groups'][':nodegroupName']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteClustersNameNodeGroupsNodegroupNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteClusterRegistrationsNameMutationKey() {
  return ['cluster-registrations', '/cluster-registrations/:name', 'DELETE'] as const
}

export function getDeleteClusterRegistrationsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['cluster-registrations'][':name']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['cluster-registrations'][':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteClusterRegistrationsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['cluster-registrations'][':name']['$delete']>,
    ) {
      return parseResponse(client['cluster-registrations'][':name'].$delete(args, options))
    },
  })
}

export function createDeleteClusterRegistrationsName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['cluster-registrations'][':name']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['cluster-registrations'][':name']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteClusterRegistrationsNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAddonsConfigurationSchemasAddonNameAddonVersionQueryKey(
  args: InferRequestType<
    (typeof client.addons)['configuration-schemas#addonName&addonVersion']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['addons', '/addons/configuration-schemas#addonName&addonVersion', keyArgs] as const
}

export function getAddonsConfigurationSchemasAddonNameAddonVersionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.addons)['configuration-schemas#addonName&addonVersion']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.addons)['configuration-schemas#addonName&addonVersion']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAddonsConfigurationSchemasAddonNameAddonVersionQueryKey>
  >({
    queryKey: getAddonsConfigurationSchemasAddonNameAddonVersionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.addons['configuration-schemas#addonName&addonVersion'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAddonsConfigurationSchemasAddonNameAddonVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.addons)['configuration-schemas#addonName&addonVersion']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.addons)['configuration-schemas#addonName&addonVersion']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getAddonsConfigurationSchemasAddonNameAddonVersionQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAddonsConfigurationSchemasAddonNameAddonVersionQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getAddonsSupportedVersionsQueryKey(
  args: InferRequestType<(typeof client.addons)['supported-versions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['addons', '/addons/supported-versions', keyArgs] as const
}

export function getAddonsSupportedVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.addons)['supported-versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.addons)['supported-versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.addons)['supported-versions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAddonsSupportedVersionsQueryKey>
  >({
    queryKey: getAddonsSupportedVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.addons['supported-versions'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAddonsSupportedVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.addons)['supported-versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.addons)['supported-versions']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.addons)['supported-versions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAddonsSupportedVersionsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAddonsSupportedVersionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostClustersNameIdentityProviderConfigsDescribeMutationKey() {
  return ['clusters', '/clusters/:name/identity-provider-configs/describe', 'POST'] as const
}

export function getPostClustersNameIdentityProviderConfigsDescribeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.clusters)[':name']['identity-provider-configs']['describe']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostClustersNameIdentityProviderConfigsDescribeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.clusters)[':name']['identity-provider-configs']['describe']['$post']
      >,
    ) {
      return parseResponse(
        client.clusters[':name']['identity-provider-configs'].describe.$post(args, options),
      )
    },
  })
}

export function createPostClustersNameIdentityProviderConfigsDescribe<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.clusters)[':name']['identity-provider-configs']['describe']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostClustersNameIdentityProviderConfigsDescribeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getClustersNameUpdatesUpdateIdQueryKey(
  args: InferRequestType<(typeof client.clusters)[':name']['updates'][':updateId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['clusters', '/clusters/:name/updates/:updateId', keyArgs] as const
}

export function getClustersNameUpdatesUpdateIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.clusters)[':name']['updates'][':updateId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.clusters)[':name']['updates'][':updateId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.clusters)[':name']['updates'][':updateId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersNameUpdatesUpdateIdQueryKey>
  >({
    queryKey: getClustersNameUpdatesUpdateIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clusters[':name'].updates[':updateId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createClustersNameUpdatesUpdateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.clusters)[':name']['updates'][':updateId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.clusters)[':name']['updates'][':updateId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.clusters)[':name']['updates'][':updateId']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getClustersNameUpdatesUpdateIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getClustersNameUpdatesUpdateIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostClustersNameIdentityProviderConfigsDisassociateMutationKey() {
  return ['clusters', '/clusters/:name/identity-provider-configs/disassociate', 'POST'] as const
}

export function getPostClustersNameIdentityProviderConfigsDisassociateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.clusters)[':name']['identity-provider-configs']['disassociate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostClustersNameIdentityProviderConfigsDisassociateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.clusters)[':name']['identity-provider-configs']['disassociate']['$post']
      >,
    ) {
      return parseResponse(
        client.clusters[':name']['identity-provider-configs'].disassociate.$post(args, options),
      )
    },
  })
}

export function createPostClustersNameIdentityProviderConfigsDisassociate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.clusters)[':name']['identity-provider-configs']['disassociate']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostClustersNameIdentityProviderConfigsDisassociateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getClustersNameIdentityProviderConfigsQueryKey(
  args: InferRequestType<(typeof client.clusters)[':name']['identity-provider-configs']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['clusters', '/clusters/:name/identity-provider-configs', keyArgs] as const
}

export function getClustersNameIdentityProviderConfigsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.clusters)[':name']['identity-provider-configs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.clusters)[':name']['identity-provider-configs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.clusters)[':name']['identity-provider-configs']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersNameIdentityProviderConfigsQueryKey>
  >({
    queryKey: getClustersNameIdentityProviderConfigsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clusters[':name']['identity-provider-configs'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createClustersNameIdentityProviderConfigs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.clusters)[':name']['identity-provider-configs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.clusters)[':name']['identity-provider-configs']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.clusters)[':name']['identity-provider-configs']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getClustersNameIdentityProviderConfigsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getClustersNameIdentityProviderConfigsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTagsResourceArnQueryKey(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >({
    queryKey: getTagsResourceArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags[':resourceArn'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTagsResourceArnQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTagsResourceArnQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostTagsResourceArnMutationKey() {
  return ['tags', '/tags/:resourceArn', 'POST'] as const
}

export function getPostTagsResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsResourceArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)[':resourceArn']['$post']>) {
      return parseResponse(client.tags[':resourceArn'].$post(args, options))
    },
  })
}

export function createPostTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTagsResourceArnMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getClustersNameUpdatesQueryKey(
  args: InferRequestType<(typeof client.clusters)[':name']['updates']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['clusters', '/clusters/:name/updates', keyArgs] as const
}

export function getClustersNameUpdatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.clusters)[':name']['updates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.clusters)[':name']['updates']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.clusters)[':name']['updates']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersNameUpdatesQueryKey>
  >({
    queryKey: getClustersNameUpdatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clusters[':name'].updates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createClustersNameUpdates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.clusters)[':name']['updates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.clusters)[':name']['updates']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.clusters)[':name']['updates']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getClustersNameUpdatesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getClustersNameUpdatesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostClustersNameUpdatesMutationKey() {
  return ['clusters', '/clusters/:name/updates', 'POST'] as const
}

export function getPostClustersNameUpdatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.clusters)[':name']['updates']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.clusters)[':name']['updates']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostClustersNameUpdatesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.clusters)[':name']['updates']['$post']>,
    ) {
      return parseResponse(client.clusters[':name'].updates.$post(args, options))
    },
  })
}

export function createPostClustersNameUpdates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.clusters)[':name']['updates']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.clusters)[':name']['updates']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostClustersNameUpdatesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostClusterRegistrationsMutationKey() {
  return ['cluster-registrations', '/cluster-registrations', 'POST'] as const
}

export function getPostClusterRegistrationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['cluster-registrations']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['cluster-registrations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostClusterRegistrationsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['cluster-registrations']['$post']>) {
      return parseResponse(client['cluster-registrations'].$post(args, options))
    },
  })
}

export function createPostClusterRegistrations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['cluster-registrations']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['cluster-registrations']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostClusterRegistrationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteTagsResourceArnTagKeysMutationKey() {
  return ['tags', '/tags/:resourceArn#tagKeys', 'DELETE'] as const
}

export function getDeleteTagsResourceArnTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTagsResourceArnTagKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
    ) {
      return parseResponse(client.tags[':resourceArn#tagKeys'].$delete(args, options))
    },
  })
}

export function createDeleteTagsResourceArnTagKeys<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTagsResourceArnTagKeysMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostClustersNameAddonsAddonNameUpdateMutationKey() {
  return ['clusters', '/clusters/:name/addons/:addonName/update', 'POST'] as const
}

export function getPostClustersNameAddonsAddonNameUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.clusters)[':name']['addons'][':addonName']['update']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostClustersNameAddonsAddonNameUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.clusters)[':name']['addons'][':addonName']['update']['$post']
      >,
    ) {
      return parseResponse(
        client.clusters[':name'].addons[':addonName'].update.$post(args, options),
      )
    },
  })
}

export function createPostClustersNameAddonsAddonNameUpdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.clusters)[':name']['addons'][':addonName']['update']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.clusters)[':name']['addons'][':addonName']['update']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostClustersNameAddonsAddonNameUpdateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostClustersNameUpdateConfigMutationKey() {
  return ['clusters', '/clusters/:name/update-config', 'POST'] as const
}

export function getPostClustersNameUpdateConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.clusters)[':name']['update-config']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.clusters)[':name']['update-config']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostClustersNameUpdateConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.clusters)[':name']['update-config']['$post']>,
    ) {
      return parseResponse(client.clusters[':name']['update-config'].$post(args, options))
    },
  })
}

export function createPostClustersNameUpdateConfig<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.clusters)[':name']['update-config']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.clusters)[':name']['update-config']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostClustersNameUpdateConfigMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostClustersNameNodeGroupsNodegroupNameUpdateConfigMutationKey() {
  return ['clusters', '/clusters/:name/node-groups/:nodegroupName/update-config', 'POST'] as const
}

export function getPostClustersNameNodeGroupsNodegroupNameUpdateConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.clusters)[':name']['node-groups'][':nodegroupName']['update-config']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostClustersNameNodeGroupsNodegroupNameUpdateConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.clusters)[':name']['node-groups'][':nodegroupName']['update-config']['$post']
      >,
    ) {
      return parseResponse(
        client.clusters[':name']['node-groups'][':nodegroupName']['update-config'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostClustersNameNodeGroupsNodegroupNameUpdateConfig<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.clusters)[':name']['node-groups'][':nodegroupName']['update-config']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostClustersNameNodeGroupsNodegroupNameUpdateConfigMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostClustersNameNodeGroupsNodegroupNameUpdateVersionMutationKey() {
  return ['clusters', '/clusters/:name/node-groups/:nodegroupName/update-version', 'POST'] as const
}

export function getPostClustersNameNodeGroupsNodegroupNameUpdateVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.clusters)[':name']['node-groups'][':nodegroupName']['update-version']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostClustersNameNodeGroupsNodegroupNameUpdateVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.clusters)[':name']['node-groups'][':nodegroupName']['update-version']['$post']
      >,
    ) {
      return parseResponse(
        client.clusters[':name']['node-groups'][':nodegroupName']['update-version'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostClustersNameNodeGroupsNodegroupNameUpdateVersion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.clusters)[':name']['node-groups'][':nodegroupName']['update-version']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostClustersNameNodeGroupsNodegroupNameUpdateVersionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
