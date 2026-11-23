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

export function usePostClustersNameEncryptionConfigAssociate<
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
  const mutationDefaults = getPostClustersNameEncryptionConfigAssociateMutationOptions<
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

export function usePostClustersNameIdentityProviderConfigsAssociate<
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
  const mutationDefaults = getPostClustersNameIdentityProviderConfigsAssociateMutationOptions<
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

export function getClustersNameAddonsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.clusters)[':name']['addons']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['clusters', '/clusters/:name/addons', keyArgs] as const
}

export function getClustersNameAddonsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.clusters)[':name']['addons']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClustersNameAddonsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clusters[':name'].addons.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useClustersNameAddons<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.clusters)[':name']['addons']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.clusters)[':name']['addons']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.clusters)[':name']['addons']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.clusters)[':name']['addons']['$get']>>
              >
            >
          >,
          ReturnType<typeof getClustersNameAddonsQueryKey>
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
          Awaited<ReturnType<(typeof client.clusters)[':name']['addons']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersNameAddonsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClustersNameAddonsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.clusters[':name'].addons.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostClustersNameAddons<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostClustersNameAddonsMutationOptions<TError, TOnMutateResult>(
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

export function getClustersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.clusters.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['clusters', '/clusters', keyArgs] as const
}

export function getClustersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.clusters.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClustersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clusters.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.clusters.$get>>,
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
      queryKey: computed(() => getClustersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.clusters.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostClusters<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clusters.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.clusters.$post>,
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
  const mutationDefaults = getPostClustersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getClustersNameFargateProfilesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.clusters)[':name']['fargate-profiles']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['clusters', '/clusters/:name/fargate-profiles', keyArgs] as const
}

export function getClustersNameFargateProfilesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.clusters)[':name']['fargate-profiles']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClustersNameFargateProfilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clusters[':name']['fargate-profiles'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useClustersNameFargateProfiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.clusters)[':name']['fargate-profiles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.clusters)[':name']['fargate-profiles']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.clusters)[':name']['fargate-profiles']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.clusters)[':name']['fargate-profiles']['$get']>>
              >
            >
          >,
          ReturnType<typeof getClustersNameFargateProfilesQueryKey>
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
          Awaited<ReturnType<(typeof client.clusters)[':name']['fargate-profiles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersNameFargateProfilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClustersNameFargateProfilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.clusters[':name']['fargate-profiles'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostClustersNameFargateProfiles<
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
                Awaited<ReturnType<(typeof client.clusters)[':name']['fargate-profiles']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.clusters)[':name']['fargate-profiles']['$post']>,
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
  const mutationDefaults = getPostClustersNameFargateProfilesMutationOptions<
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

export function getClustersNameNodeGroupsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.clusters)[':name']['node-groups']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['clusters', '/clusters/:name/node-groups', keyArgs] as const
}

export function getClustersNameNodeGroupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.clusters)[':name']['node-groups']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClustersNameNodeGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clusters[':name']['node-groups'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useClustersNameNodeGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.clusters)[':name']['node-groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.clusters)[':name']['node-groups']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.clusters)[':name']['node-groups']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.clusters)[':name']['node-groups']['$get']>>
              >
            >
          >,
          ReturnType<typeof getClustersNameNodeGroupsQueryKey>
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
          Awaited<ReturnType<(typeof client.clusters)[':name']['node-groups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersNameNodeGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClustersNameNodeGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.clusters[':name']['node-groups'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostClustersNameNodeGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostClustersNameNodeGroupsMutationOptions<TError, TOnMutateResult>(
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

export function getClustersNameAddonsAddonNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.clusters)[':name']['addons'][':addonName']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['clusters', '/clusters/:name/addons/:addonName', keyArgs] as const
}

export function getClustersNameAddonsAddonNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.clusters)[':name']['addons'][':addonName']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClustersNameAddonsAddonNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clusters[':name'].addons[':addonName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useClustersNameAddonsAddonName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.clusters)[':name']['addons'][':addonName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.clusters)[':name']['addons'][':addonName']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.clusters)[':name']['addons'][':addonName']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getClustersNameAddonsAddonNameQueryKey>
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
          Awaited<ReturnType<(typeof client.clusters)[':name']['addons'][':addonName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersNameAddonsAddonNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClustersNameAddonsAddonNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.clusters[':name'].addons[':addonName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteClustersNameAddonsAddonName<
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
                  ReturnType<(typeof client.clusters)[':name']['addons'][':addonName']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.clusters)[':name']['addons'][':addonName']['$delete']>,
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
  const mutationDefaults = getDeleteClustersNameAddonsAddonNameMutationOptions<
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

export function getClustersNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.clusters)[':name']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['clusters', '/clusters/:name', keyArgs] as const
}

export function getClustersNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.clusters)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClustersNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clusters[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useClustersName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.clusters)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.clusters)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.clusters)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.clusters)[':name']['$get']>>>
            >
          >,
          ReturnType<typeof getClustersNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.clusters)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClustersNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.clusters[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteClustersName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteClustersNameMutationOptions<TError, TOnMutateResult>(
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

export function getClustersNameFargateProfilesFargateProfileNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clusters)[':name']['fargate-profiles'][':fargateProfileName']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['clusters', '/clusters/:name/fargate-profiles/:fargateProfileName', keyArgs] as const
}

export function getClustersNameFargateProfilesFargateProfileNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clusters)[':name']['fargate-profiles'][':fargateProfileName']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClustersNameFargateProfilesFargateProfileNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clusters[':name']['fargate-profiles'][':fargateProfileName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useClustersNameFargateProfilesFargateProfileName<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clusters)[':name']['fargate-profiles'][':fargateProfileName']['$get']
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
                    (typeof client.clusters)[':name']['fargate-profiles'][':fargateProfileName']['$get']
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
                    (typeof client.clusters)[':name']['fargate-profiles'][':fargateProfileName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getClustersNameFargateProfilesFargateProfileNameQueryKey>
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
              (typeof client.clusters)[':name']['fargate-profiles'][':fargateProfileName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersNameFargateProfilesFargateProfileNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClustersNameFargateProfilesFargateProfileNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.clusters[':name']['fargate-profiles'][':fargateProfileName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteClustersNameFargateProfilesFargateProfileName<
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
  const mutationDefaults = getDeleteClustersNameFargateProfilesFargateProfileNameMutationOptions<
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

export function getClustersNameNodeGroupsNodegroupNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.clusters)[':name']['node-groups'][':nodegroupName']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['clusters', '/clusters/:name/node-groups/:nodegroupName', keyArgs] as const
}

export function getClustersNameNodeGroupsNodegroupNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.clusters)[':name']['node-groups'][':nodegroupName']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClustersNameNodeGroupsNodegroupNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clusters[':name']['node-groups'][':nodegroupName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useClustersNameNodeGroupsNodegroupName<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.clusters)[':name']['node-groups'][':nodegroupName']['$get']>
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
                    (typeof client.clusters)[':name']['node-groups'][':nodegroupName']['$get']
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
                    (typeof client.clusters)[':name']['node-groups'][':nodegroupName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getClustersNameNodeGroupsNodegroupNameQueryKey>
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
            ReturnType<(typeof client.clusters)[':name']['node-groups'][':nodegroupName']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersNameNodeGroupsNodegroupNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClustersNameNodeGroupsNodegroupNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.clusters[':name']['node-groups'][':nodegroupName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteClustersNameNodeGroupsNodegroupName<
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
  const mutationDefaults = getDeleteClustersNameNodeGroupsNodegroupNameMutationOptions<
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

export function useDeleteClusterRegistrationsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteClusterRegistrationsNameMutationOptions<
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

export function getAddonsConfigurationSchemasAddonNameAddonVersionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.addons)['configuration-schemas#addonName&addonVersion']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['addons', '/addons/configuration-schemas#addonName&addonVersion', keyArgs] as const
}

export function getAddonsConfigurationSchemasAddonNameAddonVersionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.addons)['configuration-schemas#addonName&addonVersion']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAddonsConfigurationSchemasAddonNameAddonVersionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.addons['configuration-schemas#addonName&addonVersion'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAddonsConfigurationSchemasAddonNameAddonVersion<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.addons)['configuration-schemas#addonName&addonVersion']['$get']>
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
                    (typeof client.addons)['configuration-schemas#addonName&addonVersion']['$get']
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
                    (typeof client.addons)['configuration-schemas#addonName&addonVersion']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAddonsConfigurationSchemasAddonNameAddonVersionQueryKey>
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
              (typeof client.addons)['configuration-schemas#addonName&addonVersion']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAddonsConfigurationSchemasAddonNameAddonVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAddonsConfigurationSchemasAddonNameAddonVersionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.addons['configuration-schemas#addonName&addonVersion'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAddonsSupportedVersionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.addons)['supported-versions']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['addons', '/addons/supported-versions', keyArgs] as const
}

export function getAddonsSupportedVersionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.addons)['supported-versions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAddonsSupportedVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.addons['supported-versions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAddonsSupportedVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.addons)['supported-versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.addons)['supported-versions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.addons)['supported-versions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.addons)['supported-versions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAddonsSupportedVersionsQueryKey>
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
          Awaited<ReturnType<(typeof client.addons)['supported-versions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAddonsSupportedVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAddonsSupportedVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.addons['supported-versions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostClustersNameIdentityProviderConfigsDescribe<
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
  const mutationDefaults = getPostClustersNameIdentityProviderConfigsDescribeMutationOptions<
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

export function getClustersNameUpdatesUpdateIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.clusters)[':name']['updates'][':updateId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['clusters', '/clusters/:name/updates/:updateId', keyArgs] as const
}

export function getClustersNameUpdatesUpdateIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.clusters)[':name']['updates'][':updateId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClustersNameUpdatesUpdateIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clusters[':name'].updates[':updateId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useClustersNameUpdatesUpdateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.clusters)[':name']['updates'][':updateId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.clusters)[':name']['updates'][':updateId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.clusters)[':name']['updates'][':updateId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getClustersNameUpdatesUpdateIdQueryKey>
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
          Awaited<ReturnType<(typeof client.clusters)[':name']['updates'][':updateId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersNameUpdatesUpdateIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClustersNameUpdatesUpdateIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.clusters[':name'].updates[':updateId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostClustersNameIdentityProviderConfigsDisassociate<
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
  const mutationDefaults = getPostClustersNameIdentityProviderConfigsDisassociateMutationOptions<
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

export function getClustersNameIdentityProviderConfigsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.clusters)[':name']['identity-provider-configs']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['clusters', '/clusters/:name/identity-provider-configs', keyArgs] as const
}

export function getClustersNameIdentityProviderConfigsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.clusters)[':name']['identity-provider-configs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClustersNameIdentityProviderConfigsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clusters[':name']['identity-provider-configs'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useClustersNameIdentityProviderConfigs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.clusters)[':name']['identity-provider-configs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.clusters)[':name']['identity-provider-configs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.clusters)[':name']['identity-provider-configs']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getClustersNameIdentityProviderConfigsQueryKey>
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
            ReturnType<(typeof client.clusters)[':name']['identity-provider-configs']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersNameIdentityProviderConfigsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClustersNameIdentityProviderConfigsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.clusters[':name']['identity-provider-configs'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTagsResourceArnQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':resourceArn']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':resourceArn']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsResourceArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tags[':resourceArn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':resourceArn']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTagsResourceArnQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagsResourceArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tags[':resourceArn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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

export function getClustersNameUpdatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.clusters)[':name']['updates']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['clusters', '/clusters/:name/updates', keyArgs] as const
}

export function getClustersNameUpdatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.clusters)[':name']['updates']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClustersNameUpdatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clusters[':name'].updates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useClustersNameUpdates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.clusters)[':name']['updates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.clusters)[':name']['updates']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.clusters)[':name']['updates']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.clusters)[':name']['updates']['$get']>>
              >
            >
          >,
          ReturnType<typeof getClustersNameUpdatesQueryKey>
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
          Awaited<ReturnType<(typeof client.clusters)[':name']['updates']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersNameUpdatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClustersNameUpdatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.clusters[':name'].updates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostClustersNameUpdates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostClustersNameUpdatesMutationOptions<TError, TOnMutateResult>(
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

export function usePostClusterRegistrations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostClusterRegistrationsMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteTagsResourceArnTagKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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

export function usePostClustersNameAddonsAddonNameUpdate<
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
  const mutationDefaults = getPostClustersNameAddonsAddonNameUpdateMutationOptions<
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

export function usePostClustersNameUpdateConfig<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostClustersNameUpdateConfigMutationOptions<TError, TOnMutateResult>(
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

export function usePostClustersNameNodeGroupsNodegroupNameUpdateConfig<
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
  const mutationDefaults = getPostClustersNameNodeGroupsNodegroupNameUpdateConfigMutationOptions<
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

export function usePostClustersNameNodeGroupsNodegroupNameUpdateVersion<
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
  const mutationDefaults = getPostClustersNameNodeGroupsNodegroupNameUpdateVersionMutationOptions<
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
