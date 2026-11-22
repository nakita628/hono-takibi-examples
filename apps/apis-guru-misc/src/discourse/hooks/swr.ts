import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetAdminBackupsJsonKey() {
  return ['admin', '/admin/backups.json'] as const
}

export function useGetAdminBackupsJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['backups.json']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminBackupsJsonKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['backups.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['backups.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminBackupsJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['backups.json']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminBackupsJsonKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['backups.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['backups.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminBackupsJsonKey() {
  return ['admin', '/admin/backups.json', 'POST'] as const
}

export function usePostAdminBackupsJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['backups.json']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['backups.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminBackupsJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin)['backups.json']['$post']> },
      ) => parseResponse(client.admin['backups.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminBackupsFilenameKey(
  args: InferRequestType<(typeof client.admin.backups)[':filename']['$get']>,
) {
  return ['admin', '/admin/backups/:filename', args] as const
}

export function useGetAdminBackupsFilename<TError = unknown>(
  args: InferRequestType<(typeof client.admin.backups)[':filename']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.backups)[':filename']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminBackupsFilenameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.backups)[':filename']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.backups[':filename'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminBackupsFilename<TError = unknown>(
  args: InferRequestType<(typeof client.admin.backups)[':filename']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.backups)[':filename']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminBackupsFilenameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.backups)[':filename']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.backups[':filename'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAdminBackupsFilenameKey() {
  return ['admin', '/admin/backups/:filename', 'PUT'] as const
}

export function usePutAdminBackupsFilename<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.backups)[':filename']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.backups)[':filename']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAdminBackupsFilenameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin.backups)[':filename']['$put']> },
      ) => parseResponse(client.admin.backups[':filename'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminBadgesJsonKey() {
  return ['admin', '/admin/badges.json'] as const
}

export function useGetAdminBadgesJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['badges.json']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminBadgesJsonKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['badges.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['badges.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminBadgesJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['badges.json']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminBadgesJsonKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['badges.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['badges.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminBadgesJsonKey() {
  return ['admin', '/admin/badges.json', 'POST'] as const
}

export function usePostAdminBadgesJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['badges.json']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['badges.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminBadgesJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin)['badges.json']['$post']> },
      ) => parseResponse(client.admin['badges.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutAdminBadgesIdJsonKey() {
  return ['admin', '/admin/badges/:id.json', 'PUT'] as const
}

export function usePutAdminBadgesIdJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.badges)[':id.json']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.badges)[':id.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAdminBadgesIdJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin.badges)[':id.json']['$put']> },
      ) => parseResponse(client.admin.badges[':id.json'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminBadgesIdJsonKey() {
  return ['admin', '/admin/badges/:id.json', 'DELETE'] as const
}

export function useDeleteAdminBadgesIdJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.badges)[':id.json']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.badges)[':id.json']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminBadgesIdJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin.badges)[':id.json']['$delete']> },
      ) => parseResponse(client.admin.badges[':id.json'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminGroupsJsonKey() {
  return ['admin', '/admin/groups.json', 'POST'] as const
}

export function usePostAdminGroupsJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['groups.json']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['groups.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminGroupsJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin)['groups.json']['$post']> },
      ) => parseResponse(client.admin['groups.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminGroupsIdJsonKey() {
  return ['admin', '/admin/groups/:id.json', 'DELETE'] as const
}

export function useDeleteAdminGroupsIdJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.groups)[':id.json']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.groups)[':id.json']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminGroupsIdJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin.groups)[':id.json']['$delete']> },
      ) => parseResponse(client.admin.groups[':id.json'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminUsersListFlagJsonKey(
  args: InferRequestType<(typeof client.admin.users.list)[':flag.json']['$get']>,
) {
  return ['admin', '/admin/users/list/:flag.json', args] as const
}

export function useGetAdminUsersListFlagJson<TError = unknown>(
  args: InferRequestType<(typeof client.admin.users.list)[':flag.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.users.list)[':flag.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminUsersListFlagJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.users.list)[':flag.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.users.list[':flag.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminUsersListFlagJson<TError = unknown>(
  args: InferRequestType<(typeof client.admin.users.list)[':flag.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.users.list)[':flag.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminUsersListFlagJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.users.list)[':flag.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.users.list[':flag.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAdminUsersIdJsonKey(
  args: InferRequestType<(typeof client.admin.users)[':id.json']['$get']>,
) {
  return ['admin', '/admin/users/:id.json', args] as const
}

export function useGetAdminUsersIdJson<TError = unknown>(
  args: InferRequestType<(typeof client.admin.users)[':id.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.users)[':id.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminUsersIdJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.users)[':id.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.users[':id.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminUsersIdJson<TError = unknown>(
  args: InferRequestType<(typeof client.admin.users)[':id.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.users)[':id.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminUsersIdJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.users)[':id.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.users[':id.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAdminUsersIdJsonKey() {
  return ['admin', '/admin/users/:id.json', 'DELETE'] as const
}

export function useDeleteAdminUsersIdJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.users)[':id.json']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.users)[':id.json']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminUsersIdJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin.users)[':id.json']['$delete']> },
      ) => parseResponse(client.admin.users[':id.json'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutAdminUsersIdAnonymizeJsonKey() {
  return ['admin', '/admin/users/:id/anonymize.json', 'PUT'] as const
}

export function usePutAdminUsersIdAnonymizeJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.users)[':id']['anonymize.json']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.users)[':id']['anonymize.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAdminUsersIdAnonymizeJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin.users)[':id']['anonymize.json']['$put']> },
      ) => parseResponse(client.admin.users[':id']['anonymize.json'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminUsersIdLogOutJsonKey() {
  return ['admin', '/admin/users/:id/log_out.json', 'POST'] as const
}

export function usePostAdminUsersIdLogOutJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.users)[':id']['log_out.json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.users)[':id']['log_out.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminUsersIdLogOutJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin.users)[':id']['log_out.json']['$post']> },
      ) => parseResponse(client.admin.users[':id']['log_out.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutAdminUsersIdSilenceJsonKey() {
  return ['admin', '/admin/users/:id/silence.json', 'PUT'] as const
}

export function usePutAdminUsersIdSilenceJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.users)[':id']['silence.json']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.users)[':id']['silence.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAdminUsersIdSilenceJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin.users)[':id']['silence.json']['$put']> },
      ) => parseResponse(client.admin.users[':id']['silence.json'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutAdminUsersIdSuspendJsonKey() {
  return ['admin', '/admin/users/:id/suspend.json', 'PUT'] as const
}

export function usePutAdminUsersIdSuspendJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.users)[':id']['suspend.json']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.users)[':id']['suspend.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAdminUsersIdSuspendJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin.users)[':id']['suspend.json']['$put']> },
      ) => parseResponse(client.admin.users[':id']['suspend.json'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCIdShowJsonKey(
  args: InferRequestType<(typeof client.c)[':id']['show.json']['$get']>,
) {
  return ['c', '/c/:id/show.json', args] as const
}

export function useGetCIdShowJson<TError = unknown>(
  args: InferRequestType<(typeof client.c)[':id']['show.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.c)[':id']['show.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCIdShowJsonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.c)[':id']['show.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.c[':id']['show.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCIdShowJson<TError = unknown>(
  args: InferRequestType<(typeof client.c)[':id']['show.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.c)[':id']['show.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCIdShowJsonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.c)[':id']['show.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.c[':id']['show.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCSlugIdJsonKey(
  args: InferRequestType<(typeof client.c)[':slug'][':id.json']['$get']>,
) {
  return ['c', '/c/:slug/:id.json', args] as const
}

export function useGetCSlugIdJson<TError = unknown>(
  args: InferRequestType<(typeof client.c)[':slug'][':id.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.c)[':slug'][':id.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCSlugIdJsonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.c)[':slug'][':id.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.c[':slug'][':id.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCSlugIdJson<TError = unknown>(
  args: InferRequestType<(typeof client.c)[':slug'][':id.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.c)[':slug'][':id.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCSlugIdJsonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.c)[':slug'][':id.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.c[':slug'][':id.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCategoriesJsonKey(
  args: InferRequestType<(typeof client)['categories.json']['$get']>,
) {
  return ['categories.json', '/categories.json', args] as const
}

export function useGetCategoriesJson<TError = unknown>(
  args: InferRequestType<(typeof client)['categories.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['categories.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCategoriesJsonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['categories.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['categories.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCategoriesJson<TError = unknown>(
  args: InferRequestType<(typeof client)['categories.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['categories.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCategoriesJsonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['categories.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['categories.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCategoriesJsonKey() {
  return ['categories.json', '/categories.json', 'POST'] as const
}

export function usePostCategoriesJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['categories.json']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['categories.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCategoriesJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['categories.json']['$post']> },
      ) => parseResponse(client['categories.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutCategoriesIdJsonKey() {
  return ['categories', '/categories/:id.json', 'PUT'] as const
}

export function usePutCategoriesIdJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':id.json']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.categories)[':id.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCategoriesIdJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.categories)[':id.json']['$put']> },
      ) => parseResponse(client.categories[':id.json'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDirectoryItemsJsonKey(
  args: InferRequestType<(typeof client)['directory_items.json']['$get']>,
) {
  return ['directory_items.json', '/directory_items.json', args] as const
}

export function useGetDirectoryItemsJson<TError = unknown>(
  args: InferRequestType<(typeof client)['directory_items.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['directory_items.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDirectoryItemsJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['directory_items.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['directory_items.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDirectoryItemsJson<TError = unknown>(
  args: InferRequestType<(typeof client)['directory_items.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['directory_items.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDirectoryItemsJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['directory_items.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['directory_items.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGroupsJsonKey() {
  return ['groups.json', '/groups.json'] as const
}

export function useGetGroupsJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['groups.json']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGroupsJsonKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['groups.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['groups.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupsJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['groups.json']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGroupsJsonKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['groups.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['groups.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGroupsIdJsonKey(
  args: InferRequestType<(typeof client.groups)[':id.json']['$get']>,
) {
  return ['groups', '/groups/:id.json', args] as const
}

export function useGetGroupsIdJson<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':id.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGroupsIdJsonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':id.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupsIdJson<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':id.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGroupsIdJsonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':id.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutGroupsIdJsonKey() {
  return ['groups', '/groups/:id.json', 'PUT'] as const
}

export function usePutGroupsIdJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':id.json']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.groups)[':id.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGroupsIdJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.groups)[':id.json']['$put']> },
      ) => parseResponse(client.groups[':id.json'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGroupsIdMembersJsonKey(
  args: InferRequestType<(typeof client.groups)[':id']['members.json']['$get']>,
) {
  return ['groups', '/groups/:id/members.json', args] as const
}

export function useGetGroupsIdMembersJson<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':id']['members.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':id']['members.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupsIdMembersJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':id']['members.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':id']['members.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupsIdMembersJson<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':id']['members.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':id']['members.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupsIdMembersJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':id']['members.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':id']['members.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutGroupsIdMembersJsonKey() {
  return ['groups', '/groups/:id/members.json', 'PUT'] as const
}

export function usePutGroupsIdMembersJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups)[':id']['members.json']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.groups)[':id']['members.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGroupsIdMembersJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.groups)[':id']['members.json']['$put']> },
      ) => parseResponse(client.groups[':id']['members.json'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteGroupsIdMembersJsonKey() {
  return ['groups', '/groups/:id/members.json', 'DELETE'] as const
}

export function useDeleteGroupsIdMembersJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups)[':id']['members.json']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.groups)[':id']['members.json']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGroupsIdMembersJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.groups)[':id']['members.json']['$delete']> },
      ) => parseResponse(client.groups[':id']['members.json'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInvitesJsonKey() {
  return ['invites.json', '/invites.json', 'POST'] as const
}

export function usePostInvitesJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['invites.json']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['invites.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvitesJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['invites.json']['$post']> },
      ) => parseResponse(client['invites.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLatestJsonKey(
  args: InferRequestType<(typeof client)['latest.json']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['latest.json', '/latest.json', keyArgs] as const
}

export function useGetLatestJson<TError = unknown>(
  args: InferRequestType<(typeof client)['latest.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['latest.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLatestJsonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['latest.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['latest.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLatestJson<TError = unknown>(
  args: InferRequestType<(typeof client)['latest.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['latest.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLatestJsonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['latest.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['latest.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNotificationsJsonKey() {
  return ['notifications.json', '/notifications.json'] as const
}

export function useGetNotificationsJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['notifications.json']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNotificationsJsonKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['notifications.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['notifications.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationsJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['notifications.json']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNotificationsJsonKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['notifications.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['notifications.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutNotificationsMarkReadJsonKey() {
  return ['notifications', '/notifications/mark-read.json', 'PUT'] as const
}

export function usePutNotificationsMarkReadJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notifications)['mark-read.json']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.notifications)['mark-read.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNotificationsMarkReadJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.notifications)['mark-read.json']['$put']> },
      ) => parseResponse(client.notifications['mark-read.json'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPostActionsJsonKey() {
  return ['post_actions.json', '/post_actions.json', 'POST'] as const
}

export function usePostPostActionsJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['post_actions.json']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['post_actions.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPostActionsJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['post_actions.json']['$post']> },
      ) => parseResponse(client['post_actions.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPostsJsonKey(args: InferRequestType<(typeof client)['posts.json']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['posts.json', '/posts.json', keyArgs] as const
}

export function useGetPostsJson<TError = unknown>(
  args: InferRequestType<(typeof client)['posts.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['posts.json']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPostsJsonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['posts.json']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['posts.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPostsJson<TError = unknown>(
  args: InferRequestType<(typeof client)['posts.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['posts.json']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPostsJsonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['posts.json']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['posts.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPostsJsonKey() {
  return ['posts.json', '/posts.json', 'POST'] as const
}

export function usePostPostsJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['posts.json']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['posts.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPostsJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['posts.json']['$post']> }) =>
        parseResponse(client['posts.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPostsIdJsonKey(
  args: InferRequestType<(typeof client.posts)[':id.json']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['posts', '/posts/:id.json', keyArgs] as const
}

export function useGetPostsIdJson<TError = unknown>(
  args: InferRequestType<(typeof client.posts)[':id.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.posts)[':id.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPostsIdJsonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.posts)[':id.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.posts[':id.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPostsIdJson<TError = unknown>(
  args: InferRequestType<(typeof client.posts)[':id.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.posts)[':id.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPostsIdJsonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.posts)[':id.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.posts[':id.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutPostsIdJsonKey() {
  return ['posts', '/posts/:id.json', 'PUT'] as const
}

export function usePutPostsIdJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.posts)[':id.json']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.posts)[':id.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPostsIdJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.posts)[':id.json']['$put']> },
      ) => parseResponse(client.posts[':id.json'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeletePostsIdJsonKey() {
  return ['posts', '/posts/:id.json', 'DELETE'] as const
}

export function useDeletePostsIdJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.posts)[':id.json']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.posts)[':id.json']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePostsIdJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.posts)[':id.json']['$delete']> },
      ) => parseResponse(client.posts[':id.json'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutPostsIdLockedJsonKey() {
  return ['posts', '/posts/:id/locked.json', 'PUT'] as const
}

export function usePutPostsIdLockedJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.posts)[':id']['locked.json']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.posts)[':id']['locked.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPostsIdLockedJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.posts)[':id']['locked.json']['$put']> },
      ) => parseResponse(client.posts[':id']['locked.json'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPostsIdRepliesJsonKey(
  args: InferRequestType<(typeof client.posts)[':id']['replies.json']['$get']>,
) {
  return ['posts', '/posts/:id/replies.json', args] as const
}

export function useGetPostsIdRepliesJson<TError = unknown>(
  args: InferRequestType<(typeof client.posts)[':id']['replies.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.posts)[':id']['replies.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPostsIdRepliesJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.posts)[':id']['replies.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.posts[':id']['replies.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPostsIdRepliesJson<TError = unknown>(
  args: InferRequestType<(typeof client.posts)[':id']['replies.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.posts)[':id']['replies.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPostsIdRepliesJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.posts)[':id']['replies.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.posts[':id']['replies.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSearchJsonKey(
  args: InferRequestType<(typeof client)['search.json']['$get']>,
) {
  return ['search.json', '/search.json', args] as const
}

export function useGetSearchJson<TError = unknown>(
  args: InferRequestType<(typeof client)['search.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['search.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSearchJsonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['search.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['search.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchJson<TError = unknown>(
  args: InferRequestType<(typeof client)['search.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['search.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSearchJsonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['search.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['search.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSessionForgotPasswordJsonKey() {
  return ['session', '/session/forgot_password.json', 'POST'] as const
}

export function usePostSessionForgotPasswordJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.session)['forgot_password.json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.session)['forgot_password.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSessionForgotPasswordJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.session)['forgot_password.json']['$post']> },
      ) => parseResponse(client.session['forgot_password.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSiteJsonKey() {
  return ['site.json', '/site.json'] as const
}

export function useGetSiteJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['site.json']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSiteJsonKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['site.json']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['site.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSiteJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['site.json']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSiteJsonKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['site.json']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['site.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTDashIdJsonKey() {
  return ['t', '/t/-/:id.json', 'PUT'] as const
}

export function usePutTDashIdJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.t)['-'][':id.json']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.t)['-'][':id.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTDashIdJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.t)['-'][':id.json']['$put']> },
      ) => parseResponse(client.t['-'][':id.json'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTExternalIdExternalIdJsonKey(
  args: InferRequestType<(typeof client.t.external_id)[':external_id.json']['$get']>,
) {
  return ['t', '/t/external_id/:external_id.json', args] as const
}

export function useGetTExternalIdExternalIdJson<TError = unknown>(
  args: InferRequestType<(typeof client.t.external_id)[':external_id.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.t.external_id)[':external_id.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTExternalIdExternalIdJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.t.external_id)[':external_id.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.t.external_id[':external_id.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTExternalIdExternalIdJson<TError = unknown>(
  args: InferRequestType<(typeof client.t.external_id)[':external_id.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.t.external_id)[':external_id.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTExternalIdExternalIdJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.t.external_id)[':external_id.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.t.external_id[':external_id.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTIdJsonKey(args: InferRequestType<(typeof client.t)[':id.json']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['t', '/t/:id.json', keyArgs] as const
}

export function useGetTIdJson<TError = unknown>(
  args: InferRequestType<(typeof client.t)[':id.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.t)[':id.json']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTIdJsonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.t)[':id.json']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.t[':id.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTIdJson<TError = unknown>(
  args: InferRequestType<(typeof client.t)[':id.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.t)[':id.json']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTIdJsonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.t)[':id.json']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.t[':id.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteTIdJsonKey() {
  return ['t', '/t/:id.json', 'DELETE'] as const
}

export function useDeleteTIdJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.t)[':id.json']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.t)[':id.json']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTIdJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.t)[':id.json']['$delete']> },
      ) => parseResponse(client.t[':id.json'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutTIdBookmarkJsonKey() {
  return ['t', '/t/:id/bookmark.json', 'PUT'] as const
}

export function usePutTIdBookmarkJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.t)[':id']['bookmark.json']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.t)[':id']['bookmark.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTIdBookmarkJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.t)[':id']['bookmark.json']['$put']> },
      ) => parseResponse(client.t[':id']['bookmark.json'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutTIdChangeTimestampJsonKey() {
  return ['t', '/t/:id/change-timestamp.json', 'PUT'] as const
}

export function usePutTIdChangeTimestampJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.t)[':id']['change-timestamp.json']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.t)[':id']['change-timestamp.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTIdChangeTimestampJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.t)[':id']['change-timestamp.json']['$put']> },
      ) => parseResponse(client.t[':id']['change-timestamp.json'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTIdInviteJsonKey() {
  return ['t', '/t/:id/invite.json', 'POST'] as const
}

export function usePostTIdInviteJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.t)[':id']['invite.json']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.t)[':id']['invite.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTIdInviteJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.t)[':id']['invite.json']['$post']> },
      ) => parseResponse(client.t[':id']['invite.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTIdNotificationsJsonKey() {
  return ['t', '/t/:id/notifications.json', 'POST'] as const
}

export function usePostTIdNotificationsJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.t)[':id']['notifications.json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.t)[':id']['notifications.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTIdNotificationsJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.t)[':id']['notifications.json']['$post']> },
      ) => parseResponse(client.t[':id']['notifications.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTIdPostsJsonKey(
  args: InferRequestType<(typeof client.t)[':id']['posts.json']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['t', '/t/:id/posts.json', keyArgs] as const
}

export function useGetTIdPostsJson<TError = unknown>(
  args: InferRequestType<(typeof client.t)[':id']['posts.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.t)[':id']['posts.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTIdPostsJsonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.t)[':id']['posts.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.t[':id']['posts.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTIdPostsJson<TError = unknown>(
  args: InferRequestType<(typeof client.t)[':id']['posts.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.t)[':id']['posts.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTIdPostsJsonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.t)[':id']['posts.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.t[':id']['posts.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTIdStatusJsonKey() {
  return ['t', '/t/:id/status.json', 'PUT'] as const
}

export function usePutTIdStatusJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.t)[':id']['status.json']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.t)[':id']['status.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTIdStatusJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.t)[':id']['status.json']['$put']> },
      ) => parseResponse(client.t[':id']['status.json'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTIdTimerJsonKey() {
  return ['t', '/t/:id/timer.json', 'POST'] as const
}

export function usePostTIdTimerJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.t)[':id']['timer.json']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.t)[':id']['timer.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTIdTimerJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.t)[':id']['timer.json']['$post']> },
      ) => parseResponse(client.t[':id']['timer.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTagNameJsonKey(
  args: InferRequestType<(typeof client.tag)[':name.json']['$get']>,
) {
  return ['tag', '/tag/:name.json', args] as const
}

export function useGetTagNameJson<TError = unknown>(
  args: InferRequestType<(typeof client.tag)[':name.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tag)[':name.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTagNameJsonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tag)[':name.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tag[':name.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagNameJson<TError = unknown>(
  args: InferRequestType<(typeof client.tag)[':name.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tag)[':name.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTagNameJsonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tag)[':name.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tag[':name.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTagGroupsJsonKey() {
  return ['tag_groups.json', '/tag_groups.json'] as const
}

export function useGetTagGroupsJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['tag_groups.json']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTagGroupsJsonKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['tag_groups.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['tag_groups.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagGroupsJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['tag_groups.json']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTagGroupsJsonKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['tag_groups.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['tag_groups.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTagGroupsJsonKey() {
  return ['tag_groups.json', '/tag_groups.json', 'POST'] as const
}

export function usePostTagGroupsJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['tag_groups.json']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['tag_groups.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagGroupsJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['tag_groups.json']['$post']> },
      ) => parseResponse(client['tag_groups.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTagGroupsIdJsonKey(
  args: InferRequestType<(typeof client.tag_groups)[':id.json']['$get']>,
) {
  return ['tag_groups', '/tag_groups/:id.json', args] as const
}

export function useGetTagGroupsIdJson<TError = unknown>(
  args: InferRequestType<(typeof client.tag_groups)[':id.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tag_groups)[':id.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTagGroupsIdJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tag_groups)[':id.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tag_groups[':id.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagGroupsIdJson<TError = unknown>(
  args: InferRequestType<(typeof client.tag_groups)[':id.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tag_groups)[':id.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTagGroupsIdJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tag_groups)[':id.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tag_groups[':id.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTagGroupsIdJsonKey() {
  return ['tag_groups', '/tag_groups/:id.json', 'PUT'] as const
}

export function usePutTagGroupsIdJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tag_groups)[':id.json']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tag_groups)[':id.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTagGroupsIdJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tag_groups)[':id.json']['$put']> },
      ) => parseResponse(client.tag_groups[':id.json'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTagsJsonKey() {
  return ['tags.json', '/tags.json'] as const
}

export function useGetTagsJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['tags.json']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTagsJsonKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['tags.json']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['tags.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['tags.json']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTagsJsonKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['tags.json']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['tags.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTopJsonKey(args: InferRequestType<(typeof client)['top.json']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['top.json', '/top.json', keyArgs] as const
}

export function useGetTopJson<TError = unknown>(
  args: InferRequestType<(typeof client)['top.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['top.json']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTopJsonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['top.json']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['top.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTopJson<TError = unknown>(
  args: InferRequestType<(typeof client)['top.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['top.json']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTopJsonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['top.json']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['top.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTopicsPrivateMessagesSentUsernameJsonKey(
  args: InferRequestType<(typeof client.topics)['private-messages-sent'][':username.json']['$get']>,
) {
  return ['topics', '/topics/private-messages-sent/:username.json', args] as const
}

export function useGetTopicsPrivateMessagesSentUsernameJson<TError = unknown>(
  args: InferRequestType<(typeof client.topics)['private-messages-sent'][':username.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.topics)['private-messages-sent'][':username.json']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTopicsPrivateMessagesSentUsernameJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.topics)['private-messages-sent'][':username.json']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.topics['private-messages-sent'][':username.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTopicsPrivateMessagesSentUsernameJson<TError = unknown>(
  args: InferRequestType<(typeof client.topics)['private-messages-sent'][':username.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.topics)['private-messages-sent'][':username.json']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTopicsPrivateMessagesSentUsernameJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.topics)['private-messages-sent'][':username.json']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.topics['private-messages-sent'][':username.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetTopicsPrivateMessagesUsernameJsonKey(
  args: InferRequestType<(typeof client.topics)['private-messages'][':username.json']['$get']>,
) {
  return ['topics', '/topics/private-messages/:username.json', args] as const
}

export function useGetTopicsPrivateMessagesUsernameJson<TError = unknown>(
  args: InferRequestType<(typeof client.topics)['private-messages'][':username.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.topics)['private-messages'][':username.json']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTopicsPrivateMessagesUsernameJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.topics)['private-messages'][':username.json']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.topics['private-messages'][':username.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTopicsPrivateMessagesUsernameJson<TError = unknown>(
  args: InferRequestType<(typeof client.topics)['private-messages'][':username.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.topics)['private-messages'][':username.json']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTopicsPrivateMessagesUsernameJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.topics)['private-messages'][':username.json']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.topics['private-messages'][':username.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUByExternalExternalIdJsonKey(
  args: InferRequestType<(typeof client.u)['by-external'][':external_id.json']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['u', '/u/by-external/:external_id.json', keyArgs] as const
}

export function useGetUByExternalExternalIdJson<TError = unknown>(
  args: InferRequestType<(typeof client.u)['by-external'][':external_id.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.u)['by-external'][':external_id.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUByExternalExternalIdJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.u)['by-external'][':external_id.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.u['by-external'][':external_id.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUByExternalExternalIdJson<TError = unknown>(
  args: InferRequestType<(typeof client.u)['by-external'][':external_id.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.u)['by-external'][':external_id.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUByExternalExternalIdJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.u)['by-external'][':external_id.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.u['by-external'][':external_id.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUByExternalProviderExternalIdJsonKey(
  args: InferRequestType<
    (typeof client.u)['by-external'][':provider'][':external_id.json']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['u', '/u/by-external/:provider/:external_id.json', keyArgs] as const
}

export function useGetUByExternalProviderExternalIdJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.u)['by-external'][':provider'][':external_id.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.u)['by-external'][':provider'][':external_id.json']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUByExternalProviderExternalIdJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.u)['by-external'][':provider'][':external_id.json']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.u['by-external'][':provider'][':external_id.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUByExternalProviderExternalIdJson<TError = unknown>(
  args: InferRequestType<
    (typeof client.u)['by-external'][':provider'][':external_id.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.u)['by-external'][':provider'][':external_id.json']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUByExternalProviderExternalIdJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.u)['by-external'][':provider'][':external_id.json']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.u['by-external'][':provider'][':external_id.json'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetUUsernameJsonKey(
  args: InferRequestType<(typeof client.u)[':username.json']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['u', '/u/:username.json', keyArgs] as const
}

export function useGetUUsernameJson<TError = unknown>(
  args: InferRequestType<(typeof client.u)[':username.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.u)[':username.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUUsernameJsonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.u)[':username.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.u[':username.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUUsernameJson<TError = unknown>(
  args: InferRequestType<(typeof client.u)[':username.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.u)[':username.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUUsernameJsonKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.u)[':username.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.u[':username.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUUsernameJsonKey() {
  return ['u', '/u/:username.json', 'PUT'] as const
}

export function usePutUUsernameJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.u)[':username.json']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.u)[':username.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUUsernameJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.u)[':username.json']['$put']> },
      ) => parseResponse(client.u[':username.json'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUUsernameEmailsJsonKey(
  args: InferRequestType<(typeof client.u)[':username']['emails.json']['$get']>,
) {
  return ['u', '/u/:username/emails.json', args] as const
}

export function useGetUUsernameEmailsJson<TError = unknown>(
  args: InferRequestType<(typeof client.u)[':username']['emails.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.u)[':username']['emails.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUUsernameEmailsJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.u)[':username']['emails.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.u[':username']['emails.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUUsernameEmailsJson<TError = unknown>(
  args: InferRequestType<(typeof client.u)[':username']['emails.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.u)[':username']['emails.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUUsernameEmailsJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.u)[':username']['emails.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.u[':username']['emails.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUUsernamePreferencesAvatarPickJsonKey() {
  return ['u', '/u/:username/preferences/avatar/pick.json', 'PUT'] as const
}

export function usePutUUsernamePreferencesAvatarPickJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.u)[':username']['preferences']['avatar']['pick.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUUsernamePreferencesAvatarPickJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.u)[':username']['preferences']['avatar']['pick.json']['$put']
          >
        },
      ) =>
        parseResponse(
          client.u[':username'].preferences.avatar['pick.json'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutUUsernamePreferencesEmailJsonKey() {
  return ['u', '/u/:username/preferences/email.json', 'PUT'] as const
}

export function usePutUUsernamePreferencesEmailJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.u)[':username']['preferences']['email.json']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.u)[':username']['preferences']['email.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUUsernamePreferencesEmailJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.u)[':username']['preferences']['email.json']['$put']>
        },
      ) => parseResponse(client.u[':username'].preferences['email.json'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutUUsernamePreferencesUsernameJsonKey() {
  return ['u', '/u/:username/preferences/username.json', 'PUT'] as const
}

export function usePutUUsernamePreferencesUsernameJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.u)[':username']['preferences']['username.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUUsernamePreferencesUsernameJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.u)[':username']['preferences']['username.json']['$put']
          >
        },
      ) =>
        parseResponse(client.u[':username'].preferences['username.json'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUploadsJsonKey() {
  return ['uploads.json', '/uploads.json', 'POST'] as const
}

export function usePostUploadsJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['uploads.json']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['uploads.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUploadsJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['uploads.json']['$post']> },
      ) => parseResponse(client['uploads.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUploadsAbortMultipartJsonKey() {
  return ['uploads', '/uploads/abort-multipart.json', 'POST'] as const
}

export function usePostUploadsAbortMultipartJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.uploads)['abort-multipart.json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.uploads)['abort-multipart.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUploadsAbortMultipartJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.uploads)['abort-multipart.json']['$post']> },
      ) => parseResponse(client.uploads['abort-multipart.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUploadsBatchPresignMultipartPartsJsonKey() {
  return ['uploads', '/uploads/batch-presign-multipart-parts.json', 'POST'] as const
}

export function usePostUploadsBatchPresignMultipartPartsJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.uploads)['batch-presign-multipart-parts.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUploadsBatchPresignMultipartPartsJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.uploads)['batch-presign-multipart-parts.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client.uploads['batch-presign-multipart-parts.json'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostUploadsCompleteExternalUploadJsonKey() {
  return ['uploads', '/uploads/complete-external-upload.json', 'POST'] as const
}

export function usePostUploadsCompleteExternalUploadJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.uploads)['complete-external-upload.json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.uploads)['complete-external-upload.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUploadsCompleteExternalUploadJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.uploads)['complete-external-upload.json']['$post']>
        },
      ) => parseResponse(client.uploads['complete-external-upload.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUploadsCompleteMultipartJsonKey() {
  return ['uploads', '/uploads/complete-multipart.json', 'POST'] as const
}

export function usePostUploadsCompleteMultipartJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.uploads)['complete-multipart.json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.uploads)['complete-multipart.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUploadsCompleteMultipartJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.uploads)['complete-multipart.json']['$post']> },
      ) => parseResponse(client.uploads['complete-multipart.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUploadsCreateMultipartJsonKey() {
  return ['uploads', '/uploads/create-multipart.json', 'POST'] as const
}

export function usePostUploadsCreateMultipartJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.uploads)['create-multipart.json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.uploads)['create-multipart.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUploadsCreateMultipartJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.uploads)['create-multipart.json']['$post']> },
      ) => parseResponse(client.uploads['create-multipart.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUploadsGeneratePresignedPutJsonKey() {
  return ['uploads', '/uploads/generate-presigned-put.json', 'POST'] as const
}

export function usePostUploadsGeneratePresignedPutJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.uploads)['generate-presigned-put.json']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.uploads)['generate-presigned-put.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUploadsGeneratePresignedPutJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.uploads)['generate-presigned-put.json']['$post']>
        },
      ) => parseResponse(client.uploads['generate-presigned-put.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserBadgesUsernameJsonKey(
  args: InferRequestType<(typeof client)['user-badges'][':username.json']['$get']>,
) {
  return ['user-badges', '/user-badges/:username.json', args] as const
}

export function useGetUserBadgesUsernameJson<TError = unknown>(
  args: InferRequestType<(typeof client)['user-badges'][':username.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['user-badges'][':username.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserBadgesUsernameJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['user-badges'][':username.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['user-badges'][':username.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserBadgesUsernameJson<TError = unknown>(
  args: InferRequestType<(typeof client)['user-badges'][':username.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['user-badges'][':username.json']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserBadgesUsernameJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['user-badges'][':username.json']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['user-badges'][':username.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserActionsJsonKey(
  args: InferRequestType<(typeof client)['user_actions.json']['$get']>,
) {
  return ['user_actions.json', '/user_actions.json', args] as const
}

export function useGetUserActionsJson<TError = unknown>(
  args: InferRequestType<(typeof client)['user_actions.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['user_actions.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserActionsJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['user_actions.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['user_actions.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserActionsJson<TError = unknown>(
  args: InferRequestType<(typeof client)['user_actions.json']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['user_actions.json']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUserActionsJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['user_actions.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['user_actions.json'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUserAvatarUsernameRefreshGravatarJsonKey() {
  return ['user_avatar', '/user_avatar/:username/refresh_gravatar.json', 'POST'] as const
}

export function usePostUserAvatarUsernameRefreshGravatarJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.user_avatar)[':username']['refresh_gravatar.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserAvatarUsernameRefreshGravatarJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.user_avatar)[':username']['refresh_gravatar.json']['$post']
          >
        },
      ) =>
        parseResponse(
          client.user_avatar[':username']['refresh_gravatar.json'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostUsersJsonKey() {
  return ['users.json', '/users.json', 'POST'] as const
}

export function usePostUsersJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['users.json']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['users.json']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['users.json']['$post']> }) =>
        parseResponse(client['users.json'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutUsersPasswordResetTokenJsonKey() {
  return ['users', '/users/password-reset/:token.json', 'PUT'] as const
}

export function usePutUsersPasswordResetTokenJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)['password-reset'][':token.json']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)['password-reset'][':token.json']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUsersPasswordResetTokenJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.users)['password-reset'][':token.json']['$put']>
        },
      ) => parseResponse(client.users['password-reset'][':token.json'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
