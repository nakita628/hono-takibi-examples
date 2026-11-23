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

export function getUserKey() {
  return ['user'] as const
}

export function getWorkspacesKey() {
  return ['workspaces'] as const
}

export function getWorkspaceSlugKey() {
  return ['{workspace_slug}'] as const
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

export function getWorkspacesQueryKey() {
  return ['workspaces', '/workspaces'] as const
}

export function getWorkspacesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWorkspacesQueryKey>
  >({
    queryKey: getWorkspacesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.workspaces.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createWorkspaces<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getWorkspacesQueryKey>
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
    return { ...getWorkspacesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getWorkspacesWorkspaceSlugQueryKey(
  args: InferRequestType<(typeof client.workspaces)[':workspace_slug']['$get']>,
) {
  return ['workspaces', '/workspaces/:workspace_slug', args] as const
}

export function getWorkspacesWorkspaceSlugQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workspaces)[':workspace_slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.workspaces)[':workspace_slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workspaces)[':workspace_slug']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspacesWorkspaceSlugQueryKey>
  >({
    queryKey: getWorkspacesWorkspaceSlugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workspaces[':workspace_slug'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkspacesWorkspaceSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workspaces)[':workspace_slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.workspaces)[':workspace_slug']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workspaces)[':workspace_slug']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getWorkspacesWorkspaceSlugQueryKey>
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
      ...getWorkspacesWorkspaceSlugQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getWorkspaceSlugActivitiesQueryKey(
  args: InferRequestType<(typeof client)[':workspace_slug']['activities']['$get']>,
) {
  return [':workspace_slug', '/:workspace_slug/activities', args] as const
}

export function getWorkspaceSlugActivitiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':workspace_slug']['activities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':workspace_slug']['activities']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':workspace_slug']['activities']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspaceSlugActivitiesQueryKey>
  >({
    queryKey: getWorkspaceSlugActivitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':workspace_slug'].activities.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkspaceSlugActivities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':workspace_slug']['activities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':workspace_slug']['activities']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':workspace_slug']['activities']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getWorkspaceSlugActivitiesQueryKey>
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
      ...getWorkspaceSlugActivitiesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostWorkspaceSlugActivitiesMutationKey() {
  return [':workspace_slug', '/:workspace_slug/activities', 'POST'] as const
}

export function getPostWorkspaceSlugActivitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':workspace_slug']['activities']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':workspace_slug']['activities']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWorkspaceSlugActivitiesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':workspace_slug']['activities']['$post']>,
    ) {
      return parseResponse(client[':workspace_slug'].activities.$post(args, options))
    },
  })
}

export function createPostWorkspaceSlugActivities<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':workspace_slug']['activities']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':workspace_slug']['activities']['$post']>,
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
    const mutationDefaults = getPostWorkspaceSlugActivitiesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getWorkspaceSlugActivitiesIdQueryKey(
  args: InferRequestType<(typeof client)[':workspace_slug']['activities'][':id']['$get']>,
) {
  return [':workspace_slug', '/:workspace_slug/activities/:id', args] as const
}

export function getWorkspaceSlugActivitiesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':workspace_slug']['activities'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':workspace_slug']['activities'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':workspace_slug']['activities'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspaceSlugActivitiesIdQueryKey>
  >({
    queryKey: getWorkspaceSlugActivitiesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':workspace_slug'].activities[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkspaceSlugActivitiesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':workspace_slug']['activities'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':workspace_slug']['activities'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':workspace_slug']['activities'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getWorkspaceSlugActivitiesIdQueryKey>
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
      ...getWorkspaceSlugActivitiesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getWorkspaceSlugActivityTypesQueryKey(
  args: InferRequestType<(typeof client)[':workspace_slug']['activity_types']['$get']>,
) {
  return [':workspace_slug', '/:workspace_slug/activity_types', args] as const
}

export function getWorkspaceSlugActivityTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':workspace_slug']['activity_types']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':workspace_slug']['activity_types']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':workspace_slug']['activity_types']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspaceSlugActivityTypesQueryKey>
  >({
    queryKey: getWorkspaceSlugActivityTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':workspace_slug'].activity_types.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkspaceSlugActivityTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':workspace_slug']['activity_types']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':workspace_slug']['activity_types']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':workspace_slug']['activity_types']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getWorkspaceSlugActivityTypesQueryKey>
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
      ...getWorkspaceSlugActivityTypesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getWorkspaceSlugMembersQueryKey(
  args: InferRequestType<(typeof client)[':workspace_slug']['members']['$get']>,
) {
  return [':workspace_slug', '/:workspace_slug/members', args] as const
}

export function getWorkspaceSlugMembersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':workspace_slug']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':workspace_slug']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':workspace_slug']['members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspaceSlugMembersQueryKey>
  >({
    queryKey: getWorkspaceSlugMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':workspace_slug'].members.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkspaceSlugMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':workspace_slug']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':workspace_slug']['members']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':workspace_slug']['members']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getWorkspaceSlugMembersQueryKey>
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
      ...getWorkspaceSlugMembersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostWorkspaceSlugMembersMutationKey() {
  return [':workspace_slug', '/:workspace_slug/members', 'POST'] as const
}

export function getPostWorkspaceSlugMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':workspace_slug']['members']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':workspace_slug']['members']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWorkspaceSlugMembersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':workspace_slug']['members']['$post']>,
    ) {
      return parseResponse(client[':workspace_slug'].members.$post(args, options))
    },
  })
}

export function createPostWorkspaceSlugMembers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':workspace_slug']['members']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':workspace_slug']['members']['$post']>,
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
    const mutationDefaults = getPostWorkspaceSlugMembersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getWorkspaceSlugMembersFindQueryKey(
  args: InferRequestType<(typeof client)[':workspace_slug']['members']['find']['$get']>,
) {
  return [':workspace_slug', '/:workspace_slug/members/find', args] as const
}

export function getWorkspaceSlugMembersFindQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':workspace_slug']['members']['find']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':workspace_slug']['members']['find']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':workspace_slug']['members']['find']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspaceSlugMembersFindQueryKey>
  >({
    queryKey: getWorkspaceSlugMembersFindQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':workspace_slug'].members.find.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkspaceSlugMembersFind<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':workspace_slug']['members']['find']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':workspace_slug']['members']['find']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':workspace_slug']['members']['find']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getWorkspaceSlugMembersFindQueryKey>
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
      ...getWorkspaceSlugMembersFindQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getWorkspaceSlugMembersMemberSlugQueryKey(
  args: InferRequestType<(typeof client)[':workspace_slug']['members'][':member_slug']['$get']>,
) {
  return [':workspace_slug', '/:workspace_slug/members/:member_slug', args] as const
}

export function getWorkspaceSlugMembersMemberSlugQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':workspace_slug']['members'][':member_slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':workspace_slug']['members'][':member_slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':workspace_slug']['members'][':member_slug']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspaceSlugMembersMemberSlugQueryKey>
  >({
    queryKey: getWorkspaceSlugMembersMemberSlugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':workspace_slug'].members[':member_slug'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkspaceSlugMembersMemberSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':workspace_slug']['members'][':member_slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':workspace_slug']['members'][':member_slug']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':workspace_slug']['members'][':member_slug']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getWorkspaceSlugMembersMemberSlugQueryKey>
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
      ...getWorkspaceSlugMembersMemberSlugQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutWorkspaceSlugMembersMemberSlugMutationKey() {
  return [':workspace_slug', '/:workspace_slug/members/:member_slug', 'PUT'] as const
}

export function getPutWorkspaceSlugMembersMemberSlugMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':workspace_slug']['members'][':member_slug']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)[':workspace_slug']['members'][':member_slug']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWorkspaceSlugMembersMemberSlugMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':workspace_slug']['members'][':member_slug']['$put']>,
    ) {
      return parseResponse(client[':workspace_slug'].members[':member_slug'].$put(args, options))
    },
  })
}

export function createPutWorkspaceSlugMembersMemberSlug<
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
                      (typeof client)[':workspace_slug']['members'][':member_slug']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)[':workspace_slug']['members'][':member_slug']['$put']>,
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
    const mutationDefaults = getPutWorkspaceSlugMembersMemberSlugMutationOptions<
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

export function getDeleteWorkspaceSlugMembersMemberSlugMutationKey() {
  return [':workspace_slug', '/:workspace_slug/members/:member_slug', 'DELETE'] as const
}

export function getDeleteWorkspaceSlugMembersMemberSlugMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':workspace_slug']['members'][':member_slug']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)[':workspace_slug']['members'][':member_slug']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWorkspaceSlugMembersMemberSlugMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':workspace_slug']['members'][':member_slug']['$delete']
      >,
    ) {
      return parseResponse(client[':workspace_slug'].members[':member_slug'].$delete(args, options))
    },
  })
}

export function createDeleteWorkspaceSlugMembersMemberSlug<
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
                      (typeof client)[':workspace_slug']['members'][':member_slug']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client)[':workspace_slug']['members'][':member_slug']['$delete']
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
    const mutationDefaults = getDeleteWorkspaceSlugMembersMemberSlugMutationOptions<
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

export function getWorkspaceSlugMembersMemberSlugActivitiesQueryKey(
  args: InferRequestType<
    (typeof client)[':workspace_slug']['members'][':member_slug']['activities']['$get']
  >,
) {
  return [':workspace_slug', '/:workspace_slug/members/:member_slug/activities', args] as const
}

export function getWorkspaceSlugMembersMemberSlugActivitiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':workspace_slug']['members'][':member_slug']['activities']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':workspace_slug']['members'][':member_slug']['activities']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':workspace_slug']['members'][':member_slug']['activities']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspaceSlugMembersMemberSlugActivitiesQueryKey>
  >({
    queryKey: getWorkspaceSlugMembersMemberSlugActivitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':workspace_slug'].members[':member_slug'].activities.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkspaceSlugMembersMemberSlugActivities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':workspace_slug']['members'][':member_slug']['activities']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':workspace_slug']['members'][':member_slug']['activities']['$get']
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
                    (typeof client)[':workspace_slug']['members'][':member_slug']['activities']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getWorkspaceSlugMembersMemberSlugActivitiesQueryKey>
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
      ...getWorkspaceSlugMembersMemberSlugActivitiesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostWorkspaceSlugMembersMemberSlugActivitiesMutationKey() {
  return [':workspace_slug', '/:workspace_slug/members/:member_slug/activities', 'POST'] as const
}

export function getPostWorkspaceSlugMembersMemberSlugActivitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':workspace_slug']['members'][':member_slug']['activities']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':workspace_slug']['members'][':member_slug']['activities']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostWorkspaceSlugMembersMemberSlugActivitiesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':workspace_slug']['members'][':member_slug']['activities']['$post']
      >,
    ) {
      return parseResponse(
        client[':workspace_slug'].members[':member_slug'].activities.$post(args, options),
      )
    },
  })
}

export function createPostWorkspaceSlugMembersMemberSlugActivities<
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
                    (typeof client)[':workspace_slug']['members'][':member_slug']['activities']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':workspace_slug']['members'][':member_slug']['activities']['$post']
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
    const mutationDefaults = getPostWorkspaceSlugMembersMemberSlugActivitiesMutationOptions<
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

export function getPutWorkspaceSlugMembersMemberSlugActivitiesIdMutationKey() {
  return [':workspace_slug', '/:workspace_slug/members/:member_slug/activities/:id', 'PUT'] as const
}

export function getPutWorkspaceSlugMembersMemberSlugActivitiesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':workspace_slug']['members'][':member_slug']['activities'][':id']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)[':workspace_slug']['members'][':member_slug']['activities'][':id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutWorkspaceSlugMembersMemberSlugActivitiesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':workspace_slug']['members'][':member_slug']['activities'][':id']['$put']
      >,
    ) {
      return parseResponse(
        client[':workspace_slug'].members[':member_slug'].activities[':id'].$put(args, options),
      )
    },
  })
}

export function createPutWorkspaceSlugMembersMemberSlugActivitiesId<
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
                      (typeof client)[':workspace_slug']['members'][':member_slug']['activities'][':id']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client)[':workspace_slug']['members'][':member_slug']['activities'][':id']['$put']
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
    const mutationDefaults = getPutWorkspaceSlugMembersMemberSlugActivitiesIdMutationOptions<
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

export function getDeleteWorkspaceSlugMembersMemberSlugActivitiesIdMutationKey() {
  return [
    ':workspace_slug',
    '/:workspace_slug/members/:member_slug/activities/:id',
    'DELETE',
  ] as const
}

export function getDeleteWorkspaceSlugMembersMemberSlugActivitiesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':workspace_slug']['members'][':member_slug']['activities'][':id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)[':workspace_slug']['members'][':member_slug']['activities'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteWorkspaceSlugMembersMemberSlugActivitiesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':workspace_slug']['members'][':member_slug']['activities'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client[':workspace_slug'].members[':member_slug'].activities[':id'].$delete(args, options),
      )
    },
  })
}

export function createDeleteWorkspaceSlugMembersMemberSlugActivitiesId<
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
                      (typeof client)[':workspace_slug']['members'][':member_slug']['activities'][':id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client)[':workspace_slug']['members'][':member_slug']['activities'][':id']['$delete']
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
    const mutationDefaults = getDeleteWorkspaceSlugMembersMemberSlugActivitiesIdMutationOptions<
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

export function getPostWorkspaceSlugMembersMemberSlugIdentitiesMutationKey() {
  return [':workspace_slug', '/:workspace_slug/members/:member_slug/identities', 'POST'] as const
}

export function getPostWorkspaceSlugMembersMemberSlugIdentitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':workspace_slug']['members'][':member_slug']['identities']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':workspace_slug']['members'][':member_slug']['identities']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostWorkspaceSlugMembersMemberSlugIdentitiesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':workspace_slug']['members'][':member_slug']['identities']['$post']
      >,
    ) {
      return parseResponse(
        client[':workspace_slug'].members[':member_slug'].identities.$post(args, options),
      )
    },
  })
}

export function createPostWorkspaceSlugMembersMemberSlugIdentities<
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
                    (typeof client)[':workspace_slug']['members'][':member_slug']['identities']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':workspace_slug']['members'][':member_slug']['identities']['$post']
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
    const mutationDefaults = getPostWorkspaceSlugMembersMemberSlugIdentitiesMutationOptions<
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

export function getDeleteWorkspaceSlugMembersMemberSlugIdentitiesMutationKey() {
  return [':workspace_slug', '/:workspace_slug/members/:member_slug/identities', 'DELETE'] as const
}

export function getDeleteWorkspaceSlugMembersMemberSlugIdentitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':workspace_slug']['members'][':member_slug']['identities']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)[':workspace_slug']['members'][':member_slug']['identities']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteWorkspaceSlugMembersMemberSlugIdentitiesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':workspace_slug']['members'][':member_slug']['identities']['$delete']
      >,
    ) {
      return parseResponse(
        client[':workspace_slug'].members[':member_slug'].identities.$delete(args, options),
      )
    },
  })
}

export function createDeleteWorkspaceSlugMembersMemberSlugIdentities<
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
                      (typeof client)[':workspace_slug']['members'][':member_slug']['identities']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client)[':workspace_slug']['members'][':member_slug']['identities']['$delete']
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
    const mutationDefaults = getDeleteWorkspaceSlugMembersMemberSlugIdentitiesMutationOptions<
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

export function getWorkspaceSlugMembersMemberSlugNotesQueryKey(
  args: InferRequestType<
    (typeof client)[':workspace_slug']['members'][':member_slug']['notes']['$get']
  >,
) {
  return [':workspace_slug', '/:workspace_slug/members/:member_slug/notes', args] as const
}

export function getWorkspaceSlugMembersMemberSlugNotesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':workspace_slug']['members'][':member_slug']['notes']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':workspace_slug']['members'][':member_slug']['notes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':workspace_slug']['members'][':member_slug']['notes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspaceSlugMembersMemberSlugNotesQueryKey>
  >({
    queryKey: getWorkspaceSlugMembersMemberSlugNotesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':workspace_slug'].members[':member_slug'].notes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkspaceSlugMembersMemberSlugNotes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':workspace_slug']['members'][':member_slug']['notes']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':workspace_slug']['members'][':member_slug']['notes']['$get']
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
                    (typeof client)[':workspace_slug']['members'][':member_slug']['notes']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getWorkspaceSlugMembersMemberSlugNotesQueryKey>
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
      ...getWorkspaceSlugMembersMemberSlugNotesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostWorkspaceSlugMembersMemberSlugNotesMutationKey() {
  return [':workspace_slug', '/:workspace_slug/members/:member_slug/notes', 'POST'] as const
}

export function getPostWorkspaceSlugMembersMemberSlugNotesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':workspace_slug']['members'][':member_slug']['notes']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':workspace_slug']['members'][':member_slug']['notes']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostWorkspaceSlugMembersMemberSlugNotesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':workspace_slug']['members'][':member_slug']['notes']['$post']
      >,
    ) {
      return parseResponse(
        client[':workspace_slug'].members[':member_slug'].notes.$post(args, options),
      )
    },
  })
}

export function createPostWorkspaceSlugMembersMemberSlugNotes<
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
                    (typeof client)[':workspace_slug']['members'][':member_slug']['notes']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':workspace_slug']['members'][':member_slug']['notes']['$post']
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
    const mutationDefaults = getPostWorkspaceSlugMembersMemberSlugNotesMutationOptions<
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

export function getPutWorkspaceSlugMembersMemberSlugNotesIdMutationKey() {
  return [':workspace_slug', '/:workspace_slug/members/:member_slug/notes/:id', 'PUT'] as const
}

export function getPutWorkspaceSlugMembersMemberSlugNotesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':workspace_slug']['members'][':member_slug']['notes'][':id']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)[':workspace_slug']['members'][':member_slug']['notes'][':id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutWorkspaceSlugMembersMemberSlugNotesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':workspace_slug']['members'][':member_slug']['notes'][':id']['$put']
      >,
    ) {
      return parseResponse(
        client[':workspace_slug'].members[':member_slug'].notes[':id'].$put(args, options),
      )
    },
  })
}

export function createPutWorkspaceSlugMembersMemberSlugNotesId<
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
                      (typeof client)[':workspace_slug']['members'][':member_slug']['notes'][':id']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client)[':workspace_slug']['members'][':member_slug']['notes'][':id']['$put']
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
    const mutationDefaults = getPutWorkspaceSlugMembersMemberSlugNotesIdMutationOptions<
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

export function getWorkspaceSlugOrganizationsQueryKey(
  args: InferRequestType<(typeof client)[':workspace_slug']['organizations']['$get']>,
) {
  return [':workspace_slug', '/:workspace_slug/organizations', args] as const
}

export function getWorkspaceSlugOrganizationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':workspace_slug']['organizations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':workspace_slug']['organizations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':workspace_slug']['organizations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspaceSlugOrganizationsQueryKey>
  >({
    queryKey: getWorkspaceSlugOrganizationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':workspace_slug'].organizations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkspaceSlugOrganizations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':workspace_slug']['organizations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':workspace_slug']['organizations']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':workspace_slug']['organizations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getWorkspaceSlugOrganizationsQueryKey>
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
      ...getWorkspaceSlugOrganizationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getWorkspaceSlugOrganizationsOrganizationIdQueryKey(
  args: InferRequestType<
    (typeof client)[':workspace_slug']['organizations'][':organization_id']['$get']
  >,
) {
  return [':workspace_slug', '/:workspace_slug/organizations/:organization_id', args] as const
}

export function getWorkspaceSlugOrganizationsOrganizationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':workspace_slug']['organizations'][':organization_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':workspace_slug']['organizations'][':organization_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':workspace_slug']['organizations'][':organization_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspaceSlugOrganizationsOrganizationIdQueryKey>
  >({
    queryKey: getWorkspaceSlugOrganizationsOrganizationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':workspace_slug'].organizations[':organization_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkspaceSlugOrganizationsOrganizationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':workspace_slug']['organizations'][':organization_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':workspace_slug']['organizations'][':organization_id']['$get']
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
                    (typeof client)[':workspace_slug']['organizations'][':organization_id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getWorkspaceSlugOrganizationsOrganizationIdQueryKey>
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
      ...getWorkspaceSlugOrganizationsOrganizationIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutWorkspaceSlugOrganizationsOrganizationIdMutationKey() {
  return [':workspace_slug', '/:workspace_slug/organizations/:organization_id', 'PUT'] as const
}

export function getPutWorkspaceSlugOrganizationsOrganizationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':workspace_slug']['organizations'][':organization_id']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)[':workspace_slug']['organizations'][':organization_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutWorkspaceSlugOrganizationsOrganizationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':workspace_slug']['organizations'][':organization_id']['$put']
      >,
    ) {
      return parseResponse(
        client[':workspace_slug'].organizations[':organization_id'].$put(args, options),
      )
    },
  })
}

export function createPutWorkspaceSlugOrganizationsOrganizationId<
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
                      (typeof client)[':workspace_slug']['organizations'][':organization_id']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client)[':workspace_slug']['organizations'][':organization_id']['$put']
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
    const mutationDefaults = getPutWorkspaceSlugOrganizationsOrganizationIdMutationOptions<
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

export function getWorkspaceSlugOrganizationsOrganizationIdActivitiesQueryKey(
  args: InferRequestType<
    (typeof client)[':workspace_slug']['organizations'][':organization_id']['activities']['$get']
  >,
) {
  return [
    ':workspace_slug',
    '/:workspace_slug/organizations/:organization_id/activities',
    args,
  ] as const
}

export function getWorkspaceSlugOrganizationsOrganizationIdActivitiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':workspace_slug']['organizations'][':organization_id']['activities']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':workspace_slug']['organizations'][':organization_id']['activities']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':workspace_slug']['organizations'][':organization_id']['activities']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspaceSlugOrganizationsOrganizationIdActivitiesQueryKey>
  >({
    queryKey: getWorkspaceSlugOrganizationsOrganizationIdActivitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':workspace_slug'].organizations[':organization_id'].activities.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkspaceSlugOrganizationsOrganizationIdActivities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':workspace_slug']['organizations'][':organization_id']['activities']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':workspace_slug']['organizations'][':organization_id']['activities']['$get']
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
                    (typeof client)[':workspace_slug']['organizations'][':organization_id']['activities']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getWorkspaceSlugOrganizationsOrganizationIdActivitiesQueryKey>
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
      ...getWorkspaceSlugOrganizationsOrganizationIdActivitiesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getWorkspaceSlugOrganizationsOrganizationIdMembersQueryKey(
  args: InferRequestType<
    (typeof client)[':workspace_slug']['organizations'][':organization_id']['members']['$get']
  >,
) {
  return [
    ':workspace_slug',
    '/:workspace_slug/organizations/:organization_id/members',
    args,
  ] as const
}

export function getWorkspaceSlugOrganizationsOrganizationIdMembersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':workspace_slug']['organizations'][':organization_id']['members']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':workspace_slug']['organizations'][':organization_id']['members']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':workspace_slug']['organizations'][':organization_id']['members']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspaceSlugOrganizationsOrganizationIdMembersQueryKey>
  >({
    queryKey: getWorkspaceSlugOrganizationsOrganizationIdMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':workspace_slug'].organizations[':organization_id'].members.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkspaceSlugOrganizationsOrganizationIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':workspace_slug']['organizations'][':organization_id']['members']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':workspace_slug']['organizations'][':organization_id']['members']['$get']
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
                    (typeof client)[':workspace_slug']['organizations'][':organization_id']['members']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getWorkspaceSlugOrganizationsOrganizationIdMembersQueryKey>
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
      ...getWorkspaceSlugOrganizationsOrganizationIdMembersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getWorkspaceSlugReportsQueryKey(
  args: InferRequestType<(typeof client)[':workspace_slug']['reports']['$get']>,
) {
  return [':workspace_slug', '/:workspace_slug/reports', args] as const
}

export function getWorkspaceSlugReportsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':workspace_slug']['reports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':workspace_slug']['reports']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':workspace_slug']['reports']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspaceSlugReportsQueryKey>
  >({
    queryKey: getWorkspaceSlugReportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':workspace_slug'].reports.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkspaceSlugReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':workspace_slug']['reports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':workspace_slug']['reports']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':workspace_slug']['reports']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getWorkspaceSlugReportsQueryKey>
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
      ...getWorkspaceSlugReportsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getWorkspaceSlugWebhooksQueryKey(
  args: InferRequestType<(typeof client)[':workspace_slug']['webhooks']['$get']>,
) {
  return [':workspace_slug', '/:workspace_slug/webhooks', args] as const
}

export function getWorkspaceSlugWebhooksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':workspace_slug']['webhooks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':workspace_slug']['webhooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':workspace_slug']['webhooks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspaceSlugWebhooksQueryKey>
  >({
    queryKey: getWorkspaceSlugWebhooksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':workspace_slug'].webhooks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkspaceSlugWebhooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':workspace_slug']['webhooks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':workspace_slug']['webhooks']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':workspace_slug']['webhooks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getWorkspaceSlugWebhooksQueryKey>
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
      ...getWorkspaceSlugWebhooksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostWorkspaceSlugWebhooksMutationKey() {
  return [':workspace_slug', '/:workspace_slug/webhooks', 'POST'] as const
}

export function getPostWorkspaceSlugWebhooksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':workspace_slug']['webhooks']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':workspace_slug']['webhooks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWorkspaceSlugWebhooksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':workspace_slug']['webhooks']['$post']>,
    ) {
      return parseResponse(client[':workspace_slug'].webhooks.$post(args, options))
    },
  })
}

export function createPostWorkspaceSlugWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':workspace_slug']['webhooks']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':workspace_slug']['webhooks']['$post']>,
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
    const mutationDefaults = getPostWorkspaceSlugWebhooksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getWorkspaceSlugWebhooksIdQueryKey(
  args: InferRequestType<(typeof client)[':workspace_slug']['webhooks'][':id']['$get']>,
) {
  return [':workspace_slug', '/:workspace_slug/webhooks/:id', args] as const
}

export function getWorkspaceSlugWebhooksIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':workspace_slug']['webhooks'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':workspace_slug']['webhooks'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':workspace_slug']['webhooks'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspaceSlugWebhooksIdQueryKey>
  >({
    queryKey: getWorkspaceSlugWebhooksIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':workspace_slug'].webhooks[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkspaceSlugWebhooksId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':workspace_slug']['webhooks'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':workspace_slug']['webhooks'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':workspace_slug']['webhooks'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getWorkspaceSlugWebhooksIdQueryKey>
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
      ...getWorkspaceSlugWebhooksIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutWorkspaceSlugWebhooksIdMutationKey() {
  return [':workspace_slug', '/:workspace_slug/webhooks/:id', 'PUT'] as const
}

export function getPutWorkspaceSlugWebhooksIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':workspace_slug']['webhooks'][':id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)[':workspace_slug']['webhooks'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWorkspaceSlugWebhooksIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':workspace_slug']['webhooks'][':id']['$put']>,
    ) {
      return parseResponse(client[':workspace_slug'].webhooks[':id'].$put(args, options))
    },
  })
}

export function createPutWorkspaceSlugWebhooksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client)[':workspace_slug']['webhooks'][':id']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)[':workspace_slug']['webhooks'][':id']['$put']>,
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
    const mutationDefaults = getPutWorkspaceSlugWebhooksIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteWorkspaceSlugWebhooksIdMutationKey() {
  return [':workspace_slug', '/:workspace_slug/webhooks/:id', 'DELETE'] as const
}

export function getDeleteWorkspaceSlugWebhooksIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':workspace_slug']['webhooks'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)[':workspace_slug']['webhooks'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWorkspaceSlugWebhooksIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':workspace_slug']['webhooks'][':id']['$delete']>,
    ) {
      return parseResponse(client[':workspace_slug'].webhooks[':id'].$delete(args, options))
    },
  })
}

export function createDeleteWorkspaceSlugWebhooksId<
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
                    ReturnType<(typeof client)[':workspace_slug']['webhooks'][':id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)[':workspace_slug']['webhooks'][':id']['$delete']>,
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
    const mutationDefaults = getDeleteWorkspaceSlugWebhooksIdMutationOptions<
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
