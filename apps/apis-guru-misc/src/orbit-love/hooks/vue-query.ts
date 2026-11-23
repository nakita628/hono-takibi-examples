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

export function getWorkspacesQueryKey() {
  return ['workspaces', '/workspaces'] as const
}

export function getWorkspacesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getWorkspacesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workspaces.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useWorkspaces<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.$get>>>>
          >,
          ReturnType<typeof getWorkspacesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWorkspacesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getWorkspacesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.workspaces.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWorkspacesWorkspaceSlugQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.workspaces)[':workspace_slug']['$get']>>,
) {
  return ['workspaces', '/workspaces/:workspace_slug', toValue(args)] as const
}

export function getWorkspacesWorkspaceSlugQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.workspaces)[':workspace_slug']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkspacesWorkspaceSlugQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workspaces[':workspace_slug'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkspacesWorkspaceSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workspaces)[':workspace_slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.workspaces)[':workspace_slug']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workspaces)[':workspace_slug']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workspaces)[':workspace_slug']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWorkspacesWorkspaceSlugQueryKey>
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
          Awaited<ReturnType<(typeof client.workspaces)[':workspace_slug']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspacesWorkspaceSlugQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkspacesWorkspaceSlugQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.workspaces[':workspace_slug'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWorkspaceSlugActivitiesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':workspace_slug']['activities']['$get']>
  >,
) {
  return [':workspace_slug', '/:workspace_slug/activities', toValue(args)] as const
}

export function getWorkspaceSlugActivitiesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':workspace_slug']['activities']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkspaceSlugActivitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':workspace_slug'].activities.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkspaceSlugActivities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':workspace_slug']['activities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':workspace_slug']['activities']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':workspace_slug']['activities']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':workspace_slug']['activities']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWorkspaceSlugActivitiesQueryKey>
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
          Awaited<ReturnType<(typeof client)[':workspace_slug']['activities']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspaceSlugActivitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkspaceSlugActivitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':workspace_slug'].activities.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostWorkspaceSlugActivities<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostWorkspaceSlugActivitiesMutationOptions<TError, TOnMutateResult>(
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

export function getWorkspaceSlugActivitiesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':workspace_slug']['activities'][':id']['$get']>
  >,
) {
  return [':workspace_slug', '/:workspace_slug/activities/:id', toValue(args)] as const
}

export function getWorkspaceSlugActivitiesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':workspace_slug']['activities'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkspaceSlugActivitiesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':workspace_slug'].activities[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkspaceSlugActivitiesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':workspace_slug']['activities'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':workspace_slug']['activities'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':workspace_slug']['activities'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':workspace_slug']['activities'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWorkspaceSlugActivitiesIdQueryKey>
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
          Awaited<ReturnType<(typeof client)[':workspace_slug']['activities'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspaceSlugActivitiesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkspaceSlugActivitiesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':workspace_slug'].activities[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWorkspaceSlugActivityTypesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':workspace_slug']['activity_types']['$get']>
  >,
) {
  return [':workspace_slug', '/:workspace_slug/activity_types', toValue(args)] as const
}

export function getWorkspaceSlugActivityTypesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':workspace_slug']['activity_types']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkspaceSlugActivityTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':workspace_slug'].activity_types.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkspaceSlugActivityTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':workspace_slug']['activity_types']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':workspace_slug']['activity_types']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':workspace_slug']['activity_types']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':workspace_slug']['activity_types']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWorkspaceSlugActivityTypesQueryKey>
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
          Awaited<ReturnType<(typeof client)[':workspace_slug']['activity_types']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspaceSlugActivityTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkspaceSlugActivityTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':workspace_slug'].activity_types.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWorkspaceSlugMembersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':workspace_slug']['members']['$get']>>,
) {
  return [':workspace_slug', '/:workspace_slug/members', toValue(args)] as const
}

export function getWorkspaceSlugMembersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':workspace_slug']['members']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkspaceSlugMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':workspace_slug'].members.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkspaceSlugMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':workspace_slug']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':workspace_slug']['members']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':workspace_slug']['members']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':workspace_slug']['members']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWorkspaceSlugMembersQueryKey>
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
          Awaited<ReturnType<(typeof client)[':workspace_slug']['members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspaceSlugMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkspaceSlugMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':workspace_slug'].members.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostWorkspaceSlugMembers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostWorkspaceSlugMembersMutationOptions<TError, TOnMutateResult>(
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

export function getWorkspaceSlugMembersFindQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':workspace_slug']['members']['find']['$get']>
  >,
) {
  return [':workspace_slug', '/:workspace_slug/members/find', toValue(args)] as const
}

export function getWorkspaceSlugMembersFindQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':workspace_slug']['members']['find']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkspaceSlugMembersFindQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':workspace_slug'].members.find.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkspaceSlugMembersFind<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':workspace_slug']['members']['find']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':workspace_slug']['members']['find']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':workspace_slug']['members']['find']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':workspace_slug']['members']['find']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWorkspaceSlugMembersFindQueryKey>
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
          Awaited<ReturnType<(typeof client)[':workspace_slug']['members']['find']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspaceSlugMembersFindQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkspaceSlugMembersFindQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':workspace_slug'].members.find.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWorkspaceSlugMembersMemberSlugQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':workspace_slug']['members'][':member_slug']['$get']>
  >,
) {
  return [':workspace_slug', '/:workspace_slug/members/:member_slug', toValue(args)] as const
}

export function getWorkspaceSlugMembersMemberSlugQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':workspace_slug']['members'][':member_slug']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkspaceSlugMembersMemberSlugQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':workspace_slug'].members[':member_slug'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkspaceSlugMembersMemberSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':workspace_slug']['members'][':member_slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':workspace_slug']['members'][':member_slug']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':workspace_slug']['members'][':member_slug']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getWorkspaceSlugMembersMemberSlugQueryKey>
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
          Awaited<ReturnType<(typeof client)[':workspace_slug']['members'][':member_slug']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspaceSlugMembersMemberSlugQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkspaceSlugMembersMemberSlugQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':workspace_slug'].members[':member_slug'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutWorkspaceSlugMembersMemberSlug<
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
  const mutationDefaults = getPutWorkspaceSlugMembersMemberSlugMutationOptions<
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

export function useDeleteWorkspaceSlugMembersMemberSlug<
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
  const mutationDefaults = getDeleteWorkspaceSlugMembersMemberSlugMutationOptions<
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

export function getWorkspaceSlugMembersMemberSlugActivitiesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':workspace_slug']['members'][':member_slug']['activities']['$get']
    >
  >,
) {
  return [
    ':workspace_slug',
    '/:workspace_slug/members/:member_slug/activities',
    toValue(args),
  ] as const
}

export function getWorkspaceSlugMembersMemberSlugActivitiesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':workspace_slug']['members'][':member_slug']['activities']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkspaceSlugMembersMemberSlugActivitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':workspace_slug'].members[':member_slug'].activities.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkspaceSlugMembersMemberSlugActivities<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':workspace_slug']['members'][':member_slug']['activities']['$get']
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
                    (typeof client)[':workspace_slug']['members'][':member_slug']['activities']['$get']
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
                    (typeof client)[':workspace_slug']['members'][':member_slug']['activities']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWorkspaceSlugMembersMemberSlugActivitiesQueryKey>
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
              (typeof client)[':workspace_slug']['members'][':member_slug']['activities']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspaceSlugMembersMemberSlugActivitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkspaceSlugMembersMemberSlugActivitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':workspace_slug'].members[':member_slug'].activities.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostWorkspaceSlugMembersMemberSlugActivities<
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
  const mutationDefaults = getPostWorkspaceSlugMembersMemberSlugActivitiesMutationOptions<
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

export function usePutWorkspaceSlugMembersMemberSlugActivitiesId<
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
  const mutationDefaults = getPutWorkspaceSlugMembersMemberSlugActivitiesIdMutationOptions<
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

export function useDeleteWorkspaceSlugMembersMemberSlugActivitiesId<
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
  const mutationDefaults = getDeleteWorkspaceSlugMembersMemberSlugActivitiesIdMutationOptions<
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

export function usePostWorkspaceSlugMembersMemberSlugIdentities<
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
  const mutationDefaults = getPostWorkspaceSlugMembersMemberSlugIdentitiesMutationOptions<
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

export function useDeleteWorkspaceSlugMembersMemberSlugIdentities<
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
  const mutationDefaults = getDeleteWorkspaceSlugMembersMemberSlugIdentitiesMutationOptions<
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

export function getWorkspaceSlugMembersMemberSlugNotesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':workspace_slug']['members'][':member_slug']['notes']['$get']>
  >,
) {
  return [':workspace_slug', '/:workspace_slug/members/:member_slug/notes', toValue(args)] as const
}

export function getWorkspaceSlugMembersMemberSlugNotesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':workspace_slug']['members'][':member_slug']['notes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkspaceSlugMembersMemberSlugNotesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':workspace_slug'].members[':member_slug'].notes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkspaceSlugMembersMemberSlugNotes<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':workspace_slug']['members'][':member_slug']['notes']['$get']>
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
                    (typeof client)[':workspace_slug']['members'][':member_slug']['notes']['$get']
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
                    (typeof client)[':workspace_slug']['members'][':member_slug']['notes']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWorkspaceSlugMembersMemberSlugNotesQueryKey>
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
              (typeof client)[':workspace_slug']['members'][':member_slug']['notes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspaceSlugMembersMemberSlugNotesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkspaceSlugMembersMemberSlugNotesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':workspace_slug'].members[':member_slug'].notes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostWorkspaceSlugMembersMemberSlugNotes<
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
  const mutationDefaults = getPostWorkspaceSlugMembersMemberSlugNotesMutationOptions<
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

export function usePutWorkspaceSlugMembersMemberSlugNotesId<
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
  const mutationDefaults = getPutWorkspaceSlugMembersMemberSlugNotesIdMutationOptions<
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

export function getWorkspaceSlugOrganizationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':workspace_slug']['organizations']['$get']>
  >,
) {
  return [':workspace_slug', '/:workspace_slug/organizations', toValue(args)] as const
}

export function getWorkspaceSlugOrganizationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':workspace_slug']['organizations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkspaceSlugOrganizationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':workspace_slug'].organizations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkspaceSlugOrganizations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':workspace_slug']['organizations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':workspace_slug']['organizations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':workspace_slug']['organizations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':workspace_slug']['organizations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWorkspaceSlugOrganizationsQueryKey>
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
          Awaited<ReturnType<(typeof client)[':workspace_slug']['organizations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspaceSlugOrganizationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkspaceSlugOrganizationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':workspace_slug'].organizations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWorkspaceSlugOrganizationsOrganizationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':workspace_slug']['organizations'][':organization_id']['$get']
    >
  >,
) {
  return [
    ':workspace_slug',
    '/:workspace_slug/organizations/:organization_id',
    toValue(args),
  ] as const
}

export function getWorkspaceSlugOrganizationsOrganizationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':workspace_slug']['organizations'][':organization_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkspaceSlugOrganizationsOrganizationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':workspace_slug'].organizations[':organization_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkspaceSlugOrganizationsOrganizationId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':workspace_slug']['organizations'][':organization_id']['$get']
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
                    (typeof client)[':workspace_slug']['organizations'][':organization_id']['$get']
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
                    (typeof client)[':workspace_slug']['organizations'][':organization_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWorkspaceSlugOrganizationsOrganizationIdQueryKey>
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
              (typeof client)[':workspace_slug']['organizations'][':organization_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspaceSlugOrganizationsOrganizationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkspaceSlugOrganizationsOrganizationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':workspace_slug'].organizations[':organization_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutWorkspaceSlugOrganizationsOrganizationId<
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
  const mutationDefaults = getPutWorkspaceSlugOrganizationsOrganizationIdMutationOptions<
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

export function getWorkspaceSlugOrganizationsOrganizationIdActivitiesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':workspace_slug']['organizations'][':organization_id']['activities']['$get']
    >
  >,
) {
  return [
    ':workspace_slug',
    '/:workspace_slug/organizations/:organization_id/activities',
    toValue(args),
  ] as const
}

export function getWorkspaceSlugOrganizationsOrganizationIdActivitiesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':workspace_slug']['organizations'][':organization_id']['activities']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkspaceSlugOrganizationsOrganizationIdActivitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':workspace_slug'].organizations[':organization_id'].activities.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkspaceSlugOrganizationsOrganizationIdActivities<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':workspace_slug']['organizations'][':organization_id']['activities']['$get']
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
                    (typeof client)[':workspace_slug']['organizations'][':organization_id']['activities']['$get']
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
                    (typeof client)[':workspace_slug']['organizations'][':organization_id']['activities']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWorkspaceSlugOrganizationsOrganizationIdActivitiesQueryKey>
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
              (typeof client)[':workspace_slug']['organizations'][':organization_id']['activities']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspaceSlugOrganizationsOrganizationIdActivitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkspaceSlugOrganizationsOrganizationIdActivitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':workspace_slug'].organizations[':organization_id'].activities.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getWorkspaceSlugOrganizationsOrganizationIdMembersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':workspace_slug']['organizations'][':organization_id']['members']['$get']
    >
  >,
) {
  return [
    ':workspace_slug',
    '/:workspace_slug/organizations/:organization_id/members',
    toValue(args),
  ] as const
}

export function getWorkspaceSlugOrganizationsOrganizationIdMembersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':workspace_slug']['organizations'][':organization_id']['members']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkspaceSlugOrganizationsOrganizationIdMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':workspace_slug'].organizations[':organization_id'].members.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkspaceSlugOrganizationsOrganizationIdMembers<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':workspace_slug']['organizations'][':organization_id']['members']['$get']
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
                    (typeof client)[':workspace_slug']['organizations'][':organization_id']['members']['$get']
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
                    (typeof client)[':workspace_slug']['organizations'][':organization_id']['members']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWorkspaceSlugOrganizationsOrganizationIdMembersQueryKey>
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
              (typeof client)[':workspace_slug']['organizations'][':organization_id']['members']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspaceSlugOrganizationsOrganizationIdMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkspaceSlugOrganizationsOrganizationIdMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':workspace_slug'].organizations[':organization_id'].members.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWorkspaceSlugReportsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':workspace_slug']['reports']['$get']>>,
) {
  return [':workspace_slug', '/:workspace_slug/reports', toValue(args)] as const
}

export function getWorkspaceSlugReportsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':workspace_slug']['reports']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkspaceSlugReportsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':workspace_slug'].reports.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkspaceSlugReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':workspace_slug']['reports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':workspace_slug']['reports']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':workspace_slug']['reports']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':workspace_slug']['reports']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWorkspaceSlugReportsQueryKey>
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
          Awaited<ReturnType<(typeof client)[':workspace_slug']['reports']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspaceSlugReportsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkspaceSlugReportsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':workspace_slug'].reports.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWorkspaceSlugWebhooksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':workspace_slug']['webhooks']['$get']>>,
) {
  return [':workspace_slug', '/:workspace_slug/webhooks', toValue(args)] as const
}

export function getWorkspaceSlugWebhooksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':workspace_slug']['webhooks']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkspaceSlugWebhooksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':workspace_slug'].webhooks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkspaceSlugWebhooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':workspace_slug']['webhooks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':workspace_slug']['webhooks']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':workspace_slug']['webhooks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':workspace_slug']['webhooks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWorkspaceSlugWebhooksQueryKey>
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
          Awaited<ReturnType<(typeof client)[':workspace_slug']['webhooks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspaceSlugWebhooksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkspaceSlugWebhooksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':workspace_slug'].webhooks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostWorkspaceSlugWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostWorkspaceSlugWebhooksMutationOptions<TError, TOnMutateResult>(
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

export function getWorkspaceSlugWebhooksIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':workspace_slug']['webhooks'][':id']['$get']>
  >,
) {
  return [':workspace_slug', '/:workspace_slug/webhooks/:id', toValue(args)] as const
}

export function getWorkspaceSlugWebhooksIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':workspace_slug']['webhooks'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkspaceSlugWebhooksIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':workspace_slug'].webhooks[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkspaceSlugWebhooksId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':workspace_slug']['webhooks'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':workspace_slug']['webhooks'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':workspace_slug']['webhooks'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':workspace_slug']['webhooks'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWorkspaceSlugWebhooksIdQueryKey>
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
          Awaited<ReturnType<(typeof client)[':workspace_slug']['webhooks'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspaceSlugWebhooksIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkspaceSlugWebhooksIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':workspace_slug'].webhooks[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutWorkspaceSlugWebhooksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutWorkspaceSlugWebhooksIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteWorkspaceSlugWebhooksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteWorkspaceSlugWebhooksIdMutationOptions<TError, TOnMutateResult>(
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
