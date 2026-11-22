import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGroupKey() {
  return ['group'] as const
}

export function getMonitorKey() {
  return ['monitor'] as const
}

export function getOrgKey() {
  return ['org'] as const
}

export function getOrgsKey() {
  return ['orgs'] as const
}

export function getReportingKey() {
  return ['reporting'] as const
}

export function getTestKey() {
  return ['test'] as const
}

export function getUserKey() {
  return ['user'] as const
}

export function getPostGroupGroupIdAuditMutationKey() {
  return ['group', '/group/:groupId/audit', 'POST'] as const
}

export function getPostGroupGroupIdAuditMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.group)[':groupId']['audit']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.group)[':groupId']['audit']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupGroupIdAuditMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.group)[':groupId']['audit']['$post']>) {
      return parseResponse(client.group[':groupId'].audit.$post(args, options))
    },
  })
}

export function usePostGroupGroupIdAudit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.group)[':groupId']['audit']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.group)[':groupId']['audit']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGroupGroupIdAuditMutationOptions<TError, TOnMutateResult>(
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

export function getGroupGroupIdMembersQueryKey(
  args: InferRequestType<(typeof client.group)[':groupId']['members']['$get']>,
) {
  return ['group', '/group/:groupId/members', args] as const
}

export function getGroupGroupIdMembersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.group)[':groupId']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.group)[':groupId']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.group)[':groupId']['members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupGroupIdMembersQueryKey>
  >({
    queryKey: getGroupGroupIdMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.group[':groupId'].members.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGroupGroupIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.group)[':groupId']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.group)[':groupId']['members']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.group)[':groupId']['members']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupGroupIdMembersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGroupGroupIdMembersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGroupGroupIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.group)[':groupId']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.group)[':groupId']['members']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.group)[':groupId']['members']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupGroupIdMembersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGroupGroupIdMembersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostGroupGroupIdOrgOrgIdMembersMutationKey() {
  return ['group', '/group/:groupId/org/:orgId/members', 'POST'] as const
}

export function getPostGroupGroupIdOrgOrgIdMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.group)[':groupId']['org'][':orgId']['members']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.group)[':groupId']['org'][':orgId']['members']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupGroupIdOrgOrgIdMembersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.group)[':groupId']['org'][':orgId']['members']['$post']
      >,
    ) {
      return parseResponse(client.group[':groupId'].org[':orgId'].members.$post(args, options))
    },
  })
}

export function usePostGroupGroupIdOrgOrgIdMembers<
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
                ReturnType<(typeof client.group)[':groupId']['org'][':orgId']['members']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.group)[':groupId']['org'][':orgId']['members']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGroupGroupIdOrgOrgIdMembersMutationOptions<
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

export function getGroupGroupIdOrgsQueryKey(
  args: InferRequestType<(typeof client.group)[':groupId']['orgs']['$get']>,
) {
  return ['group', '/group/:groupId/orgs', args] as const
}

export function getGroupGroupIdOrgsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.group)[':groupId']['orgs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.group)[':groupId']['orgs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.group)[':groupId']['orgs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupGroupIdOrgsQueryKey>
  >({
    queryKey: getGroupGroupIdOrgsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.group[':groupId'].orgs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGroupGroupIdOrgs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.group)[':groupId']['orgs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.group)[':groupId']['orgs']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.group)[':groupId']['orgs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupGroupIdOrgsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGroupGroupIdOrgsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGroupGroupIdOrgs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.group)[':groupId']['orgs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.group)[':groupId']['orgs']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.group)[':groupId']['orgs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupGroupIdOrgsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGroupGroupIdOrgsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGroupGroupIdRolesQueryKey(
  args: InferRequestType<(typeof client.group)[':groupId']['roles']['$get']>,
) {
  return ['group', '/group/:groupId/roles', args] as const
}

export function getGroupGroupIdRolesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.group)[':groupId']['roles']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.group)[':groupId']['roles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.group)[':groupId']['roles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupGroupIdRolesQueryKey>
  >({
    queryKey: getGroupGroupIdRolesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.group[':groupId'].roles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGroupGroupIdRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.group)[':groupId']['roles']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.group)[':groupId']['roles']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.group)[':groupId']['roles']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupGroupIdRolesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGroupGroupIdRolesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGroupGroupIdRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.group)[':groupId']['roles']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.group)[':groupId']['roles']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.group)[':groupId']['roles']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupGroupIdRolesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGroupGroupIdRolesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGroupGroupIdSettingsQueryKey(
  args: InferRequestType<(typeof client.group)[':groupId']['settings']['$get']>,
) {
  return ['group', '/group/:groupId/settings', args] as const
}

export function getGroupGroupIdSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.group)[':groupId']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.group)[':groupId']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.group)[':groupId']['settings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupGroupIdSettingsQueryKey>
  >({
    queryKey: getGroupGroupIdSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.group[':groupId'].settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGroupGroupIdSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.group)[':groupId']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.group)[':groupId']['settings']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.group)[':groupId']['settings']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupGroupIdSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGroupGroupIdSettingsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGroupGroupIdSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.group)[':groupId']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.group)[':groupId']['settings']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.group)[':groupId']['settings']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupGroupIdSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGroupGroupIdSettingsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutGroupGroupIdSettingsMutationKey() {
  return ['group', '/group/:groupId/settings', 'PUT'] as const
}

export function getPutGroupGroupIdSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.group)[':groupId']['settings']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.group)[':groupId']['settings']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutGroupGroupIdSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.group)[':groupId']['settings']['$put']>,
    ) {
      return parseResponse(client.group[':groupId'].settings.$put(args, options))
    },
  })
}

export function usePutGroupGroupIdSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.group)[':groupId']['settings']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.group)[':groupId']['settings']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutGroupGroupIdSettingsMutationOptions<TError, TOnMutateResult>(
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

export function getGroupGroupIdTagsQueryKey(
  args: InferRequestType<(typeof client.group)[':groupId']['tags']['$get']>,
) {
  return ['group', '/group/:groupId/tags', args] as const
}

export function getGroupGroupIdTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.group)[':groupId']['tags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.group)[':groupId']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.group)[':groupId']['tags']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupGroupIdTagsQueryKey>
  >({
    queryKey: getGroupGroupIdTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.group[':groupId'].tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGroupGroupIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.group)[':groupId']['tags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.group)[':groupId']['tags']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.group)[':groupId']['tags']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupGroupIdTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGroupGroupIdTagsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGroupGroupIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.group)[':groupId']['tags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.group)[':groupId']['tags']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.group)[':groupId']['tags']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupGroupIdTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGroupGroupIdTagsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostGroupGroupIdTagsDeleteMutationKey() {
  return ['group', '/group/:groupId/tags/delete', 'POST'] as const
}

export function getPostGroupGroupIdTagsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.group)[':groupId']['tags']['delete']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.group)[':groupId']['tags']['delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupGroupIdTagsDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.group)[':groupId']['tags']['delete']['$post']>,
    ) {
      return parseResponse(client.group[':groupId'].tags.delete.$post(args, options))
    },
  })
}

export function usePostGroupGroupIdTagsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.group)[':groupId']['tags']['delete']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.group)[':groupId']['tags']['delete']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGroupGroupIdTagsDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getPostMonitorDepGraphMutationKey() {
  return ['monitor', '/monitor/dep-graph', 'POST'] as const
}

export function getPostMonitorDepGraphMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.monitor)['dep-graph']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.monitor)['dep-graph']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMonitorDepGraphMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.monitor)['dep-graph']['$post']>) {
      return parseResponse(client.monitor['dep-graph'].$post(args, options))
    },
  })
}

export function usePostMonitorDepGraph<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.monitor)['dep-graph']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.monitor)['dep-graph']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMonitorDepGraphMutationOptions<TError, TOnMutateResult>(
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

export function getPostOrgMutationKey() {
  return ['org', '/org', 'POST'] as const
}

export function getPostOrgMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.$post>>>>>,
    TError,
    InferRequestType<typeof client.org.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrgMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.org.$post>) {
      return parseResponse(client.org.$post(args, options))
    },
  })
}

export function usePostOrg<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.$post>>>>>,
        TError,
        InferRequestType<typeof client.org.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrgMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteOrgOrgIdMutationKey() {
  return ['org', '/org/:orgId', 'DELETE'] as const
}

export function getDeleteOrgOrgIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.org)[':orgId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.org)[':orgId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrgOrgIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.org)[':orgId']['$delete']>) {
      return parseResponse(client.org[':orgId'].$delete(args, options))
    },
  })
}

export function useDeleteOrgOrgId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.org)[':orgId']['$delete']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.org)[':orgId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteOrgOrgIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostOrgOrgIdAuditMutationKey() {
  return ['org', '/org/:orgId/audit', 'POST'] as const
}

export function getPostOrgOrgIdAuditMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.org)[':orgId']['audit']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.org)[':orgId']['audit']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrgOrgIdAuditMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.org)[':orgId']['audit']['$post']>) {
      return parseResponse(client.org[':orgId'].audit.$post(args, options))
    },
  })
}

export function usePostOrgOrgIdAudit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.org)[':orgId']['audit']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.org)[':orgId']['audit']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrgOrgIdAuditMutationOptions<TError, TOnMutateResult>(
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

export function getPostOrgOrgIdDependenciesMutationKey() {
  return ['org', '/org/:orgId/dependencies', 'POST'] as const
}

export function getPostOrgOrgIdDependenciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org)[':orgId']['dependencies']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.org)[':orgId']['dependencies']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrgOrgIdDependenciesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.org)[':orgId']['dependencies']['$post']>,
    ) {
      return parseResponse(client.org[':orgId'].dependencies.$post(args, options))
    },
  })
}

export function usePostOrgOrgIdDependencies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.org)[':orgId']['dependencies']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.org)[':orgId']['dependencies']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrgOrgIdDependenciesMutationOptions<TError, TOnMutateResult>(
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

export function getOrgOrgIdEntitlementEntitlementKeyQueryKey(
  args: InferRequestType<(typeof client.org)[':orgId']['entitlement'][':entitlementKey']['$get']>,
) {
  return ['org', '/org/:orgId/entitlement/:entitlementKey', args] as const
}

export function getOrgOrgIdEntitlementEntitlementKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.org)[':orgId']['entitlement'][':entitlementKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.org)[':orgId']['entitlement'][':entitlementKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.org)[':orgId']['entitlement'][':entitlementKey']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgOrgIdEntitlementEntitlementKeyQueryKey>
  >({
    queryKey: getOrgOrgIdEntitlementEntitlementKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.org[':orgId'].entitlement[':entitlementKey'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrgOrgIdEntitlementEntitlementKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.org)[':orgId']['entitlement'][':entitlementKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.org)[':orgId']['entitlement'][':entitlementKey']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.org)[':orgId']['entitlement'][':entitlementKey']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgOrgIdEntitlementEntitlementKeyQueryKey>
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
      ...getOrgOrgIdEntitlementEntitlementKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrgOrgIdEntitlementEntitlementKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.org)[':orgId']['entitlement'][':entitlementKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.org)[':orgId']['entitlement'][':entitlementKey']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.org)[':orgId']['entitlement'][':entitlementKey']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgOrgIdEntitlementEntitlementKeyQueryKey>
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
      ...getOrgOrgIdEntitlementEntitlementKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOrgOrgIdEntitlementsQueryKey(
  args: InferRequestType<(typeof client.org)[':orgId']['entitlements']['$get']>,
) {
  return ['org', '/org/:orgId/entitlements', args] as const
}

export function getOrgOrgIdEntitlementsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.org)[':orgId']['entitlements']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.org)[':orgId']['entitlements']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org)[':orgId']['entitlements']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgOrgIdEntitlementsQueryKey>
  >({
    queryKey: getOrgOrgIdEntitlementsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.org[':orgId'].entitlements.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrgOrgIdEntitlements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.org)[':orgId']['entitlements']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.org)[':orgId']['entitlements']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.org)[':orgId']['entitlements']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgOrgIdEntitlementsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOrgOrgIdEntitlementsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOrgOrgIdEntitlements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.org)[':orgId']['entitlements']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.org)[':orgId']['entitlements']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.org)[':orgId']['entitlements']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgOrgIdEntitlementsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOrgOrgIdEntitlementsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOrgOrgIdIntegrationsQueryKey(
  args: InferRequestType<(typeof client.org)[':orgId']['integrations']['$get']>,
) {
  return ['org', '/org/:orgId/integrations', args] as const
}

export function getOrgOrgIdIntegrationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.org)[':orgId']['integrations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.org)[':orgId']['integrations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org)[':orgId']['integrations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgOrgIdIntegrationsQueryKey>
  >({
    queryKey: getOrgOrgIdIntegrationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.org[':orgId'].integrations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrgOrgIdIntegrations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.org)[':orgId']['integrations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.org)[':orgId']['integrations']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.org)[':orgId']['integrations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgOrgIdIntegrationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOrgOrgIdIntegrationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOrgOrgIdIntegrations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.org)[':orgId']['integrations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.org)[':orgId']['integrations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.org)[':orgId']['integrations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgOrgIdIntegrationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOrgOrgIdIntegrationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostOrgOrgIdIntegrationsMutationKey() {
  return ['org', '/org/:orgId/integrations', 'POST'] as const
}

export function getPostOrgOrgIdIntegrationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org)[':orgId']['integrations']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.org)[':orgId']['integrations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrgOrgIdIntegrationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.org)[':orgId']['integrations']['$post']>,
    ) {
      return parseResponse(client.org[':orgId'].integrations.$post(args, options))
    },
  })
}

export function usePostOrgOrgIdIntegrations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.org)[':orgId']['integrations']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.org)[':orgId']['integrations']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrgOrgIdIntegrationsMutationOptions<TError, TOnMutateResult>(
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

export function getPutOrgOrgIdIntegrationsIntegrationIdMutationKey() {
  return ['org', '/org/:orgId/integrations/:integrationId', 'PUT'] as const
}

export function getPutOrgOrgIdIntegrationsIntegrationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.org)[':orgId']['integrations'][':integrationId']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.org)[':orgId']['integrations'][':integrationId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrgOrgIdIntegrationsIntegrationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.org)[':orgId']['integrations'][':integrationId']['$put']
      >,
    ) {
      return parseResponse(client.org[':orgId'].integrations[':integrationId'].$put(args, options))
    },
  })
}

export function usePutOrgOrgIdIntegrationsIntegrationId<
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
                ReturnType<(typeof client.org)[':orgId']['integrations'][':integrationId']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.org)[':orgId']['integrations'][':integrationId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutOrgOrgIdIntegrationsIntegrationIdMutationOptions<
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

export function getDeleteOrgOrgIdIntegrationsIntegrationIdAuthenticationMutationKey() {
  return ['org', '/org/:orgId/integrations/:integrationId/authentication', 'DELETE'] as const
}

export function getDeleteOrgOrgIdIntegrationsIntegrationIdAuthenticationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.org)[':orgId']['integrations'][':integrationId']['authentication']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.org)[':orgId']['integrations'][':integrationId']['authentication']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrgOrgIdIntegrationsIntegrationIdAuthenticationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.org)[':orgId']['integrations'][':integrationId']['authentication']['$delete']
      >,
    ) {
      return parseResponse(
        client.org[':orgId'].integrations[':integrationId'].authentication.$delete(args, options),
      )
    },
  })
}

export function useDeleteOrgOrgIdIntegrationsIntegrationIdAuthentication<
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
                  (typeof client.org)[':orgId']['integrations'][':integrationId']['authentication']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.org)[':orgId']['integrations'][':integrationId']['authentication']['$delete']
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
  const mutationDefaults = getDeleteOrgOrgIdIntegrationsIntegrationIdAuthenticationMutationOptions<
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

export function getPostOrgOrgIdIntegrationsIntegrationIdAuthenticationProvisionTokenMutationKey() {
  return [
    'org',
    '/org/:orgId/integrations/:integrationId/authentication/provision-token',
    'POST',
  ] as const
}

export function getPostOrgOrgIdIntegrationsIntegrationIdAuthenticationProvisionTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.org)[':orgId']['integrations'][':integrationId']['authentication']['provision-token']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.org)[':orgId']['integrations'][':integrationId']['authentication']['provision-token']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrgOrgIdIntegrationsIntegrationIdAuthenticationProvisionTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.org)[':orgId']['integrations'][':integrationId']['authentication']['provision-token']['$post']
      >,
    ) {
      return parseResponse(
        client.org[':orgId'].integrations[':integrationId'].authentication['provision-token'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostOrgOrgIdIntegrationsIntegrationIdAuthenticationProvisionToken<
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
                  (typeof client.org)[':orgId']['integrations'][':integrationId']['authentication']['provision-token']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.org)[':orgId']['integrations'][':integrationId']['authentication']['provision-token']['$post']
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
  const mutationDefaults =
    getPostOrgOrgIdIntegrationsIntegrationIdAuthenticationProvisionTokenMutationOptions<
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

export function getPostOrgOrgIdIntegrationsIntegrationIdAuthenticationSwitchTokenMutationKey() {
  return [
    'org',
    '/org/:orgId/integrations/:integrationId/authentication/switch-token',
    'POST',
  ] as const
}

export function getPostOrgOrgIdIntegrationsIntegrationIdAuthenticationSwitchTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.org)[':orgId']['integrations'][':integrationId']['authentication']['switch-token']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.org)[':orgId']['integrations'][':integrationId']['authentication']['switch-token']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrgOrgIdIntegrationsIntegrationIdAuthenticationSwitchTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.org)[':orgId']['integrations'][':integrationId']['authentication']['switch-token']['$post']
      >,
    ) {
      return parseResponse(
        client.org[':orgId'].integrations[':integrationId'].authentication['switch-token'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostOrgOrgIdIntegrationsIntegrationIdAuthenticationSwitchToken<
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
                  (typeof client.org)[':orgId']['integrations'][':integrationId']['authentication']['switch-token']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.org)[':orgId']['integrations'][':integrationId']['authentication']['switch-token']['$post']
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
  const mutationDefaults =
    getPostOrgOrgIdIntegrationsIntegrationIdAuthenticationSwitchTokenMutationOptions<
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

export function getPostOrgOrgIdIntegrationsIntegrationIdCloneMutationKey() {
  return ['org', '/org/:orgId/integrations/:integrationId/clone', 'POST'] as const
}

export function getPostOrgOrgIdIntegrationsIntegrationIdCloneMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.org)[':orgId']['integrations'][':integrationId']['clone']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.org)[':orgId']['integrations'][':integrationId']['clone']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrgOrgIdIntegrationsIntegrationIdCloneMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.org)[':orgId']['integrations'][':integrationId']['clone']['$post']
      >,
    ) {
      return parseResponse(
        client.org[':orgId'].integrations[':integrationId'].clone.$post(args, options),
      )
    },
  })
}

export function usePostOrgOrgIdIntegrationsIntegrationIdClone<
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
                  (typeof client.org)[':orgId']['integrations'][':integrationId']['clone']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.org)[':orgId']['integrations'][':integrationId']['clone']['$post']
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
  const mutationDefaults = getPostOrgOrgIdIntegrationsIntegrationIdCloneMutationOptions<
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

export function getPostOrgOrgIdIntegrationsIntegrationIdImportMutationKey() {
  return ['org', '/org/:orgId/integrations/:integrationId/import', 'POST'] as const
}

export function getPostOrgOrgIdIntegrationsIntegrationIdImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.org)[':orgId']['integrations'][':integrationId']['import']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.org)[':orgId']['integrations'][':integrationId']['import']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrgOrgIdIntegrationsIntegrationIdImportMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.org)[':orgId']['integrations'][':integrationId']['import']['$post']
      >,
    ) {
      return parseResponse(
        client.org[':orgId'].integrations[':integrationId'].import.$post(args, options),
      )
    },
  })
}

export function usePostOrgOrgIdIntegrationsIntegrationIdImport<
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
                  (typeof client.org)[':orgId']['integrations'][':integrationId']['import']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.org)[':orgId']['integrations'][':integrationId']['import']['$post']
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
  const mutationDefaults = getPostOrgOrgIdIntegrationsIntegrationIdImportMutationOptions<
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

export function getOrgOrgIdIntegrationsIntegrationIdImportJobIdQueryKey(
  args: InferRequestType<
    (typeof client.org)[':orgId']['integrations'][':integrationId']['import'][':jobId']['$get']
  >,
) {
  return ['org', '/org/:orgId/integrations/:integrationId/import/:jobId', args] as const
}

export function getOrgOrgIdIntegrationsIntegrationIdImportJobIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.org)[':orgId']['integrations'][':integrationId']['import'][':jobId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.org)[':orgId']['integrations'][':integrationId']['import'][':jobId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.org)[':orgId']['integrations'][':integrationId']['import'][':jobId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgOrgIdIntegrationsIntegrationIdImportJobIdQueryKey>
  >({
    queryKey: getOrgOrgIdIntegrationsIntegrationIdImportJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.org[':orgId'].integrations[':integrationId'].import[':jobId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrgOrgIdIntegrationsIntegrationIdImportJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.org)[':orgId']['integrations'][':integrationId']['import'][':jobId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.org)[':orgId']['integrations'][':integrationId']['import'][':jobId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.org)[':orgId']['integrations'][':integrationId']['import'][':jobId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgOrgIdIntegrationsIntegrationIdImportJobIdQueryKey>
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
      ...getOrgOrgIdIntegrationsIntegrationIdImportJobIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrgOrgIdIntegrationsIntegrationIdImportJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.org)[':orgId']['integrations'][':integrationId']['import'][':jobId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.org)[':orgId']['integrations'][':integrationId']['import'][':jobId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.org)[':orgId']['integrations'][':integrationId']['import'][':jobId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgOrgIdIntegrationsIntegrationIdImportJobIdQueryKey>
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
      ...getOrgOrgIdIntegrationsIntegrationIdImportJobIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOrgOrgIdIntegrationsIntegrationIdSettingsQueryKey(
  args: InferRequestType<
    (typeof client.org)[':orgId']['integrations'][':integrationId']['settings']['$get']
  >,
) {
  return ['org', '/org/:orgId/integrations/:integrationId/settings', args] as const
}

export function getOrgOrgIdIntegrationsIntegrationIdSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.org)[':orgId']['integrations'][':integrationId']['settings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.org)[':orgId']['integrations'][':integrationId']['settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.org)[':orgId']['integrations'][':integrationId']['settings']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgOrgIdIntegrationsIntegrationIdSettingsQueryKey>
  >({
    queryKey: getOrgOrgIdIntegrationsIntegrationIdSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.org[':orgId'].integrations[':integrationId'].settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrgOrgIdIntegrationsIntegrationIdSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.org)[':orgId']['integrations'][':integrationId']['settings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.org)[':orgId']['integrations'][':integrationId']['settings']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.org)[':orgId']['integrations'][':integrationId']['settings']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgOrgIdIntegrationsIntegrationIdSettingsQueryKey>
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
      ...getOrgOrgIdIntegrationsIntegrationIdSettingsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrgOrgIdIntegrationsIntegrationIdSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.org)[':orgId']['integrations'][':integrationId']['settings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.org)[':orgId']['integrations'][':integrationId']['settings']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.org)[':orgId']['integrations'][':integrationId']['settings']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgOrgIdIntegrationsIntegrationIdSettingsQueryKey>
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
      ...getOrgOrgIdIntegrationsIntegrationIdSettingsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutOrgOrgIdIntegrationsIntegrationIdSettingsMutationKey() {
  return ['org', '/org/:orgId/integrations/:integrationId/settings', 'PUT'] as const
}

export function getPutOrgOrgIdIntegrationsIntegrationIdSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.org)[':orgId']['integrations'][':integrationId']['settings']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.org)[':orgId']['integrations'][':integrationId']['settings']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrgOrgIdIntegrationsIntegrationIdSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.org)[':orgId']['integrations'][':integrationId']['settings']['$put']
      >,
    ) {
      return parseResponse(
        client.org[':orgId'].integrations[':integrationId'].settings.$put(args, options),
      )
    },
  })
}

export function usePutOrgOrgIdIntegrationsIntegrationIdSettings<
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
                  (typeof client.org)[':orgId']['integrations'][':integrationId']['settings']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.org)[':orgId']['integrations'][':integrationId']['settings']['$put']
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
  const mutationDefaults = getPutOrgOrgIdIntegrationsIntegrationIdSettingsMutationOptions<
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

export function getOrgOrgIdIntegrationsTypeQueryKey(
  args: InferRequestType<(typeof client.org)[':orgId']['integrations'][':type']['$get']>,
) {
  return ['org', '/org/:orgId/integrations/:type', args] as const
}

export function getOrgOrgIdIntegrationsTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.org)[':orgId']['integrations'][':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.org)[':orgId']['integrations'][':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org)[':orgId']['integrations'][':type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgOrgIdIntegrationsTypeQueryKey>
  >({
    queryKey: getOrgOrgIdIntegrationsTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.org[':orgId'].integrations[':type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrgOrgIdIntegrationsType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.org)[':orgId']['integrations'][':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.org)[':orgId']['integrations'][':type']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.org)[':orgId']['integrations'][':type']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgOrgIdIntegrationsTypeQueryKey>
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
      ...getOrgOrgIdIntegrationsTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrgOrgIdIntegrationsType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.org)[':orgId']['integrations'][':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.org)[':orgId']['integrations'][':type']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.org)[':orgId']['integrations'][':type']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgOrgIdIntegrationsTypeQueryKey>
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
      ...getOrgOrgIdIntegrationsTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostOrgOrgIdInviteMutationKey() {
  return ['org', '/org/:orgId/invite', 'POST'] as const
}

export function getPostOrgOrgIdInviteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.org)[':orgId']['invite']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.org)[':orgId']['invite']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrgOrgIdInviteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.org)[':orgId']['invite']['$post']>) {
      return parseResponse(client.org[':orgId'].invite.$post(args, options))
    },
  })
}

export function usePostOrgOrgIdInvite<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.org)[':orgId']['invite']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.org)[':orgId']['invite']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrgOrgIdInviteMutationOptions<TError, TOnMutateResult>(
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

export function getPostOrgOrgIdLicensesMutationKey() {
  return ['org', '/org/:orgId/licenses', 'POST'] as const
}

export function getPostOrgOrgIdLicensesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org)[':orgId']['licenses']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.org)[':orgId']['licenses']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrgOrgIdLicensesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.org)[':orgId']['licenses']['$post']>) {
      return parseResponse(client.org[':orgId'].licenses.$post(args, options))
    },
  })
}

export function usePostOrgOrgIdLicenses<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.org)[':orgId']['licenses']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.org)[':orgId']['licenses']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrgOrgIdLicensesMutationOptions<TError, TOnMutateResult>(
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

export function getOrgOrgIdMembersQueryKey(
  args: InferRequestType<(typeof client.org)[':orgId']['members']['$get']>,
) {
  return ['org', '/org/:orgId/members', args] as const
}

export function getOrgOrgIdMembersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.org)[':orgId']['members']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.org)[':orgId']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.org)[':orgId']['members']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgOrgIdMembersQueryKey>
  >({
    queryKey: getOrgOrgIdMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.org[':orgId'].members.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useOrgOrgIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.org)[':orgId']['members']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.org)[':orgId']['members']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.org)[':orgId']['members']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgOrgIdMembersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOrgOrgIdMembersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOrgOrgIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.org)[':orgId']['members']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.org)[':orgId']['members']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.org)[':orgId']['members']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgOrgIdMembersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOrgOrgIdMembersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutOrgOrgIdMembersUpdateUserIdMutationKey() {
  return ['org', '/org/:orgId/members/update/:userId', 'PUT'] as const
}

export function getPutOrgOrgIdMembersUpdateUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org)[':orgId']['members']['update'][':userId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.org)[':orgId']['members']['update'][':userId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrgOrgIdMembersUpdateUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.org)[':orgId']['members']['update'][':userId']['$put']>,
    ) {
      return parseResponse(client.org[':orgId'].members.update[':userId'].$put(args, options))
    },
  })
}

export function usePutOrgOrgIdMembersUpdateUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.org)[':orgId']['members']['update'][':userId']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.org)[':orgId']['members']['update'][':userId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutOrgOrgIdMembersUpdateUserIdMutationOptions<
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

export function getPutOrgOrgIdMembersUserIdMutationKey() {
  return ['org', '/org/:orgId/members/:userId', 'PUT'] as const
}

export function getPutOrgOrgIdMembersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org)[':orgId']['members'][':userId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.org)[':orgId']['members'][':userId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrgOrgIdMembersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.org)[':orgId']['members'][':userId']['$put']>,
    ) {
      return parseResponse(client.org[':orgId'].members[':userId'].$put(args, options))
    },
  })
}

export function usePutOrgOrgIdMembersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.org)[':orgId']['members'][':userId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.org)[':orgId']['members'][':userId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutOrgOrgIdMembersUserIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteOrgOrgIdMembersUserIdMutationKey() {
  return ['org', '/org/:orgId/members/:userId', 'DELETE'] as const
}

export function getDeleteOrgOrgIdMembersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org)[':orgId']['members'][':userId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.org)[':orgId']['members'][':userId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrgOrgIdMembersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.org)[':orgId']['members'][':userId']['$delete']>,
    ) {
      return parseResponse(client.org[':orgId'].members[':userId'].$delete(args, options))
    },
  })
}

export function useDeleteOrgOrgIdMembersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.org)[':orgId']['members'][':userId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.org)[':orgId']['members'][':userId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteOrgOrgIdMembersUserIdMutationOptions<TError, TOnMutateResult>(
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

export function getOrgOrgIdNotificationSettingsQueryKey(
  args: InferRequestType<(typeof client.org)[':orgId']['notification-settings']['$get']>,
) {
  return ['org', '/org/:orgId/notification-settings', args] as const
}

export function getOrgOrgIdNotificationSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.org)[':orgId']['notification-settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.org)[':orgId']['notification-settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org)[':orgId']['notification-settings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgOrgIdNotificationSettingsQueryKey>
  >({
    queryKey: getOrgOrgIdNotificationSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.org[':orgId']['notification-settings'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrgOrgIdNotificationSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.org)[':orgId']['notification-settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.org)[':orgId']['notification-settings']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.org)[':orgId']['notification-settings']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgOrgIdNotificationSettingsQueryKey>
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
      ...getOrgOrgIdNotificationSettingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrgOrgIdNotificationSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.org)[':orgId']['notification-settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.org)[':orgId']['notification-settings']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.org)[':orgId']['notification-settings']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgOrgIdNotificationSettingsQueryKey>
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
      ...getOrgOrgIdNotificationSettingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutOrgOrgIdNotificationSettingsMutationKey() {
  return ['org', '/org/:orgId/notification-settings', 'PUT'] as const
}

export function getPutOrgOrgIdNotificationSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org)[':orgId']['notification-settings']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.org)[':orgId']['notification-settings']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrgOrgIdNotificationSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.org)[':orgId']['notification-settings']['$put']>,
    ) {
      return parseResponse(client.org[':orgId']['notification-settings'].$put(args, options))
    },
  })
}

export function usePutOrgOrgIdNotificationSettings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.org)[':orgId']['notification-settings']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.org)[':orgId']['notification-settings']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutOrgOrgIdNotificationSettingsMutationOptions<
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

export function getOrgOrgIdProjectProjectIdQueryKey(
  args: InferRequestType<(typeof client.org)[':orgId']['project'][':projectId']['$get']>,
) {
  return ['org', '/org/:orgId/project/:projectId', args] as const
}

export function getOrgOrgIdProjectProjectIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.org)[':orgId']['project'][':projectId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.org)[':orgId']['project'][':projectId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org)[':orgId']['project'][':projectId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgOrgIdProjectProjectIdQueryKey>
  >({
    queryKey: getOrgOrgIdProjectProjectIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.org[':orgId'].project[':projectId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrgOrgIdProjectProjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.org)[':orgId']['project'][':projectId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.org)[':orgId']['project'][':projectId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.org)[':orgId']['project'][':projectId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgOrgIdProjectProjectIdQueryKey>
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
      ...getOrgOrgIdProjectProjectIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrgOrgIdProjectProjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.org)[':orgId']['project'][':projectId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.org)[':orgId']['project'][':projectId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.org)[':orgId']['project'][':projectId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgOrgIdProjectProjectIdQueryKey>
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
      ...getOrgOrgIdProjectProjectIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutOrgOrgIdProjectProjectIdMutationKey() {
  return ['org', '/org/:orgId/project/:projectId', 'PUT'] as const
}

export function getPutOrgOrgIdProjectProjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org)[':orgId']['project'][':projectId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.org)[':orgId']['project'][':projectId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrgOrgIdProjectProjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.org)[':orgId']['project'][':projectId']['$put']>,
    ) {
      return parseResponse(client.org[':orgId'].project[':projectId'].$put(args, options))
    },
  })
}

export function usePutOrgOrgIdProjectProjectId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.org)[':orgId']['project'][':projectId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.org)[':orgId']['project'][':projectId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutOrgOrgIdProjectProjectIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteOrgOrgIdProjectProjectIdMutationKey() {
  return ['org', '/org/:orgId/project/:projectId', 'DELETE'] as const
}

export function getDeleteOrgOrgIdProjectProjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org)[':orgId']['project'][':projectId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.org)[':orgId']['project'][':projectId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrgOrgIdProjectProjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.org)[':orgId']['project'][':projectId']['$delete']>,
    ) {
      return parseResponse(client.org[':orgId'].project[':projectId'].$delete(args, options))
    },
  })
}

export function useDeleteOrgOrgIdProjectProjectId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.org)[':orgId']['project'][':projectId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.org)[':orgId']['project'][':projectId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteOrgOrgIdProjectProjectIdMutationOptions<
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

export function getPostOrgOrgIdProjectProjectIdActivateMutationKey() {
  return ['org', '/org/:orgId/project/:projectId/activate', 'POST'] as const
}

export function getPostOrgOrgIdProjectProjectIdActivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.org)[':orgId']['project'][':projectId']['activate']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.org)[':orgId']['project'][':projectId']['activate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrgOrgIdProjectProjectIdActivateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.org)[':orgId']['project'][':projectId']['activate']['$post']
      >,
    ) {
      return parseResponse(client.org[':orgId'].project[':projectId'].activate.$post(args, options))
    },
  })
}

export function usePostOrgOrgIdProjectProjectIdActivate<
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
                  (typeof client.org)[':orgId']['project'][':projectId']['activate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.org)[':orgId']['project'][':projectId']['activate']['$post']
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
  const mutationDefaults = getPostOrgOrgIdProjectProjectIdActivateMutationOptions<
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

export function getPostOrgOrgIdProjectProjectIdAggregatedIssuesMutationKey() {
  return ['org', '/org/:orgId/project/:projectId/aggregated-issues', 'POST'] as const
}

export function getPostOrgOrgIdProjectProjectIdAggregatedIssuesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.org)[':orgId']['project'][':projectId']['aggregated-issues']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.org)[':orgId']['project'][':projectId']['aggregated-issues']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrgOrgIdProjectProjectIdAggregatedIssuesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.org)[':orgId']['project'][':projectId']['aggregated-issues']['$post']
      >,
    ) {
      return parseResponse(
        client.org[':orgId'].project[':projectId']['aggregated-issues'].$post(args, options),
      )
    },
  })
}

export function usePostOrgOrgIdProjectProjectIdAggregatedIssues<
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
                  (typeof client.org)[':orgId']['project'][':projectId']['aggregated-issues']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.org)[':orgId']['project'][':projectId']['aggregated-issues']['$post']
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
  const mutationDefaults = getPostOrgOrgIdProjectProjectIdAggregatedIssuesMutationOptions<
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

export function getPostOrgOrgIdProjectProjectIdAttributesMutationKey() {
  return ['org', '/org/:orgId/project/:projectId/attributes', 'POST'] as const
}

export function getPostOrgOrgIdProjectProjectIdAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.org)[':orgId']['project'][':projectId']['attributes']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.org)[':orgId']['project'][':projectId']['attributes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrgOrgIdProjectProjectIdAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.org)[':orgId']['project'][':projectId']['attributes']['$post']
      >,
    ) {
      return parseResponse(
        client.org[':orgId'].project[':projectId'].attributes.$post(args, options),
      )
    },
  })
}

export function usePostOrgOrgIdProjectProjectIdAttributes<
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
                  (typeof client.org)[':orgId']['project'][':projectId']['attributes']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.org)[':orgId']['project'][':projectId']['attributes']['$post']
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
  const mutationDefaults = getPostOrgOrgIdProjectProjectIdAttributesMutationOptions<
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

export function getPostOrgOrgIdProjectProjectIdDeactivateMutationKey() {
  return ['org', '/org/:orgId/project/:projectId/deactivate', 'POST'] as const
}

export function getPostOrgOrgIdProjectProjectIdDeactivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.org)[':orgId']['project'][':projectId']['deactivate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.org)[':orgId']['project'][':projectId']['deactivate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrgOrgIdProjectProjectIdDeactivateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.org)[':orgId']['project'][':projectId']['deactivate']['$post']
      >,
    ) {
      return parseResponse(
        client.org[':orgId'].project[':projectId'].deactivate.$post(args, options),
      )
    },
  })
}

export function usePostOrgOrgIdProjectProjectIdDeactivate<
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
                  (typeof client.org)[':orgId']['project'][':projectId']['deactivate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.org)[':orgId']['project'][':projectId']['deactivate']['$post']
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
  const mutationDefaults = getPostOrgOrgIdProjectProjectIdDeactivateMutationOptions<
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

export function getOrgOrgIdProjectProjectIdDepGraphQueryKey(
  args: InferRequestType<
    (typeof client.org)[':orgId']['project'][':projectId']['dep-graph']['$get']
  >,
) {
  return ['org', '/org/:orgId/project/:projectId/dep-graph', args] as const
}

export function getOrgOrgIdProjectProjectIdDepGraphQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.org)[':orgId']['project'][':projectId']['dep-graph']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.org)[':orgId']['project'][':projectId']['dep-graph']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.org)[':orgId']['project'][':projectId']['dep-graph']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgOrgIdProjectProjectIdDepGraphQueryKey>
  >({
    queryKey: getOrgOrgIdProjectProjectIdDepGraphQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.org[':orgId'].project[':projectId']['dep-graph'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrgOrgIdProjectProjectIdDepGraph<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.org)[':orgId']['project'][':projectId']['dep-graph']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.org)[':orgId']['project'][':projectId']['dep-graph']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.org)[':orgId']['project'][':projectId']['dep-graph']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgOrgIdProjectProjectIdDepGraphQueryKey>
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
      ...getOrgOrgIdProjectProjectIdDepGraphQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrgOrgIdProjectProjectIdDepGraph<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.org)[':orgId']['project'][':projectId']['dep-graph']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.org)[':orgId']['project'][':projectId']['dep-graph']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.org)[':orgId']['project'][':projectId']['dep-graph']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgOrgIdProjectProjectIdDepGraphQueryKey>
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
      ...getOrgOrgIdProjectProjectIdDepGraphQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostOrgOrgIdProjectProjectIdHistoryMutationKey() {
  return ['org', '/org/:orgId/project/:projectId/history', 'POST'] as const
}

export function getPostOrgOrgIdProjectProjectIdHistoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.org)[':orgId']['project'][':projectId']['history']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.org)[':orgId']['project'][':projectId']['history']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrgOrgIdProjectProjectIdHistoryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.org)[':orgId']['project'][':projectId']['history']['$post']
      >,
    ) {
      return parseResponse(client.org[':orgId'].project[':projectId'].history.$post(args, options))
    },
  })
}

export function usePostOrgOrgIdProjectProjectIdHistory<
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
                  (typeof client.org)[':orgId']['project'][':projectId']['history']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.org)[':orgId']['project'][':projectId']['history']['$post']
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
  const mutationDefaults = getPostOrgOrgIdProjectProjectIdHistoryMutationOptions<
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

export function getPostOrgOrgIdProjectProjectIdHistorySnapshotIdAggregatedIssuesMutationKey() {
  return [
    'org',
    '/org/:orgId/project/:projectId/history/:snapshotId/aggregated-issues',
    'POST',
  ] as const
}

export function getPostOrgOrgIdProjectProjectIdHistorySnapshotIdAggregatedIssuesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.org)[':orgId']['project'][':projectId']['history'][':snapshotId']['aggregated-issues']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.org)[':orgId']['project'][':projectId']['history'][':snapshotId']['aggregated-issues']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrgOrgIdProjectProjectIdHistorySnapshotIdAggregatedIssuesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.org)[':orgId']['project'][':projectId']['history'][':snapshotId']['aggregated-issues']['$post']
      >,
    ) {
      return parseResponse(
        client.org[':orgId'].project[':projectId'].history[':snapshotId'][
          'aggregated-issues'
        ].$post(args, options),
      )
    },
  })
}

export function usePostOrgOrgIdProjectProjectIdHistorySnapshotIdAggregatedIssues<
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
                  (typeof client.org)[':orgId']['project'][':projectId']['history'][':snapshotId']['aggregated-issues']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.org)[':orgId']['project'][':projectId']['history'][':snapshotId']['aggregated-issues']['$post']
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
  const mutationDefaults =
    getPostOrgOrgIdProjectProjectIdHistorySnapshotIdAggregatedIssuesMutationOptions<
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

export function getOrgOrgIdProjectProjectIdHistorySnapshotIdIssueIssueIdPathsQueryKey(
  args: InferRequestType<
    (typeof client.org)[':orgId']['project'][':projectId']['history'][':snapshotId']['issue'][':issueId']['paths']['$get']
  >,
) {
  return [
    'org',
    '/org/:orgId/project/:projectId/history/:snapshotId/issue/:issueId/paths',
    args,
  ] as const
}

export function getOrgOrgIdProjectProjectIdHistorySnapshotIdIssueIssueIdPathsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.org)[':orgId']['project'][':projectId']['history'][':snapshotId']['issue'][':issueId']['paths']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.org)[':orgId']['project'][':projectId']['history'][':snapshotId']['issue'][':issueId']['paths']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.org)[':orgId']['project'][':projectId']['history'][':snapshotId']['issue'][':issueId']['paths']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgOrgIdProjectProjectIdHistorySnapshotIdIssueIssueIdPathsQueryKey>
  >({
    queryKey: getOrgOrgIdProjectProjectIdHistorySnapshotIdIssueIssueIdPathsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.org[':orgId'].project[':projectId'].history[':snapshotId'].issue[
          ':issueId'
        ].paths.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useOrgOrgIdProjectProjectIdHistorySnapshotIdIssueIssueIdPaths<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.org)[':orgId']['project'][':projectId']['history'][':snapshotId']['issue'][':issueId']['paths']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.org)[':orgId']['project'][':projectId']['history'][':snapshotId']['issue'][':issueId']['paths']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.org)[':orgId']['project'][':projectId']['history'][':snapshotId']['issue'][':issueId']['paths']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgOrgIdProjectProjectIdHistorySnapshotIdIssueIssueIdPathsQueryKey>
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
      ...getOrgOrgIdProjectProjectIdHistorySnapshotIdIssueIssueIdPathsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrgOrgIdProjectProjectIdHistorySnapshotIdIssueIssueIdPaths<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.org)[':orgId']['project'][':projectId']['history'][':snapshotId']['issue'][':issueId']['paths']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.org)[':orgId']['project'][':projectId']['history'][':snapshotId']['issue'][':issueId']['paths']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.org)[':orgId']['project'][':projectId']['history'][':snapshotId']['issue'][':issueId']['paths']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgOrgIdProjectProjectIdHistorySnapshotIdIssueIssueIdPathsQueryKey>
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
      ...getOrgOrgIdProjectProjectIdHistorySnapshotIdIssueIssueIdPathsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOrgOrgIdProjectProjectIdIgnoreIssueIdQueryKey(
  args: InferRequestType<
    (typeof client.org)[':orgId']['project'][':projectId']['ignore'][':issueId']['$get']
  >,
) {
  return ['org', '/org/:orgId/project/:projectId/ignore/:issueId', args] as const
}

export function getOrgOrgIdProjectProjectIdIgnoreIssueIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.org)[':orgId']['project'][':projectId']['ignore'][':issueId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.org)[':orgId']['project'][':projectId']['ignore'][':issueId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.org)[':orgId']['project'][':projectId']['ignore'][':issueId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgOrgIdProjectProjectIdIgnoreIssueIdQueryKey>
  >({
    queryKey: getOrgOrgIdProjectProjectIdIgnoreIssueIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.org[':orgId'].project[':projectId'].ignore[':issueId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrgOrgIdProjectProjectIdIgnoreIssueId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.org)[':orgId']['project'][':projectId']['ignore'][':issueId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.org)[':orgId']['project'][':projectId']['ignore'][':issueId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.org)[':orgId']['project'][':projectId']['ignore'][':issueId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgOrgIdProjectProjectIdIgnoreIssueIdQueryKey>
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
      ...getOrgOrgIdProjectProjectIdIgnoreIssueIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrgOrgIdProjectProjectIdIgnoreIssueId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.org)[':orgId']['project'][':projectId']['ignore'][':issueId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.org)[':orgId']['project'][':projectId']['ignore'][':issueId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.org)[':orgId']['project'][':projectId']['ignore'][':issueId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgOrgIdProjectProjectIdIgnoreIssueIdQueryKey>
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
      ...getOrgOrgIdProjectProjectIdIgnoreIssueIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutOrgOrgIdProjectProjectIdIgnoreIssueIdMutationKey() {
  return ['org', '/org/:orgId/project/:projectId/ignore/:issueId', 'PUT'] as const
}

export function getPutOrgOrgIdProjectProjectIdIgnoreIssueIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.org)[':orgId']['project'][':projectId']['ignore'][':issueId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.org)[':orgId']['project'][':projectId']['ignore'][':issueId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrgOrgIdProjectProjectIdIgnoreIssueIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.org)[':orgId']['project'][':projectId']['ignore'][':issueId']['$put']
      >,
    ) {
      return parseResponse(
        client.org[':orgId'].project[':projectId'].ignore[':issueId'].$put(args, options),
      )
    },
  })
}

export function usePutOrgOrgIdProjectProjectIdIgnoreIssueId<
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
                  (typeof client.org)[':orgId']['project'][':projectId']['ignore'][':issueId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.org)[':orgId']['project'][':projectId']['ignore'][':issueId']['$put']
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
  const mutationDefaults = getPutOrgOrgIdProjectProjectIdIgnoreIssueIdMutationOptions<
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

export function getPostOrgOrgIdProjectProjectIdIgnoreIssueIdMutationKey() {
  return ['org', '/org/:orgId/project/:projectId/ignore/:issueId', 'POST'] as const
}

export function getPostOrgOrgIdProjectProjectIdIgnoreIssueIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.org)[':orgId']['project'][':projectId']['ignore'][':issueId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.org)[':orgId']['project'][':projectId']['ignore'][':issueId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrgOrgIdProjectProjectIdIgnoreIssueIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.org)[':orgId']['project'][':projectId']['ignore'][':issueId']['$post']
      >,
    ) {
      return parseResponse(
        client.org[':orgId'].project[':projectId'].ignore[':issueId'].$post(args, options),
      )
    },
  })
}

export function usePostOrgOrgIdProjectProjectIdIgnoreIssueId<
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
                  (typeof client.org)[':orgId']['project'][':projectId']['ignore'][':issueId']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.org)[':orgId']['project'][':projectId']['ignore'][':issueId']['$post']
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
  const mutationDefaults = getPostOrgOrgIdProjectProjectIdIgnoreIssueIdMutationOptions<
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

export function getDeleteOrgOrgIdProjectProjectIdIgnoreIssueIdMutationKey() {
  return ['org', '/org/:orgId/project/:projectId/ignore/:issueId', 'DELETE'] as const
}

export function getDeleteOrgOrgIdProjectProjectIdIgnoreIssueIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.org)[':orgId']['project'][':projectId']['ignore'][':issueId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.org)[':orgId']['project'][':projectId']['ignore'][':issueId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrgOrgIdProjectProjectIdIgnoreIssueIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.org)[':orgId']['project'][':projectId']['ignore'][':issueId']['$delete']
      >,
    ) {
      return parseResponse(
        client.org[':orgId'].project[':projectId'].ignore[':issueId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteOrgOrgIdProjectProjectIdIgnoreIssueId<
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
                  (typeof client.org)[':orgId']['project'][':projectId']['ignore'][':issueId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.org)[':orgId']['project'][':projectId']['ignore'][':issueId']['$delete']
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
  const mutationDefaults = getDeleteOrgOrgIdProjectProjectIdIgnoreIssueIdMutationOptions<
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

export function getOrgOrgIdProjectProjectIdIgnoresQueryKey(
  args: InferRequestType<(typeof client.org)[':orgId']['project'][':projectId']['ignores']['$get']>,
) {
  return ['org', '/org/:orgId/project/:projectId/ignores', args] as const
}

export function getOrgOrgIdProjectProjectIdIgnoresQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.org)[':orgId']['project'][':projectId']['ignores']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.org)[':orgId']['project'][':projectId']['ignores']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.org)[':orgId']['project'][':projectId']['ignores']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgOrgIdProjectProjectIdIgnoresQueryKey>
  >({
    queryKey: getOrgOrgIdProjectProjectIdIgnoresQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.org[':orgId'].project[':projectId'].ignores.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrgOrgIdProjectProjectIdIgnores<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.org)[':orgId']['project'][':projectId']['ignores']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.org)[':orgId']['project'][':projectId']['ignores']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.org)[':orgId']['project'][':projectId']['ignores']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgOrgIdProjectProjectIdIgnoresQueryKey>
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
      ...getOrgOrgIdProjectProjectIdIgnoresQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrgOrgIdProjectProjectIdIgnores<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.org)[':orgId']['project'][':projectId']['ignores']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.org)[':orgId']['project'][':projectId']['ignores']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.org)[':orgId']['project'][':projectId']['ignores']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgOrgIdProjectProjectIdIgnoresQueryKey>
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
      ...getOrgOrgIdProjectProjectIdIgnoresQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostOrgOrgIdProjectProjectIdIssueIssueIdJiraIssueMutationKey() {
  return ['org', '/org/:orgId/project/:projectId/issue/:issueId/jira-issue', 'POST'] as const
}

export function getPostOrgOrgIdProjectProjectIdIssueIssueIdJiraIssueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.org)[':orgId']['project'][':projectId']['issue'][':issueId']['jira-issue']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.org)[':orgId']['project'][':projectId']['issue'][':issueId']['jira-issue']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrgOrgIdProjectProjectIdIssueIssueIdJiraIssueMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.org)[':orgId']['project'][':projectId']['issue'][':issueId']['jira-issue']['$post']
      >,
    ) {
      return parseResponse(
        client.org[':orgId'].project[':projectId'].issue[':issueId']['jira-issue'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostOrgOrgIdProjectProjectIdIssueIssueIdJiraIssue<
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
                  (typeof client.org)[':orgId']['project'][':projectId']['issue'][':issueId']['jira-issue']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.org)[':orgId']['project'][':projectId']['issue'][':issueId']['jira-issue']['$post']
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
  const mutationDefaults = getPostOrgOrgIdProjectProjectIdIssueIssueIdJiraIssueMutationOptions<
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

export function getOrgOrgIdProjectProjectIdIssueIssueIdPathsQueryKey(
  args: InferRequestType<
    (typeof client.org)[':orgId']['project'][':projectId']['issue'][':issueId']['paths']['$get']
  >,
) {
  return ['org', '/org/:orgId/project/:projectId/issue/:issueId/paths', args] as const
}

export function getOrgOrgIdProjectProjectIdIssueIssueIdPathsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.org)[':orgId']['project'][':projectId']['issue'][':issueId']['paths']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.org)[':orgId']['project'][':projectId']['issue'][':issueId']['paths']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.org)[':orgId']['project'][':projectId']['issue'][':issueId']['paths']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgOrgIdProjectProjectIdIssueIssueIdPathsQueryKey>
  >({
    queryKey: getOrgOrgIdProjectProjectIdIssueIssueIdPathsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.org[':orgId'].project[':projectId'].issue[':issueId'].paths.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrgOrgIdProjectProjectIdIssueIssueIdPaths<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.org)[':orgId']['project'][':projectId']['issue'][':issueId']['paths']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.org)[':orgId']['project'][':projectId']['issue'][':issueId']['paths']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.org)[':orgId']['project'][':projectId']['issue'][':issueId']['paths']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgOrgIdProjectProjectIdIssueIssueIdPathsQueryKey>
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
      ...getOrgOrgIdProjectProjectIdIssueIssueIdPathsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrgOrgIdProjectProjectIdIssueIssueIdPaths<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.org)[':orgId']['project'][':projectId']['issue'][':issueId']['paths']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.org)[':orgId']['project'][':projectId']['issue'][':issueId']['paths']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.org)[':orgId']['project'][':projectId']['issue'][':issueId']['paths']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgOrgIdProjectProjectIdIssueIssueIdPathsQueryKey>
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
      ...getOrgOrgIdProjectProjectIdIssueIssueIdPathsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOrgOrgIdProjectProjectIdJiraIssuesQueryKey(
  args: InferRequestType<
    (typeof client.org)[':orgId']['project'][':projectId']['jira-issues']['$get']
  >,
) {
  return ['org', '/org/:orgId/project/:projectId/jira-issues', args] as const
}

export function getOrgOrgIdProjectProjectIdJiraIssuesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.org)[':orgId']['project'][':projectId']['jira-issues']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.org)[':orgId']['project'][':projectId']['jira-issues']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.org)[':orgId']['project'][':projectId']['jira-issues']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgOrgIdProjectProjectIdJiraIssuesQueryKey>
  >({
    queryKey: getOrgOrgIdProjectProjectIdJiraIssuesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.org[':orgId'].project[':projectId']['jira-issues'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrgOrgIdProjectProjectIdJiraIssues<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.org)[':orgId']['project'][':projectId']['jira-issues']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.org)[':orgId']['project'][':projectId']['jira-issues']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.org)[':orgId']['project'][':projectId']['jira-issues']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgOrgIdProjectProjectIdJiraIssuesQueryKey>
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
      ...getOrgOrgIdProjectProjectIdJiraIssuesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrgOrgIdProjectProjectIdJiraIssues<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.org)[':orgId']['project'][':projectId']['jira-issues']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.org)[':orgId']['project'][':projectId']['jira-issues']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.org)[':orgId']['project'][':projectId']['jira-issues']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgOrgIdProjectProjectIdJiraIssuesQueryKey>
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
      ...getOrgOrgIdProjectProjectIdJiraIssuesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutOrgOrgIdProjectProjectIdMoveMutationKey() {
  return ['org', '/org/:orgId/project/:projectId/move', 'PUT'] as const
}

export function getPutOrgOrgIdProjectProjectIdMoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.org)[':orgId']['project'][':projectId']['move']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.org)[':orgId']['project'][':projectId']['move']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrgOrgIdProjectProjectIdMoveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.org)[':orgId']['project'][':projectId']['move']['$put']
      >,
    ) {
      return parseResponse(client.org[':orgId'].project[':projectId'].move.$put(args, options))
    },
  })
}

export function usePutOrgOrgIdProjectProjectIdMove<
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
                ReturnType<(typeof client.org)[':orgId']['project'][':projectId']['move']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.org)[':orgId']['project'][':projectId']['move']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutOrgOrgIdProjectProjectIdMoveMutationOptions<
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

export function getOrgOrgIdProjectProjectIdSettingsQueryKey(
  args: InferRequestType<
    (typeof client.org)[':orgId']['project'][':projectId']['settings']['$get']
  >,
) {
  return ['org', '/org/:orgId/project/:projectId/settings', args] as const
}

export function getOrgOrgIdProjectProjectIdSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.org)[':orgId']['project'][':projectId']['settings']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.org)[':orgId']['project'][':projectId']['settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.org)[':orgId']['project'][':projectId']['settings']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgOrgIdProjectProjectIdSettingsQueryKey>
  >({
    queryKey: getOrgOrgIdProjectProjectIdSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.org[':orgId'].project[':projectId'].settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrgOrgIdProjectProjectIdSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.org)[':orgId']['project'][':projectId']['settings']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.org)[':orgId']['project'][':projectId']['settings']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.org)[':orgId']['project'][':projectId']['settings']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgOrgIdProjectProjectIdSettingsQueryKey>
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
      ...getOrgOrgIdProjectProjectIdSettingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrgOrgIdProjectProjectIdSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.org)[':orgId']['project'][':projectId']['settings']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.org)[':orgId']['project'][':projectId']['settings']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.org)[':orgId']['project'][':projectId']['settings']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgOrgIdProjectProjectIdSettingsQueryKey>
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
      ...getOrgOrgIdProjectProjectIdSettingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutOrgOrgIdProjectProjectIdSettingsMutationKey() {
  return ['org', '/org/:orgId/project/:projectId/settings', 'PUT'] as const
}

export function getPutOrgOrgIdProjectProjectIdSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.org)[':orgId']['project'][':projectId']['settings']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.org)[':orgId']['project'][':projectId']['settings']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrgOrgIdProjectProjectIdSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.org)[':orgId']['project'][':projectId']['settings']['$put']
      >,
    ) {
      return parseResponse(client.org[':orgId'].project[':projectId'].settings.$put(args, options))
    },
  })
}

export function usePutOrgOrgIdProjectProjectIdSettings<
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
                  (typeof client.org)[':orgId']['project'][':projectId']['settings']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.org)[':orgId']['project'][':projectId']['settings']['$put']
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
  const mutationDefaults = getPutOrgOrgIdProjectProjectIdSettingsMutationOptions<
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

export function getDeleteOrgOrgIdProjectProjectIdSettingsMutationKey() {
  return ['org', '/org/:orgId/project/:projectId/settings', 'DELETE'] as const
}

export function getDeleteOrgOrgIdProjectProjectIdSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.org)[':orgId']['project'][':projectId']['settings']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.org)[':orgId']['project'][':projectId']['settings']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrgOrgIdProjectProjectIdSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.org)[':orgId']['project'][':projectId']['settings']['$delete']
      >,
    ) {
      return parseResponse(
        client.org[':orgId'].project[':projectId'].settings.$delete(args, options),
      )
    },
  })
}

export function useDeleteOrgOrgIdProjectProjectIdSettings<
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
                    (typeof client.org)[':orgId']['project'][':projectId']['settings']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.org)[':orgId']['project'][':projectId']['settings']['$delete']
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
  const mutationDefaults = getDeleteOrgOrgIdProjectProjectIdSettingsMutationOptions<
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

export function getPostOrgOrgIdProjectProjectIdTagsMutationKey() {
  return ['org', '/org/:orgId/project/:projectId/tags', 'POST'] as const
}

export function getPostOrgOrgIdProjectProjectIdTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.org)[':orgId']['project'][':projectId']['tags']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.org)[':orgId']['project'][':projectId']['tags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrgOrgIdProjectProjectIdTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.org)[':orgId']['project'][':projectId']['tags']['$post']
      >,
    ) {
      return parseResponse(client.org[':orgId'].project[':projectId'].tags.$post(args, options))
    },
  })
}

export function usePostOrgOrgIdProjectProjectIdTags<
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
                ReturnType<(typeof client.org)[':orgId']['project'][':projectId']['tags']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.org)[':orgId']['project'][':projectId']['tags']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrgOrgIdProjectProjectIdTagsMutationOptions<
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

export function getPostOrgOrgIdProjectProjectIdTagsRemoveMutationKey() {
  return ['org', '/org/:orgId/project/:projectId/tags/remove', 'POST'] as const
}

export function getPostOrgOrgIdProjectProjectIdTagsRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.org)[':orgId']['project'][':projectId']['tags']['remove']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.org)[':orgId']['project'][':projectId']['tags']['remove']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrgOrgIdProjectProjectIdTagsRemoveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.org)[':orgId']['project'][':projectId']['tags']['remove']['$post']
      >,
    ) {
      return parseResponse(
        client.org[':orgId'].project[':projectId'].tags.remove.$post(args, options),
      )
    },
  })
}

export function usePostOrgOrgIdProjectProjectIdTagsRemove<
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
                  (typeof client.org)[':orgId']['project'][':projectId']['tags']['remove']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.org)[':orgId']['project'][':projectId']['tags']['remove']['$post']
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
  const mutationDefaults = getPostOrgOrgIdProjectProjectIdTagsRemoveMutationOptions<
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

export function getPostOrgOrgIdProjectsMutationKey() {
  return ['org', '/org/:orgId/projects', 'POST'] as const
}

export function getPostOrgOrgIdProjectsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org)[':orgId']['projects']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.org)[':orgId']['projects']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrgOrgIdProjectsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.org)[':orgId']['projects']['$post']>) {
      return parseResponse(client.org[':orgId'].projects.$post(args, options))
    },
  })
}

export function usePostOrgOrgIdProjects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.org)[':orgId']['projects']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.org)[':orgId']['projects']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrgOrgIdProjectsMutationOptions<TError, TOnMutateResult>(
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

export function getOrgOrgIdProvisionQueryKey(
  args: InferRequestType<(typeof client.org)[':orgId']['provision']['$get']>,
) {
  return ['org', '/org/:orgId/provision', args] as const
}

export function getOrgOrgIdProvisionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.org)[':orgId']['provision']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.org)[':orgId']['provision']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org)[':orgId']['provision']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgOrgIdProvisionQueryKey>
  >({
    queryKey: getOrgOrgIdProvisionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.org[':orgId'].provision.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrgOrgIdProvision<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.org)[':orgId']['provision']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.org)[':orgId']['provision']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.org)[':orgId']['provision']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgOrgIdProvisionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOrgOrgIdProvisionQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOrgOrgIdProvision<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.org)[':orgId']['provision']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.org)[':orgId']['provision']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.org)[':orgId']['provision']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgOrgIdProvisionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOrgOrgIdProvisionQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostOrgOrgIdProvisionMutationKey() {
  return ['org', '/org/:orgId/provision', 'POST'] as const
}

export function getPostOrgOrgIdProvisionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org)[':orgId']['provision']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.org)[':orgId']['provision']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrgOrgIdProvisionMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.org)[':orgId']['provision']['$post']>) {
      return parseResponse(client.org[':orgId'].provision.$post(args, options))
    },
  })
}

export function usePostOrgOrgIdProvision<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.org)[':orgId']['provision']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.org)[':orgId']['provision']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrgOrgIdProvisionMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteOrgOrgIdProvisionMutationKey() {
  return ['org', '/org/:orgId/provision', 'DELETE'] as const
}

export function getDeleteOrgOrgIdProvisionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org)[':orgId']['provision']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.org)[':orgId']['provision']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrgOrgIdProvisionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.org)[':orgId']['provision']['$delete']>,
    ) {
      return parseResponse(client.org[':orgId'].provision.$delete(args, options))
    },
  })
}

export function useDeleteOrgOrgIdProvision<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.org)[':orgId']['provision']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.org)[':orgId']['provision']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteOrgOrgIdProvisionMutationOptions<TError, TOnMutateResult>(
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

export function getOrgOrgIdSettingsQueryKey(
  args: InferRequestType<(typeof client.org)[':orgId']['settings']['$get']>,
) {
  return ['org', '/org/:orgId/settings', args] as const
}

export function getOrgOrgIdSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.org)[':orgId']['settings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.org)[':orgId']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.org)[':orgId']['settings']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgOrgIdSettingsQueryKey>
  >({
    queryKey: getOrgOrgIdSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.org[':orgId'].settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrgOrgIdSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.org)[':orgId']['settings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.org)[':orgId']['settings']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.org)[':orgId']['settings']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgOrgIdSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOrgOrgIdSettingsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOrgOrgIdSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.org)[':orgId']['settings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.org)[':orgId']['settings']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.org)[':orgId']['settings']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgOrgIdSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOrgOrgIdSettingsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutOrgOrgIdSettingsMutationKey() {
  return ['org', '/org/:orgId/settings', 'PUT'] as const
}

export function getPutOrgOrgIdSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.org)[':orgId']['settings']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.org)[':orgId']['settings']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrgOrgIdSettingsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.org)[':orgId']['settings']['$put']>) {
      return parseResponse(client.org[':orgId'].settings.$put(args, options))
    },
  })
}

export function usePutOrgOrgIdSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.org)[':orgId']['settings']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.org)[':orgId']['settings']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutOrgOrgIdSettingsMutationOptions<TError, TOnMutateResult>(
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

export function getOrgOrgIdWebhooksQueryKey(
  args: InferRequestType<(typeof client.org)[':orgId']['webhooks']['$get']>,
) {
  return ['org', '/org/:orgId/webhooks', args] as const
}

export function getOrgOrgIdWebhooksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.org)[':orgId']['webhooks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.org)[':orgId']['webhooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.org)[':orgId']['webhooks']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgOrgIdWebhooksQueryKey>
  >({
    queryKey: getOrgOrgIdWebhooksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.org[':orgId'].webhooks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrgOrgIdWebhooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.org)[':orgId']['webhooks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.org)[':orgId']['webhooks']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.org)[':orgId']['webhooks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgOrgIdWebhooksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOrgOrgIdWebhooksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOrgOrgIdWebhooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.org)[':orgId']['webhooks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.org)[':orgId']['webhooks']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.org)[':orgId']['webhooks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgOrgIdWebhooksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOrgOrgIdWebhooksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostOrgOrgIdWebhooksMutationKey() {
  return ['org', '/org/:orgId/webhooks', 'POST'] as const
}

export function getPostOrgOrgIdWebhooksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org)[':orgId']['webhooks']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.org)[':orgId']['webhooks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrgOrgIdWebhooksMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.org)[':orgId']['webhooks']['$post']>) {
      return parseResponse(client.org[':orgId'].webhooks.$post(args, options))
    },
  })
}

export function usePostOrgOrgIdWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.org)[':orgId']['webhooks']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.org)[':orgId']['webhooks']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrgOrgIdWebhooksMutationOptions<TError, TOnMutateResult>(
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

export function getOrgOrgIdWebhooksWebhookIdQueryKey(
  args: InferRequestType<(typeof client.org)[':orgId']['webhooks'][':webhookId']['$get']>,
) {
  return ['org', '/org/:orgId/webhooks/:webhookId', args] as const
}

export function getOrgOrgIdWebhooksWebhookIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.org)[':orgId']['webhooks'][':webhookId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.org)[':orgId']['webhooks'][':webhookId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org)[':orgId']['webhooks'][':webhookId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgOrgIdWebhooksWebhookIdQueryKey>
  >({
    queryKey: getOrgOrgIdWebhooksWebhookIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.org[':orgId'].webhooks[':webhookId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrgOrgIdWebhooksWebhookId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.org)[':orgId']['webhooks'][':webhookId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.org)[':orgId']['webhooks'][':webhookId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.org)[':orgId']['webhooks'][':webhookId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgOrgIdWebhooksWebhookIdQueryKey>
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
      ...getOrgOrgIdWebhooksWebhookIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrgOrgIdWebhooksWebhookId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.org)[':orgId']['webhooks'][':webhookId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.org)[':orgId']['webhooks'][':webhookId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.org)[':orgId']['webhooks'][':webhookId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgOrgIdWebhooksWebhookIdQueryKey>
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
      ...getOrgOrgIdWebhooksWebhookIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteOrgOrgIdWebhooksWebhookIdMutationKey() {
  return ['org', '/org/:orgId/webhooks/:webhookId', 'DELETE'] as const
}

export function getDeleteOrgOrgIdWebhooksWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org)[':orgId']['webhooks'][':webhookId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.org)[':orgId']['webhooks'][':webhookId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrgOrgIdWebhooksWebhookIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.org)[':orgId']['webhooks'][':webhookId']['$delete']>,
    ) {
      return parseResponse(client.org[':orgId'].webhooks[':webhookId'].$delete(args, options))
    },
  })
}

export function useDeleteOrgOrgIdWebhooksWebhookId<
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
                ReturnType<(typeof client.org)[':orgId']['webhooks'][':webhookId']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.org)[':orgId']['webhooks'][':webhookId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteOrgOrgIdWebhooksWebhookIdMutationOptions<
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

export function getPostOrgOrgIdWebhooksWebhookIdPingMutationKey() {
  return ['org', '/org/:orgId/webhooks/:webhookId/ping', 'POST'] as const
}

export function getPostOrgOrgIdWebhooksWebhookIdPingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.org)[':orgId']['webhooks'][':webhookId']['ping']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.org)[':orgId']['webhooks'][':webhookId']['ping']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrgOrgIdWebhooksWebhookIdPingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.org)[':orgId']['webhooks'][':webhookId']['ping']['$post']
      >,
    ) {
      return parseResponse(client.org[':orgId'].webhooks[':webhookId'].ping.$post(args, options))
    },
  })
}

export function usePostOrgOrgIdWebhooksWebhookIdPing<
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
                ReturnType<(typeof client.org)[':orgId']['webhooks'][':webhookId']['ping']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.org)[':orgId']['webhooks'][':webhookId']['ping']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrgOrgIdWebhooksWebhookIdPingMutationOptions<
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

export function getOrgsQueryKey() {
  return ['orgs', '/orgs'] as const
}

export function getOrgsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orgs.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orgs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOrgsQueryKey>
  >({
    queryKey: getOrgsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.orgs.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useOrgs<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orgs.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orgs.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getOrgsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOrgsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOrgs<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orgs.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orgs.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getOrgsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOrgsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostReportingCountsIssuesMutationKey() {
  return ['reporting', '/reporting/counts/issues', 'POST'] as const
}

export function getPostReportingCountsIssuesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.reporting.counts.issues.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.reporting.counts.issues.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostReportingCountsIssuesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.reporting.counts.issues.$post>) {
      return parseResponse(client.reporting.counts.issues.$post(args, options))
    },
  })
}

export function usePostReportingCountsIssues<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.reporting.counts.issues.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.reporting.counts.issues.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostReportingCountsIssuesMutationOptions<TError, TOnMutateResult>(
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

export function getPostReportingCountsIssuesLatestMutationKey() {
  return ['reporting', '/reporting/counts/issues/latest', 'POST'] as const
}

export function getPostReportingCountsIssuesLatestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.reporting.counts.issues.latest.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.reporting.counts.issues.latest.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostReportingCountsIssuesLatestMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.reporting.counts.issues.latest.$post>) {
      return parseResponse(client.reporting.counts.issues.latest.$post(args, options))
    },
  })
}

export function usePostReportingCountsIssuesLatest<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.reporting.counts.issues.latest.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.reporting.counts.issues.latest.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostReportingCountsIssuesLatestMutationOptions<
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

export function getPostReportingCountsProjectsMutationKey() {
  return ['reporting', '/reporting/counts/projects', 'POST'] as const
}

export function getPostReportingCountsProjectsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.reporting.counts.projects.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.reporting.counts.projects.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostReportingCountsProjectsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.reporting.counts.projects.$post>) {
      return parseResponse(client.reporting.counts.projects.$post(args, options))
    },
  })
}

export function usePostReportingCountsProjects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.reporting.counts.projects.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.reporting.counts.projects.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostReportingCountsProjectsMutationOptions<TError, TOnMutateResult>(
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

export function getPostReportingCountsProjectsLatestMutationKey() {
  return ['reporting', '/reporting/counts/projects/latest', 'POST'] as const
}

export function getPostReportingCountsProjectsLatestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.reporting.counts.projects.latest.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.reporting.counts.projects.latest.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostReportingCountsProjectsLatestMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.reporting.counts.projects.latest.$post>) {
      return parseResponse(client.reporting.counts.projects.latest.$post(args, options))
    },
  })
}

export function usePostReportingCountsProjectsLatest<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.reporting.counts.projects.latest.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.reporting.counts.projects.latest.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostReportingCountsProjectsLatestMutationOptions<
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

export function getPostReportingCountsTestsMutationKey() {
  return ['reporting', '/reporting/counts/tests', 'POST'] as const
}

export function getPostReportingCountsTestsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.reporting.counts.tests.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.reporting.counts.tests.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostReportingCountsTestsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.reporting.counts.tests.$post>) {
      return parseResponse(client.reporting.counts.tests.$post(args, options))
    },
  })
}

export function usePostReportingCountsTests<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.reporting.counts.tests.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.reporting.counts.tests.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostReportingCountsTestsMutationOptions<TError, TOnMutateResult>(
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

export function getPostReportingIssuesIndexMutationKey() {
  return ['reporting', '/reporting/issues/', 'POST'] as const
}

export function getPostReportingIssuesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.reporting.issues.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.reporting.issues.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostReportingIssuesIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.reporting.issues.index.$post>) {
      return parseResponse(client.reporting.issues.index.$post(args, options))
    },
  })
}

export function usePostReportingIssuesIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.reporting.issues.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.reporting.issues.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostReportingIssuesIndexMutationOptions<TError, TOnMutateResult>(
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

export function getPostReportingIssuesLatestMutationKey() {
  return ['reporting', '/reporting/issues/latest', 'POST'] as const
}

export function getPostReportingIssuesLatestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.reporting.issues.latest.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.reporting.issues.latest.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostReportingIssuesLatestMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.reporting.issues.latest.$post>) {
      return parseResponse(client.reporting.issues.latest.$post(args, options))
    },
  })
}

export function usePostReportingIssuesLatest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.reporting.issues.latest.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.reporting.issues.latest.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostReportingIssuesLatestMutationOptions<TError, TOnMutateResult>(
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

export function getPostTestComposerMutationKey() {
  return ['test', '/test/composer', 'POST'] as const
}

export function getPostTestComposerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test.composer.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.test.composer.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTestComposerMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.test.composer.$post>) {
      return parseResponse(client.test.composer.$post(args, options))
    },
  })
}

export function usePostTestComposer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test.composer.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.test.composer.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTestComposerMutationOptions<TError, TOnMutateResult>(
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

export function getPostTestDepGraphMutationKey() {
  return ['test', '/test/dep-graph', 'POST'] as const
}

export function getPostTestDepGraphMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.test)['dep-graph']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.test)['dep-graph']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTestDepGraphMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.test)['dep-graph']['$post']>) {
      return parseResponse(client.test['dep-graph'].$post(args, options))
    },
  })
}

export function usePostTestDepGraph<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.test)['dep-graph']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.test)['dep-graph']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTestDepGraphMutationOptions<TError, TOnMutateResult>(
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

export function getPostTestGolangdepMutationKey() {
  return ['test', '/test/golangdep', 'POST'] as const
}

export function getPostTestGolangdepMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test.golangdep.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.test.golangdep.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTestGolangdepMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.test.golangdep.$post>) {
      return parseResponse(client.test.golangdep.$post(args, options))
    },
  })
}

export function usePostTestGolangdep<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test.golangdep.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.test.golangdep.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTestGolangdepMutationOptions<TError, TOnMutateResult>(
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

export function getPostTestGovendorMutationKey() {
  return ['test', '/test/govendor', 'POST'] as const
}

export function getPostTestGovendorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test.govendor.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.test.govendor.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTestGovendorMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.test.govendor.$post>) {
      return parseResponse(client.test.govendor.$post(args, options))
    },
  })
}

export function usePostTestGovendor<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test.govendor.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.test.govendor.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTestGovendorMutationOptions<TError, TOnMutateResult>(
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

export function getPostTestGradleMutationKey() {
  return ['test', '/test/gradle', 'POST'] as const
}

export function getPostTestGradleMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test.gradle.$post>>>>>,
    TError,
    InferRequestType<typeof client.test.gradle.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTestGradleMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.test.gradle.$post>) {
      return parseResponse(client.test.gradle.$post(args, options))
    },
  })
}

export function usePostTestGradle<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test.gradle.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.test.gradle.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTestGradleMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTestGradleGroupNameVersionQueryKey(
  args: InferRequestType<(typeof client.test.gradle)[':group'][':name'][':version']['$get']>,
) {
  return ['test', '/test/gradle/:group/:name/:version', args] as const
}

export function getTestGradleGroupNameVersionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.test.gradle)[':group'][':name'][':version']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.test.gradle)[':group'][':name'][':version']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.test.gradle)[':group'][':name'][':version']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTestGradleGroupNameVersionQueryKey>
  >({
    queryKey: getTestGradleGroupNameVersionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.test.gradle[':group'][':name'][':version'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTestGradleGroupNameVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.test.gradle)[':group'][':name'][':version']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.test.gradle)[':group'][':name'][':version']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.test.gradle)[':group'][':name'][':version']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTestGradleGroupNameVersionQueryKey>
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
      ...getTestGradleGroupNameVersionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTestGradleGroupNameVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.test.gradle)[':group'][':name'][':version']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.test.gradle)[':group'][':name'][':version']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.test.gradle)[':group'][':name'][':version']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTestGradleGroupNameVersionQueryKey>
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
      ...getTestGradleGroupNameVersionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostTestMavenMutationKey() {
  return ['test', '/test/maven', 'POST'] as const
}

export function getPostTestMavenMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test.maven.$post>>>>>,
    TError,
    InferRequestType<typeof client.test.maven.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTestMavenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.test.maven.$post>) {
      return parseResponse(client.test.maven.$post(args, options))
    },
  })
}

export function usePostTestMaven<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test.maven.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.test.maven.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTestMavenMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTestMavenGroupIdArtifactIdVersionQueryKey(
  args: InferRequestType<(typeof client.test.maven)[':groupId'][':artifactId'][':version']['$get']>,
) {
  return ['test', '/test/maven/:groupId/:artifactId/:version', args] as const
}

export function getTestMavenGroupIdArtifactIdVersionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.test.maven)[':groupId'][':artifactId'][':version']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.test.maven)[':groupId'][':artifactId'][':version']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.test.maven)[':groupId'][':artifactId'][':version']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTestMavenGroupIdArtifactIdVersionQueryKey>
  >({
    queryKey: getTestMavenGroupIdArtifactIdVersionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.test.maven[':groupId'][':artifactId'][':version'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTestMavenGroupIdArtifactIdVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.test.maven)[':groupId'][':artifactId'][':version']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.test.maven)[':groupId'][':artifactId'][':version']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.test.maven)[':groupId'][':artifactId'][':version']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTestMavenGroupIdArtifactIdVersionQueryKey>
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
      ...getTestMavenGroupIdArtifactIdVersionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTestMavenGroupIdArtifactIdVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.test.maven)[':groupId'][':artifactId'][':version']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.test.maven)[':groupId'][':artifactId'][':version']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.test.maven)[':groupId'][':artifactId'][':version']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTestMavenGroupIdArtifactIdVersionQueryKey>
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
      ...getTestMavenGroupIdArtifactIdVersionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostTestNpmMutationKey() {
  return ['test', '/test/npm', 'POST'] as const
}

export function getPostTestNpmMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test.npm.$post>>>>>,
    TError,
    InferRequestType<typeof client.test.npm.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTestNpmMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.test.npm.$post>) {
      return parseResponse(client.test.npm.$post(args, options))
    },
  })
}

export function usePostTestNpm<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test.npm.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.test.npm.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTestNpmMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTestNpmPackageNameVersionQueryKey(
  args: InferRequestType<(typeof client.test.npm)[':packageName'][':version']['$get']>,
) {
  return ['test', '/test/npm/:packageName/:version', args] as const
}

export function getTestNpmPackageNameVersionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.test.npm)[':packageName'][':version']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.test.npm)[':packageName'][':version']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.test.npm)[':packageName'][':version']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTestNpmPackageNameVersionQueryKey>
  >({
    queryKey: getTestNpmPackageNameVersionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.test.npm[':packageName'][':version'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTestNpmPackageNameVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.test.npm)[':packageName'][':version']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.test.npm)[':packageName'][':version']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.test.npm)[':packageName'][':version']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTestNpmPackageNameVersionQueryKey>
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
      ...getTestNpmPackageNameVersionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTestNpmPackageNameVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.test.npm)[':packageName'][':version']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.test.npm)[':packageName'][':version']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.test.npm)[':packageName'][':version']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTestNpmPackageNameVersionQueryKey>
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
      ...getTestNpmPackageNameVersionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostTestPipMutationKey() {
  return ['test', '/test/pip', 'POST'] as const
}

export function getPostTestPipMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test.pip.$post>>>>>,
    TError,
    InferRequestType<typeof client.test.pip.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTestPipMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.test.pip.$post>) {
      return parseResponse(client.test.pip.$post(args, options))
    },
  })
}

export function usePostTestPip<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test.pip.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.test.pip.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTestPipMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTestPipPackageNameVersionQueryKey(
  args: InferRequestType<(typeof client.test.pip)[':packageName'][':version']['$get']>,
) {
  return ['test', '/test/pip/:packageName/:version', args] as const
}

export function getTestPipPackageNameVersionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.test.pip)[':packageName'][':version']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.test.pip)[':packageName'][':version']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.test.pip)[':packageName'][':version']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTestPipPackageNameVersionQueryKey>
  >({
    queryKey: getTestPipPackageNameVersionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.test.pip[':packageName'][':version'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTestPipPackageNameVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.test.pip)[':packageName'][':version']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.test.pip)[':packageName'][':version']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.test.pip)[':packageName'][':version']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTestPipPackageNameVersionQueryKey>
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
      ...getTestPipPackageNameVersionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTestPipPackageNameVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.test.pip)[':packageName'][':version']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.test.pip)[':packageName'][':version']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.test.pip)[':packageName'][':version']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTestPipPackageNameVersionQueryKey>
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
      ...getTestPipPackageNameVersionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostTestRubygemsMutationKey() {
  return ['test', '/test/rubygems', 'POST'] as const
}

export function getPostTestRubygemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test.rubygems.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.test.rubygems.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTestRubygemsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.test.rubygems.$post>) {
      return parseResponse(client.test.rubygems.$post(args, options))
    },
  })
}

export function usePostTestRubygems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test.rubygems.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.test.rubygems.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTestRubygemsMutationOptions<TError, TOnMutateResult>(
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

export function getTestRubygemsGemNameVersionQueryKey(
  args: InferRequestType<(typeof client.test.rubygems)[':gemName'][':version']['$get']>,
) {
  return ['test', '/test/rubygems/:gemName/:version', args] as const
}

export function getTestRubygemsGemNameVersionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.test.rubygems)[':gemName'][':version']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.test.rubygems)[':gemName'][':version']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.test.rubygems)[':gemName'][':version']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTestRubygemsGemNameVersionQueryKey>
  >({
    queryKey: getTestRubygemsGemNameVersionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.test.rubygems[':gemName'][':version'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTestRubygemsGemNameVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.test.rubygems)[':gemName'][':version']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.test.rubygems)[':gemName'][':version']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.test.rubygems)[':gemName'][':version']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTestRubygemsGemNameVersionQueryKey>
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
      ...getTestRubygemsGemNameVersionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTestRubygemsGemNameVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.test.rubygems)[':gemName'][':version']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.test.rubygems)[':gemName'][':version']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.test.rubygems)[':gemName'][':version']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTestRubygemsGemNameVersionQueryKey>
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
      ...getTestRubygemsGemNameVersionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostTestSbtMutationKey() {
  return ['test', '/test/sbt', 'POST'] as const
}

export function getPostTestSbtMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test.sbt.$post>>>>>,
    TError,
    InferRequestType<typeof client.test.sbt.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTestSbtMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.test.sbt.$post>) {
      return parseResponse(client.test.sbt.$post(args, options))
    },
  })
}

export function usePostTestSbt<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test.sbt.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.test.sbt.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTestSbtMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTestSbtGroupIdArtifactIdVersionQueryKey(
  args: InferRequestType<(typeof client.test.sbt)[':groupId'][':artifactId'][':version']['$get']>,
) {
  return ['test', '/test/sbt/:groupId/:artifactId/:version', args] as const
}

export function getTestSbtGroupIdArtifactIdVersionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.test.sbt)[':groupId'][':artifactId'][':version']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.test.sbt)[':groupId'][':artifactId'][':version']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.test.sbt)[':groupId'][':artifactId'][':version']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTestSbtGroupIdArtifactIdVersionQueryKey>
  >({
    queryKey: getTestSbtGroupIdArtifactIdVersionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.test.sbt[':groupId'][':artifactId'][':version'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTestSbtGroupIdArtifactIdVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.test.sbt)[':groupId'][':artifactId'][':version']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.test.sbt)[':groupId'][':artifactId'][':version']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.test.sbt)[':groupId'][':artifactId'][':version']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTestSbtGroupIdArtifactIdVersionQueryKey>
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
      ...getTestSbtGroupIdArtifactIdVersionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTestSbtGroupIdArtifactIdVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.test.sbt)[':groupId'][':artifactId'][':version']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.test.sbt)[':groupId'][':artifactId'][':version']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.test.sbt)[':groupId'][':artifactId'][':version']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTestSbtGroupIdArtifactIdVersionQueryKey>
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
      ...getTestSbtGroupIdArtifactIdVersionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostTestYarnMutationKey() {
  return ['test', '/test/yarn', 'POST'] as const
}

export function getPostTestYarnMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test.yarn.$post>>>>>,
    TError,
    InferRequestType<typeof client.test.yarn.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTestYarnMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.test.yarn.$post>) {
      return parseResponse(client.test.yarn.$post(args, options))
    },
  })
}

export function usePostTestYarn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test.yarn.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.test.yarn.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTestYarnMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUserMeQueryKey() {
  return ['user', '/user/me'] as const
}

export function getUserMeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.me.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUserMeQueryKey>
  >({
    queryKey: getUserMeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.user.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useUserMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.me.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.me.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUserMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUserMeQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUserMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.me.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.me.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUserMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUserMeQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getUserMeNotificationSettingsOrgOrgIdQueryKey(
  args: InferRequestType<(typeof client.user.me)['notification-settings']['org'][':orgId']['$get']>,
) {
  return ['user', '/user/me/notification-settings/org/:orgId', args] as const
}

export function getUserMeNotificationSettingsOrgOrgIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.user.me)['notification-settings']['org'][':orgId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user.me)['notification-settings']['org'][':orgId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.user.me)['notification-settings']['org'][':orgId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserMeNotificationSettingsOrgOrgIdQueryKey>
  >({
    queryKey: getUserMeNotificationSettingsOrgOrgIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user.me['notification-settings'].org[':orgId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUserMeNotificationSettingsOrgOrgId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.user.me)['notification-settings']['org'][':orgId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user.me)['notification-settings']['org'][':orgId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.user.me)['notification-settings']['org'][':orgId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserMeNotificationSettingsOrgOrgIdQueryKey>
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
      ...getUserMeNotificationSettingsOrgOrgIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUserMeNotificationSettingsOrgOrgId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.user.me)['notification-settings']['org'][':orgId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user.me)['notification-settings']['org'][':orgId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.user.me)['notification-settings']['org'][':orgId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserMeNotificationSettingsOrgOrgIdQueryKey>
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
      ...getUserMeNotificationSettingsOrgOrgIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutUserMeNotificationSettingsOrgOrgIdMutationKey() {
  return ['user', '/user/me/notification-settings/org/:orgId', 'PUT'] as const
}

export function getPutUserMeNotificationSettingsOrgOrgIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.user.me)['notification-settings']['org'][':orgId']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.user.me)['notification-settings']['org'][':orgId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUserMeNotificationSettingsOrgOrgIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.user.me)['notification-settings']['org'][':orgId']['$put']
      >,
    ) {
      return parseResponse(
        client.user.me['notification-settings'].org[':orgId'].$put(args, options),
      )
    },
  })
}

export function usePutUserMeNotificationSettingsOrgOrgId<
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
                  (typeof client.user.me)['notification-settings']['org'][':orgId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.user.me)['notification-settings']['org'][':orgId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutUserMeNotificationSettingsOrgOrgIdMutationOptions<
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

export function getUserMeNotificationSettingsOrgOrgIdProjectProjectIdQueryKey(
  args: InferRequestType<
    (typeof client.user.me)['notification-settings']['org'][':orgId']['project'][':projectId']['$get']
  >,
) {
  return ['user', '/user/me/notification-settings/org/:orgId/project/:projectId', args] as const
}

export function getUserMeNotificationSettingsOrgOrgIdProjectProjectIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.user.me)['notification-settings']['org'][':orgId']['project'][':projectId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.user.me)['notification-settings']['org'][':orgId']['project'][':projectId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.user.me)['notification-settings']['org'][':orgId']['project'][':projectId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserMeNotificationSettingsOrgOrgIdProjectProjectIdQueryKey>
  >({
    queryKey: getUserMeNotificationSettingsOrgOrgIdProjectProjectIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user.me['notification-settings'].org[':orgId'].project[':projectId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUserMeNotificationSettingsOrgOrgIdProjectProjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.user.me)['notification-settings']['org'][':orgId']['project'][':projectId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.user.me)['notification-settings']['org'][':orgId']['project'][':projectId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.user.me)['notification-settings']['org'][':orgId']['project'][':projectId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserMeNotificationSettingsOrgOrgIdProjectProjectIdQueryKey>
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
      ...getUserMeNotificationSettingsOrgOrgIdProjectProjectIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUserMeNotificationSettingsOrgOrgIdProjectProjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.user.me)['notification-settings']['org'][':orgId']['project'][':projectId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.user.me)['notification-settings']['org'][':orgId']['project'][':projectId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.user.me)['notification-settings']['org'][':orgId']['project'][':projectId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserMeNotificationSettingsOrgOrgIdProjectProjectIdQueryKey>
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
      ...getUserMeNotificationSettingsOrgOrgIdProjectProjectIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutUserMeNotificationSettingsOrgOrgIdProjectProjectIdMutationKey() {
  return ['user', '/user/me/notification-settings/org/:orgId/project/:projectId', 'PUT'] as const
}

export function getPutUserMeNotificationSettingsOrgOrgIdProjectProjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.user.me)['notification-settings']['org'][':orgId']['project'][':projectId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.user.me)['notification-settings']['org'][':orgId']['project'][':projectId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutUserMeNotificationSettingsOrgOrgIdProjectProjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.user.me)['notification-settings']['org'][':orgId']['project'][':projectId']['$put']
      >,
    ) {
      return parseResponse(
        client.user.me['notification-settings'].org[':orgId'].project[':projectId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutUserMeNotificationSettingsOrgOrgIdProjectProjectId<
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
                  (typeof client.user.me)['notification-settings']['org'][':orgId']['project'][':projectId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.user.me)['notification-settings']['org'][':orgId']['project'][':projectId']['$put']
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
  const mutationDefaults = getPutUserMeNotificationSettingsOrgOrgIdProjectProjectIdMutationOptions<
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

export function getUserUserIdQueryKey(
  args: InferRequestType<(typeof client.user)[':userId']['$get']>,
) {
  return ['user', '/user/:userId', args] as const
}

export function getUserUserIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':userId']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.user)[':userId']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':userId']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUserUserIdQueryKey>
  >({
    queryKey: getUserUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user[':userId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useUserUserId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':userId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user)[':userId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':userId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserUserIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUserUserIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUserUserId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':userId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user)[':userId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':userId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserUserIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUserUserIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
