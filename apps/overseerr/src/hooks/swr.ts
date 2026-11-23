import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAuthKey() {
  return ['auth'] as const
}

export function getBackdropsKey() {
  return ['backdrops'] as const
}

export function getCollectionKey() {
  return ['collection'] as const
}

export function getDiscoverKey() {
  return ['discover'] as const
}

export function getGenresKey() {
  return ['genres'] as const
}

export function getIssueKey() {
  return ['issue'] as const
}

export function getIssueCommentKey() {
  return ['issueComment'] as const
}

export function getKeywordKey() {
  return ['keyword'] as const
}

export function getLanguagesKey() {
  return ['languages'] as const
}

export function getMediaKey() {
  return ['media'] as const
}

export function getMovieKey() {
  return ['movie'] as const
}

export function getNetworkKey() {
  return ['network'] as const
}

export function getPersonKey() {
  return ['person'] as const
}

export function getRegionsKey() {
  return ['regions'] as const
}

export function getRequestKey() {
  return ['request'] as const
}

export function getSearchKey() {
  return ['search'] as const
}

export function getServiceKey() {
  return ['service'] as const
}

export function getSettingsKey() {
  return ['settings'] as const
}

export function getStatusKey() {
  return ['status'] as const
}

export function getStudioKey() {
  return ['studio'] as const
}

export function getTvKey() {
  return ['tv'] as const
}

export function getUserKey() {
  return ['user'] as const
}

export function getWatchprovidersKey() {
  return ['watchproviders'] as const
}

export function getGetStatusKey() {
  return ['status', '/status'] as const
}

export function useGetStatus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatusKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.status.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatusKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.status.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatusAppdataKey() {
  return ['status', '/status/appdata'] as const
}

export function useGetStatusAppdata<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.appdata.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatusAppdataKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.appdata.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.status.appdata.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatusAppdata<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.appdata.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatusAppdataKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.appdata.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.status.appdata.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSettingsMainKey() {
  return ['settings', '/settings/main'] as const
}

export function useGetSettingsMain<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.main.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSettingsMainKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.main.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.settings.main.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSettingsMain<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.main.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSettingsMainKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.main.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.settings.main.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSettingsMainKey() {
  return ['settings', '/settings/main', 'POST'] as const
}

export function usePostSettingsMain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.main.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.settings.main.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSettingsMainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.settings.main.$post> }) =>
        parseResponse(client.settings.main.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSettingsMainRegenerateKey() {
  return ['settings', '/settings/main/regenerate', 'POST'] as const
}

export function usePostSettingsMainRegenerate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.main.regenerate.$post>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSettingsMainRegenerateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.settings.main.regenerate.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSettingsPlexKey() {
  return ['settings', '/settings/plex'] as const
}

export function useGetSettingsPlex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.plex.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSettingsPlexKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.plex.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.settings.plex.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSettingsPlex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.plex.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSettingsPlexKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.plex.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.settings.plex.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSettingsPlexKey() {
  return ['settings', '/settings/plex', 'POST'] as const
}

export function usePostSettingsPlex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.plex.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.settings.plex.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSettingsPlexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.settings.plex.$post> }) =>
        parseResponse(client.settings.plex.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSettingsPlexLibraryKey(
  args: InferRequestType<typeof client.settings.plex.library.$get>,
) {
  return ['settings', '/settings/plex/library', args] as const
}

export function useGetSettingsPlexLibrary<TError = unknown>(
  args: InferRequestType<typeof client.settings.plex.library.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.settings.plex.library.$get>>>
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
        ? getGetSettingsPlexLibraryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.settings.plex.library.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.settings.plex.library.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSettingsPlexLibrary<TError = unknown>(
  args: InferRequestType<typeof client.settings.plex.library.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.settings.plex.library.$get>>>
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
        ? getGetSettingsPlexLibraryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.settings.plex.library.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.settings.plex.library.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSettingsPlexSyncKey() {
  return ['settings', '/settings/plex/sync'] as const
}

export function useGetSettingsPlexSync<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.plex.sync.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSettingsPlexSyncKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.plex.sync.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.settings.plex.sync.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSettingsPlexSync<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.plex.sync.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSettingsPlexSyncKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.plex.sync.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.settings.plex.sync.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSettingsPlexSyncKey() {
  return ['settings', '/settings/plex/sync', 'POST'] as const
}

export function usePostSettingsPlexSync<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.plex.sync.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.settings.plex.sync.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSettingsPlexSyncKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.settings.plex.sync.$post> }) =>
        parseResponse(client.settings.plex.sync.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSettingsPlexDevicesServersKey() {
  return ['settings', '/settings/plex/devices/servers'] as const
}

export function useGetSettingsPlexDevicesServers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.plex.devices.servers.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSettingsPlexDevicesServersKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.settings.plex.devices.servers.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.settings.plex.devices.servers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSettingsPlexDevicesServers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.plex.devices.servers.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSettingsPlexDevicesServersKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.settings.plex.devices.servers.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.settings.plex.devices.servers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSettingsPlexUsersKey() {
  return ['settings', '/settings/plex/users'] as const
}

export function useGetSettingsPlexUsers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.plex.users.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSettingsPlexUsersKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.settings.plex.users.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.settings.plex.users.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSettingsPlexUsers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.plex.users.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSettingsPlexUsersKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.settings.plex.users.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.settings.plex.users.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSettingsTautulliKey() {
  return ['settings', '/settings/tautulli'] as const
}

export function useGetSettingsTautulli<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.tautulli.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSettingsTautulliKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.tautulli.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.settings.tautulli.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSettingsTautulli<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.tautulli.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSettingsTautulliKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.tautulli.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.settings.tautulli.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSettingsTautulliKey() {
  return ['settings', '/settings/tautulli', 'POST'] as const
}

export function usePostSettingsTautulli<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.tautulli.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.settings.tautulli.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSettingsTautulliKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.settings.tautulli.$post> }) =>
        parseResponse(client.settings.tautulli.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSettingsRadarrKey() {
  return ['settings', '/settings/radarr'] as const
}

export function useGetSettingsRadarr<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.radarr.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSettingsRadarrKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.radarr.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.settings.radarr.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSettingsRadarr<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.radarr.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSettingsRadarrKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.radarr.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.settings.radarr.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSettingsRadarrKey() {
  return ['settings', '/settings/radarr', 'POST'] as const
}

export function usePostSettingsRadarr<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.radarr.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.settings.radarr.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSettingsRadarrKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.settings.radarr.$post> }) =>
        parseResponse(client.settings.radarr.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSettingsRadarrTestKey() {
  return ['settings', '/settings/radarr/test', 'POST'] as const
}

export function usePostSettingsRadarrTest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.radarr.test.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.settings.radarr.test.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSettingsRadarrTestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.settings.radarr.test.$post> },
      ) => parseResponse(client.settings.radarr.test.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutSettingsRadarrRadarrIdKey() {
  return ['settings', '/settings/radarr/:radarrId', 'PUT'] as const
}

export function usePutSettingsRadarrRadarrId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.settings.radarr)[':radarrId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.settings.radarr)[':radarrId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSettingsRadarrRadarrIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.settings.radarr)[':radarrId']['$put']> },
      ) => parseResponse(client.settings.radarr[':radarrId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSettingsRadarrRadarrIdKey() {
  return ['settings', '/settings/radarr/:radarrId', 'DELETE'] as const
}

export function useDeleteSettingsRadarrRadarrId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.settings.radarr)[':radarrId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.settings.radarr)[':radarrId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSettingsRadarrRadarrIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.settings.radarr)[':radarrId']['$delete']> },
      ) => parseResponse(client.settings.radarr[':radarrId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSettingsRadarrRadarrIdProfilesKey(
  args: InferRequestType<(typeof client.settings.radarr)[':radarrId']['profiles']['$get']>,
) {
  return ['settings', '/settings/radarr/:radarrId/profiles', args] as const
}

export function useGetSettingsRadarrRadarrIdProfiles<TError = unknown>(
  args: InferRequestType<(typeof client.settings.radarr)[':radarrId']['profiles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.settings.radarr)[':radarrId']['profiles']['$get']>>
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
        ? getGetSettingsRadarrRadarrIdProfilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.settings.radarr)[':radarrId']['profiles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.settings.radarr[':radarrId'].profiles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSettingsRadarrRadarrIdProfiles<TError = unknown>(
  args: InferRequestType<(typeof client.settings.radarr)[':radarrId']['profiles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.settings.radarr)[':radarrId']['profiles']['$get']>>
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
        ? getGetSettingsRadarrRadarrIdProfilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.settings.radarr)[':radarrId']['profiles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.settings.radarr[':radarrId'].profiles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSettingsSonarrKey() {
  return ['settings', '/settings/sonarr'] as const
}

export function useGetSettingsSonarr<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.sonarr.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSettingsSonarrKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.sonarr.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.settings.sonarr.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSettingsSonarr<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.sonarr.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSettingsSonarrKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.sonarr.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.settings.sonarr.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSettingsSonarrKey() {
  return ['settings', '/settings/sonarr', 'POST'] as const
}

export function usePostSettingsSonarr<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.sonarr.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.settings.sonarr.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSettingsSonarrKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.settings.sonarr.$post> }) =>
        parseResponse(client.settings.sonarr.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSettingsSonarrTestKey() {
  return ['settings', '/settings/sonarr/test', 'POST'] as const
}

export function usePostSettingsSonarrTest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.sonarr.test.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.settings.sonarr.test.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSettingsSonarrTestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.settings.sonarr.test.$post> },
      ) => parseResponse(client.settings.sonarr.test.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutSettingsSonarrSonarrIdKey() {
  return ['settings', '/settings/sonarr/:sonarrId', 'PUT'] as const
}

export function usePutSettingsSonarrSonarrId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.settings.sonarr)[':sonarrId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.settings.sonarr)[':sonarrId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSettingsSonarrSonarrIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.settings.sonarr)[':sonarrId']['$put']> },
      ) => parseResponse(client.settings.sonarr[':sonarrId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSettingsSonarrSonarrIdKey() {
  return ['settings', '/settings/sonarr/:sonarrId', 'DELETE'] as const
}

export function useDeleteSettingsSonarrSonarrId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.settings.sonarr)[':sonarrId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.settings.sonarr)[':sonarrId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSettingsSonarrSonarrIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.settings.sonarr)[':sonarrId']['$delete']> },
      ) => parseResponse(client.settings.sonarr[':sonarrId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSettingsPublicKey() {
  return ['settings', '/settings/public'] as const
}

export function useGetSettingsPublic<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.public.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSettingsPublicKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.public.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.settings.public.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSettingsPublic<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.public.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSettingsPublicKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.public.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.settings.public.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSettingsInitializeKey() {
  return ['settings', '/settings/initialize', 'POST'] as const
}

export function usePostSettingsInitialize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.initialize.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSettingsInitializeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.settings.initialize.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSettingsJobsKey() {
  return ['settings', '/settings/jobs'] as const
}

export function useGetSettingsJobs<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.jobs.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSettingsJobsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.jobs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.settings.jobs.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSettingsJobs<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.jobs.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSettingsJobsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.jobs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.settings.jobs.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSettingsJobsJobIdRunKey() {
  return ['settings', '/settings/jobs/:jobId/run', 'POST'] as const
}

export function usePostSettingsJobsJobIdRun<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.settings.jobs)[':jobId']['run']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.settings.jobs)[':jobId']['run']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSettingsJobsJobIdRunKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.settings.jobs)[':jobId']['run']['$post']> },
      ) => parseResponse(client.settings.jobs[':jobId'].run.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSettingsJobsJobIdCancelKey() {
  return ['settings', '/settings/jobs/:jobId/cancel', 'POST'] as const
}

export function usePostSettingsJobsJobIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.settings.jobs)[':jobId']['cancel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.settings.jobs)[':jobId']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSettingsJobsJobIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.settings.jobs)[':jobId']['cancel']['$post']> },
      ) => parseResponse(client.settings.jobs[':jobId'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSettingsJobsJobIdScheduleKey() {
  return ['settings', '/settings/jobs/:jobId/schedule', 'POST'] as const
}

export function usePostSettingsJobsJobIdSchedule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.settings.jobs)[':jobId']['schedule']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.settings.jobs)[':jobId']['schedule']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSettingsJobsJobIdScheduleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.settings.jobs)[':jobId']['schedule']['$post']> },
      ) => parseResponse(client.settings.jobs[':jobId'].schedule.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSettingsCacheKey() {
  return ['settings', '/settings/cache'] as const
}

export function useGetSettingsCache<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.cache.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSettingsCacheKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.cache.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.settings.cache.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSettingsCache<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.cache.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSettingsCacheKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.cache.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.settings.cache.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSettingsCacheCacheIdFlushKey() {
  return ['settings', '/settings/cache/:cacheId/flush', 'POST'] as const
}

export function usePostSettingsCacheCacheIdFlush<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.settings.cache)[':cacheId']['flush']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.settings.cache)[':cacheId']['flush']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSettingsCacheCacheIdFlushKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.settings.cache)[':cacheId']['flush']['$post']> },
      ) => parseResponse(client.settings.cache[':cacheId'].flush.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSettingsLogsKey(args: InferRequestType<typeof client.settings.logs.$get>) {
  return ['settings', '/settings/logs', args] as const
}

export function useGetSettingsLogs<TError = unknown>(
  args: InferRequestType<typeof client.settings.logs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.logs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSettingsLogsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.logs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.settings.logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSettingsLogs<TError = unknown>(
  args: InferRequestType<typeof client.settings.logs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.logs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSettingsLogsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.logs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.settings.logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSettingsNotificationsEmailKey() {
  return ['settings', '/settings/notifications/email'] as const
}

export function useGetSettingsNotificationsEmail<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.notifications.email.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSettingsNotificationsEmailKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.settings.notifications.email.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.settings.notifications.email.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSettingsNotificationsEmail<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.notifications.email.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSettingsNotificationsEmailKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.settings.notifications.email.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.settings.notifications.email.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSettingsNotificationsEmailKey() {
  return ['settings', '/settings/notifications/email', 'POST'] as const
}

export function usePostSettingsNotificationsEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.notifications.email.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.settings.notifications.email.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSettingsNotificationsEmailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.settings.notifications.email.$post> },
      ) => parseResponse(client.settings.notifications.email.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSettingsNotificationsEmailTestKey() {
  return ['settings', '/settings/notifications/email/test', 'POST'] as const
}

export function usePostSettingsNotificationsEmailTest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.settings.notifications.email.test.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.settings.notifications.email.test.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSettingsNotificationsEmailTestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.settings.notifications.email.test.$post> },
      ) => parseResponse(client.settings.notifications.email.test.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSettingsNotificationsDiscordKey() {
  return ['settings', '/settings/notifications/discord'] as const
}

export function useGetSettingsNotificationsDiscord<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.notifications.discord.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSettingsNotificationsDiscordKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.settings.notifications.discord.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.settings.notifications.discord.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSettingsNotificationsDiscord<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.notifications.discord.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSettingsNotificationsDiscordKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.settings.notifications.discord.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.settings.notifications.discord.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSettingsNotificationsDiscordKey() {
  return ['settings', '/settings/notifications/discord', 'POST'] as const
}

export function usePostSettingsNotificationsDiscord<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.settings.notifications.discord.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.settings.notifications.discord.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSettingsNotificationsDiscordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.settings.notifications.discord.$post> },
      ) => parseResponse(client.settings.notifications.discord.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSettingsNotificationsDiscordTestKey() {
  return ['settings', '/settings/notifications/discord/test', 'POST'] as const
}

export function usePostSettingsNotificationsDiscordTest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.settings.notifications.discord.test.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.settings.notifications.discord.test.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSettingsNotificationsDiscordTestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.settings.notifications.discord.test.$post> },
      ) => parseResponse(client.settings.notifications.discord.test.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSettingsNotificationsLunaseaKey() {
  return ['settings', '/settings/notifications/lunasea'] as const
}

export function useGetSettingsNotificationsLunasea<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.notifications.lunasea.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSettingsNotificationsLunaseaKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.settings.notifications.lunasea.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.settings.notifications.lunasea.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSettingsNotificationsLunasea<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.notifications.lunasea.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSettingsNotificationsLunaseaKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.settings.notifications.lunasea.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.settings.notifications.lunasea.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSettingsNotificationsLunaseaKey() {
  return ['settings', '/settings/notifications/lunasea', 'POST'] as const
}

export function usePostSettingsNotificationsLunasea<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.settings.notifications.lunasea.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.settings.notifications.lunasea.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSettingsNotificationsLunaseaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.settings.notifications.lunasea.$post> },
      ) => parseResponse(client.settings.notifications.lunasea.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSettingsNotificationsLunaseaTestKey() {
  return ['settings', '/settings/notifications/lunasea/test', 'POST'] as const
}

export function usePostSettingsNotificationsLunaseaTest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.settings.notifications.lunasea.test.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.settings.notifications.lunasea.test.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSettingsNotificationsLunaseaTestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.settings.notifications.lunasea.test.$post> },
      ) => parseResponse(client.settings.notifications.lunasea.test.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSettingsNotificationsPushbulletKey() {
  return ['settings', '/settings/notifications/pushbullet'] as const
}

export function useGetSettingsNotificationsPushbullet<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.settings.notifications.pushbullet.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSettingsNotificationsPushbulletKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.settings.notifications.pushbullet.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.settings.notifications.pushbullet.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSettingsNotificationsPushbullet<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.settings.notifications.pushbullet.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSettingsNotificationsPushbulletKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.settings.notifications.pushbullet.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.settings.notifications.pushbullet.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSettingsNotificationsPushbulletKey() {
  return ['settings', '/settings/notifications/pushbullet', 'POST'] as const
}

export function usePostSettingsNotificationsPushbullet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.settings.notifications.pushbullet.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.settings.notifications.pushbullet.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSettingsNotificationsPushbulletKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.settings.notifications.pushbullet.$post> },
      ) => parseResponse(client.settings.notifications.pushbullet.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSettingsNotificationsPushbulletTestKey() {
  return ['settings', '/settings/notifications/pushbullet/test', 'POST'] as const
}

export function usePostSettingsNotificationsPushbulletTest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.settings.notifications.pushbullet.test.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.settings.notifications.pushbullet.test.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSettingsNotificationsPushbulletTestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.settings.notifications.pushbullet.test.$post> },
      ) => parseResponse(client.settings.notifications.pushbullet.test.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSettingsNotificationsPushoverKey() {
  return ['settings', '/settings/notifications/pushover'] as const
}

export function useGetSettingsNotificationsPushover<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.settings.notifications.pushover.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSettingsNotificationsPushoverKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.settings.notifications.pushover.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.settings.notifications.pushover.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSettingsNotificationsPushover<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.settings.notifications.pushover.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSettingsNotificationsPushoverKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.settings.notifications.pushover.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.settings.notifications.pushover.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSettingsNotificationsPushoverKey() {
  return ['settings', '/settings/notifications/pushover', 'POST'] as const
}

export function usePostSettingsNotificationsPushover<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.settings.notifications.pushover.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.settings.notifications.pushover.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSettingsNotificationsPushoverKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.settings.notifications.pushover.$post> },
      ) => parseResponse(client.settings.notifications.pushover.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSettingsNotificationsPushoverTestKey() {
  return ['settings', '/settings/notifications/pushover/test', 'POST'] as const
}

export function usePostSettingsNotificationsPushoverTest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.settings.notifications.pushover.test.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.settings.notifications.pushover.test.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSettingsNotificationsPushoverTestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.settings.notifications.pushover.test.$post> },
      ) => parseResponse(client.settings.notifications.pushover.test.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSettingsNotificationsPushoverSoundsKey(
  args: InferRequestType<typeof client.settings.notifications.pushover.sounds.$get>,
) {
  return ['settings', '/settings/notifications/pushover/sounds', args] as const
}

export function useGetSettingsNotificationsPushoverSounds<TError = unknown>(
  args: InferRequestType<typeof client.settings.notifications.pushover.sounds.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.settings.notifications.pushover.sounds.$get>>
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
        ? getGetSettingsNotificationsPushoverSoundsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.settings.notifications.pushover.sounds.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.settings.notifications.pushover.sounds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSettingsNotificationsPushoverSounds<TError = unknown>(
  args: InferRequestType<typeof client.settings.notifications.pushover.sounds.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.settings.notifications.pushover.sounds.$get>>
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
        ? getGetSettingsNotificationsPushoverSoundsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.settings.notifications.pushover.sounds.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.settings.notifications.pushover.sounds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSettingsNotificationsGotifyKey() {
  return ['settings', '/settings/notifications/gotify'] as const
}

export function useGetSettingsNotificationsGotify<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.notifications.gotify.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSettingsNotificationsGotifyKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.settings.notifications.gotify.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.settings.notifications.gotify.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSettingsNotificationsGotify<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.notifications.gotify.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSettingsNotificationsGotifyKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.settings.notifications.gotify.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.settings.notifications.gotify.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSettingsNotificationsGotifyKey() {
  return ['settings', '/settings/notifications/gotify', 'POST'] as const
}

export function usePostSettingsNotificationsGotify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.notifications.gotify.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.settings.notifications.gotify.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSettingsNotificationsGotifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.settings.notifications.gotify.$post> },
      ) => parseResponse(client.settings.notifications.gotify.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSettingsNotificationsGotifyTestKey() {
  return ['settings', '/settings/notifications/gotify/test', 'POST'] as const
}

export function usePostSettingsNotificationsGotifyTest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.settings.notifications.gotify.test.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.settings.notifications.gotify.test.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSettingsNotificationsGotifyTestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.settings.notifications.gotify.test.$post> },
      ) => parseResponse(client.settings.notifications.gotify.test.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSettingsNotificationsSlackKey() {
  return ['settings', '/settings/notifications/slack'] as const
}

export function useGetSettingsNotificationsSlack<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.notifications.slack.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSettingsNotificationsSlackKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.settings.notifications.slack.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.settings.notifications.slack.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSettingsNotificationsSlack<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.notifications.slack.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSettingsNotificationsSlackKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.settings.notifications.slack.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.settings.notifications.slack.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSettingsNotificationsSlackKey() {
  return ['settings', '/settings/notifications/slack', 'POST'] as const
}

export function usePostSettingsNotificationsSlack<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.notifications.slack.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.settings.notifications.slack.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSettingsNotificationsSlackKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.settings.notifications.slack.$post> },
      ) => parseResponse(client.settings.notifications.slack.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSettingsNotificationsSlackTestKey() {
  return ['settings', '/settings/notifications/slack/test', 'POST'] as const
}

export function usePostSettingsNotificationsSlackTest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.settings.notifications.slack.test.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.settings.notifications.slack.test.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSettingsNotificationsSlackTestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.settings.notifications.slack.test.$post> },
      ) => parseResponse(client.settings.notifications.slack.test.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSettingsNotificationsTelegramKey() {
  return ['settings', '/settings/notifications/telegram'] as const
}

export function useGetSettingsNotificationsTelegram<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.settings.notifications.telegram.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSettingsNotificationsTelegramKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.settings.notifications.telegram.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.settings.notifications.telegram.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSettingsNotificationsTelegram<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.settings.notifications.telegram.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSettingsNotificationsTelegramKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.settings.notifications.telegram.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.settings.notifications.telegram.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSettingsNotificationsTelegramKey() {
  return ['settings', '/settings/notifications/telegram', 'POST'] as const
}

export function usePostSettingsNotificationsTelegram<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.settings.notifications.telegram.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.settings.notifications.telegram.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSettingsNotificationsTelegramKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.settings.notifications.telegram.$post> },
      ) => parseResponse(client.settings.notifications.telegram.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSettingsNotificationsTelegramTestKey() {
  return ['settings', '/settings/notifications/telegram/test', 'POST'] as const
}

export function usePostSettingsNotificationsTelegramTest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.settings.notifications.telegram.test.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.settings.notifications.telegram.test.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSettingsNotificationsTelegramTestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.settings.notifications.telegram.test.$post> },
      ) => parseResponse(client.settings.notifications.telegram.test.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSettingsNotificationsWebpushKey() {
  return ['settings', '/settings/notifications/webpush'] as const
}

export function useGetSettingsNotificationsWebpush<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.notifications.webpush.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSettingsNotificationsWebpushKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.settings.notifications.webpush.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.settings.notifications.webpush.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSettingsNotificationsWebpush<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.notifications.webpush.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSettingsNotificationsWebpushKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.settings.notifications.webpush.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.settings.notifications.webpush.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSettingsNotificationsWebpushKey() {
  return ['settings', '/settings/notifications/webpush', 'POST'] as const
}

export function usePostSettingsNotificationsWebpush<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.settings.notifications.webpush.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.settings.notifications.webpush.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSettingsNotificationsWebpushKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.settings.notifications.webpush.$post> },
      ) => parseResponse(client.settings.notifications.webpush.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSettingsNotificationsWebpushTestKey() {
  return ['settings', '/settings/notifications/webpush/test', 'POST'] as const
}

export function usePostSettingsNotificationsWebpushTest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.settings.notifications.webpush.test.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.settings.notifications.webpush.test.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSettingsNotificationsWebpushTestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.settings.notifications.webpush.test.$post> },
      ) => parseResponse(client.settings.notifications.webpush.test.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSettingsNotificationsWebhookKey() {
  return ['settings', '/settings/notifications/webhook'] as const
}

export function useGetSettingsNotificationsWebhook<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.notifications.webhook.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSettingsNotificationsWebhookKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.settings.notifications.webhook.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.settings.notifications.webhook.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSettingsNotificationsWebhook<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.notifications.webhook.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSettingsNotificationsWebhookKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.settings.notifications.webhook.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.settings.notifications.webhook.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSettingsNotificationsWebhookKey() {
  return ['settings', '/settings/notifications/webhook', 'POST'] as const
}

export function usePostSettingsNotificationsWebhook<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.settings.notifications.webhook.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.settings.notifications.webhook.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSettingsNotificationsWebhookKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.settings.notifications.webhook.$post> },
      ) => parseResponse(client.settings.notifications.webhook.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSettingsNotificationsWebhookTestKey() {
  return ['settings', '/settings/notifications/webhook/test', 'POST'] as const
}

export function usePostSettingsNotificationsWebhookTest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.settings.notifications.webhook.test.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.settings.notifications.webhook.test.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSettingsNotificationsWebhookTestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.settings.notifications.webhook.test.$post> },
      ) => parseResponse(client.settings.notifications.webhook.test.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSettingsDiscoverKey() {
  return ['settings', '/settings/discover'] as const
}

export function useGetSettingsDiscover<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.discover.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSettingsDiscoverKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.discover.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.settings.discover.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSettingsDiscover<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.discover.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSettingsDiscoverKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.discover.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.settings.discover.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSettingsDiscoverKey() {
  return ['settings', '/settings/discover', 'POST'] as const
}

export function usePostSettingsDiscover<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.discover.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.settings.discover.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSettingsDiscoverKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.settings.discover.$post> }) =>
        parseResponse(client.settings.discover.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutSettingsDiscoverSliderIdKey() {
  return ['settings', '/settings/discover/:sliderId', 'PUT'] as const
}

export function usePutSettingsDiscoverSliderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.settings.discover)[':sliderId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.settings.discover)[':sliderId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSettingsDiscoverSliderIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.settings.discover)[':sliderId']['$put']> },
      ) => parseResponse(client.settings.discover[':sliderId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSettingsDiscoverSliderIdKey() {
  return ['settings', '/settings/discover/:sliderId', 'DELETE'] as const
}

export function useDeleteSettingsDiscoverSliderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.settings.discover)[':sliderId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.settings.discover)[':sliderId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSettingsDiscoverSliderIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.settings.discover)[':sliderId']['$delete']> },
      ) => parseResponse(client.settings.discover[':sliderId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSettingsDiscoverAddKey() {
  return ['settings', '/settings/discover/add', 'POST'] as const
}

export function usePostSettingsDiscoverAdd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.discover.add.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.settings.discover.add.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSettingsDiscoverAddKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.settings.discover.add.$post> },
      ) => parseResponse(client.settings.discover.add.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSettingsDiscoverResetKey() {
  return ['settings', '/settings/discover/reset'] as const
}

export function useGetSettingsDiscoverReset<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.discover.reset.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSettingsDiscoverResetKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.settings.discover.reset.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.settings.discover.reset.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSettingsDiscoverReset<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.discover.reset.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSettingsDiscoverResetKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.settings.discover.reset.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.settings.discover.reset.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSettingsAboutKey() {
  return ['settings', '/settings/about'] as const
}

export function useGetSettingsAbout<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.about.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSettingsAboutKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.about.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.settings.about.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSettingsAbout<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.about.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSettingsAboutKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.about.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.settings.about.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAuthMeKey() {
  return ['auth', '/auth/me'] as const
}

export function useGetAuthMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.me.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAuthMeKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.me.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.auth.me.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuthMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.me.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAuthMeKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.me.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.auth.me.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAuthPlexKey() {
  return ['auth', '/auth/plex', 'POST'] as const
}

export function usePostAuthPlex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.plex.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.auth.plex.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthPlexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.auth.plex.$post> }) =>
        parseResponse(client.auth.plex.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthLocalKey() {
  return ['auth', '/auth/local', 'POST'] as const
}

export function usePostAuthLocal<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.local.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.auth.local.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthLocalKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.auth.local.$post> }) =>
        parseResponse(client.auth.local.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthLogoutKey() {
  return ['auth', '/auth/logout', 'POST'] as const
}

export function usePostAuthLogout<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.logout.$post>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthLogoutKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.auth.logout.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthResetPasswordKey() {
  return ['auth', '/auth/reset-password', 'POST'] as const
}

export function usePostAuthResetPassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.auth)['reset-password']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.auth)['reset-password']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthResetPasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.auth)['reset-password']['$post']> },
      ) => parseResponse(client.auth['reset-password'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthResetPasswordGuidKey() {
  return ['auth', '/auth/reset-password/:guid', 'POST'] as const
}

export function usePostAuthResetPasswordGuid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.auth)['reset-password'][':guid']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.auth)['reset-password'][':guid']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthResetPasswordGuidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.auth)['reset-password'][':guid']['$post']> },
      ) => parseResponse(client.auth['reset-password'][':guid'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserKey(args: InferRequestType<typeof client.user.$get>) {
  return ['user', '/user', args] as const
}

export function useGetUser<TError = unknown>(
  args: InferRequestType<typeof client.user.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.user.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetUser<TError = unknown>(
  args: InferRequestType<typeof client.user.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.user.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPutUserKey() {
  return ['user', '/user', 'PUT'] as const
}

export function usePutUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.user.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.user.$put> }) =>
        parseResponse(client.user.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserKey() {
  return ['user', '/user', 'POST'] as const
}

export function usePostUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.user.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.user.$post> }) =>
        parseResponse(client.user.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserImportFromPlexKey() {
  return ['user', '/user/import-from-plex', 'POST'] as const
}

export function usePostUserImportFromPlex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.user)['import-from-plex']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.user)['import-from-plex']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserImportFromPlexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.user)['import-from-plex']['$post']> },
      ) => parseResponse(client.user['import-from-plex'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserRegisterPushSubscriptionKey() {
  return ['user', '/user/registerPushSubscription', 'POST'] as const
}

export function usePostUserRegisterPushSubscription<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.user.registerPushSubscription.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.user.registerPushSubscription.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserRegisterPushSubscriptionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.user.registerPushSubscription.$post> },
      ) => parseResponse(client.user.registerPushSubscription.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserUserIdPushSubscriptionsKey(
  args: InferRequestType<(typeof client.user)[':userId']['pushSubscriptions']['$get']>,
) {
  return ['user', '/user/:userId/pushSubscriptions', args] as const
}

export function useGetUserUserIdPushSubscriptions<TError = unknown>(
  args: InferRequestType<(typeof client.user)[':userId']['pushSubscriptions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user)[':userId']['pushSubscriptions']['$get']>>
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
        ? getGetUserUserIdPushSubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user)[':userId']['pushSubscriptions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user[':userId'].pushSubscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserUserIdPushSubscriptions<TError = unknown>(
  args: InferRequestType<(typeof client.user)[':userId']['pushSubscriptions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user)[':userId']['pushSubscriptions']['$get']>>
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
        ? getGetUserUserIdPushSubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user)[':userId']['pushSubscriptions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user[':userId'].pushSubscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserUserIdPushSubscriptionEndpointKey(
  args: InferRequestType<(typeof client.user)[':userId']['pushSubscription'][':endpoint']['$get']>,
) {
  return ['user', '/user/:userId/pushSubscription/:endpoint', args] as const
}

export function useGetUserUserIdPushSubscriptionEndpoint<TError = unknown>(
  args: InferRequestType<(typeof client.user)[':userId']['pushSubscription'][':endpoint']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.user)[':userId']['pushSubscription'][':endpoint']['$get']>
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
        ? getGetUserUserIdPushSubscriptionEndpointKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.user)[':userId']['pushSubscription'][':endpoint']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.user[':userId'].pushSubscription[':endpoint'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserUserIdPushSubscriptionEndpoint<TError = unknown>(
  args: InferRequestType<(typeof client.user)[':userId']['pushSubscription'][':endpoint']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.user)[':userId']['pushSubscription'][':endpoint']['$get']>
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
        ? getGetUserUserIdPushSubscriptionEndpointKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.user)[':userId']['pushSubscription'][':endpoint']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.user[':userId'].pushSubscription[':endpoint'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteUserUserIdPushSubscriptionEndpointKey() {
  return ['user', '/user/:userId/pushSubscription/:endpoint', 'DELETE'] as const
}

export function useDeleteUserUserIdPushSubscriptionEndpoint<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.user)[':userId']['pushSubscription'][':endpoint']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.user)[':userId']['pushSubscription'][':endpoint']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUserUserIdPushSubscriptionEndpointKey()
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
            (typeof client.user)[':userId']['pushSubscription'][':endpoint']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.user[':userId'].pushSubscription[':endpoint'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUserUserIdKey(
  args: InferRequestType<(typeof client.user)[':userId']['$get']>,
) {
  return ['user', '/user/:userId', args] as const
}

export function useGetUserUserId<TError = unknown>(
  args: InferRequestType<(typeof client.user)[':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':userId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUserUserIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':userId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserUserId<TError = unknown>(
  args: InferRequestType<(typeof client.user)[':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':userId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUserUserIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':userId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUserUserIdKey() {
  return ['user', '/user/:userId', 'PUT'] as const
}

export function usePutUserUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':userId']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.user)[':userId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUserUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.user)[':userId']['$put']> }) =>
        parseResponse(client.user[':userId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUserUserIdKey() {
  return ['user', '/user/:userId', 'DELETE'] as const
}

export function useDeleteUserUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':userId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.user)[':userId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUserUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.user)[':userId']['$delete']> },
      ) => parseResponse(client.user[':userId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserUserIdRequestsKey(
  args: InferRequestType<(typeof client.user)[':userId']['requests']['$get']>,
) {
  return ['user', '/user/:userId/requests', args] as const
}

export function useGetUserUserIdRequests<TError = unknown>(
  args: InferRequestType<(typeof client.user)[':userId']['requests']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user)[':userId']['requests']['$get']>>
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
        ? getGetUserUserIdRequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user)[':userId']['requests']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user[':userId'].requests.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserUserIdRequests<TError = unknown>(
  args: InferRequestType<(typeof client.user)[':userId']['requests']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user)[':userId']['requests']['$get']>>
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
        ? getGetUserUserIdRequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user)[':userId']['requests']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user[':userId'].requests.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserUserIdQuotaKey(
  args: InferRequestType<(typeof client.user)[':userId']['quota']['$get']>,
) {
  return ['user', '/user/:userId/quota', args] as const
}

export function useGetUserUserIdQuota<TError = unknown>(
  args: InferRequestType<(typeof client.user)[':userId']['quota']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user)[':userId']['quota']['$get']>>
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
        ? getGetUserUserIdQuotaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user)[':userId']['quota']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user[':userId'].quota.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserUserIdQuota<TError = unknown>(
  args: InferRequestType<(typeof client.user)[':userId']['quota']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user)[':userId']['quota']['$get']>>
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
        ? getGetUserUserIdQuotaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user)[':userId']['quota']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user[':userId'].quota.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserUserIdWatchlistKey(
  args: InferRequestType<(typeof client.user)[':userId']['watchlist']['$get']>,
) {
  return ['user', '/user/:userId/watchlist', args] as const
}

export function useGetUserUserIdWatchlist<TError = unknown>(
  args: InferRequestType<(typeof client.user)[':userId']['watchlist']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user)[':userId']['watchlist']['$get']>>
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
        ? getGetUserUserIdWatchlistKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user)[':userId']['watchlist']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user[':userId'].watchlist.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserUserIdWatchlist<TError = unknown>(
  args: InferRequestType<(typeof client.user)[':userId']['watchlist']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user)[':userId']['watchlist']['$get']>>
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
        ? getGetUserUserIdWatchlistKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user)[':userId']['watchlist']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user[':userId'].watchlist.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserUserIdSettingsMainKey(
  args: InferRequestType<(typeof client.user)[':userId']['settings']['main']['$get']>,
) {
  return ['user', '/user/:userId/settings/main', args] as const
}

export function useGetUserUserIdSettingsMain<TError = unknown>(
  args: InferRequestType<(typeof client.user)[':userId']['settings']['main']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user)[':userId']['settings']['main']['$get']>>
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
        ? getGetUserUserIdSettingsMainKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user)[':userId']['settings']['main']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user[':userId'].settings.main.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserUserIdSettingsMain<TError = unknown>(
  args: InferRequestType<(typeof client.user)[':userId']['settings']['main']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user)[':userId']['settings']['main']['$get']>>
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
        ? getGetUserUserIdSettingsMainKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user)[':userId']['settings']['main']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user[':userId'].settings.main.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUserUserIdSettingsMainKey() {
  return ['user', '/user/:userId/settings/main', 'POST'] as const
}

export function usePostUserUserIdSettingsMain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user)[':userId']['settings']['main']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.user)[':userId']['settings']['main']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserUserIdSettingsMainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.user)[':userId']['settings']['main']['$post']> },
      ) => parseResponse(client.user[':userId'].settings.main.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserUserIdSettingsPasswordKey(
  args: InferRequestType<(typeof client.user)[':userId']['settings']['password']['$get']>,
) {
  return ['user', '/user/:userId/settings/password', args] as const
}

export function useGetUserUserIdSettingsPassword<TError = unknown>(
  args: InferRequestType<(typeof client.user)[':userId']['settings']['password']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user)[':userId']['settings']['password']['$get']>>
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
        ? getGetUserUserIdSettingsPasswordKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user)[':userId']['settings']['password']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user[':userId'].settings.password.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserUserIdSettingsPassword<TError = unknown>(
  args: InferRequestType<(typeof client.user)[':userId']['settings']['password']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user)[':userId']['settings']['password']['$get']>>
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
        ? getGetUserUserIdSettingsPasswordKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user)[':userId']['settings']['password']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user[':userId'].settings.password.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUserUserIdSettingsPasswordKey() {
  return ['user', '/user/:userId/settings/password', 'POST'] as const
}

export function usePostUserUserIdSettingsPassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user)[':userId']['settings']['password']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.user)[':userId']['settings']['password']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserUserIdSettingsPasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.user)[':userId']['settings']['password']['$post']>
        },
      ) => parseResponse(client.user[':userId'].settings.password.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserUserIdSettingsNotificationsKey(
  args: InferRequestType<(typeof client.user)[':userId']['settings']['notifications']['$get']>,
) {
  return ['user', '/user/:userId/settings/notifications', args] as const
}

export function useGetUserUserIdSettingsNotifications<TError = unknown>(
  args: InferRequestType<(typeof client.user)[':userId']['settings']['notifications']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.user)[':userId']['settings']['notifications']['$get']>
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
        ? getGetUserUserIdSettingsNotificationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.user)[':userId']['settings']['notifications']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.user[':userId'].settings.notifications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserUserIdSettingsNotifications<TError = unknown>(
  args: InferRequestType<(typeof client.user)[':userId']['settings']['notifications']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.user)[':userId']['settings']['notifications']['$get']>
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
        ? getGetUserUserIdSettingsNotificationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.user)[':userId']['settings']['notifications']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.user[':userId'].settings.notifications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUserUserIdSettingsNotificationsKey() {
  return ['user', '/user/:userId/settings/notifications', 'POST'] as const
}

export function usePostUserUserIdSettingsNotifications<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user)[':userId']['settings']['notifications']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.user)[':userId']['settings']['notifications']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserUserIdSettingsNotificationsKey()
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
            (typeof client.user)[':userId']['settings']['notifications']['$post']
          >
        },
      ) => parseResponse(client.user[':userId'].settings.notifications.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserUserIdSettingsPermissionsKey(
  args: InferRequestType<(typeof client.user)[':userId']['settings']['permissions']['$get']>,
) {
  return ['user', '/user/:userId/settings/permissions', args] as const
}

export function useGetUserUserIdSettingsPermissions<TError = unknown>(
  args: InferRequestType<(typeof client.user)[':userId']['settings']['permissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user)[':userId']['settings']['permissions']['$get']>>
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
        ? getGetUserUserIdSettingsPermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user)[':userId']['settings']['permissions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.user[':userId'].settings.permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserUserIdSettingsPermissions<TError = unknown>(
  args: InferRequestType<(typeof client.user)[':userId']['settings']['permissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user)[':userId']['settings']['permissions']['$get']>>
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
        ? getGetUserUserIdSettingsPermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user)[':userId']['settings']['permissions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.user[':userId'].settings.permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUserUserIdSettingsPermissionsKey() {
  return ['user', '/user/:userId/settings/permissions', 'POST'] as const
}

export function usePostUserUserIdSettingsPermissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user)[':userId']['settings']['permissions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.user)[':userId']['settings']['permissions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserUserIdSettingsPermissionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.user)[':userId']['settings']['permissions']['$post']>
        },
      ) => parseResponse(client.user[':userId'].settings.permissions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserUserIdWatchDataKey(
  args: InferRequestType<(typeof client.user)[':userId']['watch_data']['$get']>,
) {
  return ['user', '/user/:userId/watch_data', args] as const
}

export function useGetUserUserIdWatchData<TError = unknown>(
  args: InferRequestType<(typeof client.user)[':userId']['watch_data']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user)[':userId']['watch_data']['$get']>>
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
        ? getGetUserUserIdWatchDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user)[':userId']['watch_data']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user[':userId'].watch_data.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserUserIdWatchData<TError = unknown>(
  args: InferRequestType<(typeof client.user)[':userId']['watch_data']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user)[':userId']['watch_data']['$get']>>
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
        ? getGetUserUserIdWatchDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user)[':userId']['watch_data']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user[':userId'].watch_data.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSearchKey(args: InferRequestType<typeof client.search.$get>) {
  return ['search', '/search', args] as const
}

export function useGetSearch<TError = unknown>(
  args: InferRequestType<typeof client.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.search.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSearch<TError = unknown>(
  args: InferRequestType<typeof client.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.search.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetSearchKeywordKey(args: InferRequestType<typeof client.search.keyword.$get>) {
  return ['search', '/search/keyword', args] as const
}

export function useGetSearchKeyword<TError = unknown>(
  args: InferRequestType<typeof client.search.keyword.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.keyword.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSearchKeywordKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.keyword.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.keyword.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchKeyword<TError = unknown>(
  args: InferRequestType<typeof client.search.keyword.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.keyword.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSearchKeywordKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.keyword.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.keyword.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSearchCompanyKey(args: InferRequestType<typeof client.search.company.$get>) {
  return ['search', '/search/company', args] as const
}

export function useGetSearchCompany<TError = unknown>(
  args: InferRequestType<typeof client.search.company.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.company.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSearchCompanyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.company.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.company.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchCompany<TError = unknown>(
  args: InferRequestType<typeof client.search.company.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.company.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSearchCompanyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.company.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.company.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDiscoverMoviesKey(
  args: InferRequestType<typeof client.discover.movies.$get>,
) {
  return ['discover', '/discover/movies', args] as const
}

export function useGetDiscoverMovies<TError = unknown>(
  args: InferRequestType<typeof client.discover.movies.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discover.movies.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDiscoverMoviesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discover.movies.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.discover.movies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDiscoverMovies<TError = unknown>(
  args: InferRequestType<typeof client.discover.movies.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discover.movies.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDiscoverMoviesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discover.movies.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.discover.movies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDiscoverMoviesGenreGenreIdKey(
  args: InferRequestType<(typeof client.discover.movies.genre)[':genreId']['$get']>,
) {
  return ['discover', '/discover/movies/genre/:genreId', args] as const
}

export function useGetDiscoverMoviesGenreGenreId<TError = unknown>(
  args: InferRequestType<(typeof client.discover.movies.genre)[':genreId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.discover.movies.genre)[':genreId']['$get']>>
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
        ? getGetDiscoverMoviesGenreGenreIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.discover.movies.genre)[':genreId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.discover.movies.genre[':genreId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDiscoverMoviesGenreGenreId<TError = unknown>(
  args: InferRequestType<(typeof client.discover.movies.genre)[':genreId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.discover.movies.genre)[':genreId']['$get']>>
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
        ? getGetDiscoverMoviesGenreGenreIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.discover.movies.genre)[':genreId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.discover.movies.genre[':genreId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDiscoverMoviesLanguageLanguageKey(
  args: InferRequestType<(typeof client.discover.movies.language)[':language']['$get']>,
) {
  return ['discover', '/discover/movies/language/:language', args] as const
}

export function useGetDiscoverMoviesLanguageLanguage<TError = unknown>(
  args: InferRequestType<(typeof client.discover.movies.language)[':language']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.discover.movies.language)[':language']['$get']>>
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
        ? getGetDiscoverMoviesLanguageLanguageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.discover.movies.language)[':language']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.discover.movies.language[':language'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDiscoverMoviesLanguageLanguage<TError = unknown>(
  args: InferRequestType<(typeof client.discover.movies.language)[':language']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.discover.movies.language)[':language']['$get']>>
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
        ? getGetDiscoverMoviesLanguageLanguageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.discover.movies.language)[':language']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.discover.movies.language[':language'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDiscoverMoviesStudioStudioIdKey(
  args: InferRequestType<(typeof client.discover.movies.studio)[':studioId']['$get']>,
) {
  return ['discover', '/discover/movies/studio/:studioId', args] as const
}

export function useGetDiscoverMoviesStudioStudioId<TError = unknown>(
  args: InferRequestType<(typeof client.discover.movies.studio)[':studioId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.discover.movies.studio)[':studioId']['$get']>>
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
        ? getGetDiscoverMoviesStudioStudioIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.discover.movies.studio)[':studioId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.discover.movies.studio[':studioId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDiscoverMoviesStudioStudioId<TError = unknown>(
  args: InferRequestType<(typeof client.discover.movies.studio)[':studioId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.discover.movies.studio)[':studioId']['$get']>>
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
        ? getGetDiscoverMoviesStudioStudioIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.discover.movies.studio)[':studioId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.discover.movies.studio[':studioId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDiscoverMoviesUpcomingKey(
  args: InferRequestType<typeof client.discover.movies.upcoming.$get>,
) {
  return ['discover', '/discover/movies/upcoming', args] as const
}

export function useGetDiscoverMoviesUpcoming<TError = unknown>(
  args: InferRequestType<typeof client.discover.movies.upcoming.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.discover.movies.upcoming.$get>>>
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
        ? getGetDiscoverMoviesUpcomingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.discover.movies.upcoming.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.discover.movies.upcoming.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDiscoverMoviesUpcoming<TError = unknown>(
  args: InferRequestType<typeof client.discover.movies.upcoming.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.discover.movies.upcoming.$get>>>
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
        ? getGetDiscoverMoviesUpcomingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.discover.movies.upcoming.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.discover.movies.upcoming.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDiscoverTvKey(args: InferRequestType<typeof client.discover.tv.$get>) {
  return ['discover', '/discover/tv', args] as const
}

export function useGetDiscoverTv<TError = unknown>(
  args: InferRequestType<typeof client.discover.tv.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discover.tv.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDiscoverTvKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discover.tv.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.discover.tv.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDiscoverTv<TError = unknown>(
  args: InferRequestType<typeof client.discover.tv.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discover.tv.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDiscoverTvKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discover.tv.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.discover.tv.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDiscoverTvLanguageLanguageKey(
  args: InferRequestType<(typeof client.discover.tv.language)[':language']['$get']>,
) {
  return ['discover', '/discover/tv/language/:language', args] as const
}

export function useGetDiscoverTvLanguageLanguage<TError = unknown>(
  args: InferRequestType<(typeof client.discover.tv.language)[':language']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.discover.tv.language)[':language']['$get']>>
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
        ? getGetDiscoverTvLanguageLanguageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.discover.tv.language)[':language']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.discover.tv.language[':language'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDiscoverTvLanguageLanguage<TError = unknown>(
  args: InferRequestType<(typeof client.discover.tv.language)[':language']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.discover.tv.language)[':language']['$get']>>
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
        ? getGetDiscoverTvLanguageLanguageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.discover.tv.language)[':language']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.discover.tv.language[':language'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDiscoverTvGenreGenreIdKey(
  args: InferRequestType<(typeof client.discover.tv.genre)[':genreId']['$get']>,
) {
  return ['discover', '/discover/tv/genre/:genreId', args] as const
}

export function useGetDiscoverTvGenreGenreId<TError = unknown>(
  args: InferRequestType<(typeof client.discover.tv.genre)[':genreId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.discover.tv.genre)[':genreId']['$get']>>
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
        ? getGetDiscoverTvGenreGenreIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.discover.tv.genre)[':genreId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.discover.tv.genre[':genreId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDiscoverTvGenreGenreId<TError = unknown>(
  args: InferRequestType<(typeof client.discover.tv.genre)[':genreId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.discover.tv.genre)[':genreId']['$get']>>
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
        ? getGetDiscoverTvGenreGenreIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.discover.tv.genre)[':genreId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.discover.tv.genre[':genreId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDiscoverTvNetworkNetworkIdKey(
  args: InferRequestType<(typeof client.discover.tv.network)[':networkId']['$get']>,
) {
  return ['discover', '/discover/tv/network/:networkId', args] as const
}

export function useGetDiscoverTvNetworkNetworkId<TError = unknown>(
  args: InferRequestType<(typeof client.discover.tv.network)[':networkId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.discover.tv.network)[':networkId']['$get']>>
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
        ? getGetDiscoverTvNetworkNetworkIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.discover.tv.network)[':networkId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.discover.tv.network[':networkId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDiscoverTvNetworkNetworkId<TError = unknown>(
  args: InferRequestType<(typeof client.discover.tv.network)[':networkId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.discover.tv.network)[':networkId']['$get']>>
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
        ? getGetDiscoverTvNetworkNetworkIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.discover.tv.network)[':networkId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.discover.tv.network[':networkId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDiscoverTvUpcomingKey(
  args: InferRequestType<typeof client.discover.tv.upcoming.$get>,
) {
  return ['discover', '/discover/tv/upcoming', args] as const
}

export function useGetDiscoverTvUpcoming<TError = unknown>(
  args: InferRequestType<typeof client.discover.tv.upcoming.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.discover.tv.upcoming.$get>>>
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
        ? getGetDiscoverTvUpcomingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.discover.tv.upcoming.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.discover.tv.upcoming.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDiscoverTvUpcoming<TError = unknown>(
  args: InferRequestType<typeof client.discover.tv.upcoming.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.discover.tv.upcoming.$get>>>
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
        ? getGetDiscoverTvUpcomingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.discover.tv.upcoming.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.discover.tv.upcoming.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDiscoverTrendingKey(
  args: InferRequestType<typeof client.discover.trending.$get>,
) {
  return ['discover', '/discover/trending', args] as const
}

export function useGetDiscoverTrending<TError = unknown>(
  args: InferRequestType<typeof client.discover.trending.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discover.trending.$get>>>>
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
        ? getGetDiscoverTrendingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discover.trending.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.discover.trending.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDiscoverTrending<TError = unknown>(
  args: InferRequestType<typeof client.discover.trending.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discover.trending.$get>>>>
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
        ? getGetDiscoverTrendingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discover.trending.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.discover.trending.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDiscoverKeywordKeywordIdMoviesKey(
  args: InferRequestType<(typeof client.discover.keyword)[':keywordId']['movies']['$get']>,
) {
  return ['discover', '/discover/keyword/:keywordId/movies', args] as const
}

export function useGetDiscoverKeywordKeywordIdMovies<TError = unknown>(
  args: InferRequestType<(typeof client.discover.keyword)[':keywordId']['movies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.discover.keyword)[':keywordId']['movies']['$get']>>
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
        ? getGetDiscoverKeywordKeywordIdMoviesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.discover.keyword)[':keywordId']['movies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.discover.keyword[':keywordId'].movies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDiscoverKeywordKeywordIdMovies<TError = unknown>(
  args: InferRequestType<(typeof client.discover.keyword)[':keywordId']['movies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.discover.keyword)[':keywordId']['movies']['$get']>>
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
        ? getGetDiscoverKeywordKeywordIdMoviesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.discover.keyword)[':keywordId']['movies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.discover.keyword[':keywordId'].movies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDiscoverGenresliderMovieKey(
  args: InferRequestType<typeof client.discover.genreslider.movie.$get>,
) {
  return ['discover', '/discover/genreslider/movie', args] as const
}

export function useGetDiscoverGenresliderMovie<TError = unknown>(
  args: InferRequestType<typeof client.discover.genreslider.movie.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.discover.genreslider.movie.$get>>>
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
        ? getGetDiscoverGenresliderMovieKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.discover.genreslider.movie.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.discover.genreslider.movie.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDiscoverGenresliderMovie<TError = unknown>(
  args: InferRequestType<typeof client.discover.genreslider.movie.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.discover.genreslider.movie.$get>>>
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
        ? getGetDiscoverGenresliderMovieKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.discover.genreslider.movie.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.discover.genreslider.movie.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDiscoverGenresliderTvKey(
  args: InferRequestType<typeof client.discover.genreslider.tv.$get>,
) {
  return ['discover', '/discover/genreslider/tv', args] as const
}

export function useGetDiscoverGenresliderTv<TError = unknown>(
  args: InferRequestType<typeof client.discover.genreslider.tv.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.discover.genreslider.tv.$get>>>
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
        ? getGetDiscoverGenresliderTvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.discover.genreslider.tv.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.discover.genreslider.tv.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDiscoverGenresliderTv<TError = unknown>(
  args: InferRequestType<typeof client.discover.genreslider.tv.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.discover.genreslider.tv.$get>>>
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
        ? getGetDiscoverGenresliderTvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.discover.genreslider.tv.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.discover.genreslider.tv.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDiscoverWatchlistKey(
  args: InferRequestType<typeof client.discover.watchlist.$get>,
) {
  return ['discover', '/discover/watchlist', args] as const
}

export function useGetDiscoverWatchlist<TError = unknown>(
  args: InferRequestType<typeof client.discover.watchlist.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discover.watchlist.$get>>>>
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
        ? getGetDiscoverWatchlistKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discover.watchlist.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.discover.watchlist.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDiscoverWatchlist<TError = unknown>(
  args: InferRequestType<typeof client.discover.watchlist.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discover.watchlist.$get>>>>
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
        ? getGetDiscoverWatchlistKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discover.watchlist.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.discover.watchlist.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRequestKey(args: InferRequestType<typeof client.request.$get>) {
  return ['request', '/request', args] as const
}

export function useGetRequest<TError = unknown>(
  args: InferRequestType<typeof client.request.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.request.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRequestKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.request.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.request.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetRequest<TError = unknown>(
  args: InferRequestType<typeof client.request.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.request.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRequestKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.request.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.request.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostRequestKey() {
  return ['request', '/request', 'POST'] as const
}

export function usePostRequest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.request.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.request.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRequestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.request.$post> }) =>
        parseResponse(client.request.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRequestCountKey() {
  return ['request', '/request/count'] as const
}

export function useGetRequestCount<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.request.count.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRequestCountKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.request.count.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.request.count.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRequestCount<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.request.count.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRequestCountKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.request.count.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.request.count.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRequestRequestIdKey(
  args: InferRequestType<(typeof client.request)[':requestId']['$get']>,
) {
  return ['request', '/request/:requestId', args] as const
}

export function useGetRequestRequestId<TError = unknown>(
  args: InferRequestType<(typeof client.request)[':requestId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.request)[':requestId']['$get']>>>
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
        ? getGetRequestRequestIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.request)[':requestId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.request[':requestId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRequestRequestId<TError = unknown>(
  args: InferRequestType<(typeof client.request)[':requestId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.request)[':requestId']['$get']>>>
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
        ? getGetRequestRequestIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.request)[':requestId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.request[':requestId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRequestRequestIdKey() {
  return ['request', '/request/:requestId', 'PUT'] as const
}

export function usePutRequestRequestId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.request)[':requestId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.request)[':requestId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRequestRequestIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.request)[':requestId']['$put']> },
      ) => parseResponse(client.request[':requestId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRequestRequestIdKey() {
  return ['request', '/request/:requestId', 'DELETE'] as const
}

export function useDeleteRequestRequestId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.request)[':requestId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.request)[':requestId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRequestRequestIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.request)[':requestId']['$delete']> },
      ) => parseResponse(client.request[':requestId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRequestRequestIdRetryKey() {
  return ['request', '/request/:requestId/retry', 'POST'] as const
}

export function usePostRequestRequestIdRetry<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.request)[':requestId']['retry']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.request)[':requestId']['retry']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRequestRequestIdRetryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.request)[':requestId']['retry']['$post']> },
      ) => parseResponse(client.request[':requestId'].retry.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRequestRequestIdStatusKey() {
  return ['request', '/request/:requestId/:status', 'POST'] as const
}

export function usePostRequestRequestIdStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.request)[':requestId'][':status']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.request)[':requestId'][':status']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRequestRequestIdStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.request)[':requestId'][':status']['$post']> },
      ) => parseResponse(client.request[':requestId'][':status'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMovieMovieIdKey(
  args: InferRequestType<(typeof client.movie)[':movieId']['$get']>,
) {
  return ['movie', '/movie/:movieId', args] as const
}

export function useGetMovieMovieId<TError = unknown>(
  args: InferRequestType<(typeof client.movie)[':movieId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.movie)[':movieId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetMovieMovieIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.movie)[':movieId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.movie[':movieId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMovieMovieId<TError = unknown>(
  args: InferRequestType<(typeof client.movie)[':movieId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.movie)[':movieId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetMovieMovieIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.movie)[':movieId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.movie[':movieId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMovieMovieIdRecommendationsKey(
  args: InferRequestType<(typeof client.movie)[':movieId']['recommendations']['$get']>,
) {
  return ['movie', '/movie/:movieId/recommendations', args] as const
}

export function useGetMovieMovieIdRecommendations<TError = unknown>(
  args: InferRequestType<(typeof client.movie)[':movieId']['recommendations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movie)[':movieId']['recommendations']['$get']>>
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
        ? getGetMovieMovieIdRecommendationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movie)[':movieId']['recommendations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.movie[':movieId'].recommendations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMovieMovieIdRecommendations<TError = unknown>(
  args: InferRequestType<(typeof client.movie)[':movieId']['recommendations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movie)[':movieId']['recommendations']['$get']>>
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
        ? getGetMovieMovieIdRecommendationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movie)[':movieId']['recommendations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.movie[':movieId'].recommendations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMovieMovieIdSimilarKey(
  args: InferRequestType<(typeof client.movie)[':movieId']['similar']['$get']>,
) {
  return ['movie', '/movie/:movieId/similar', args] as const
}

export function useGetMovieMovieIdSimilar<TError = unknown>(
  args: InferRequestType<(typeof client.movie)[':movieId']['similar']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movie)[':movieId']['similar']['$get']>>
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
        ? getGetMovieMovieIdSimilarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movie)[':movieId']['similar']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.movie[':movieId'].similar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMovieMovieIdSimilar<TError = unknown>(
  args: InferRequestType<(typeof client.movie)[':movieId']['similar']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movie)[':movieId']['similar']['$get']>>
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
        ? getGetMovieMovieIdSimilarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movie)[':movieId']['similar']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.movie[':movieId'].similar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMovieMovieIdRatingsKey(
  args: InferRequestType<(typeof client.movie)[':movieId']['ratings']['$get']>,
) {
  return ['movie', '/movie/:movieId/ratings', args] as const
}

export function useGetMovieMovieIdRatings<TError = unknown>(
  args: InferRequestType<(typeof client.movie)[':movieId']['ratings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movie)[':movieId']['ratings']['$get']>>
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
        ? getGetMovieMovieIdRatingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movie)[':movieId']['ratings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.movie[':movieId'].ratings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMovieMovieIdRatings<TError = unknown>(
  args: InferRequestType<(typeof client.movie)[':movieId']['ratings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movie)[':movieId']['ratings']['$get']>>
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
        ? getGetMovieMovieIdRatingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movie)[':movieId']['ratings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.movie[':movieId'].ratings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMovieMovieIdRatingscombinedKey(
  args: InferRequestType<(typeof client.movie)[':movieId']['ratingscombined']['$get']>,
) {
  return ['movie', '/movie/:movieId/ratingscombined', args] as const
}

export function useGetMovieMovieIdRatingscombined<TError = unknown>(
  args: InferRequestType<(typeof client.movie)[':movieId']['ratingscombined']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movie)[':movieId']['ratingscombined']['$get']>>
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
        ? getGetMovieMovieIdRatingscombinedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movie)[':movieId']['ratingscombined']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.movie[':movieId'].ratingscombined.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMovieMovieIdRatingscombined<TError = unknown>(
  args: InferRequestType<(typeof client.movie)[':movieId']['ratingscombined']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movie)[':movieId']['ratingscombined']['$get']>>
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
        ? getGetMovieMovieIdRatingscombinedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.movie)[':movieId']['ratingscombined']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.movie[':movieId'].ratingscombined.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTvTvIdKey(args: InferRequestType<(typeof client.tv)[':tvId']['$get']>) {
  return ['tv', '/tv/:tvId', args] as const
}

export function useGetTvTvId<TError = unknown>(
  args: InferRequestType<(typeof client.tv)[':tvId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tv)[':tvId']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTvTvIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tv)[':tvId']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tv[':tvId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTvTvId<TError = unknown>(
  args: InferRequestType<(typeof client.tv)[':tvId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tv)[':tvId']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTvTvIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tv)[':tvId']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tv[':tvId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTvTvIdSeasonSeasonIdKey(
  args: InferRequestType<(typeof client.tv)[':tvId']['season'][':seasonId']['$get']>,
) {
  return ['tv', '/tv/:tvId/season/:seasonId', args] as const
}

export function useGetTvTvIdSeasonSeasonId<TError = unknown>(
  args: InferRequestType<(typeof client.tv)[':tvId']['season'][':seasonId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tv)[':tvId']['season'][':seasonId']['$get']>>
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
        ? getGetTvTvIdSeasonSeasonIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tv)[':tvId']['season'][':seasonId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tv[':tvId'].season[':seasonId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTvTvIdSeasonSeasonId<TError = unknown>(
  args: InferRequestType<(typeof client.tv)[':tvId']['season'][':seasonId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tv)[':tvId']['season'][':seasonId']['$get']>>
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
        ? getGetTvTvIdSeasonSeasonIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tv)[':tvId']['season'][':seasonId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tv[':tvId'].season[':seasonId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTvTvIdRecommendationsKey(
  args: InferRequestType<(typeof client.tv)[':tvId']['recommendations']['$get']>,
) {
  return ['tv', '/tv/:tvId/recommendations', args] as const
}

export function useGetTvTvIdRecommendations<TError = unknown>(
  args: InferRequestType<(typeof client.tv)[':tvId']['recommendations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tv)[':tvId']['recommendations']['$get']>>
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
        ? getGetTvTvIdRecommendationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tv)[':tvId']['recommendations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tv[':tvId'].recommendations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTvTvIdRecommendations<TError = unknown>(
  args: InferRequestType<(typeof client.tv)[':tvId']['recommendations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tv)[':tvId']['recommendations']['$get']>>
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
        ? getGetTvTvIdRecommendationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tv)[':tvId']['recommendations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tv[':tvId'].recommendations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTvTvIdSimilarKey(
  args: InferRequestType<(typeof client.tv)[':tvId']['similar']['$get']>,
) {
  return ['tv', '/tv/:tvId/similar', args] as const
}

export function useGetTvTvIdSimilar<TError = unknown>(
  args: InferRequestType<(typeof client.tv)[':tvId']['similar']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tv)[':tvId']['similar']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetTvTvIdSimilarKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tv)[':tvId']['similar']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tv[':tvId'].similar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTvTvIdSimilar<TError = unknown>(
  args: InferRequestType<(typeof client.tv)[':tvId']['similar']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tv)[':tvId']['similar']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetTvTvIdSimilarKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tv)[':tvId']['similar']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tv[':tvId'].similar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTvTvIdRatingsKey(
  args: InferRequestType<(typeof client.tv)[':tvId']['ratings']['$get']>,
) {
  return ['tv', '/tv/:tvId/ratings', args] as const
}

export function useGetTvTvIdRatings<TError = unknown>(
  args: InferRequestType<(typeof client.tv)[':tvId']['ratings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tv)[':tvId']['ratings']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetTvTvIdRatingsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tv)[':tvId']['ratings']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tv[':tvId'].ratings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTvTvIdRatings<TError = unknown>(
  args: InferRequestType<(typeof client.tv)[':tvId']['ratings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tv)[':tvId']['ratings']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetTvTvIdRatingsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tv)[':tvId']['ratings']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tv[':tvId'].ratings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPersonPersonIdKey(
  args: InferRequestType<(typeof client.person)[':personId']['$get']>,
) {
  return ['person', '/person/:personId', args] as const
}

export function useGetPersonPersonId<TError = unknown>(
  args: InferRequestType<(typeof client.person)[':personId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.person)[':personId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetPersonPersonIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.person)[':personId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.person[':personId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPersonPersonId<TError = unknown>(
  args: InferRequestType<(typeof client.person)[':personId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.person)[':personId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetPersonPersonIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.person)[':personId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.person[':personId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPersonPersonIdCombinedCreditsKey(
  args: InferRequestType<(typeof client.person)[':personId']['combined_credits']['$get']>,
) {
  return ['person', '/person/:personId/combined_credits', args] as const
}

export function useGetPersonPersonIdCombinedCredits<TError = unknown>(
  args: InferRequestType<(typeof client.person)[':personId']['combined_credits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.person)[':personId']['combined_credits']['$get']>>
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
        ? getGetPersonPersonIdCombinedCreditsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.person)[':personId']['combined_credits']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.person[':personId'].combined_credits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPersonPersonIdCombinedCredits<TError = unknown>(
  args: InferRequestType<(typeof client.person)[':personId']['combined_credits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.person)[':personId']['combined_credits']['$get']>>
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
        ? getGetPersonPersonIdCombinedCreditsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.person)[':personId']['combined_credits']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.person[':personId'].combined_credits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMediaKey(args: InferRequestType<typeof client.media.$get>) {
  return ['media', '/media', args] as const
}

export function useGetMedia<TError = unknown>(
  args: InferRequestType<typeof client.media.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMediaKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.media.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMedia<TError = unknown>(
  args: InferRequestType<typeof client.media.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMediaKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.media.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getDeleteMediaMediaIdKey() {
  return ['media', '/media/:mediaId', 'DELETE'] as const
}

export function useDeleteMediaMediaId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.media)[':mediaId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.media)[':mediaId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMediaMediaIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.media)[':mediaId']['$delete']> },
      ) => parseResponse(client.media[':mediaId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMediaMediaIdStatusKey() {
  return ['media', '/media/:mediaId/:status', 'POST'] as const
}

export function usePostMediaMediaIdStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.media)[':mediaId'][':status']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.media)[':mediaId'][':status']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMediaMediaIdStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.media)[':mediaId'][':status']['$post']> },
      ) => parseResponse(client.media[':mediaId'][':status'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMediaMediaIdWatchDataKey(
  args: InferRequestType<(typeof client.media)[':mediaId']['watch_data']['$get']>,
) {
  return ['media', '/media/:mediaId/watch_data', args] as const
}

export function useGetMediaMediaIdWatchData<TError = unknown>(
  args: InferRequestType<(typeof client.media)[':mediaId']['watch_data']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.media)[':mediaId']['watch_data']['$get']>>
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
        ? getGetMediaMediaIdWatchDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.media)[':mediaId']['watch_data']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.media[':mediaId'].watch_data.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMediaMediaIdWatchData<TError = unknown>(
  args: InferRequestType<(typeof client.media)[':mediaId']['watch_data']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.media)[':mediaId']['watch_data']['$get']>>
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
        ? getGetMediaMediaIdWatchDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.media)[':mediaId']['watch_data']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.media[':mediaId'].watch_data.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCollectionCollectionIdKey(
  args: InferRequestType<(typeof client.collection)[':collectionId']['$get']>,
) {
  return ['collection', '/collection/:collectionId', args] as const
}

export function useGetCollectionCollectionId<TError = unknown>(
  args: InferRequestType<(typeof client.collection)[':collectionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collection)[':collectionId']['$get']>>
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
        ? getGetCollectionCollectionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collection)[':collectionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.collection[':collectionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCollectionCollectionId<TError = unknown>(
  args: InferRequestType<(typeof client.collection)[':collectionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collection)[':collectionId']['$get']>>
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
        ? getGetCollectionCollectionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.collection)[':collectionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.collection[':collectionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetServiceRadarrKey() {
  return ['service', '/service/radarr'] as const
}

export function useGetServiceRadarr<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.service.radarr.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetServiceRadarrKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.service.radarr.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.service.radarr.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServiceRadarr<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.service.radarr.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetServiceRadarrKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.service.radarr.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.service.radarr.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetServiceRadarrRadarrIdKey(
  args: InferRequestType<(typeof client.service.radarr)[':radarrId']['$get']>,
) {
  return ['service', '/service/radarr/:radarrId', args] as const
}

export function useGetServiceRadarrRadarrId<TError = unknown>(
  args: InferRequestType<(typeof client.service.radarr)[':radarrId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.service.radarr)[':radarrId']['$get']>>
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
        ? getGetServiceRadarrRadarrIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.service.radarr)[':radarrId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.service.radarr[':radarrId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServiceRadarrRadarrId<TError = unknown>(
  args: InferRequestType<(typeof client.service.radarr)[':radarrId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.service.radarr)[':radarrId']['$get']>>
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
        ? getGetServiceRadarrRadarrIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.service.radarr)[':radarrId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.service.radarr[':radarrId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetServiceSonarrKey() {
  return ['service', '/service/sonarr'] as const
}

export function useGetServiceSonarr<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.service.sonarr.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetServiceSonarrKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.service.sonarr.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.service.sonarr.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServiceSonarr<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.service.sonarr.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetServiceSonarrKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.service.sonarr.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.service.sonarr.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetServiceSonarrSonarrIdKey(
  args: InferRequestType<(typeof client.service.sonarr)[':sonarrId']['$get']>,
) {
  return ['service', '/service/sonarr/:sonarrId', args] as const
}

export function useGetServiceSonarrSonarrId<TError = unknown>(
  args: InferRequestType<(typeof client.service.sonarr)[':sonarrId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.service.sonarr)[':sonarrId']['$get']>>
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
        ? getGetServiceSonarrSonarrIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.service.sonarr)[':sonarrId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.service.sonarr[':sonarrId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServiceSonarrSonarrId<TError = unknown>(
  args: InferRequestType<(typeof client.service.sonarr)[':sonarrId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.service.sonarr)[':sonarrId']['$get']>>
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
        ? getGetServiceSonarrSonarrIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.service.sonarr)[':sonarrId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.service.sonarr[':sonarrId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetServiceSonarrLookupTmdbIdKey(
  args: InferRequestType<(typeof client.service.sonarr.lookup)[':tmdbId']['$get']>,
) {
  return ['service', '/service/sonarr/lookup/:tmdbId', args] as const
}

export function useGetServiceSonarrLookupTmdbId<TError = unknown>(
  args: InferRequestType<(typeof client.service.sonarr.lookup)[':tmdbId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.service.sonarr.lookup)[':tmdbId']['$get']>>
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
        ? getGetServiceSonarrLookupTmdbIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.service.sonarr.lookup)[':tmdbId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.service.sonarr.lookup[':tmdbId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServiceSonarrLookupTmdbId<TError = unknown>(
  args: InferRequestType<(typeof client.service.sonarr.lookup)[':tmdbId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.service.sonarr.lookup)[':tmdbId']['$get']>>
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
        ? getGetServiceSonarrLookupTmdbIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.service.sonarr.lookup)[':tmdbId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.service.sonarr.lookup[':tmdbId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRegionsKey() {
  return ['regions', '/regions'] as const
}

export function useGetRegions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRegionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.regions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRegions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRegionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.regions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLanguagesKey() {
  return ['languages', '/languages'] as const
}

export function useGetLanguages<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.languages.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLanguagesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.languages.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.languages.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLanguages<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.languages.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLanguagesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.languages.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.languages.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStudioStudioIdKey(
  args: InferRequestType<(typeof client.studio)[':studioId']['$get']>,
) {
  return ['studio', '/studio/:studioId', args] as const
}

export function useGetStudioStudioId<TError = unknown>(
  args: InferRequestType<(typeof client.studio)[':studioId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.studio)[':studioId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetStudioStudioIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.studio)[':studioId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.studio[':studioId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStudioStudioId<TError = unknown>(
  args: InferRequestType<(typeof client.studio)[':studioId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.studio)[':studioId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetStudioStudioIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.studio)[':studioId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.studio[':studioId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNetworkNetworkIdKey(
  args: InferRequestType<(typeof client.network)[':networkId']['$get']>,
) {
  return ['network', '/network/:networkId', args] as const
}

export function useGetNetworkNetworkId<TError = unknown>(
  args: InferRequestType<(typeof client.network)[':networkId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.network)[':networkId']['$get']>>>
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
        ? getGetNetworkNetworkIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.network)[':networkId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.network[':networkId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworkNetworkId<TError = unknown>(
  args: InferRequestType<(typeof client.network)[':networkId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.network)[':networkId']['$get']>>>
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
        ? getGetNetworkNetworkIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.network)[':networkId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.network[':networkId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGenresMovieKey(args: InferRequestType<typeof client.genres.movie.$get>) {
  return ['genres', '/genres/movie', args] as const
}

export function useGetGenresMovie<TError = unknown>(
  args: InferRequestType<typeof client.genres.movie.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genres.movie.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGenresMovieKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genres.movie.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.genres.movie.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGenresMovie<TError = unknown>(
  args: InferRequestType<typeof client.genres.movie.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genres.movie.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGenresMovieKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genres.movie.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.genres.movie.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGenresTvKey(args: InferRequestType<typeof client.genres.tv.$get>) {
  return ['genres', '/genres/tv', args] as const
}

export function useGetGenresTv<TError = unknown>(
  args: InferRequestType<typeof client.genres.tv.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genres.tv.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGenresTvKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genres.tv.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.genres.tv.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGenresTv<TError = unknown>(
  args: InferRequestType<typeof client.genres.tv.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genres.tv.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGenresTvKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genres.tv.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.genres.tv.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBackdropsKey() {
  return ['backdrops', '/backdrops'] as const
}

export function useGetBackdrops<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backdrops.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBackdropsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backdrops.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.backdrops.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBackdrops<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backdrops.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBackdropsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backdrops.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.backdrops.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIssueKey(args: InferRequestType<typeof client.issue.$get>) {
  return ['issue', '/issue', args] as const
}

export function useGetIssue<TError = unknown>(
  args: InferRequestType<typeof client.issue.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issue.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIssueKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issue.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.issue.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetIssue<TError = unknown>(
  args: InferRequestType<typeof client.issue.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issue.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIssueKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issue.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.issue.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostIssueKey() {
  return ['issue', '/issue', 'POST'] as const
}

export function usePostIssue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issue.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.issue.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIssueKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.issue.$post> }) =>
        parseResponse(client.issue.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIssueCountKey() {
  return ['issue', '/issue/count'] as const
}

export function useGetIssueCount<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issue.count.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIssueCountKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issue.count.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.issue.count.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIssueCount<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issue.count.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIssueCountKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issue.count.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.issue.count.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIssueIssueIdKey(
  args: InferRequestType<(typeof client.issue)[':issueId']['$get']>,
) {
  return ['issue', '/issue/:issueId', args] as const
}

export function useGetIssueIssueId<TError = unknown>(
  args: InferRequestType<(typeof client.issue)[':issueId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.issue)[':issueId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetIssueIssueIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.issue)[':issueId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.issue[':issueId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIssueIssueId<TError = unknown>(
  args: InferRequestType<(typeof client.issue)[':issueId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.issue)[':issueId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetIssueIssueIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.issue)[':issueId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.issue[':issueId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteIssueIssueIdKey() {
  return ['issue', '/issue/:issueId', 'DELETE'] as const
}

export function useDeleteIssueIssueId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.issue)[':issueId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.issue)[':issueId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIssueIssueIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.issue)[':issueId']['$delete']> },
      ) => parseResponse(client.issue[':issueId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIssueIssueIdCommentKey() {
  return ['issue', '/issue/:issueId/comment', 'POST'] as const
}

export function usePostIssueIssueIdComment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.issue)[':issueId']['comment']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.issue)[':issueId']['comment']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIssueIssueIdCommentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.issue)[':issueId']['comment']['$post']> },
      ) => parseResponse(client.issue[':issueId'].comment.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIssueCommentCommentIdKey(
  args: InferRequestType<(typeof client.issueComment)[':commentId']['$get']>,
) {
  return ['issueComment', '/issueComment/:commentId', args] as const
}

export function useGetIssueCommentCommentId<TError = unknown>(
  args: InferRequestType<(typeof client.issueComment)[':commentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.issueComment)[':commentId']['$get']>>
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
        ? getGetIssueCommentCommentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.issueComment)[':commentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.issueComment[':commentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIssueCommentCommentId<TError = unknown>(
  args: InferRequestType<(typeof client.issueComment)[':commentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.issueComment)[':commentId']['$get']>>
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
        ? getGetIssueCommentCommentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.issueComment)[':commentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.issueComment[':commentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutIssueCommentCommentIdKey() {
  return ['issueComment', '/issueComment/:commentId', 'PUT'] as const
}

export function usePutIssueCommentCommentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.issueComment)[':commentId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.issueComment)[':commentId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIssueCommentCommentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.issueComment)[':commentId']['$put']> },
      ) => parseResponse(client.issueComment[':commentId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteIssueCommentCommentIdKey() {
  return ['issueComment', '/issueComment/:commentId', 'DELETE'] as const
}

export function useDeleteIssueCommentCommentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.issueComment)[':commentId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.issueComment)[':commentId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIssueCommentCommentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.issueComment)[':commentId']['$delete']> },
      ) => parseResponse(client.issueComment[':commentId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIssueIssueIdStatusKey() {
  return ['issue', '/issue/:issueId/:status', 'POST'] as const
}

export function usePostIssueIssueIdStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.issue)[':issueId'][':status']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.issue)[':issueId'][':status']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIssueIssueIdStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.issue)[':issueId'][':status']['$post']> },
      ) => parseResponse(client.issue[':issueId'][':status'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKeywordKeywordIdKey(
  args: InferRequestType<(typeof client.keyword)[':keywordId']['$get']>,
) {
  return ['keyword', '/keyword/:keywordId', args] as const
}

export function useGetKeywordKeywordId<TError = unknown>(
  args: InferRequestType<(typeof client.keyword)[':keywordId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.keyword)[':keywordId']['$get']>>>
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
        ? getGetKeywordKeywordIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.keyword)[':keywordId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.keyword[':keywordId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKeywordKeywordId<TError = unknown>(
  args: InferRequestType<(typeof client.keyword)[':keywordId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.keyword)[':keywordId']['$get']>>>
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
        ? getGetKeywordKeywordIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.keyword)[':keywordId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.keyword[':keywordId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWatchprovidersRegionsKey() {
  return ['watchproviders', '/watchproviders/regions'] as const
}

export function useGetWatchprovidersRegions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.watchproviders.regions.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWatchprovidersRegionsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.watchproviders.regions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.watchproviders.regions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWatchprovidersRegions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.watchproviders.regions.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWatchprovidersRegionsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.watchproviders.regions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.watchproviders.regions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWatchprovidersMoviesKey(
  args: InferRequestType<typeof client.watchproviders.movies.$get>,
) {
  return ['watchproviders', '/watchproviders/movies', args] as const
}

export function useGetWatchprovidersMovies<TError = unknown>(
  args: InferRequestType<typeof client.watchproviders.movies.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.watchproviders.movies.$get>>>
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
        ? getGetWatchprovidersMoviesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.watchproviders.movies.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.watchproviders.movies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWatchprovidersMovies<TError = unknown>(
  args: InferRequestType<typeof client.watchproviders.movies.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.watchproviders.movies.$get>>>
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
        ? getGetWatchprovidersMoviesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.watchproviders.movies.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.watchproviders.movies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWatchprovidersTvKey(
  args: InferRequestType<typeof client.watchproviders.tv.$get>,
) {
  return ['watchproviders', '/watchproviders/tv', args] as const
}

export function useGetWatchprovidersTv<TError = unknown>(
  args: InferRequestType<typeof client.watchproviders.tv.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.watchproviders.tv.$get>>>>
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
        ? getGetWatchprovidersTvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.watchproviders.tv.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.watchproviders.tv.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWatchprovidersTv<TError = unknown>(
  args: InferRequestType<typeof client.watchproviders.tv.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.watchproviders.tv.$get>>>>
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
        ? getGetWatchprovidersTvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.watchproviders.tv.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.watchproviders.tv.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
