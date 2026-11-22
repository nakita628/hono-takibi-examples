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

export function createPutAddon<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addon.$put>>>>>
          | undefined,
          TError,
          void,
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
    const mutationDefaults = getPutAddonMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteAddon<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.addon.$delete>>>>
            >
          | undefined,
          TError,
          void,
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
    const mutationDefaults = getDeleteAddonMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAddonAddonKeyClientKeyQueryKey(
  args: InferRequestType<(typeof client.addon)[':addon_key']['client-key']['$get']>,
) {
  return ['addon', '/addon/:addon_key/client-key', args] as const
}

export function getAddonAddonKeyClientKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.addon)[':addon_key']['client-key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.addon)[':addon_key']['client-key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAddonAddonKeyClientKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.addon[':addon_key']['client-key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAddonAddonKeyClientKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.addon)[':addon_key']['client-key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.addon)[':addon_key']['client-key']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getAddonAddonKeyClientKeyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getHookEventsQueryKey() {
  return ['hook_events', '/hook_events'] as const
}

export function getHookEventsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hook_events.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hook_events.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHookEventsQueryKey>
  >({
    queryKey: getHookEventsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.hook_events.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createHookEvents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hook_events.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hook_events.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getHookEventsQueryKey>
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
    return { ...getHookEventsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getHookEventsSubjectTypeQueryKey(
  args: InferRequestType<(typeof client.hook_events)[':subject_type']['$get']>,
) {
  return ['hook_events', '/hook_events/:subject_type', args] as const
}

export function getHookEventsSubjectTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.hook_events)[':subject_type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.hook_events)[':subject_type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getHookEventsSubjectTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.hook_events[':subject_type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createHookEventsSubjectType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.hook_events)[':subject_type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.hook_events)[':subject_type']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getHookEventsSubjectTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositoriesWorkspaceQueryKey(
  args: InferRequestType<(typeof client.repositories)[':workspace']['$get']>,
) {
  return ['repositories', '/repositories/:workspace', args] as const
}

export function getRepositoriesWorkspaceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.repositories)[':workspace']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.repositories)[':workspace']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositoriesWorkspace<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.repositories)[':workspace']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.repositories)[':workspace']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getRepositoriesWorkspaceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositoriesWorkspaceRepoSlugQueryKey(
  args: InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['$get']>,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug', args] as const
}

export function getRepositoriesWorkspaceRepoSlugQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.repositories)[':workspace'][':repo_slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.repositories)[':workspace'][':repo_slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutRepositoriesWorkspaceRepoSlug<
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
                  ReturnType<(typeof client.repositories)[':workspace'][':repo_slug']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['$put']>,
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
    const mutationDefaults = getPutRepositoriesWorkspaceRepoSlugMutationOptions<
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

export function createPostRepositoriesWorkspaceRepoSlug<
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
                  ReturnType<(typeof client.repositories)[':workspace'][':repo_slug']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['$post']>,
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
    const mutationDefaults = getPostRepositoriesWorkspaceRepoSlugMutationOptions<
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

export function createDeleteRepositoriesWorkspaceRepoSlug<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteRepositoriesWorkspaceRepoSlugMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugBranchRestrictionsQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['branch-restrictions']['$get']
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/branch-restrictions', args] as const
}

export function getRepositoriesWorkspaceRepoSlugBranchRestrictionsQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['branch-restrictions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugBranchRestrictionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['branch-restrictions'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugBranchRestrictions<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['branch-restrictions']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['branch-restrictions']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugBranchRestrictionsQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugBranchRestrictionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostRepositoriesWorkspaceRepoSlugBranchRestrictions<
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
    const mutationDefaults = getPostRepositoriesWorkspaceRepoSlugBranchRestrictionsMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugBranchRestrictionsIdQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['branch-restrictions'][':id']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/branch-restrictions/:id',
    args,
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugBranchRestrictionsIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['branch-restrictions'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugBranchRestrictionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['branch-restrictions'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugBranchRestrictionsId<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['branch-restrictions'][':id']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['branch-restrictions'][':id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugBranchRestrictionsIdQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugBranchRestrictionsIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutRepositoriesWorkspaceRepoSlugBranchRestrictionsId<
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
    const mutationDefaults = getPutRepositoriesWorkspaceRepoSlugBranchRestrictionsIdMutationOptions<
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

export function createDeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults =
      getDeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsIdMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugBranchingModelQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['branching-model']['$get']
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/branching-model', args] as const
}

export function getRepositoriesWorkspaceRepoSlugBranchingModelQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['branching-model']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugBranchingModelQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['branching-model'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugBranchingModel<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['branching-model']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['branching-model']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugBranchingModelQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugBranchingModelQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositoriesWorkspaceRepoSlugBranchingModelSettingsQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['branching-model']['settings']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/branching-model/settings',
    args,
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugBranchingModelSettingsQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['branching-model']['settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugBranchingModelSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['branching-model'].settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugBranchingModelSettings<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['branching-model']['settings']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['branching-model']['settings']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugBranchingModelSettingsQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugBranchingModelSettingsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutRepositoriesWorkspaceRepoSlugBranchingModelSettings<
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
    const mutationDefaults =
      getPutRepositoriesWorkspaceRepoSlugBranchingModelSettingsMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugCommitCommitQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['$get']
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/commit/:commit', args] as const
}

export function getRepositoriesWorkspaceRepoSlugCommitCommitQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugCommitCommitQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].commit[':commit'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugCommitCommit<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugCommitCommitQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugCommitCommitQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostRepositoriesWorkspaceRepoSlugCommitCommitApprove<
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
    const mutationDefaults = getPostRepositoriesWorkspaceRepoSlugCommitCommitApproveMutationOptions<
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

export function createDeleteRepositoriesWorkspaceRepoSlugCommitCommitApprove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults =
      getDeleteRepositoriesWorkspaceRepoSlugCommitCommitApproveMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugCommitCommitCommentsQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['comments']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/commit/:commit/comments',
    args,
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugCommitCommitCommentsQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['comments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugCommitCommitCommentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].commit[':commit'].comments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugCommitCommitComments<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['comments']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['comments']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugCommitCommitCommentsQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugCommitCommitCommentsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostRepositoriesWorkspaceRepoSlugCommitCommitComments<
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
    const mutationDefaults =
      getPostRepositoriesWorkspaceRepoSlugCommitCommitCommentsMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['comments'][':comment_id']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/commit/:commit/comments/:comment_id',
    args,
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['comments'][':comment_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].commit[':commit'].comments[
          ':comment_id'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentId<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['comments'][':comment_id']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['comments'][':comment_id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentId<
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
    const mutationDefaults =
      getPutRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdMutationOptions<
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

export function createDeleteRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults =
      getDeleteRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugCommitCommitPropertiesAppKeyPropertyNameQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['properties'][':app_key'][':property_name']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/commit/:commit/properties/:app_key/:property_name',
    args,
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugCommitCommitPropertiesAppKeyPropertyNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['properties'][':app_key'][':property_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getRepositoriesWorkspaceRepoSlugCommitCommitPropertiesAppKeyPropertyNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].commit[':commit'].properties[':app_key'][
          ':property_name'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugCommitCommitPropertiesAppKeyPropertyName<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['properties'][':app_key'][':property_name']['$get']
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
      ...getRepositoriesWorkspaceRepoSlugCommitCommitPropertiesAppKeyPropertyNameQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutRepositoriesWorkspaceRepoSlugCommitCommitPropertiesAppKeyPropertyName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults =
      getPutRepositoriesWorkspaceRepoSlugCommitCommitPropertiesAppKeyPropertyNameMutationOptions<
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

export function createDeleteRepositoriesWorkspaceRepoSlugCommitCommitPropertiesAppKeyPropertyName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults =
      getDeleteRepositoriesWorkspaceRepoSlugCommitCommitPropertiesAppKeyPropertyNameMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugCommitCommitPullrequestsQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['pullrequests']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/commit/:commit/pullrequests',
    args,
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugCommitCommitPullrequestsQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['pullrequests']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugCommitCommitPullrequestsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].commit[':commit'].pullrequests.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugCommitCommitPullrequests<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['pullrequests']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['pullrequests']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugCommitCommitPullrequestsQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugCommitCommitPullrequestsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositoriesWorkspaceRepoSlugCommitCommitReportsQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/commit/:commit/reports',
    args,
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugCommitCommitReportsQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugCommitCommitReportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].commit[':commit'].reports.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugCommitCommitReports<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugCommitCommitReportsQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugCommitCommitReportsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/commit/:commit/reports/:reportId',
    args,
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].commit[':commit'].reports[':reportId'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugCommitCommitReportsReportId<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutRepositoriesWorkspaceRepoSlugCommitCommitReportsReportId<
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
    const mutationDefaults =
      getPutRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdMutationOptions<
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

export function createDeleteRepositoriesWorkspaceRepoSlugCommitCommitReportsReportId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults =
      getDeleteRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['annotations']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/commit/:commit/reports/:reportId/annotations',
    args,
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['annotations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].commit[':commit'].reports[
          ':reportId'
        ].annotations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotations<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['annotations']['$get']
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
      ...getRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotations<
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
    const mutationDefaults =
      getPostRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsAnnotationIdQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['annotations'][':annotationId']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/commit/:commit/reports/:reportId/annotations/:annotationId',
    args,
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsAnnotationIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['annotations'][':annotationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsAnnotationIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].commit[':commit'].reports[
          ':reportId'
        ].annotations[':annotationId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsAnnotationId<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['reports'][':reportId']['annotations'][':annotationId']['$get']
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
      ...getRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsAnnotationIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsAnnotationId<
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
    const mutationDefaults =
      getPutRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsAnnotationIdMutationOptions<
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

export function createDeleteRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsAnnotationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults =
      getDeleteRepositoriesWorkspaceRepoSlugCommitCommitReportsReportIdAnnotationsAnnotationIdMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugCommitCommitStatusesQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['statuses']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/commit/:commit/statuses',
    args,
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugCommitCommitStatusesQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['statuses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugCommitCommitStatusesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].commit[':commit'].statuses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugCommitCommitStatuses<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['statuses']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['statuses']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugCommitCommitStatusesQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugCommitCommitStatusesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuild<
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
    const mutationDefaults =
      getPostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['statuses']['build'][':key']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/commit/:commit/statuses/build/:key',
    args,
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['statuses']['build'][':key']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].commit[':commit'].statuses.build[
          ':key'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKey<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['statuses']['build'][':key']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['commit'][':commit']['statuses']['build'][':key']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKey<
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
    const mutationDefaults =
      getPutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugCommitsQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commits']['$get']
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/commits', args] as const
}

export function getRepositoriesWorkspaceRepoSlugCommitsQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commits']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugCommitsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].commits.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugCommits<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commits']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['commits']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugCommitsQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugCommitsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostRepositoriesWorkspaceRepoSlugCommits<
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
    const mutationDefaults = getPostRepositoriesWorkspaceRepoSlugCommitsMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugCommitsRevisionQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commits'][':revision']['$get']
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/commits/:revision', args] as const
}

export function getRepositoriesWorkspaceRepoSlugCommitsRevisionQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commits'][':revision']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugCommitsRevisionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].commits[':revision'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugCommitsRevision<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['commits'][':revision']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['commits'][':revision']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugCommitsRevisionQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugCommitsRevisionQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostRepositoriesWorkspaceRepoSlugCommitsRevision<
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
    const mutationDefaults = getPostRepositoriesWorkspaceRepoSlugCommitsRevisionMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugDefaultReviewersQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['default-reviewers']['$get']
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/default-reviewers', args] as const
}

export function getRepositoriesWorkspaceRepoSlugDefaultReviewersQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['default-reviewers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugDefaultReviewersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['default-reviewers'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugDefaultReviewers<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['default-reviewers']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['default-reviewers']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugDefaultReviewersQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugDefaultReviewersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['default-reviewers'][':target_username']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/default-reviewers/:target_username',
    args,
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['default-reviewers'][':target_username']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['default-reviewers'][
          ':target_username'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['default-reviewers'][':target_username']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['default-reviewers'][':target_username']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername<
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
    const mutationDefaults =
      getPutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameMutationOptions<
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

export function createDeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults =
      getDeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugDeployKeysQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['deploy-keys']['$get']
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/deploy-keys', args] as const
}

export function getRepositoriesWorkspaceRepoSlugDeployKeysQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['deploy-keys']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugDeployKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['deploy-keys'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugDeployKeys<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['deploy-keys']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['deploy-keys']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugDeployKeysQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugDeployKeysQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostRepositoriesWorkspaceRepoSlugDeployKeys<
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
    const mutationDefaults = getPostRepositoriesWorkspaceRepoSlugDeployKeysMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugDeployKeysKeyIdQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['deploy-keys'][':key_id']['$get']
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/deploy-keys/:key_id', args] as const
}

export function getRepositoriesWorkspaceRepoSlugDeployKeysKeyIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['deploy-keys'][':key_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugDeployKeysKeyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['deploy-keys'][':key_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugDeployKeysKeyId<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['deploy-keys'][':key_id']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['deploy-keys'][':key_id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugDeployKeysKeyIdQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugDeployKeysKeyIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutRepositoriesWorkspaceRepoSlugDeployKeysKeyId<
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
    const mutationDefaults = getPutRepositoriesWorkspaceRepoSlugDeployKeysKeyIdMutationOptions<
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

export function createDeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIdMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugDeploymentsQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['deployments']['$get']
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/deployments', args] as const
}

export function getRepositoriesWorkspaceRepoSlugDeploymentsQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['deployments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugDeploymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].deployments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugDeployments<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['deployments']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['deployments']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugDeploymentsQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugDeploymentsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositoriesWorkspaceRepoSlugDeploymentsDeploymentUuidQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['deployments'][':deployment_uuid']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/deployments/:deployment_uuid',
    args,
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugDeploymentsDeploymentUuidQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['deployments'][':deployment_uuid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugDeploymentsDeploymentUuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].deployments[':deployment_uuid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugDeploymentsDeploymentUuid<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['deployments'][':deployment_uuid']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['deployments'][':deployment_uuid']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugDeploymentsDeploymentUuidQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugDeploymentsDeploymentUuidQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['deployments_config']['environments'][':environment_uuid']['variables']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/deployments_config/environments/:environment_uuid/variables',
    args,
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['deployments_config']['environments'][':environment_uuid']['variables']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].deployments_config.environments[
          ':environment_uuid'
        ].variables.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariables<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['deployments_config']['environments'][':environment_uuid']['variables']['$get']
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
      ...getRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariables<
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
    const mutationDefaults =
      getPostRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesMutationOptions<
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

export function createPutRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesVariableUuid<
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
    const mutationDefaults =
      getPutRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesVariableUuidMutationOptions<
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

export function createDeleteRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesVariableUuid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults =
      getDeleteRepositoriesWorkspaceRepoSlugDeploymentsConfigEnvironmentsEnvironmentUuidVariablesVariableUuidMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugDiffSpecQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['diff'][':spec']['$get']
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/diff/:spec', args] as const
}

export function getRepositoriesWorkspaceRepoSlugDiffSpecQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['diff'][':spec']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugDiffSpecQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].diff[':spec'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugDiffSpec<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['diff'][':spec']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['diff'][':spec']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugDiffSpecQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugDiffSpecQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositoriesWorkspaceRepoSlugDiffstatSpecQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['diffstat'][':spec']['$get']
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/diffstat/:spec', args] as const
}

export function getRepositoriesWorkspaceRepoSlugDiffstatSpecQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['diffstat'][':spec']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugDiffstatSpecQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].diffstat[':spec'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugDiffstatSpec<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['diffstat'][':spec']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['diffstat'][':spec']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugDiffstatSpecQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugDiffstatSpecQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositoriesWorkspaceRepoSlugDownloadsQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['downloads']['$get']
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/downloads', args] as const
}

export function getRepositoriesWorkspaceRepoSlugDownloadsQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['downloads']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugDownloadsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].downloads.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugDownloads<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['downloads']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['downloads']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugDownloadsQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugDownloadsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostRepositoriesWorkspaceRepoSlugDownloads<
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
    const mutationDefaults = getPostRepositoriesWorkspaceRepoSlugDownloadsMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugDownloadsFilenameQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['downloads'][':filename']['$get']
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/downloads/:filename', args] as const
}

export function getRepositoriesWorkspaceRepoSlugDownloadsFilenameQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['downloads'][':filename']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugDownloadsFilenameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].downloads[':filename'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugDownloadsFilename<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['downloads'][':filename']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['downloads'][':filename']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugDownloadsFilenameQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugDownloadsFilenameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createDeleteRepositoriesWorkspaceRepoSlugDownloadsFilename<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugEffectiveBranchingModelQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['effective-branching-model']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/effective-branching-model',
    args,
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugEffectiveBranchingModelQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['effective-branching-model']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugEffectiveBranchingModelQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['effective-branching-model'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugEffectiveBranchingModel<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['effective-branching-model']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['effective-branching-model']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugEffectiveBranchingModelQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugEffectiveBranchingModelQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositoriesWorkspaceRepoSlugEffectiveDefaultReviewersQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['effective-default-reviewers']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/effective-default-reviewers',
    args,
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugEffectiveDefaultReviewersQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['effective-default-reviewers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugEffectiveDefaultReviewersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['effective-default-reviewers'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugEffectiveDefaultReviewers<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['effective-default-reviewers']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['effective-default-reviewers']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugEffectiveDefaultReviewersQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugEffectiveDefaultReviewersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositoriesWorkspaceRepoSlugEnvironmentsQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['environments']['$get']
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/environments', args] as const
}

export function getRepositoriesWorkspaceRepoSlugEnvironmentsQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['environments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugEnvironmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].environments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugEnvironments<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['environments']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['environments']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugEnvironmentsQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugEnvironmentsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostRepositoriesWorkspaceRepoSlugEnvironments<
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
    const mutationDefaults = getPostRepositoriesWorkspaceRepoSlugEnvironmentsMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugEnvironmentsEnvironmentUuidQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['environments'][':environment_uuid']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/environments/:environment_uuid',
    args,
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugEnvironmentsEnvironmentUuidQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['environments'][':environment_uuid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugEnvironmentsEnvironmentUuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].environments[':environment_uuid'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugEnvironmentsEnvironmentUuid<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['environments'][':environment_uuid']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['environments'][':environment_uuid']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugEnvironmentsEnvironmentUuidQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugEnvironmentsEnvironmentUuidQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createDeleteRepositoriesWorkspaceRepoSlugEnvironmentsEnvironmentUuid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults =
      getDeleteRepositoriesWorkspaceRepoSlugEnvironmentsEnvironmentUuidMutationOptions<
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

export function createPostRepositoriesWorkspaceRepoSlugEnvironmentsEnvironmentUuidChanges<
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
    const mutationDefaults =
      getPostRepositoriesWorkspaceRepoSlugEnvironmentsEnvironmentUuidChangesMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugFileConflictsSpecQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['file-conflicts'][':spec']['$get']
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/file-conflicts/:spec', args] as const
}

export function getRepositoriesWorkspaceRepoSlugFileConflictsSpecQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['file-conflicts'][':spec']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugFileConflictsSpecQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['file-conflicts'][':spec'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugFileConflictsSpec<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['file-conflicts'][':spec']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['file-conflicts'][':spec']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugFileConflictsSpecQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugFileConflictsSpecQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositoriesWorkspaceRepoSlugFilehistoryCommitPathQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['filehistory'][':commit'][':path']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/filehistory/:commit/:path',
    args,
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugFilehistoryCommitPathQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['filehistory'][':commit'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugFilehistoryCommitPathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].filehistory[':commit'][':path'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugFilehistoryCommitPath<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['filehistory'][':commit'][':path']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['filehistory'][':commit'][':path']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugFilehistoryCommitPathQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugFilehistoryCommitPathQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositoriesWorkspaceRepoSlugForksQueryKey(
  args: InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['forks']['$get']>,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/forks', args] as const
}

export function getRepositoriesWorkspaceRepoSlugForksQueryOptions<
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
  args: InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['forks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugForksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].forks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugForks<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['forks']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['forks']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugForksQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugForksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostRepositoriesWorkspaceRepoSlugForks<
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
    const mutationDefaults = getPostRepositoriesWorkspaceRepoSlugForksMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugHooksQueryKey(
  args: InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['hooks']['$get']>,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/hooks', args] as const
}

export function getRepositoriesWorkspaceRepoSlugHooksQueryOptions<
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
  args: InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['hooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugHooksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].hooks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugHooks<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['hooks']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['hooks']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugHooksQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugHooksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostRepositoriesWorkspaceRepoSlugHooks<
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
    const mutationDefaults = getPostRepositoriesWorkspaceRepoSlugHooksMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugHooksUidQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['hooks'][':uid']['$get']
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/hooks/:uid', args] as const
}

export function getRepositoriesWorkspaceRepoSlugHooksUidQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['hooks'][':uid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugHooksUidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].hooks[':uid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugHooksUid<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['hooks'][':uid']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['hooks'][':uid']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugHooksUidQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugHooksUidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutRepositoriesWorkspaceRepoSlugHooksUid<
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
    const mutationDefaults = getPutRepositoriesWorkspaceRepoSlugHooksUidMutationOptions<
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

export function createDeleteRepositoriesWorkspaceRepoSlugHooksUid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteRepositoriesWorkspaceRepoSlugHooksUidMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugMergeBaseRevspecQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['merge-base'][':revspec']['$get']
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/merge-base/:revspec', args] as const
}

export function getRepositoriesWorkspaceRepoSlugMergeBaseRevspecQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['merge-base'][':revspec']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugMergeBaseRevspecQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['merge-base'][':revspec'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugMergeBaseRevspec<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['merge-base'][':revspec']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['merge-base'][':revspec']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugMergeBaseRevspecQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugMergeBaseRevspecQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositoriesWorkspaceRepoSlugMergeQueuesQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['merge-queues']['$get']
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/merge-queues', args] as const
}

export function getRepositoriesWorkspaceRepoSlugMergeQueuesQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['merge-queues']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugMergeQueuesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['merge-queues'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugMergeQueues<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['merge-queues']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['merge-queues']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugMergeQueuesQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugMergeQueuesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['merge-queues'][':merge_queue_uuid']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/merge-queues/:merge_queue_uuid',
    args,
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['merge-queues'][':merge_queue_uuid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['merge-queues'][':merge_queue_uuid'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuid<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['merge-queues'][':merge_queue_uuid']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['merge-queues'][':merge_queue_uuid']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidQueueQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['merge-queues'][':merge_queue_uuid']['queue']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/merge-queues/:merge_queue_uuid/queue',
    args,
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidQueueQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['merge-queues'][':merge_queue_uuid']['queue']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidQueueQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['merge-queues'][
          ':merge_queue_uuid'
        ].queue.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidQueue<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['merge-queues'][':merge_queue_uuid']['queue']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['merge-queues'][':merge_queue_uuid']['queue']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidQueueQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidQueueQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidQueuePullrequestIdQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['merge-queues'][':merge_queue_uuid']['queue'][':pullrequest_id']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/merge-queues/:merge_queue_uuid/queue/:pullrequest_id',
    args,
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidQueuePullrequestIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['merge-queues'][':merge_queue_uuid']['queue'][':pullrequest_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidQueuePullrequestIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['merge-queues'][':merge_queue_uuid'].queue[
          ':pullrequest_id'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidQueuePullrequestId<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['merge-queues'][':merge_queue_uuid']['queue'][':pullrequest_id']['$get']
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
      ...getRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidQueuePullrequestIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidQueuePullrequestId<
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
    const mutationDefaults =
      getDeleteRepositoriesWorkspaceRepoSlugMergeQueuesMergeQueueUuidQueuePullrequestIdMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugOverrideSettingsQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['override-settings']['$get']
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/override-settings', args] as const
}

export function getRepositoriesWorkspaceRepoSlugOverrideSettingsQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['override-settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugOverrideSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['override-settings'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugOverrideSettings<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['override-settings']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['override-settings']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugOverrideSettingsQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugOverrideSettingsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutRepositoriesWorkspaceRepoSlugOverrideSettings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutRepositoriesWorkspaceRepoSlugOverrideSettingsMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugPatchSpecQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['patch'][':spec']['$get']
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/patch/:spec', args] as const
}

export function getRepositoriesWorkspaceRepoSlugPatchSpecQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['patch'][':spec']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugPatchSpecQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].patch[':spec'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugPatchSpec<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['patch'][':spec']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['patch'][':spec']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugPatchSpecQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugPatchSpecQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['groups']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/permissions-config/groups',
    args,
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['groups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['permissions-config'].groups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugPermissionsConfigGroups<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['groups']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['groups']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlugQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['groups'][':group_slug']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/permissions-config/groups/:group_slug',
    args,
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlugQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['groups'][':group_slug']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['permissions-config'].groups[
          ':group_slug'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlug<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['groups'][':group_slug']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['groups'][':group_slug']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlugQueryKey
          >
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
      ...getRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlugQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlug<
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
    const mutationDefaults =
      getPutRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlugMutationOptions<
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

export function createDeleteRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlug<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults =
      getDeleteRepositoriesWorkspaceRepoSlugPermissionsConfigGroupsGroupSlugMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugPermissionsConfigUsersQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['users']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/permissions-config/users',
    args,
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPermissionsConfigUsersQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['users']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugPermissionsConfigUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['permissions-config'].users.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugPermissionsConfigUsers<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['users']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['users']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugPermissionsConfigUsersQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugPermissionsConfigUsersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserIdQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['users'][':selected_user_id']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/permissions-config/users/:selected_user_id',
    args,
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['users'][':selected_user_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['permissions-config'].users[
          ':selected_user_id'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserId<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['users'][':selected_user_id']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['permissions-config']['users'][':selected_user_id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserIdQueryKey
          >
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
      ...getRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserId<
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
    const mutationDefaults =
      getPutRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserIdMutationOptions<
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

export function createDeleteRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults =
      getDeleteRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserIdMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugPipelinesQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines']['$get']
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/pipelines', args] as const
}

export function getRepositoriesWorkspaceRepoSlugPipelinesQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugPipelinesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pipelines.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugPipelines<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugPipelinesQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugPipelinesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostRepositoriesWorkspaceRepoSlugPipelines<
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
    const mutationDefaults = getPostRepositoriesWorkspaceRepoSlugPipelinesMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugPipelinesConfigCachesQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['caches']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines-config/caches',
    args,
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPipelinesConfigCachesQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['caches']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugPipelinesConfigCachesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['pipelines-config'].caches.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugPipelinesConfigCaches<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['caches']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['caches']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugPipelinesConfigCachesQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugPipelinesConfigCachesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigCaches<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults =
      getDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigCachesMutationOptions<
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

export function createDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigCachesCacheUuid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults =
      getDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigCachesCacheUuidMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugPipelinesConfigCachesCacheUuidContentUriQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['caches'][':cache_uuid']['content-uri']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines-config/caches/:cache_uuid/content-uri',
    args,
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPipelinesConfigCachesCacheUuidContentUriQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['caches'][':cache_uuid']['content-uri']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getRepositoriesWorkspaceRepoSlugPipelinesConfigCachesCacheUuidContentUriQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['pipelines-config'].caches[':cache_uuid'][
          'content-uri'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugPipelinesConfigCachesCacheUuidContentUri<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['caches'][':cache_uuid']['content-uri']['$get']
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
      ...getRepositoriesWorkspaceRepoSlugPipelinesConfigCachesCacheUuidContentUriQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['runners']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines-config/runners',
    args,
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['runners']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['pipelines-config'].runners.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugPipelinesConfigRunners<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['runners']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['runners']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostRepositoriesWorkspaceRepoSlugPipelinesConfigRunners<
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
    const mutationDefaults =
      getPostRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersRunnerUuidQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['runners'][':runner_uuid']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines-config/runners/:runner_uuid',
    args,
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersRunnerUuidQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['runners'][':runner_uuid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersRunnerUuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug']['pipelines-config'].runners[
          ':runner_uuid'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersRunnerUuid<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['runners'][':runner_uuid']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines-config']['runners'][':runner_uuid']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersRunnerUuidQueryKey
          >
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
      ...getRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersRunnerUuidQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersRunnerUuid<
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
    const mutationDefaults =
      getPutRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersRunnerUuidMutationOptions<
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

export function createDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersRunnerUuid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults =
      getDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigRunnersRunnerUuidMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines/:pipeline_uuid',
    args,
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pipelines[':pipeline_uuid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugPipelinesPipelineUuid<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines/:pipeline_uuid/steps',
    args,
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pipelines[':pipeline_uuid'].steps.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidSteps<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines/:pipeline_uuid/steps/:step_uuid',
    args,
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pipelines[':pipeline_uuid'].steps[
          ':step_uuid'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuid<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidQueryKey
          >
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
      ...getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['log']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines/:pipeline_uuid/steps/:step_uuid/log',
    args,
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['log']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pipelines[':pipeline_uuid'].steps[
          ':step_uuid'
        ].log.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLog<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['log']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['log']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogQueryKey
          >
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
      ...getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogsLogUuidQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['logs'][':log_uuid']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines/:pipeline_uuid/steps/:step_uuid/logs/:log_uuid',
    args,
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogsLogUuidQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['logs'][':log_uuid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogsLogUuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pipelines[':pipeline_uuid'].steps[
          ':step_uuid'
        ].logs[':log_uuid'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogsLogUuid<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['logs'][':log_uuid']['$get']
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
      ...getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogsLogUuidQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['test_reports']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines/:pipeline_uuid/steps/:step_uuid/test_reports',
    args,
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['test_reports']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pipelines[':pipeline_uuid'].steps[
          ':step_uuid'
        ].test_reports.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReports<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['test_reports']['$get']
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
      ...getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['test_reports']['test_cases']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines/:pipeline_uuid/steps/:step_uuid/test_reports/test_cases',
    args,
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['test_reports']['test_cases']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pipelines[':pipeline_uuid'].steps[
          ':step_uuid'
        ].test_reports.test_cases.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCases<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['test_reports']['test_cases']['$get']
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
      ...getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesTestCaseUuidTestCaseReasonsQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['test_reports']['test_cases'][':test_case_uuid']['test_case_reasons']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines/:pipeline_uuid/steps/:step_uuid/test_reports/test_cases/:test_case_uuid/test_case_reasons',
    args,
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesTestCaseUuidTestCaseReasonsQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['test_reports']['test_cases'][':test_case_uuid']['test_case_reasons']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesTestCaseUuidTestCaseReasonsQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pipelines[':pipeline_uuid'].steps[
          ':step_uuid'
        ].test_reports.test_cases[':test_case_uuid'].test_case_reasons.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesTestCaseUuidTestCaseReasons<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines'][':pipeline_uuid']['steps'][':step_uuid']['test_reports']['test_cases'][':test_case_uuid']['test_case_reasons']['$get']
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
      ...getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesTestCaseUuidTestCaseReasonsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStopPipeline<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults =
      getPostRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStopPipelineMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugPipelinesConfigQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['$get']
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/pipelines_config', args] as const
}

export function getRepositoriesWorkspaceRepoSlugPipelinesConfigQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugPipelinesConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pipelines_config.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugPipelinesConfig<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugPipelinesConfigQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugPipelinesConfigQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutRepositoriesWorkspaceRepoSlugPipelinesConfig<
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
    const mutationDefaults = getPutRepositoriesWorkspaceRepoSlugPipelinesConfigMutationOptions<
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

export function createPutRepositoriesWorkspaceRepoSlugPipelinesConfigBuildNumber<
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
    const mutationDefaults =
      getPutRepositoriesWorkspaceRepoSlugPipelinesConfigBuildNumberMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines_config/schedules',
    args,
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pipelines_config.schedules.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugPipelinesConfigSchedules<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostRepositoriesWorkspaceRepoSlugPipelinesConfigSchedules<
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
    const mutationDefaults =
      getPostRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules'][':schedule_uuid']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines_config/schedules/:schedule_uuid',
    args,
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules'][':schedule_uuid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pipelines_config.schedules[
          ':schedule_uuid'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuid<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules'][':schedule_uuid']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules'][':schedule_uuid']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidQueryKey
          >
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
      ...getRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuid<
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
    const mutationDefaults =
      getPutRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidMutationOptions<
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

export function createDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults =
      getDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidExecutionsQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules'][':schedule_uuid']['executions']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines_config/schedules/:schedule_uuid/executions',
    args,
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidExecutionsQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules'][':schedule_uuid']['executions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidExecutionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pipelines_config.schedules[
          ':schedule_uuid'
        ].executions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidExecutions<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['schedules'][':schedule_uuid']['executions']['$get']
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
      ...getRepositoriesWorkspaceRepoSlugPipelinesConfigSchedulesScheduleUuidExecutionsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPairQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['key_pair']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines_config/ssh/key_pair',
    args,
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPairQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['key_pair']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPairQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pipelines_config.ssh.key_pair.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPair<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['key_pair']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['key_pair']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPairQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPairQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPair<
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
    const mutationDefaults =
      getPutRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPairMutationOptions<
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

export function createDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPair<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults =
      getDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigSshKeyPairMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['known_hosts']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines_config/ssh/known_hosts',
    args,
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['known_hosts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pipelines_config.ssh.known_hosts.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHosts<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['known_hosts']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['known_hosts']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHosts<
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
    const mutationDefaults =
      getPostRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuidQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['known_hosts'][':known_host_uuid']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines_config/ssh/known_hosts/:known_host_uuid',
    args,
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuidQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['known_hosts'][':known_host_uuid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pipelines_config.ssh.known_hosts[
          ':known_host_uuid'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuid<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['ssh']['known_hosts'][':known_host_uuid']['$get']
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
      ...getRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuidQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuid<
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
    const mutationDefaults =
      getPutRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuidMutationOptions<
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

export function createDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults =
      getDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigSshKnownHostsKnownHostUuidMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['variables']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines_config/variables',
    args,
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['variables']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pipelines_config.variables.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugPipelinesConfigVariables<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['variables']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['variables']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostRepositoriesWorkspaceRepoSlugPipelinesConfigVariables<
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
    const mutationDefaults =
      getPostRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuidQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['variables'][':variable_uuid']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pipelines_config/variables/:variable_uuid',
    args,
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuidQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['variables'][':variable_uuid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pipelines_config.variables[
          ':variable_uuid'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuid<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['variables'][':variable_uuid']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pipelines_config']['variables'][':variable_uuid']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuidQueryKey
          >
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
      ...getRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuidQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuid<
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
    const mutationDefaults =
      getPutRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuidMutationOptions<
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

export function createDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults =
      getDeleteRepositoriesWorkspaceRepoSlugPipelinesConfigVariablesVariableUuidMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugPropertiesAppKeyPropertyNameQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['properties'][':app_key'][':property_name']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/properties/:app_key/:property_name',
    args,
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPropertiesAppKeyPropertyNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['properties'][':app_key'][':property_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugPropertiesAppKeyPropertyNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].properties[':app_key'][
          ':property_name'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugPropertiesAppKeyPropertyName<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['properties'][':app_key'][':property_name']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['properties'][':app_key'][':property_name']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugPropertiesAppKeyPropertyNameQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugPropertiesAppKeyPropertyNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutRepositoriesWorkspaceRepoSlugPropertiesAppKeyPropertyName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults =
      getPutRepositoriesWorkspaceRepoSlugPropertiesAppKeyPropertyNameMutationOptions<
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

export function createDeleteRepositoriesWorkspaceRepoSlugPropertiesAppKeyPropertyName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults =
      getDeleteRepositoriesWorkspaceRepoSlugPropertiesAppKeyPropertyNameMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugPullrequestsQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests']['$get']
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/pullrequests', args] as const
}

export function getRepositoriesWorkspaceRepoSlugPullrequestsQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugPullrequestsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pullrequests.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugPullrequests<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugPullrequestsQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugPullrequestsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostRepositoriesWorkspaceRepoSlugPullrequests<
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
    const mutationDefaults = getPostRepositoriesWorkspaceRepoSlugPullrequestsMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugPullrequestsActivityQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests']['activity']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/activity',
    args,
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPullrequestsActivityQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests']['activity']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugPullrequestsActivityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pullrequests.activity.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugPullrequestsActivity<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests']['activity']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests']['activity']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugPullrequestsActivityQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugPullrequestsActivityQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id',
    args,
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pullrequests[':pull_request_id'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugPullrequestsPullRequestId<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestId<
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
    const mutationDefaults =
      getPutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivityQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['activity']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/activity',
    args,
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivityQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['activity']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pullrequests[
          ':pull_request_id'
        ].activity.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivity<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['activity']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['activity']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivityQueryKey
          >
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
      ...getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivityQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprove<
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
    const mutationDefaults =
      getPostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveMutationOptions<
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

export function createDeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults =
      getDeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/comments',
    args,
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pullrequests[
          ':pull_request_id'
        ].comments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdComments<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsQueryKey
          >
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
      ...getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdComments<
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
    const mutationDefaults =
      getPostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments'][':comment_id']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/comments/:comment_id',
    args,
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments'][':comment_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pullrequests[':pull_request_id'].comments[
          ':comment_id'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['comments'][':comment_id']['$get']
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
      ...getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId<
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
    const mutationDefaults =
      getPutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdMutationOptions<
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

export function createDeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults =
      getDeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdMutationOptions<
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

export function createPostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResolve<
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
    const mutationDefaults =
      getPostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResolveMutationOptions<
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

export function createDeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResolve<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults =
      getDeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResolveMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommitsQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['commits']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/commits',
    args,
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommitsQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['commits']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommitsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pullrequests[
          ':pull_request_id'
        ].commits.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommits<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['commits']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['commits']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommitsQueryKey
          >
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
      ...getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommitsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdConflictsQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['conflicts']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/conflicts',
    args,
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdConflictsQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['conflicts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdConflictsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pullrequests[
          ':pull_request_id'
        ].conflicts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdConflicts<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['conflicts']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['conflicts']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdConflictsQueryKey
          >
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
      ...getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdConflictsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDecline<
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
    const mutationDefaults =
      getPostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclineMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['diff']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/diff',
    args,
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['diff']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pullrequests[':pull_request_id'].diff.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiff<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['diff']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['diff']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstatQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['diffstat']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/diffstat',
    args,
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstatQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['diffstat']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pullrequests[
          ':pull_request_id'
        ].diffstat.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstat<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['diffstat']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['diffstat']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstatQueryKey
          >
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
      ...getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstatQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMerge<
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
    const mutationDefaults =
      getPostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskIdQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['merge']['task-status'][':task_id']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/merge/task-status/:task_id',
    args,
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['merge']['task-status'][':task_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pullrequests[':pull_request_id'].merge[
          'task-status'
        ][':task_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskId<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['merge']['task-status'][':task_id']['$get']
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
      ...getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeabilityChecksQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['mergeability']['checks']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/mergeability/checks',
    args,
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeabilityChecksQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['mergeability']['checks']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeabilityChecksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pullrequests[
          ':pull_request_id'
        ].mergeability.checks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeabilityChecks<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['mergeability']['checks']['$get']
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
      ...getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeabilityChecksQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['patch']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/patch',
    args,
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['patch']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pullrequests[':pull_request_id'].patch.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatch<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['patch']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['patch']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChanges<
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
    const mutationDefaults =
      getPostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesMutationOptions<
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

export function createDeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChanges<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults =
      getDeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['statuses']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/statuses',
    args,
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['statuses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pullrequests[
          ':pull_request_id'
        ].statuses.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatuses<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['statuses']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['statuses']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesQueryKey
          >
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
      ...getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasksQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['tasks']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/tasks',
    args,
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasksQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['tasks']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pullrequests[':pull_request_id'].tasks.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasks<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['tasks']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['tasks']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasksQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasksQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasks<
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
    const mutationDefaults =
      getPostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasksMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasksTaskIdQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['tasks'][':task_id']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pull_request_id/tasks/:task_id',
    args,
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasksTaskIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['tasks'][':task_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasksTaskIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pullrequests[':pull_request_id'].tasks[
          ':task_id'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasksTaskId<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['tasks'][':task_id']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pull_request_id']['tasks'][':task_id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasksTaskIdQueryKey
          >
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
      ...getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasksTaskIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasksTaskId<
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
    const mutationDefaults =
      getPutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasksTaskIdMutationOptions<
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

export function createDeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasksTaskId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults =
      getDeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdTasksTaskIdMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugPullrequestsPullrequestIdPropertiesAppKeyPropertyNameQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pullrequest_id']['properties'][':app_key'][':property_name']['$get']
  >,
) {
  return [
    'repositories',
    '/repositories/:workspace/:repo_slug/pullrequests/:pullrequest_id/properties/:app_key/:property_name',
    args,
  ] as const
}

export function getRepositoriesWorkspaceRepoSlugPullrequestsPullrequestIdPropertiesAppKeyPropertyNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pullrequest_id']['properties'][':app_key'][':property_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getRepositoriesWorkspaceRepoSlugPullrequestsPullrequestIdPropertiesAppKeyPropertyNameQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].pullrequests[':pullrequest_id'].properties[
          ':app_key'
        ][':property_name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugPullrequestsPullrequestIdPropertiesAppKeyPropertyName<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['pullrequests'][':pullrequest_id']['properties'][':app_key'][':property_name']['$get']
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
      ...getRepositoriesWorkspaceRepoSlugPullrequestsPullrequestIdPropertiesAppKeyPropertyNameQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutRepositoriesWorkspaceRepoSlugPullrequestsPullrequestIdPropertiesAppKeyPropertyName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults =
      getPutRepositoriesWorkspaceRepoSlugPullrequestsPullrequestIdPropertiesAppKeyPropertyNameMutationOptions<
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

export function createDeleteRepositoriesWorkspaceRepoSlugPullrequestsPullrequestIdPropertiesAppKeyPropertyName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults =
      getDeleteRepositoriesWorkspaceRepoSlugPullrequestsPullrequestIdPropertiesAppKeyPropertyNameMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugRefsQueryKey(
  args: InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['refs']['$get']>,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/refs', args] as const
}

export function getRepositoriesWorkspaceRepoSlugRefsQueryOptions<
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
  args: InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['refs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugRefsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].refs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugRefs<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['refs']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['refs']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugRefsQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugRefsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRepositoriesWorkspaceRepoSlugRefsBranchesQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['refs']['branches']['$get']
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/refs/branches', args] as const
}

export function getRepositoriesWorkspaceRepoSlugRefsBranchesQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['refs']['branches']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugRefsBranchesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].refs.branches.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugRefsBranches<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['refs']['branches']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['refs']['branches']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugRefsBranchesQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugRefsBranchesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostRepositoriesWorkspaceRepoSlugRefsBranches<
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
    const mutationDefaults = getPostRepositoriesWorkspaceRepoSlugRefsBranchesMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugRefsBranchesNameQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['refs']['branches'][':name']['$get']
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/refs/branches/:name', args] as const
}

export function getRepositoriesWorkspaceRepoSlugRefsBranchesNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['refs']['branches'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugRefsBranchesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].refs.branches[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugRefsBranchesName<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['refs']['branches'][':name']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['refs']['branches'][':name']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugRefsBranchesNameQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugRefsBranchesNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createDeleteRepositoriesWorkspaceRepoSlugRefsBranchesName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugRefsTagsQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['refs']['tags']['$get']
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/refs/tags', args] as const
}

export function getRepositoriesWorkspaceRepoSlugRefsTagsQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['refs']['tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugRefsTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].refs.tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugRefsTags<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['refs']['tags']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['refs']['tags']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugRefsTagsQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugRefsTagsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostRepositoriesWorkspaceRepoSlugRefsTags<
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
    const mutationDefaults = getPostRepositoriesWorkspaceRepoSlugRefsTagsMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugRefsTagsNameQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['refs']['tags'][':name']['$get']
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/refs/tags/:name', args] as const
}

export function getRepositoriesWorkspaceRepoSlugRefsTagsNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['refs']['tags'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugRefsTagsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].refs.tags[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugRefsTagsName<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['refs']['tags'][':name']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['refs']['tags'][':name']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugRefsTagsNameQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugRefsTagsNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createDeleteRepositoriesWorkspaceRepoSlugRefsTagsName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteRepositoriesWorkspaceRepoSlugRefsTagsNameMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugSrcQueryKey(
  args: InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['src']['$get']>,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/src', args] as const
}

export function getRepositoriesWorkspaceRepoSlugSrcQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.repositories)[':workspace'][':repo_slug']['src']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.repositories)[':workspace'][':repo_slug']['src']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugSrcQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].src.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugSrc<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.repositories)[':workspace'][':repo_slug']['src']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['src']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['src']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugSrcQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugSrcQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostRepositoriesWorkspaceRepoSlugSrc<
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
    const mutationDefaults = getPostRepositoriesWorkspaceRepoSlugSrcMutationOptions<
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

export function getRepositoriesWorkspaceRepoSlugSrcCommitPathQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['src'][':commit'][':path']['$get']
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/src/:commit/:path', args] as const
}

export function getRepositoriesWorkspaceRepoSlugSrcCommitPathQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['src'][':commit'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugSrcCommitPathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].src[':commit'][':path'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugSrcCommitPath<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['src'][':commit'][':path']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['src'][':commit'][':path']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugSrcCommitPathQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugSrcCommitPathQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getRepositoriesWorkspaceRepoSlugWatchersQueryKey(
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['watchers']['$get']
  >,
) {
  return ['repositories', '/repositories/:workspace/:repo_slug/watchers', args] as const
}

export function getRepositoriesWorkspaceRepoSlugWatchersQueryOptions<
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
  args: InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['watchers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getRepositoriesWorkspaceRepoSlugWatchersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.repositories[':workspace'][':repo_slug'].watchers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRepositoriesWorkspaceRepoSlugWatchers<
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
  args: () => InferRequestType<
    (typeof client.repositories)[':workspace'][':repo_slug']['watchers']['$get']
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
                    (typeof client.repositories)[':workspace'][':repo_slug']['watchers']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRepositoriesWorkspaceRepoSlugWatchersQueryKey>
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
      ...getRepositoriesWorkspaceRepoSlugWatchersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostSnippets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snippets.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.snippets.$post>,
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
    const mutationDefaults = getPostSnippetsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSnippetsWorkspaceQueryKey(
  args: InferRequestType<(typeof client.snippets)[':workspace']['$get']>,
) {
  return ['snippets', '/snippets/:workspace', args] as const
}

export function getSnippetsWorkspaceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.snippets)[':workspace']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.snippets)[':workspace']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.snippets)[':workspace']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSnippetsWorkspaceQueryKey>
  >({
    queryKey: getSnippetsWorkspaceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.snippets[':workspace'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSnippetsWorkspace<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.snippets)[':workspace']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.snippets)[':workspace']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.snippets)[':workspace']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSnippetsWorkspaceQueryKey>
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
    return { ...getSnippetsWorkspaceQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostSnippetsWorkspace<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostSnippetsWorkspaceMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSnippetsWorkspaceEncodedIdQueryKey(
  args: InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['$get']>,
) {
  return ['snippets', '/snippets/:workspace/:encoded_id', args] as const
}

export function getSnippetsWorkspaceEncodedIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.snippets)[':workspace'][':encoded_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSnippetsWorkspaceEncodedIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.snippets[':workspace'][':encoded_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSnippetsWorkspaceEncodedId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.snippets)[':workspace'][':encoded_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getSnippetsWorkspaceEncodedIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutSnippetsWorkspaceEncodedId<
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
                Awaited<ReturnType<(typeof client.snippets)[':workspace'][':encoded_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['$put']>,
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
    const mutationDefaults = getPutSnippetsWorkspaceEncodedIdMutationOptions<
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

export function createDeleteSnippetsWorkspaceEncodedId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteSnippetsWorkspaceEncodedIdMutationOptions<
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

export function getSnippetsWorkspaceEncodedIdCommentsQueryKey(
  args: InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['comments']['$get']>,
) {
  return ['snippets', '/snippets/:workspace/:encoded_id/comments', args] as const
}

export function getSnippetsWorkspaceEncodedIdCommentsQueryOptions<
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
  args: InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSnippetsWorkspaceEncodedIdCommentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.snippets[':workspace'][':encoded_id'].comments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSnippetsWorkspaceEncodedIdComments<
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
  args: () => InferRequestType<
    (typeof client.snippets)[':workspace'][':encoded_id']['comments']['$get']
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
                    (typeof client.snippets)[':workspace'][':encoded_id']['comments']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSnippetsWorkspaceEncodedIdCommentsQueryKey>
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
      ...getSnippetsWorkspaceEncodedIdCommentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostSnippetsWorkspaceEncodedIdComments<
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
    const mutationDefaults = getPostSnippetsWorkspaceEncodedIdCommentsMutationOptions<
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

export function getSnippetsWorkspaceEncodedIdCommentsCommentIdQueryKey(
  args: InferRequestType<
    (typeof client.snippets)[':workspace'][':encoded_id']['comments'][':comment_id']['$get']
  >,
) {
  return ['snippets', '/snippets/:workspace/:encoded_id/comments/:comment_id', args] as const
}

export function getSnippetsWorkspaceEncodedIdCommentsCommentIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.snippets)[':workspace'][':encoded_id']['comments'][':comment_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSnippetsWorkspaceEncodedIdCommentsCommentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.snippets[':workspace'][':encoded_id'].comments[':comment_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSnippetsWorkspaceEncodedIdCommentsCommentId<
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
  args: () => InferRequestType<
    (typeof client.snippets)[':workspace'][':encoded_id']['comments'][':comment_id']['$get']
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
                    (typeof client.snippets)[':workspace'][':encoded_id']['comments'][':comment_id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSnippetsWorkspaceEncodedIdCommentsCommentIdQueryKey>
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
      ...getSnippetsWorkspaceEncodedIdCommentsCommentIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutSnippetsWorkspaceEncodedIdCommentsCommentId<
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
    const mutationDefaults = getPutSnippetsWorkspaceEncodedIdCommentsCommentIdMutationOptions<
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

export function createDeleteSnippetsWorkspaceEncodedIdCommentsCommentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteSnippetsWorkspaceEncodedIdCommentsCommentIdMutationOptions<
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

export function getSnippetsWorkspaceEncodedIdCommitsQueryKey(
  args: InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['commits']['$get']>,
) {
  return ['snippets', '/snippets/:workspace/:encoded_id/commits', args] as const
}

export function getSnippetsWorkspaceEncodedIdCommitsQueryOptions<
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
  args: InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['commits']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSnippetsWorkspaceEncodedIdCommitsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.snippets[':workspace'][':encoded_id'].commits.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSnippetsWorkspaceEncodedIdCommits<
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
  args: () => InferRequestType<
    (typeof client.snippets)[':workspace'][':encoded_id']['commits']['$get']
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
                    (typeof client.snippets)[':workspace'][':encoded_id']['commits']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSnippetsWorkspaceEncodedIdCommitsQueryKey>
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
      ...getSnippetsWorkspaceEncodedIdCommitsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSnippetsWorkspaceEncodedIdCommitsRevisionQueryKey(
  args: InferRequestType<
    (typeof client.snippets)[':workspace'][':encoded_id']['commits'][':revision']['$get']
  >,
) {
  return ['snippets', '/snippets/:workspace/:encoded_id/commits/:revision', args] as const
}

export function getSnippetsWorkspaceEncodedIdCommitsRevisionQueryOptions<
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
  args: InferRequestType<
    (typeof client.snippets)[':workspace'][':encoded_id']['commits'][':revision']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSnippetsWorkspaceEncodedIdCommitsRevisionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.snippets[':workspace'][':encoded_id'].commits[':revision'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSnippetsWorkspaceEncodedIdCommitsRevision<
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
  args: () => InferRequestType<
    (typeof client.snippets)[':workspace'][':encoded_id']['commits'][':revision']['$get']
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
                    (typeof client.snippets)[':workspace'][':encoded_id']['commits'][':revision']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSnippetsWorkspaceEncodedIdCommitsRevisionQueryKey>
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
      ...getSnippetsWorkspaceEncodedIdCommitsRevisionQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getSnippetsWorkspaceEncodedIdFilesPathQueryKey(
  args: InferRequestType<
    (typeof client.snippets)[':workspace'][':encoded_id']['files'][':path']['$get']
  >,
) {
  return ['snippets', '/snippets/:workspace/:encoded_id/files/:path', args] as const
}

export function getSnippetsWorkspaceEncodedIdFilesPathQueryOptions<
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
  args: InferRequestType<
    (typeof client.snippets)[':workspace'][':encoded_id']['files'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSnippetsWorkspaceEncodedIdFilesPathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.snippets[':workspace'][':encoded_id'].files[':path'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSnippetsWorkspaceEncodedIdFilesPath<
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
  args: () => InferRequestType<
    (typeof client.snippets)[':workspace'][':encoded_id']['files'][':path']['$get']
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
                    (typeof client.snippets)[':workspace'][':encoded_id']['files'][':path']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSnippetsWorkspaceEncodedIdFilesPathQueryKey>
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
      ...getSnippetsWorkspaceEncodedIdFilesPathQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSnippetsWorkspaceEncodedIdWatchQueryKey(
  args: InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['watch']['$get']>,
) {
  return ['snippets', '/snippets/:workspace/:encoded_id/watch', args] as const
}

export function getSnippetsWorkspaceEncodedIdWatchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.snippets)[':workspace'][':encoded_id']['watch']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['watch']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSnippetsWorkspaceEncodedIdWatchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.snippets[':workspace'][':encoded_id'].watch.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSnippetsWorkspaceEncodedIdWatch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.snippets)[':workspace'][':encoded_id']['watch']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.snippets)[':workspace'][':encoded_id']['watch']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getSnippetsWorkspaceEncodedIdWatchQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutSnippetsWorkspaceEncodedIdWatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutSnippetsWorkspaceEncodedIdWatchMutationOptions<
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

export function createDeleteSnippetsWorkspaceEncodedIdWatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteSnippetsWorkspaceEncodedIdWatchMutationOptions<
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

export function getSnippetsWorkspaceEncodedIdWatchersQueryKey(
  args: InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['watchers']['$get']>,
) {
  return ['snippets', '/snippets/:workspace/:encoded_id/watchers', args] as const
}

export function getSnippetsWorkspaceEncodedIdWatchersQueryOptions<
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
  args: InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id']['watchers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSnippetsWorkspaceEncodedIdWatchersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.snippets[':workspace'][':encoded_id'].watchers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSnippetsWorkspaceEncodedIdWatchers<
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
  args: () => InferRequestType<
    (typeof client.snippets)[':workspace'][':encoded_id']['watchers']['$get']
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
                    (typeof client.snippets)[':workspace'][':encoded_id']['watchers']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSnippetsWorkspaceEncodedIdWatchersQueryKey>
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
      ...getSnippetsWorkspaceEncodedIdWatchersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSnippetsWorkspaceEncodedIdNodeIdQueryKey(
  args: InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id'][':node_id']['$get']>,
) {
  return ['snippets', '/snippets/:workspace/:encoded_id/:node_id', args] as const
}

export function getSnippetsWorkspaceEncodedIdNodeIdQueryOptions<
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
  args: InferRequestType<(typeof client.snippets)[':workspace'][':encoded_id'][':node_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSnippetsWorkspaceEncodedIdNodeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.snippets[':workspace'][':encoded_id'][':node_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSnippetsWorkspaceEncodedIdNodeId<
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
  args: () => InferRequestType<
    (typeof client.snippets)[':workspace'][':encoded_id'][':node_id']['$get']
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
                    (typeof client.snippets)[':workspace'][':encoded_id'][':node_id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSnippetsWorkspaceEncodedIdNodeIdQueryKey>
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
      ...getSnippetsWorkspaceEncodedIdNodeIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutSnippetsWorkspaceEncodedIdNodeId<
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
    const mutationDefaults = getPutSnippetsWorkspaceEncodedIdNodeIdMutationOptions<
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

export function createDeleteSnippetsWorkspaceEncodedIdNodeId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteSnippetsWorkspaceEncodedIdNodeIdMutationOptions<
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

export function getSnippetsWorkspaceEncodedIdNodeIdFilesPathQueryKey(
  args: InferRequestType<
    (typeof client.snippets)[':workspace'][':encoded_id'][':node_id']['files'][':path']['$get']
  >,
) {
  return ['snippets', '/snippets/:workspace/:encoded_id/:node_id/files/:path', args] as const
}

export function getSnippetsWorkspaceEncodedIdNodeIdFilesPathQueryOptions<
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
  args: InferRequestType<
    (typeof client.snippets)[':workspace'][':encoded_id'][':node_id']['files'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSnippetsWorkspaceEncodedIdNodeIdFilesPathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.snippets[':workspace'][':encoded_id'][':node_id'].files[':path'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSnippetsWorkspaceEncodedIdNodeIdFilesPath<
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
  args: () => InferRequestType<
    (typeof client.snippets)[':workspace'][':encoded_id'][':node_id']['files'][':path']['$get']
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
                    (typeof client.snippets)[':workspace'][':encoded_id'][':node_id']['files'][':path']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSnippetsWorkspaceEncodedIdNodeIdFilesPathQueryKey>
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
      ...getSnippetsWorkspaceEncodedIdNodeIdFilesPathQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getSnippetsWorkspaceEncodedIdRevisionDiffQueryKey(
  args: InferRequestType<
    (typeof client.snippets)[':workspace'][':encoded_id'][':revision']['diff']['$get']
  >,
) {
  return ['snippets', '/snippets/:workspace/:encoded_id/:revision/diff', args] as const
}

export function getSnippetsWorkspaceEncodedIdRevisionDiffQueryOptions<
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
  args: InferRequestType<
    (typeof client.snippets)[':workspace'][':encoded_id'][':revision']['diff']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSnippetsWorkspaceEncodedIdRevisionDiffQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.snippets[':workspace'][':encoded_id'][':revision'].diff.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSnippetsWorkspaceEncodedIdRevisionDiff<
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
  args: () => InferRequestType<
    (typeof client.snippets)[':workspace'][':encoded_id'][':revision']['diff']['$get']
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
                    (typeof client.snippets)[':workspace'][':encoded_id'][':revision']['diff']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSnippetsWorkspaceEncodedIdRevisionDiffQueryKey>
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
      ...getSnippetsWorkspaceEncodedIdRevisionDiffQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getSnippetsWorkspaceEncodedIdRevisionPatchQueryKey(
  args: InferRequestType<
    (typeof client.snippets)[':workspace'][':encoded_id'][':revision']['patch']['$get']
  >,
) {
  return ['snippets', '/snippets/:workspace/:encoded_id/:revision/patch', args] as const
}

export function getSnippetsWorkspaceEncodedIdRevisionPatchQueryOptions<
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
  args: InferRequestType<
    (typeof client.snippets)[':workspace'][':encoded_id'][':revision']['patch']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSnippetsWorkspaceEncodedIdRevisionPatchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.snippets[':workspace'][':encoded_id'][':revision'].patch.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSnippetsWorkspaceEncodedIdRevisionPatch<
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
  args: () => InferRequestType<
    (typeof client.snippets)[':workspace'][':encoded_id'][':revision']['patch']['$get']
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
                    (typeof client.snippets)[':workspace'][':encoded_id'][':revision']['patch']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSnippetsWorkspaceEncodedIdRevisionPatchQueryKey>
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
      ...getSnippetsWorkspaceEncodedIdRevisionPatchQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getTeamsUsernamePipelinesConfigVariablesQueryKey(
  args: InferRequestType<
    (typeof client.teams)[':username']['pipelines_config']['variables']['$get']
  >,
) {
  return ['teams', '/teams/:username/pipelines_config/variables', args] as const
}

export function getTeamsUsernamePipelinesConfigVariablesQueryOptions<
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
  args: InferRequestType<
    (typeof client.teams)[':username']['pipelines_config']['variables']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTeamsUsernamePipelinesConfigVariablesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teams[':username'].pipelines_config.variables.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTeamsUsernamePipelinesConfigVariables<
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
  args: () => InferRequestType<
    (typeof client.teams)[':username']['pipelines_config']['variables']['$get']
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
                    (typeof client.teams)[':username']['pipelines_config']['variables']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTeamsUsernamePipelinesConfigVariablesQueryKey>
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
      ...getTeamsUsernamePipelinesConfigVariablesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostTeamsUsernamePipelinesConfigVariables<
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
    const mutationDefaults = getPostTeamsUsernamePipelinesConfigVariablesMutationOptions<
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

export function getTeamsUsernamePipelinesConfigVariablesVariableUuidQueryKey(
  args: InferRequestType<
    (typeof client.teams)[':username']['pipelines_config']['variables'][':variable_uuid']['$get']
  >,
) {
  return ['teams', '/teams/:username/pipelines_config/variables/:variable_uuid', args] as const
}

export function getTeamsUsernamePipelinesConfigVariablesVariableUuidQueryOptions<
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
  args: InferRequestType<
    (typeof client.teams)[':username']['pipelines_config']['variables'][':variable_uuid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTeamsUsernamePipelinesConfigVariablesVariableUuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teams[':username'].pipelines_config.variables[':variable_uuid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTeamsUsernamePipelinesConfigVariablesVariableUuid<
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
  args: () => InferRequestType<
    (typeof client.teams)[':username']['pipelines_config']['variables'][':variable_uuid']['$get']
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
                    (typeof client.teams)[':username']['pipelines_config']['variables'][':variable_uuid']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTeamsUsernamePipelinesConfigVariablesVariableUuidQueryKey>
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
      ...getTeamsUsernamePipelinesConfigVariablesVariableUuidQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutTeamsUsernamePipelinesConfigVariablesVariableUuid<
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
    const mutationDefaults = getPutTeamsUsernamePipelinesConfigVariablesVariableUuidMutationOptions<
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

export function createDeleteTeamsUsernamePipelinesConfigVariablesVariableUuid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults =
      getDeleteTeamsUsernamePipelinesConfigVariablesVariableUuidMutationOptions<
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

export function getTeamsUsernameSearchCodeQueryKey(
  args: InferRequestType<(typeof client.teams)[':username']['search']['code']['$get']>,
) {
  return ['teams', '/teams/:username/search/code', args] as const
}

export function getTeamsUsernameSearchCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':username']['search']['code']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':username']['search']['code']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTeamsUsernameSearchCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teams[':username'].search.code.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTeamsUsernameSearchCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':username']['search']['code']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.teams)[':username']['search']['code']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getTeamsUsernameSearchCodeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUserQueryKey() {
  return ['user', '/user'] as const
}

export function getUserQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUserQueryKey>
  >({
    queryKey: getUserQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.user.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUser<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getUserQueryKey>
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
    return { ...getUserQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getUserEmailsQueryKey() {
  return ['user', '/user/emails'] as const
}

export function getUserEmailsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.emails.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.emails.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUserEmailsQueryKey>
  >({
    queryKey: getUserEmailsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.user.emails.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUserEmails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.emails.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.emails.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getUserEmailsQueryKey>
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
    return { ...getUserEmailsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getUserEmailsEmailQueryKey(
  args: InferRequestType<(typeof client.user.emails)[':email']['$get']>,
) {
  return ['user', '/user/emails/:email', args] as const
}

export function getUserEmailsEmailQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.user.emails)[':email']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user.emails)[':email']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.user.emails)[':email']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserEmailsEmailQueryKey>
  >({
    queryKey: getUserEmailsEmailQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user.emails[':email'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUserEmailsEmail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.user.emails)[':email']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.user.emails)[':email']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user.emails)[':email']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserEmailsEmailQueryKey>
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
    return { ...getUserEmailsEmailQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getUserWorkspacesQueryKey(
  args: InferRequestType<typeof client.user.workspaces.$get>,
) {
  return ['user', '/user/workspaces', args] as const
}

export function getUserWorkspacesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.workspaces.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.user.workspaces.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.workspaces.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUserWorkspacesQueryKey>
  >({
    queryKey: getUserWorkspacesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user.workspaces.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUserWorkspaces<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.workspaces.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.user.workspaces.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user.workspaces.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserWorkspacesQueryKey>
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
    return { ...getUserWorkspacesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getUserWorkspacesWorkspacePermissionQueryKey(
  args: InferRequestType<(typeof client.user.workspaces)[':workspace']['permission']['$get']>,
) {
  return ['user', '/user/workspaces/:workspace/permission', args] as const
}

export function getUserWorkspacesWorkspacePermissionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user.workspaces)[':workspace']['permission']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user.workspaces)[':workspace']['permission']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUserWorkspacesWorkspacePermissionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user.workspaces[':workspace'].permission.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserWorkspacesWorkspacePermission<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user.workspaces)[':workspace']['permission']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.user.workspaces)[':workspace']['permission']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getUserWorkspacesWorkspacePermissionQueryKey>
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
      ...getUserWorkspacesWorkspacePermissionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUserWorkspacesWorkspacePermissionsRepositoriesQueryKey(
  args: InferRequestType<
    (typeof client.user.workspaces)[':workspace']['permissions']['repositories']['$get']
  >,
) {
  return ['user', '/user/workspaces/:workspace/permissions/repositories', args] as const
}

export function getUserWorkspacesWorkspacePermissionsRepositoriesQueryOptions<
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
  args: InferRequestType<
    (typeof client.user.workspaces)[':workspace']['permissions']['repositories']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUserWorkspacesWorkspacePermissionsRepositoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user.workspaces[':workspace'].permissions.repositories.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUserWorkspacesWorkspacePermissionsRepositories<
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
  args: () => InferRequestType<
    (typeof client.user.workspaces)[':workspace']['permissions']['repositories']['$get']
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
                    (typeof client.user.workspaces)[':workspace']['permissions']['repositories']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUserWorkspacesWorkspacePermissionsRepositoriesQueryKey>
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
      ...getUserWorkspacesWorkspacePermissionsRepositoriesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getUsersSelectedUserQueryKey(
  args: InferRequestType<(typeof client.users)[':selected_user']['$get']>,
) {
  return ['users', '/users/:selected_user', args] as const
}

export function getUsersSelectedUserQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':selected_user']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':selected_user']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':selected_user']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersSelectedUserQueryKey>
  >({
    queryKey: getUsersSelectedUserQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':selected_user'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersSelectedUser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':selected_user']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':selected_user']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':selected_user']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersSelectedUserQueryKey>
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
    return { ...getUsersSelectedUserQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getUsersSelectedUserGpgKeysQueryKey(
  args: InferRequestType<(typeof client.users)[':selected_user']['gpg-keys']['$get']>,
) {
  return ['users', '/users/:selected_user/gpg-keys', args] as const
}

export function getUsersSelectedUserGpgKeysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':selected_user']['gpg-keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':selected_user']['gpg-keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUsersSelectedUserGpgKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':selected_user']['gpg-keys'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersSelectedUserGpgKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':selected_user']['gpg-keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':selected_user']['gpg-keys']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getUsersSelectedUserGpgKeysQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostUsersSelectedUserGpgKeys<
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
                Awaited<ReturnType<(typeof client.users)[':selected_user']['gpg-keys']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':selected_user']['gpg-keys']['$post']>,
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
    const mutationDefaults = getPostUsersSelectedUserGpgKeysMutationOptions<
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

export function getUsersSelectedUserGpgKeysFingerprintQueryKey(
  args: InferRequestType<
    (typeof client.users)[':selected_user']['gpg-keys'][':fingerprint']['$get']
  >,
) {
  return ['users', '/users/:selected_user/gpg-keys/:fingerprint', args] as const
}

export function getUsersSelectedUserGpgKeysFingerprintQueryOptions<
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
  args: InferRequestType<
    (typeof client.users)[':selected_user']['gpg-keys'][':fingerprint']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUsersSelectedUserGpgKeysFingerprintQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':selected_user']['gpg-keys'][':fingerprint'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersSelectedUserGpgKeysFingerprint<
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
  args: () => InferRequestType<
    (typeof client.users)[':selected_user']['gpg-keys'][':fingerprint']['$get']
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
                    (typeof client.users)[':selected_user']['gpg-keys'][':fingerprint']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersSelectedUserGpgKeysFingerprintQueryKey>
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
      ...getUsersSelectedUserGpgKeysFingerprintQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteUsersSelectedUserGpgKeysFingerprint<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteUsersSelectedUserGpgKeysFingerprintMutationOptions<
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

export function getUsersSelectedUserPipelinesConfigVariablesQueryKey(
  args: InferRequestType<
    (typeof client.users)[':selected_user']['pipelines_config']['variables']['$get']
  >,
) {
  return ['users', '/users/:selected_user/pipelines_config/variables', args] as const
}

export function getUsersSelectedUserPipelinesConfigVariablesQueryOptions<
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
  args: InferRequestType<
    (typeof client.users)[':selected_user']['pipelines_config']['variables']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUsersSelectedUserPipelinesConfigVariablesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':selected_user'].pipelines_config.variables.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersSelectedUserPipelinesConfigVariables<
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
  args: () => InferRequestType<
    (typeof client.users)[':selected_user']['pipelines_config']['variables']['$get']
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
                    (typeof client.users)[':selected_user']['pipelines_config']['variables']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersSelectedUserPipelinesConfigVariablesQueryKey>
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
      ...getUsersSelectedUserPipelinesConfigVariablesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostUsersSelectedUserPipelinesConfigVariables<
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
    const mutationDefaults = getPostUsersSelectedUserPipelinesConfigVariablesMutationOptions<
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

export function getUsersSelectedUserPipelinesConfigVariablesVariableUuidQueryKey(
  args: InferRequestType<
    (typeof client.users)[':selected_user']['pipelines_config']['variables'][':variable_uuid']['$get']
  >,
) {
  return ['users', '/users/:selected_user/pipelines_config/variables/:variable_uuid', args] as const
}

export function getUsersSelectedUserPipelinesConfigVariablesVariableUuidQueryOptions<
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
  args: InferRequestType<
    (typeof client.users)[':selected_user']['pipelines_config']['variables'][':variable_uuid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUsersSelectedUserPipelinesConfigVariablesVariableUuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':selected_user'].pipelines_config.variables[':variable_uuid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersSelectedUserPipelinesConfigVariablesVariableUuid<
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
  args: () => InferRequestType<
    (typeof client.users)[':selected_user']['pipelines_config']['variables'][':variable_uuid']['$get']
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
                    (typeof client.users)[':selected_user']['pipelines_config']['variables'][':variable_uuid']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersSelectedUserPipelinesConfigVariablesVariableUuidQueryKey>
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
      ...getUsersSelectedUserPipelinesConfigVariablesVariableUuidQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutUsersSelectedUserPipelinesConfigVariablesVariableUuid<
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
    const mutationDefaults =
      getPutUsersSelectedUserPipelinesConfigVariablesVariableUuidMutationOptions<
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

export function createDeleteUsersSelectedUserPipelinesConfigVariablesVariableUuid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults =
      getDeleteUsersSelectedUserPipelinesConfigVariablesVariableUuidMutationOptions<
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

export function getUsersSelectedUserPropertiesAppKeyPropertyNameQueryKey(
  args: InferRequestType<
    (typeof client.users)[':selected_user']['properties'][':app_key'][':property_name']['$get']
  >,
) {
  return ['users', '/users/:selected_user/properties/:app_key/:property_name', args] as const
}

export function getUsersSelectedUserPropertiesAppKeyPropertyNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.users)[':selected_user']['properties'][':app_key'][':property_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUsersSelectedUserPropertiesAppKeyPropertyNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':selected_user'].properties[':app_key'][':property_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersSelectedUserPropertiesAppKeyPropertyName<
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
  args: () => InferRequestType<
    (typeof client.users)[':selected_user']['properties'][':app_key'][':property_name']['$get']
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
                    (typeof client.users)[':selected_user']['properties'][':app_key'][':property_name']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersSelectedUserPropertiesAppKeyPropertyNameQueryKey>
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
      ...getUsersSelectedUserPropertiesAppKeyPropertyNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutUsersSelectedUserPropertiesAppKeyPropertyName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutUsersSelectedUserPropertiesAppKeyPropertyNameMutationOptions<
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

export function createDeleteUsersSelectedUserPropertiesAppKeyPropertyName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteUsersSelectedUserPropertiesAppKeyPropertyNameMutationOptions<
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

export function getUsersSelectedUserSearchCodeQueryKey(
  args: InferRequestType<(typeof client.users)[':selected_user']['search']['code']['$get']>,
) {
  return ['users', '/users/:selected_user/search/code', args] as const
}

export function getUsersSelectedUserSearchCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':selected_user']['search']['code']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':selected_user']['search']['code']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUsersSelectedUserSearchCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':selected_user'].search.code.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersSelectedUserSearchCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':selected_user']['search']['code']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':selected_user']['search']['code']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getUsersSelectedUserSearchCodeQueryKey>
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
      ...getUsersSelectedUserSearchCodeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getUsersSelectedUserSshKeysQueryKey(
  args: InferRequestType<(typeof client.users)[':selected_user']['ssh-keys']['$get']>,
) {
  return ['users', '/users/:selected_user/ssh-keys', args] as const
}

export function getUsersSelectedUserSshKeysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':selected_user']['ssh-keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':selected_user']['ssh-keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUsersSelectedUserSshKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':selected_user']['ssh-keys'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersSelectedUserSshKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':selected_user']['ssh-keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':selected_user']['ssh-keys']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getUsersSelectedUserSshKeysQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostUsersSelectedUserSshKeys<
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
                Awaited<ReturnType<(typeof client.users)[':selected_user']['ssh-keys']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':selected_user']['ssh-keys']['$post']>,
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
    const mutationDefaults = getPostUsersSelectedUserSshKeysMutationOptions<
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

export function getUsersSelectedUserSshKeysKeyIdQueryKey(
  args: InferRequestType<(typeof client.users)[':selected_user']['ssh-keys'][':key_id']['$get']>,
) {
  return ['users', '/users/:selected_user/ssh-keys/:key_id', args] as const
}

export function getUsersSelectedUserSshKeysKeyIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':selected_user']['ssh-keys'][':key_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':selected_user']['ssh-keys'][':key_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getUsersSelectedUserSshKeysKeyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':selected_user']['ssh-keys'][':key_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersSelectedUserSshKeysKeyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':selected_user']['ssh-keys'][':key_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.users)[':selected_user']['ssh-keys'][':key_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getUsersSelectedUserSshKeysKeyIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutUsersSelectedUserSshKeysKeyId<
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
                  ReturnType<(typeof client.users)[':selected_user']['ssh-keys'][':key_id']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':selected_user']['ssh-keys'][':key_id']['$put']>,
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
    const mutationDefaults = getPutUsersSelectedUserSshKeysKeyIdMutationOptions<
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

export function createDeleteUsersSelectedUserSshKeysKeyId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteUsersSelectedUserSshKeysKeyIdMutationOptions<
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

export function getWorkspacesWorkspaceQueryKey(
  args: InferRequestType<(typeof client.workspaces)[':workspace']['$get']>,
) {
  return ['workspaces', '/workspaces/:workspace', args] as const
}

export function getWorkspacesWorkspaceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.workspaces)[':workspace']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.workspaces)[':workspace']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.workspaces)[':workspace']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspacesWorkspaceQueryKey>
  >({
    queryKey: getWorkspacesWorkspaceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workspaces[':workspace'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkspacesWorkspace<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.workspaces)[':workspace']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.workspaces)[':workspace']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workspaces)[':workspace']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getWorkspacesWorkspaceQueryKey>
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
    return { ...getWorkspacesWorkspaceQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostWorkspacesWorkspaceCodesearch<
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
                Awaited<ReturnType<(typeof client.workspaces)[':workspace']['codesearch']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.workspaces)[':workspace']['codesearch']['$post']>,
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
    const mutationDefaults = getPostWorkspacesWorkspaceCodesearchMutationOptions<
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

export function getWorkspacesWorkspaceHooksQueryKey(
  args: InferRequestType<(typeof client.workspaces)[':workspace']['hooks']['$get']>,
) {
  return ['workspaces', '/workspaces/:workspace/hooks', args] as const
}

export function getWorkspacesWorkspaceHooksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workspaces)[':workspace']['hooks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.workspaces)[':workspace']['hooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWorkspacesWorkspaceHooksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workspaces[':workspace'].hooks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkspacesWorkspaceHooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workspaces)[':workspace']['hooks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.workspaces)[':workspace']['hooks']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getWorkspacesWorkspaceHooksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostWorkspacesWorkspaceHooks<
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
                Awaited<ReturnType<(typeof client.workspaces)[':workspace']['hooks']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.workspaces)[':workspace']['hooks']['$post']>,
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
    const mutationDefaults = getPostWorkspacesWorkspaceHooksMutationOptions<
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

export function getWorkspacesWorkspaceHooksUidQueryKey(
  args: InferRequestType<(typeof client.workspaces)[':workspace']['hooks'][':uid']['$get']>,
) {
  return ['workspaces', '/workspaces/:workspace/hooks/:uid', args] as const
}

export function getWorkspacesWorkspaceHooksUidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workspaces)[':workspace']['hooks'][':uid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.workspaces)[':workspace']['hooks'][':uid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWorkspacesWorkspaceHooksUidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workspaces[':workspace'].hooks[':uid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkspacesWorkspaceHooksUid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workspaces)[':workspace']['hooks'][':uid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.workspaces)[':workspace']['hooks'][':uid']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getWorkspacesWorkspaceHooksUidQueryKey>
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
      ...getWorkspacesWorkspaceHooksUidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutWorkspacesWorkspaceHooksUid<
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
                  ReturnType<(typeof client.workspaces)[':workspace']['hooks'][':uid']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.workspaces)[':workspace']['hooks'][':uid']['$put']>,
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
    const mutationDefaults = getPutWorkspacesWorkspaceHooksUidMutationOptions<
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

export function createDeleteWorkspacesWorkspaceHooksUid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteWorkspacesWorkspaceHooksUidMutationOptions<
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

export function getWorkspacesWorkspaceMembersQueryKey(
  args: InferRequestType<(typeof client.workspaces)[':workspace']['members']['$get']>,
) {
  return ['workspaces', '/workspaces/:workspace/members', args] as const
}

export function getWorkspacesWorkspaceMembersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workspaces)[':workspace']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.workspaces)[':workspace']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWorkspacesWorkspaceMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workspaces[':workspace'].members.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkspacesWorkspaceMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workspaces)[':workspace']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.workspaces)[':workspace']['members']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getWorkspacesWorkspaceMembersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getWorkspacesWorkspaceMembersMemberQueryKey(
  args: InferRequestType<(typeof client.workspaces)[':workspace']['members'][':member']['$get']>,
) {
  return ['workspaces', '/workspaces/:workspace/members/:member', args] as const
}

export function getWorkspacesWorkspaceMembersMemberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workspaces)[':workspace']['members'][':member']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.workspaces)[':workspace']['members'][':member']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWorkspacesWorkspaceMembersMemberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workspaces[':workspace'].members[':member'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkspacesWorkspaceMembersMember<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workspaces)[':workspace']['members'][':member']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.workspaces)[':workspace']['members'][':member']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getWorkspacesWorkspaceMembersMemberQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getWorkspacesWorkspacePermissionsQueryKey(
  args: InferRequestType<(typeof client.workspaces)[':workspace']['permissions']['$get']>,
) {
  return ['workspaces', '/workspaces/:workspace/permissions', args] as const
}

export function getWorkspacesWorkspacePermissionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workspaces)[':workspace']['permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.workspaces)[':workspace']['permissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWorkspacesWorkspacePermissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workspaces[':workspace'].permissions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkspacesWorkspacePermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workspaces)[':workspace']['permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.workspaces)[':workspace']['permissions']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getWorkspacesWorkspacePermissionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getWorkspacesWorkspacePermissionsRepositoriesQueryKey(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['permissions']['repositories']['$get']
  >,
) {
  return ['workspaces', '/workspaces/:workspace/permissions/repositories', args] as const
}

export function getWorkspacesWorkspacePermissionsRepositoriesQueryOptions<
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
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['permissions']['repositories']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWorkspacesWorkspacePermissionsRepositoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workspaces[':workspace'].permissions.repositories.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkspacesWorkspacePermissionsRepositories<
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
  args: () => InferRequestType<
    (typeof client.workspaces)[':workspace']['permissions']['repositories']['$get']
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
                    (typeof client.workspaces)[':workspace']['permissions']['repositories']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getWorkspacesWorkspacePermissionsRepositoriesQueryKey>
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
      ...getWorkspacesWorkspacePermissionsRepositoriesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getWorkspacesWorkspacePermissionsRepositoriesRepoSlugQueryKey(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['permissions']['repositories'][':repo_slug']['$get']
  >,
) {
  return ['workspaces', '/workspaces/:workspace/permissions/repositories/:repo_slug', args] as const
}

export function getWorkspacesWorkspacePermissionsRepositoriesRepoSlugQueryOptions<
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
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['permissions']['repositories'][':repo_slug']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWorkspacesWorkspacePermissionsRepositoriesRepoSlugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workspaces[':workspace'].permissions.repositories[':repo_slug'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkspacesWorkspacePermissionsRepositoriesRepoSlug<
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
  args: () => InferRequestType<
    (typeof client.workspaces)[':workspace']['permissions']['repositories'][':repo_slug']['$get']
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
                    (typeof client.workspaces)[':workspace']['permissions']['repositories'][':repo_slug']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getWorkspacesWorkspacePermissionsRepositoriesRepoSlugQueryKey>
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
      ...getWorkspacesWorkspacePermissionsRepositoriesRepoSlugQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getWorkspacesWorkspacePipelinesConfigIdentityOidcWellKnownOpenidConfigurationQueryKey(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['pipelines-config']['identity']['oidc']['.well-known']['openid-configuration']['$get']
  >,
) {
  return [
    'workspaces',
    '/workspaces/:workspace/pipelines-config/identity/oidc/.well-known/openid-configuration',
    args,
  ] as const
}

export function getWorkspacesWorkspacePipelinesConfigIdentityOidcWellKnownOpenidConfigurationQueryOptions<
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
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['pipelines-config']['identity']['oidc']['.well-known']['openid-configuration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getWorkspacesWorkspacePipelinesConfigIdentityOidcWellKnownOpenidConfigurationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workspaces[':workspace']['pipelines-config'].identity.oidc['.well-known'][
          'openid-configuration'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createWorkspacesWorkspacePipelinesConfigIdentityOidcWellKnownOpenidConfiguration<
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
  args: () => InferRequestType<
    (typeof client.workspaces)[':workspace']['pipelines-config']['identity']['oidc']['.well-known']['openid-configuration']['$get']
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
      ...getWorkspacesWorkspacePipelinesConfigIdentityOidcWellKnownOpenidConfigurationQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJsonQueryKey(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['pipelines-config']['identity']['oidc']['keys.json']['$get']
  >,
) {
  return [
    'workspaces',
    '/workspaces/:workspace/pipelines-config/identity/oidc/keys.json',
    args,
  ] as const
}

export function getWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJsonQueryOptions<
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
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['pipelines-config']['identity']['oidc']['keys.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workspaces[':workspace']['pipelines-config'].identity.oidc['keys.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJson<
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
  args: () => InferRequestType<
    (typeof client.workspaces)[':workspace']['pipelines-config']['identity']['oidc']['keys.json']['$get']
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
                    (typeof client.workspaces)[':workspace']['pipelines-config']['identity']['oidc']['keys.json']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJsonQueryKey>
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
      ...getWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJsonQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getWorkspacesWorkspacePipelinesConfigRunnersQueryKey(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['pipelines-config']['runners']['$get']
  >,
) {
  return ['workspaces', '/workspaces/:workspace/pipelines-config/runners', args] as const
}

export function getWorkspacesWorkspacePipelinesConfigRunnersQueryOptions<
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
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['pipelines-config']['runners']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWorkspacesWorkspacePipelinesConfigRunnersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workspaces[':workspace']['pipelines-config'].runners.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkspacesWorkspacePipelinesConfigRunners<
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
  args: () => InferRequestType<
    (typeof client.workspaces)[':workspace']['pipelines-config']['runners']['$get']
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
                    (typeof client.workspaces)[':workspace']['pipelines-config']['runners']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getWorkspacesWorkspacePipelinesConfigRunnersQueryKey>
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
      ...getWorkspacesWorkspacePipelinesConfigRunnersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostWorkspacesWorkspacePipelinesConfigRunners<
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
    const mutationDefaults = getPostWorkspacesWorkspacePipelinesConfigRunnersMutationOptions<
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

export function getWorkspacesWorkspacePipelinesConfigRunnersRunnerUuidQueryKey(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['pipelines-config']['runners'][':runner_uuid']['$get']
  >,
) {
  return [
    'workspaces',
    '/workspaces/:workspace/pipelines-config/runners/:runner_uuid',
    args,
  ] as const
}

export function getWorkspacesWorkspacePipelinesConfigRunnersRunnerUuidQueryOptions<
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
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['pipelines-config']['runners'][':runner_uuid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWorkspacesWorkspacePipelinesConfigRunnersRunnerUuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workspaces[':workspace']['pipelines-config'].runners[':runner_uuid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkspacesWorkspacePipelinesConfigRunnersRunnerUuid<
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
  args: () => InferRequestType<
    (typeof client.workspaces)[':workspace']['pipelines-config']['runners'][':runner_uuid']['$get']
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
                    (typeof client.workspaces)[':workspace']['pipelines-config']['runners'][':runner_uuid']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getWorkspacesWorkspacePipelinesConfigRunnersRunnerUuidQueryKey>
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
      ...getWorkspacesWorkspacePipelinesConfigRunnersRunnerUuidQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutWorkspacesWorkspacePipelinesConfigRunnersRunnerUuid<
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
    const mutationDefaults =
      getPutWorkspacesWorkspacePipelinesConfigRunnersRunnerUuidMutationOptions<
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

export function createDeleteWorkspacesWorkspacePipelinesConfigRunnersRunnerUuid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults =
      getDeleteWorkspacesWorkspacePipelinesConfigRunnersRunnerUuidMutationOptions<
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

export function getWorkspacesWorkspacePipelinesConfigVariablesQueryKey(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['pipelines-config']['variables']['$get']
  >,
) {
  return ['workspaces', '/workspaces/:workspace/pipelines-config/variables', args] as const
}

export function getWorkspacesWorkspacePipelinesConfigVariablesQueryOptions<
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
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['pipelines-config']['variables']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWorkspacesWorkspacePipelinesConfigVariablesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workspaces[':workspace']['pipelines-config'].variables.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkspacesWorkspacePipelinesConfigVariables<
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
  args: () => InferRequestType<
    (typeof client.workspaces)[':workspace']['pipelines-config']['variables']['$get']
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
                    (typeof client.workspaces)[':workspace']['pipelines-config']['variables']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getWorkspacesWorkspacePipelinesConfigVariablesQueryKey>
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
      ...getWorkspacesWorkspacePipelinesConfigVariablesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostWorkspacesWorkspacePipelinesConfigVariables<
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
    const mutationDefaults = getPostWorkspacesWorkspacePipelinesConfigVariablesMutationOptions<
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

export function getWorkspacesWorkspacePipelinesConfigVariablesVariableUuidQueryKey(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['pipelines-config']['variables'][':variable_uuid']['$get']
  >,
) {
  return [
    'workspaces',
    '/workspaces/:workspace/pipelines-config/variables/:variable_uuid',
    args,
  ] as const
}

export function getWorkspacesWorkspacePipelinesConfigVariablesVariableUuidQueryOptions<
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
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['pipelines-config']['variables'][':variable_uuid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWorkspacesWorkspacePipelinesConfigVariablesVariableUuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workspaces[':workspace']['pipelines-config'].variables[':variable_uuid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkspacesWorkspacePipelinesConfigVariablesVariableUuid<
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
  args: () => InferRequestType<
    (typeof client.workspaces)[':workspace']['pipelines-config']['variables'][':variable_uuid']['$get']
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
                    (typeof client.workspaces)[':workspace']['pipelines-config']['variables'][':variable_uuid']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getWorkspacesWorkspacePipelinesConfigVariablesVariableUuidQueryKey>
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
      ...getWorkspacesWorkspacePipelinesConfigVariablesVariableUuidQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutWorkspacesWorkspacePipelinesConfigVariablesVariableUuid<
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
    const mutationDefaults =
      getPutWorkspacesWorkspacePipelinesConfigVariablesVariableUuidMutationOptions<
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

export function createDeleteWorkspacesWorkspacePipelinesConfigVariablesVariableUuid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults =
      getDeleteWorkspacesWorkspacePipelinesConfigVariablesVariableUuidMutationOptions<
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

export function getWorkspacesWorkspaceProjectsQueryKey(
  args: InferRequestType<(typeof client.workspaces)[':workspace']['projects']['$get']>,
) {
  return ['workspaces', '/workspaces/:workspace/projects', args] as const
}

export function getWorkspacesWorkspaceProjectsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workspaces)[':workspace']['projects']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.workspaces)[':workspace']['projects']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWorkspacesWorkspaceProjectsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workspaces[':workspace'].projects.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkspacesWorkspaceProjects<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workspaces)[':workspace']['projects']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.workspaces)[':workspace']['projects']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getWorkspacesWorkspaceProjectsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostWorkspacesWorkspaceProjects<
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
                Awaited<ReturnType<(typeof client.workspaces)[':workspace']['projects']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.workspaces)[':workspace']['projects']['$post']>,
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
    const mutationDefaults = getPostWorkspacesWorkspaceProjectsMutationOptions<
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

export function getWorkspacesWorkspaceProjectsProjectKeyQueryKey(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['$get']
  >,
) {
  return ['workspaces', '/workspaces/:workspace/projects/:project_key', args] as const
}

export function getWorkspacesWorkspaceProjectsProjectKeyQueryOptions<
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
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWorkspacesWorkspaceProjectsProjectKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workspaces[':workspace'].projects[':project_key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkspacesWorkspaceProjectsProjectKey<
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
  args: () => InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['$get']
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
                    (typeof client.workspaces)[':workspace']['projects'][':project_key']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getWorkspacesWorkspaceProjectsProjectKeyQueryKey>
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
      ...getWorkspacesWorkspaceProjectsProjectKeyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutWorkspacesWorkspaceProjectsProjectKey<
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
    const mutationDefaults = getPutWorkspacesWorkspaceProjectsProjectKeyMutationOptions<
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

export function createDeleteWorkspacesWorkspaceProjectsProjectKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteWorkspacesWorkspaceProjectsProjectKeyMutationOptions<
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

export function getWorkspacesWorkspaceProjectsProjectKeyBranchingModelQueryKey(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['branching-model']['$get']
  >,
) {
  return [
    'workspaces',
    '/workspaces/:workspace/projects/:project_key/branching-model',
    args,
  ] as const
}

export function getWorkspacesWorkspaceProjectsProjectKeyBranchingModelQueryOptions<
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
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['branching-model']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWorkspacesWorkspaceProjectsProjectKeyBranchingModelQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workspaces[':workspace'].projects[':project_key']['branching-model'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkspacesWorkspaceProjectsProjectKeyBranchingModel<
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
  args: () => InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['branching-model']['$get']
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
                    (typeof client.workspaces)[':workspace']['projects'][':project_key']['branching-model']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getWorkspacesWorkspaceProjectsProjectKeyBranchingModelQueryKey>
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
      ...getWorkspacesWorkspaceProjectsProjectKeyBranchingModelQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettingsQueryKey(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['branching-model']['settings']['$get']
  >,
) {
  return [
    'workspaces',
    '/workspaces/:workspace/projects/:project_key/branching-model/settings',
    args,
  ] as const
}

export function getWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettingsQueryOptions<
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
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['branching-model']['settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workspaces[':workspace'].projects[':project_key']['branching-model'].settings.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettings<
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
  args: () => InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['branching-model']['settings']['$get']
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
                    (typeof client.workspaces)[':workspace']['projects'][':project_key']['branching-model']['settings']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettingsQueryKey>
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
      ...getWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettingsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettings<
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
    const mutationDefaults =
      getPutWorkspacesWorkspaceProjectsProjectKeyBranchingModelSettingsMutationOptions<
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

export function getWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersQueryKey(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['default-reviewers']['$get']
  >,
) {
  return [
    'workspaces',
    '/workspaces/:workspace/projects/:project_key/default-reviewers',
    args,
  ] as const
}

export function getWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersQueryOptions<
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
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['default-reviewers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workspaces[':workspace'].projects[':project_key']['default-reviewers'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkspacesWorkspaceProjectsProjectKeyDefaultReviewers<
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
  args: () => InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['default-reviewers']['$get']
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
                    (typeof client.workspaces)[':workspace']['projects'][':project_key']['default-reviewers']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersQueryKey>
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
      ...getWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserQueryKey(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['default-reviewers'][':selected_user']['$get']
  >,
) {
  return [
    'workspaces',
    '/workspaces/:workspace/projects/:project_key/default-reviewers/:selected_user',
    args,
  ] as const
}

export function getWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserQueryOptions<
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
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['default-reviewers'][':selected_user']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workspaces[':workspace'].projects[':project_key']['default-reviewers'][
          ':selected_user'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUser<
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
  args: () => InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['default-reviewers'][':selected_user']['$get']
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
                    (typeof client.workspaces)[':workspace']['projects'][':project_key']['default-reviewers'][':selected_user']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserQueryKey
          >
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
      ...getWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUser<
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
    const mutationDefaults =
      getPutWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserMutationOptions<
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

export function createDeleteWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUser<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults =
      getDeleteWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserMutationOptions<
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

export function getWorkspacesWorkspaceProjectsProjectKeyDeployKeysQueryKey(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['deploy-keys']['$get']
  >,
) {
  return ['workspaces', '/workspaces/:workspace/projects/:project_key/deploy-keys', args] as const
}

export function getWorkspacesWorkspaceProjectsProjectKeyDeployKeysQueryOptions<
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
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['deploy-keys']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWorkspacesWorkspaceProjectsProjectKeyDeployKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workspaces[':workspace'].projects[':project_key']['deploy-keys'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkspacesWorkspaceProjectsProjectKeyDeployKeys<
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
  args: () => InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['deploy-keys']['$get']
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
                    (typeof client.workspaces)[':workspace']['projects'][':project_key']['deploy-keys']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getWorkspacesWorkspaceProjectsProjectKeyDeployKeysQueryKey>
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
      ...getWorkspacesWorkspaceProjectsProjectKeyDeployKeysQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostWorkspacesWorkspaceProjectsProjectKeyDeployKeys<
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
    const mutationDefaults = getPostWorkspacesWorkspaceProjectsProjectKeyDeployKeysMutationOptions<
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

export function getWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIdQueryKey(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['deploy-keys'][':key_id']['$get']
  >,
) {
  return [
    'workspaces',
    '/workspaces/:workspace/projects/:project_key/deploy-keys/:key_id',
    args,
  ] as const
}

export function getWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['deploy-keys'][':key_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workspaces[':workspace'].projects[':project_key']['deploy-keys'][':key_id'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyId<
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
  args: () => InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['deploy-keys'][':key_id']['$get']
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
                    (typeof client.workspaces)[':workspace']['projects'][':project_key']['deploy-keys'][':key_id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIdQueryKey>
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
      ...getWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createDeleteWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults =
      getDeleteWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIdMutationOptions<
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

export function getWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigGroupsQueryKey(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['permissions-config']['groups']['$get']
  >,
) {
  return [
    'workspaces',
    '/workspaces/:workspace/projects/:project_key/permissions-config/groups',
    args,
  ] as const
}

export function getWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigGroupsQueryOptions<
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
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['permissions-config']['groups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workspaces[':workspace'].projects[':project_key']['permissions-config'].groups.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigGroups<
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
  args: () => InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['permissions-config']['groups']['$get']
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
                    (typeof client.workspaces)[':workspace']['projects'][':project_key']['permissions-config']['groups']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigGroupsQueryKey>
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
      ...getWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigGroupsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigGroupsGroupSlugQueryKey(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['permissions-config']['groups'][':group_slug']['$get']
  >,
) {
  return [
    'workspaces',
    '/workspaces/:workspace/projects/:project_key/permissions-config/groups/:group_slug',
    args,
  ] as const
}

export function getWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigGroupsGroupSlugQueryOptions<
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
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['permissions-config']['groups'][':group_slug']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigGroupsGroupSlugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workspaces[':workspace'].projects[':project_key']['permissions-config'].groups[
          ':group_slug'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigGroupsGroupSlug<
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
  args: () => InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['permissions-config']['groups'][':group_slug']['$get']
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
      ...getWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigGroupsGroupSlugQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigGroupsGroupSlug<
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
    const mutationDefaults =
      getPutWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigGroupsGroupSlugMutationOptions<
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

export function createDeleteWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigGroupsGroupSlug<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults =
      getDeleteWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigGroupsGroupSlugMutationOptions<
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

export function getWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigUsersQueryKey(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['permissions-config']['users']['$get']
  >,
) {
  return [
    'workspaces',
    '/workspaces/:workspace/projects/:project_key/permissions-config/users',
    args,
  ] as const
}

export function getWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigUsersQueryOptions<
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
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['permissions-config']['users']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workspaces[':workspace'].projects[':project_key']['permissions-config'].users.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigUsers<
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
  args: () => InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['permissions-config']['users']['$get']
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
                    (typeof client.workspaces)[':workspace']['projects'][':project_key']['permissions-config']['users']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigUsersQueryKey>
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
      ...getWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigUsersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigUsersSelectedUserIdQueryKey(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['permissions-config']['users'][':selected_user_id']['$get']
  >,
) {
  return [
    'workspaces',
    '/workspaces/:workspace/projects/:project_key/permissions-config/users/:selected_user_id',
    args,
  ] as const
}

export function getWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigUsersSelectedUserIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['permissions-config']['users'][':selected_user_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigUsersSelectedUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workspaces[':workspace'].projects[':project_key']['permissions-config'].users[
          ':selected_user_id'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigUsersSelectedUserId<
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
  args: () => InferRequestType<
    (typeof client.workspaces)[':workspace']['projects'][':project_key']['permissions-config']['users'][':selected_user_id']['$get']
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
      ...getWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigUsersSelectedUserIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigUsersSelectedUserId<
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
    const mutationDefaults =
      getPutWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigUsersSelectedUserIdMutationOptions<
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

export function createDeleteWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigUsersSelectedUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults =
      getDeleteWorkspacesWorkspaceProjectsProjectKeyPermissionsConfigUsersSelectedUserIdMutationOptions<
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

export function getWorkspacesWorkspacePullrequestsSelectedUserQueryKey(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['pullrequests'][':selected_user']['$get']
  >,
) {
  return ['workspaces', '/workspaces/:workspace/pullrequests/:selected_user', args] as const
}

export function getWorkspacesWorkspacePullrequestsSelectedUserQueryOptions<
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
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['pullrequests'][':selected_user']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWorkspacesWorkspacePullrequestsSelectedUserQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workspaces[':workspace'].pullrequests[':selected_user'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkspacesWorkspacePullrequestsSelectedUser<
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
  args: () => InferRequestType<
    (typeof client.workspaces)[':workspace']['pullrequests'][':selected_user']['$get']
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
                    (typeof client.workspaces)[':workspace']['pullrequests'][':selected_user']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getWorkspacesWorkspacePullrequestsSelectedUserQueryKey>
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
      ...getWorkspacesWorkspacePullrequestsSelectedUserQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getWorkspacesWorkspaceSearchCodeQueryKey(
  args: InferRequestType<(typeof client.workspaces)[':workspace']['search']['code']['$get']>,
) {
  return ['workspaces', '/workspaces/:workspace/search/code', args] as const
}

export function getWorkspacesWorkspaceSearchCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workspaces)[':workspace']['search']['code']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.workspaces)[':workspace']['search']['code']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWorkspacesWorkspaceSearchCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workspaces[':workspace'].search.code.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkspacesWorkspaceSearchCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workspaces)[':workspace']['search']['code']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.workspaces)[':workspace']['search']['code']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getWorkspacesWorkspaceSearchCodeQueryKey>
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
      ...getWorkspacesWorkspaceSearchCodeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getWorkspacesWorkspaceSettingsGpgPublicKeyQueryKey(
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['settings']['gpg']['public-key']['$get']
  >,
) {
  return ['workspaces', '/workspaces/:workspace/settings/gpg/public-key', args] as const
}

export function getWorkspacesWorkspaceSettingsGpgPublicKeyQueryOptions<
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
  args: InferRequestType<
    (typeof client.workspaces)[':workspace']['settings']['gpg']['public-key']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWorkspacesWorkspaceSettingsGpgPublicKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workspaces[':workspace'].settings.gpg['public-key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkspacesWorkspaceSettingsGpgPublicKey<
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
  args: () => InferRequestType<
    (typeof client.workspaces)[':workspace']['settings']['gpg']['public-key']['$get']
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
                    (typeof client.workspaces)[':workspace']['settings']['gpg']['public-key']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getWorkspacesWorkspaceSettingsGpgPublicKeyQueryKey>
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
      ...getWorkspacesWorkspaceSettingsGpgPublicKeyQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}
