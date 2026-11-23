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

export function getAdminKey() {
  return ['admin'] as const
}

export function getCKey() {
  return ['c'] as const
}

export function getCategoriesKey() {
  return ['categories'] as const
}

export function getCategoriesJsonKey() {
  return ['categories.json'] as const
}

export function getDirectoryItemsJsonKey() {
  return ['directory_items.json'] as const
}

export function getGroupsKey() {
  return ['groups'] as const
}

export function getGroupsJsonKey() {
  return ['groups.json'] as const
}

export function getInvitesJsonKey() {
  return ['invites.json'] as const
}

export function getLatestJsonKey() {
  return ['latest.json'] as const
}

export function getNotificationsKey() {
  return ['notifications'] as const
}

export function getNotificationsJsonKey() {
  return ['notifications.json'] as const
}

export function getPostActionsJsonKey() {
  return ['post_actions.json'] as const
}

export function getPostsKey() {
  return ['posts'] as const
}

export function getPostsJsonKey() {
  return ['posts.json'] as const
}

export function getSearchJsonKey() {
  return ['search.json'] as const
}

export function getSessionKey() {
  return ['session'] as const
}

export function getSiteJsonKey() {
  return ['site.json'] as const
}

export function getTKey() {
  return ['t'] as const
}

export function getTagKey() {
  return ['tag'] as const
}

export function getTagGroupsKey() {
  return ['tag_groups'] as const
}

export function getTagGroupsJsonKey() {
  return ['tag_groups.json'] as const
}

export function getTagsJsonKey() {
  return ['tags.json'] as const
}

export function getTopJsonKey() {
  return ['top.json'] as const
}

export function getTopicsKey() {
  return ['topics'] as const
}

export function getUKey() {
  return ['u'] as const
}

export function getUploadsKey() {
  return ['uploads'] as const
}

export function getUploadsJsonKey() {
  return ['uploads.json'] as const
}

export function getUserBadgesKey() {
  return ['user-badges'] as const
}

export function getUserActionsJsonKey() {
  return ['user_actions.json'] as const
}

export function getUserAvatarKey() {
  return ['user_avatar'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getUsersJsonKey() {
  return ['users.json'] as const
}

export function getAdminBackupsJsonQueryKey() {
  return ['admin', '/admin/backups.json'] as const
}

export function getAdminBackupsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['backups.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['backups.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminBackupsJsonQueryKey>
  >({
    queryKey: getAdminBackupsJsonQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.admin['backups.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAdminBackupsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['backups.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['backups.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminBackupsJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAdminBackupsJsonQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAdminBackupsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['backups.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['backups.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminBackupsJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAdminBackupsJsonQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAdminBackupsJsonMutationKey() {
  return ['admin', '/admin/backups.json', 'POST'] as const
}

export function getPostAdminBackupsJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['backups.json']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['backups.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminBackupsJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin)['backups.json']['$post']>) {
      return parseResponse(client.admin['backups.json'].$post(args, options))
    },
  })
}

export function usePostAdminBackupsJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.admin)['backups.json']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.admin)['backups.json']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminBackupsJsonMutationOptions<TError, TOnMutateResult>(
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

export function getAdminBackupsFilenameQueryKey(
  args: InferRequestType<(typeof client.admin.backups)[':filename']['$get']>,
) {
  return ['admin', '/admin/backups/:filename', args] as const
}

export function getAdminBackupsFilenameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.backups)[':filename']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.backups)[':filename']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.backups)[':filename']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminBackupsFilenameQueryKey>
  >({
    queryKey: getAdminBackupsFilenameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.backups[':filename'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAdminBackupsFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.backups)[':filename']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.backups)[':filename']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.admin.backups)[':filename']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminBackupsFilenameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAdminBackupsFilenameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAdminBackupsFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.backups)[':filename']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.backups)[':filename']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.admin.backups)[':filename']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminBackupsFilenameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAdminBackupsFilenameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutAdminBackupsFilenameMutationKey() {
  return ['admin', '/admin/backups/:filename', 'PUT'] as const
}

export function getPutAdminBackupsFilenameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.backups)[':filename']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.backups)[':filename']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAdminBackupsFilenameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin.backups)[':filename']['$put']>) {
      return parseResponse(client.admin.backups[':filename'].$put(args, options))
    },
  })
}

export function usePutAdminBackupsFilename<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.admin.backups)[':filename']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.admin.backups)[':filename']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAdminBackupsFilenameMutationOptions<TError, TOnMutateResult>(
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

export function getAdminBadgesJsonQueryKey() {
  return ['admin', '/admin/badges.json'] as const
}

export function getAdminBadgesJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['badges.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['badges.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminBadgesJsonQueryKey>
  >({
    queryKey: getAdminBadgesJsonQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.admin['badges.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAdminBadgesJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['badges.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['badges.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminBadgesJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAdminBadgesJsonQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAdminBadgesJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['badges.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['badges.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminBadgesJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAdminBadgesJsonQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAdminBadgesJsonMutationKey() {
  return ['admin', '/admin/badges.json', 'POST'] as const
}

export function getPostAdminBadgesJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['badges.json']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['badges.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminBadgesJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin)['badges.json']['$post']>) {
      return parseResponse(client.admin['badges.json'].$post(args, options))
    },
  })
}

export function usePostAdminBadgesJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['badges.json']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.admin)['badges.json']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminBadgesJsonMutationOptions<TError, TOnMutateResult>(
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

export function getPutAdminBadgesIdJsonMutationKey() {
  return ['admin', '/admin/badges/:id.json', 'PUT'] as const
}

export function getPutAdminBadgesIdJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.badges)[':id.json']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.badges)[':id.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAdminBadgesIdJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin.badges)[':id.json']['$put']>) {
      return parseResponse(client.admin.badges[':id.json'].$put(args, options))
    },
  })
}

export function usePutAdminBadgesIdJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.admin.badges)[':id.json']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.admin.badges)[':id.json']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAdminBadgesIdJsonMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAdminBadgesIdJsonMutationKey() {
  return ['admin', '/admin/badges/:id.json', 'DELETE'] as const
}

export function getDeleteAdminBadgesIdJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.badges)[':id.json']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.badges)[':id.json']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminBadgesIdJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin.badges)[':id.json']['$delete']>) {
      return parseResponse(client.admin.badges[':id.json'].$delete(args, options))
    },
  })
}

export function useDeleteAdminBadgesIdJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.admin.badges)[':id.json']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.admin.badges)[':id.json']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAdminBadgesIdJsonMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminGroupsJsonMutationKey() {
  return ['admin', '/admin/groups.json', 'POST'] as const
}

export function getPostAdminGroupsJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['groups.json']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['groups.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminGroupsJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin)['groups.json']['$post']>) {
      return parseResponse(client.admin['groups.json'].$post(args, options))
    },
  })
}

export function usePostAdminGroupsJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['groups.json']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.admin)['groups.json']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminGroupsJsonMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAdminGroupsIdJsonMutationKey() {
  return ['admin', '/admin/groups/:id.json', 'DELETE'] as const
}

export function getDeleteAdminGroupsIdJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.groups)[':id.json']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.groups)[':id.json']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminGroupsIdJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin.groups)[':id.json']['$delete']>) {
      return parseResponse(client.admin.groups[':id.json'].$delete(args, options))
    },
  })
}

export function useDeleteAdminGroupsIdJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.admin.groups)[':id.json']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.admin.groups)[':id.json']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAdminGroupsIdJsonMutationOptions<TError, TOnMutateResult>(
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

export function getAdminUsersListFlagJsonQueryKey(
  args: InferRequestType<(typeof client.admin.users.list)[':flag.json']['$get']>,
) {
  return ['admin', '/admin/users/list/:flag.json', args] as const
}

export function getAdminUsersListFlagJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.users.list)[':flag.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.users.list)[':flag.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.users.list)[':flag.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminUsersListFlagJsonQueryKey>
  >({
    queryKey: getAdminUsersListFlagJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.users.list[':flag.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAdminUsersListFlagJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.users.list)[':flag.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.users.list)[':flag.json']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.admin.users.list)[':flag.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminUsersListFlagJsonQueryKey>
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
      ...getAdminUsersListFlagJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAdminUsersListFlagJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.users.list)[':flag.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.users.list)[':flag.json']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.admin.users.list)[':flag.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminUsersListFlagJsonQueryKey>
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
      ...getAdminUsersListFlagJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAdminUsersIdJsonQueryKey(
  args: InferRequestType<(typeof client.admin.users)[':id.json']['$get']>,
) {
  return ['admin', '/admin/users/:id.json', args] as const
}

export function getAdminUsersIdJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.users)[':id.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.users)[':id.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.users)[':id.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminUsersIdJsonQueryKey>
  >({
    queryKey: getAdminUsersIdJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.users[':id.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAdminUsersIdJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.users)[':id.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.users)[':id.json']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.admin.users)[':id.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminUsersIdJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAdminUsersIdJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAdminUsersIdJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.users)[':id.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.users)[':id.json']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.admin.users)[':id.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminUsersIdJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAdminUsersIdJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteAdminUsersIdJsonMutationKey() {
  return ['admin', '/admin/users/:id.json', 'DELETE'] as const
}

export function getDeleteAdminUsersIdJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.users)[':id.json']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.users)[':id.json']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminUsersIdJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin.users)[':id.json']['$delete']>) {
      return parseResponse(client.admin.users[':id.json'].$delete(args, options))
    },
  })
}

export function useDeleteAdminUsersIdJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.admin.users)[':id.json']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.admin.users)[':id.json']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAdminUsersIdJsonMutationOptions<TError, TOnMutateResult>(
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

export function getPutAdminUsersIdAnonymizeJsonMutationKey() {
  return ['admin', '/admin/users/:id/anonymize.json', 'PUT'] as const
}

export function getPutAdminUsersIdAnonymizeJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.users)[':id']['anonymize.json']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.users)[':id']['anonymize.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAdminUsersIdAnonymizeJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.users)[':id']['anonymize.json']['$put']>,
    ) {
      return parseResponse(client.admin.users[':id']['anonymize.json'].$put(args, options))
    },
  })
}

export function usePutAdminUsersIdAnonymizeJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.admin.users)[':id']['anonymize.json']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.admin.users)[':id']['anonymize.json']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAdminUsersIdAnonymizeJsonMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminUsersIdLogOutJsonMutationKey() {
  return ['admin', '/admin/users/:id/log_out.json', 'POST'] as const
}

export function getPostAdminUsersIdLogOutJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.users)[':id']['log_out.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.users)[':id']['log_out.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminUsersIdLogOutJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.users)[':id']['log_out.json']['$post']>,
    ) {
      return parseResponse(client.admin.users[':id']['log_out.json'].$post(args, options))
    },
  })
}

export function usePostAdminUsersIdLogOutJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.admin.users)[':id']['log_out.json']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.admin.users)[':id']['log_out.json']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminUsersIdLogOutJsonMutationOptions<TError, TOnMutateResult>(
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

export function getPutAdminUsersIdSilenceJsonMutationKey() {
  return ['admin', '/admin/users/:id/silence.json', 'PUT'] as const
}

export function getPutAdminUsersIdSilenceJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.users)[':id']['silence.json']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.users)[':id']['silence.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAdminUsersIdSilenceJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.users)[':id']['silence.json']['$put']>,
    ) {
      return parseResponse(client.admin.users[':id']['silence.json'].$put(args, options))
    },
  })
}

export function usePutAdminUsersIdSilenceJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.admin.users)[':id']['silence.json']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.admin.users)[':id']['silence.json']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAdminUsersIdSilenceJsonMutationOptions<TError, TOnMutateResult>(
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

export function getPutAdminUsersIdSuspendJsonMutationKey() {
  return ['admin', '/admin/users/:id/suspend.json', 'PUT'] as const
}

export function getPutAdminUsersIdSuspendJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.users)[':id']['suspend.json']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.users)[':id']['suspend.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAdminUsersIdSuspendJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.users)[':id']['suspend.json']['$put']>,
    ) {
      return parseResponse(client.admin.users[':id']['suspend.json'].$put(args, options))
    },
  })
}

export function usePutAdminUsersIdSuspendJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.admin.users)[':id']['suspend.json']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.admin.users)[':id']['suspend.json']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAdminUsersIdSuspendJsonMutationOptions<TError, TOnMutateResult>(
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

export function getCIdShowJsonQueryKey(
  args: InferRequestType<(typeof client.c)[':id']['show.json']['$get']>,
) {
  return ['c', '/c/:id/show.json', args] as const
}

export function getCIdShowJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.c)[':id']['show.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.c)[':id']['show.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.c)[':id']['show.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCIdShowJsonQueryKey>
  >({
    queryKey: getCIdShowJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.c[':id']['show.json'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCIdShowJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.c)[':id']['show.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.c)[':id']['show.json']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.c)[':id']['show.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCIdShowJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCIdShowJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCIdShowJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.c)[':id']['show.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.c)[':id']['show.json']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.c)[':id']['show.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCIdShowJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCIdShowJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCSlugIdJsonQueryKey(
  args: InferRequestType<(typeof client.c)[':slug'][':id.json']['$get']>,
) {
  return ['c', '/c/:slug/:id.json', args] as const
}

export function getCSlugIdJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.c)[':slug'][':id.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.c)[':slug'][':id.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.c)[':slug'][':id.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCSlugIdJsonQueryKey>
  >({
    queryKey: getCSlugIdJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.c[':slug'][':id.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCSlugIdJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.c)[':slug'][':id.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.c)[':slug'][':id.json']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.c)[':slug'][':id.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCSlugIdJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCSlugIdJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCSlugIdJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.c)[':slug'][':id.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.c)[':slug'][':id.json']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.c)[':slug'][':id.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCSlugIdJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCSlugIdJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCategoriesJsonQueryKey(
  args: InferRequestType<(typeof client)['categories.json']['$get']>,
) {
  return ['categories.json', '/categories.json', args] as const
}

export function getCategoriesJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['categories.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['categories.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['categories.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCategoriesJsonQueryKey>
  >({
    queryKey: getCategoriesJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['categories.json'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCategoriesJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['categories.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['categories.json']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['categories.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCategoriesJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCategoriesJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCategoriesJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['categories.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['categories.json']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['categories.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCategoriesJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCategoriesJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostCategoriesJsonMutationKey() {
  return ['categories.json', '/categories.json', 'POST'] as const
}

export function getPostCategoriesJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['categories.json']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['categories.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCategoriesJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['categories.json']['$post']>) {
      return parseResponse(client['categories.json'].$post(args, options))
    },
  })
}

export function usePostCategoriesJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['categories.json']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['categories.json']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCategoriesJsonMutationOptions<TError, TOnMutateResult>(
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

export function getPutCategoriesIdJsonMutationKey() {
  return ['categories', '/categories/:id.json', 'PUT'] as const
}

export function getPutCategoriesIdJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':id.json']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.categories)[':id.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCategoriesIdJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.categories)[':id.json']['$put']>) {
      return parseResponse(client.categories[':id.json'].$put(args, options))
    },
  })
}

export function usePutCategoriesIdJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.categories)[':id.json']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.categories)[':id.json']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutCategoriesIdJsonMutationOptions<TError, TOnMutateResult>(
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

export function getDirectoryItemsJsonQueryKey(
  args: InferRequestType<(typeof client)['directory_items.json']['$get']>,
) {
  return ['directory_items.json', '/directory_items.json', args] as const
}

export function getDirectoryItemsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['directory_items.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['directory_items.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['directory_items.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDirectoryItemsJsonQueryKey>
  >({
    queryKey: getDirectoryItemsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['directory_items.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDirectoryItemsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['directory_items.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['directory_items.json']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['directory_items.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDirectoryItemsJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDirectoryItemsJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDirectoryItemsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['directory_items.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['directory_items.json']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['directory_items.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDirectoryItemsJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDirectoryItemsJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGroupsJsonQueryKey() {
  return ['groups.json', '/groups.json'] as const
}

export function getGroupsJsonQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['groups.json']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['groups.json']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsJsonQueryKey>
  >({
    queryKey: getGroupsJsonQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['groups.json'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGroupsJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['groups.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['groups.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGroupsJsonQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGroupsJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['groups.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['groups.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGroupsJsonQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGroupsIdJsonQueryKey(
  args: InferRequestType<(typeof client.groups)[':id.json']['$get']>,
) {
  return ['groups', '/groups/:id.json', args] as const
}

export function getGroupsIdJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':id.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsIdJsonQueryKey>
  >({
    queryKey: getGroupsIdJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups[':id.json'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGroupsIdJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':id.json']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsIdJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGroupsIdJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGroupsIdJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':id.json']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsIdJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGroupsIdJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutGroupsIdJsonMutationKey() {
  return ['groups', '/groups/:id.json', 'PUT'] as const
}

export function getPutGroupsIdJsonMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id.json']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.groups)[':id.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutGroupsIdJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.groups)[':id.json']['$put']>) {
      return parseResponse(client.groups[':id.json'].$put(args, options))
    },
  })
}

export function usePutGroupsIdJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id.json']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.groups)[':id.json']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutGroupsIdJsonMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getGroupsIdMembersJsonQueryKey(
  args: InferRequestType<(typeof client.groups)[':id']['members.json']['$get']>,
) {
  return ['groups', '/groups/:id/members.json', args] as const
}

export function getGroupsIdMembersJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups)[':id']['members.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':id']['members.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups)[':id']['members.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsIdMembersJsonQueryKey>
  >({
    queryKey: getGroupsIdMembersJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups[':id']['members.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGroupsIdMembersJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups)[':id']['members.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':id']['members.json']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.groups)[':id']['members.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsIdMembersJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGroupsIdMembersJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGroupsIdMembersJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups)[':id']['members.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':id']['members.json']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.groups)[':id']['members.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsIdMembersJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGroupsIdMembersJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutGroupsIdMembersJsonMutationKey() {
  return ['groups', '/groups/:id/members.json', 'PUT'] as const
}

export function getPutGroupsIdMembersJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups)[':id']['members.json']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.groups)[':id']['members.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutGroupsIdMembersJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.groups)[':id']['members.json']['$put']>,
    ) {
      return parseResponse(client.groups[':id']['members.json'].$put(args, options))
    },
  })
}

export function usePutGroupsIdMembersJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.groups)[':id']['members.json']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.groups)[':id']['members.json']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutGroupsIdMembersJsonMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteGroupsIdMembersJsonMutationKey() {
  return ['groups', '/groups/:id/members.json', 'DELETE'] as const
}

export function getDeleteGroupsIdMembersJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups)[':id']['members.json']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.groups)[':id']['members.json']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteGroupsIdMembersJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.groups)[':id']['members.json']['$delete']>,
    ) {
      return parseResponse(client.groups[':id']['members.json'].$delete(args, options))
    },
  })
}

export function useDeleteGroupsIdMembersJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.groups)[':id']['members.json']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.groups)[':id']['members.json']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteGroupsIdMembersJsonMutationOptions<TError, TOnMutateResult>(
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

export function getPostInvitesJsonMutationKey() {
  return ['invites.json', '/invites.json', 'POST'] as const
}

export function getPostInvitesJsonMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['invites.json']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['invites.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInvitesJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['invites.json']['$post']>) {
      return parseResponse(client['invites.json'].$post(args, options))
    },
  })
}

export function usePostInvitesJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['invites.json']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['invites.json']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostInvitesJsonMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getLatestJsonQueryKey(
  args: InferRequestType<(typeof client)['latest.json']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['latest.json', '/latest.json', keyArgs] as const
}

export function getLatestJsonQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['latest.json']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['latest.json']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['latest.json']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLatestJsonQueryKey>
  >({
    queryKey: getLatestJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['latest.json'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLatestJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['latest.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['latest.json']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['latest.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLatestJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLatestJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLatestJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['latest.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['latest.json']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['latest.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLatestJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLatestJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getNotificationsJsonQueryKey() {
  return ['notifications.json', '/notifications.json'] as const
}

export function getNotificationsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['notifications.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['notifications.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsJsonQueryKey>
  >({
    queryKey: getNotificationsJsonQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['notifications.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useNotificationsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['notifications.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['notifications.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationsJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNotificationsJsonQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNotificationsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['notifications.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['notifications.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationsJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNotificationsJsonQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutNotificationsMarkReadJsonMutationKey() {
  return ['notifications', '/notifications/mark-read.json', 'PUT'] as const
}

export function getPutNotificationsMarkReadJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notifications)['mark-read.json']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.notifications)['mark-read.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutNotificationsMarkReadJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.notifications)['mark-read.json']['$put']>,
    ) {
      return parseResponse(client.notifications['mark-read.json'].$put(args, options))
    },
  })
}

export function usePutNotificationsMarkReadJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.notifications)['mark-read.json']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.notifications)['mark-read.json']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutNotificationsMarkReadJsonMutationOptions<TError, TOnMutateResult>(
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

export function getPostPostActionsJsonMutationKey() {
  return ['post_actions.json', '/post_actions.json', 'POST'] as const
}

export function getPostPostActionsJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['post_actions.json']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['post_actions.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPostActionsJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['post_actions.json']['$post']>) {
      return parseResponse(client['post_actions.json'].$post(args, options))
    },
  })
}

export function usePostPostActionsJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['post_actions.json']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['post_actions.json']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPostActionsJsonMutationOptions<TError, TOnMutateResult>(
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

export function getPostsJsonQueryKey(
  args: InferRequestType<(typeof client)['posts.json']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['posts.json', '/posts.json', keyArgs] as const
}

export function getPostsJsonQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['posts.json']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['posts.json']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['posts.json']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPostsJsonQueryKey>
  >({
    queryKey: getPostsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['posts.json'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePostsJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['posts.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['posts.json']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['posts.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPostsJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPostsJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePostsJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['posts.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['posts.json']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['posts.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPostsJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPostsJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostPostsJsonMutationKey() {
  return ['posts.json', '/posts.json', 'POST'] as const
}

export function getPostPostsJsonMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['posts.json']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['posts.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPostsJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['posts.json']['$post']>) {
      return parseResponse(client['posts.json'].$post(args, options))
    },
  })
}

export function usePostPostsJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['posts.json']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['posts.json']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPostsJsonMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostsIdJsonQueryKey(
  args: InferRequestType<(typeof client.posts)[':id.json']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['posts', '/posts/:id.json', keyArgs] as const
}

export function getPostsIdJsonQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.posts)[':id.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.posts)[':id.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.posts)[':id.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPostsIdJsonQueryKey>
  >({
    queryKey: getPostsIdJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.posts[':id.json'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePostsIdJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.posts)[':id.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.posts)[':id.json']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.posts)[':id.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPostsIdJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPostsIdJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePostsIdJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.posts)[':id.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.posts)[':id.json']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.posts)[':id.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPostsIdJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPostsIdJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutPostsIdJsonMutationKey() {
  return ['posts', '/posts/:id.json', 'PUT'] as const
}

export function getPutPostsIdJsonMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.posts)[':id.json']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.posts)[':id.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPostsIdJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.posts)[':id.json']['$put']>) {
      return parseResponse(client.posts[':id.json'].$put(args, options))
    },
  })
}

export function usePutPostsIdJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.posts)[':id.json']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.posts)[':id.json']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutPostsIdJsonMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeletePostsIdJsonMutationKey() {
  return ['posts', '/posts/:id.json', 'DELETE'] as const
}

export function getDeletePostsIdJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.posts)[':id.json']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.posts)[':id.json']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePostsIdJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.posts)[':id.json']['$delete']>) {
      return parseResponse(client.posts[':id.json'].$delete(args, options))
    },
  })
}

export function useDeletePostsIdJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.posts)[':id.json']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.posts)[':id.json']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePostsIdJsonMutationOptions<TError, TOnMutateResult>(
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

export function getPutPostsIdLockedJsonMutationKey() {
  return ['posts', '/posts/:id/locked.json', 'PUT'] as const
}

export function getPutPostsIdLockedJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.posts)[':id']['locked.json']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.posts)[':id']['locked.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPostsIdLockedJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.posts)[':id']['locked.json']['$put']>) {
      return parseResponse(client.posts[':id']['locked.json'].$put(args, options))
    },
  })
}

export function usePutPostsIdLockedJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.posts)[':id']['locked.json']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.posts)[':id']['locked.json']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutPostsIdLockedJsonMutationOptions<TError, TOnMutateResult>(
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

export function getPostsIdRepliesJsonQueryKey(
  args: InferRequestType<(typeof client.posts)[':id']['replies.json']['$get']>,
) {
  return ['posts', '/posts/:id/replies.json', args] as const
}

export function getPostsIdRepliesJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.posts)[':id']['replies.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.posts)[':id']['replies.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.posts)[':id']['replies.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPostsIdRepliesJsonQueryKey>
  >({
    queryKey: getPostsIdRepliesJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.posts[':id']['replies.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePostsIdRepliesJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.posts)[':id']['replies.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.posts)[':id']['replies.json']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.posts)[':id']['replies.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPostsIdRepliesJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPostsIdRepliesJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePostsIdRepliesJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.posts)[':id']['replies.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.posts)[':id']['replies.json']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.posts)[':id']['replies.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPostsIdRepliesJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPostsIdRepliesJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSearchJsonQueryKey(
  args: InferRequestType<(typeof client)['search.json']['$get']>,
) {
  return ['search.json', '/search.json', args] as const
}

export function getSearchJsonQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['search.json']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['search.json']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['search.json']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchJsonQueryKey>
  >({
    queryKey: getSearchJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['search.json'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSearchJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['search.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['search.json']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['search.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSearchJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSearchJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSearchJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['search.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['search.json']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['search.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSearchJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSearchJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostSessionForgotPasswordJsonMutationKey() {
  return ['session', '/session/forgot_password.json', 'POST'] as const
}

export function getPostSessionForgotPasswordJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.session)['forgot_password.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.session)['forgot_password.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSessionForgotPasswordJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.session)['forgot_password.json']['$post']>,
    ) {
      return parseResponse(client.session['forgot_password.json'].$post(args, options))
    },
  })
}

export function usePostSessionForgotPasswordJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.session)['forgot_password.json']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.session)['forgot_password.json']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSessionForgotPasswordJsonMutationOptions<TError, TOnMutateResult>(
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

export function getSiteJsonQueryKey() {
  return ['site.json', '/site.json'] as const
}

export function getSiteJsonQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['site.json']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['site.json']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSiteJsonQueryKey>
  >({
    queryKey: getSiteJsonQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['site.json'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSiteJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['site.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['site.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSiteJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSiteJsonQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSiteJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['site.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['site.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSiteJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSiteJsonQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutTDashIdJsonMutationKey() {
  return ['t', '/t/-/:id.json', 'PUT'] as const
}

export function getPutTDashIdJsonMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.t)['-'][':id.json']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.t)['-'][':id.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTDashIdJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.t)['-'][':id.json']['$put']>) {
      return parseResponse(client.t['-'][':id.json'].$put(args, options))
    },
  })
}

export function usePutTDashIdJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.t)['-'][':id.json']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.t)['-'][':id.json']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutTDashIdJsonMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTExternalIdExternalIdJsonQueryKey(
  args: InferRequestType<(typeof client.t.external_id)[':external_id.json']['$get']>,
) {
  return ['t', '/t/external_id/:external_id.json', args] as const
}

export function getTExternalIdExternalIdJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.t.external_id)[':external_id.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.t.external_id)[':external_id.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.t.external_id)[':external_id.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTExternalIdExternalIdJsonQueryKey>
  >({
    queryKey: getTExternalIdExternalIdJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.t.external_id[':external_id.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTExternalIdExternalIdJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.t.external_id)[':external_id.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.t.external_id)[':external_id.json']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.t.external_id)[':external_id.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTExternalIdExternalIdJsonQueryKey>
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
      ...getTExternalIdExternalIdJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTExternalIdExternalIdJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.t.external_id)[':external_id.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.t.external_id)[':external_id.json']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.t.external_id)[':external_id.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTExternalIdExternalIdJsonQueryKey>
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
      ...getTExternalIdExternalIdJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTIdJsonQueryKey(args: InferRequestType<(typeof client.t)[':id.json']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['t', '/t/:id.json', keyArgs] as const
}

export function getTIdJsonQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.t)[':id.json']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.t)[':id.json']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.t)[':id.json']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTIdJsonQueryKey>
  >({
    queryKey: getTIdJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.t[':id.json'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTIdJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.t)[':id.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.t)[':id.json']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.t)[':id.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTIdJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTIdJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTIdJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.t)[':id.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.t)[':id.json']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.t)[':id.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTIdJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTIdJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteTIdJsonMutationKey() {
  return ['t', '/t/:id.json', 'DELETE'] as const
}

export function getDeleteTIdJsonMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.t)[':id.json']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.t)[':id.json']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTIdJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.t)[':id.json']['$delete']>) {
      return parseResponse(client.t[':id.json'].$delete(args, options))
    },
  })
}

export function useDeleteTIdJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.t)[':id.json']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.t)[':id.json']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTIdJsonMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutTIdBookmarkJsonMutationKey() {
  return ['t', '/t/:id/bookmark.json', 'PUT'] as const
}

export function getPutTIdBookmarkJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.t)[':id']['bookmark.json']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.t)[':id']['bookmark.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTIdBookmarkJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.t)[':id']['bookmark.json']['$put']>) {
      return parseResponse(client.t[':id']['bookmark.json'].$put(args, options))
    },
  })
}

export function usePutTIdBookmarkJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.t)[':id']['bookmark.json']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.t)[':id']['bookmark.json']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutTIdBookmarkJsonMutationOptions<TError, TOnMutateResult>(
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

export function getPutTIdChangeTimestampJsonMutationKey() {
  return ['t', '/t/:id/change-timestamp.json', 'PUT'] as const
}

export function getPutTIdChangeTimestampJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.t)[':id']['change-timestamp.json']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.t)[':id']['change-timestamp.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTIdChangeTimestampJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.t)[':id']['change-timestamp.json']['$put']>,
    ) {
      return parseResponse(client.t[':id']['change-timestamp.json'].$put(args, options))
    },
  })
}

export function usePutTIdChangeTimestampJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.t)[':id']['change-timestamp.json']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.t)[':id']['change-timestamp.json']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutTIdChangeTimestampJsonMutationOptions<TError, TOnMutateResult>(
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

export function getPostTIdInviteJsonMutationKey() {
  return ['t', '/t/:id/invite.json', 'POST'] as const
}

export function getPostTIdInviteJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.t)[':id']['invite.json']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.t)[':id']['invite.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTIdInviteJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.t)[':id']['invite.json']['$post']>) {
      return parseResponse(client.t[':id']['invite.json'].$post(args, options))
    },
  })
}

export function usePostTIdInviteJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.t)[':id']['invite.json']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.t)[':id']['invite.json']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTIdInviteJsonMutationOptions<TError, TOnMutateResult>(
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

export function getPostTIdNotificationsJsonMutationKey() {
  return ['t', '/t/:id/notifications.json', 'POST'] as const
}

export function getPostTIdNotificationsJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.t)[':id']['notifications.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.t)[':id']['notifications.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTIdNotificationsJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.t)[':id']['notifications.json']['$post']>,
    ) {
      return parseResponse(client.t[':id']['notifications.json'].$post(args, options))
    },
  })
}

export function usePostTIdNotificationsJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.t)[':id']['notifications.json']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.t)[':id']['notifications.json']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTIdNotificationsJsonMutationOptions<TError, TOnMutateResult>(
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

export function getTIdPostsJsonQueryKey(
  args: InferRequestType<(typeof client.t)[':id']['posts.json']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['t', '/t/:id/posts.json', keyArgs] as const
}

export function getTIdPostsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.t)[':id']['posts.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.t)[':id']['posts.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.t)[':id']['posts.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTIdPostsJsonQueryKey>
  >({
    queryKey: getTIdPostsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.t[':id']['posts.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTIdPostsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.t)[':id']['posts.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.t)[':id']['posts.json']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.t)[':id']['posts.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTIdPostsJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTIdPostsJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTIdPostsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.t)[':id']['posts.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.t)[':id']['posts.json']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.t)[':id']['posts.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTIdPostsJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTIdPostsJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutTIdStatusJsonMutationKey() {
  return ['t', '/t/:id/status.json', 'PUT'] as const
}

export function getPutTIdStatusJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.t)[':id']['status.json']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.t)[':id']['status.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTIdStatusJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.t)[':id']['status.json']['$put']>) {
      return parseResponse(client.t[':id']['status.json'].$put(args, options))
    },
  })
}

export function usePutTIdStatusJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.t)[':id']['status.json']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.t)[':id']['status.json']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutTIdStatusJsonMutationOptions<TError, TOnMutateResult>(
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

export function getPostTIdTimerJsonMutationKey() {
  return ['t', '/t/:id/timer.json', 'POST'] as const
}

export function getPostTIdTimerJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.t)[':id']['timer.json']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.t)[':id']['timer.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTIdTimerJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.t)[':id']['timer.json']['$post']>) {
      return parseResponse(client.t[':id']['timer.json'].$post(args, options))
    },
  })
}

export function usePostTIdTimerJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.t)[':id']['timer.json']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.t)[':id']['timer.json']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTIdTimerJsonMutationOptions<TError, TOnMutateResult>(
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

export function getTagNameJsonQueryKey(
  args: InferRequestType<(typeof client.tag)[':name.json']['$get']>,
) {
  return ['tag', '/tag/:name.json', args] as const
}

export function getTagNameJsonQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tag)[':name.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tag)[':name.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tag)[':name.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagNameJsonQueryKey>
  >({
    queryKey: getTagNameJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tag[':name.json'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTagNameJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tag)[':name.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tag)[':name.json']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tag)[':name.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagNameJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTagNameJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTagNameJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tag)[':name.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tag)[':name.json']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tag)[':name.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagNameJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTagNameJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTagGroupsJsonQueryKey() {
  return ['tag_groups.json', '/tag_groups.json'] as const
}

export function getTagGroupsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['tag_groups.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['tag_groups.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagGroupsJsonQueryKey>
  >({
    queryKey: getTagGroupsJsonQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['tag_groups.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTagGroupsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['tag_groups.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['tag_groups.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagGroupsJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTagGroupsJsonQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTagGroupsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['tag_groups.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['tag_groups.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagGroupsJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTagGroupsJsonQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostTagGroupsJsonMutationKey() {
  return ['tag_groups.json', '/tag_groups.json', 'POST'] as const
}

export function getPostTagGroupsJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['tag_groups.json']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['tag_groups.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagGroupsJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['tag_groups.json']['$post']>) {
      return parseResponse(client['tag_groups.json'].$post(args, options))
    },
  })
}

export function usePostTagGroupsJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['tag_groups.json']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['tag_groups.json']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTagGroupsJsonMutationOptions<TError, TOnMutateResult>(
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

export function getTagGroupsIdJsonQueryKey(
  args: InferRequestType<(typeof client.tag_groups)[':id.json']['$get']>,
) {
  return ['tag_groups', '/tag_groups/:id.json', args] as const
}

export function getTagGroupsIdJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tag_groups)[':id.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tag_groups)[':id.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tag_groups)[':id.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagGroupsIdJsonQueryKey>
  >({
    queryKey: getTagGroupsIdJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tag_groups[':id.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTagGroupsIdJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tag_groups)[':id.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tag_groups)[':id.json']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tag_groups)[':id.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagGroupsIdJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTagGroupsIdJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTagGroupsIdJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tag_groups)[':id.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tag_groups)[':id.json']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tag_groups)[':id.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagGroupsIdJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTagGroupsIdJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutTagGroupsIdJsonMutationKey() {
  return ['tag_groups', '/tag_groups/:id.json', 'PUT'] as const
}

export function getPutTagGroupsIdJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tag_groups)[':id.json']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tag_groups)[':id.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTagGroupsIdJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tag_groups)[':id.json']['$put']>) {
      return parseResponse(client.tag_groups[':id.json'].$put(args, options))
    },
  })
}

export function usePutTagGroupsIdJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tag_groups)[':id.json']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tag_groups)[':id.json']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutTagGroupsIdJsonMutationOptions<TError, TOnMutateResult>(
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

export function getTagsJsonQueryKey() {
  return ['tags.json', '/tags.json'] as const
}

export function getTagsJsonQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['tags.json']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['tags.json']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTagsJsonQueryKey>
  >({
    queryKey: getTagsJsonQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['tags.json'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTagsJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['tags.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['tags.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTagsJsonQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTagsJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['tags.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['tags.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTagsJsonQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTopJsonQueryKey(args: InferRequestType<(typeof client)['top.json']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['top.json', '/top.json', keyArgs] as const
}

export function getTopJsonQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['top.json']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['top.json']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['top.json']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTopJsonQueryKey>
  >({
    queryKey: getTopJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['top.json'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTopJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['top.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['top.json']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['top.json']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTopJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTopJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTopJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['top.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['top.json']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['top.json']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTopJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTopJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTopicsPrivateMessagesSentUsernameJsonQueryKey(
  args: InferRequestType<(typeof client.topics)['private-messages-sent'][':username.json']['$get']>,
) {
  return ['topics', '/topics/private-messages-sent/:username.json', args] as const
}

export function getTopicsPrivateMessagesSentUsernameJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.topics)['private-messages-sent'][':username.json']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.topics)['private-messages-sent'][':username.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.topics)['private-messages-sent'][':username.json']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTopicsPrivateMessagesSentUsernameJsonQueryKey>
  >({
    queryKey: getTopicsPrivateMessagesSentUsernameJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.topics['private-messages-sent'][':username.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTopicsPrivateMessagesSentUsernameJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.topics)['private-messages-sent'][':username.json']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.topics)['private-messages-sent'][':username.json']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.topics)['private-messages-sent'][':username.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTopicsPrivateMessagesSentUsernameJsonQueryKey>
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
      ...getTopicsPrivateMessagesSentUsernameJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTopicsPrivateMessagesSentUsernameJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.topics)['private-messages-sent'][':username.json']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.topics)['private-messages-sent'][':username.json']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.topics)['private-messages-sent'][':username.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTopicsPrivateMessagesSentUsernameJsonQueryKey>
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
      ...getTopicsPrivateMessagesSentUsernameJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTopicsPrivateMessagesUsernameJsonQueryKey(
  args: InferRequestType<(typeof client.topics)['private-messages'][':username.json']['$get']>,
) {
  return ['topics', '/topics/private-messages/:username.json', args] as const
}

export function getTopicsPrivateMessagesUsernameJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.topics)['private-messages'][':username.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.topics)['private-messages'][':username.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.topics)['private-messages'][':username.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTopicsPrivateMessagesUsernameJsonQueryKey>
  >({
    queryKey: getTopicsPrivateMessagesUsernameJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.topics['private-messages'][':username.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTopicsPrivateMessagesUsernameJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.topics)['private-messages'][':username.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.topics)['private-messages'][':username.json']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.topics)['private-messages'][':username.json']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTopicsPrivateMessagesUsernameJsonQueryKey>
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
      ...getTopicsPrivateMessagesUsernameJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTopicsPrivateMessagesUsernameJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.topics)['private-messages'][':username.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.topics)['private-messages'][':username.json']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.topics)['private-messages'][':username.json']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTopicsPrivateMessagesUsernameJsonQueryKey>
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
      ...getTopicsPrivateMessagesUsernameJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getUByExternalExternalIdJsonQueryKey(
  args: InferRequestType<(typeof client.u)['by-external'][':external_id.json']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['u', '/u/by-external/:external_id.json', keyArgs] as const
}

export function getUByExternalExternalIdJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.u)['by-external'][':external_id.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.u)['by-external'][':external_id.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.u)['by-external'][':external_id.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUByExternalExternalIdJsonQueryKey>
  >({
    queryKey: getUByExternalExternalIdJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.u['by-external'][':external_id.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUByExternalExternalIdJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.u)['by-external'][':external_id.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.u)['by-external'][':external_id.json']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.u)['by-external'][':external_id.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUByExternalExternalIdJsonQueryKey>
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
      ...getUByExternalExternalIdJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUByExternalExternalIdJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.u)['by-external'][':external_id.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.u)['by-external'][':external_id.json']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.u)['by-external'][':external_id.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUByExternalExternalIdJsonQueryKey>
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
      ...getUByExternalExternalIdJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getUByExternalProviderExternalIdJsonQueryKey(
  args: InferRequestType<
    (typeof client.u)['by-external'][':provider'][':external_id.json']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['u', '/u/by-external/:provider/:external_id.json', keyArgs] as const
}

export function getUByExternalProviderExternalIdJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.u)['by-external'][':provider'][':external_id.json']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.u)['by-external'][':provider'][':external_id.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.u)['by-external'][':provider'][':external_id.json']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUByExternalProviderExternalIdJsonQueryKey>
  >({
    queryKey: getUByExternalProviderExternalIdJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.u['by-external'][':provider'][':external_id.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUByExternalProviderExternalIdJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.u)['by-external'][':provider'][':external_id.json']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.u)['by-external'][':provider'][':external_id.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.u)['by-external'][':provider'][':external_id.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUByExternalProviderExternalIdJsonQueryKey>
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
      ...getUByExternalProviderExternalIdJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUByExternalProviderExternalIdJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.u)['by-external'][':provider'][':external_id.json']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.u)['by-external'][':provider'][':external_id.json']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.u)['by-external'][':provider'][':external_id.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUByExternalProviderExternalIdJsonQueryKey>
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
      ...getUByExternalProviderExternalIdJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getUUsernameJsonQueryKey(
  args: InferRequestType<(typeof client.u)[':username.json']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['u', '/u/:username.json', keyArgs] as const
}

export function getUUsernameJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.u)[':username.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.u)[':username.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.u)[':username.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUUsernameJsonQueryKey>
  >({
    queryKey: getUUsernameJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.u[':username.json'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useUUsernameJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.u)[':username.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.u)[':username.json']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.u)[':username.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUUsernameJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUUsernameJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUUsernameJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.u)[':username.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.u)[':username.json']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.u)[':username.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUUsernameJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUUsernameJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutUUsernameJsonMutationKey() {
  return ['u', '/u/:username.json', 'PUT'] as const
}

export function getPutUUsernameJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.u)[':username.json']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.u)[':username.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUUsernameJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.u)[':username.json']['$put']>) {
      return parseResponse(client.u[':username.json'].$put(args, options))
    },
  })
}

export function usePutUUsernameJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.u)[':username.json']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.u)[':username.json']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutUUsernameJsonMutationOptions<TError, TOnMutateResult>(
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

export function getUUsernameEmailsJsonQueryKey(
  args: InferRequestType<(typeof client.u)[':username']['emails.json']['$get']>,
) {
  return ['u', '/u/:username/emails.json', args] as const
}

export function getUUsernameEmailsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.u)[':username']['emails.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.u)[':username']['emails.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.u)[':username']['emails.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUUsernameEmailsJsonQueryKey>
  >({
    queryKey: getUUsernameEmailsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.u[':username']['emails.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUUsernameEmailsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.u)[':username']['emails.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.u)[':username']['emails.json']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.u)[':username']['emails.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUUsernameEmailsJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUUsernameEmailsJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUUsernameEmailsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.u)[':username']['emails.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.u)[':username']['emails.json']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.u)[':username']['emails.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUUsernameEmailsJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUUsernameEmailsJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutUUsernamePreferencesAvatarPickJsonMutationKey() {
  return ['u', '/u/:username/preferences/avatar/pick.json', 'PUT'] as const
}

export function getPutUUsernamePreferencesAvatarPickJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.u)[':username']['preferences']['avatar']['pick.json']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.u)[':username']['preferences']['avatar']['pick.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUUsernamePreferencesAvatarPickJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.u)[':username']['preferences']['avatar']['pick.json']['$put']
      >,
    ) {
      return parseResponse(
        client.u[':username'].preferences.avatar['pick.json'].$put(args, options),
      )
    },
  })
}

export function usePutUUsernamePreferencesAvatarPickJson<
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
                  (typeof client.u)[':username']['preferences']['avatar']['pick.json']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.u)[':username']['preferences']['avatar']['pick.json']['$put']
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
  const mutationDefaults = getPutUUsernamePreferencesAvatarPickJsonMutationOptions<
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

export function getPutUUsernamePreferencesEmailJsonMutationKey() {
  return ['u', '/u/:username/preferences/email.json', 'PUT'] as const
}

export function getPutUUsernamePreferencesEmailJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.u)[':username']['preferences']['email.json']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.u)[':username']['preferences']['email.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUUsernamePreferencesEmailJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.u)[':username']['preferences']['email.json']['$put']>,
    ) {
      return parseResponse(client.u[':username'].preferences['email.json'].$put(args, options))
    },
  })
}

export function usePutUUsernamePreferencesEmailJson<
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
                ReturnType<(typeof client.u)[':username']['preferences']['email.json']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.u)[':username']['preferences']['email.json']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutUUsernamePreferencesEmailJsonMutationOptions<
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

export function getPutUUsernamePreferencesUsernameJsonMutationKey() {
  return ['u', '/u/:username/preferences/username.json', 'PUT'] as const
}

export function getPutUUsernamePreferencesUsernameJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.u)[':username']['preferences']['username.json']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.u)[':username']['preferences']['username.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUUsernamePreferencesUsernameJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.u)[':username']['preferences']['username.json']['$put']
      >,
    ) {
      return parseResponse(client.u[':username'].preferences['username.json'].$put(args, options))
    },
  })
}

export function usePutUUsernamePreferencesUsernameJson<
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
                ReturnType<(typeof client.u)[':username']['preferences']['username.json']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.u)[':username']['preferences']['username.json']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutUUsernamePreferencesUsernameJsonMutationOptions<
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

export function getPostUploadsJsonMutationKey() {
  return ['uploads.json', '/uploads.json', 'POST'] as const
}

export function getPostUploadsJsonMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['uploads.json']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['uploads.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUploadsJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['uploads.json']['$post']>) {
      return parseResponse(client['uploads.json'].$post(args, options))
    },
  })
}

export function usePostUploadsJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['uploads.json']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['uploads.json']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUploadsJsonMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostUploadsAbortMultipartJsonMutationKey() {
  return ['uploads', '/uploads/abort-multipart.json', 'POST'] as const
}

export function getPostUploadsAbortMultipartJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.uploads)['abort-multipart.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.uploads)['abort-multipart.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUploadsAbortMultipartJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.uploads)['abort-multipart.json']['$post']>,
    ) {
      return parseResponse(client.uploads['abort-multipart.json'].$post(args, options))
    },
  })
}

export function usePostUploadsAbortMultipartJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.uploads)['abort-multipart.json']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.uploads)['abort-multipart.json']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUploadsAbortMultipartJsonMutationOptions<TError, TOnMutateResult>(
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

export function getPostUploadsBatchPresignMultipartPartsJsonMutationKey() {
  return ['uploads', '/uploads/batch-presign-multipart-parts.json', 'POST'] as const
}

export function getPostUploadsBatchPresignMultipartPartsJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.uploads)['batch-presign-multipart-parts.json']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.uploads)['batch-presign-multipart-parts.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUploadsBatchPresignMultipartPartsJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.uploads)['batch-presign-multipart-parts.json']['$post']
      >,
    ) {
      return parseResponse(
        client.uploads['batch-presign-multipart-parts.json'].$post(args, options),
      )
    },
  })
}

export function usePostUploadsBatchPresignMultipartPartsJson<
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
                ReturnType<(typeof client.uploads)['batch-presign-multipart-parts.json']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.uploads)['batch-presign-multipart-parts.json']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUploadsBatchPresignMultipartPartsJsonMutationOptions<
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

export function getPostUploadsCompleteExternalUploadJsonMutationKey() {
  return ['uploads', '/uploads/complete-external-upload.json', 'POST'] as const
}

export function getPostUploadsCompleteExternalUploadJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.uploads)['complete-external-upload.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.uploads)['complete-external-upload.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUploadsCompleteExternalUploadJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.uploads)['complete-external-upload.json']['$post']>,
    ) {
      return parseResponse(client.uploads['complete-external-upload.json'].$post(args, options))
    },
  })
}

export function usePostUploadsCompleteExternalUploadJson<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.uploads)['complete-external-upload.json']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.uploads)['complete-external-upload.json']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUploadsCompleteExternalUploadJsonMutationOptions<
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

export function getPostUploadsCompleteMultipartJsonMutationKey() {
  return ['uploads', '/uploads/complete-multipart.json', 'POST'] as const
}

export function getPostUploadsCompleteMultipartJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.uploads)['complete-multipart.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.uploads)['complete-multipart.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUploadsCompleteMultipartJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.uploads)['complete-multipart.json']['$post']>,
    ) {
      return parseResponse(client.uploads['complete-multipart.json'].$post(args, options))
    },
  })
}

export function usePostUploadsCompleteMultipartJson<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.uploads)['complete-multipart.json']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.uploads)['complete-multipart.json']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUploadsCompleteMultipartJsonMutationOptions<
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

export function getPostUploadsCreateMultipartJsonMutationKey() {
  return ['uploads', '/uploads/create-multipart.json', 'POST'] as const
}

export function getPostUploadsCreateMultipartJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.uploads)['create-multipart.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.uploads)['create-multipart.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUploadsCreateMultipartJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.uploads)['create-multipart.json']['$post']>,
    ) {
      return parseResponse(client.uploads['create-multipart.json'].$post(args, options))
    },
  })
}

export function usePostUploadsCreateMultipartJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.uploads)['create-multipart.json']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.uploads)['create-multipart.json']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUploadsCreateMultipartJsonMutationOptions<
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

export function getPostUploadsGeneratePresignedPutJsonMutationKey() {
  return ['uploads', '/uploads/generate-presigned-put.json', 'POST'] as const
}

export function getPostUploadsGeneratePresignedPutJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.uploads)['generate-presigned-put.json']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.uploads)['generate-presigned-put.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUploadsGeneratePresignedPutJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.uploads)['generate-presigned-put.json']['$post']>,
    ) {
      return parseResponse(client.uploads['generate-presigned-put.json'].$post(args, options))
    },
  })
}

export function usePostUploadsGeneratePresignedPutJson<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.uploads)['generate-presigned-put.json']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.uploads)['generate-presigned-put.json']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUploadsGeneratePresignedPutJsonMutationOptions<
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

export function getUserBadgesUsernameJsonQueryKey(
  args: InferRequestType<(typeof client)['user-badges'][':username.json']['$get']>,
) {
  return ['user-badges', '/user-badges/:username.json', args] as const
}

export function getUserBadgesUsernameJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['user-badges'][':username.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['user-badges'][':username.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['user-badges'][':username.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserBadgesUsernameJsonQueryKey>
  >({
    queryKey: getUserBadgesUsernameJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['user-badges'][':username.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUserBadgesUsernameJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['user-badges'][':username.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['user-badges'][':username.json']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['user-badges'][':username.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserBadgesUsernameJsonQueryKey>
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
      ...getUserBadgesUsernameJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUserBadgesUsernameJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['user-badges'][':username.json']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['user-badges'][':username.json']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['user-badges'][':username.json']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserBadgesUsernameJsonQueryKey>
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
      ...getUserBadgesUsernameJsonQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getUserActionsJsonQueryKey(
  args: InferRequestType<(typeof client)['user_actions.json']['$get']>,
) {
  return ['user_actions.json', '/user_actions.json', args] as const
}

export function getUserActionsJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['user_actions.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['user_actions.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['user_actions.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserActionsJsonQueryKey>
  >({
    queryKey: getUserActionsJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['user_actions.json'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useUserActionsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['user_actions.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['user_actions.json']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['user_actions.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserActionsJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUserActionsJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUserActionsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['user_actions.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['user_actions.json']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['user_actions.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserActionsJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUserActionsJsonQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostUserAvatarUsernameRefreshGravatarJsonMutationKey() {
  return ['user_avatar', '/user_avatar/:username/refresh_gravatar.json', 'POST'] as const
}

export function getPostUserAvatarUsernameRefreshGravatarJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.user_avatar)[':username']['refresh_gravatar.json']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.user_avatar)[':username']['refresh_gravatar.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserAvatarUsernameRefreshGravatarJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.user_avatar)[':username']['refresh_gravatar.json']['$post']
      >,
    ) {
      return parseResponse(
        client.user_avatar[':username']['refresh_gravatar.json'].$post(args, options),
      )
    },
  })
}

export function usePostUserAvatarUsernameRefreshGravatarJson<
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
                  (typeof client.user_avatar)[':username']['refresh_gravatar.json']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.user_avatar)[':username']['refresh_gravatar.json']['$post']
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
  const mutationDefaults = getPostUserAvatarUsernameRefreshGravatarJsonMutationOptions<
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

export function getPostUsersJsonMutationKey() {
  return ['users.json', '/users.json', 'POST'] as const
}

export function getPostUsersJsonMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['users.json']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['users.json']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersJsonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['users.json']['$post']>) {
      return parseResponse(client['users.json'].$post(args, options))
    },
  })
}

export function usePostUsersJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['users.json']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['users.json']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersJsonMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutUsersPasswordResetTokenJsonMutationKey() {
  return ['users', '/users/password-reset/:token.json', 'PUT'] as const
}

export function getPutUsersPasswordResetTokenJsonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)['password-reset'][':token.json']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)['password-reset'][':token.json']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUsersPasswordResetTokenJsonMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)['password-reset'][':token.json']['$put']>,
    ) {
      return parseResponse(client.users['password-reset'][':token.json'].$put(args, options))
    },
  })
}

export function usePutUsersPasswordResetTokenJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)['password-reset'][':token.json']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.users)['password-reset'][':token.json']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutUsersPasswordResetTokenJsonMutationOptions<
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
