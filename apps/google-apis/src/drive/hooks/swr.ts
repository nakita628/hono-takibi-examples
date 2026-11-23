import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAboutKey() {
  return ['about'] as const
}

export function getChangesKey() {
  return ['changes'] as const
}

export function getChannelsKey() {
  return ['channels'] as const
}

export function getDrivesKey() {
  return ['drives'] as const
}

export function getFilesKey() {
  return ['files'] as const
}

export function getTeamdrivesKey() {
  return ['teamdrives'] as const
}

export function getGetAboutKey(args: InferRequestType<typeof client.about.$get>) {
  return ['about', '/about', args] as const
}

export function useGetAbout<TError = unknown>(
  args: InferRequestType<typeof client.about.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.about.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAboutKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.about.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.about.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetAbout<TError = unknown>(
  args: InferRequestType<typeof client.about.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.about.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAboutKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.about.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.about.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetChangesKey(args: InferRequestType<typeof client.changes.$get>) {
  return ['changes', '/changes', args] as const
}

export function useGetChanges<TError = unknown>(
  args: InferRequestType<typeof client.changes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChangesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changes.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.changes.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetChanges<TError = unknown>(
  args: InferRequestType<typeof client.changes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChangesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changes.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.changes.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetChangesStartPageTokenKey(
  args: InferRequestType<typeof client.changes.startPageToken.$get>,
) {
  return ['changes', '/changes/startPageToken', args] as const
}

export function useGetChangesStartPageToken<TError = unknown>(
  args: InferRequestType<typeof client.changes.startPageToken.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.changes.startPageToken.$get>>>
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
        ? getGetChangesStartPageTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.changes.startPageToken.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.changes.startPageToken.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChangesStartPageToken<TError = unknown>(
  args: InferRequestType<typeof client.changes.startPageToken.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.changes.startPageToken.$get>>>
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
        ? getGetChangesStartPageTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.changes.startPageToken.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.changes.startPageToken.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostChangesWatchKey() {
  return ['changes', '/changes/watch', 'POST'] as const
}

export function usePostChangesWatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changes.watch.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.changes.watch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChangesWatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.changes.watch.$post> }) =>
        parseResponse(client.changes.watch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostChannelsStopKey() {
  return ['channels', '/channels/stop', 'POST'] as const
}

export function usePostChannelsStop<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.stop.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.channels.stop.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChannelsStopKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.channels.stop.$post> }) =>
        parseResponse(client.channels.stop.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDrivesKey(args: InferRequestType<typeof client.drives.$get>) {
  return ['drives', '/drives', args] as const
}

export function useGetDrives<TError = unknown>(
  args: InferRequestType<typeof client.drives.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drives.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDrivesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drives.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.drives.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetDrives<TError = unknown>(
  args: InferRequestType<typeof client.drives.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drives.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDrivesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drives.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.drives.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostDrivesKey() {
  return ['drives', '/drives', 'POST'] as const
}

export function usePostDrives<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drives.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.drives.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDrivesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.drives.$post> }) =>
        parseResponse(client.drives.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDrivesDriveIdKey(
  args: InferRequestType<(typeof client.drives)[':driveId']['$get']>,
) {
  return ['drives', '/drives/:driveId', args] as const
}

export function useGetDrivesDriveId<TError = unknown>(
  args: InferRequestType<(typeof client.drives)[':driveId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.drives)[':driveId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetDrivesDriveIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.drives)[':driveId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.drives[':driveId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDrivesDriveId<TError = unknown>(
  args: InferRequestType<(typeof client.drives)[':driveId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.drives)[':driveId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetDrivesDriveIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.drives)[':driveId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.drives[':driveId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteDrivesDriveIdKey() {
  return ['drives', '/drives/:driveId', 'DELETE'] as const
}

export function useDeleteDrivesDriveId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.drives)[':driveId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.drives)[':driveId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDrivesDriveIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.drives)[':driveId']['$delete']> },
      ) => parseResponse(client.drives[':driveId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchDrivesDriveIdKey() {
  return ['drives', '/drives/:driveId', 'PATCH'] as const
}

export function usePatchDrivesDriveId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.drives)[':driveId']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.drives)[':driveId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDrivesDriveIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.drives)[':driveId']['$patch']> },
      ) => parseResponse(client.drives[':driveId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDrivesDriveIdHideKey() {
  return ['drives', '/drives/:driveId/hide', 'POST'] as const
}

export function usePostDrivesDriveIdHide<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.drives)[':driveId']['hide']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.drives)[':driveId']['hide']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDrivesDriveIdHideKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.drives)[':driveId']['hide']['$post']> },
      ) => parseResponse(client.drives[':driveId'].hide.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDrivesDriveIdUnhideKey() {
  return ['drives', '/drives/:driveId/unhide', 'POST'] as const
}

export function usePostDrivesDriveIdUnhide<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.drives)[':driveId']['unhide']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.drives)[':driveId']['unhide']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDrivesDriveIdUnhideKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.drives)[':driveId']['unhide']['$post']> },
      ) => parseResponse(client.drives[':driveId'].unhide.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFilesKey(args: InferRequestType<typeof client.files.$get>) {
  return ['files', '/files', args] as const
}

export function useGetFiles<TError = unknown>(
  args: InferRequestType<typeof client.files.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFilesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.files.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetFiles<TError = unknown>(
  args: InferRequestType<typeof client.files.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFilesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.files.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostFilesKey() {
  return ['files', '/files', 'POST'] as const
}

export function usePostFiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.files.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFilesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.files.$post> }) =>
        parseResponse(client.files.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFilesGenerateIdsKey(
  args: InferRequestType<typeof client.files.generateIds.$get>,
) {
  return ['files', '/files/generateIds', args] as const
}

export function useGetFilesGenerateIds<TError = unknown>(
  args: InferRequestType<typeof client.files.generateIds.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.generateIds.$get>>>>
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
        ? getGetFilesGenerateIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.generateIds.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.files.generateIds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFilesGenerateIds<TError = unknown>(
  args: InferRequestType<typeof client.files.generateIds.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.generateIds.$get>>>>
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
        ? getGetFilesGenerateIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.generateIds.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.files.generateIds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteFilesTrashKey() {
  return ['files', '/files/trash', 'DELETE'] as const
}

export function useDeleteFilesTrash<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.trash.$delete>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.files.trash.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFilesTrashKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.files.trash.$delete> }) =>
        parseResponse(client.files.trash.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFilesFileIdKey(
  args: InferRequestType<(typeof client.files)[':fileId']['$get']>,
) {
  return ['files', '/files/:fileId', args] as const
}

export function useGetFilesFileId<TError = unknown>(
  args: InferRequestType<(typeof client.files)[':fileId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':fileId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetFilesFileIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':fileId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.files[':fileId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFilesFileId<TError = unknown>(
  args: InferRequestType<(typeof client.files)[':fileId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':fileId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetFilesFileIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':fileId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.files[':fileId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteFilesFileIdKey() {
  return ['files', '/files/:fileId', 'DELETE'] as const
}

export function useDeleteFilesFileId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':fileId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.files)[':fileId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFilesFileIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.files)[':fileId']['$delete']> },
      ) => parseResponse(client.files[':fileId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchFilesFileIdKey() {
  return ['files', '/files/:fileId', 'PATCH'] as const
}

export function usePatchFilesFileId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':fileId']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.files)[':fileId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchFilesFileIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.files)[':fileId']['$patch']> },
      ) => parseResponse(client.files[':fileId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFilesFileIdCommentsKey(
  args: InferRequestType<(typeof client.files)[':fileId']['comments']['$get']>,
) {
  return ['files', '/files/:fileId/comments', args] as const
}

export function useGetFilesFileIdComments<TError = unknown>(
  args: InferRequestType<(typeof client.files)[':fileId']['comments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':fileId']['comments']['$get']>>
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
        ? getGetFilesFileIdCommentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':fileId']['comments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.files[':fileId'].comments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFilesFileIdComments<TError = unknown>(
  args: InferRequestType<(typeof client.files)[':fileId']['comments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':fileId']['comments']['$get']>>
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
        ? getGetFilesFileIdCommentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':fileId']['comments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.files[':fileId'].comments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostFilesFileIdCommentsKey() {
  return ['files', '/files/:fileId/comments', 'POST'] as const
}

export function usePostFilesFileIdComments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.files)[':fileId']['comments']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.files)[':fileId']['comments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFilesFileIdCommentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.files)[':fileId']['comments']['$post']> },
      ) => parseResponse(client.files[':fileId'].comments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFilesFileIdCommentsCommentIdKey(
  args: InferRequestType<(typeof client.files)[':fileId']['comments'][':commentId']['$get']>,
) {
  return ['files', '/files/:fileId/comments/:commentId', args] as const
}

export function useGetFilesFileIdCommentsCommentId<TError = unknown>(
  args: InferRequestType<(typeof client.files)[':fileId']['comments'][':commentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':fileId']['comments'][':commentId']['$get']>>
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
        ? getGetFilesFileIdCommentsCommentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':fileId']['comments'][':commentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.files[':fileId'].comments[':commentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFilesFileIdCommentsCommentId<TError = unknown>(
  args: InferRequestType<(typeof client.files)[':fileId']['comments'][':commentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':fileId']['comments'][':commentId']['$get']>>
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
        ? getGetFilesFileIdCommentsCommentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':fileId']['comments'][':commentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.files[':fileId'].comments[':commentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteFilesFileIdCommentsCommentIdKey() {
  return ['files', '/files/:fileId/comments/:commentId', 'DELETE'] as const
}

export function useDeleteFilesFileIdCommentsCommentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.files)[':fileId']['comments'][':commentId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.files)[':fileId']['comments'][':commentId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFilesFileIdCommentsCommentIdKey()
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
            (typeof client.files)[':fileId']['comments'][':commentId']['$delete']
          >
        },
      ) =>
        parseResponse(client.files[':fileId'].comments[':commentId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchFilesFileIdCommentsCommentIdKey() {
  return ['files', '/files/:fileId/comments/:commentId', 'PATCH'] as const
}

export function usePatchFilesFileIdCommentsCommentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.files)[':fileId']['comments'][':commentId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.files)[':fileId']['comments'][':commentId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchFilesFileIdCommentsCommentIdKey()
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
            (typeof client.files)[':fileId']['comments'][':commentId']['$patch']
          >
        },
      ) => parseResponse(client.files[':fileId'].comments[':commentId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFilesFileIdCommentsCommentIdRepliesKey(
  args: InferRequestType<
    (typeof client.files)[':fileId']['comments'][':commentId']['replies']['$get']
  >,
) {
  return ['files', '/files/:fileId/comments/:commentId/replies', args] as const
}

export function useGetFilesFileIdCommentsCommentIdReplies<TError = unknown>(
  args: InferRequestType<
    (typeof client.files)[':fileId']['comments'][':commentId']['replies']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.files)[':fileId']['comments'][':commentId']['replies']['$get']
              >
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
        ? getGetFilesFileIdCommentsCommentIdRepliesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.files)[':fileId']['comments'][':commentId']['replies']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.files[':fileId'].comments[':commentId'].replies.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFilesFileIdCommentsCommentIdReplies<TError = unknown>(
  args: InferRequestType<
    (typeof client.files)[':fileId']['comments'][':commentId']['replies']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.files)[':fileId']['comments'][':commentId']['replies']['$get']
              >
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
        ? getGetFilesFileIdCommentsCommentIdRepliesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.files)[':fileId']['comments'][':commentId']['replies']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.files[':fileId'].comments[':commentId'].replies.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostFilesFileIdCommentsCommentIdRepliesKey() {
  return ['files', '/files/:fileId/comments/:commentId/replies', 'POST'] as const
}

export function usePostFilesFileIdCommentsCommentIdReplies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.files)[':fileId']['comments'][':commentId']['replies']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.files)[':fileId']['comments'][':commentId']['replies']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFilesFileIdCommentsCommentIdRepliesKey()
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
            (typeof client.files)[':fileId']['comments'][':commentId']['replies']['$post']
          >
        },
      ) =>
        parseResponse(
          client.files[':fileId'].comments[':commentId'].replies.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetFilesFileIdCommentsCommentIdRepliesReplyIdKey(
  args: InferRequestType<
    (typeof client.files)[':fileId']['comments'][':commentId']['replies'][':replyId']['$get']
  >,
) {
  return ['files', '/files/:fileId/comments/:commentId/replies/:replyId', args] as const
}

export function useGetFilesFileIdCommentsCommentIdRepliesReplyId<TError = unknown>(
  args: InferRequestType<
    (typeof client.files)[':fileId']['comments'][':commentId']['replies'][':replyId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.files)[':fileId']['comments'][':commentId']['replies'][':replyId']['$get']
              >
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
        ? getGetFilesFileIdCommentsCommentIdRepliesReplyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.files)[':fileId']['comments'][':commentId']['replies'][':replyId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.files[':fileId'].comments[':commentId'].replies[':replyId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFilesFileIdCommentsCommentIdRepliesReplyId<TError = unknown>(
  args: InferRequestType<
    (typeof client.files)[':fileId']['comments'][':commentId']['replies'][':replyId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.files)[':fileId']['comments'][':commentId']['replies'][':replyId']['$get']
              >
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
        ? getGetFilesFileIdCommentsCommentIdRepliesReplyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.files)[':fileId']['comments'][':commentId']['replies'][':replyId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.files[':fileId'].comments[':commentId'].replies[':replyId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteFilesFileIdCommentsCommentIdRepliesReplyIdKey() {
  return ['files', '/files/:fileId/comments/:commentId/replies/:replyId', 'DELETE'] as const
}

export function useDeleteFilesFileIdCommentsCommentIdRepliesReplyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.files)[':fileId']['comments'][':commentId']['replies'][':replyId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.files)[':fileId']['comments'][':commentId']['replies'][':replyId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFilesFileIdCommentsCommentIdRepliesReplyIdKey()
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
            (typeof client.files)[':fileId']['comments'][':commentId']['replies'][':replyId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.files[':fileId'].comments[':commentId'].replies[':replyId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchFilesFileIdCommentsCommentIdRepliesReplyIdKey() {
  return ['files', '/files/:fileId/comments/:commentId/replies/:replyId', 'PATCH'] as const
}

export function usePatchFilesFileIdCommentsCommentIdRepliesReplyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.files)[':fileId']['comments'][':commentId']['replies'][':replyId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.files)[':fileId']['comments'][':commentId']['replies'][':replyId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchFilesFileIdCommentsCommentIdRepliesReplyIdKey()
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
            (typeof client.files)[':fileId']['comments'][':commentId']['replies'][':replyId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.files[':fileId'].comments[':commentId'].replies[':replyId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostFilesFileIdCopyKey() {
  return ['files', '/files/:fileId/copy', 'POST'] as const
}

export function usePostFilesFileIdCopy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':fileId']['copy']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.files)[':fileId']['copy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFilesFileIdCopyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.files)[':fileId']['copy']['$post']> },
      ) => parseResponse(client.files[':fileId'].copy.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFilesFileIdExportKey(
  args: InferRequestType<(typeof client.files)[':fileId']['export']['$get']>,
) {
  return ['files', '/files/:fileId/export', args] as const
}

export function useGetFilesFileIdExport<TError = unknown>(
  args: InferRequestType<(typeof client.files)[':fileId']['export']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':fileId']['export']['$get']>>
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
        ? getGetFilesFileIdExportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':fileId']['export']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.files[':fileId'].export.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFilesFileIdExport<TError = unknown>(
  args: InferRequestType<(typeof client.files)[':fileId']['export']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':fileId']['export']['$get']>>
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
        ? getGetFilesFileIdExportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':fileId']['export']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.files[':fileId'].export.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFilesFileIdListLabelsKey(
  args: InferRequestType<(typeof client.files)[':fileId']['listLabels']['$get']>,
) {
  return ['files', '/files/:fileId/listLabels', args] as const
}

export function useGetFilesFileIdListLabels<TError = unknown>(
  args: InferRequestType<(typeof client.files)[':fileId']['listLabels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':fileId']['listLabels']['$get']>>
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
        ? getGetFilesFileIdListLabelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':fileId']['listLabels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.files[':fileId'].listLabels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFilesFileIdListLabels<TError = unknown>(
  args: InferRequestType<(typeof client.files)[':fileId']['listLabels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':fileId']['listLabels']['$get']>>
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
        ? getGetFilesFileIdListLabelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':fileId']['listLabels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.files[':fileId'].listLabels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostFilesFileIdModifyLabelsKey() {
  return ['files', '/files/:fileId/modifyLabels', 'POST'] as const
}

export function usePostFilesFileIdModifyLabels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.files)[':fileId']['modifyLabels']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.files)[':fileId']['modifyLabels']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFilesFileIdModifyLabelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.files)[':fileId']['modifyLabels']['$post']> },
      ) => parseResponse(client.files[':fileId'].modifyLabels.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFilesFileIdPermissionsKey(
  args: InferRequestType<(typeof client.files)[':fileId']['permissions']['$get']>,
) {
  return ['files', '/files/:fileId/permissions', args] as const
}

export function useGetFilesFileIdPermissions<TError = unknown>(
  args: InferRequestType<(typeof client.files)[':fileId']['permissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':fileId']['permissions']['$get']>>
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
        ? getGetFilesFileIdPermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':fileId']['permissions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.files[':fileId'].permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFilesFileIdPermissions<TError = unknown>(
  args: InferRequestType<(typeof client.files)[':fileId']['permissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':fileId']['permissions']['$get']>>
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
        ? getGetFilesFileIdPermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':fileId']['permissions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.files[':fileId'].permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostFilesFileIdPermissionsKey() {
  return ['files', '/files/:fileId/permissions', 'POST'] as const
}

export function usePostFilesFileIdPermissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.files)[':fileId']['permissions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.files)[':fileId']['permissions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFilesFileIdPermissionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.files)[':fileId']['permissions']['$post']> },
      ) => parseResponse(client.files[':fileId'].permissions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFilesFileIdPermissionsPermissionIdKey(
  args: InferRequestType<(typeof client.files)[':fileId']['permissions'][':permissionId']['$get']>,
) {
  return ['files', '/files/:fileId/permissions/:permissionId', args] as const
}

export function useGetFilesFileIdPermissionsPermissionId<TError = unknown>(
  args: InferRequestType<(typeof client.files)[':fileId']['permissions'][':permissionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.files)[':fileId']['permissions'][':permissionId']['$get']>
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
        ? getGetFilesFileIdPermissionsPermissionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.files)[':fileId']['permissions'][':permissionId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.files[':fileId'].permissions[':permissionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFilesFileIdPermissionsPermissionId<TError = unknown>(
  args: InferRequestType<(typeof client.files)[':fileId']['permissions'][':permissionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.files)[':fileId']['permissions'][':permissionId']['$get']>
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
        ? getGetFilesFileIdPermissionsPermissionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.files)[':fileId']['permissions'][':permissionId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.files[':fileId'].permissions[':permissionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteFilesFileIdPermissionsPermissionIdKey() {
  return ['files', '/files/:fileId/permissions/:permissionId', 'DELETE'] as const
}

export function useDeleteFilesFileIdPermissionsPermissionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.files)[':fileId']['permissions'][':permissionId']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.files)[':fileId']['permissions'][':permissionId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFilesFileIdPermissionsPermissionIdKey()
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
            (typeof client.files)[':fileId']['permissions'][':permissionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.files[':fileId'].permissions[':permissionId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchFilesFileIdPermissionsPermissionIdKey() {
  return ['files', '/files/:fileId/permissions/:permissionId', 'PATCH'] as const
}

export function usePatchFilesFileIdPermissionsPermissionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.files)[':fileId']['permissions'][':permissionId']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.files)[':fileId']['permissions'][':permissionId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchFilesFileIdPermissionsPermissionIdKey()
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
            (typeof client.files)[':fileId']['permissions'][':permissionId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.files[':fileId'].permissions[':permissionId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetFilesFileIdRevisionsKey(
  args: InferRequestType<(typeof client.files)[':fileId']['revisions']['$get']>,
) {
  return ['files', '/files/:fileId/revisions', args] as const
}

export function useGetFilesFileIdRevisions<TError = unknown>(
  args: InferRequestType<(typeof client.files)[':fileId']['revisions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':fileId']['revisions']['$get']>>
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
        ? getGetFilesFileIdRevisionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':fileId']['revisions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.files[':fileId'].revisions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFilesFileIdRevisions<TError = unknown>(
  args: InferRequestType<(typeof client.files)[':fileId']['revisions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':fileId']['revisions']['$get']>>
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
        ? getGetFilesFileIdRevisionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':fileId']['revisions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.files[':fileId'].revisions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFilesFileIdRevisionsRevisionIdKey(
  args: InferRequestType<(typeof client.files)[':fileId']['revisions'][':revisionId']['$get']>,
) {
  return ['files', '/files/:fileId/revisions/:revisionId', args] as const
}

export function useGetFilesFileIdRevisionsRevisionId<TError = unknown>(
  args: InferRequestType<(typeof client.files)[':fileId']['revisions'][':revisionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.files)[':fileId']['revisions'][':revisionId']['$get']>
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
        ? getGetFilesFileIdRevisionsRevisionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.files)[':fileId']['revisions'][':revisionId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.files[':fileId'].revisions[':revisionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFilesFileIdRevisionsRevisionId<TError = unknown>(
  args: InferRequestType<(typeof client.files)[':fileId']['revisions'][':revisionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.files)[':fileId']['revisions'][':revisionId']['$get']>
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
        ? getGetFilesFileIdRevisionsRevisionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.files)[':fileId']['revisions'][':revisionId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.files[':fileId'].revisions[':revisionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteFilesFileIdRevisionsRevisionIdKey() {
  return ['files', '/files/:fileId/revisions/:revisionId', 'DELETE'] as const
}

export function useDeleteFilesFileIdRevisionsRevisionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.files)[':fileId']['revisions'][':revisionId']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.files)[':fileId']['revisions'][':revisionId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFilesFileIdRevisionsRevisionIdKey()
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
            (typeof client.files)[':fileId']['revisions'][':revisionId']['$delete']
          >
        },
      ) =>
        parseResponse(client.files[':fileId'].revisions[':revisionId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchFilesFileIdRevisionsRevisionIdKey() {
  return ['files', '/files/:fileId/revisions/:revisionId', 'PATCH'] as const
}

export function usePatchFilesFileIdRevisionsRevisionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.files)[':fileId']['revisions'][':revisionId']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.files)[':fileId']['revisions'][':revisionId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchFilesFileIdRevisionsRevisionIdKey()
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
            (typeof client.files)[':fileId']['revisions'][':revisionId']['$patch']
          >
        },
      ) =>
        parseResponse(client.files[':fileId'].revisions[':revisionId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFilesFileIdWatchKey() {
  return ['files', '/files/:fileId/watch', 'POST'] as const
}

export function usePostFilesFileIdWatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.files)[':fileId']['watch']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.files)[':fileId']['watch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFilesFileIdWatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.files)[':fileId']['watch']['$post']> },
      ) => parseResponse(client.files[':fileId'].watch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTeamdrivesKey(args: InferRequestType<typeof client.teamdrives.$get>) {
  return ['teamdrives', '/teamdrives', args] as const
}

export function useGetTeamdrives<TError = unknown>(
  args: InferRequestType<typeof client.teamdrives.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teamdrives.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTeamdrivesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teamdrives.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teamdrives.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamdrives<TError = unknown>(
  args: InferRequestType<typeof client.teamdrives.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teamdrives.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTeamdrivesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teamdrives.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teamdrives.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTeamdrivesKey() {
  return ['teamdrives', '/teamdrives', 'POST'] as const
}

export function usePostTeamdrives<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teamdrives.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.teamdrives.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTeamdrivesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.teamdrives.$post> }) =>
        parseResponse(client.teamdrives.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTeamdrivesTeamDriveIdKey(
  args: InferRequestType<(typeof client.teamdrives)[':teamDriveId']['$get']>,
) {
  return ['teamdrives', '/teamdrives/:teamDriveId', args] as const
}

export function useGetTeamdrivesTeamDriveId<TError = unknown>(
  args: InferRequestType<(typeof client.teamdrives)[':teamDriveId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teamdrives)[':teamDriveId']['$get']>>
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
        ? getGetTeamdrivesTeamDriveIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teamdrives)[':teamDriveId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teamdrives[':teamDriveId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamdrivesTeamDriveId<TError = unknown>(
  args: InferRequestType<(typeof client.teamdrives)[':teamDriveId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teamdrives)[':teamDriveId']['$get']>>
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
        ? getGetTeamdrivesTeamDriveIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teamdrives)[':teamDriveId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teamdrives[':teamDriveId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteTeamdrivesTeamDriveIdKey() {
  return ['teamdrives', '/teamdrives/:teamDriveId', 'DELETE'] as const
}

export function useDeleteTeamdrivesTeamDriveId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.teamdrives)[':teamDriveId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.teamdrives)[':teamDriveId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTeamdrivesTeamDriveIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.teamdrives)[':teamDriveId']['$delete']> },
      ) => parseResponse(client.teamdrives[':teamDriveId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchTeamdrivesTeamDriveIdKey() {
  return ['teamdrives', '/teamdrives/:teamDriveId', 'PATCH'] as const
}

export function usePatchTeamdrivesTeamDriveId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.teamdrives)[':teamDriveId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.teamdrives)[':teamDriveId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchTeamdrivesTeamDriveIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.teamdrives)[':teamDriveId']['$patch']> },
      ) => parseResponse(client.teamdrives[':teamDriveId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
