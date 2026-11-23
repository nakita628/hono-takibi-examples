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

export function getAddonKey() {
  return ['addon'] as const
}

export function getHookEventsKey() {
  return ['hook_events'] as const
}

export function getRepositoriesKey() {
  return ['repositories'] as const
}

export function getSnippetsKey() {
  return ['snippets'] as const
}

export function getTeamsKey() {
  return ['teams'] as const
}

export function getUserKey() {
  return ['user'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getWorkspacesKey() {
  return ['workspaces'] as const
}

export function getPutAddonMutationKey() {
  return ['addon', '/addon', 'PUT'] as const
}

export function getPutAddonMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addon.$put>>>>>
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPutAddonMutationKey(),
    async mutationFn() {
      return parseResponse(client.addon.$put(undefined, options))
    },
  })
}

export function usePutAddon<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addon.$put>>>>>
          | undefined,
          TError,
          void,
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
  const mutationDefaults = getPutAddonMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteAddonMutationKey() {
  return ['addon', '/addon', 'DELETE'] as const
}

export function getDeleteAddonMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addon.$delete>>>>>
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteAddonMutationKey(),
    async mutationFn() {
      return parseResponse(client.addon.$delete(undefined, options))
    },
  })
}

export function useDeleteAddon<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addon.$delete>>>>
            >
          | undefined,
          TError,
          void,
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
  const mutationDefaults = getDeleteAddonMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAddonAddonKeyClientKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.addon)[':addon_key']['client-key']['$get']>
  >,
) {
  return ['addon', '/addon/:addon_key/client-key', toValue(args)] as const
}

export function getAddonAddonKeyClientKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.addon)[':addon_key']['client-key']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAddonAddonKeyClientKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.addon[':addon_key']['client-key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAddonAddonKeyClientKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.addon)[':addon_key']['client-key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.addon)[':addon_key']['client-key']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.addon)[':addon_key']['client-key']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.addon)[':addon_key']['client-key']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAddonAddonKeyClientKeyQueryKey>
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
          Awaited<ReturnType<(typeof client.addon)[':addon_key']['client-key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAddonAddonKeyClientKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAddonAddonKeyClientKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.addon[':addon_key']['client-key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHookEventsQueryKey() {
  return ['hook_events', '/hook_events'] as const
}

export function getHookEventsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getHookEventsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hook_events.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHookEvents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hook_events.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hook_events.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hook_events.$get>>>>
          >,
          ReturnType<typeof getHookEventsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hook_events.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHookEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getHookEventsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.hook_events.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHookEventsSubjectTypeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.hook_events)[':subject_type']['$get']>>,
) {
  return ['hook_events', '/hook_events/:subject_type', toValue(args)] as const
}

export function getHookEventsSubjectTypeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.hook_events)[':subject_type']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHookEventsSubjectTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hook_events[':subject_type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHookEventsSubjectType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.hook_events)[':subject_type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.hook_events)[':subject_type']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.hook_events)[':subject_type']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.hook_events)[':subject_type']['$get']>>
              >
            >
          >,
          ReturnType<typeof getHookEventsSubjectTypeQueryKey>
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
          Awaited<ReturnType<(typeof client.hook_events)[':subject_type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHookEventsSubjectTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHookEventsSubjectTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.hook_events[':subject_type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositoriesWorkspaceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.repositories)[':workspace']['$get']>>,
) {
  return ['repositories', '/repositories/:workspace', toValue(args)] as const
}

export function getRepositoriesWorkspaceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.repositories)[':workspace']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositoriesWorkspaceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositoriesWorkspace<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.repositories)[':workspace']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.repositories)[':workspace']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.repositories)[':workspace']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.repositories)[':workspace']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceQueryKey>
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
          Awaited<ReturnType<(typeof client.repositories)[':workspace']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositoriesWorkspaceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositoriesWorkspaceRepoSlugQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['$get']>
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug', toValue(args)] as const
}

export function getRepositoriesWorkspaceRepoSlugQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositoriesWorkspaceRepoSlugQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.repositories)[':workspace'][':repo_slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.repositories)[':workspace'][':repo_slug']['$get']>
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
                  ReturnType<(typeof client.repositories)[':workspace'][':repo_slug']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugQueryKey>
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
          Awaited<ReturnType<(typeof client.repositories)[':workspace'][':repo_slug']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositoriesWorkspaceRepoSlugQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutRepositoriesWorkspaceRepoSlugMutationKey() {
  return ['repositories', '/repositories/:workspace/:repo_slug', 'PUT'] as const
}

export function getPutRepositoriesWorkspaceRepoSlugMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.repositories)[':workspace'][':repo_slug']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutRepositoriesWorkspaceRepoSlugMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['$put']>,
    ) {
      return parseResponse(client.repositories[':workspace'][':repo_slug'].$put(args, options))
    },
  })
}

export function usePutRepositoriesWorkspaceRepoSlug<
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
                  ReturnType<(typeof client.repositories)[':workspace'][':repo_slug']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['$put']>,
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
  const mutationDefaults = getPutRepositoriesWorkspaceRepoSlugMutationOptions<
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

export function getPostRepositoriesWorkspaceRepoSlugMutationKey() {
  return ['repositories', '/repositories/:workspace/:repo_slug', 'POST'] as const
}

export function getPostRepositoriesWorkspaceRepoSlugMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.repositories)[':workspace'][':repo_slug']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRepositoriesWorkspaceRepoSlugMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['$post']>,
    ) {
      return parseResponse(client.repositories[':workspace'][':repo_slug'].$post(args, options))
    },
  })
}

export function usePostRepositoriesWorkspaceRepoSlug<
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
                  ReturnType<(typeof client.repositories)[':workspace'][':repo_slug']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['$post']>,
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
  const mutationDefaults = getPostRepositoriesWorkspaceRepoSlugMutationOptions<
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

export function getDeleteRepositoriesWorkspaceRepoSlugMutationKey() {
  return ['repositories', '/repositories/:workspace/:repo_slug', 'DELETE'] as const
}

export function getDeleteRepositoriesWorkspaceRepoSlugMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.repositories)[':workspace'][':repo_slug']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRepositoriesWorkspaceRepoSlugMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['$delete']>,
    ) {
      return parseResponse(client.repositories[':workspace'][':repo_slug'].$delete(args, options))
    },
  })
}

export function useDeleteRepositoriesWorkspaceRepoSlug<
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
                    ReturnType<(typeof client.repositories)[':workspace'][':repo_slug']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['$delete']>,
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
  const mutationDefaults = getDeleteRepositoriesWorkspaceRepoSlugMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugBranchRestrictionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['branch-restrictions']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/branch-restrictions',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugBranchRestrictionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['branch-restrictions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositoriesWorkspaceRepoSlugBranchRestrictionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['branch-restrictions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugBranchRestrictions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['branch-restrictions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['branch-restrictions']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['branch-restrictions']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['branch-restrictions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugBranchRestrictionsQueryKey>
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
              (typeof client.repositories)[':workspace'][':repo_slug']['branch-restrictions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugBranchRestrictionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositoriesWorkspaceRepoSlugBranchRestrictionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug']['branch-restrictions'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostRepositoriesWorkspaceRepoSlugBranchRestrictionsMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/branch-restrictions',
    'POST',
  ] as const
}

export function getPostRepositoriesWorkspaceRepoSlugBranchRestrictionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['branch-restrictions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['branch-restrictions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRepositoriesWorkspaceRepoSlugBranchRestrictionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['branch-restrictions']['$post']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['branch-restrictions'].$post(args, options),
      )
    },
  })
}

export function usePostRepositoriesWorkspaceRepoSlugBranchRestrictions<
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['branch-restrictions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['branch-restrictions']['$post']
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
  const mutationDefaults = getPostRepositoriesWorkspaceRepoSlugBranchRestrictionsMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugBranchRestrictionsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['branch-restrictions'][':id']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/branch-restrictions/:id',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugBranchRestrictionsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['branch-restrictions'][':id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositoriesWorkspaceRepoSlugBranchRestrictionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['branch-restrictions'][':id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugBranchRestrictionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['branch-restrictions'][':id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['branch-restrictions'][':id']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['branch-restrictions'][':id']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['branch-restrictions'][':id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugBranchRestrictionsIdQueryKey>
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
              (typeof client.repositories)[':workspace'][':repo_slug']['branch-restrictions'][':id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugBranchRestrictionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositoriesWorkspaceRepoSlugBranchRestrictionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug']['branch-restrictions'][':id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutRepositoriesWorkspaceRepoSlugBranchRestrictionsIdMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/branch-restrictions/:id',
    'PUT',
  ] as const
}

export function getPutRepositoriesWorkspaceRepoSlugBranchRestrictionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['branch-restrictions'][':id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['branch-restrictions'][':id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutRepositoriesWorkspaceRepoSlugBranchRestrictionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['branch-restrictions'][':id']['$put']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['branch-restrictions'][':id'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutRepositoriesWorkspaceRepoSlugBranchRestrictionsId<
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['branch-restrictions'][':id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['branch-restrictions'][':id']['$put']
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
  const mutationDefaults = getPutRepositoriesWorkspaceRepoSlugBranchRestrictionsIdMutationOptions<
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

export function getDeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsIdMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/branch-restrictions/:id',
    'DELETE',
  ] as const
}

export function getDeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['branch-restrictions'][':id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['branch-restrictions'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['branch-restrictions'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['branch-restrictions'][':id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsId<
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
                      (typeof client.repositories)[':workspace'][':repo_slug']['branch-restrictions'][':id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['branch-restrictions'][':id']['$delete']
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
  const mutationDefaults =
    getDeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsIdMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugBranchingModelQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['branching-model']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/branching-model',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugBranchingModelQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['branching-model']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositoriesWorkspaceRepoSlugBranchingModelQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['branching-model'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugBranchingModel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['branching-model']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['branching-model']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['branching-model']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['branching-model']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugBranchingModelQueryKey>
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
              (typeof client.repositories)[':workspace'][':repo_slug']['branching-model']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugBranchingModelQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositoriesWorkspaceRepoSlugBranchingModelQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug']['branching-model'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositoriesWorkspaceRepoSlugBranchingModelSettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['branching-model']['settings']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/branching-model/settings',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugBranchingModelSettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['branching-model']['settings']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositoriesWorkspaceRepoSlugBranchingModelSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['branching-model'].settings.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugBranchingModelSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['branching-model']['settings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['branching-model']['settings']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['branching-model']['settings']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['branching-model']['settings']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugBranchingModelSettingsQueryKey>
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
              (typeof client.repositories)[':workspace'][':repo_slug']['branching-model']['settings']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugBranchingModelSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRepositoriesWorkspaceRepoSlugBranchingModelSettingsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug']['branching-model'].settings.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutRepositoriesWorkspaceRepoSlugBranchingModelSettingsMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/branching-model/settings',
    'PUT',
  ] as const
}

export function getPutRepositoriesWorkspaceRepoSlugBranchingModelSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['branching-model']['settings']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['branching-model']['settings']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutRepositoriesWorkspaceRepoSlugBranchingModelSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['branching-model']['settings']['$put']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['branching-model'].settings.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutRepositoriesWorkspaceRepoSlugBranchingModelSettings<
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['branching-model']['settings']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['branching-model']['settings']['$put']
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
  const mutationDefaults = getPutRepositoriesWorkspaceRepoSlugBranchingModelSettingsMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugCommitCommitQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/commit/:commit',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugCommitCommitQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositoriesWorkspaceRepoSlugCommitCommitQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].commit[':commit'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugCommitCommit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugCommitCommitQueryKey>
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
              (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugCommitCommitQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositoriesWorkspaceRepoSlugCommitCommitQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].commit[':commit'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRepositoriesWorkspaceRepoSlugCommitCommitApproveMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/commit/:commit/approve',
    'POST',
  ] as const
}

export function getPostRepositoriesWorkspaceRepoSlugCommitCommitApproveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['approve']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['approve']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRepositoriesWorkspaceRepoSlugCommitCommitApproveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['approve']['$post']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].commit[':commit'].approve.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostRepositoriesWorkspaceRepoSlugCommitCommitApprove<
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['approve']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['approve']['$post']
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
  const mutationDefaults = getPostRepositoriesWorkspaceRepoSlugCommitCommitApproveMutationOptions<
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

export function getDeleteRepositoriesWorkspaceRepoSlugCommitCommitApproveMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/commit/:commit/approve',
    'DELETE',
  ] as const
}

export function getDeleteRepositoriesWorkspaceRepoSlugCommitCommitApproveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['approve']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['approve']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteRepositoriesWorkspaceRepoSlugCommitCommitApproveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['approve']['$delete']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].commit[':commit'].approve.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteRepositoriesWorkspaceRepoSlugCommitCommitApprove<
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
                      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['approve']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['approve']['$delete']
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
  const mutationDefaults = getDeleteRepositoriesWorkspaceRepoSlugCommitCommitApproveMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugCommitCommitCommentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['comments']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/commit/:commit/comments',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugCommitCommitCommentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['comments']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositoriesWorkspaceRepoSlugCommitCommitCommentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].commit[':commit'].comments.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugCommitCommitComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['comments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['comments']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['comments']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['comments']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugCommitCommitCommentsQueryKey>
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
              (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['comments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugCommitCommitCommentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositoriesWorkspaceRepoSlugCommitCommitCommentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].commit[':commit'].comments.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostRepositoriesWorkspaceRepoSlugCommitCommitCommentsMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/commit/:commit/comments',
    'POST',
  ] as const
}

export function getPostRepositoriesWorkspaceRepoSlugCommitCommitCommentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['comments']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['comments']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRepositoriesWorkspaceRepoSlugCommitCommitCommentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['comments']['$post']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].commit[':commit'].comments.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostRepositoriesWorkspaceRepoSlugCommitCommitComments<
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['comments']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['comments']['$post']
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
  const mutationDefaults = getPostRepositoriesWorkspaceRepoSlugCommitCommitCommentsMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['comments'][':comment_id']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/commit/:commit/comments/:comment_id',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['comments'][':comment_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].commit[':commit'].comments[
          ':comment_id'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['comments'][':comment_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['comments'][':comment_id']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['comments'][':comment_id']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['comments'][':comment_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdQueryKey>
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
              (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['comments'][':comment_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].commit[':commit'].comments[
            ':comment_id'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPutRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/commit/:commit/comments/:comment_id',
    'PUT',
  ] as const
}

export function getPutRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['comments'][':comment_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['comments'][':comment_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['comments'][':comment_id']['$put']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].commit[':commit'].comments[
          ':comment_id'
        ].$put(args, options),
      )
    },
  })
}

export function usePutRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentId<
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['comments'][':comment_id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['comments'][':comment_id']['$put']
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
  const mutationDefaults =
    getPutRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdMutationOptions<
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

export function getDeleteRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/commit/:commit/comments/:comment_id',
    'DELETE',
  ] as const
}

export function getDeleteRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['comments'][':comment_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['comments'][':comment_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['comments'][':comment_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].commit[':commit'].comments[
          ':comment_id'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentId<
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
                      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['comments'][':comment_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['comments'][':comment_id']['$delete']
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
  const mutationDefaults =
    getDeleteRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugCommitCommitPropertiesAppKeyPropertyNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['properties'][':app_key'][':property_name']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/commit/:commit/properties/:app_key/:property_name',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugCommitCommitPropertiesAppKeyPropertyNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['properties'][':app_key'][':property_name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRepositoriesWorkspaceRepoSlugCommitCommitPropertiesAppKeyPropertyNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].commit[':commit'].properties[':app_key'][
          ':property_name'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugCommitCommitPropertiesAppKeyPropertyName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['properties'][':app_key'][':property_name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['properties'][':app_key'][':property_name']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['properties'][':app_key'][':property_name']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['properties'][':app_key'][':property_name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getRepositoriesWorkspaceRepoSlugCommitCommitPropertiesAppKeyPropertyNameQueryKey
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
              (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['properties'][':app_key'][':property_name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getRepositoriesWorkspaceRepoSlugCommitCommitPropertiesAppKeyPropertyNameQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRepositoriesWorkspaceRepoSlugCommitCommitPropertiesAppKeyPropertyNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].commit[':commit'].properties[':app_key'][
            ':property_name'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPutRepositoriesWorkspaceRepoSlugCommitCommitPropertiesAppKeyPropertyNameMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/commit/:commit/properties/:app_key/:property_name',
    'PUT',
  ] as const
}

export function getPutRepositoriesWorkspaceRepoSlugCommitCommitPropertiesAppKeyPropertyNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['properties'][':app_key'][':property_name']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['properties'][':app_key'][':property_name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutRepositoriesWorkspaceRepoSlugCommitCommitPropertiesAppKeyPropertyNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['properties'][':app_key'][':property_name']['$put']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].commit[':commit'].properties[':app_key'][
          ':property_name'
        ].$put(args, options),
      )
    },
  })
}

export function usePutRepositoriesWorkspaceRepoSlugCommitCommitPropertiesAppKeyPropertyName<
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
                      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['properties'][':app_key'][':property_name']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['properties'][':app_key'][':property_name']['$put']
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
  const mutationDefaults =
    getPutRepositoriesWorkspaceRepoSlugCommitCommitPropertiesAppKeyPropertyNameMutationOptions<
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

export function getDeleteRepositoriesWorkspaceRepoSlugCommitCommitPropertiesAppKeyPropertyNameMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/commit/:commit/properties/:app_key/:property_name',
    'DELETE',
  ] as const
}

export function getDeleteRepositoriesWorkspaceRepoSlugCommitCommitPropertiesAppKeyPropertyNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['properties'][':app_key'][':property_name']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['properties'][':app_key'][':property_name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteRepositoriesWorkspaceRepoSlugCommitCommitPropertiesAppKeyPropertyNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['properties'][':app_key'][':property_name']['$delete']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].commit[':commit'].properties[':app_key'][
          ':property_name'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteRepositoriesWorkspaceRepoSlugCommitCommitPropertiesAppKeyPropertyName<
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
                      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['properties'][':app_key'][':property_name']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['properties'][':app_key'][':property_name']['$delete']
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
  const mutationDefaults =
    getDeleteRepositoriesWorkspaceRepoSlugCommitCommitPropertiesAppKeyPropertyNameMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugCommitCommitPullrequestsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['pullrequests']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/commit/:commit/pullrequests',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugCommitCommitPullrequestsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['pullrequests']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRepositoriesWorkspaceRepoSlugCommitCommitPullrequestsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].commit[':commit'].pullrequests.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugCommitCommitPullrequests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['pullrequests']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['pullrequests']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['pullrequests']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['pullrequests']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugCommitCommitPullrequestsQueryKey>
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
              (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['pullrequests']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugCommitCommitPullrequestsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRepositoriesWorkspaceRepoSlugCommitCommitPullrequestsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].commit[':commit'].pullrequests.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getRepositoriesWorkspaceRepoSlugCommitCommitReportsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/commit/:commit/reports',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugCommitCommitReportsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositoriesWorkspaceRepoSlugCommitCommitReportsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].commit[':commit'].reports.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugCommitCommitReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugCommitCommitReportsQueryKey>
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
              (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugCommitCommitReportsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositoriesWorkspaceRepoSlugCommitCommitReportsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].commit[':commit'].reports.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/commit/:commit/reports/:reportId',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].commit[':commit'].reports[':reportId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugCommitCommitReportsReportId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdQueryKey>
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
              (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].commit[':commit'].reports[
            ':reportId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPutRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/commit/:commit/reports/:reportId',
    'PUT',
  ] as const
}

export function getPutRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['$put']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].commit[':commit'].reports[':reportId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutRepositoriesWorkspaceRepoSlugCommitCommitReportsReportId<
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['$put']
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
  const mutationDefaults =
    getPutRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdMutationOptions<
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

export function getDeleteRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/commit/:commit/reports/:reportId',
    'DELETE',
  ] as const
}

export function getDeleteRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['$delete']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].commit[':commit'].reports[
          ':reportId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteRepositoriesWorkspaceRepoSlugCommitCommitReportsReportId<
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
                      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['$delete']
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
  const mutationDefaults =
    getDeleteRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['annotations']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/commit/:commit/reports/:reportId/annotations',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['annotations']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].commit[':commit'].reports[
          ':reportId'
        ].annotations.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['annotations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['annotations']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['annotations']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['annotations']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsQueryKey
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
              (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['annotations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].commit[':commit'].reports[
            ':reportId'
          ].annotations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/commit/:commit/reports/:reportId/annotations',
    'POST',
  ] as const
}

export function getPostRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['annotations']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['annotations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['annotations']['$post']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].commit[':commit'].reports[
          ':reportId'
        ].annotations.$post(args, options),
      )
    },
  })
}

export function usePostRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotations<
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['annotations']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['annotations']['$post']
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
  const mutationDefaults =
    getPostRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsAnnotationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['annotations'][':annotationId']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/commit/:commit/reports/:reportId/annotations/:annotationId',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsAnnotationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['annotations'][':annotationId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsAnnotationIdQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].commit[':commit'].reports[
          ':reportId'
        ].annotations[':annotationId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsAnnotationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['annotations'][':annotationId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['annotations'][':annotationId']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['annotations'][':annotationId']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['annotations'][':annotationId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsAnnotationIdQueryKey
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
              (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['annotations'][':annotationId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsAnnotationIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsAnnotationIdQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].commit[':commit'].reports[
            ':reportId'
          ].annotations[':annotationId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsAnnotationIdMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/commit/:commit/reports/:reportId/annotations/:annotationId',
    'PUT',
  ] as const
}

export function getPutRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsAnnotationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['annotations'][':annotationId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['annotations'][':annotationId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsAnnotationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['annotations'][':annotationId']['$put']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].commit[':commit'].reports[
          ':reportId'
        ].annotations[':annotationId'].$put(args, options),
      )
    },
  })
}

export function usePutRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsAnnotationId<
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['annotations'][':annotationId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['annotations'][':annotationId']['$put']
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
  const mutationDefaults =
    getPutRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsAnnotationIdMutationOptions<
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

export function getDeleteRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsAnnotationIdMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/commit/:commit/reports/:reportId/annotations/:annotationId',
    'DELETE',
  ] as const
}

export function getDeleteRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsAnnotationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['annotations'][':annotationId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['annotations'][':annotationId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsAnnotationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['annotations'][':annotationId']['$delete']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].commit[':commit'].reports[
          ':reportId'
        ].annotations[':annotationId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsAnnotationId<
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
                      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['annotations'][':annotationId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['annotations'][':annotationId']['$delete']
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
  const mutationDefaults =
    getDeleteRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsAnnotationIdMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugCommitCommitStatusesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['statuses']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/commit/:commit/statuses',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugCommitCommitStatusesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['statuses']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositoriesWorkspaceRepoSlugCommitCommitStatusesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].commit[':commit'].statuses.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugCommitCommitStatuses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['statuses']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['statuses']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['statuses']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['statuses']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugCommitCommitStatusesQueryKey>
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
              (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['statuses']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugCommitCommitStatusesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositoriesWorkspaceRepoSlugCommitCommitStatusesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].commit[':commit'].statuses.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/commit/:commit/statuses/build',
    'POST',
  ] as const
}

export function getPostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['statuses']['build']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['statuses']['build']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['statuses']['build']['$post']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].commit[':commit'].statuses.build.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuild<
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['statuses']['build']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['statuses']['build']['$post']
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
  const mutationDefaults =
    getPostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['statuses']['build'][':key']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/commit/:commit/statuses/build/:key',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['statuses']['build'][':key']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].commit[':commit'].statuses.build[
          ':key'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['statuses']['build'][':key']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['statuses']['build'][':key']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['statuses']['build'][':key']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['statuses']['build'][':key']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyQueryKey>
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
              (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['statuses']['build'][':key']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].commit[':commit'].statuses.build[
            ':key'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/commit/:commit/statuses/build/:key',
    'PUT',
  ] as const
}

export function getPutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['statuses']['build'][':key']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['statuses']['build'][':key']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['statuses']['build'][':key']['$put']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].commit[':commit'].statuses.build[
          ':key'
        ].$put(args, options),
      )
    },
  })
}

export function usePutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKey<
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['statuses']['build'][':key']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['statuses']['build'][':key']['$put']
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
  const mutationDefaults =
    getPutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugCommitsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['commits']['$get']>
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/commits', toValue(args)] as const
}

export function getRepositoriesWorkspaceRepoSlugCommitsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['commits']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositoriesWorkspaceRepoSlugCommitsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].commits.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugCommits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.repositories)[':workspace'][':repo_slug']['commits']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['commits']['$get']>
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['commits']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['commits']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugCommitsQueryKey>
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
            ReturnType<(typeof client.repositories)[':workspace'][':repo_slug']['commits']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugCommitsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositoriesWorkspaceRepoSlugCommitsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].commits.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRepositoriesWorkspaceRepoSlugCommitsMutationKey() {
  return ['repositories', '/repositories/:workspace/:repo_slug/commits', 'POST'] as const
}

export function getPostRepositoriesWorkspaceRepoSlugCommitsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.repositories)[':workspace'][':repo_slug']['commits']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['commits']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRepositoriesWorkspaceRepoSlugCommitsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['commits']['$post']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].commits.$post(args, options),
      )
    },
  })
}

export function usePostRepositoriesWorkspaceRepoSlugCommits<
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['commits']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['commits']['$post']
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
  const mutationDefaults = getPostRepositoriesWorkspaceRepoSlugCommitsMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugCommitsRevisionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['commits'][':revision']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/commits/:revision',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugCommitsRevisionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['commits'][':revision']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositoriesWorkspaceRepoSlugCommitsRevisionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].commits[':revision'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugCommitsRevision<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['commits'][':revision']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['commits'][':revision']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['commits'][':revision']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['commits'][':revision']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugCommitsRevisionQueryKey>
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
              (typeof client.repositories)[':workspace'][':repo_slug']['commits'][':revision']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugCommitsRevisionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositoriesWorkspaceRepoSlugCommitsRevisionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].commits[':revision'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRepositoriesWorkspaceRepoSlugCommitsRevisionMutationKey() {
  return ['repositories', '/repositories/:workspace/:repo_slug/commits/:revision', 'POST'] as const
}

export function getPostRepositoriesWorkspaceRepoSlugCommitsRevisionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['commits'][':revision']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['commits'][':revision']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRepositoriesWorkspaceRepoSlugCommitsRevisionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['commits'][':revision']['$post']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].commits[':revision'].$post(args, options),
      )
    },
  })
}

export function usePostRepositoriesWorkspaceRepoSlugCommitsRevision<
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['commits'][':revision']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['commits'][':revision']['$post']
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
  const mutationDefaults = getPostRepositoriesWorkspaceRepoSlugCommitsRevisionMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugDefaultReviewersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['default-reviewers']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/default-reviewers',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugDefaultReviewersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['default-reviewers']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositoriesWorkspaceRepoSlugDefaultReviewersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['default-reviewers'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugDefaultReviewers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['default-reviewers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['default-reviewers']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['default-reviewers']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['default-reviewers']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugDefaultReviewersQueryKey>
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
              (typeof client.repositories)[':workspace'][':repo_slug']['default-reviewers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugDefaultReviewersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositoriesWorkspaceRepoSlugDefaultReviewersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug']['default-reviewers'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['default-reviewers'][':target_username']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/default-reviewers/:target_username',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['default-reviewers'][':target_username']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['default-reviewers'][
          ':target_username'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['default-reviewers'][':target_username']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['default-reviewers'][':target_username']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['default-reviewers'][':target_username']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['default-reviewers'][':target_username']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameQueryKey>
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
              (typeof client.repositories)[':workspace'][':repo_slug']['default-reviewers'][':target_username']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug']['default-reviewers'][
            ':target_username'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/default-reviewers/:target_username',
    'PUT',
  ] as const
}

export function getPutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['default-reviewers'][':target_username']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['default-reviewers'][':target_username']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['default-reviewers'][':target_username']['$put']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['default-reviewers'][
          ':target_username'
        ].$put(args, options),
      )
    },
  })
}

export function usePutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername<
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['default-reviewers'][':target_username']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['default-reviewers'][':target_username']['$put']
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
  const mutationDefaults =
    getPutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameMutationOptions<
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

export function getDeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/default-reviewers/:target_username',
    'DELETE',
  ] as const
}

export function getDeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['default-reviewers'][':target_username']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['default-reviewers'][':target_username']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['default-reviewers'][':target_username']['$delete']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['default-reviewers'][
          ':target_username'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername<
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
                      (typeof client.repositories)[':workspace'][':repo_slug']['default-reviewers'][':target_username']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['default-reviewers'][':target_username']['$delete']
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
  const mutationDefaults =
    getDeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugDeployKeysQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['deploy-keys']['$get']
    >
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/deploy-keys', toValue(args)] as const
}

export function getRepositoriesWorkspaceRepoSlugDeployKeysQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['deploy-keys']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositoriesWorkspaceRepoSlugDeployKeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['deploy-keys'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugDeployKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['deploy-keys']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['deploy-keys']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['deploy-keys']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['deploy-keys']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugDeployKeysQueryKey>
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
              (typeof client.repositories)[':workspace'][':repo_slug']['deploy-keys']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugDeployKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositoriesWorkspaceRepoSlugDeployKeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug']['deploy-keys'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRepositoriesWorkspaceRepoSlugDeployKeysMutationKey() {
  return ['repositories', '/repositories/:workspace/:repo_slug/deploy-keys', 'POST'] as const
}

export function getPostRepositoriesWorkspaceRepoSlugDeployKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['deploy-keys']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['deploy-keys']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRepositoriesWorkspaceRepoSlugDeployKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['deploy-keys']['$post']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['deploy-keys'].$post(args, options),
      )
    },
  })
}

export function usePostRepositoriesWorkspaceRepoSlugDeployKeys<
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['deploy-keys']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['deploy-keys']['$post']
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
  const mutationDefaults = getPostRepositoriesWorkspaceRepoSlugDeployKeysMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugDeployKeysKeyIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['deploy-keys'][':key_id']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/deploy-keys/:key_id',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugDeployKeysKeyIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['deploy-keys'][':key_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositoriesWorkspaceRepoSlugDeployKeysKeyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['deploy-keys'][':key_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugDeployKeysKeyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['deploy-keys'][':key_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['deploy-keys'][':key_id']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['deploy-keys'][':key_id']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['deploy-keys'][':key_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugDeployKeysKeyIdQueryKey>
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
              (typeof client.repositories)[':workspace'][':repo_slug']['deploy-keys'][':key_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugDeployKeysKeyIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositoriesWorkspaceRepoSlugDeployKeysKeyIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug']['deploy-keys'][':key_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutRepositoriesWorkspaceRepoSlugDeployKeysKeyIdMutationKey() {
  return ['repositories', '/repositories/:workspace/:repo_slug/deploy-keys/:key_id', 'PUT'] as const
}

export function getPutRepositoriesWorkspaceRepoSlugDeployKeysKeyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['deploy-keys'][':key_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['deploy-keys'][':key_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutRepositoriesWorkspaceRepoSlugDeployKeysKeyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['deploy-keys'][':key_id']['$put']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['deploy-keys'][':key_id'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutRepositoriesWorkspaceRepoSlugDeployKeysKeyId<
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['deploy-keys'][':key_id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['deploy-keys'][':key_id']['$put']
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
  const mutationDefaults = getPutRepositoriesWorkspaceRepoSlugDeployKeysKeyIdMutationOptions<
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

export function getDeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIdMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/deploy-keys/:key_id',
    'DELETE',
  ] as const
}

export function getDeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['deploy-keys'][':key_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['deploy-keys'][':key_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['deploy-keys'][':key_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['deploy-keys'][':key_id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyId<
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
                      (typeof client.repositories)[':workspace'][':repo_slug']['deploy-keys'][':key_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['deploy-keys'][':key_id']['$delete']
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
  const mutationDefaults = getDeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIdMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugDeploymentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['deployments']['$get']
    >
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/deployments', toValue(args)] as const
}

export function getRepositoriesWorkspaceRepoSlugDeploymentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['deployments']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositoriesWorkspaceRepoSlugDeploymentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].deployments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugDeployments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['deployments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['deployments']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['deployments']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['deployments']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugDeploymentsQueryKey>
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
              (typeof client.repositories)[':workspace'][':repo_slug']['deployments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugDeploymentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositoriesWorkspaceRepoSlugDeploymentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].deployments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositoriesWorkspaceRepoSlugDeploymentsDeploymentUuidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['deployments'][':deployment_uuid']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/deployments/:deployment_uuid',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugDeploymentsDeploymentUuidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['deployments'][':deployment_uuid']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRepositoriesWorkspaceRepoSlugDeploymentsDeploymentUuidQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].deployments[':deployment_uuid'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugDeploymentsDeploymentUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['deployments'][':deployment_uuid']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['deployments'][':deployment_uuid']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['deployments'][':deployment_uuid']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['deployments'][':deployment_uuid']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugDeploymentsDeploymentUuidQueryKey>
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
              (typeof client.repositories)[':workspace'][':repo_slug']['deployments'][':deployment_uuid']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugDeploymentsDeploymentUuidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRepositoriesWorkspaceRepoSlugDeploymentsDeploymentUuidQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].deployments[':deployment_uuid'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['deployments_config']['environments'][':environment_uuid']['variables']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/deployments_config/environments/:environment_uuid/variables',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['deployments_config']['environments'][':environment_uuid']['variables']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].deployments_config.environments[
          ':environment_uuid'
        ].variables.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariables<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['deployments_config']['environments'][':environment_uuid']['variables']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['deployments_config']['environments'][':environment_uuid']['variables']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['deployments_config']['environments'][':environment_uuid']['variables']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['deployments_config']['environments'][':environment_uuid']['variables']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesQueryKey
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
              (typeof client.repositories)[':workspace'][':repo_slug']['deployments_config']['environments'][':environment_uuid']['variables']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].deployments_config.environments[
            ':environment_uuid'
          ].variables.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/deployments_config/environments/:environment_uuid/variables',
    'POST',
  ] as const
}

export function getPostRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['deployments_config']['environments'][':environment_uuid']['variables']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['deployments_config']['environments'][':environment_uuid']['variables']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['deployments_config']['environments'][':environment_uuid']['variables']['$post']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].deployments_config.environments[
          ':environment_uuid'
        ].variables.$post(args, options),
      )
    },
  })
}

export function usePostRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariables<
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['deployments_config']['environments'][':environment_uuid']['variables']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['deployments_config']['environments'][':environment_uuid']['variables']['$post']
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
  const mutationDefaults =
    getPostRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesMutationOptions<
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

export function getPutRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesVariableUuidMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/deployments_config/environments/:environment_uuid/variables/:variable_uuid',
    'PUT',
  ] as const
}

export function getPutRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesVariableUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['deployments_config']['environments'][':environment_uuid']['variables'][':variable_uuid']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['deployments_config']['environments'][':environment_uuid']['variables'][':variable_uuid']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesVariableUuidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['deployments_config']['environments'][':environment_uuid']['variables'][':variable_uuid']['$put']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].deployments_config.environments[
          ':environment_uuid'
        ].variables[':variable_uuid'].$put(args, options),
      )
    },
  })
}

export function usePutRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesVariableUuid<
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['deployments_config']['environments'][':environment_uuid']['variables'][':variable_uuid']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['deployments_config']['environments'][':environment_uuid']['variables'][':variable_uuid']['$put']
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
  const mutationDefaults =
    getPutRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesVariableUuidMutationOptions<
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

export function getDeleteRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesVariableUuidMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/deployments_config/environments/:environment_uuid/variables/:variable_uuid',
    'DELETE',
  ] as const
}

export function getDeleteRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesVariableUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['deployments_config']['environments'][':environment_uuid']['variables'][':variable_uuid']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['deployments_config']['environments'][':environment_uuid']['variables'][':variable_uuid']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesVariableUuidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['deployments_config']['environments'][':environment_uuid']['variables'][':variable_uuid']['$delete']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].deployments_config.environments[
          ':environment_uuid'
        ].variables[':variable_uuid'].$delete(args, options),
      )
    },
  })
}

export function useDeleteRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesVariableUuid<
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
                      (typeof client.repositories)[':workspace'][':repo_slug']['deployments_config']['environments'][':environment_uuid']['variables'][':variable_uuid']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['deployments_config']['environments'][':environment_uuid']['variables'][':variable_uuid']['$delete']
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
  const mutationDefaults =
    getDeleteRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesVariableUuidMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugDiffSpecQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['diff'][':spec']['$get']
    >
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/diff/:spec', toValue(args)] as const
}

export function getRepositoriesWorkspaceRepoSlugDiffSpecQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['diff'][':spec']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositoriesWorkspaceRepoSlugDiffSpecQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].diff[':spec'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugDiffSpec<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['diff'][':spec']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['diff'][':spec']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['diff'][':spec']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['diff'][':spec']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugDiffSpecQueryKey>
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
              (typeof client.repositories)[':workspace'][':repo_slug']['diff'][':spec']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugDiffSpecQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositoriesWorkspaceRepoSlugDiffSpecQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].diff[':spec'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositoriesWorkspaceRepoSlugDiffstatSpecQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['diffstat'][':spec']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/diffstat/:spec',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugDiffstatSpecQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['diffstat'][':spec']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositoriesWorkspaceRepoSlugDiffstatSpecQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].diffstat[':spec'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugDiffstatSpec<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['diffstat'][':spec']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['diffstat'][':spec']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['diffstat'][':spec']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['diffstat'][':spec']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugDiffstatSpecQueryKey>
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
              (typeof client.repositories)[':workspace'][':repo_slug']['diffstat'][':spec']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugDiffstatSpecQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositoriesWorkspaceRepoSlugDiffstatSpecQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].diffstat[':spec'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositoriesWorkspaceRepoSlugDownloadsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['downloads']['$get']>
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/downloads', toValue(args)] as const
}

export function getRepositoriesWorkspaceRepoSlugDownloadsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['downloads']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositoriesWorkspaceRepoSlugDownloadsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].downloads.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugDownloads<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.repositories)[':workspace'][':repo_slug']['downloads']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['downloads']['$get']>
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['downloads']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['downloads']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugDownloadsQueryKey>
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
              (typeof client.repositories)[':workspace'][':repo_slug']['downloads']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugDownloadsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositoriesWorkspaceRepoSlugDownloadsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].downloads.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRepositoriesWorkspaceRepoSlugDownloadsMutationKey() {
  return ['repositories', '/repositories/:workspace/:repo_slug/downloads', 'POST'] as const
}

export function getPostRepositoriesWorkspaceRepoSlugDownloadsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['downloads']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['downloads']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRepositoriesWorkspaceRepoSlugDownloadsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['downloads']['$post']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].downloads.$post(args, options),
      )
    },
  })
}

export function usePostRepositoriesWorkspaceRepoSlugDownloads<
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['downloads']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['downloads']['$post']
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
  const mutationDefaults = getPostRepositoriesWorkspaceRepoSlugDownloadsMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugDownloadsFilenameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['downloads'][':filename']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/downloads/:filename',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugDownloadsFilenameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['downloads'][':filename']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositoriesWorkspaceRepoSlugDownloadsFilenameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].downloads[':filename'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugDownloadsFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['downloads'][':filename']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['downloads'][':filename']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['downloads'][':filename']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['downloads'][':filename']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugDownloadsFilenameQueryKey>
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
              (typeof client.repositories)[':workspace'][':repo_slug']['downloads'][':filename']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugDownloadsFilenameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositoriesWorkspaceRepoSlugDownloadsFilenameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].downloads[':filename'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/downloads/:filename',
    'DELETE',
  ] as const
}

export function getDeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['downloads'][':filename']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['downloads'][':filename']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['downloads'][':filename']['$delete']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].downloads[':filename'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteRepositoriesWorkspaceRepoSlugDownloadsFilename<
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
                      (typeof client.repositories)[':workspace'][':repo_slug']['downloads'][':filename']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['downloads'][':filename']['$delete']
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
  const mutationDefaults = getDeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugEffectiveBranchingModelQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['effective-branching-model']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/effective-branching-model',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugEffectiveBranchingModelQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['effective-branching-model']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositoriesWorkspaceRepoSlugEffectiveBranchingModelQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['effective-branching-model'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugEffectiveBranchingModel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['effective-branching-model']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['effective-branching-model']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['effective-branching-model']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['effective-branching-model']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugEffectiveBranchingModelQueryKey>
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
              (typeof client.repositories)[':workspace'][':repo_slug']['effective-branching-model']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugEffectiveBranchingModelQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRepositoriesWorkspaceRepoSlugEffectiveBranchingModelQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug']['effective-branching-model'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getRepositoriesWorkspaceRepoSlugEffectiveDefaultReviewersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['effective-default-reviewers']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/effective-default-reviewers',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugEffectiveDefaultReviewersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['effective-default-reviewers']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRepositoriesWorkspaceRepoSlugEffectiveDefaultReviewersQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['effective-default-reviewers'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugEffectiveDefaultReviewers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['effective-default-reviewers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['effective-default-reviewers']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['effective-default-reviewers']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['effective-default-reviewers']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugEffectiveDefaultReviewersQueryKey>
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
              (typeof client.repositories)[':workspace'][':repo_slug']['effective-default-reviewers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugEffectiveDefaultReviewersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRepositoriesWorkspaceRepoSlugEffectiveDefaultReviewersQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug']['effective-default-reviewers'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getRepositoriesWorkspaceRepoSlugEnvironmentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['environments']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/environments',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugEnvironmentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['environments']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositoriesWorkspaceRepoSlugEnvironmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].environments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugEnvironments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['environments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['environments']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['environments']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['environments']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugEnvironmentsQueryKey>
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
              (typeof client.repositories)[':workspace'][':repo_slug']['environments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugEnvironmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositoriesWorkspaceRepoSlugEnvironmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].environments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRepositoriesWorkspaceRepoSlugEnvironmentsMutationKey() {
  return ['repositories', '/repositories/:workspace/:repo_slug/environments', 'POST'] as const
}

export function getPostRepositoriesWorkspaceRepoSlugEnvironmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['environments']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['environments']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRepositoriesWorkspaceRepoSlugEnvironmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['environments']['$post']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].environments.$post(args, options),
      )
    },
  })
}

export function usePostRepositoriesWorkspaceRepoSlugEnvironments<
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['environments']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['environments']['$post']
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
  const mutationDefaults = getPostRepositoriesWorkspaceRepoSlugEnvironmentsMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugEnvironmentsEnvironmentUuidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['environments'][':environment_uuid']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/environments/:environment_uuid',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugEnvironmentsEnvironmentUuidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['environments'][':environment_uuid']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRepositoriesWorkspaceRepoSlugEnvironmentsEnvironmentUuidQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].environments[':environment_uuid'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugEnvironmentsEnvironmentUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['environments'][':environment_uuid']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['environments'][':environment_uuid']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['environments'][':environment_uuid']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['environments'][':environment_uuid']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugEnvironmentsEnvironmentUuidQueryKey>
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
              (typeof client.repositories)[':workspace'][':repo_slug']['environments'][':environment_uuid']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugEnvironmentsEnvironmentUuidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRepositoriesWorkspaceRepoSlugEnvironmentsEnvironmentUuidQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].environments[':environment_uuid'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteRepositoriesWorkspaceRepoSlugEnvironmentsEnvironmentUuidMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/environments/:environment_uuid',
    'DELETE',
  ] as const
}

export function getDeleteRepositoriesWorkspaceRepoSlugEnvironmentsEnvironmentUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['environments'][':environment_uuid']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['environments'][':environment_uuid']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteRepositoriesWorkspaceRepoSlugEnvironmentsEnvironmentUuidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['environments'][':environment_uuid']['$delete']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].environments[':environment_uuid'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteRepositoriesWorkspaceRepoSlugEnvironmentsEnvironmentUuid<
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
                      (typeof client.repositories)[':workspace'][':repo_slug']['environments'][':environment_uuid']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['environments'][':environment_uuid']['$delete']
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
  const mutationDefaults =
    getDeleteRepositoriesWorkspaceRepoSlugEnvironmentsEnvironmentUuidMutationOptions<
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

export function getPostRepositoriesWorkspaceRepoSlugEnvironmentsEnvironmentUuidChangesMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/environments/:environment_uuid/changes',
    'POST',
  ] as const
}

export function getPostRepositoriesWorkspaceRepoSlugEnvironmentsEnvironmentUuidChangesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['environments'][':environment_uuid']['changes']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['environments'][':environment_uuid']['changes']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostRepositoriesWorkspaceRepoSlugEnvironmentsEnvironmentUuidChangesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['environments'][':environment_uuid']['changes']['$post']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].environments[
          ':environment_uuid'
        ].changes.$post(args, options),
      )
    },
  })
}

export function usePostRepositoriesWorkspaceRepoSlugEnvironmentsEnvironmentUuidChanges<
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['environments'][':environment_uuid']['changes']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['environments'][':environment_uuid']['changes']['$post']
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
  const mutationDefaults =
    getPostRepositoriesWorkspaceRepoSlugEnvironmentsEnvironmentUuidChangesMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugFileConflictsSpecQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['file-conflicts'][':spec']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/file-conflicts/:spec',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugFileConflictsSpecQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['file-conflicts'][':spec']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositoriesWorkspaceRepoSlugFileConflictsSpecQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['file-conflicts'][':spec'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugFileConflictsSpec<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['file-conflicts'][':spec']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['file-conflicts'][':spec']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['file-conflicts'][':spec']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['file-conflicts'][':spec']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugFileConflictsSpecQueryKey>
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
              (typeof client.repositories)[':workspace'][':repo_slug']['file-conflicts'][':spec']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugFileConflictsSpecQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositoriesWorkspaceRepoSlugFileConflictsSpecQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug']['file-conflicts'][':spec'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getRepositoriesWorkspaceRepoSlugFilehistoryCommitPathQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['filehistory'][':commit'][':path']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/filehistory/:commit/:path',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugFilehistoryCommitPathQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['filehistory'][':commit'][':path']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositoriesWorkspaceRepoSlugFilehistoryCommitPathQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].filehistory[':commit'][':path'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugFilehistoryCommitPath<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['filehistory'][':commit'][':path']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['filehistory'][':commit'][':path']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['filehistory'][':commit'][':path']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['filehistory'][':commit'][':path']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugFilehistoryCommitPathQueryKey>
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
              (typeof client.repositories)[':workspace'][':repo_slug']['filehistory'][':commit'][':path']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugFilehistoryCommitPathQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositoriesWorkspaceRepoSlugFilehistoryCommitPathQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].filehistory[':commit'][':path'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getRepositoriesWorkspaceRepoSlugForksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['forks']['$get']>
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/forks', toValue(args)] as const
}

export function getRepositoriesWorkspaceRepoSlugForksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['forks']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositoriesWorkspaceRepoSlugForksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].forks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugForks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.repositories)[':workspace'][':repo_slug']['forks']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['forks']['$get']>
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['forks']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['forks']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugForksQueryKey>
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
            ReturnType<(typeof client.repositories)[':workspace'][':repo_slug']['forks']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugForksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositoriesWorkspaceRepoSlugForksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].forks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRepositoriesWorkspaceRepoSlugForksMutationKey() {
  return ['repositories', '/repositories/:workspace/:repo_slug/forks', 'POST'] as const
}

export function getPostRepositoriesWorkspaceRepoSlugForksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.repositories)[':workspace'][':repo_slug']['forks']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['forks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRepositoriesWorkspaceRepoSlugForksMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['forks']['$post']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].forks.$post(args, options),
      )
    },
  })
}

export function usePostRepositoriesWorkspaceRepoSlugForks<
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['forks']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['forks']['$post']
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
  const mutationDefaults = getPostRepositoriesWorkspaceRepoSlugForksMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugHooksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['hooks']['$get']>
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/hooks', toValue(args)] as const
}

export function getRepositoriesWorkspaceRepoSlugHooksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['hooks']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositoriesWorkspaceRepoSlugHooksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].hooks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugHooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.repositories)[':workspace'][':repo_slug']['hooks']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['hooks']['$get']>
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['hooks']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['hooks']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugHooksQueryKey>
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
            ReturnType<(typeof client.repositories)[':workspace'][':repo_slug']['hooks']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugHooksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositoriesWorkspaceRepoSlugHooksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].hooks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRepositoriesWorkspaceRepoSlugHooksMutationKey() {
  return ['repositories', '/repositories/:workspace/:repo_slug/hooks', 'POST'] as const
}

export function getPostRepositoriesWorkspaceRepoSlugHooksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.repositories)[':workspace'][':repo_slug']['hooks']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['hooks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRepositoriesWorkspaceRepoSlugHooksMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['hooks']['$post']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].hooks.$post(args, options),
      )
    },
  })
}

export function usePostRepositoriesWorkspaceRepoSlugHooks<
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['hooks']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['hooks']['$post']
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
  const mutationDefaults = getPostRepositoriesWorkspaceRepoSlugHooksMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugHooksUidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['hooks'][':uid']['$get']
    >
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/hooks/:uid', toValue(args)] as const
}

export function getRepositoriesWorkspaceRepoSlugHooksUidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['hooks'][':uid']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositoriesWorkspaceRepoSlugHooksUidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].hooks[':uid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugHooksUid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['hooks'][':uid']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['hooks'][':uid']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['hooks'][':uid']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['hooks'][':uid']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugHooksUidQueryKey>
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
              (typeof client.repositories)[':workspace'][':repo_slug']['hooks'][':uid']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugHooksUidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositoriesWorkspaceRepoSlugHooksUidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].hooks[':uid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutRepositoriesWorkspaceRepoSlugHooksUidMutationKey() {
  return ['repositories', '/repositories/:workspace/:repo_slug/hooks/:uid', 'PUT'] as const
}

export function getPutRepositoriesWorkspaceRepoSlugHooksUidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['hooks'][':uid']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['hooks'][':uid']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutRepositoriesWorkspaceRepoSlugHooksUidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['hooks'][':uid']['$put']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].hooks[':uid'].$put(args, options),
      )
    },
  })
}

export function usePutRepositoriesWorkspaceRepoSlugHooksUid<
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['hooks'][':uid']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['hooks'][':uid']['$put']
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
  const mutationDefaults = getPutRepositoriesWorkspaceRepoSlugHooksUidMutationOptions<
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

export function getDeleteRepositoriesWorkspaceRepoSlugHooksUidMutationKey() {
  return ['repositories', '/repositories/:workspace/:repo_slug/hooks/:uid', 'DELETE'] as const
}

export function getDeleteRepositoriesWorkspaceRepoSlugHooksUidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['hooks'][':uid']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['hooks'][':uid']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteRepositoriesWorkspaceRepoSlugHooksUidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['hooks'][':uid']['$delete']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].hooks[':uid'].$delete(args, options),
      )
    },
  })
}

export function useDeleteRepositoriesWorkspaceRepoSlugHooksUid<
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
                      (typeof client.repositories)[':workspace'][':repo_slug']['hooks'][':uid']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['hooks'][':uid']['$delete']
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
  const mutationDefaults = getDeleteRepositoriesWorkspaceRepoSlugHooksUidMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugMergeBaseRevspecQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['merge-base'][':revspec']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/merge-base/:revspec',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugMergeBaseRevspecQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['merge-base'][':revspec']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositoriesWorkspaceRepoSlugMergeBaseRevspecQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['merge-base'][':revspec'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugMergeBaseRevspec<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['merge-base'][':revspec']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['merge-base'][':revspec']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['merge-base'][':revspec']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['merge-base'][':revspec']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugMergeBaseRevspecQueryKey>
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
              (typeof client.repositories)[':workspace'][':repo_slug']['merge-base'][':revspec']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugMergeBaseRevspecQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositoriesWorkspaceRepoSlugMergeBaseRevspecQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug']['merge-base'][':revspec'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getRepositoriesWorkspaceRepoSlugMergeQueuesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['merge-queues']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/merge-queues',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugMergeQueuesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['merge-queues']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositoriesWorkspaceRepoSlugMergeQueuesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['merge-queues'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugMergeQueues<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['merge-queues']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['merge-queues']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['merge-queues']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['merge-queues']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugMergeQueuesQueryKey>
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
              (typeof client.repositories)[':workspace'][':repo_slug']['merge-queues']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugMergeQueuesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositoriesWorkspaceRepoSlugMergeQueuesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug']['merge-queues'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['merge-queues'][':merge_queue_uuid']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/merge-queues/:merge_queue_uuid',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['merge-queues'][':merge_queue_uuid']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['merge-queues'][':merge_queue_uuid'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['merge-queues'][':merge_queue_uuid']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['merge-queues'][':merge_queue_uuid']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['merge-queues'][':merge_queue_uuid']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['merge-queues'][':merge_queue_uuid']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidQueryKey>
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
              (typeof client.repositories)[':workspace'][':repo_slug']['merge-queues'][':merge_queue_uuid']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug']['merge-queues'][':merge_queue_uuid'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidQueueQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['merge-queues'][':merge_queue_uuid']['queue']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/merge-queues/:merge_queue_uuid/queue',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidQueueQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['merge-queues'][':merge_queue_uuid']['queue']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidQueueQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['merge-queues'][
          ':merge_queue_uuid'
        ].queue.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidQueue<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['merge-queues'][':merge_queue_uuid']['queue']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['merge-queues'][':merge_queue_uuid']['queue']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['merge-queues'][':merge_queue_uuid']['queue']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['merge-queues'][':merge_queue_uuid']['queue']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidQueueQueryKey>
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
              (typeof client.repositories)[':workspace'][':repo_slug']['merge-queues'][':merge_queue_uuid']['queue']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidQueueQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidQueueQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug']['merge-queues'][
            ':merge_queue_uuid'
          ].queue.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidQueuePullrequestIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['merge-queues'][':merge_queue_uuid']['queue'][':pullrequest_id']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/merge-queues/:merge_queue_uuid/queue/:pullrequest_id',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidQueuePullrequestIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['merge-queues'][':merge_queue_uuid']['queue'][':pullrequest_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidQueuePullrequestIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['merge-queues'][':merge_queue_uuid'].queue[
          ':pullrequest_id'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidQueuePullrequestId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['merge-queues'][':merge_queue_uuid']['queue'][':pullrequest_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['merge-queues'][':merge_queue_uuid']['queue'][':pullrequest_id']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['merge-queues'][':merge_queue_uuid']['queue'][':pullrequest_id']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['merge-queues'][':merge_queue_uuid']['queue'][':pullrequest_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidQueuePullrequestIdQueryKey
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
              (typeof client.repositories)[':workspace'][':repo_slug']['merge-queues'][':merge_queue_uuid']['queue'][':pullrequest_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidQueuePullrequestIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidQueuePullrequestIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug']['merge-queues'][
            ':merge_queue_uuid'
          ].queue[':pullrequest_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidQueuePullrequestIdMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/merge-queues/:merge_queue_uuid/queue/:pullrequest_id',
    'DELETE',
  ] as const
}

export function getDeleteRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidQueuePullrequestIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['merge-queues'][':merge_queue_uuid']['queue'][':pullrequest_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['merge-queues'][':merge_queue_uuid']['queue'][':pullrequest_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidQueuePullrequestIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['merge-queues'][':merge_queue_uuid']['queue'][':pullrequest_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['merge-queues'][':merge_queue_uuid'].queue[
          ':pullrequest_id'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidQueuePullrequestId<
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['merge-queues'][':merge_queue_uuid']['queue'][':pullrequest_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['merge-queues'][':merge_queue_uuid']['queue'][':pullrequest_id']['$delete']
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
  const mutationDefaults =
    getDeleteRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidQueuePullrequestIdMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugOverrideSettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['override-settings']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/override-settings',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugOverrideSettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['override-settings']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositoriesWorkspaceRepoSlugOverrideSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['override-settings'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugOverrideSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['override-settings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['override-settings']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['override-settings']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['override-settings']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugOverrideSettingsQueryKey>
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
              (typeof client.repositories)[':workspace'][':repo_slug']['override-settings']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugOverrideSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositoriesWorkspaceRepoSlugOverrideSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug']['override-settings'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutRepositoriesWorkspaceRepoSlugOverrideSettingsMutationKey() {
  return ['repositories', '/repositories/:workspace/:repo_slug/override-settings', 'PUT'] as const
}

export function getPutRepositoriesWorkspaceRepoSlugOverrideSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['override-settings']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['override-settings']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutRepositoriesWorkspaceRepoSlugOverrideSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['override-settings']['$put']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['override-settings'].$put(args, options),
      )
    },
  })
}

export function usePutRepositoriesWorkspaceRepoSlugOverrideSettings<
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
                      (typeof client.repositories)[':workspace'][':repo_slug']['override-settings']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['override-settings']['$put']
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
  const mutationDefaults = getPutRepositoriesWorkspaceRepoSlugOverrideSettingsMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugPatchSpecQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['patch'][':spec']['$get']
    >
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/patch/:spec', toValue(args)] as const
}

export function getRepositoriesWorkspaceRepoSlugPatchSpecQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['patch'][':spec']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositoriesWorkspaceRepoSlugPatchSpecQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].patch[':spec'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugPatchSpec<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['patch'][':spec']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['patch'][':spec']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['patch'][':spec']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['patch'][':spec']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugPatchSpecQueryKey>
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
              (typeof client.repositories)[':workspace'][':repo_slug']['patch'][':spec']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugPatchSpecQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositoriesWorkspaceRepoSlugPatchSpecQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].patch[':spec'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['groups']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/permissions-config/groups',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['groups']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['permissions-config'].groups.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugPermissionsConfigGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['groups']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['groups']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['groups']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['groups']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsQueryKey>
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
              (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['groups']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug']['permissions-config'].groups.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlugQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['groups'][':group_slug']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/permissions-config/groups/:group_slug',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlugQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['groups'][':group_slug']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlugQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['permissions-config'].groups[
          ':group_slug'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['groups'][':group_slug']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['groups'][':group_slug']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['groups'][':group_slug']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['groups'][':group_slug']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlugQueryKey
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
              (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['groups'][':group_slug']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlugQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlugQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug']['permissions-config'].groups[
            ':group_slug'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPutRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlugMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/permissions-config/groups/:group_slug',
    'PUT',
  ] as const
}

export function getPutRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlugMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['groups'][':group_slug']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['groups'][':group_slug']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlugMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['groups'][':group_slug']['$put']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['permissions-config'].groups[
          ':group_slug'
        ].$put(args, options),
      )
    },
  })
}

export function usePutRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlug<
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['groups'][':group_slug']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['groups'][':group_slug']['$put']
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
  const mutationDefaults =
    getPutRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlugMutationOptions<
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

export function getDeleteRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlugMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/permissions-config/groups/:group_slug',
    'DELETE',
  ] as const
}

export function getDeleteRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlugMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['groups'][':group_slug']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['groups'][':group_slug']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlugMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['groups'][':group_slug']['$delete']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['permissions-config'].groups[
          ':group_slug'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlug<
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
                      (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['groups'][':group_slug']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['groups'][':group_slug']['$delete']
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
  const mutationDefaults =
    getDeleteRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlugMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugPermissionsConfigUsersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['users']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/permissions-config/users',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPermissionsConfigUsersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['users']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositoriesWorkspaceRepoSlugPermissionsConfigUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['permissions-config'].users.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugPermissionsConfigUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['users']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['users']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['users']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['users']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugPermissionsConfigUsersQueryKey>
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
              (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['users']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugPermissionsConfigUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRepositoriesWorkspaceRepoSlugPermissionsConfigUsersQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug']['permissions-config'].users.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['users'][':selected_user_id']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/permissions-config/users/:selected_user_id',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['users'][':selected_user_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['permissions-config'].users[
          ':selected_user_id'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['users'][':selected_user_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['users'][':selected_user_id']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['users'][':selected_user_id']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['users'][':selected_user_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserIdQueryKey
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
              (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['users'][':selected_user_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug']['permissions-config'].users[
            ':selected_user_id'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPutRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserIdMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/permissions-config/users/:selected_user_id',
    'PUT',
  ] as const
}

export function getPutRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['users'][':selected_user_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['users'][':selected_user_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['users'][':selected_user_id']['$put']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['permissions-config'].users[
          ':selected_user_id'
        ].$put(args, options),
      )
    },
  })
}

export function usePutRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserId<
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['users'][':selected_user_id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['users'][':selected_user_id']['$put']
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
  const mutationDefaults =
    getPutRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserIdMutationOptions<
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

export function getDeleteRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserIdMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/permissions-config/users/:selected_user_id',
    'DELETE',
  ] as const
}

export function getDeleteRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['users'][':selected_user_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['users'][':selected_user_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['users'][':selected_user_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['permissions-config'].users[
          ':selected_user_id'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserId<
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
                      (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['users'][':selected_user_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['users'][':selected_user_id']['$delete']
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
  const mutationDefaults =
    getDeleteRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserIdMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugPipelinesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['pipelines']['$get']>
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/pipelines', toValue(args)] as const
}

export function getRepositoriesWorkspaceRepoSlugPipelinesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['pipelines']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositoriesWorkspaceRepoSlugPipelinesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pipelines.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugPipelines<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.repositories)[':workspace'][':repo_slug']['pipelines']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['pipelines']['$get']>
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugPipelinesQueryKey>
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
              (typeof client.repositories)[':workspace'][':repo_slug']['pipelines']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugPipelinesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositoriesWorkspaceRepoSlugPipelinesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].pipelines.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRepositoriesWorkspaceRepoSlugPipelinesMutationKey() {
  return ['repositories', '/repositories/:workspace/:repo_slug/pipelines', 'POST'] as const
}

export function getPostRepositoriesWorkspaceRepoSlugPipelinesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['pipelines']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRepositoriesWorkspaceRepoSlugPipelinesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['pipelines']['$post']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pipelines.$post(args, options),
      )
    },
  })
}

export function usePostRepositoriesWorkspaceRepoSlugPipelines<
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pipelines']['$post']
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
  const mutationDefaults = getPostRepositoriesWorkspaceRepoSlugPipelinesMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugPipelinesConfigCachesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['caches']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines-config/caches',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPipelinesConfigCachesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['caches']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositoriesWorkspaceRepoSlugPipelinesConfigCachesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['pipelines-config'].caches.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugPipelinesConfigCaches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['caches']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['caches']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['caches']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['caches']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugPipelinesConfigCachesQueryKey>
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
              (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['caches']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugPipelinesConfigCachesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositoriesWorkspaceRepoSlugPipelinesConfigCachesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug']['pipelines-config'].caches.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigCachesMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines-config/caches',
    'DELETE',
  ] as const
}

export function getDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigCachesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['caches']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['caches']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigCachesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['caches']['$delete']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['pipelines-config'].caches.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigCaches<
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
                      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['caches']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['caches']['$delete']
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
  const mutationDefaults =
    getDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigCachesMutationOptions<
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

export function getDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigCachesCacheUuidMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines-config/caches/:cache_uuid',
    'DELETE',
  ] as const
}

export function getDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigCachesCacheUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['caches'][':cache_uuid']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['caches'][':cache_uuid']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigCachesCacheUuidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['caches'][':cache_uuid']['$delete']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['pipelines-config'].caches[
          ':cache_uuid'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigCachesCacheUuid<
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
                      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['caches'][':cache_uuid']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['caches'][':cache_uuid']['$delete']
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
  const mutationDefaults =
    getDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigCachesCacheUuidMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugPipelinesConfigCachesCacheUuidContentUriQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['caches'][':cache_uuid']['content-uri']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines-config/caches/:cache_uuid/content-uri',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPipelinesConfigCachesCacheUuidContentUriQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['caches'][':cache_uuid']['content-uri']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRepositoriesWorkspaceRepoSlugPipelinesConfigCachesCacheUuidContentUriQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['pipelines-config'].caches[':cache_uuid'][
          'content-uri'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugPipelinesConfigCachesCacheUuidContentUri<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['caches'][':cache_uuid']['content-uri']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['caches'][':cache_uuid']['content-uri']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['caches'][':cache_uuid']['content-uri']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['caches'][':cache_uuid']['content-uri']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getRepositoriesWorkspaceRepoSlugPipelinesConfigCachesCacheUuidContentUriQueryKey
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
              (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['caches'][':cache_uuid']['content-uri']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getRepositoriesWorkspaceRepoSlugPipelinesConfigCachesCacheUuidContentUriQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRepositoriesWorkspaceRepoSlugPipelinesConfigCachesCacheUuidContentUriQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug']['pipelines-config'].caches[':cache_uuid'][
            'content-uri'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['runners']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines-config/runners',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['runners']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['pipelines-config'].runners.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugPipelinesConfigRunners<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['runners']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['runners']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['runners']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['runners']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersQueryKey>
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
              (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['runners']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug']['pipelines-config'].runners.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines-config/runners',
    'POST',
  ] as const
}

export function getPostRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['runners']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['runners']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['runners']['$post']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['pipelines-config'].runners.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostRepositoriesWorkspaceRepoSlugPipelinesConfigRunners<
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['runners']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['runners']['$post']
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
  const mutationDefaults =
    getPostRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersRunnerUuidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['runners'][':runner_uuid']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines-config/runners/:runner_uuid',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersRunnerUuidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['runners'][':runner_uuid']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersRunnerUuidQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['pipelines-config'].runners[
          ':runner_uuid'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersRunnerUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['runners'][':runner_uuid']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['runners'][':runner_uuid']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['runners'][':runner_uuid']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['runners'][':runner_uuid']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersRunnerUuidQueryKey
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
              (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['runners'][':runner_uuid']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersRunnerUuidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersRunnerUuidQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug']['pipelines-config'].runners[
            ':runner_uuid'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPutRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersRunnerUuidMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines-config/runners/:runner_uuid',
    'PUT',
  ] as const
}

export function getPutRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersRunnerUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['runners'][':runner_uuid']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['runners'][':runner_uuid']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersRunnerUuidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['runners'][':runner_uuid']['$put']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['pipelines-config'].runners[
          ':runner_uuid'
        ].$put(args, options),
      )
    },
  })
}

export function usePutRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersRunnerUuid<
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['runners'][':runner_uuid']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['runners'][':runner_uuid']['$put']
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
  const mutationDefaults =
    getPutRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersRunnerUuidMutationOptions<
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

export function getDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersRunnerUuidMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines-config/runners/:runner_uuid',
    'DELETE',
  ] as const
}

export function getDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersRunnerUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['runners'][':runner_uuid']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['runners'][':runner_uuid']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersRunnerUuidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['runners'][':runner_uuid']['$delete']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['pipelines-config'].runners[
          ':runner_uuid'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersRunnerUuid<
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
                      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['runners'][':runner_uuid']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['runners'][':runner_uuid']['$delete']
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
  const mutationDefaults =
    getDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersRunnerUuidMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines/:pipeline_uuid',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pipelines[':pipeline_uuid'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugPipelinesPipelineUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidQueryKey>
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
              (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].pipelines[':pipeline_uuid'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines/:pipeline_uuid/steps',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pipelines[':pipeline_uuid'].steps.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidSteps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsQueryKey>
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
              (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].pipelines[':pipeline_uuid'].steps.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines/:pipeline_uuid/steps/:step_uuid',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pipelines[':pipeline_uuid'].steps[
          ':step_uuid'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidQueryKey
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
              (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].pipelines[':pipeline_uuid'].steps[
            ':step_uuid'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['log']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines/:pipeline_uuid/steps/:step_uuid/log',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['log']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pipelines[':pipeline_uuid'].steps[
          ':step_uuid'
        ].log.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLog<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['log']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['log']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['log']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['log']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogQueryKey
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
              (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['log']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].pipelines[':pipeline_uuid'].steps[
            ':step_uuid'
          ].log.$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogsLogUuidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['logs'][':log_uuid']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines/:pipeline_uuid/steps/:step_uuid/logs/:log_uuid',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogsLogUuidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['logs'][':log_uuid']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogsLogUuidQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pipelines[':pipeline_uuid'].steps[
          ':step_uuid'
        ].logs[':log_uuid'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogsLogUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['logs'][':log_uuid']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['logs'][':log_uuid']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['logs'][':log_uuid']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['logs'][':log_uuid']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogsLogUuidQueryKey
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
              (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['logs'][':log_uuid']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogsLogUuidQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogsLogUuidQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].pipelines[':pipeline_uuid'].steps[
            ':step_uuid'
          ].logs[':log_uuid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['test_reports']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines/:pipeline_uuid/steps/:step_uuid/test_reports',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['test_reports']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pipelines[':pipeline_uuid'].steps[
          ':step_uuid'
        ].test_reports.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['test_reports']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['test_reports']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['test_reports']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['test_reports']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsQueryKey
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
              (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['test_reports']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].pipelines[':pipeline_uuid'].steps[
            ':step_uuid'
          ].test_reports.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['test_reports']['test_cases']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines/:pipeline_uuid/steps/:step_uuid/test_reports/test_cases',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['test_reports']['test_cases']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pipelines[':pipeline_uuid'].steps[
          ':step_uuid'
        ].test_reports.test_cases.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['test_reports']['test_cases']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['test_reports']['test_cases']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['test_reports']['test_cases']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['test_reports']['test_cases']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesQueryKey
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
              (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['test_reports']['test_cases']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].pipelines[':pipeline_uuid'].steps[
            ':step_uuid'
          ].test_reports.test_cases.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesTestCaseUuidTestCaseReasonsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['test_reports']['test_cases'][':test_case_uuid']['test_case_reasons']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines/:pipeline_uuid/steps/:step_uuid/test_reports/test_cases/:test_case_uuid/test_case_reasons',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesTestCaseUuidTestCaseReasonsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['test_reports']['test_cases'][':test_case_uuid']['test_case_reasons']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesTestCaseUuidTestCaseReasonsQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pipelines[':pipeline_uuid'].steps[
          ':step_uuid'
        ].test_reports.test_cases[':test_case_uuid'].test_case_reasons.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesTestCaseUuidTestCaseReasons<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['test_reports']['test_cases'][':test_case_uuid']['test_case_reasons']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['test_reports']['test_cases'][':test_case_uuid']['test_case_reasons']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['test_reports']['test_cases'][':test_case_uuid']['test_case_reasons']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['test_reports']['test_cases'][':test_case_uuid']['test_case_reasons']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesTestCaseUuidTestCaseReasonsQueryKey
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
              (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['test_reports']['test_cases'][':test_case_uuid']['test_case_reasons']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesTestCaseUuidTestCaseReasonsQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesTestCaseUuidTestCaseReasonsQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].pipelines[':pipeline_uuid'].steps[
            ':step_uuid'
          ].test_reports.test_cases[':test_case_uuid'].test_case_reasons.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStopPipelineMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines/:pipeline_uuid/stopPipeline',
    'POST',
  ] as const
}

export function getPostRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStopPipelineMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['stopPipeline']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['stopPipeline']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStopPipelineMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['stopPipeline']['$post']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pipelines[
          ':pipeline_uuid'
        ].stopPipeline.$post(args, options),
      )
    },
  })
}

export function usePostRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStopPipeline<
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
                      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['stopPipeline']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['stopPipeline']['$post']
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
  const mutationDefaults =
    getPostRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStopPipelineMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugPipelinesConfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines_config',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPipelinesConfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositoriesWorkspaceRepoSlugPipelinesConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pipelines_config.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugPipelinesConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugPipelinesConfigQueryKey>
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
              (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugPipelinesConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositoriesWorkspaceRepoSlugPipelinesConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].pipelines_config.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutRepositoriesWorkspaceRepoSlugPipelinesConfigMutationKey() {
  return ['repositories', '/repositories/:workspace/:repo_slug/pipelines_config', 'PUT'] as const
}

export function getPutRepositoriesWorkspaceRepoSlugPipelinesConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutRepositoriesWorkspaceRepoSlugPipelinesConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['$put']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pipelines_config.$put(args, options),
      )
    },
  })
}

export function usePutRepositoriesWorkspaceRepoSlugPipelinesConfig<
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['$put']
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
  const mutationDefaults = getPutRepositoriesWorkspaceRepoSlugPipelinesConfigMutationOptions<
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

export function getPutRepositoriesWorkspaceRepoSlugPipelinesConfigBuildNumberMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines_config/build_number',
    'PUT',
  ] as const
}

export function getPutRepositoriesWorkspaceRepoSlugPipelinesConfigBuildNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['build_number']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['build_number']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutRepositoriesWorkspaceRepoSlugPipelinesConfigBuildNumberMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['build_number']['$put']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pipelines_config.build_number.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutRepositoriesWorkspaceRepoSlugPipelinesConfigBuildNumber<
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['build_number']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['build_number']['$put']
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
  const mutationDefaults =
    getPutRepositoriesWorkspaceRepoSlugPipelinesConfigBuildNumberMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines_config/schedules',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pipelines_config.schedules.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugPipelinesConfigSchedules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesQueryKey>
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
              (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].pipelines_config.schedules.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines_config/schedules',
    'POST',
  ] as const
}

export function getPostRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules']['$post']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pipelines_config.schedules.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostRepositoriesWorkspaceRepoSlugPipelinesConfigSchedules<
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules']['$post']
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
  const mutationDefaults =
    getPostRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules'][':schedule_uuid']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines_config/schedules/:schedule_uuid',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules'][':schedule_uuid']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pipelines_config.schedules[
          ':schedule_uuid'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules'][':schedule_uuid']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules'][':schedule_uuid']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules'][':schedule_uuid']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules'][':schedule_uuid']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidQueryKey
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
              (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules'][':schedule_uuid']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].pipelines_config.schedules[
            ':schedule_uuid'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPutRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines_config/schedules/:schedule_uuid',
    'PUT',
  ] as const
}

export function getPutRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules'][':schedule_uuid']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules'][':schedule_uuid']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules'][':schedule_uuid']['$put']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pipelines_config.schedules[
          ':schedule_uuid'
        ].$put(args, options),
      )
    },
  })
}

export function usePutRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuid<
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules'][':schedule_uuid']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules'][':schedule_uuid']['$put']
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
  const mutationDefaults =
    getPutRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidMutationOptions<
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

export function getDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines_config/schedules/:schedule_uuid',
    'DELETE',
  ] as const
}

export function getDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules'][':schedule_uuid']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules'][':schedule_uuid']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules'][':schedule_uuid']['$delete']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pipelines_config.schedules[
          ':schedule_uuid'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuid<
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
                      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules'][':schedule_uuid']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules'][':schedule_uuid']['$delete']
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
  const mutationDefaults =
    getDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidExecutionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules'][':schedule_uuid']['executions']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines_config/schedules/:schedule_uuid/executions',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidExecutionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules'][':schedule_uuid']['executions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidExecutionsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pipelines_config.schedules[
          ':schedule_uuid'
        ].executions.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidExecutions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules'][':schedule_uuid']['executions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules'][':schedule_uuid']['executions']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules'][':schedule_uuid']['executions']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules'][':schedule_uuid']['executions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidExecutionsQueryKey
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
              (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules'][':schedule_uuid']['executions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidExecutionsQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidExecutionsQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].pipelines_config.schedules[
            ':schedule_uuid'
          ].executions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPairQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['key_pair']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines_config/ssh/key_pair',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPairQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['key_pair']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPairQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pipelines_config.ssh.key_pair.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPair<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['key_pair']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['key_pair']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['key_pair']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['key_pair']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPairQueryKey>
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
              (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['key_pair']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPairQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPairQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].pipelines_config.ssh.key_pair.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPairMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines_config/ssh/key_pair',
    'PUT',
  ] as const
}

export function getPutRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPairMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['key_pair']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['key_pair']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPairMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['key_pair']['$put']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pipelines_config.ssh.key_pair.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPair<
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['key_pair']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['key_pair']['$put']
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
  const mutationDefaults =
    getPutRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPairMutationOptions<
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

export function getDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPairMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines_config/ssh/key_pair',
    'DELETE',
  ] as const
}

export function getDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPairMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['key_pair']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['key_pair']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPairMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['key_pair']['$delete']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pipelines_config.ssh.key_pair.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPair<
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
                      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['key_pair']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['key_pair']['$delete']
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
  const mutationDefaults =
    getDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPairMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['known_hosts']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines_config/ssh/known_hosts',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['known_hosts']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pipelines_config.ssh.known_hosts.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHosts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['known_hosts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['known_hosts']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['known_hosts']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['known_hosts']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsQueryKey>
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
              (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['known_hosts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].pipelines_config.ssh.known_hosts.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines_config/ssh/known_hosts',
    'POST',
  ] as const
}

export function getPostRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['known_hosts']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['known_hosts']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['known_hosts']['$post']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pipelines_config.ssh.known_hosts.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHosts<
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['known_hosts']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['known_hosts']['$post']
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
  const mutationDefaults =
    getPostRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['known_hosts'][':known_host_uuid']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines_config/ssh/known_hosts/:known_host_uuid',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['known_hosts'][':known_host_uuid']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuidQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pipelines_config.ssh.known_hosts[
          ':known_host_uuid'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['known_hosts'][':known_host_uuid']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['known_hosts'][':known_host_uuid']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['known_hosts'][':known_host_uuid']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['known_hosts'][':known_host_uuid']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuidQueryKey
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
              (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['known_hosts'][':known_host_uuid']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuidQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuidQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].pipelines_config.ssh.known_hosts[
            ':known_host_uuid'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPutRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuidMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines_config/ssh/known_hosts/:known_host_uuid',
    'PUT',
  ] as const
}

export function getPutRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['known_hosts'][':known_host_uuid']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['known_hosts'][':known_host_uuid']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['known_hosts'][':known_host_uuid']['$put']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pipelines_config.ssh.known_hosts[
          ':known_host_uuid'
        ].$put(args, options),
      )
    },
  })
}

export function usePutRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuid<
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['known_hosts'][':known_host_uuid']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['known_hosts'][':known_host_uuid']['$put']
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
  const mutationDefaults =
    getPutRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuidMutationOptions<
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

export function getDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuidMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines_config/ssh/known_hosts/:known_host_uuid',
    'DELETE',
  ] as const
}

export function getDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['known_hosts'][':known_host_uuid']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['known_hosts'][':known_host_uuid']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['known_hosts'][':known_host_uuid']['$delete']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pipelines_config.ssh.known_hosts[
          ':known_host_uuid'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuid<
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
                      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['known_hosts'][':known_host_uuid']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['known_hosts'][':known_host_uuid']['$delete']
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
  const mutationDefaults =
    getDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuidMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['variables']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines_config/variables',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['variables']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pipelines_config.variables.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugPipelinesConfigVariables<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['variables']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['variables']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['variables']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['variables']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesQueryKey>
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
              (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['variables']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].pipelines_config.variables.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines_config/variables',
    'POST',
  ] as const
}

export function getPostRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['variables']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['variables']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['variables']['$post']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pipelines_config.variables.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostRepositoriesWorkspaceRepoSlugPipelinesConfigVariables<
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['variables']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['variables']['$post']
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
  const mutationDefaults =
    getPostRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['variables'][':variable_uuid']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines_config/variables/:variable_uuid',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['variables'][':variable_uuid']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuidQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pipelines_config.variables[
          ':variable_uuid'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['variables'][':variable_uuid']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['variables'][':variable_uuid']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['variables'][':variable_uuid']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['variables'][':variable_uuid']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuidQueryKey
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
              (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['variables'][':variable_uuid']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuidQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].pipelines_config.variables[
            ':variable_uuid'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPutRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuidMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines_config/variables/:variable_uuid',
    'PUT',
  ] as const
}

export function getPutRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['variables'][':variable_uuid']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['variables'][':variable_uuid']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['variables'][':variable_uuid']['$put']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pipelines_config.variables[
          ':variable_uuid'
        ].$put(args, options),
      )
    },
  })
}

export function usePutRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuid<
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['variables'][':variable_uuid']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['variables'][':variable_uuid']['$put']
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
  const mutationDefaults =
    getPutRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuidMutationOptions<
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

export function getDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuidMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines_config/variables/:variable_uuid',
    'DELETE',
  ] as const
}

export function getDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['variables'][':variable_uuid']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['variables'][':variable_uuid']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['variables'][':variable_uuid']['$delete']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pipelines_config.variables[
          ':variable_uuid'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuid<
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
                      (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['variables'][':variable_uuid']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['variables'][':variable_uuid']['$delete']
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
  const mutationDefaults =
    getDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuidMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugPropertiesAppKeyPropertyNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['properties'][':app_key'][':property_name']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/properties/:app_key/:property_name',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPropertiesAppKeyPropertyNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['properties'][':app_key'][':property_name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRepositoriesWorkspaceRepoSlugPropertiesAppKeyPropertyNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].properties[':app_key'][
          ':property_name'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugPropertiesAppKeyPropertyName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['properties'][':app_key'][':property_name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['properties'][':app_key'][':property_name']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['properties'][':app_key'][':property_name']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['properties'][':app_key'][':property_name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugPropertiesAppKeyPropertyNameQueryKey>
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
              (typeof client.repositories)[':workspace'][':repo_slug']['properties'][':app_key'][':property_name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugPropertiesAppKeyPropertyNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRepositoriesWorkspaceRepoSlugPropertiesAppKeyPropertyNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].properties[':app_key'][
            ':property_name'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPutRepositoriesWorkspaceRepoSlugPropertiesAppKeyPropertyNameMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/properties/:app_key/:property_name',
    'PUT',
  ] as const
}

export function getPutRepositoriesWorkspaceRepoSlugPropertiesAppKeyPropertyNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['properties'][':app_key'][':property_name']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['properties'][':app_key'][':property_name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutRepositoriesWorkspaceRepoSlugPropertiesAppKeyPropertyNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['properties'][':app_key'][':property_name']['$put']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].properties[':app_key'][
          ':property_name'
        ].$put(args, options),
      )
    },
  })
}

export function usePutRepositoriesWorkspaceRepoSlugPropertiesAppKeyPropertyName<
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
                      (typeof client.repositories)[':workspace'][':repo_slug']['properties'][':app_key'][':property_name']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['properties'][':app_key'][':property_name']['$put']
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
  const mutationDefaults =
    getPutRepositoriesWorkspaceRepoSlugPropertiesAppKeyPropertyNameMutationOptions<
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

export function getDeleteRepositoriesWorkspaceRepoSlugPropertiesAppKeyPropertyNameMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/properties/:app_key/:property_name',
    'DELETE',
  ] as const
}

export function getDeleteRepositoriesWorkspaceRepoSlugPropertiesAppKeyPropertyNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['properties'][':app_key'][':property_name']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['properties'][':app_key'][':property_name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteRepositoriesWorkspaceRepoSlugPropertiesAppKeyPropertyNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['properties'][':app_key'][':property_name']['$delete']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].properties[':app_key'][
          ':property_name'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteRepositoriesWorkspaceRepoSlugPropertiesAppKeyPropertyName<
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
                      (typeof client.repositories)[':workspace'][':repo_slug']['properties'][':app_key'][':property_name']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['properties'][':app_key'][':property_name']['$delete']
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
  const mutationDefaults =
    getDeleteRepositoriesWorkspaceRepoSlugPropertiesAppKeyPropertyNameMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugPullrequestsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPullrequestsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositoriesWorkspaceRepoSlugPullrequestsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pullrequests.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugPullrequests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugPullrequestsQueryKey>
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
              (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugPullrequestsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositoriesWorkspaceRepoSlugPullrequestsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].pullrequests.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRepositoriesWorkspaceRepoSlugPullrequestsMutationKey() {
  return ['repositories', '/repositories/:workspace/:repo_slug/pullrequests', 'POST'] as const
}

export function getPostRepositoriesWorkspaceRepoSlugPullrequestsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRepositoriesWorkspaceRepoSlugPullrequestsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests']['$post']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pullrequests.$post(args, options),
      )
    },
  })
}

export function usePostRepositoriesWorkspaceRepoSlugPullrequests<
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests']['$post']
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
  const mutationDefaults = getPostRepositoriesWorkspaceRepoSlugPullrequestsMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugPullrequestsActivityQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests']['activity']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/activity',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPullrequestsActivityQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests']['activity']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositoriesWorkspaceRepoSlugPullrequestsActivityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pullrequests.activity.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugPullrequestsActivity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests']['activity']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests']['activity']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests']['activity']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests']['activity']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugPullrequestsActivityQueryKey>
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
              (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests']['activity']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugPullrequestsActivityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositoriesWorkspaceRepoSlugPullrequestsActivityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].pullrequests.activity.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pullrequests[':pull_request_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugPullrequestsPullRequestId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdQueryKey>
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
              (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].pullrequests[':pull_request_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id',
    'PUT',
  ] as const
}

export function getPutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['$put']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pullrequests[':pull_request_id'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestId<
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['$put']
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
  const mutationDefaults =
    getPutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivityQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['activity']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/activity',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivityQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['activity']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivityQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pullrequests[
          ':pull_request_id'
        ].activity.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['activity']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['activity']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['activity']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['activity']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivityQueryKey
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
              (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['activity']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivityQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].pullrequests[
            ':pull_request_id'
          ].activity.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/approve',
    'POST',
  ] as const
}

export function getPostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['approve']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['approve']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['approve']['$post']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pullrequests[
          ':pull_request_id'
        ].approve.$post(args, options),
      )
    },
  })
}

export function usePostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprove<
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['approve']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['approve']['$post']
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
  const mutationDefaults =
    getPostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveMutationOptions<
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

export function getDeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/approve',
    'DELETE',
  ] as const
}

export function getDeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['approve']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['approve']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['approve']['$delete']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pullrequests[
          ':pull_request_id'
        ].approve.$delete(args, options),
      )
    },
  })
}

export function useDeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprove<
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
                      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['approve']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['approve']['$delete']
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
  const mutationDefaults =
    getDeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/comments',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pullrequests[
          ':pull_request_id'
        ].comments.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsQueryKey
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
              (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].pullrequests[
            ':pull_request_id'
          ].comments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/comments',
    'POST',
  ] as const
}

export function getPostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments']['$post']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pullrequests[
          ':pull_request_id'
        ].comments.$post(args, options),
      )
    },
  })
}

export function usePostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdComments<
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments']['$post']
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
  const mutationDefaults =
    getPostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments'][':comment_id']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/comments/:comment_id',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments'][':comment_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pullrequests[':pull_request_id'].comments[
          ':comment_id'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments'][':comment_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments'][':comment_id']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments'][':comment_id']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments'][':comment_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdQueryKey
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
              (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments'][':comment_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].pullrequests[':pull_request_id'].comments[
            ':comment_id'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/comments/:comment_id',
    'PUT',
  ] as const
}

export function getPutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments'][':comment_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments'][':comment_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments'][':comment_id']['$put']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pullrequests[':pull_request_id'].comments[
          ':comment_id'
        ].$put(args, options),
      )
    },
  })
}

export function usePutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId<
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments'][':comment_id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments'][':comment_id']['$put']
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
  const mutationDefaults =
    getPutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdMutationOptions<
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

export function getDeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/comments/:comment_id',
    'DELETE',
  ] as const
}

export function getDeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments'][':comment_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments'][':comment_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments'][':comment_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pullrequests[':pull_request_id'].comments[
          ':comment_id'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId<
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
                      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments'][':comment_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments'][':comment_id']['$delete']
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
  const mutationDefaults =
    getDeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdMutationOptions<
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

export function getPostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResolveMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/comments/:comment_id/resolve',
    'POST',
  ] as const
}

export function getPostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResolveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments'][':comment_id']['resolve']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments'][':comment_id']['resolve']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResolveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments'][':comment_id']['resolve']['$post']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pullrequests[':pull_request_id'].comments[
          ':comment_id'
        ].resolve.$post(args, options),
      )
    },
  })
}

export function usePostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResolve<
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments'][':comment_id']['resolve']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments'][':comment_id']['resolve']['$post']
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
  const mutationDefaults =
    getPostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResolveMutationOptions<
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

export function getDeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResolveMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/comments/:comment_id/resolve',
    'DELETE',
  ] as const
}

export function getDeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResolveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments'][':comment_id']['resolve']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments'][':comment_id']['resolve']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResolveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments'][':comment_id']['resolve']['$delete']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pullrequests[':pull_request_id'].comments[
          ':comment_id'
        ].resolve.$delete(args, options),
      )
    },
  })
}

export function useDeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResolve<
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
                      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments'][':comment_id']['resolve']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments'][':comment_id']['resolve']['$delete']
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
  const mutationDefaults =
    getDeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResolveMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommitsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['commits']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/commits',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommitsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['commits']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommitsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pullrequests[
          ':pull_request_id'
        ].commits.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['commits']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['commits']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['commits']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['commits']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommitsQueryKey
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
              (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['commits']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommitsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommitsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].pullrequests[
            ':pull_request_id'
          ].commits.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdConflictsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['conflicts']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/conflicts',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdConflictsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['conflicts']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdConflictsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pullrequests[
          ':pull_request_id'
        ].conflicts.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdConflicts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['conflicts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['conflicts']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['conflicts']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['conflicts']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdConflictsQueryKey
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
              (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['conflicts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdConflictsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdConflictsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].pullrequests[
            ':pull_request_id'
          ].conflicts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclineMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/decline',
    'POST',
  ] as const
}

export function getPostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclineMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['decline']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['decline']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclineMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['decline']['$post']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pullrequests[
          ':pull_request_id'
        ].decline.$post(args, options),
      )
    },
  })
}

export function usePostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDecline<
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['decline']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['decline']['$post']
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
  const mutationDefaults =
    getPostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclineMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['diff']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/diff',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['diff']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pullrequests[':pull_request_id'].diff.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiff<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['diff']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['diff']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['diff']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['diff']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffQueryKey>
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
              (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['diff']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].pullrequests[
            ':pull_request_id'
          ].diff.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstatQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['diffstat']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/diffstat',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstatQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['diffstat']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstatQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pullrequests[
          ':pull_request_id'
        ].diffstat.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['diffstat']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['diffstat']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['diffstat']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['diffstat']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstatQueryKey
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
              (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['diffstat']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstatQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].pullrequests[
            ':pull_request_id'
          ].diffstat.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/merge',
    'POST',
  ] as const
}

export function getPostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['merge']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['merge']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['merge']['$post']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pullrequests[
          ':pull_request_id'
        ].merge.$post(args, options),
      )
    },
  })
}

export function usePostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMerge<
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['merge']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['merge']['$post']
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
  const mutationDefaults =
    getPostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['merge']['task-status'][':task_id']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/merge/task-status/:task_id',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['merge']['task-status'][':task_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pullrequests[':pull_request_id'].merge[
          'task-status'
        ][':task_id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['merge']['task-status'][':task_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['merge']['task-status'][':task_id']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['merge']['task-status'][':task_id']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['merge']['task-status'][':task_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskIdQueryKey
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
              (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['merge']['task-status'][':task_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskIdQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].pullrequests[':pull_request_id'].merge[
            'task-status'
          ][':task_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeabilityChecksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['mergeability']['checks']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/mergeability/checks',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeabilityChecksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['mergeability']['checks']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeabilityChecksQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pullrequests[
          ':pull_request_id'
        ].mergeability.checks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeabilityChecks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['mergeability']['checks']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['mergeability']['checks']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['mergeability']['checks']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['mergeability']['checks']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeabilityChecksQueryKey
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
              (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['mergeability']['checks']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeabilityChecksQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeabilityChecksQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].pullrequests[
            ':pull_request_id'
          ].mergeability.checks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['patch']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/patch',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['patch']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pullrequests[':pull_request_id'].patch.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['patch']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['patch']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['patch']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['patch']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchQueryKey>
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
              (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['patch']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].pullrequests[
            ':pull_request_id'
          ].patch.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/request-changes',
    'POST',
  ] as const
}

export function getPostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['request-changes']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['request-changes']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['request-changes']['$post']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pullrequests[':pull_request_id'][
          'request-changes'
        ].$post(args, options),
      )
    },
  })
}

export function usePostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChanges<
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['request-changes']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['request-changes']['$post']
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
  const mutationDefaults =
    getPostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesMutationOptions<
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

export function getDeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/request-changes',
    'DELETE',
  ] as const
}

export function getDeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['request-changes']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['request-changes']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['request-changes']['$delete']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pullrequests[':pull_request_id'][
          'request-changes'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChanges<
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
                      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['request-changes']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['request-changes']['$delete']
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
  const mutationDefaults =
    getDeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['statuses']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/statuses',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['statuses']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pullrequests[
          ':pull_request_id'
        ].statuses.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatuses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['statuses']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['statuses']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['statuses']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['statuses']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesQueryKey
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
              (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['statuses']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].pullrequests[
            ':pull_request_id'
          ].statuses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['tasks']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/tasks',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['tasks']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasksQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pullrequests[':pull_request_id'].tasks.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['tasks']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['tasks']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['tasks']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['tasks']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasksQueryKey>
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
              (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['tasks']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasksQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].pullrequests[
            ':pull_request_id'
          ].tasks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasksMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/tasks',
    'POST',
  ] as const
}

export function getPostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['tasks']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['tasks']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasksMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['tasks']['$post']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pullrequests[
          ':pull_request_id'
        ].tasks.$post(args, options),
      )
    },
  })
}

export function usePostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasks<
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['tasks']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['tasks']['$post']
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
  const mutationDefaults =
    getPostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasksMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasksTaskIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['tasks'][':task_id']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/tasks/:task_id',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasksTaskIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['tasks'][':task_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasksTaskIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pullrequests[':pull_request_id'].tasks[
          ':task_id'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasksTaskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['tasks'][':task_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['tasks'][':task_id']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['tasks'][':task_id']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['tasks'][':task_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasksTaskIdQueryKey
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
              (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['tasks'][':task_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasksTaskIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasksTaskIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].pullrequests[':pull_request_id'].tasks[
            ':task_id'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasksTaskIdMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/tasks/:task_id',
    'PUT',
  ] as const
}

export function getPutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasksTaskIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['tasks'][':task_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['tasks'][':task_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasksTaskIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['tasks'][':task_id']['$put']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pullrequests[':pull_request_id'].tasks[
          ':task_id'
        ].$put(args, options),
      )
    },
  })
}

export function usePutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasksTaskId<
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['tasks'][':task_id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['tasks'][':task_id']['$put']
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
  const mutationDefaults =
    getPutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasksTaskIdMutationOptions<
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

export function getDeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasksTaskIdMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/tasks/:task_id',
    'DELETE',
  ] as const
}

export function getDeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasksTaskIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['tasks'][':task_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['tasks'][':task_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasksTaskIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['tasks'][':task_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pullrequests[':pull_request_id'].tasks[
          ':task_id'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasksTaskId<
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
                      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['tasks'][':task_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['tasks'][':task_id']['$delete']
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
  const mutationDefaults =
    getDeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasksTaskIdMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugPullrequestsPullrequestIdPropertiesAppKeyPropertyNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pullrequest_id']['properties'][':app_key'][':property_name']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pullrequest_id/properties/:app_key/:property_name',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPullrequestsPullrequestIdPropertiesAppKeyPropertyNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pullrequest_id']['properties'][':app_key'][':property_name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getRepositoriesWorkspaceRepoSlugPullrequestsPullrequestIdPropertiesAppKeyPropertyNameQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pullrequests[':pullrequest_id'].properties[
          ':app_key'
        ][':property_name'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugPullrequestsPullrequestIdPropertiesAppKeyPropertyName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pullrequest_id']['properties'][':app_key'][':property_name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pullrequest_id']['properties'][':app_key'][':property_name']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pullrequest_id']['properties'][':app_key'][':property_name']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pullrequest_id']['properties'][':app_key'][':property_name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getRepositoriesWorkspaceRepoSlugPullrequestsPullrequestIdPropertiesAppKeyPropertyNameQueryKey
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
              (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pullrequest_id']['properties'][':app_key'][':property_name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getRepositoriesWorkspaceRepoSlugPullrequestsPullrequestIdPropertiesAppKeyPropertyNameQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getRepositoriesWorkspaceRepoSlugPullrequestsPullrequestIdPropertiesAppKeyPropertyNameQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].pullrequests[
            ':pullrequest_id'
          ].properties[':app_key'][':property_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutRepositoriesWorkspaceRepoSlugPullrequestsPullrequestIdPropertiesAppKeyPropertyNameMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pullrequest_id/properties/:app_key/:property_name',
    'PUT',
  ] as const
}

export function getPutRepositoriesWorkspaceRepoSlugPullrequestsPullrequestIdPropertiesAppKeyPropertyNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pullrequest_id']['properties'][':app_key'][':property_name']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pullrequest_id']['properties'][':app_key'][':property_name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutRepositoriesWorkspaceRepoSlugPullrequestsPullrequestIdPropertiesAppKeyPropertyNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pullrequest_id']['properties'][':app_key'][':property_name']['$put']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pullrequests[':pullrequest_id'].properties[
          ':app_key'
        ][':property_name'].$put(args, options),
      )
    },
  })
}

export function usePutRepositoriesWorkspaceRepoSlugPullrequestsPullrequestIdPropertiesAppKeyPropertyName<
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
                      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pullrequest_id']['properties'][':app_key'][':property_name']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pullrequest_id']['properties'][':app_key'][':property_name']['$put']
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
  const mutationDefaults =
    getPutRepositoriesWorkspaceRepoSlugPullrequestsPullrequestIdPropertiesAppKeyPropertyNameMutationOptions<
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

export function getDeleteRepositoriesWorkspaceRepoSlugPullrequestsPullrequestIdPropertiesAppKeyPropertyNameMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pullrequest_id/properties/:app_key/:property_name',
    'DELETE',
  ] as const
}

export function getDeleteRepositoriesWorkspaceRepoSlugPullrequestsPullrequestIdPropertiesAppKeyPropertyNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pullrequest_id']['properties'][':app_key'][':property_name']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pullrequest_id']['properties'][':app_key'][':property_name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteRepositoriesWorkspaceRepoSlugPullrequestsPullrequestIdPropertiesAppKeyPropertyNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pullrequest_id']['properties'][':app_key'][':property_name']['$delete']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pullrequests[':pullrequest_id'].properties[
          ':app_key'
        ][':property_name'].$delete(args, options),
      )
    },
  })
}

export function useDeleteRepositoriesWorkspaceRepoSlugPullrequestsPullrequestIdPropertiesAppKeyPropertyName<
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
                      (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pullrequest_id']['properties'][':app_key'][':property_name']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pullrequest_id']['properties'][':app_key'][':property_name']['$delete']
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
  const mutationDefaults =
    getDeleteRepositoriesWorkspaceRepoSlugPullrequestsPullrequestIdPropertiesAppKeyPropertyNameMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugRefsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['refs']['$get']>
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/refs', toValue(args)] as const
}

export function getRepositoriesWorkspaceRepoSlugRefsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['refs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositoriesWorkspaceRepoSlugRefsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].refs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugRefs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.repositories)[':workspace'][':repo_slug']['refs']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['refs']['$get']>
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['refs']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['refs']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugRefsQueryKey>
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
            ReturnType<(typeof client.repositories)[':workspace'][':repo_slug']['refs']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugRefsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositoriesWorkspaceRepoSlugRefsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].refs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRepositoriesWorkspaceRepoSlugRefsBranchesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['refs']['branches']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/refs/branches',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugRefsBranchesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['refs']['branches']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositoriesWorkspaceRepoSlugRefsBranchesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].refs.branches.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugRefsBranches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['refs']['branches']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['refs']['branches']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['refs']['branches']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['refs']['branches']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugRefsBranchesQueryKey>
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
              (typeof client.repositories)[':workspace'][':repo_slug']['refs']['branches']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugRefsBranchesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositoriesWorkspaceRepoSlugRefsBranchesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].refs.branches.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRepositoriesWorkspaceRepoSlugRefsBranchesMutationKey() {
  return ['repositories', '/repositories/:workspace/:repo_slug/refs/branches', 'POST'] as const
}

export function getPostRepositoriesWorkspaceRepoSlugRefsBranchesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['refs']['branches']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['refs']['branches']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRepositoriesWorkspaceRepoSlugRefsBranchesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['refs']['branches']['$post']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].refs.branches.$post(args, options),
      )
    },
  })
}

export function usePostRepositoriesWorkspaceRepoSlugRefsBranches<
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['refs']['branches']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['refs']['branches']['$post']
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
  const mutationDefaults = getPostRepositoriesWorkspaceRepoSlugRefsBranchesMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugRefsBranchesNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['refs']['branches'][':name']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/refs/branches/:name',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugRefsBranchesNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['refs']['branches'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositoriesWorkspaceRepoSlugRefsBranchesNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].refs.branches[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugRefsBranchesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['refs']['branches'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['refs']['branches'][':name']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['refs']['branches'][':name']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['refs']['branches'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugRefsBranchesNameQueryKey>
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
              (typeof client.repositories)[':workspace'][':repo_slug']['refs']['branches'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugRefsBranchesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositoriesWorkspaceRepoSlugRefsBranchesNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].refs.branches[':name'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameMutationKey() {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/refs/branches/:name',
    'DELETE',
  ] as const
}

export function getDeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['refs']['branches'][':name']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['refs']['branches'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['refs']['branches'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].refs.branches[':name'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteRepositoriesWorkspaceRepoSlugRefsBranchesName<
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
                      (typeof client.repositories)[':workspace'][':repo_slug']['refs']['branches'][':name']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['refs']['branches'][':name']['$delete']
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
  const mutationDefaults = getDeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugRefsTagsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['refs']['tags']['$get']
    >
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/refs/tags', toValue(args)] as const
}

export function getRepositoriesWorkspaceRepoSlugRefsTagsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['refs']['tags']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositoriesWorkspaceRepoSlugRefsTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].refs.tags.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugRefsTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['refs']['tags']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['refs']['tags']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['refs']['tags']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['refs']['tags']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugRefsTagsQueryKey>
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
              (typeof client.repositories)[':workspace'][':repo_slug']['refs']['tags']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugRefsTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositoriesWorkspaceRepoSlugRefsTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].refs.tags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRepositoriesWorkspaceRepoSlugRefsTagsMutationKey() {
  return ['repositories', '/repositories/:workspace/:repo_slug/refs/tags', 'POST'] as const
}

export function getPostRepositoriesWorkspaceRepoSlugRefsTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.repositories)[':workspace'][':repo_slug']['refs']['tags']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['refs']['tags']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostRepositoriesWorkspaceRepoSlugRefsTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['refs']['tags']['$post']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].refs.tags.$post(args, options),
      )
    },
  })
}

export function usePostRepositoriesWorkspaceRepoSlugRefsTags<
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['refs']['tags']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['refs']['tags']['$post']
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
  const mutationDefaults = getPostRepositoriesWorkspaceRepoSlugRefsTagsMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugRefsTagsNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['refs']['tags'][':name']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/refs/tags/:name',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugRefsTagsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['refs']['tags'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositoriesWorkspaceRepoSlugRefsTagsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].refs.tags[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugRefsTagsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['refs']['tags'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['refs']['tags'][':name']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['refs']['tags'][':name']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['refs']['tags'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugRefsTagsNameQueryKey>
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
              (typeof client.repositories)[':workspace'][':repo_slug']['refs']['tags'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugRefsTagsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositoriesWorkspaceRepoSlugRefsTagsNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].refs.tags[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteRepositoriesWorkspaceRepoSlugRefsTagsNameMutationKey() {
  return ['repositories', '/repositories/:workspace/:repo_slug/refs/tags/:name', 'DELETE'] as const
}

export function getDeleteRepositoriesWorkspaceRepoSlugRefsTagsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.repositories)[':workspace'][':repo_slug']['refs']['tags'][':name']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['refs']['tags'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteRepositoriesWorkspaceRepoSlugRefsTagsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['refs']['tags'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].refs.tags[':name'].$delete(args, options),
      )
    },
  })
}

export function useDeleteRepositoriesWorkspaceRepoSlugRefsTagsName<
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
                      (typeof client.repositories)[':workspace'][':repo_slug']['refs']['tags'][':name']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['refs']['tags'][':name']['$delete']
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
  const mutationDefaults = getDeleteRepositoriesWorkspaceRepoSlugRefsTagsNameMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugSrcQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['src']['$get']>
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/src', toValue(args)] as const
}

export function getRepositoriesWorkspaceRepoSlugSrcQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['src']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositoriesWorkspaceRepoSlugSrcQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].src.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugSrc<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.repositories)[':workspace'][':repo_slug']['src']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['src']['$get']>
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['src']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['src']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugSrcQueryKey>
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
            ReturnType<(typeof client.repositories)[':workspace'][':repo_slug']['src']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugSrcQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositoriesWorkspaceRepoSlugSrcQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].src.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRepositoriesWorkspaceRepoSlugSrcMutationKey() {
  return ['repositories', '/repositories/:workspace/:repo_slug/src', 'POST'] as const
}

export function getPostRepositoriesWorkspaceRepoSlugSrcMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.repositories)[':workspace'][':repo_slug']['src']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['src']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRepositoriesWorkspaceRepoSlugSrcMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.repositories)[':workspace'][':repo_slug']['src']['$post']
      >,
    ) {
      return parseResponse(client.repositories[':workspace'][':repo_slug'].src.$post(args, options))
    },
  })
}

export function usePostRepositoriesWorkspaceRepoSlugSrc<
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['src']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.repositories)[':workspace'][':repo_slug']['src']['$post']
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
  const mutationDefaults = getPostRepositoriesWorkspaceRepoSlugSrcMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugSrcCommitPathQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['src'][':commit'][':path']['$get']
    >
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/src/:commit/:path',
    toValue(args),
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugSrcCommitPathQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['src'][':commit'][':path']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositoriesWorkspaceRepoSlugSrcCommitPathQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].src[':commit'][':path'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugSrcCommitPath<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.repositories)[':workspace'][':repo_slug']['src'][':commit'][':path']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.repositories)[':workspace'][':repo_slug']['src'][':commit'][':path']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['src'][':commit'][':path']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['src'][':commit'][':path']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugSrcCommitPathQueryKey>
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
              (typeof client.repositories)[':workspace'][':repo_slug']['src'][':commit'][':path']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugSrcCommitPathQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositoriesWorkspaceRepoSlugSrcCommitPathQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].src[':commit'][':path'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getRepositoriesWorkspaceRepoSlugWatchersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['watchers']['$get']>
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/watchers', toValue(args)] as const
}

export function getRepositoriesWorkspaceRepoSlugWatchersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['watchers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRepositoriesWorkspaceRepoSlugWatchersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].watchers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRepositoriesWorkspaceRepoSlugWatchers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.repositories)[':workspace'][':repo_slug']['watchers']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['watchers']['$get']>
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['watchers']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['watchers']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugWatchersQueryKey>
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
            ReturnType<(typeof client.repositories)[':workspace'][':repo_slug']['watchers']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRepositoriesWorkspaceRepoSlugWatchersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRepositoriesWorkspaceRepoSlugWatchersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.repositories[':workspace'][':repo_slug'].watchers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSnippetsMutationKey() {
  return ['snippets', '/snippets', 'POST'] as const
}

export function getPostSnippetsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snippets.$post>>>>>,
    TError,
    InferRequestType<typeof client.snippets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSnippetsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.snippets.$post>) {
      return parseResponse(client.snippets.$post(args, options))
    },
  })
}

export function usePostSnippets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snippets.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.snippets.$post>,
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
  const mutationDefaults = getPostSnippetsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSnippetsWorkspaceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.snippets)[':workspace']['$get']>>,
) {
  return ['snippets', '/snippets/:workspace', toValue(args)] as const
}

export function getSnippetsWorkspaceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.snippets)[':workspace']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSnippetsWorkspaceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.snippets[':workspace'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSnippetsWorkspace<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.snippets)[':workspace']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.snippets)[':workspace']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.snippets)[':workspace']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.snippets)[':workspace']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSnippetsWorkspaceQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.snippets)[':workspace']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSnippetsWorkspaceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSnippetsWorkspaceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.snippets[':workspace'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSnippetsWorkspaceMutationKey() {
  return ['snippets', '/snippets/:workspace', 'POST'] as const
}

export function getPostSnippetsWorkspaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.snippets)[':workspace']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.snippets)[':workspace']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSnippetsWorkspaceMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.snippets)[':workspace']['$post']>) {
      return parseResponse(client.snippets[':workspace'].$post(args, options))
    },
  })
}

export function usePostSnippetsWorkspace<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.snippets)[':workspace']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.snippets)[':workspace']['$post']>,
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
  const mutationDefaults = getPostSnippetsWorkspaceMutationOptions<TError, TOnMutateResult>(
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

export function getSnippetsWorkspaceEncodedIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['$get']>
  >,
) {
  return ['snippets', '/snippets/:workspace/:encoded_id', toValue(args)] as const
}

export function getSnippetsWorkspaceEncodedIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSnippetsWorkspaceEncodedIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.snippets[':workspace'][':encoded_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSnippetsWorkspaceEncodedId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.snippets)[':workspace'][':encoded_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.snippets)[':workspace'][':encoded_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.snippets)[':workspace'][':encoded_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSnippetsWorkspaceEncodedIdQueryKey>
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
          Awaited<ReturnType<(typeof client.snippets)[':workspace'][':encoded_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSnippetsWorkspaceEncodedIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSnippetsWorkspaceEncodedIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.snippets[':workspace'][':encoded_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSnippetsWorkspaceEncodedIdMutationKey() {
  return ['snippets', '/snippets/:workspace/:encoded_id', 'PUT'] as const
}

export function getPutSnippetsWorkspaceEncodedIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.snippets)[':workspace'][':encoded_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSnippetsWorkspaceEncodedIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['$put']>,
    ) {
      return parseResponse(client.snippets[':workspace'][':encoded_id'].$put(args, options))
    },
  })
}

export function usePutSnippetsWorkspaceEncodedId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.snippets)[':workspace'][':encoded_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['$put']>,
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
  const mutationDefaults = getPutSnippetsWorkspaceEncodedIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSnippetsWorkspaceEncodedIdMutationKey() {
  return ['snippets', '/snippets/:workspace/:encoded_id', 'DELETE'] as const
}

export function getDeleteSnippetsWorkspaceEncodedIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.snippets)[':workspace'][':encoded_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSnippetsWorkspaceEncodedIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['$delete']>,
    ) {
      return parseResponse(client.snippets[':workspace'][':encoded_id'].$delete(args, options))
    },
  })
}

export function useDeleteSnippetsWorkspaceEncodedId<
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
                    ReturnType<(typeof client.snippets)[':workspace'][':encoded_id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['$delete']>,
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
  const mutationDefaults = getDeleteSnippetsWorkspaceEncodedIdMutationOptions<
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

export function getSnippetsWorkspaceEncodedIdCommentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['comments']['$get']>
  >,
) {
  return ['snippets', '/snippets/:workspace/:encoded_id/comments', toValue(args)] as const
}

export function getSnippetsWorkspaceEncodedIdCommentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['comments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSnippetsWorkspaceEncodedIdCommentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.snippets[':workspace'][':encoded_id'].comments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSnippetsWorkspaceEncodedIdComments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.snippets)[':workspace'][':encoded_id']['comments']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['comments']['$get']>
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
                    (typeof client.snippets)[':workspace'][':encoded_id']['comments']['$get']
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
                    (typeof client.snippets)[':workspace'][':encoded_id']['comments']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSnippetsWorkspaceEncodedIdCommentsQueryKey>
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
            ReturnType<(typeof client.snippets)[':workspace'][':encoded_id']['comments']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSnippetsWorkspaceEncodedIdCommentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSnippetsWorkspaceEncodedIdCommentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.snippets[':workspace'][':encoded_id'].comments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSnippetsWorkspaceEncodedIdCommentsMutationKey() {
  return ['snippets', '/snippets/:workspace/:encoded_id/comments', 'POST'] as const
}

export function getPostSnippetsWorkspaceEncodedIdCommentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.snippets)[':workspace'][':encoded_id']['comments']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['comments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSnippetsWorkspaceEncodedIdCommentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.snippets)[':workspace'][':encoded_id']['comments']['$post']
      >,
    ) {
      return parseResponse(
        client.snippets[':workspace'][':encoded_id'].comments.$post(args, options),
      )
    },
  })
}

export function usePostSnippetsWorkspaceEncodedIdComments<
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
                    (typeof client.snippets)[':workspace'][':encoded_id']['comments']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.snippets)[':workspace'][':encoded_id']['comments']['$post']
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
  const mutationDefaults = getPostSnippetsWorkspaceEncodedIdCommentsMutationOptions<
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

export function getSnippetsWorkspaceEncodedIdCommentsCommentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.snippets)[':workspace'][':encoded_id']['comments'][':comment_id']['$get']
    >
  >,
) {
  return [
    'snippets',
    '/snippets/:workspace/:encoded_id/comments/:comment_id',
    toValue(args),
  ] as const
}

export function getSnippetsWorkspaceEncodedIdCommentsCommentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.snippets)[':workspace'][':encoded_id']['comments'][':comment_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSnippetsWorkspaceEncodedIdCommentsCommentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.snippets[':workspace'][':encoded_id'].comments[':comment_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSnippetsWorkspaceEncodedIdCommentsCommentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.snippets)[':workspace'][':encoded_id']['comments'][':comment_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.snippets)[':workspace'][':encoded_id']['comments'][':comment_id']['$get']
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
                    (typeof client.snippets)[':workspace'][':encoded_id']['comments'][':comment_id']['$get']
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
                    (typeof client.snippets)[':workspace'][':encoded_id']['comments'][':comment_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSnippetsWorkspaceEncodedIdCommentsCommentIdQueryKey>
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
              (typeof client.snippets)[':workspace'][':encoded_id']['comments'][':comment_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSnippetsWorkspaceEncodedIdCommentsCommentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSnippetsWorkspaceEncodedIdCommentsCommentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.snippets[':workspace'][':encoded_id'].comments[':comment_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSnippetsWorkspaceEncodedIdCommentsCommentIdMutationKey() {
  return ['snippets', '/snippets/:workspace/:encoded_id/comments/:comment_id', 'PUT'] as const
}

export function getPutSnippetsWorkspaceEncodedIdCommentsCommentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.snippets)[':workspace'][':encoded_id']['comments'][':comment_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.snippets)[':workspace'][':encoded_id']['comments'][':comment_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutSnippetsWorkspaceEncodedIdCommentsCommentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.snippets)[':workspace'][':encoded_id']['comments'][':comment_id']['$put']
      >,
    ) {
      return parseResponse(
        client.snippets[':workspace'][':encoded_id'].comments[':comment_id'].$put(args, options),
      )
    },
  })
}

export function usePutSnippetsWorkspaceEncodedIdCommentsCommentId<
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
                    (typeof client.snippets)[':workspace'][':encoded_id']['comments'][':comment_id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.snippets)[':workspace'][':encoded_id']['comments'][':comment_id']['$put']
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
  const mutationDefaults = getPutSnippetsWorkspaceEncodedIdCommentsCommentIdMutationOptions<
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

export function getDeleteSnippetsWorkspaceEncodedIdCommentsCommentIdMutationKey() {
  return ['snippets', '/snippets/:workspace/:encoded_id/comments/:comment_id', 'DELETE'] as const
}

export function getDeleteSnippetsWorkspaceEncodedIdCommentsCommentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.snippets)[':workspace'][':encoded_id']['comments'][':comment_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.snippets)[':workspace'][':encoded_id']['comments'][':comment_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteSnippetsWorkspaceEncodedIdCommentsCommentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.snippets)[':workspace'][':encoded_id']['comments'][':comment_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.snippets[':workspace'][':encoded_id'].comments[':comment_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteSnippetsWorkspaceEncodedIdCommentsCommentId<
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
                      (typeof client.snippets)[':workspace'][':encoded_id']['comments'][':comment_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.snippets)[':workspace'][':encoded_id']['comments'][':comment_id']['$delete']
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
  const mutationDefaults = getDeleteSnippetsWorkspaceEncodedIdCommentsCommentIdMutationOptions<
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

export function getSnippetsWorkspaceEncodedIdCommitsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['commits']['$get']>
  >,
) {
  return ['snippets', '/snippets/:workspace/:encoded_id/commits', toValue(args)] as const
}

export function getSnippetsWorkspaceEncodedIdCommitsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['commits']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSnippetsWorkspaceEncodedIdCommitsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.snippets[':workspace'][':encoded_id'].commits.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSnippetsWorkspaceEncodedIdCommits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.snippets)[':workspace'][':encoded_id']['commits']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['commits']['$get']>
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
                    (typeof client.snippets)[':workspace'][':encoded_id']['commits']['$get']
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
                    (typeof client.snippets)[':workspace'][':encoded_id']['commits']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSnippetsWorkspaceEncodedIdCommitsQueryKey>
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
            ReturnType<(typeof client.snippets)[':workspace'][':encoded_id']['commits']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSnippetsWorkspaceEncodedIdCommitsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSnippetsWorkspaceEncodedIdCommitsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.snippets[':workspace'][':encoded_id'].commits.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSnippetsWorkspaceEncodedIdCommitsRevisionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.snippets)[':workspace'][':encoded_id']['commits'][':revision']['$get']
    >
  >,
) {
  return ['snippets', '/snippets/:workspace/:encoded_id/commits/:revision', toValue(args)] as const
}

export function getSnippetsWorkspaceEncodedIdCommitsRevisionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.snippets)[':workspace'][':encoded_id']['commits'][':revision']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSnippetsWorkspaceEncodedIdCommitsRevisionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.snippets[':workspace'][':encoded_id'].commits[':revision'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSnippetsWorkspaceEncodedIdCommitsRevision<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.snippets)[':workspace'][':encoded_id']['commits'][':revision']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.snippets)[':workspace'][':encoded_id']['commits'][':revision']['$get']
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
                    (typeof client.snippets)[':workspace'][':encoded_id']['commits'][':revision']['$get']
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
                    (typeof client.snippets)[':workspace'][':encoded_id']['commits'][':revision']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSnippetsWorkspaceEncodedIdCommitsRevisionQueryKey>
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
              (typeof client.snippets)[':workspace'][':encoded_id']['commits'][':revision']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSnippetsWorkspaceEncodedIdCommitsRevisionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSnippetsWorkspaceEncodedIdCommitsRevisionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.snippets[':workspace'][':encoded_id'].commits[':revision'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSnippetsWorkspaceEncodedIdFilesPathQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.snippets)[':workspace'][':encoded_id']['files'][':path']['$get']
    >
  >,
) {
  return ['snippets', '/snippets/:workspace/:encoded_id/files/:path', toValue(args)] as const
}

export function getSnippetsWorkspaceEncodedIdFilesPathQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.snippets)[':workspace'][':encoded_id']['files'][':path']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSnippetsWorkspaceEncodedIdFilesPathQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.snippets[':workspace'][':encoded_id'].files[':path'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSnippetsWorkspaceEncodedIdFilesPath<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.snippets)[':workspace'][':encoded_id']['files'][':path']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.snippets)[':workspace'][':encoded_id']['files'][':path']['$get']
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
                    (typeof client.snippets)[':workspace'][':encoded_id']['files'][':path']['$get']
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
                    (typeof client.snippets)[':workspace'][':encoded_id']['files'][':path']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSnippetsWorkspaceEncodedIdFilesPathQueryKey>
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
              (typeof client.snippets)[':workspace'][':encoded_id']['files'][':path']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSnippetsWorkspaceEncodedIdFilesPathQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSnippetsWorkspaceEncodedIdFilesPathQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.snippets[':workspace'][':encoded_id'].files[':path'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSnippetsWorkspaceEncodedIdWatchQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['watch']['$get']>
  >,
) {
  return ['snippets', '/snippets/:workspace/:encoded_id/watch', toValue(args)] as const
}

export function getSnippetsWorkspaceEncodedIdWatchQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['watch']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSnippetsWorkspaceEncodedIdWatchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.snippets[':workspace'][':encoded_id'].watch.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSnippetsWorkspaceEncodedIdWatch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.snippets)[':workspace'][':encoded_id']['watch']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['watch']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.snippets)[':workspace'][':encoded_id']['watch']['$get']>
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
                  ReturnType<(typeof client.snippets)[':workspace'][':encoded_id']['watch']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSnippetsWorkspaceEncodedIdWatchQueryKey>
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
            ReturnType<(typeof client.snippets)[':workspace'][':encoded_id']['watch']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSnippetsWorkspaceEncodedIdWatchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSnippetsWorkspaceEncodedIdWatchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.snippets[':workspace'][':encoded_id'].watch.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSnippetsWorkspaceEncodedIdWatchMutationKey() {
  return ['snippets', '/snippets/:workspace/:encoded_id/watch', 'PUT'] as const
}

export function getPutSnippetsWorkspaceEncodedIdWatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.snippets)[':workspace'][':encoded_id']['watch']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['watch']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSnippetsWorkspaceEncodedIdWatchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.snippets)[':workspace'][':encoded_id']['watch']['$put']
      >,
    ) {
      return parseResponse(client.snippets[':workspace'][':encoded_id'].watch.$put(args, options))
    },
  })
}

export function usePutSnippetsWorkspaceEncodedIdWatch<
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
                      (typeof client.snippets)[':workspace'][':encoded_id']['watch']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['watch']['$put']>,
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
  const mutationDefaults = getPutSnippetsWorkspaceEncodedIdWatchMutationOptions<
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

export function getDeleteSnippetsWorkspaceEncodedIdWatchMutationKey() {
  return ['snippets', '/snippets/:workspace/:encoded_id/watch', 'DELETE'] as const
}

export function getDeleteSnippetsWorkspaceEncodedIdWatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.snippets)[':workspace'][':encoded_id']['watch']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['watch']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSnippetsWorkspaceEncodedIdWatchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.snippets)[':workspace'][':encoded_id']['watch']['$delete']
      >,
    ) {
      return parseResponse(
        client.snippets[':workspace'][':encoded_id'].watch.$delete(args, options),
      )
    },
  })
}

export function useDeleteSnippetsWorkspaceEncodedIdWatch<
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
                      (typeof client.snippets)[':workspace'][':encoded_id']['watch']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.snippets)[':workspace'][':encoded_id']['watch']['$delete']
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
  const mutationDefaults = getDeleteSnippetsWorkspaceEncodedIdWatchMutationOptions<
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

export function getSnippetsWorkspaceEncodedIdWatchersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['watchers']['$get']>
  >,
) {
  return ['snippets', '/snippets/:workspace/:encoded_id/watchers', toValue(args)] as const
}

export function getSnippetsWorkspaceEncodedIdWatchersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['watchers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSnippetsWorkspaceEncodedIdWatchersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.snippets[':workspace'][':encoded_id'].watchers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSnippetsWorkspaceEncodedIdWatchers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.snippets)[':workspace'][':encoded_id']['watchers']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['watchers']['$get']>
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
                    (typeof client.snippets)[':workspace'][':encoded_id']['watchers']['$get']
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
                    (typeof client.snippets)[':workspace'][':encoded_id']['watchers']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSnippetsWorkspaceEncodedIdWatchersQueryKey>
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
            ReturnType<(typeof client.snippets)[':workspace'][':encoded_id']['watchers']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSnippetsWorkspaceEncodedIdWatchersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSnippetsWorkspaceEncodedIdWatchersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.snippets[':workspace'][':encoded_id'].watchers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSnippetsWorkspaceEncodedIdNodeIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id'][':node_id']['$get']>
  >,
) {
  return ['snippets', '/snippets/:workspace/:encoded_id/:node_id', toValue(args)] as const
}

export function getSnippetsWorkspaceEncodedIdNodeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id'][':node_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSnippetsWorkspaceEncodedIdNodeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.snippets[':workspace'][':encoded_id'][':node_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSnippetsWorkspaceEncodedIdNodeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.snippets)[':workspace'][':encoded_id'][':node_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id'][':node_id']['$get']>
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
                    (typeof client.snippets)[':workspace'][':encoded_id'][':node_id']['$get']
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
                    (typeof client.snippets)[':workspace'][':encoded_id'][':node_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSnippetsWorkspaceEncodedIdNodeIdQueryKey>
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
            ReturnType<(typeof client.snippets)[':workspace'][':encoded_id'][':node_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSnippetsWorkspaceEncodedIdNodeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSnippetsWorkspaceEncodedIdNodeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.snippets[':workspace'][':encoded_id'][':node_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSnippetsWorkspaceEncodedIdNodeIdMutationKey() {
  return ['snippets', '/snippets/:workspace/:encoded_id/:node_id', 'PUT'] as const
}

export function getPutSnippetsWorkspaceEncodedIdNodeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.snippets)[':workspace'][':encoded_id'][':node_id']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id'][':node_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSnippetsWorkspaceEncodedIdNodeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.snippets)[':workspace'][':encoded_id'][':node_id']['$put']
      >,
    ) {
      return parseResponse(
        client.snippets[':workspace'][':encoded_id'][':node_id'].$put(args, options),
      )
    },
  })
}

export function usePutSnippetsWorkspaceEncodedIdNodeId<
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
                    (typeof client.snippets)[':workspace'][':encoded_id'][':node_id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.snippets)[':workspace'][':encoded_id'][':node_id']['$put']
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
  const mutationDefaults = getPutSnippetsWorkspaceEncodedIdNodeIdMutationOptions<
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

export function getDeleteSnippetsWorkspaceEncodedIdNodeIdMutationKey() {
  return ['snippets', '/snippets/:workspace/:encoded_id/:node_id', 'DELETE'] as const
}

export function getDeleteSnippetsWorkspaceEncodedIdNodeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.snippets)[':workspace'][':encoded_id'][':node_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id'][':node_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSnippetsWorkspaceEncodedIdNodeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.snippets)[':workspace'][':encoded_id'][':node_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.snippets[':workspace'][':encoded_id'][':node_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteSnippetsWorkspaceEncodedIdNodeId<
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
                      (typeof client.snippets)[':workspace'][':encoded_id'][':node_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.snippets)[':workspace'][':encoded_id'][':node_id']['$delete']
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
  const mutationDefaults = getDeleteSnippetsWorkspaceEncodedIdNodeIdMutationOptions<
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

export function getSnippetsWorkspaceEncodedIdNodeIdFilesPathQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.snippets)[':workspace'][':encoded_id'][':node_id']['files'][':path']['$get']
    >
  >,
) {
  return [
    'snippets',
    '/snippets/:workspace/:encoded_id/:node_id/files/:path',
    toValue(args),
  ] as const
}

export function getSnippetsWorkspaceEncodedIdNodeIdFilesPathQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.snippets)[':workspace'][':encoded_id'][':node_id']['files'][':path']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSnippetsWorkspaceEncodedIdNodeIdFilesPathQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.snippets[':workspace'][':encoded_id'][':node_id'].files[':path'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useSnippetsWorkspaceEncodedIdNodeIdFilesPath<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.snippets)[':workspace'][':encoded_id'][':node_id']['files'][':path']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.snippets)[':workspace'][':encoded_id'][':node_id']['files'][':path']['$get']
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
                    (typeof client.snippets)[':workspace'][':encoded_id'][':node_id']['files'][':path']['$get']
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
                    (typeof client.snippets)[':workspace'][':encoded_id'][':node_id']['files'][':path']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSnippetsWorkspaceEncodedIdNodeIdFilesPathQueryKey>
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
              (typeof client.snippets)[':workspace'][':encoded_id'][':node_id']['files'][':path']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSnippetsWorkspaceEncodedIdNodeIdFilesPathQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSnippetsWorkspaceEncodedIdNodeIdFilesPathQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.snippets[':workspace'][':encoded_id'][':node_id'].files[':path'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getSnippetsWorkspaceEncodedIdRevisionDiffQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.snippets)[':workspace'][':encoded_id'][':revision']['diff']['$get']
    >
  >,
) {
  return ['snippets', '/snippets/:workspace/:encoded_id/:revision/diff', toValue(args)] as const
}

export function getSnippetsWorkspaceEncodedIdRevisionDiffQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.snippets)[':workspace'][':encoded_id'][':revision']['diff']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSnippetsWorkspaceEncodedIdRevisionDiffQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.snippets[':workspace'][':encoded_id'][':revision'].diff.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSnippetsWorkspaceEncodedIdRevisionDiff<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.snippets)[':workspace'][':encoded_id'][':revision']['diff']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.snippets)[':workspace'][':encoded_id'][':revision']['diff']['$get']
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
                    (typeof client.snippets)[':workspace'][':encoded_id'][':revision']['diff']['$get']
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
                    (typeof client.snippets)[':workspace'][':encoded_id'][':revision']['diff']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSnippetsWorkspaceEncodedIdRevisionDiffQueryKey>
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
              (typeof client.snippets)[':workspace'][':encoded_id'][':revision']['diff']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSnippetsWorkspaceEncodedIdRevisionDiffQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSnippetsWorkspaceEncodedIdRevisionDiffQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.snippets[':workspace'][':encoded_id'][':revision'].diff.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSnippetsWorkspaceEncodedIdRevisionPatchQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.snippets)[':workspace'][':encoded_id'][':revision']['patch']['$get']
    >
  >,
) {
  return ['snippets', '/snippets/:workspace/:encoded_id/:revision/patch', toValue(args)] as const
}

export function getSnippetsWorkspaceEncodedIdRevisionPatchQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.snippets)[':workspace'][':encoded_id'][':revision']['patch']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSnippetsWorkspaceEncodedIdRevisionPatchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.snippets[':workspace'][':encoded_id'][':revision'].patch.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSnippetsWorkspaceEncodedIdRevisionPatch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.snippets)[':workspace'][':encoded_id'][':revision']['patch']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.snippets)[':workspace'][':encoded_id'][':revision']['patch']['$get']
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
                    (typeof client.snippets)[':workspace'][':encoded_id'][':revision']['patch']['$get']
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
                    (typeof client.snippets)[':workspace'][':encoded_id'][':revision']['patch']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSnippetsWorkspaceEncodedIdRevisionPatchQueryKey>
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
              (typeof client.snippets)[':workspace'][':encoded_id'][':revision']['patch']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSnippetsWorkspaceEncodedIdRevisionPatchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSnippetsWorkspaceEncodedIdRevisionPatchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.snippets[':workspace'][':encoded_id'][':revision'].patch.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamsUsernamePipelinesConfigVariablesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.teams)[':username']['pipelines_config']['variables']['$get']>
  >,
) {
  return ['teams', '/teams/:username/pipelines_config/variables', toValue(args)] as const
}

export function getTeamsUsernamePipelinesConfigVariablesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.teams)[':username']['pipelines_config']['variables']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamsUsernamePipelinesConfigVariablesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teams[':username'].pipelines_config.variables.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTeamsUsernamePipelinesConfigVariables<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.teams)[':username']['pipelines_config']['variables']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.teams)[':username']['pipelines_config']['variables']['$get']>
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
                    (typeof client.teams)[':username']['pipelines_config']['variables']['$get']
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
                    (typeof client.teams)[':username']['pipelines_config']['variables']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTeamsUsernamePipelinesConfigVariablesQueryKey>
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
            ReturnType<(typeof client.teams)[':username']['pipelines_config']['variables']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsUsernamePipelinesConfigVariablesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamsUsernamePipelinesConfigVariablesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.teams[':username'].pipelines_config.variables.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTeamsUsernamePipelinesConfigVariablesMutationKey() {
  return ['teams', '/teams/:username/pipelines_config/variables', 'POST'] as const
}

export function getPostTeamsUsernamePipelinesConfigVariablesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.teams)[':username']['pipelines_config']['variables']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.teams)[':username']['pipelines_config']['variables']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTeamsUsernamePipelinesConfigVariablesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.teams)[':username']['pipelines_config']['variables']['$post']
      >,
    ) {
      return parseResponse(
        client.teams[':username'].pipelines_config.variables.$post(args, options),
      )
    },
  })
}

export function usePostTeamsUsernamePipelinesConfigVariables<
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
                    (typeof client.teams)[':username']['pipelines_config']['variables']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.teams)[':username']['pipelines_config']['variables']['$post']
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
  const mutationDefaults = getPostTeamsUsernamePipelinesConfigVariablesMutationOptions<
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

export function getTeamsUsernamePipelinesConfigVariablesVariableUuidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.teams)[':username']['pipelines_config']['variables'][':variable_uuid']['$get']
    >
  >,
) {
  return [
    'teams',
    '/teams/:username/pipelines_config/variables/:variable_uuid',
    toValue(args),
  ] as const
}

export function getTeamsUsernamePipelinesConfigVariablesVariableUuidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.teams)[':username']['pipelines_config']['variables'][':variable_uuid']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamsUsernamePipelinesConfigVariablesVariableUuidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teams[':username'].pipelines_config.variables[':variable_uuid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTeamsUsernamePipelinesConfigVariablesVariableUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.teams)[':username']['pipelines_config']['variables'][':variable_uuid']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.teams)[':username']['pipelines_config']['variables'][':variable_uuid']['$get']
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
                    (typeof client.teams)[':username']['pipelines_config']['variables'][':variable_uuid']['$get']
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
                    (typeof client.teams)[':username']['pipelines_config']['variables'][':variable_uuid']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTeamsUsernamePipelinesConfigVariablesVariableUuidQueryKey>
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
              (typeof client.teams)[':username']['pipelines_config']['variables'][':variable_uuid']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsUsernamePipelinesConfigVariablesVariableUuidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamsUsernamePipelinesConfigVariablesVariableUuidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.teams[':username'].pipelines_config.variables[':variable_uuid'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutTeamsUsernamePipelinesConfigVariablesVariableUuidMutationKey() {
  return ['teams', '/teams/:username/pipelines_config/variables/:variable_uuid', 'PUT'] as const
}

export function getPutTeamsUsernamePipelinesConfigVariablesVariableUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.teams)[':username']['pipelines_config']['variables'][':variable_uuid']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.teams)[':username']['pipelines_config']['variables'][':variable_uuid']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutTeamsUsernamePipelinesConfigVariablesVariableUuidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.teams)[':username']['pipelines_config']['variables'][':variable_uuid']['$put']
      >,
    ) {
      return parseResponse(
        client.teams[':username'].pipelines_config.variables[':variable_uuid'].$put(args, options),
      )
    },
  })
}

export function usePutTeamsUsernamePipelinesConfigVariablesVariableUuid<
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
                    (typeof client.teams)[':username']['pipelines_config']['variables'][':variable_uuid']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.teams)[':username']['pipelines_config']['variables'][':variable_uuid']['$put']
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
  const mutationDefaults = getPutTeamsUsernamePipelinesConfigVariablesVariableUuidMutationOptions<
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

export function getDeleteTeamsUsernamePipelinesConfigVariablesVariableUuidMutationKey() {
  return ['teams', '/teams/:username/pipelines_config/variables/:variable_uuid', 'DELETE'] as const
}

export function getDeleteTeamsUsernamePipelinesConfigVariablesVariableUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.teams)[':username']['pipelines_config']['variables'][':variable_uuid']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.teams)[':username']['pipelines_config']['variables'][':variable_uuid']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteTeamsUsernamePipelinesConfigVariablesVariableUuidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.teams)[':username']['pipelines_config']['variables'][':variable_uuid']['$delete']
      >,
    ) {
      return parseResponse(
        client.teams[':username'].pipelines_config.variables[':variable_uuid'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteTeamsUsernamePipelinesConfigVariablesVariableUuid<
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
                      (typeof client.teams)[':username']['pipelines_config']['variables'][':variable_uuid']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.teams)[':username']['pipelines_config']['variables'][':variable_uuid']['$delete']
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
  const mutationDefaults =
    getDeleteTeamsUsernamePipelinesConfigVariablesVariableUuidMutationOptions<
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

export function getTeamsUsernameSearchCodeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.teams)[':username']['search']['code']['$get']>
  >,
) {
  return ['teams', '/teams/:username/search/code', toValue(args)] as const
}

export function getTeamsUsernameSearchCodeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.teams)[':username']['search']['code']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamsUsernameSearchCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teams[':username'].search.code.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTeamsUsernameSearchCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':username']['search']['code']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.teams)[':username']['search']['code']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teams)[':username']['search']['code']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teams)[':username']['search']['code']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTeamsUsernameSearchCodeQueryKey>
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
          Awaited<ReturnType<(typeof client.teams)[':username']['search']['code']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsUsernameSearchCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamsUsernameSearchCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.teams[':username'].search.code.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserQueryKey() {
  return ['user', '/user'] as const
}

export function getUserQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUserQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUser<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
          ReturnType<typeof getUserQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUserQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUserQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.user.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserEmailsQueryKey() {
  return ['user', '/user/emails'] as const
}

export function getUserEmailsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUserEmailsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user.emails.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUserEmails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.emails.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.emails.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.emails.$get>>>>
          >,
          ReturnType<typeof getUserEmailsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.emails.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUserEmailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUserEmailsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.user.emails.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserEmailsEmailQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user.emails)[':email']['$get']>>,
) {
  return ['user', '/user/emails/:email', toValue(args)] as const
}

export function getUserEmailsEmailQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user.emails)[':email']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserEmailsEmailQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user.emails[':email'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserEmailsEmail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.user.emails)[':email']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user.emails)[':email']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user.emails)[':email']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user.emails)[':email']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUserEmailsEmailQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.user.emails)[':email']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserEmailsEmailQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserEmailsEmailQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user.emails[':email'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserWorkspacesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.workspaces.$get>>,
) {
  return ['user', '/user/workspaces', toValue(args)] as const
}

export function getUserWorkspacesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.workspaces.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserWorkspacesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user.workspaces.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserWorkspaces<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.workspaces.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.workspaces.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user.workspaces.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user.workspaces.$get>>>
            >
          >,
          ReturnType<typeof getUserWorkspacesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.workspaces.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUserWorkspacesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserWorkspacesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user.workspaces.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserWorkspacesWorkspacePermissionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user.workspaces)[':workspace']['permission']['$get']>
  >,
) {
  return ['user', '/user/workspaces/:workspace/permission', toValue(args)] as const
}

export function getUserWorkspacesWorkspacePermissionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user.workspaces)[':workspace']['permission']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserWorkspacesWorkspacePermissionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user.workspaces[':workspace'].permission.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserWorkspacesWorkspacePermission<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user.workspaces)[':workspace']['permission']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user.workspaces)[':workspace']['permission']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.user.workspaces)[':workspace']['permission']['$get']>
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
                  ReturnType<(typeof client.user.workspaces)[':workspace']['permission']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getUserWorkspacesWorkspacePermissionQueryKey>
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
          Awaited<ReturnType<(typeof client.user.workspaces)[':workspace']['permission']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserWorkspacesWorkspacePermissionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserWorkspacesWorkspacePermissionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user.workspaces[':workspace'].permission.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserWorkspacesWorkspacePermissionsRepositoriesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.user.workspaces)[':workspace']['permissions']['repositories']['$get']
    >
  >,
) {
  return ['user', '/user/workspaces/:workspace/permissions/repositories', toValue(args)] as const
}

export function getUserWorkspacesWorkspacePermissionsRepositoriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.user.workspaces)[':workspace']['permissions']['repositories']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserWorkspacesWorkspacePermissionsRepositoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user.workspaces[':workspace'].permissions.repositories.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserWorkspacesWorkspacePermissionsRepositories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.user.workspaces)[':workspace']['permissions']['repositories']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.user.workspaces)[':workspace']['permissions']['repositories']['$get']
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
                    (typeof client.user.workspaces)[':workspace']['permissions']['repositories']['$get']
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
                    (typeof client.user.workspaces)[':workspace']['permissions']['repositories']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getUserWorkspacesWorkspacePermissionsRepositoriesQueryKey>
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
              (typeof client.user.workspaces)[':workspace']['permissions']['repositories']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserWorkspacesWorkspacePermissionsRepositoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserWorkspacesWorkspacePermissionsRepositoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user.workspaces[':workspace'].permissions.repositories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersSelectedUserQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':selected_user']['$get']>>,
) {
  return ['users', '/users/:selected_user', toValue(args)] as const
}

export function getUsersSelectedUserQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':selected_user']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersSelectedUserQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':selected_user'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersSelectedUser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':selected_user']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':selected_user']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':selected_user']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':selected_user']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersSelectedUserQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':selected_user']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersSelectedUserQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersSelectedUserQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':selected_user'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersSelectedUserGpgKeysQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':selected_user']['gpg-keys']['$get']>
  >,
) {
  return ['users', '/users/:selected_user/gpg-keys', toValue(args)] as const
}

export function getUsersSelectedUserGpgKeysQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':selected_user']['gpg-keys']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersSelectedUserGpgKeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':selected_user']['gpg-keys'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersSelectedUserGpgKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':selected_user']['gpg-keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':selected_user']['gpg-keys']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':selected_user']['gpg-keys']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':selected_user']['gpg-keys']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersSelectedUserGpgKeysQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':selected_user']['gpg-keys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersSelectedUserGpgKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersSelectedUserGpgKeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':selected_user']['gpg-keys'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUsersSelectedUserGpgKeysMutationKey() {
  return ['users', '/users/:selected_user/gpg-keys', 'POST'] as const
}

export function getPostUsersSelectedUserGpgKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':selected_user']['gpg-keys']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':selected_user']['gpg-keys']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersSelectedUserGpgKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':selected_user']['gpg-keys']['$post']>,
    ) {
      return parseResponse(client.users[':selected_user']['gpg-keys'].$post(args, options))
    },
  })
}

export function usePostUsersSelectedUserGpgKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':selected_user']['gpg-keys']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':selected_user']['gpg-keys']['$post']>,
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
  const mutationDefaults = getPostUsersSelectedUserGpgKeysMutationOptions<TError, TOnMutateResult>(
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

export function getUsersSelectedUserGpgKeysFingerprintQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':selected_user']['gpg-keys'][':fingerprint']['$get']>
  >,
) {
  return ['users', '/users/:selected_user/gpg-keys/:fingerprint', toValue(args)] as const
}

export function getUsersSelectedUserGpgKeysFingerprintQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':selected_user']['gpg-keys'][':fingerprint']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersSelectedUserGpgKeysFingerprintQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':selected_user']['gpg-keys'][':fingerprint'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersSelectedUserGpgKeysFingerprint<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.users)[':selected_user']['gpg-keys'][':fingerprint']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':selected_user']['gpg-keys'][':fingerprint']['$get']>
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
                    (typeof client.users)[':selected_user']['gpg-keys'][':fingerprint']['$get']
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
                    (typeof client.users)[':selected_user']['gpg-keys'][':fingerprint']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getUsersSelectedUserGpgKeysFingerprintQueryKey>
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
            ReturnType<(typeof client.users)[':selected_user']['gpg-keys'][':fingerprint']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersSelectedUserGpgKeysFingerprintQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersSelectedUserGpgKeysFingerprintQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':selected_user']['gpg-keys'][':fingerprint'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteUsersSelectedUserGpgKeysFingerprintMutationKey() {
  return ['users', '/users/:selected_user/gpg-keys/:fingerprint', 'DELETE'] as const
}

export function getDeleteUsersSelectedUserGpgKeysFingerprintMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)[':selected_user']['gpg-keys'][':fingerprint']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.users)[':selected_user']['gpg-keys'][':fingerprint']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersSelectedUserGpgKeysFingerprintMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':selected_user']['gpg-keys'][':fingerprint']['$delete']
      >,
    ) {
      return parseResponse(
        client.users[':selected_user']['gpg-keys'][':fingerprint'].$delete(args, options),
      )
    },
  })
}

export function useDeleteUsersSelectedUserGpgKeysFingerprint<
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
                      (typeof client.users)[':selected_user']['gpg-keys'][':fingerprint']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.users)[':selected_user']['gpg-keys'][':fingerprint']['$delete']
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
  const mutationDefaults = getDeleteUsersSelectedUserGpgKeysFingerprintMutationOptions<
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

export function getUsersSelectedUserPipelinesConfigVariablesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':selected_user']['pipelines_config']['variables']['$get']
    >
  >,
) {
  return ['users', '/users/:selected_user/pipelines_config/variables', toValue(args)] as const
}

export function getUsersSelectedUserPipelinesConfigVariablesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':selected_user']['pipelines_config']['variables']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersSelectedUserPipelinesConfigVariablesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':selected_user'].pipelines_config.variables.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersSelectedUserPipelinesConfigVariables<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':selected_user']['pipelines_config']['variables']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':selected_user']['pipelines_config']['variables']['$get']
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
                    (typeof client.users)[':selected_user']['pipelines_config']['variables']['$get']
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
                    (typeof client.users)[':selected_user']['pipelines_config']['variables']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getUsersSelectedUserPipelinesConfigVariablesQueryKey>
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
              (typeof client.users)[':selected_user']['pipelines_config']['variables']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersSelectedUserPipelinesConfigVariablesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersSelectedUserPipelinesConfigVariablesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':selected_user'].pipelines_config.variables.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUsersSelectedUserPipelinesConfigVariablesMutationKey() {
  return ['users', '/users/:selected_user/pipelines_config/variables', 'POST'] as const
}

export function getPostUsersSelectedUserPipelinesConfigVariablesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':selected_user']['pipelines_config']['variables']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.users)[':selected_user']['pipelines_config']['variables']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostUsersSelectedUserPipelinesConfigVariablesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':selected_user']['pipelines_config']['variables']['$post']
      >,
    ) {
      return parseResponse(
        client.users[':selected_user'].pipelines_config.variables.$post(args, options),
      )
    },
  })
}

export function usePostUsersSelectedUserPipelinesConfigVariables<
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
                    (typeof client.users)[':selected_user']['pipelines_config']['variables']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.users)[':selected_user']['pipelines_config']['variables']['$post']
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
  const mutationDefaults = getPostUsersSelectedUserPipelinesConfigVariablesMutationOptions<
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

export function getUsersSelectedUserPipelinesConfigVariablesVariableUuidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':selected_user']['pipelines_config']['variables'][':variable_uuid']['$get']
    >
  >,
) {
  return [
    'users',
    '/users/:selected_user/pipelines_config/variables/:variable_uuid',
    toValue(args),
  ] as const
}

export function getUsersSelectedUserPipelinesConfigVariablesVariableUuidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':selected_user']['pipelines_config']['variables'][':variable_uuid']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getUsersSelectedUserPipelinesConfigVariablesVariableUuidQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':selected_user'].pipelines_config.variables[':variable_uuid'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useUsersSelectedUserPipelinesConfigVariablesVariableUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':selected_user']['pipelines_config']['variables'][':variable_uuid']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':selected_user']['pipelines_config']['variables'][':variable_uuid']['$get']
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
                    (typeof client.users)[':selected_user']['pipelines_config']['variables'][':variable_uuid']['$get']
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
                    (typeof client.users)[':selected_user']['pipelines_config']['variables'][':variable_uuid']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getUsersSelectedUserPipelinesConfigVariablesVariableUuidQueryKey>
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
              (typeof client.users)[':selected_user']['pipelines_config']['variables'][':variable_uuid']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersSelectedUserPipelinesConfigVariablesVariableUuidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getUsersSelectedUserPipelinesConfigVariablesVariableUuidQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':selected_user'].pipelines_config.variables[':variable_uuid'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutUsersSelectedUserPipelinesConfigVariablesVariableUuidMutationKey() {
  return [
    'users',
    '/users/:selected_user/pipelines_config/variables/:variable_uuid',
    'PUT',
  ] as const
}

export function getPutUsersSelectedUserPipelinesConfigVariablesVariableUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.users)[':selected_user']['pipelines_config']['variables'][':variable_uuid']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.users)[':selected_user']['pipelines_config']['variables'][':variable_uuid']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutUsersSelectedUserPipelinesConfigVariablesVariableUuidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':selected_user']['pipelines_config']['variables'][':variable_uuid']['$put']
      >,
    ) {
      return parseResponse(
        client.users[':selected_user'].pipelines_config.variables[':variable_uuid'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutUsersSelectedUserPipelinesConfigVariablesVariableUuid<
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
                    (typeof client.users)[':selected_user']['pipelines_config']['variables'][':variable_uuid']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.users)[':selected_user']['pipelines_config']['variables'][':variable_uuid']['$put']
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
  const mutationDefaults =
    getPutUsersSelectedUserPipelinesConfigVariablesVariableUuidMutationOptions<
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

export function getDeleteUsersSelectedUserPipelinesConfigVariablesVariableUuidMutationKey() {
  return [
    'users',
    '/users/:selected_user/pipelines_config/variables/:variable_uuid',
    'DELETE',
  ] as const
}

export function getDeleteUsersSelectedUserPipelinesConfigVariablesVariableUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)[':selected_user']['pipelines_config']['variables'][':variable_uuid']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.users)[':selected_user']['pipelines_config']['variables'][':variable_uuid']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersSelectedUserPipelinesConfigVariablesVariableUuidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':selected_user']['pipelines_config']['variables'][':variable_uuid']['$delete']
      >,
    ) {
      return parseResponse(
        client.users[':selected_user'].pipelines_config.variables[':variable_uuid'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteUsersSelectedUserPipelinesConfigVariablesVariableUuid<
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
                      (typeof client.users)[':selected_user']['pipelines_config']['variables'][':variable_uuid']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.users)[':selected_user']['pipelines_config']['variables'][':variable_uuid']['$delete']
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
  const mutationDefaults =
    getDeleteUsersSelectedUserPipelinesConfigVariablesVariableUuidMutationOptions<
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

export function getUsersSelectedUserPropertiesAppKeyPropertyNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':selected_user']['properties'][':app_key'][':property_name']['$get']
    >
  >,
) {
  return [
    'users',
    '/users/:selected_user/properties/:app_key/:property_name',
    toValue(args),
  ] as const
}

export function getUsersSelectedUserPropertiesAppKeyPropertyNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':selected_user']['properties'][':app_key'][':property_name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersSelectedUserPropertiesAppKeyPropertyNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':selected_user'].properties[':app_key'][':property_name'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useUsersSelectedUserPropertiesAppKeyPropertyName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.users)[':selected_user']['properties'][':app_key'][':property_name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.users)[':selected_user']['properties'][':app_key'][':property_name']['$get']
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
                    (typeof client.users)[':selected_user']['properties'][':app_key'][':property_name']['$get']
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
                    (typeof client.users)[':selected_user']['properties'][':app_key'][':property_name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getUsersSelectedUserPropertiesAppKeyPropertyNameQueryKey>
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
              (typeof client.users)[':selected_user']['properties'][':app_key'][':property_name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersSelectedUserPropertiesAppKeyPropertyNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersSelectedUserPropertiesAppKeyPropertyNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':selected_user'].properties[':app_key'][':property_name'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutUsersSelectedUserPropertiesAppKeyPropertyNameMutationKey() {
  return ['users', '/users/:selected_user/properties/:app_key/:property_name', 'PUT'] as const
}

export function getPutUsersSelectedUserPropertiesAppKeyPropertyNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)[':selected_user']['properties'][':app_key'][':property_name']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.users)[':selected_user']['properties'][':app_key'][':property_name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutUsersSelectedUserPropertiesAppKeyPropertyNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':selected_user']['properties'][':app_key'][':property_name']['$put']
      >,
    ) {
      return parseResponse(
        client.users[':selected_user'].properties[':app_key'][':property_name'].$put(args, options),
      )
    },
  })
}

export function usePutUsersSelectedUserPropertiesAppKeyPropertyName<
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
                      (typeof client.users)[':selected_user']['properties'][':app_key'][':property_name']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.users)[':selected_user']['properties'][':app_key'][':property_name']['$put']
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
  const mutationDefaults = getPutUsersSelectedUserPropertiesAppKeyPropertyNameMutationOptions<
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

export function getDeleteUsersSelectedUserPropertiesAppKeyPropertyNameMutationKey() {
  return ['users', '/users/:selected_user/properties/:app_key/:property_name', 'DELETE'] as const
}

export function getDeleteUsersSelectedUserPropertiesAppKeyPropertyNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.users)[':selected_user']['properties'][':app_key'][':property_name']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.users)[':selected_user']['properties'][':app_key'][':property_name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersSelectedUserPropertiesAppKeyPropertyNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':selected_user']['properties'][':app_key'][':property_name']['$delete']
      >,
    ) {
      return parseResponse(
        client.users[':selected_user'].properties[':app_key'][':property_name'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteUsersSelectedUserPropertiesAppKeyPropertyName<
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
                      (typeof client.users)[':selected_user']['properties'][':app_key'][':property_name']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.users)[':selected_user']['properties'][':app_key'][':property_name']['$delete']
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
  const mutationDefaults = getDeleteUsersSelectedUserPropertiesAppKeyPropertyNameMutationOptions<
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

export function getUsersSelectedUserSearchCodeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':selected_user']['search']['code']['$get']>
  >,
) {
  return ['users', '/users/:selected_user/search/code', toValue(args)] as const
}

export function getUsersSelectedUserSearchCodeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':selected_user']['search']['code']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersSelectedUserSearchCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':selected_user'].search.code.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersSelectedUserSearchCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':selected_user']['search']['code']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':selected_user']['search']['code']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.users)[':selected_user']['search']['code']['$get']>
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
                  ReturnType<(typeof client.users)[':selected_user']['search']['code']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getUsersSelectedUserSearchCodeQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':selected_user']['search']['code']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersSelectedUserSearchCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersSelectedUserSearchCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':selected_user'].search.code.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersSelectedUserSshKeysQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':selected_user']['ssh-keys']['$get']>
  >,
) {
  return ['users', '/users/:selected_user/ssh-keys', toValue(args)] as const
}

export function getUsersSelectedUserSshKeysQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':selected_user']['ssh-keys']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersSelectedUserSshKeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':selected_user']['ssh-keys'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersSelectedUserSshKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':selected_user']['ssh-keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':selected_user']['ssh-keys']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':selected_user']['ssh-keys']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':selected_user']['ssh-keys']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersSelectedUserSshKeysQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':selected_user']['ssh-keys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersSelectedUserSshKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersSelectedUserSshKeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':selected_user']['ssh-keys'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUsersSelectedUserSshKeysMutationKey() {
  return ['users', '/users/:selected_user/ssh-keys', 'POST'] as const
}

export function getPostUsersSelectedUserSshKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':selected_user']['ssh-keys']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':selected_user']['ssh-keys']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersSelectedUserSshKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':selected_user']['ssh-keys']['$post']>,
    ) {
      return parseResponse(client.users[':selected_user']['ssh-keys'].$post(args, options))
    },
  })
}

export function usePostUsersSelectedUserSshKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':selected_user']['ssh-keys']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':selected_user']['ssh-keys']['$post']>,
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
  const mutationDefaults = getPostUsersSelectedUserSshKeysMutationOptions<TError, TOnMutateResult>(
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

export function getUsersSelectedUserSshKeysKeyIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':selected_user']['ssh-keys'][':key_id']['$get']>
  >,
) {
  return ['users', '/users/:selected_user/ssh-keys/:key_id', toValue(args)] as const
}

export function getUsersSelectedUserSshKeysKeyIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':selected_user']['ssh-keys'][':key_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersSelectedUserSshKeysKeyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':selected_user']['ssh-keys'][':key_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersSelectedUserSshKeysKeyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':selected_user']['ssh-keys'][':key_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':selected_user']['ssh-keys'][':key_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.users)[':selected_user']['ssh-keys'][':key_id']['$get']>
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
                  ReturnType<(typeof client.users)[':selected_user']['ssh-keys'][':key_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getUsersSelectedUserSshKeysKeyIdQueryKey>
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
            ReturnType<(typeof client.users)[':selected_user']['ssh-keys'][':key_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersSelectedUserSshKeysKeyIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersSelectedUserSshKeysKeyIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':selected_user']['ssh-keys'][':key_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutUsersSelectedUserSshKeysKeyIdMutationKey() {
  return ['users', '/users/:selected_user/ssh-keys/:key_id', 'PUT'] as const
}

export function getPutUsersSelectedUserSshKeysKeyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.users)[':selected_user']['ssh-keys'][':key_id']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':selected_user']['ssh-keys'][':key_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUsersSelectedUserSshKeysKeyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':selected_user']['ssh-keys'][':key_id']['$put']
      >,
    ) {
      return parseResponse(
        client.users[':selected_user']['ssh-keys'][':key_id'].$put(args, options),
      )
    },
  })
}

export function usePutUsersSelectedUserSshKeysKeyId<
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
                  ReturnType<(typeof client.users)[':selected_user']['ssh-keys'][':key_id']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':selected_user']['ssh-keys'][':key_id']['$put']>,
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
  const mutationDefaults = getPutUsersSelectedUserSshKeysKeyIdMutationOptions<
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

export function getDeleteUsersSelectedUserSshKeysKeyIdMutationKey() {
  return ['users', '/users/:selected_user/ssh-keys/:key_id', 'DELETE'] as const
}

export function getDeleteUsersSelectedUserSshKeysKeyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.users)[':selected_user']['ssh-keys'][':key_id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.users)[':selected_user']['ssh-keys'][':key_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersSelectedUserSshKeysKeyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.users)[':selected_user']['ssh-keys'][':key_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.users[':selected_user']['ssh-keys'][':key_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteUsersSelectedUserSshKeysKeyId<
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
                      (typeof client.users)[':selected_user']['ssh-keys'][':key_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.users)[':selected_user']['ssh-keys'][':key_id']['$delete']
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
  const mutationDefaults = getDeleteUsersSelectedUserSshKeysKeyIdMutationOptions<
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

export function getWorkspacesWorkspaceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.workspaces)[':workspace']['$get']>>,
) {
  return ['workspaces', '/workspaces/:workspace', toValue(args)] as const
}

export function getWorkspacesWorkspaceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.workspaces)[':workspace']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkspacesWorkspaceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workspaces[':workspace'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkspacesWorkspace<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.workspaces)[':workspace']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.workspaces)[':workspace']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workspaces)[':workspace']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workspaces)[':workspace']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWorkspacesWorkspaceQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.workspaces)[':workspace']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspacesWorkspaceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkspacesWorkspaceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.workspaces[':workspace'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWorkspacesWorkspaceCodesearchMutationKey() {
  return ['workspaces', '/workspaces/:workspace/codesearch', 'POST'] as const
}

export function getPostWorkspacesWorkspaceCodesearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workspaces)[':workspace']['codesearch']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.workspaces)[':workspace']['codesearch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWorkspacesWorkspaceCodesearchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.workspaces)[':workspace']['codesearch']['$post']>,
    ) {
      return parseResponse(client.workspaces[':workspace'].codesearch.$post(args, options))
    },
  })
}

export function usePostWorkspacesWorkspaceCodesearch<
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
                Awaited<ReturnType<(typeof client.workspaces)[':workspace']['codesearch']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.workspaces)[':workspace']['codesearch']['$post']>,
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
  const mutationDefaults = getPostWorkspacesWorkspaceCodesearchMutationOptions<
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

export function getWorkspacesWorkspaceHooksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.workspaces)[':workspace']['hooks']['$get']>
  >,
) {
  return ['workspaces', '/workspaces/:workspace/hooks', toValue(args)] as const
}

export function getWorkspacesWorkspaceHooksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.workspaces)[':workspace']['hooks']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkspacesWorkspaceHooksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workspaces[':workspace'].hooks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkspacesWorkspaceHooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workspaces)[':workspace']['hooks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.workspaces)[':workspace']['hooks']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workspaces)[':workspace']['hooks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workspaces)[':workspace']['hooks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWorkspacesWorkspaceHooksQueryKey>
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
          Awaited<ReturnType<(typeof client.workspaces)[':workspace']['hooks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspacesWorkspaceHooksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkspacesWorkspaceHooksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.workspaces[':workspace'].hooks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWorkspacesWorkspaceHooksMutationKey() {
  return ['workspaces', '/workspaces/:workspace/hooks', 'POST'] as const
}

export function getPostWorkspacesWorkspaceHooksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workspaces)[':workspace']['hooks']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.workspaces)[':workspace']['hooks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWorkspacesWorkspaceHooksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.workspaces)[':workspace']['hooks']['$post']>,
    ) {
      return parseResponse(client.workspaces[':workspace'].hooks.$post(args, options))
    },
  })
}

export function usePostWorkspacesWorkspaceHooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workspaces)[':workspace']['hooks']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.workspaces)[':workspace']['hooks']['$post']>,
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
  const mutationDefaults = getPostWorkspacesWorkspaceHooksMutationOptions<TError, TOnMutateResult>(
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

export function getWorkspacesWorkspaceHooksUidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.workspaces)[':workspace']['hooks'][':uid']['$get']>
  >,
) {
  return ['workspaces', '/workspaces/:workspace/hooks/:uid', toValue(args)] as const
}

export function getWorkspacesWorkspaceHooksUidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.workspaces)[':workspace']['hooks'][':uid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkspacesWorkspaceHooksUidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workspaces[':workspace'].hooks[':uid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkspacesWorkspaceHooksUid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workspaces)[':workspace']['hooks'][':uid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.workspaces)[':workspace']['hooks'][':uid']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.workspaces)[':workspace']['hooks'][':uid']['$get']>
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
                  ReturnType<(typeof client.workspaces)[':workspace']['hooks'][':uid']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getWorkspacesWorkspaceHooksUidQueryKey>
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
          Awaited<ReturnType<(typeof client.workspaces)[':workspace']['hooks'][':uid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspacesWorkspaceHooksUidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkspacesWorkspaceHooksUidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.workspaces[':workspace'].hooks[':uid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutWorkspacesWorkspaceHooksUidMutationKey() {
  return ['workspaces', '/workspaces/:workspace/hooks/:uid', 'PUT'] as const
}

export function getPutWorkspacesWorkspaceHooksUidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workspaces)[':workspace']['hooks'][':uid']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.workspaces)[':workspace']['hooks'][':uid']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWorkspacesWorkspaceHooksUidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.workspaces)[':workspace']['hooks'][':uid']['$put']>,
    ) {
      return parseResponse(client.workspaces[':workspace'].hooks[':uid'].$put(args, options))
    },
  })
}

export function usePutWorkspacesWorkspaceHooksUid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.workspaces)[':workspace']['hooks'][':uid']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.workspaces)[':workspace']['hooks'][':uid']['$put']>,
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
  const mutationDefaults = getPutWorkspacesWorkspaceHooksUidMutationOptions<
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

export function getDeleteWorkspacesWorkspaceHooksUidMutationKey() {
  return ['workspaces', '/workspaces/:workspace/hooks/:uid', 'DELETE'] as const
}

export function getDeleteWorkspacesWorkspaceHooksUidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.workspaces)[':workspace']['hooks'][':uid']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.workspaces)[':workspace']['hooks'][':uid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWorkspacesWorkspaceHooksUidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.workspaces)[':workspace']['hooks'][':uid']['$delete']>,
    ) {
      return parseResponse(client.workspaces[':workspace'].hooks[':uid'].$delete(args, options))
    },
  })
}

export function useDeleteWorkspacesWorkspaceHooksUid<
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
                    ReturnType<(typeof client.workspaces)[':workspace']['hooks'][':uid']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.workspaces)[':workspace']['hooks'][':uid']['$delete']>,
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
  const mutationDefaults = getDeleteWorkspacesWorkspaceHooksUidMutationOptions<
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

export function getWorkspacesWorkspaceMembersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.workspaces)[':workspace']['members']['$get']>
  >,
) {
  return ['workspaces', '/workspaces/:workspace/members', toValue(args)] as const
}

export function getWorkspacesWorkspaceMembersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.workspaces)[':workspace']['members']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkspacesWorkspaceMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workspaces[':workspace'].members.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkspacesWorkspaceMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workspaces)[':workspace']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.workspaces)[':workspace']['members']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workspaces)[':workspace']['members']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workspaces)[':workspace']['members']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWorkspacesWorkspaceMembersQueryKey>
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
          Awaited<ReturnType<(typeof client.workspaces)[':workspace']['members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspacesWorkspaceMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkspacesWorkspaceMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.workspaces[':workspace'].members.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWorkspacesWorkspaceMembersMemberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.workspaces)[':workspace']['members'][':member']['$get']>
  >,
) {
  return ['workspaces', '/workspaces/:workspace/members/:member', toValue(args)] as const
}

export function getWorkspacesWorkspaceMembersMemberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.workspaces)[':workspace']['members'][':member']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkspacesWorkspaceMembersMemberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workspaces[':workspace'].members[':member'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkspacesWorkspaceMembersMember<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workspaces)[':workspace']['members'][':member']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.workspaces)[':workspace']['members'][':member']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.workspaces)[':workspace']['members'][':member']['$get']>
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
                  ReturnType<(typeof client.workspaces)[':workspace']['members'][':member']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getWorkspacesWorkspaceMembersMemberQueryKey>
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
            ReturnType<(typeof client.workspaces)[':workspace']['members'][':member']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspacesWorkspaceMembersMemberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkspacesWorkspaceMembersMemberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.workspaces[':workspace'].members[':member'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWorkspacesWorkspacePermissionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.workspaces)[':workspace']['permissions']['$get']>
  >,
) {
  return ['workspaces', '/workspaces/:workspace/permissions', toValue(args)] as const
}

export function getWorkspacesWorkspacePermissionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.workspaces)[':workspace']['permissions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkspacesWorkspacePermissionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workspaces[':workspace'].permissions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkspacesWorkspacePermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workspaces)[':workspace']['permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.workspaces)[':workspace']['permissions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workspaces)[':workspace']['permissions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workspaces)[':workspace']['permissions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWorkspacesWorkspacePermissionsQueryKey>
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
          Awaited<ReturnType<(typeof client.workspaces)[':workspace']['permissions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspacesWorkspacePermissionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkspacesWorkspacePermissionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.workspaces[':workspace'].permissions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWorkspacesWorkspacePermissionsRepositoriesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workspaces)[':workspace']['permissions']['repositories']['$get']
    >
  >,
) {
  return ['workspaces', '/workspaces/:workspace/permissions/repositories', toValue(args)] as const
}

export function getWorkspacesWorkspacePermissionsRepositoriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workspaces)[':workspace']['permissions']['repositories']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkspacesWorkspacePermissionsRepositoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workspaces[':workspace'].permissions.repositories.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkspacesWorkspacePermissionsRepositories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.workspaces)[':workspace']['permissions']['repositories']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workspaces)[':workspace']['permissions']['repositories']['$get']
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
                    (typeof client.workspaces)[':workspace']['permissions']['repositories']['$get']
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
                    (typeof client.workspaces)[':workspace']['permissions']['repositories']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWorkspacesWorkspacePermissionsRepositoriesQueryKey>
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
              (typeof client.workspaces)[':workspace']['permissions']['repositories']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspacesWorkspacePermissionsRepositoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkspacesWorkspacePermissionsRepositoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.workspaces[':workspace'].permissions.repositories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWorkspacesWorkspacePermissionsRepositoriesRepoSlugQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workspaces)[':workspace']['permissions']['repositories'][':repo_slug']['$get']
    >
  >,
) {
  return [
    'workspaces',
    '/workspaces/:workspace/permissions/repositories/:repo_slug',
    toValue(args),
  ] as const
}

export function getWorkspacesWorkspacePermissionsRepositoriesRepoSlugQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workspaces)[':workspace']['permissions']['repositories'][':repo_slug']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkspacesWorkspacePermissionsRepositoriesRepoSlugQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workspaces[':workspace'].permissions.repositories[':repo_slug'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkspacesWorkspacePermissionsRepositoriesRepoSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.workspaces)[':workspace']['permissions']['repositories'][':repo_slug']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workspaces)[':workspace']['permissions']['repositories'][':repo_slug']['$get']
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
                    (typeof client.workspaces)[':workspace']['permissions']['repositories'][':repo_slug']['$get']
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
                    (typeof client.workspaces)[':workspace']['permissions']['repositories'][':repo_slug']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWorkspacesWorkspacePermissionsRepositoriesRepoSlugQueryKey>
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
              (typeof client.workspaces)[':workspace']['permissions']['repositories'][':repo_slug']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspacesWorkspacePermissionsRepositoriesRepoSlugQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkspacesWorkspacePermissionsRepositoriesRepoSlugQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.workspaces[':workspace'].permissions.repositories[':repo_slug'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getWorkspacesWorkspacePipelinesConfigIdentityOidcWellKnownOpenidConfigurationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workspaces)[':workspace']['pipelines-config']['identity']['oidc']['.well-known']['openid-configuration']['$get']
    >
  >,
) {
  return [
    'workspaces',
    '/workspaces/:workspace/pipelines-config/identity/oidc/.well-known/openid-configuration',
    toValue(args),
  ] as const
}

export function getWorkspacesWorkspacePipelinesConfigIdentityOidcWellKnownOpenidConfigurationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workspaces)[':workspace']['pipelines-config']['identity']['oidc']['.well-known']['openid-configuration']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getWorkspacesWorkspacePipelinesConfigIdentityOidcWellKnownOpenidConfigurationQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workspaces[':workspace']['pipelines-config'].identity.oidc['.well-known'][
          'openid-configuration'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useWorkspacesWorkspacePipelinesConfigIdentityOidcWellKnownOpenidConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.workspaces)[':workspace']['pipelines-config']['identity']['oidc']['.well-known']['openid-configuration']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workspaces)[':workspace']['pipelines-config']['identity']['oidc']['.well-known']['openid-configuration']['$get']
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
                    (typeof client.workspaces)[':workspace']['pipelines-config']['identity']['oidc']['.well-known']['openid-configuration']['$get']
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
                    (typeof client.workspaces)[':workspace']['pipelines-config']['identity']['oidc']['.well-known']['openid-configuration']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getWorkspacesWorkspacePipelinesConfigIdentityOidcWellKnownOpenidConfigurationQueryKey
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
              (typeof client.workspaces)[':workspace']['pipelines-config']['identity']['oidc']['.well-known']['openid-configuration']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getWorkspacesWorkspacePipelinesConfigIdentityOidcWellKnownOpenidConfigurationQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getWorkspacesWorkspacePipelinesConfigIdentityOidcWellKnownOpenidConfigurationQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.workspaces[':workspace']['pipelines-config'].identity.oidc['.well-known'][
            'openid-configuration'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workspaces)[':workspace']['pipelines-config']['identity']['oidc']['keys.json']['$get']
    >
  >,
) {
  return [
    'workspaces',
    '/workspaces/:workspace/pipelines-config/identity/oidc/keys.json',
    toValue(args),
  ] as const
}

export function getWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workspaces)[':workspace']['pipelines-config']['identity']['oidc']['keys.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJsonQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workspaces[':workspace']['pipelines-config'].identity.oidc['keys.json'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.workspaces)[':workspace']['pipelines-config']['identity']['oidc']['keys.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workspaces)[':workspace']['pipelines-config']['identity']['oidc']['keys.json']['$get']
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
                    (typeof client.workspaces)[':workspace']['pipelines-config']['identity']['oidc']['keys.json']['$get']
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
                    (typeof client.workspaces)[':workspace']['pipelines-config']['identity']['oidc']['keys.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJsonQueryKey>
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
              (typeof client.workspaces)[':workspace']['pipelines-config']['identity']['oidc']['keys.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJsonQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.workspaces[':workspace']['pipelines-config'].identity.oidc['keys.json'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getWorkspacesWorkspacePipelinesConfigRunnersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workspaces)[':workspace']['pipelines-config']['runners']['$get']
    >
  >,
) {
  return ['workspaces', '/workspaces/:workspace/pipelines-config/runners', toValue(args)] as const
}

export function getWorkspacesWorkspacePipelinesConfigRunnersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workspaces)[':workspace']['pipelines-config']['runners']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkspacesWorkspacePipelinesConfigRunnersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workspaces[':workspace']['pipelines-config'].runners.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkspacesWorkspacePipelinesConfigRunners<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.workspaces)[':workspace']['pipelines-config']['runners']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workspaces)[':workspace']['pipelines-config']['runners']['$get']
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
                    (typeof client.workspaces)[':workspace']['pipelines-config']['runners']['$get']
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
                    (typeof client.workspaces)[':workspace']['pipelines-config']['runners']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWorkspacesWorkspacePipelinesConfigRunnersQueryKey>
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
              (typeof client.workspaces)[':workspace']['pipelines-config']['runners']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspacesWorkspacePipelinesConfigRunnersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkspacesWorkspacePipelinesConfigRunnersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.workspaces[':workspace']['pipelines-config'].runners.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWorkspacesWorkspacePipelinesConfigRunnersMutationKey() {
  return ['workspaces', '/workspaces/:workspace/pipelines-config/runners', 'POST'] as const
}

export function getPostWorkspacesWorkspacePipelinesConfigRunnersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.workspaces)[':workspace']['pipelines-config']['runners']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.workspaces)[':workspace']['pipelines-config']['runners']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostWorkspacesWorkspacePipelinesConfigRunnersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.workspaces)[':workspace']['pipelines-config']['runners']['$post']
      >,
    ) {
      return parseResponse(
        client.workspaces[':workspace']['pipelines-config'].runners.$post(args, options),
      )
    },
  })
}

export function usePostWorkspacesWorkspacePipelinesConfigRunners<
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
                    (typeof client.workspaces)[':workspace']['pipelines-config']['runners']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.workspaces)[':workspace']['pipelines-config']['runners']['$post']
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
  const mutationDefaults = getPostWorkspacesWorkspacePipelinesConfigRunnersMutationOptions<
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

export function getWorkspacesWorkspacePipelinesConfigRunnersRunnerUuidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workspaces)[':workspace']['pipelines-config']['runners'][':runner_uuid']['$get']
    >
  >,
) {
  return [
    'workspaces',
    '/workspaces/:workspace/pipelines-config/runners/:runner_uuid',
    toValue(args),
  ] as const
}

export function getWorkspacesWorkspacePipelinesConfigRunnersRunnerUuidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workspaces)[':workspace']['pipelines-config']['runners'][':runner_uuid']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkspacesWorkspacePipelinesConfigRunnersRunnerUuidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workspaces[':workspace']['pipelines-config'].runners[':runner_uuid'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useWorkspacesWorkspacePipelinesConfigRunnersRunnerUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.workspaces)[':workspace']['pipelines-config']['runners'][':runner_uuid']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workspaces)[':workspace']['pipelines-config']['runners'][':runner_uuid']['$get']
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
                    (typeof client.workspaces)[':workspace']['pipelines-config']['runners'][':runner_uuid']['$get']
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
                    (typeof client.workspaces)[':workspace']['pipelines-config']['runners'][':runner_uuid']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWorkspacesWorkspacePipelinesConfigRunnersRunnerUuidQueryKey>
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
              (typeof client.workspaces)[':workspace']['pipelines-config']['runners'][':runner_uuid']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspacesWorkspacePipelinesConfigRunnersRunnerUuidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getWorkspacesWorkspacePipelinesConfigRunnersRunnerUuidQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.workspaces[':workspace']['pipelines-config'].runners[':runner_uuid'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutWorkspacesWorkspacePipelinesConfigRunnersRunnerUuidMutationKey() {
  return [
    'workspaces',
    '/workspaces/:workspace/pipelines-config/runners/:runner_uuid',
    'PUT',
  ] as const
}

export function getPutWorkspacesWorkspacePipelinesConfigRunnersRunnerUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.workspaces)[':workspace']['pipelines-config']['runners'][':runner_uuid']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.workspaces)[':workspace']['pipelines-config']['runners'][':runner_uuid']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutWorkspacesWorkspacePipelinesConfigRunnersRunnerUuidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.workspaces)[':workspace']['pipelines-config']['runners'][':runner_uuid']['$put']
      >,
    ) {
      return parseResponse(
        client.workspaces[':workspace']['pipelines-config'].runners[':runner_uuid'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutWorkspacesWorkspacePipelinesConfigRunnersRunnerUuid<
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
                    (typeof client.workspaces)[':workspace']['pipelines-config']['runners'][':runner_uuid']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.workspaces)[':workspace']['pipelines-config']['runners'][':runner_uuid']['$put']
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
  const mutationDefaults = getPutWorkspacesWorkspacePipelinesConfigRunnersRunnerUuidMutationOptions<
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

export function getDeleteWorkspacesWorkspacePipelinesConfigRunnersRunnerUuidMutationKey() {
  return [
    'workspaces',
    '/workspaces/:workspace/pipelines-config/runners/:runner_uuid',
    'DELETE',
  ] as const
}

export function getDeleteWorkspacesWorkspacePipelinesConfigRunnersRunnerUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workspaces)[':workspace']['pipelines-config']['runners'][':runner_uuid']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.workspaces)[':workspace']['pipelines-config']['runners'][':runner_uuid']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteWorkspacesWorkspacePipelinesConfigRunnersRunnerUuidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.workspaces)[':workspace']['pipelines-config']['runners'][':runner_uuid']['$delete']
      >,
    ) {
      return parseResponse(
        client.workspaces[':workspace']['pipelines-config'].runners[':runner_uuid'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteWorkspacesWorkspacePipelinesConfigRunnersRunnerUuid<
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
                      (typeof client.workspaces)[':workspace']['pipelines-config']['runners'][':runner_uuid']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.workspaces)[':workspace']['pipelines-config']['runners'][':runner_uuid']['$delete']
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
  const mutationDefaults =
    getDeleteWorkspacesWorkspacePipelinesConfigRunnersRunnerUuidMutationOptions<
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

export function getWorkspacesWorkspacePipelinesConfigVariablesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workspaces)[':workspace']['pipelines-config']['variables']['$get']
    >
  >,
) {
  return ['workspaces', '/workspaces/:workspace/pipelines-config/variables', toValue(args)] as const
}

export function getWorkspacesWorkspacePipelinesConfigVariablesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workspaces)[':workspace']['pipelines-config']['variables']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkspacesWorkspacePipelinesConfigVariablesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workspaces[':workspace']['pipelines-config'].variables.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkspacesWorkspacePipelinesConfigVariables<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.workspaces)[':workspace']['pipelines-config']['variables']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workspaces)[':workspace']['pipelines-config']['variables']['$get']
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
                    (typeof client.workspaces)[':workspace']['pipelines-config']['variables']['$get']
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
                    (typeof client.workspaces)[':workspace']['pipelines-config']['variables']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWorkspacesWorkspacePipelinesConfigVariablesQueryKey>
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
              (typeof client.workspaces)[':workspace']['pipelines-config']['variables']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspacesWorkspacePipelinesConfigVariablesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkspacesWorkspacePipelinesConfigVariablesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.workspaces[':workspace']['pipelines-config'].variables.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWorkspacesWorkspacePipelinesConfigVariablesMutationKey() {
  return ['workspaces', '/workspaces/:workspace/pipelines-config/variables', 'POST'] as const
}

export function getPostWorkspacesWorkspacePipelinesConfigVariablesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.workspaces)[':workspace']['pipelines-config']['variables']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.workspaces)[':workspace']['pipelines-config']['variables']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostWorkspacesWorkspacePipelinesConfigVariablesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.workspaces)[':workspace']['pipelines-config']['variables']['$post']
      >,
    ) {
      return parseResponse(
        client.workspaces[':workspace']['pipelines-config'].variables.$post(args, options),
      )
    },
  })
}

export function usePostWorkspacesWorkspacePipelinesConfigVariables<
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
                    (typeof client.workspaces)[':workspace']['pipelines-config']['variables']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.workspaces)[':workspace']['pipelines-config']['variables']['$post']
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
  const mutationDefaults = getPostWorkspacesWorkspacePipelinesConfigVariablesMutationOptions<
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

export function getWorkspacesWorkspacePipelinesConfigVariablesVariableUuidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workspaces)[':workspace']['pipelines-config']['variables'][':variable_uuid']['$get']
    >
  >,
) {
  return [
    'workspaces',
    '/workspaces/:workspace/pipelines-config/variables/:variable_uuid',
    toValue(args),
  ] as const
}

export function getWorkspacesWorkspacePipelinesConfigVariablesVariableUuidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workspaces)[':workspace']['pipelines-config']['variables'][':variable_uuid']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getWorkspacesWorkspacePipelinesConfigVariablesVariableUuidQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workspaces[':workspace']['pipelines-config'].variables[':variable_uuid'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useWorkspacesWorkspacePipelinesConfigVariablesVariableUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.workspaces)[':workspace']['pipelines-config']['variables'][':variable_uuid']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workspaces)[':workspace']['pipelines-config']['variables'][':variable_uuid']['$get']
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
                    (typeof client.workspaces)[':workspace']['pipelines-config']['variables'][':variable_uuid']['$get']
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
                    (typeof client.workspaces)[':workspace']['pipelines-config']['variables'][':variable_uuid']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWorkspacesWorkspacePipelinesConfigVariablesVariableUuidQueryKey>
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
              (typeof client.workspaces)[':workspace']['pipelines-config']['variables'][':variable_uuid']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspacesWorkspacePipelinesConfigVariablesVariableUuidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getWorkspacesWorkspacePipelinesConfigVariablesVariableUuidQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.workspaces[':workspace']['pipelines-config'].variables[':variable_uuid'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutWorkspacesWorkspacePipelinesConfigVariablesVariableUuidMutationKey() {
  return [
    'workspaces',
    '/workspaces/:workspace/pipelines-config/variables/:variable_uuid',
    'PUT',
  ] as const
}

export function getPutWorkspacesWorkspacePipelinesConfigVariablesVariableUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.workspaces)[':workspace']['pipelines-config']['variables'][':variable_uuid']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.workspaces)[':workspace']['pipelines-config']['variables'][':variable_uuid']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutWorkspacesWorkspacePipelinesConfigVariablesVariableUuidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.workspaces)[':workspace']['pipelines-config']['variables'][':variable_uuid']['$put']
      >,
    ) {
      return parseResponse(
        client.workspaces[':workspace']['pipelines-config'].variables[':variable_uuid'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutWorkspacesWorkspacePipelinesConfigVariablesVariableUuid<
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
                    (typeof client.workspaces)[':workspace']['pipelines-config']['variables'][':variable_uuid']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.workspaces)[':workspace']['pipelines-config']['variables'][':variable_uuid']['$put']
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
  const mutationDefaults =
    getPutWorkspacesWorkspacePipelinesConfigVariablesVariableUuidMutationOptions<
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

export function getDeleteWorkspacesWorkspacePipelinesConfigVariablesVariableUuidMutationKey() {
  return [
    'workspaces',
    '/workspaces/:workspace/pipelines-config/variables/:variable_uuid',
    'DELETE',
  ] as const
}

export function getDeleteWorkspacesWorkspacePipelinesConfigVariablesVariableUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workspaces)[':workspace']['pipelines-config']['variables'][':variable_uuid']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.workspaces)[':workspace']['pipelines-config']['variables'][':variable_uuid']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteWorkspacesWorkspacePipelinesConfigVariablesVariableUuidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.workspaces)[':workspace']['pipelines-config']['variables'][':variable_uuid']['$delete']
      >,
    ) {
      return parseResponse(
        client.workspaces[':workspace']['pipelines-config'].variables[':variable_uuid'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteWorkspacesWorkspacePipelinesConfigVariablesVariableUuid<
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
                      (typeof client.workspaces)[':workspace']['pipelines-config']['variables'][':variable_uuid']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.workspaces)[':workspace']['pipelines-config']['variables'][':variable_uuid']['$delete']
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
  const mutationDefaults =
    getDeleteWorkspacesWorkspacePipelinesConfigVariablesVariableUuidMutationOptions<
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

export function getWorkspacesWorkspaceProjectsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.workspaces)[':workspace']['projects']['$get']>
  >,
) {
  return ['workspaces', '/workspaces/:workspace/projects', toValue(args)] as const
}

export function getWorkspacesWorkspaceProjectsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.workspaces)[':workspace']['projects']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkspacesWorkspaceProjectsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workspaces[':workspace'].projects.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkspacesWorkspaceProjects<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workspaces)[':workspace']['projects']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.workspaces)[':workspace']['projects']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workspaces)[':workspace']['projects']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workspaces)[':workspace']['projects']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWorkspacesWorkspaceProjectsQueryKey>
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
          Awaited<ReturnType<(typeof client.workspaces)[':workspace']['projects']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspacesWorkspaceProjectsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkspacesWorkspaceProjectsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.workspaces[':workspace'].projects.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWorkspacesWorkspaceProjectsMutationKey() {
  return ['workspaces', '/workspaces/:workspace/projects', 'POST'] as const
}

export function getPostWorkspacesWorkspaceProjectsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workspaces)[':workspace']['projects']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.workspaces)[':workspace']['projects']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWorkspacesWorkspaceProjectsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.workspaces)[':workspace']['projects']['$post']>,
    ) {
      return parseResponse(client.workspaces[':workspace'].projects.$post(args, options))
    },
  })
}

export function usePostWorkspacesWorkspaceProjects<
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
                Awaited<ReturnType<(typeof client.workspaces)[':workspace']['projects']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.workspaces)[':workspace']['projects']['$post']>,
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
  const mutationDefaults = getPostWorkspacesWorkspaceProjectsMutationOptions<
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

export function getWorkspacesWorkspaceProjectsProjectKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.workspaces)[':workspace']['projects'][':project_key']['$get']>
  >,
) {
  return ['workspaces', '/workspaces/:workspace/projects/:project_key', toValue(args)] as const
}

export function getWorkspacesWorkspaceProjectsProjectKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.workspaces)[':workspace']['projects'][':project_key']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkspacesWorkspaceProjectsProjectKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workspaces[':workspace'].projects[':project_key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkspacesWorkspaceProjectsProjectKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.workspaces)[':workspace']['projects'][':project_key']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.workspaces)[':workspace']['projects'][':project_key']['$get']>
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
                    (typeof client.workspaces)[':workspace']['projects'][':project_key']['$get']
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
                    (typeof client.workspaces)[':workspace']['projects'][':project_key']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWorkspacesWorkspaceProjectsProjectKeyQueryKey>
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
            ReturnType<(typeof client.workspaces)[':workspace']['projects'][':project_key']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspacesWorkspaceProjectsProjectKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkspacesWorkspaceProjectsProjectKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.workspaces[':workspace'].projects[':project_key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutWorkspacesWorkspaceProjectsProjectKeyMutationKey() {
  return ['workspaces', '/workspaces/:workspace/projects/:project_key', 'PUT'] as const
}

export function getPutWorkspacesWorkspaceProjectsProjectKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.workspaces)[':workspace']['projects'][':project_key']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.workspaces)[':workspace']['projects'][':project_key']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWorkspacesWorkspaceProjectsProjectKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.workspaces)[':workspace']['projects'][':project_key']['$put']
      >,
    ) {
      return parseResponse(
        client.workspaces[':workspace'].projects[':project_key'].$put(args, options),
      )
    },
  })
}

export function usePutWorkspacesWorkspaceProjectsProjectKey<
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
                    (typeof client.workspaces)[':workspace']['projects'][':project_key']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.workspaces)[':workspace']['projects'][':project_key']['$put']
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
  const mutationDefaults = getPutWorkspacesWorkspaceProjectsProjectKeyMutationOptions<
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

export function getDeleteWorkspacesWorkspaceProjectsProjectKeyMutationKey() {
  return ['workspaces', '/workspaces/:workspace/projects/:project_key', 'DELETE'] as const
}

export function getDeleteWorkspacesWorkspaceProjectsProjectKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workspaces)[':workspace']['projects'][':project_key']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.workspaces)[':workspace']['projects'][':project_key']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteWorkspacesWorkspaceProjectsProjectKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.workspaces)[':workspace']['projects'][':project_key']['$delete']
      >,
    ) {
      return parseResponse(
        client.workspaces[':workspace'].projects[':project_key'].$delete(args, options),
      )
    },
  })
}

export function useDeleteWorkspacesWorkspaceProjectsProjectKey<
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
                      (typeof client.workspaces)[':workspace']['projects'][':project_key']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.workspaces)[':workspace']['projects'][':project_key']['$delete']
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
  const mutationDefaults = getDeleteWorkspacesWorkspaceProjectsProjectKeyMutationOptions<
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

export function getWorkspacesWorkspaceProjectsProjectKeyBranchingModelQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workspaces)[':workspace']['projects'][':project_key']['branching-model']['$get']
    >
  >,
) {
  return [
    'workspaces',
    '/workspaces/:workspace/projects/:project_key/branching-model',
    toValue(args),
  ] as const
}

export function getWorkspacesWorkspaceProjectsProjectKeyBranchingModelQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workspaces)[':workspace']['projects'][':project_key']['branching-model']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkspacesWorkspaceProjectsProjectKeyBranchingModelQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workspaces[':workspace'].projects[':project_key']['branching-model'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useWorkspacesWorkspaceProjectsProjectKeyBranchingModel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.workspaces)[':workspace']['projects'][':project_key']['branching-model']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workspaces)[':workspace']['projects'][':project_key']['branching-model']['$get']
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
                    (typeof client.workspaces)[':workspace']['projects'][':project_key']['branching-model']['$get']
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
                    (typeof client.workspaces)[':workspace']['projects'][':project_key']['branching-model']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWorkspacesWorkspaceProjectsProjectKeyBranchingModelQueryKey>
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
              (typeof client.workspaces)[':workspace']['projects'][':project_key']['branching-model']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspacesWorkspaceProjectsProjectKeyBranchingModelQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getWorkspacesWorkspaceProjectsProjectKeyBranchingModelQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.workspaces[':workspace'].projects[':project_key']['branching-model'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workspaces)[':workspace']['projects'][':project_key']['branching-model']['settings']['$get']
    >
  >,
) {
  return [
    'workspaces',
    '/workspaces/:workspace/projects/:project_key/branching-model/settings',
    toValue(args),
  ] as const
}

export function getWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workspaces)[':workspace']['projects'][':project_key']['branching-model']['settings']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettingsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workspaces[':workspace'].projects[':project_key']['branching-model'].settings.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.workspaces)[':workspace']['projects'][':project_key']['branching-model']['settings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workspaces)[':workspace']['projects'][':project_key']['branching-model']['settings']['$get']
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
                    (typeof client.workspaces)[':workspace']['projects'][':project_key']['branching-model']['settings']['$get']
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
                    (typeof client.workspaces)[':workspace']['projects'][':project_key']['branching-model']['settings']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettingsQueryKey>
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
              (typeof client.workspaces)[':workspace']['projects'][':project_key']['branching-model']['settings']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettingsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.workspaces[':workspace'].projects[':project_key']['branching-model'].settings.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettingsMutationKey() {
  return [
    'workspaces',
    '/workspaces/:workspace/projects/:project_key/branching-model/settings',
    'PUT',
  ] as const
}

export function getPutWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.workspaces)[':workspace']['projects'][':project_key']['branching-model']['settings']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.workspaces)[':workspace']['projects'][':project_key']['branching-model']['settings']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.workspaces)[':workspace']['projects'][':project_key']['branching-model']['settings']['$put']
      >,
    ) {
      return parseResponse(
        client.workspaces[':workspace'].projects[':project_key']['branching-model'].settings.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettings<
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
                    (typeof client.workspaces)[':workspace']['projects'][':project_key']['branching-model']['settings']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.workspaces)[':workspace']['projects'][':project_key']['branching-model']['settings']['$put']
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
  const mutationDefaults =
    getPutWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettingsMutationOptions<
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

export function getWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workspaces)[':workspace']['projects'][':project_key']['default-reviewers']['$get']
    >
  >,
) {
  return [
    'workspaces',
    '/workspaces/:workspace/projects/:project_key/default-reviewers',
    toValue(args),
  ] as const
}

export function getWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workspaces)[':workspace']['projects'][':project_key']['default-reviewers']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workspaces[':workspace'].projects[':project_key']['default-reviewers'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useWorkspacesWorkspaceProjectsProjectKeyDefaultReviewers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.workspaces)[':workspace']['projects'][':project_key']['default-reviewers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workspaces)[':workspace']['projects'][':project_key']['default-reviewers']['$get']
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
                    (typeof client.workspaces)[':workspace']['projects'][':project_key']['default-reviewers']['$get']
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
                    (typeof client.workspaces)[':workspace']['projects'][':project_key']['default-reviewers']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersQueryKey>
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
              (typeof client.workspaces)[':workspace']['projects'][':project_key']['default-reviewers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.workspaces[':workspace'].projects[':project_key']['default-reviewers'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workspaces)[':workspace']['projects'][':project_key']['default-reviewers'][':selected_user']['$get']
    >
  >,
) {
  return [
    'workspaces',
    '/workspaces/:workspace/projects/:project_key/default-reviewers/:selected_user',
    toValue(args),
  ] as const
}

export function getWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workspaces)[':workspace']['projects'][':project_key']['default-reviewers'][':selected_user']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workspaces[':workspace'].projects[':project_key']['default-reviewers'][
          ':selected_user'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.workspaces)[':workspace']['projects'][':project_key']['default-reviewers'][':selected_user']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workspaces)[':workspace']['projects'][':project_key']['default-reviewers'][':selected_user']['$get']
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
                    (typeof client.workspaces)[':workspace']['projects'][':project_key']['default-reviewers'][':selected_user']['$get']
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
                    (typeof client.workspaces)[':workspace']['projects'][':project_key']['default-reviewers'][':selected_user']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserQueryKey
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
              (typeof client.workspaces)[':workspace']['projects'][':project_key']['default-reviewers'][':selected_user']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.workspaces[':workspace'].projects[':project_key']['default-reviewers'][
            ':selected_user'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPutWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserMutationKey() {
  return [
    'workspaces',
    '/workspaces/:workspace/projects/:project_key/default-reviewers/:selected_user',
    'PUT',
  ] as const
}

export function getPutWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.workspaces)[':workspace']['projects'][':project_key']['default-reviewers'][':selected_user']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.workspaces)[':workspace']['projects'][':project_key']['default-reviewers'][':selected_user']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.workspaces)[':workspace']['projects'][':project_key']['default-reviewers'][':selected_user']['$put']
      >,
    ) {
      return parseResponse(
        client.workspaces[':workspace'].projects[':project_key']['default-reviewers'][
          ':selected_user'
        ].$put(args, options),
      )
    },
  })
}

export function usePutWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUser<
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
                    (typeof client.workspaces)[':workspace']['projects'][':project_key']['default-reviewers'][':selected_user']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.workspaces)[':workspace']['projects'][':project_key']['default-reviewers'][':selected_user']['$put']
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
  const mutationDefaults =
    getPutWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserMutationOptions<
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

export function getDeleteWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserMutationKey() {
  return [
    'workspaces',
    '/workspaces/:workspace/projects/:project_key/default-reviewers/:selected_user',
    'DELETE',
  ] as const
}

export function getDeleteWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workspaces)[':workspace']['projects'][':project_key']['default-reviewers'][':selected_user']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.workspaces)[':workspace']['projects'][':project_key']['default-reviewers'][':selected_user']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.workspaces)[':workspace']['projects'][':project_key']['default-reviewers'][':selected_user']['$delete']
      >,
    ) {
      return parseResponse(
        client.workspaces[':workspace'].projects[':project_key']['default-reviewers'][
          ':selected_user'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUser<
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
                      (typeof client.workspaces)[':workspace']['projects'][':project_key']['default-reviewers'][':selected_user']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.workspaces)[':workspace']['projects'][':project_key']['default-reviewers'][':selected_user']['$delete']
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
  const mutationDefaults =
    getDeleteWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserMutationOptions<
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

export function getWorkspacesWorkspaceProjectsProjectKeyDeployKeysQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workspaces)[':workspace']['projects'][':project_key']['deploy-keys']['$get']
    >
  >,
) {
  return [
    'workspaces',
    '/workspaces/:workspace/projects/:project_key/deploy-keys',
    toValue(args),
  ] as const
}

export function getWorkspacesWorkspaceProjectsProjectKeyDeployKeysQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workspaces)[':workspace']['projects'][':project_key']['deploy-keys']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkspacesWorkspaceProjectsProjectKeyDeployKeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workspaces[':workspace'].projects[':project_key']['deploy-keys'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useWorkspacesWorkspaceProjectsProjectKeyDeployKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.workspaces)[':workspace']['projects'][':project_key']['deploy-keys']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workspaces)[':workspace']['projects'][':project_key']['deploy-keys']['$get']
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
                    (typeof client.workspaces)[':workspace']['projects'][':project_key']['deploy-keys']['$get']
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
                    (typeof client.workspaces)[':workspace']['projects'][':project_key']['deploy-keys']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWorkspacesWorkspaceProjectsProjectKeyDeployKeysQueryKey>
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
              (typeof client.workspaces)[':workspace']['projects'][':project_key']['deploy-keys']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspacesWorkspaceProjectsProjectKeyDeployKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkspacesWorkspaceProjectsProjectKeyDeployKeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.workspaces[':workspace'].projects[':project_key']['deploy-keys'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostWorkspacesWorkspaceProjectsProjectKeyDeployKeysMutationKey() {
  return ['workspaces', '/workspaces/:workspace/projects/:project_key/deploy-keys', 'POST'] as const
}

export function getPostWorkspacesWorkspaceProjectsProjectKeyDeployKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.workspaces)[':workspace']['projects'][':project_key']['deploy-keys']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.workspaces)[':workspace']['projects'][':project_key']['deploy-keys']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostWorkspacesWorkspaceProjectsProjectKeyDeployKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.workspaces)[':workspace']['projects'][':project_key']['deploy-keys']['$post']
      >,
    ) {
      return parseResponse(
        client.workspaces[':workspace'].projects[':project_key']['deploy-keys'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostWorkspacesWorkspaceProjectsProjectKeyDeployKeys<
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
                    (typeof client.workspaces)[':workspace']['projects'][':project_key']['deploy-keys']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.workspaces)[':workspace']['projects'][':project_key']['deploy-keys']['$post']
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
  const mutationDefaults = getPostWorkspacesWorkspaceProjectsProjectKeyDeployKeysMutationOptions<
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

export function getWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workspaces)[':workspace']['projects'][':project_key']['deploy-keys'][':key_id']['$get']
    >
  >,
) {
  return [
    'workspaces',
    '/workspaces/:workspace/projects/:project_key/deploy-keys/:key_id',
    toValue(args),
  ] as const
}

export function getWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workspaces)[':workspace']['projects'][':project_key']['deploy-keys'][':key_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workspaces[':workspace'].projects[':project_key']['deploy-keys'][':key_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.workspaces)[':workspace']['projects'][':project_key']['deploy-keys'][':key_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workspaces)[':workspace']['projects'][':project_key']['deploy-keys'][':key_id']['$get']
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
                    (typeof client.workspaces)[':workspace']['projects'][':project_key']['deploy-keys'][':key_id']['$get']
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
                    (typeof client.workspaces)[':workspace']['projects'][':project_key']['deploy-keys'][':key_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIdQueryKey>
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
              (typeof client.workspaces)[':workspace']['projects'][':project_key']['deploy-keys'][':key_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.workspaces[':workspace'].projects[':project_key']['deploy-keys'][':key_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIdMutationKey() {
  return [
    'workspaces',
    '/workspaces/:workspace/projects/:project_key/deploy-keys/:key_id',
    'DELETE',
  ] as const
}

export function getDeleteWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workspaces)[':workspace']['projects'][':project_key']['deploy-keys'][':key_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.workspaces)[':workspace']['projects'][':project_key']['deploy-keys'][':key_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.workspaces)[':workspace']['projects'][':project_key']['deploy-keys'][':key_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.workspaces[':workspace'].projects[':project_key']['deploy-keys'][':key_id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyId<
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
                      (typeof client.workspaces)[':workspace']['projects'][':project_key']['deploy-keys'][':key_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.workspaces)[':workspace']['projects'][':project_key']['deploy-keys'][':key_id']['$delete']
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
  const mutationDefaults =
    getDeleteWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIdMutationOptions<
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

export function getWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigGroupsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workspaces)[':workspace']['projects'][':project_key']['permissions-config']['groups']['$get']
    >
  >,
) {
  return [
    'workspaces',
    '/workspaces/:workspace/projects/:project_key/permissions-config/groups',
    toValue(args),
  ] as const
}

export function getWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigGroupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workspaces)[':workspace']['projects'][':project_key']['permissions-config']['groups']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigGroupsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workspaces[':workspace'].projects[':project_key']['permissions-config'].groups.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.workspaces)[':workspace']['projects'][':project_key']['permissions-config']['groups']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workspaces)[':workspace']['projects'][':project_key']['permissions-config']['groups']['$get']
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
                    (typeof client.workspaces)[':workspace']['projects'][':project_key']['permissions-config']['groups']['$get']
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
                    (typeof client.workspaces)[':workspace']['projects'][':project_key']['permissions-config']['groups']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigGroupsQueryKey>
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
              (typeof client.workspaces)[':workspace']['projects'][':project_key']['permissions-config']['groups']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigGroupsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.workspaces[':workspace'].projects[':project_key'][
            'permissions-config'
          ].groups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigGroupsGroupSlugQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workspaces)[':workspace']['projects'][':project_key']['permissions-config']['groups'][':group_slug']['$get']
    >
  >,
) {
  return [
    'workspaces',
    '/workspaces/:workspace/projects/:project_key/permissions-config/groups/:group_slug',
    toValue(args),
  ] as const
}

export function getWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigGroupsGroupSlugQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workspaces)[':workspace']['projects'][':project_key']['permissions-config']['groups'][':group_slug']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigGroupsGroupSlugQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workspaces[':workspace'].projects[':project_key']['permissions-config'].groups[
          ':group_slug'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigGroupsGroupSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.workspaces)[':workspace']['projects'][':project_key']['permissions-config']['groups'][':group_slug']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workspaces)[':workspace']['projects'][':project_key']['permissions-config']['groups'][':group_slug']['$get']
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
                    (typeof client.workspaces)[':workspace']['projects'][':project_key']['permissions-config']['groups'][':group_slug']['$get']
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
                    (typeof client.workspaces)[':workspace']['projects'][':project_key']['permissions-config']['groups'][':group_slug']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigGroupsGroupSlugQueryKey
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
              (typeof client.workspaces)[':workspace']['projects'][':project_key']['permissions-config']['groups'][':group_slug']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigGroupsGroupSlugQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigGroupsGroupSlugQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.workspaces[':workspace'].projects[':project_key']['permissions-config'].groups[
            ':group_slug'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPutWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigGroupsGroupSlugMutationKey() {
  return [
    'workspaces',
    '/workspaces/:workspace/projects/:project_key/permissions-config/groups/:group_slug',
    'PUT',
  ] as const
}

export function getPutWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigGroupsGroupSlugMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.workspaces)[':workspace']['projects'][':project_key']['permissions-config']['groups'][':group_slug']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.workspaces)[':workspace']['projects'][':project_key']['permissions-config']['groups'][':group_slug']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigGroupsGroupSlugMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.workspaces)[':workspace']['projects'][':project_key']['permissions-config']['groups'][':group_slug']['$put']
      >,
    ) {
      return parseResponse(
        client.workspaces[':workspace'].projects[':project_key']['permissions-config'].groups[
          ':group_slug'
        ].$put(args, options),
      )
    },
  })
}

export function usePutWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigGroupsGroupSlug<
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
                    (typeof client.workspaces)[':workspace']['projects'][':project_key']['permissions-config']['groups'][':group_slug']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.workspaces)[':workspace']['projects'][':project_key']['permissions-config']['groups'][':group_slug']['$put']
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
  const mutationDefaults =
    getPutWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigGroupsGroupSlugMutationOptions<
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

export function getDeleteWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigGroupsGroupSlugMutationKey() {
  return [
    'workspaces',
    '/workspaces/:workspace/projects/:project_key/permissions-config/groups/:group_slug',
    'DELETE',
  ] as const
}

export function getDeleteWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigGroupsGroupSlugMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workspaces)[':workspace']['projects'][':project_key']['permissions-config']['groups'][':group_slug']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.workspaces)[':workspace']['projects'][':project_key']['permissions-config']['groups'][':group_slug']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigGroupsGroupSlugMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.workspaces)[':workspace']['projects'][':project_key']['permissions-config']['groups'][':group_slug']['$delete']
      >,
    ) {
      return parseResponse(
        client.workspaces[':workspace'].projects[':project_key']['permissions-config'].groups[
          ':group_slug'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigGroupsGroupSlug<
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
                      (typeof client.workspaces)[':workspace']['projects'][':project_key']['permissions-config']['groups'][':group_slug']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.workspaces)[':workspace']['projects'][':project_key']['permissions-config']['groups'][':group_slug']['$delete']
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
  const mutationDefaults =
    getDeleteWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigGroupsGroupSlugMutationOptions<
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

export function getWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigUsersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workspaces)[':workspace']['projects'][':project_key']['permissions-config']['users']['$get']
    >
  >,
) {
  return [
    'workspaces',
    '/workspaces/:workspace/projects/:project_key/permissions-config/users',
    toValue(args),
  ] as const
}

export function getWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigUsersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workspaces)[':workspace']['projects'][':project_key']['permissions-config']['users']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigUsersQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workspaces[':workspace'].projects[':project_key']['permissions-config'].users.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.workspaces)[':workspace']['projects'][':project_key']['permissions-config']['users']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workspaces)[':workspace']['projects'][':project_key']['permissions-config']['users']['$get']
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
                    (typeof client.workspaces)[':workspace']['projects'][':project_key']['permissions-config']['users']['$get']
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
                    (typeof client.workspaces)[':workspace']['projects'][':project_key']['permissions-config']['users']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigUsersQueryKey>
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
              (typeof client.workspaces)[':workspace']['projects'][':project_key']['permissions-config']['users']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigUsersQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.workspaces[':workspace'].projects[':project_key']['permissions-config'].users.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigUsersSelectedUserIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workspaces)[':workspace']['projects'][':project_key']['permissions-config']['users'][':selected_user_id']['$get']
    >
  >,
) {
  return [
    'workspaces',
    '/workspaces/:workspace/projects/:project_key/permissions-config/users/:selected_user_id',
    toValue(args),
  ] as const
}

export function getWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigUsersSelectedUserIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workspaces)[':workspace']['projects'][':project_key']['permissions-config']['users'][':selected_user_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigUsersSelectedUserIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workspaces[':workspace'].projects[':project_key']['permissions-config'].users[
          ':selected_user_id'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigUsersSelectedUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.workspaces)[':workspace']['projects'][':project_key']['permissions-config']['users'][':selected_user_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workspaces)[':workspace']['projects'][':project_key']['permissions-config']['users'][':selected_user_id']['$get']
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
                    (typeof client.workspaces)[':workspace']['projects'][':project_key']['permissions-config']['users'][':selected_user_id']['$get']
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
                    (typeof client.workspaces)[':workspace']['projects'][':project_key']['permissions-config']['users'][':selected_user_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigUsersSelectedUserIdQueryKey
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
              (typeof client.workspaces)[':workspace']['projects'][':project_key']['permissions-config']['users'][':selected_user_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigUsersSelectedUserIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigUsersSelectedUserIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.workspaces[':workspace'].projects[':project_key']['permissions-config'].users[
            ':selected_user_id'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPutWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigUsersSelectedUserIdMutationKey() {
  return [
    'workspaces',
    '/workspaces/:workspace/projects/:project_key/permissions-config/users/:selected_user_id',
    'PUT',
  ] as const
}

export function getPutWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigUsersSelectedUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.workspaces)[':workspace']['projects'][':project_key']['permissions-config']['users'][':selected_user_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.workspaces)[':workspace']['projects'][':project_key']['permissions-config']['users'][':selected_user_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigUsersSelectedUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.workspaces)[':workspace']['projects'][':project_key']['permissions-config']['users'][':selected_user_id']['$put']
      >,
    ) {
      return parseResponse(
        client.workspaces[':workspace'].projects[':project_key']['permissions-config'].users[
          ':selected_user_id'
        ].$put(args, options),
      )
    },
  })
}

export function usePutWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigUsersSelectedUserId<
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
                    (typeof client.workspaces)[':workspace']['projects'][':project_key']['permissions-config']['users'][':selected_user_id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.workspaces)[':workspace']['projects'][':project_key']['permissions-config']['users'][':selected_user_id']['$put']
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
  const mutationDefaults =
    getPutWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigUsersSelectedUserIdMutationOptions<
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

export function getDeleteWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigUsersSelectedUserIdMutationKey() {
  return [
    'workspaces',
    '/workspaces/:workspace/projects/:project_key/permissions-config/users/:selected_user_id',
    'DELETE',
  ] as const
}

export function getDeleteWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigUsersSelectedUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.workspaces)[':workspace']['projects'][':project_key']['permissions-config']['users'][':selected_user_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.workspaces)[':workspace']['projects'][':project_key']['permissions-config']['users'][':selected_user_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigUsersSelectedUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.workspaces)[':workspace']['projects'][':project_key']['permissions-config']['users'][':selected_user_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.workspaces[':workspace'].projects[':project_key']['permissions-config'].users[
          ':selected_user_id'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigUsersSelectedUserId<
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
                      (typeof client.workspaces)[':workspace']['projects'][':project_key']['permissions-config']['users'][':selected_user_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.workspaces)[':workspace']['projects'][':project_key']['permissions-config']['users'][':selected_user_id']['$delete']
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
  const mutationDefaults =
    getDeleteWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigUsersSelectedUserIdMutationOptions<
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

export function getWorkspacesWorkspacePullrequestsSelectedUserQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workspaces)[':workspace']['pullrequests'][':selected_user']['$get']
    >
  >,
) {
  return [
    'workspaces',
    '/workspaces/:workspace/pullrequests/:selected_user',
    toValue(args),
  ] as const
}

export function getWorkspacesWorkspacePullrequestsSelectedUserQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workspaces)[':workspace']['pullrequests'][':selected_user']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkspacesWorkspacePullrequestsSelectedUserQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workspaces[':workspace'].pullrequests[':selected_user'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkspacesWorkspacePullrequestsSelectedUser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.workspaces)[':workspace']['pullrequests'][':selected_user']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workspaces)[':workspace']['pullrequests'][':selected_user']['$get']
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
                    (typeof client.workspaces)[':workspace']['pullrequests'][':selected_user']['$get']
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
                    (typeof client.workspaces)[':workspace']['pullrequests'][':selected_user']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWorkspacesWorkspacePullrequestsSelectedUserQueryKey>
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
              (typeof client.workspaces)[':workspace']['pullrequests'][':selected_user']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspacesWorkspacePullrequestsSelectedUserQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkspacesWorkspacePullrequestsSelectedUserQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.workspaces[':workspace'].pullrequests[':selected_user'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWorkspacesWorkspaceSearchCodeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.workspaces)[':workspace']['search']['code']['$get']>
  >,
) {
  return ['workspaces', '/workspaces/:workspace/search/code', toValue(args)] as const
}

export function getWorkspacesWorkspaceSearchCodeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.workspaces)[':workspace']['search']['code']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkspacesWorkspaceSearchCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workspaces[':workspace'].search.code.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkspacesWorkspaceSearchCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workspaces)[':workspace']['search']['code']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.workspaces)[':workspace']['search']['code']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.workspaces)[':workspace']['search']['code']['$get']>
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
                  ReturnType<(typeof client.workspaces)[':workspace']['search']['code']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getWorkspacesWorkspaceSearchCodeQueryKey>
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
          Awaited<ReturnType<(typeof client.workspaces)[':workspace']['search']['code']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspacesWorkspaceSearchCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkspacesWorkspaceSearchCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.workspaces[':workspace'].search.code.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWorkspacesWorkspaceSettingsGpgPublicKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workspaces)[':workspace']['settings']['gpg']['public-key']['$get']
    >
  >,
) {
  return ['workspaces', '/workspaces/:workspace/settings/gpg/public-key', toValue(args)] as const
}

export function getWorkspacesWorkspaceSettingsGpgPublicKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workspaces)[':workspace']['settings']['gpg']['public-key']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkspacesWorkspaceSettingsGpgPublicKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workspaces[':workspace'].settings.gpg['public-key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkspacesWorkspaceSettingsGpgPublicKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.workspaces)[':workspace']['settings']['gpg']['public-key']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workspaces)[':workspace']['settings']['gpg']['public-key']['$get']
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
                    (typeof client.workspaces)[':workspace']['settings']['gpg']['public-key']['$get']
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
                    (typeof client.workspaces)[':workspace']['settings']['gpg']['public-key']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWorkspacesWorkspaceSettingsGpgPublicKeyQueryKey>
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
              (typeof client.workspaces)[':workspace']['settings']['gpg']['public-key']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspacesWorkspaceSettingsGpgPublicKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkspacesWorkspaceSettingsGpgPublicKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.workspaces[':workspace'].settings.gpg['public-key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
