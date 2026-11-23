import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
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

export function useUser<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUserQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUserQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUser<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUserQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUserQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useWorkspaces<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getWorkspacesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getWorkspacesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseWorkspaces<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getWorkspacesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getWorkspacesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
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
  args: InferRequestType<(typeof client.workspaces)[':workspace_slug']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getWorkspacesWorkspaceSlugQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getWorkspacesWorkspaceSlugQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWorkspacesWorkspaceSlug<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getWorkspacesWorkspaceSlugQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<(typeof client)[':workspace_slug']['activities']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getWorkspaceSlugActivitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getWorkspaceSlugActivitiesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWorkspaceSlugActivities<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getWorkspaceSlugActivitiesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client)[':workspace_slug']['activities'][':id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getWorkspaceSlugActivitiesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getWorkspaceSlugActivitiesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWorkspaceSlugActivitiesId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getWorkspaceSlugActivitiesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<(typeof client)[':workspace_slug']['activity_types']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getWorkspaceSlugActivityTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getWorkspaceSlugActivityTypesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWorkspaceSlugActivityTypes<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getWorkspaceSlugActivityTypesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<(typeof client)[':workspace_slug']['members']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getWorkspaceSlugMembersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getWorkspaceSlugMembersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseWorkspaceSlugMembers<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getWorkspaceSlugMembersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client)[':workspace_slug']['members']['find']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getWorkspaceSlugMembersFindQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getWorkspaceSlugMembersFindQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWorkspaceSlugMembersFind<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getWorkspaceSlugMembersFindQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<(typeof client)[':workspace_slug']['members'][':member_slug']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getWorkspaceSlugMembersMemberSlugQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getWorkspaceSlugMembersMemberSlugQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWorkspaceSlugMembersMemberSlug<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getWorkspaceSlugMembersMemberSlugQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
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
        InferRequestType<(typeof client)[':workspace_slug']['members'][':member_slug']['$delete']>,
        TOnMutateResult
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
  args: InferRequestType<
    (typeof client)[':workspace_slug']['members'][':member_slug']['activities']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getWorkspaceSlugMembersMemberSlugActivitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getWorkspaceSlugMembersMemberSlugActivitiesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWorkspaceSlugMembersMemberSlugActivities<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getWorkspaceSlugMembersMemberSlugActivitiesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client)[':workspace_slug']['members'][':member_slug']['notes']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getWorkspaceSlugMembersMemberSlugNotesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getWorkspaceSlugMembersMemberSlugNotesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWorkspaceSlugMembersMemberSlugNotes<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getWorkspaceSlugMembersMemberSlugNotesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client)[':workspace_slug']['organizations']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getWorkspaceSlugOrganizationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getWorkspaceSlugOrganizationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWorkspaceSlugOrganizations<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getWorkspaceSlugOrganizationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<
    (typeof client)[':workspace_slug']['organizations'][':organization_id']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getWorkspaceSlugOrganizationsOrganizationIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getWorkspaceSlugOrganizationsOrganizationIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWorkspaceSlugOrganizationsOrganizationId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getWorkspaceSlugOrganizationsOrganizationIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client)[':workspace_slug']['organizations'][':organization_id']['activities']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getWorkspaceSlugOrganizationsOrganizationIdActivitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getWorkspaceSlugOrganizationsOrganizationIdActivitiesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWorkspaceSlugOrganizationsOrganizationIdActivities<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getWorkspaceSlugOrganizationsOrganizationIdActivitiesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<
    (typeof client)[':workspace_slug']['organizations'][':organization_id']['members']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getWorkspaceSlugOrganizationsOrganizationIdMembersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getWorkspaceSlugOrganizationsOrganizationIdMembersQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWorkspaceSlugOrganizationsOrganizationIdMembers<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getWorkspaceSlugOrganizationsOrganizationIdMembersQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
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
  args: InferRequestType<(typeof client)[':workspace_slug']['reports']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getWorkspaceSlugReportsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getWorkspaceSlugReportsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseWorkspaceSlugReports<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getWorkspaceSlugReportsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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
  args: InferRequestType<(typeof client)[':workspace_slug']['webhooks']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getWorkspaceSlugWebhooksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getWorkspaceSlugWebhooksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWorkspaceSlugWebhooks<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getWorkspaceSlugWebhooksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client)[':workspace_slug']['webhooks'][':id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getWorkspaceSlugWebhooksIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getWorkspaceSlugWebhooksIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWorkspaceSlugWebhooksId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getWorkspaceSlugWebhooksIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
