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

export function getAdminBackupsJsonQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAdminBackupsJsonQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['backups.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['backups.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['backups.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminBackupsJsonQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['backups.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminBackupsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAdminBackupsJsonQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['backups.json'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.backups)[':filename']['$get']>>,
) {
  return ['admin', '/admin/backups/:filename', toValue(args)] as const
}

export function getAdminBackupsFilenameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.backups)[':filename']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminBackupsFilenameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.backups[':filename'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminBackupsFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.backups)[':filename']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.backups)[':filename']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.backups)[':filename']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminBackupsFilenameQueryKey>
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
          Awaited<ReturnType<(typeof client.admin.backups)[':filename']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminBackupsFilenameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminBackupsFilenameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.backups[':filename'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getAdminBadgesJsonQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAdminBadgesJsonQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['badges.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['badges.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['badges.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminBadgesJsonQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['badges.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminBadgesJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAdminBadgesJsonQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['badges.json'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['badges.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['badges.json']['$post']>,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['groups.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['groups.json']['$post']>,
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.users.list)[':flag.json']['$get']>>,
) {
  return ['admin', '/admin/users/list/:flag.json', toValue(args)] as const
}

export function getAdminUsersListFlagJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.users.list)[':flag.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminUsersListFlagJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.users.list[':flag.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.users.list)[':flag.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.users.list)[':flag.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminUsersListFlagJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.admin.users.list)[':flag.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminUsersListFlagJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminUsersListFlagJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.users.list[':flag.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdminUsersIdJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.users)[':id.json']['$get']>>,
) {
  return ['admin', '/admin/users/:id.json', toValue(args)] as const
}

export function getAdminUsersIdJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.users)[':id.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminUsersIdJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.users[':id.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminUsersIdJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.users)[':id.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.users)[':id.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.users)[':id.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminUsersIdJsonQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.users)[':id.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminUsersIdJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminUsersIdJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.users[':id.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.c)[':id']['show.json']['$get']>>,
) {
  return ['c', '/c/:id/show.json', toValue(args)] as const
}

export function getCIdShowJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.c)[':id']['show.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCIdShowJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.c[':id']['show.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCIdShowJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.c)[':id']['show.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.c)[':id']['show.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.c)[':id']['show.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.c)[':id']['show.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCIdShowJsonQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.c)[':id']['show.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCIdShowJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCIdShowJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.c[':id']['show.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCSlugIdJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.c)[':slug'][':id.json']['$get']>>,
) {
  return ['c', '/c/:slug/:id.json', toValue(args)] as const
}

export function getCSlugIdJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.c)[':slug'][':id.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCSlugIdJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.c[':slug'][':id.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCSlugIdJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.c)[':slug'][':id.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.c)[':slug'][':id.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.c)[':slug'][':id.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCSlugIdJsonQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.c)[':slug'][':id.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCSlugIdJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCSlugIdJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.c[':slug'][':id.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCategoriesJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['categories.json']['$get']>>,
) {
  return ['categories.json', '/categories.json', toValue(args)] as const
}

export function getCategoriesJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['categories.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCategoriesJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['categories.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCategoriesJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['categories.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['categories.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['categories.json']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['categories.json']['$get']>>>
            >
          >,
          ReturnType<typeof getCategoriesJsonQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['categories.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCategoriesJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCategoriesJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['categories.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['directory_items.json']['$get']>>,
) {
  return ['directory_items.json', '/directory_items.json', toValue(args)] as const
}

export function getDirectoryItemsJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['directory_items.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDirectoryItemsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['directory_items.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDirectoryItemsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['directory_items.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['directory_items.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['directory_items.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDirectoryItemsJsonQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['directory_items.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDirectoryItemsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDirectoryItemsJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['directory_items.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGroupsJsonQueryKey() {
  return ['groups.json', '/groups.json'] as const
}

export function getGroupsJsonQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getGroupsJsonQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['groups.json'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGroupsJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['groups.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['groups.json']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['groups.json']['$get']>>>
            >
          >,
          ReturnType<typeof getGroupsJsonQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['groups.json']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getGroupsJsonQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['groups.json'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGroupsIdJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':id.json']['$get']>>,
) {
  return ['groups', '/groups/:id.json', toValue(args)] as const
}

export function getGroupsIdJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':id.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsIdJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups[':id.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGroupsIdJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':id.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id.json']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id.json']['$get']>>>
            >
          >,
          ReturnType<typeof getGroupsIdJsonQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsIdJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsIdJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.groups[':id.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':id']['members.json']['$get']>>,
) {
  return ['groups', '/groups/:id/members.json', toValue(args)] as const
}

export function getGroupsIdMembersJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':id']['members.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsIdMembersJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups[':id']['members.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':id']['members.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups)[':id']['members.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGroupsIdMembersJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.groups)[':id']['members.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsIdMembersJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsIdMembersJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.groups[':id']['members.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['latest.json']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['latest.json', '/latest.json', keyArgs] as const
}

export function getLatestJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['latest.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLatestJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['latest.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLatestJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['latest.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['latest.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['latest.json']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['latest.json']['$get']>>>
            >
          >,
          ReturnType<typeof getLatestJsonQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['latest.json']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLatestJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLatestJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['latest.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNotificationsJsonQueryKey() {
  return ['notifications.json', '/notifications.json'] as const
}

export function getNotificationsJsonQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getNotificationsJsonQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['notifications.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['notifications.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['notifications.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNotificationsJsonQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['notifications.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getNotificationsJsonQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['notifications.json'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['post_actions.json']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['post_actions.json']['$post']>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['posts.json']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['posts.json', '/posts.json', keyArgs] as const
}

export function getPostsJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['posts.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPostsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['posts.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePostsJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['posts.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['posts.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['posts.json']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['posts.json']['$get']>>>
            >
          >,
          ReturnType<typeof getPostsJsonQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['posts.json']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPostsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPostsJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['posts.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.posts)[':id.json']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['posts', '/posts/:id.json', keyArgs] as const
}

export function getPostsIdJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.posts)[':id.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPostsIdJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.posts[':id.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePostsIdJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.posts)[':id.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.posts)[':id.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.posts)[':id.json']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.posts)[':id.json']['$get']>>>
            >
          >,
          ReturnType<typeof getPostsIdJsonQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.posts)[':id.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPostsIdJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPostsIdJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.posts[':id.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.posts)[':id.json']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.posts)[':id.json']['$delete']>,
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.posts)[':id']['replies.json']['$get']>>,
) {
  return ['posts', '/posts/:id/replies.json', toValue(args)] as const
}

export function getPostsIdRepliesJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.posts)[':id']['replies.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPostsIdRepliesJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.posts[':id']['replies.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.posts)[':id']['replies.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.posts)[':id']['replies.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPostsIdRepliesJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.posts)[':id']['replies.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPostsIdRepliesJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPostsIdRepliesJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.posts[':id']['replies.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['search.json']['$get']>>,
) {
  return ['search.json', '/search.json', toValue(args)] as const
}

export function getSearchJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['search.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['search.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['search.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['search.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['search.json']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['search.json']['$get']>>>
            >
          >,
          ReturnType<typeof getSearchJsonQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['search.json']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['search.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getSiteJsonQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSiteJsonQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['site.json'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSiteJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['site.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['site.json']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['site.json']['$get']>>>
            >
          >,
          ReturnType<typeof getSiteJsonQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['site.json']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSiteJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSiteJsonQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['site.json'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.t.external_id)[':external_id.json']['$get']>
  >,
) {
  return ['t', '/t/external_id/:external_id.json', toValue(args)] as const
}

export function getTExternalIdExternalIdJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.t.external_id)[':external_id.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTExternalIdExternalIdJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.t.external_id[':external_id.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.t.external_id)[':external_id.json']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.t.external_id)[':external_id.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTExternalIdExternalIdJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.t.external_id)[':external_id.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTExternalIdExternalIdJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTExternalIdExternalIdJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.t.external_id[':external_id.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTIdJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.t)[':id.json']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['t', '/t/:id.json', keyArgs] as const
}

export function getTIdJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.t)[':id.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTIdJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.t[':id.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTIdJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.t)[':id.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.t)[':id.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.t)[':id.json']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.t)[':id.json']['$get']>>>
            >
          >,
          ReturnType<typeof getTIdJsonQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.t)[':id.json']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTIdJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTIdJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.t[':id.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.t)[':id']['posts.json']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['t', '/t/:id/posts.json', keyArgs] as const
}

export function getTIdPostsJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.t)[':id']['posts.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTIdPostsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.t[':id']['posts.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTIdPostsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.t)[':id']['posts.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.t)[':id']['posts.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.t)[':id']['posts.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTIdPostsJsonQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.t)[':id']['posts.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTIdPostsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTIdPostsJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.t[':id']['posts.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tag)[':name.json']['$get']>>,
) {
  return ['tag', '/tag/:name.json', toValue(args)] as const
}

export function getTagNameJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tag)[':name.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagNameJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tag[':name.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagNameJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tag)[':name.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tag)[':name.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tag)[':name.json']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tag)[':name.json']['$get']>>>
            >
          >,
          ReturnType<typeof getTagNameJsonQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tag)[':name.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagNameJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagNameJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tag[':name.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTagGroupsJsonQueryKey() {
  return ['tag_groups.json', '/tag_groups.json'] as const
}

export function getTagGroupsJsonQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTagGroupsJsonQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['tag_groups.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['tag_groups.json']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['tag_groups.json']['$get']>>>
            >
          >,
          ReturnType<typeof getTagGroupsJsonQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['tag_groups.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagGroupsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTagGroupsJsonQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['tag_groups.json'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tag_groups)[':id.json']['$get']>>,
) {
  return ['tag_groups', '/tag_groups/:id.json', toValue(args)] as const
}

export function getTagGroupsIdJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tag_groups)[':id.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagGroupsIdJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tag_groups[':id.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagGroupsIdJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tag_groups)[':id.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tag_groups)[':id.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tag_groups)[':id.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTagGroupsIdJsonQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tag_groups)[':id.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagGroupsIdJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagGroupsIdJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tag_groups[':id.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getTagsJsonQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTagsJsonQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['tags.json'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTagsJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['tags.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['tags.json']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['tags.json']['$get']>>>
            >
          >,
          ReturnType<typeof getTagsJsonQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['tags.json']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTagsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTagsJsonQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['tags.json'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTopJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['top.json']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['top.json', '/top.json', keyArgs] as const
}

export function getTopJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['top.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTopJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['top.json'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTopJson<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['top.json']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['top.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['top.json']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['top.json']['$get']>>>
            >
          >,
          ReturnType<typeof getTopJsonQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['top.json']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTopJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTopJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['top.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTopicsPrivateMessagesSentUsernameJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.topics)['private-messages-sent'][':username.json']['$get']>
  >,
) {
  return ['topics', '/topics/private-messages-sent/:username.json', toValue(args)] as const
}

export function getTopicsPrivateMessagesSentUsernameJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.topics)['private-messages-sent'][':username.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTopicsPrivateMessagesSentUsernameJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.topics['private-messages-sent'][':username.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.topics)['private-messages-sent'][':username.json']['$get']>
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
                    (typeof client.topics)['private-messages-sent'][':username.json']['$get']
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
                    (typeof client.topics)['private-messages-sent'][':username.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTopicsPrivateMessagesSentUsernameJsonQueryKey>
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
            ReturnType<(typeof client.topics)['private-messages-sent'][':username.json']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTopicsPrivateMessagesSentUsernameJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTopicsPrivateMessagesSentUsernameJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.topics['private-messages-sent'][':username.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTopicsPrivateMessagesUsernameJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.topics)['private-messages'][':username.json']['$get']>
  >,
) {
  return ['topics', '/topics/private-messages/:username.json', toValue(args)] as const
}

export function getTopicsPrivateMessagesUsernameJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.topics)['private-messages'][':username.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTopicsPrivateMessagesUsernameJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.topics['private-messages'][':username.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.topics)['private-messages'][':username.json']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.topics)['private-messages'][':username.json']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getTopicsPrivateMessagesUsernameJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.topics)['private-messages'][':username.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTopicsPrivateMessagesUsernameJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTopicsPrivateMessagesUsernameJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.topics['private-messages'][':username.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUByExternalExternalIdJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.u)['by-external'][':external_id.json']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['u', '/u/by-external/:external_id.json', keyArgs] as const
}

export function getUByExternalExternalIdJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.u)['by-external'][':external_id.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUByExternalExternalIdJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.u['by-external'][':external_id.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.u)['by-external'][':external_id.json']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.u)['by-external'][':external_id.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUByExternalExternalIdJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.u)['by-external'][':external_id.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUByExternalExternalIdJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUByExternalExternalIdJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.u['by-external'][':external_id.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUByExternalProviderExternalIdJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.u)['by-external'][':provider'][':external_id.json']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['u', '/u/by-external/:provider/:external_id.json', keyArgs] as const
}

export function getUByExternalProviderExternalIdJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.u)['by-external'][':provider'][':external_id.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUByExternalProviderExternalIdJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.u['by-external'][':provider'][':external_id.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.u)['by-external'][':provider'][':external_id.json']['$get']>
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
                    (typeof client.u)['by-external'][':provider'][':external_id.json']['$get']
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
                    (typeof client.u)['by-external'][':provider'][':external_id.json']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getUByExternalProviderExternalIdJsonQueryKey>
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
            ReturnType<(typeof client.u)['by-external'][':provider'][':external_id.json']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUByExternalProviderExternalIdJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUByExternalProviderExternalIdJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.u['by-external'][':provider'][':external_id.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUUsernameJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.u)[':username.json']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['u', '/u/:username.json', keyArgs] as const
}

export function getUUsernameJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.u)[':username.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUUsernameJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.u[':username.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUUsernameJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.u)[':username.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.u)[':username.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.u)[':username.json']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.u)[':username.json']['$get']>>>
            >
          >,
          ReturnType<typeof getUUsernameJsonQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.u)[':username.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUUsernameJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUUsernameJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.u[':username.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.u)[':username']['emails.json']['$get']>>,
) {
  return ['u', '/u/:username/emails.json', toValue(args)] as const
}

export function getUUsernameEmailsJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.u)[':username']['emails.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUUsernameEmailsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.u[':username']['emails.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.u)[':username']['emails.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.u)[':username']['emails.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUUsernameEmailsJsonQueryKey>
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
          Awaited<ReturnType<(typeof client.u)[':username']['emails.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUUsernameEmailsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUUsernameEmailsJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.u[':username']['emails.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.uploads)['complete-external-upload.json']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.uploads)['complete-external-upload.json']['$post']>,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['user-badges'][':username.json']['$get']>
  >,
) {
  return ['user-badges', '/user-badges/:username.json', toValue(args)] as const
}

export function getUserBadgesUsernameJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['user-badges'][':username.json']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserBadgesUsernameJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['user-badges'][':username.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['user-badges'][':username.json']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['user-badges'][':username.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUserBadgesUsernameJsonQueryKey>
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
          Awaited<ReturnType<(typeof client)['user-badges'][':username.json']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserBadgesUsernameJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserBadgesUsernameJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['user-badges'][':username.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserActionsJsonQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['user_actions.json']['$get']>>,
) {
  return ['user_actions.json', '/user_actions.json', toValue(args)] as const
}

export function getUserActionsJsonQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['user_actions.json']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserActionsJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['user_actions.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserActionsJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['user_actions.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['user_actions.json']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['user_actions.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['user_actions.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUserActionsJsonQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['user_actions.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserActionsJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserActionsJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['user_actions.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
