import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function getStatusQueryKey() {
  return ['status', '/status'] as const
}

export function getStatusQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStatusQueryKey>
  >({
    queryKey: getStatusQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectStatus<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStatusQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getStatusAppdataQueryKey() {
  return ['status', '/status/appdata'] as const
}

export function getStatusAppdataQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.appdata.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.appdata.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatusAppdataQueryKey>
  >({
    queryKey: getStatusAppdataQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status.appdata.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectStatusAppdata<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.appdata.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.appdata.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getStatusAppdataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStatusAppdataQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getSettingsMainQueryKey() {
  return ['settings', '/settings/main'] as const
}

export function getSettingsMainQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.main.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.main.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsMainQueryKey>
  >({
    queryKey: getSettingsMainQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.main.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSettingsMain<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.main.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.main.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsMainQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSettingsMainQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostSettingsMainMutationKey() {
  return ['settings', '/settings/main', 'POST'] as const
}

export function getPostSettingsMainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.main.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.settings.main.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSettingsMainMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.settings.main.$post>) {
      return parseResponse(client.settings.main.$post(args, options))
    },
  })
}

export function injectPostSettingsMain<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.main.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.settings.main.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSettingsMainMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostSettingsMainRegenerateMutationKey() {
  return ['settings', '/settings/main/regenerate', 'POST'] as const
}

export function getPostSettingsMainRegenerateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.main.regenerate.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostSettingsMainRegenerateMutationKey(),
    async mutationFn() {
      return parseResponse(client.settings.main.regenerate.$post(undefined, options))
    },
  })
}

export function injectPostSettingsMainRegenerate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.settings.main.regenerate.$post>>>
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSettingsMainRegenerateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSettingsPlexQueryKey() {
  return ['settings', '/settings/plex'] as const
}

export function getSettingsPlexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.plex.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.plex.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsPlexQueryKey>
  >({
    queryKey: getSettingsPlexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.plex.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSettingsPlex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.plex.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.plex.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsPlexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSettingsPlexQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostSettingsPlexMutationKey() {
  return ['settings', '/settings/plex', 'POST'] as const
}

export function getPostSettingsPlexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.plex.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.settings.plex.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSettingsPlexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.settings.plex.$post>) {
      return parseResponse(client.settings.plex.$post(args, options))
    },
  })
}

export function injectPostSettingsPlex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.plex.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.settings.plex.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSettingsPlexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSettingsPlexLibraryQueryKey(
  args: InferRequestType<typeof client.settings.plex.library.$get>,
) {
  return ['settings', '/settings/plex/library', args] as const
}

export function getSettingsPlexLibraryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.plex.library.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.settings.plex.library.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.plex.library.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsPlexLibraryQueryKey>
  >({
    queryKey: getSettingsPlexLibraryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.plex.library.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSettingsPlexLibrary<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.plex.library.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.settings.plex.library.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.settings.plex.library.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsPlexLibraryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSettingsPlexLibraryQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getSettingsPlexSyncQueryKey() {
  return ['settings', '/settings/plex/sync'] as const
}

export function getSettingsPlexSyncQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.plex.sync.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.plex.sync.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsPlexSyncQueryKey>
  >({
    queryKey: getSettingsPlexSyncQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.plex.sync.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSettingsPlexSync<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.plex.sync.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.settings.plex.sync.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsPlexSyncQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSettingsPlexSyncQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostSettingsPlexSyncMutationKey() {
  return ['settings', '/settings/plex/sync', 'POST'] as const
}

export function getPostSettingsPlexSyncMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.plex.sync.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.settings.plex.sync.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSettingsPlexSyncMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.settings.plex.sync.$post>) {
      return parseResponse(client.settings.plex.sync.$post(args, options))
    },
  })
}

export function injectPostSettingsPlexSync<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.settings.plex.sync.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.settings.plex.sync.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSettingsPlexSyncMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSettingsPlexDevicesServersQueryKey() {
  return ['settings', '/settings/plex/devices/servers'] as const
}

export function getSettingsPlexDevicesServersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.settings.plex.devices.servers.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.plex.devices.servers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsPlexDevicesServersQueryKey>
  >({
    queryKey: getSettingsPlexDevicesServersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.plex.devices.servers.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSettingsPlexDevicesServers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.settings.plex.devices.servers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.settings.plex.devices.servers.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsPlexDevicesServersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSettingsPlexDevicesServersQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getSettingsPlexUsersQueryKey() {
  return ['settings', '/settings/plex/users'] as const
}

export function getSettingsPlexUsersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.plex.users.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.plex.users.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsPlexUsersQueryKey>
  >({
    queryKey: getSettingsPlexUsersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.plex.users.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSettingsPlexUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.plex.users.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.settings.plex.users.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsPlexUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSettingsPlexUsersQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getSettingsTautulliQueryKey() {
  return ['settings', '/settings/tautulli'] as const
}

export function getSettingsTautulliQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.tautulli.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.tautulli.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsTautulliQueryKey>
  >({
    queryKey: getSettingsTautulliQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.tautulli.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSettingsTautulli<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.tautulli.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.settings.tautulli.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsTautulliQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSettingsTautulliQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostSettingsTautulliMutationKey() {
  return ['settings', '/settings/tautulli', 'POST'] as const
}

export function getPostSettingsTautulliMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.tautulli.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.settings.tautulli.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSettingsTautulliMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.settings.tautulli.$post>) {
      return parseResponse(client.settings.tautulli.$post(args, options))
    },
  })
}

export function injectPostSettingsTautulli<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.settings.tautulli.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.settings.tautulli.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSettingsTautulliMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSettingsRadarrQueryKey() {
  return ['settings', '/settings/radarr'] as const
}

export function getSettingsRadarrQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.radarr.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.radarr.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsRadarrQueryKey>
  >({
    queryKey: getSettingsRadarrQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.radarr.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSettingsRadarr<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.radarr.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.radarr.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsRadarrQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSettingsRadarrQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostSettingsRadarrMutationKey() {
  return ['settings', '/settings/radarr', 'POST'] as const
}

export function getPostSettingsRadarrMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.radarr.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.settings.radarr.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSettingsRadarrMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.settings.radarr.$post>) {
      return parseResponse(client.settings.radarr.$post(args, options))
    },
  })
}

export function injectPostSettingsRadarr<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.radarr.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.settings.radarr.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSettingsRadarrMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostSettingsRadarrTestMutationKey() {
  return ['settings', '/settings/radarr/test', 'POST'] as const
}

export function getPostSettingsRadarrTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.radarr.test.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.settings.radarr.test.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSettingsRadarrTestMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.settings.radarr.test.$post>) {
      return parseResponse(client.settings.radarr.test.$post(args, options))
    },
  })
}

export function injectPostSettingsRadarrTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.settings.radarr.test.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.settings.radarr.test.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSettingsRadarrTestMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPutSettingsRadarrRadarrIdMutationKey() {
  return ['settings', '/settings/radarr/:radarrId', 'PUT'] as const
}

export function getPutSettingsRadarrRadarrIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.settings.radarr)[':radarrId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.settings.radarr)[':radarrId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSettingsRadarrRadarrIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.settings.radarr)[':radarrId']['$put']>) {
      return parseResponse(client.settings.radarr[':radarrId'].$put(args, options))
    },
  })
}

export function injectPutSettingsRadarrRadarrId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.settings.radarr)[':radarrId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.settings.radarr)[':radarrId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSettingsRadarrRadarrIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteSettingsRadarrRadarrIdMutationKey() {
  return ['settings', '/settings/radarr/:radarrId', 'DELETE'] as const
}

export function getDeleteSettingsRadarrRadarrIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.settings.radarr)[':radarrId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.settings.radarr)[':radarrId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSettingsRadarrRadarrIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.settings.radarr)[':radarrId']['$delete']>,
    ) {
      return parseResponse(client.settings.radarr[':radarrId'].$delete(args, options))
    },
  })
}

export function injectDeleteSettingsRadarrRadarrId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.settings.radarr)[':radarrId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.settings.radarr)[':radarrId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSettingsRadarrRadarrIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSettingsRadarrRadarrIdProfilesQueryKey(
  args: InferRequestType<(typeof client.settings.radarr)[':radarrId']['profiles']['$get']>,
) {
  return ['settings', '/settings/radarr/:radarrId/profiles', args] as const
}

export function getSettingsRadarrRadarrIdProfilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.settings.radarr)[':radarrId']['profiles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.settings.radarr)[':radarrId']['profiles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.settings.radarr)[':radarrId']['profiles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsRadarrRadarrIdProfilesQueryKey>
  >({
    queryKey: getSettingsRadarrRadarrIdProfilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.radarr[':radarrId'].profiles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSettingsRadarrRadarrIdProfiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.settings.radarr)[':radarrId']['profiles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.settings.radarr)[':radarrId']['profiles']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.settings.radarr)[':radarrId']['profiles']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsRadarrRadarrIdProfilesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSettingsRadarrRadarrIdProfilesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getSettingsSonarrQueryKey() {
  return ['settings', '/settings/sonarr'] as const
}

export function getSettingsSonarrQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.sonarr.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.sonarr.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsSonarrQueryKey>
  >({
    queryKey: getSettingsSonarrQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.sonarr.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSettingsSonarr<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.sonarr.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.sonarr.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsSonarrQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSettingsSonarrQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostSettingsSonarrMutationKey() {
  return ['settings', '/settings/sonarr', 'POST'] as const
}

export function getPostSettingsSonarrMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.sonarr.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.settings.sonarr.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSettingsSonarrMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.settings.sonarr.$post>) {
      return parseResponse(client.settings.sonarr.$post(args, options))
    },
  })
}

export function injectPostSettingsSonarr<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.sonarr.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.settings.sonarr.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSettingsSonarrMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostSettingsSonarrTestMutationKey() {
  return ['settings', '/settings/sonarr/test', 'POST'] as const
}

export function getPostSettingsSonarrTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.sonarr.test.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.settings.sonarr.test.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSettingsSonarrTestMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.settings.sonarr.test.$post>) {
      return parseResponse(client.settings.sonarr.test.$post(args, options))
    },
  })
}

export function injectPostSettingsSonarrTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.settings.sonarr.test.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.settings.sonarr.test.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSettingsSonarrTestMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPutSettingsSonarrSonarrIdMutationKey() {
  return ['settings', '/settings/sonarr/:sonarrId', 'PUT'] as const
}

export function getPutSettingsSonarrSonarrIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.settings.sonarr)[':sonarrId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.settings.sonarr)[':sonarrId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSettingsSonarrSonarrIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.settings.sonarr)[':sonarrId']['$put']>) {
      return parseResponse(client.settings.sonarr[':sonarrId'].$put(args, options))
    },
  })
}

export function injectPutSettingsSonarrSonarrId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.settings.sonarr)[':sonarrId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.settings.sonarr)[':sonarrId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSettingsSonarrSonarrIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteSettingsSonarrSonarrIdMutationKey() {
  return ['settings', '/settings/sonarr/:sonarrId', 'DELETE'] as const
}

export function getDeleteSettingsSonarrSonarrIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.settings.sonarr)[':sonarrId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.settings.sonarr)[':sonarrId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSettingsSonarrSonarrIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.settings.sonarr)[':sonarrId']['$delete']>,
    ) {
      return parseResponse(client.settings.sonarr[':sonarrId'].$delete(args, options))
    },
  })
}

export function injectDeleteSettingsSonarrSonarrId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.settings.sonarr)[':sonarrId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.settings.sonarr)[':sonarrId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSettingsSonarrSonarrIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSettingsPublicQueryKey() {
  return ['settings', '/settings/public'] as const
}

export function getSettingsPublicQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.public.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.public.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsPublicQueryKey>
  >({
    queryKey: getSettingsPublicQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.public.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSettingsPublic<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.public.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.public.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsPublicQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSettingsPublicQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostSettingsInitializeMutationKey() {
  return ['settings', '/settings/initialize', 'POST'] as const
}

export function getPostSettingsInitializeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.initialize.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostSettingsInitializeMutationKey(),
    async mutationFn() {
      return parseResponse(client.settings.initialize.$post(undefined, options))
    },
  })
}

export function injectPostSettingsInitialize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.settings.initialize.$post>>>
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSettingsInitializeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSettingsJobsQueryKey() {
  return ['settings', '/settings/jobs'] as const
}

export function getSettingsJobsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.jobs.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.jobs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsJobsQueryKey>
  >({
    queryKey: getSettingsJobsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.jobs.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSettingsJobs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.jobs.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.jobs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsJobsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSettingsJobsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostSettingsJobsJobIdRunMutationKey() {
  return ['settings', '/settings/jobs/:jobId/run', 'POST'] as const
}

export function getPostSettingsJobsJobIdRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.settings.jobs)[':jobId']['run']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.settings.jobs)[':jobId']['run']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSettingsJobsJobIdRunMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.settings.jobs)[':jobId']['run']['$post']>,
    ) {
      return parseResponse(client.settings.jobs[':jobId'].run.$post(args, options))
    },
  })
}

export function injectPostSettingsJobsJobIdRun<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.settings.jobs)[':jobId']['run']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.settings.jobs)[':jobId']['run']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSettingsJobsJobIdRunMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostSettingsJobsJobIdCancelMutationKey() {
  return ['settings', '/settings/jobs/:jobId/cancel', 'POST'] as const
}

export function getPostSettingsJobsJobIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.settings.jobs)[':jobId']['cancel']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.settings.jobs)[':jobId']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSettingsJobsJobIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.settings.jobs)[':jobId']['cancel']['$post']>,
    ) {
      return parseResponse(client.settings.jobs[':jobId'].cancel.$post(args, options))
    },
  })
}

export function injectPostSettingsJobsJobIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.settings.jobs)[':jobId']['cancel']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.settings.jobs)[':jobId']['cancel']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSettingsJobsJobIdCancelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostSettingsJobsJobIdScheduleMutationKey() {
  return ['settings', '/settings/jobs/:jobId/schedule', 'POST'] as const
}

export function getPostSettingsJobsJobIdScheduleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.settings.jobs)[':jobId']['schedule']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.settings.jobs)[':jobId']['schedule']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSettingsJobsJobIdScheduleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.settings.jobs)[':jobId']['schedule']['$post']>,
    ) {
      return parseResponse(client.settings.jobs[':jobId'].schedule.$post(args, options))
    },
  })
}

export function injectPostSettingsJobsJobIdSchedule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.settings.jobs)[':jobId']['schedule']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.settings.jobs)[':jobId']['schedule']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSettingsJobsJobIdScheduleMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSettingsCacheQueryKey() {
  return ['settings', '/settings/cache'] as const
}

export function getSettingsCacheQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.cache.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.cache.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsCacheQueryKey>
  >({
    queryKey: getSettingsCacheQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.cache.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSettingsCache<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.cache.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.cache.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsCacheQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSettingsCacheQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostSettingsCacheCacheIdFlushMutationKey() {
  return ['settings', '/settings/cache/:cacheId/flush', 'POST'] as const
}

export function getPostSettingsCacheCacheIdFlushMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.settings.cache)[':cacheId']['flush']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.settings.cache)[':cacheId']['flush']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSettingsCacheCacheIdFlushMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.settings.cache)[':cacheId']['flush']['$post']>,
    ) {
      return parseResponse(client.settings.cache[':cacheId'].flush.$post(args, options))
    },
  })
}

export function injectPostSettingsCacheCacheIdFlush<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.settings.cache)[':cacheId']['flush']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.settings.cache)[':cacheId']['flush']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSettingsCacheCacheIdFlushMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSettingsLogsQueryKey(args: InferRequestType<typeof client.settings.logs.$get>) {
  return ['settings', '/settings/logs', args] as const
}

export function getSettingsLogsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.logs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.settings.logs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.logs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsLogsQueryKey>
  >({
    queryKey: getSettingsLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.logs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSettingsLogs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.logs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.settings.logs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.logs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSettingsLogsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getSettingsNotificationsEmailQueryKey() {
  return ['settings', '/settings/notifications/email'] as const
}

export function getSettingsNotificationsEmailQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.settings.notifications.email.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.notifications.email.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsNotificationsEmailQueryKey>
  >({
    queryKey: getSettingsNotificationsEmailQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.notifications.email.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSettingsNotificationsEmail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.settings.notifications.email.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.settings.notifications.email.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsNotificationsEmailQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSettingsNotificationsEmailQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostSettingsNotificationsEmailMutationKey() {
  return ['settings', '/settings/notifications/email', 'POST'] as const
}

export function getPostSettingsNotificationsEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.notifications.email.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.settings.notifications.email.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSettingsNotificationsEmailMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.settings.notifications.email.$post>) {
      return parseResponse(client.settings.notifications.email.$post(args, options))
    },
  })
}

export function injectPostSettingsNotificationsEmail<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.settings.notifications.email.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.settings.notifications.email.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSettingsNotificationsEmailMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostSettingsNotificationsEmailTestMutationKey() {
  return ['settings', '/settings/notifications/email/test', 'POST'] as const
}

export function getPostSettingsNotificationsEmailTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.settings.notifications.email.test.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.settings.notifications.email.test.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSettingsNotificationsEmailTestMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.settings.notifications.email.test.$post>,
    ) {
      return parseResponse(client.settings.notifications.email.test.$post(args, options))
    },
  })
}

export function injectPostSettingsNotificationsEmailTest<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.settings.notifications.email.test.$post>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.settings.notifications.email.test.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSettingsNotificationsEmailTestMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSettingsNotificationsDiscordQueryKey() {
  return ['settings', '/settings/notifications/discord'] as const
}

export function getSettingsNotificationsDiscordQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.settings.notifications.discord.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.notifications.discord.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsNotificationsDiscordQueryKey>
  >({
    queryKey: getSettingsNotificationsDiscordQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.notifications.discord.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSettingsNotificationsDiscord<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.settings.notifications.discord.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.settings.notifications.discord.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsNotificationsDiscordQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSettingsNotificationsDiscordQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostSettingsNotificationsDiscordMutationKey() {
  return ['settings', '/settings/notifications/discord', 'POST'] as const
}

export function getPostSettingsNotificationsDiscordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.settings.notifications.discord.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.settings.notifications.discord.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSettingsNotificationsDiscordMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.settings.notifications.discord.$post>) {
      return parseResponse(client.settings.notifications.discord.$post(args, options))
    },
  })
}

export function injectPostSettingsNotificationsDiscord<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.settings.notifications.discord.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.settings.notifications.discord.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSettingsNotificationsDiscordMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostSettingsNotificationsDiscordTestMutationKey() {
  return ['settings', '/settings/notifications/discord/test', 'POST'] as const
}

export function getPostSettingsNotificationsDiscordTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.settings.notifications.discord.test.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.settings.notifications.discord.test.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSettingsNotificationsDiscordTestMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.settings.notifications.discord.test.$post>,
    ) {
      return parseResponse(client.settings.notifications.discord.test.$post(args, options))
    },
  })
}

export function injectPostSettingsNotificationsDiscordTest<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.settings.notifications.discord.test.$post>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.settings.notifications.discord.test.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSettingsNotificationsDiscordTestMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSettingsNotificationsLunaseaQueryKey() {
  return ['settings', '/settings/notifications/lunasea'] as const
}

export function getSettingsNotificationsLunaseaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.settings.notifications.lunasea.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.notifications.lunasea.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsNotificationsLunaseaQueryKey>
  >({
    queryKey: getSettingsNotificationsLunaseaQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.notifications.lunasea.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSettingsNotificationsLunasea<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.settings.notifications.lunasea.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.settings.notifications.lunasea.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsNotificationsLunaseaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSettingsNotificationsLunaseaQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostSettingsNotificationsLunaseaMutationKey() {
  return ['settings', '/settings/notifications/lunasea', 'POST'] as const
}

export function getPostSettingsNotificationsLunaseaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.settings.notifications.lunasea.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.settings.notifications.lunasea.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSettingsNotificationsLunaseaMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.settings.notifications.lunasea.$post>) {
      return parseResponse(client.settings.notifications.lunasea.$post(args, options))
    },
  })
}

export function injectPostSettingsNotificationsLunasea<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.settings.notifications.lunasea.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.settings.notifications.lunasea.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSettingsNotificationsLunaseaMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostSettingsNotificationsLunaseaTestMutationKey() {
  return ['settings', '/settings/notifications/lunasea/test', 'POST'] as const
}

export function getPostSettingsNotificationsLunaseaTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.settings.notifications.lunasea.test.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.settings.notifications.lunasea.test.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSettingsNotificationsLunaseaTestMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.settings.notifications.lunasea.test.$post>,
    ) {
      return parseResponse(client.settings.notifications.lunasea.test.$post(args, options))
    },
  })
}

export function injectPostSettingsNotificationsLunaseaTest<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.settings.notifications.lunasea.test.$post>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.settings.notifications.lunasea.test.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSettingsNotificationsLunaseaTestMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSettingsNotificationsPushbulletQueryKey() {
  return ['settings', '/settings/notifications/pushbullet'] as const
}

export function getSettingsNotificationsPushbulletQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.settings.notifications.pushbullet.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.settings.notifications.pushbullet.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsNotificationsPushbulletQueryKey>
  >({
    queryKey: getSettingsNotificationsPushbulletQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.notifications.pushbullet.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSettingsNotificationsPushbullet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.settings.notifications.pushbullet.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.settings.notifications.pushbullet.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsNotificationsPushbulletQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSettingsNotificationsPushbulletQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostSettingsNotificationsPushbulletMutationKey() {
  return ['settings', '/settings/notifications/pushbullet', 'POST'] as const
}

export function getPostSettingsNotificationsPushbulletMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.settings.notifications.pushbullet.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.settings.notifications.pushbullet.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSettingsNotificationsPushbulletMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.settings.notifications.pushbullet.$post>,
    ) {
      return parseResponse(client.settings.notifications.pushbullet.$post(args, options))
    },
  })
}

export function injectPostSettingsNotificationsPushbullet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.settings.notifications.pushbullet.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.settings.notifications.pushbullet.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSettingsNotificationsPushbulletMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostSettingsNotificationsPushbulletTestMutationKey() {
  return ['settings', '/settings/notifications/pushbullet/test', 'POST'] as const
}

export function getPostSettingsNotificationsPushbulletTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.settings.notifications.pushbullet.test.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.settings.notifications.pushbullet.test.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSettingsNotificationsPushbulletTestMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.settings.notifications.pushbullet.test.$post>,
    ) {
      return parseResponse(client.settings.notifications.pushbullet.test.$post(args, options))
    },
  })
}

export function injectPostSettingsNotificationsPushbulletTest<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.settings.notifications.pushbullet.test.$post>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.settings.notifications.pushbullet.test.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSettingsNotificationsPushbulletTestMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSettingsNotificationsPushoverQueryKey() {
  return ['settings', '/settings/notifications/pushover'] as const
}

export function getSettingsNotificationsPushoverQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.settings.notifications.pushover.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.settings.notifications.pushover.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsNotificationsPushoverQueryKey>
  >({
    queryKey: getSettingsNotificationsPushoverQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.notifications.pushover.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSettingsNotificationsPushover<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.settings.notifications.pushover.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.settings.notifications.pushover.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsNotificationsPushoverQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSettingsNotificationsPushoverQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostSettingsNotificationsPushoverMutationKey() {
  return ['settings', '/settings/notifications/pushover', 'POST'] as const
}

export function getPostSettingsNotificationsPushoverMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.settings.notifications.pushover.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.settings.notifications.pushover.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSettingsNotificationsPushoverMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.settings.notifications.pushover.$post>) {
      return parseResponse(client.settings.notifications.pushover.$post(args, options))
    },
  })
}

export function injectPostSettingsNotificationsPushover<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.settings.notifications.pushover.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.settings.notifications.pushover.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSettingsNotificationsPushoverMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostSettingsNotificationsPushoverTestMutationKey() {
  return ['settings', '/settings/notifications/pushover/test', 'POST'] as const
}

export function getPostSettingsNotificationsPushoverTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.settings.notifications.pushover.test.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.settings.notifications.pushover.test.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSettingsNotificationsPushoverTestMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.settings.notifications.pushover.test.$post>,
    ) {
      return parseResponse(client.settings.notifications.pushover.test.$post(args, options))
    },
  })
}

export function injectPostSettingsNotificationsPushoverTest<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.settings.notifications.pushover.test.$post>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.settings.notifications.pushover.test.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSettingsNotificationsPushoverTestMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSettingsNotificationsPushoverSoundsQueryKey(
  args: InferRequestType<typeof client.settings.notifications.pushover.sounds.$get>,
) {
  return ['settings', '/settings/notifications/pushover/sounds', args] as const
}

export function getSettingsNotificationsPushoverSoundsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.settings.notifications.pushover.sounds.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.settings.notifications.pushover.sounds.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.settings.notifications.pushover.sounds.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsNotificationsPushoverSoundsQueryKey>
  >({
    queryKey: getSettingsNotificationsPushoverSoundsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.notifications.pushover.sounds.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSettingsNotificationsPushoverSounds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.settings.notifications.pushover.sounds.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.settings.notifications.pushover.sounds.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.settings.notifications.pushover.sounds.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsNotificationsPushoverSoundsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSettingsNotificationsPushoverSoundsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getSettingsNotificationsGotifyQueryKey() {
  return ['settings', '/settings/notifications/gotify'] as const
}

export function getSettingsNotificationsGotifyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.settings.notifications.gotify.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.notifications.gotify.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsNotificationsGotifyQueryKey>
  >({
    queryKey: getSettingsNotificationsGotifyQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.notifications.gotify.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSettingsNotificationsGotify<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.settings.notifications.gotify.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.settings.notifications.gotify.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsNotificationsGotifyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSettingsNotificationsGotifyQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostSettingsNotificationsGotifyMutationKey() {
  return ['settings', '/settings/notifications/gotify', 'POST'] as const
}

export function getPostSettingsNotificationsGotifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.notifications.gotify.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.settings.notifications.gotify.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSettingsNotificationsGotifyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.settings.notifications.gotify.$post>) {
      return parseResponse(client.settings.notifications.gotify.$post(args, options))
    },
  })
}

export function injectPostSettingsNotificationsGotify<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.settings.notifications.gotify.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.settings.notifications.gotify.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSettingsNotificationsGotifyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostSettingsNotificationsGotifyTestMutationKey() {
  return ['settings', '/settings/notifications/gotify/test', 'POST'] as const
}

export function getPostSettingsNotificationsGotifyTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.settings.notifications.gotify.test.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.settings.notifications.gotify.test.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSettingsNotificationsGotifyTestMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.settings.notifications.gotify.test.$post>,
    ) {
      return parseResponse(client.settings.notifications.gotify.test.$post(args, options))
    },
  })
}

export function injectPostSettingsNotificationsGotifyTest<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.settings.notifications.gotify.test.$post>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.settings.notifications.gotify.test.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSettingsNotificationsGotifyTestMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSettingsNotificationsSlackQueryKey() {
  return ['settings', '/settings/notifications/slack'] as const
}

export function getSettingsNotificationsSlackQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.settings.notifications.slack.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.notifications.slack.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsNotificationsSlackQueryKey>
  >({
    queryKey: getSettingsNotificationsSlackQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.notifications.slack.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSettingsNotificationsSlack<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.settings.notifications.slack.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.settings.notifications.slack.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsNotificationsSlackQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSettingsNotificationsSlackQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostSettingsNotificationsSlackMutationKey() {
  return ['settings', '/settings/notifications/slack', 'POST'] as const
}

export function getPostSettingsNotificationsSlackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.notifications.slack.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.settings.notifications.slack.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSettingsNotificationsSlackMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.settings.notifications.slack.$post>) {
      return parseResponse(client.settings.notifications.slack.$post(args, options))
    },
  })
}

export function injectPostSettingsNotificationsSlack<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.settings.notifications.slack.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.settings.notifications.slack.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSettingsNotificationsSlackMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostSettingsNotificationsSlackTestMutationKey() {
  return ['settings', '/settings/notifications/slack/test', 'POST'] as const
}

export function getPostSettingsNotificationsSlackTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.settings.notifications.slack.test.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.settings.notifications.slack.test.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSettingsNotificationsSlackTestMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.settings.notifications.slack.test.$post>,
    ) {
      return parseResponse(client.settings.notifications.slack.test.$post(args, options))
    },
  })
}

export function injectPostSettingsNotificationsSlackTest<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.settings.notifications.slack.test.$post>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.settings.notifications.slack.test.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSettingsNotificationsSlackTestMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSettingsNotificationsTelegramQueryKey() {
  return ['settings', '/settings/notifications/telegram'] as const
}

export function getSettingsNotificationsTelegramQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.settings.notifications.telegram.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.settings.notifications.telegram.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsNotificationsTelegramQueryKey>
  >({
    queryKey: getSettingsNotificationsTelegramQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.notifications.telegram.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSettingsNotificationsTelegram<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.settings.notifications.telegram.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.settings.notifications.telegram.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsNotificationsTelegramQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSettingsNotificationsTelegramQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostSettingsNotificationsTelegramMutationKey() {
  return ['settings', '/settings/notifications/telegram', 'POST'] as const
}

export function getPostSettingsNotificationsTelegramMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.settings.notifications.telegram.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.settings.notifications.telegram.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSettingsNotificationsTelegramMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.settings.notifications.telegram.$post>) {
      return parseResponse(client.settings.notifications.telegram.$post(args, options))
    },
  })
}

export function injectPostSettingsNotificationsTelegram<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.settings.notifications.telegram.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.settings.notifications.telegram.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSettingsNotificationsTelegramMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostSettingsNotificationsTelegramTestMutationKey() {
  return ['settings', '/settings/notifications/telegram/test', 'POST'] as const
}

export function getPostSettingsNotificationsTelegramTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.settings.notifications.telegram.test.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.settings.notifications.telegram.test.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSettingsNotificationsTelegramTestMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.settings.notifications.telegram.test.$post>,
    ) {
      return parseResponse(client.settings.notifications.telegram.test.$post(args, options))
    },
  })
}

export function injectPostSettingsNotificationsTelegramTest<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.settings.notifications.telegram.test.$post>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.settings.notifications.telegram.test.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSettingsNotificationsTelegramTestMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSettingsNotificationsWebpushQueryKey() {
  return ['settings', '/settings/notifications/webpush'] as const
}

export function getSettingsNotificationsWebpushQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.settings.notifications.webpush.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.notifications.webpush.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsNotificationsWebpushQueryKey>
  >({
    queryKey: getSettingsNotificationsWebpushQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.notifications.webpush.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSettingsNotificationsWebpush<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.settings.notifications.webpush.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.settings.notifications.webpush.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsNotificationsWebpushQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSettingsNotificationsWebpushQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostSettingsNotificationsWebpushMutationKey() {
  return ['settings', '/settings/notifications/webpush', 'POST'] as const
}

export function getPostSettingsNotificationsWebpushMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.settings.notifications.webpush.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.settings.notifications.webpush.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSettingsNotificationsWebpushMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.settings.notifications.webpush.$post>) {
      return parseResponse(client.settings.notifications.webpush.$post(args, options))
    },
  })
}

export function injectPostSettingsNotificationsWebpush<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.settings.notifications.webpush.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.settings.notifications.webpush.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSettingsNotificationsWebpushMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostSettingsNotificationsWebpushTestMutationKey() {
  return ['settings', '/settings/notifications/webpush/test', 'POST'] as const
}

export function getPostSettingsNotificationsWebpushTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.settings.notifications.webpush.test.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.settings.notifications.webpush.test.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSettingsNotificationsWebpushTestMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.settings.notifications.webpush.test.$post>,
    ) {
      return parseResponse(client.settings.notifications.webpush.test.$post(args, options))
    },
  })
}

export function injectPostSettingsNotificationsWebpushTest<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.settings.notifications.webpush.test.$post>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.settings.notifications.webpush.test.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSettingsNotificationsWebpushTestMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSettingsNotificationsWebhookQueryKey() {
  return ['settings', '/settings/notifications/webhook'] as const
}

export function getSettingsNotificationsWebhookQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.settings.notifications.webhook.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.notifications.webhook.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsNotificationsWebhookQueryKey>
  >({
    queryKey: getSettingsNotificationsWebhookQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.notifications.webhook.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSettingsNotificationsWebhook<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.settings.notifications.webhook.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.settings.notifications.webhook.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsNotificationsWebhookQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSettingsNotificationsWebhookQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostSettingsNotificationsWebhookMutationKey() {
  return ['settings', '/settings/notifications/webhook', 'POST'] as const
}

export function getPostSettingsNotificationsWebhookMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.settings.notifications.webhook.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.settings.notifications.webhook.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSettingsNotificationsWebhookMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.settings.notifications.webhook.$post>) {
      return parseResponse(client.settings.notifications.webhook.$post(args, options))
    },
  })
}

export function injectPostSettingsNotificationsWebhook<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.settings.notifications.webhook.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.settings.notifications.webhook.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSettingsNotificationsWebhookMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostSettingsNotificationsWebhookTestMutationKey() {
  return ['settings', '/settings/notifications/webhook/test', 'POST'] as const
}

export function getPostSettingsNotificationsWebhookTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.settings.notifications.webhook.test.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.settings.notifications.webhook.test.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSettingsNotificationsWebhookTestMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.settings.notifications.webhook.test.$post>,
    ) {
      return parseResponse(client.settings.notifications.webhook.test.$post(args, options))
    },
  })
}

export function injectPostSettingsNotificationsWebhookTest<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.settings.notifications.webhook.test.$post>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.settings.notifications.webhook.test.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSettingsNotificationsWebhookTestMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSettingsDiscoverQueryKey() {
  return ['settings', '/settings/discover'] as const
}

export function getSettingsDiscoverQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.discover.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.discover.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsDiscoverQueryKey>
  >({
    queryKey: getSettingsDiscoverQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.discover.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSettingsDiscover<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.discover.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.settings.discover.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsDiscoverQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSettingsDiscoverQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostSettingsDiscoverMutationKey() {
  return ['settings', '/settings/discover', 'POST'] as const
}

export function getPostSettingsDiscoverMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.discover.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.settings.discover.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSettingsDiscoverMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.settings.discover.$post>) {
      return parseResponse(client.settings.discover.$post(args, options))
    },
  })
}

export function injectPostSettingsDiscover<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.settings.discover.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.settings.discover.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSettingsDiscoverMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPutSettingsDiscoverSliderIdMutationKey() {
  return ['settings', '/settings/discover/:sliderId', 'PUT'] as const
}

export function getPutSettingsDiscoverSliderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.settings.discover)[':sliderId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.settings.discover)[':sliderId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSettingsDiscoverSliderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.settings.discover)[':sliderId']['$put']>,
    ) {
      return parseResponse(client.settings.discover[':sliderId'].$put(args, options))
    },
  })
}

export function injectPutSettingsDiscoverSliderId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.settings.discover)[':sliderId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.settings.discover)[':sliderId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSettingsDiscoverSliderIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteSettingsDiscoverSliderIdMutationKey() {
  return ['settings', '/settings/discover/:sliderId', 'DELETE'] as const
}

export function getDeleteSettingsDiscoverSliderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.settings.discover)[':sliderId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.settings.discover)[':sliderId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSettingsDiscoverSliderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.settings.discover)[':sliderId']['$delete']>,
    ) {
      return parseResponse(client.settings.discover[':sliderId'].$delete(args, options))
    },
  })
}

export function injectDeleteSettingsDiscoverSliderId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.settings.discover)[':sliderId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.settings.discover)[':sliderId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSettingsDiscoverSliderIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostSettingsDiscoverAddMutationKey() {
  return ['settings', '/settings/discover/add', 'POST'] as const
}

export function getPostSettingsDiscoverAddMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.discover.add.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.settings.discover.add.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSettingsDiscoverAddMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.settings.discover.add.$post>) {
      return parseResponse(client.settings.discover.add.$post(args, options))
    },
  })
}

export function injectPostSettingsDiscoverAdd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.settings.discover.add.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.settings.discover.add.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSettingsDiscoverAddMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSettingsDiscoverResetQueryKey() {
  return ['settings', '/settings/discover/reset'] as const
}

export function getSettingsDiscoverResetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.settings.discover.reset.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.discover.reset.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsDiscoverResetQueryKey>
  >({
    queryKey: getSettingsDiscoverResetQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.discover.reset.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSettingsDiscoverReset<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.settings.discover.reset.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.settings.discover.reset.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsDiscoverResetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSettingsDiscoverResetQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getSettingsAboutQueryKey() {
  return ['settings', '/settings/about'] as const
}

export function getSettingsAboutQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.about.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.about.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsAboutQueryKey>
  >({
    queryKey: getSettingsAboutQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.about.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSettingsAbout<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.about.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.about.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsAboutQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSettingsAboutQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getAuthMeQueryKey() {
  return ['auth', '/auth/me'] as const
}

export function getAuthMeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.me.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAuthMeQueryKey>
  >({
    queryKey: getAuthMeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.auth.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAuthMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.me.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.me.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAuthMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAuthMeQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostAuthPlexMutationKey() {
  return ['auth', '/auth/plex', 'POST'] as const
}

export function getPostAuthPlexMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.plex.$post>>>>>,
    TError,
    InferRequestType<typeof client.auth.plex.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthPlexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.plex.$post>) {
      return parseResponse(client.auth.plex.$post(args, options))
    },
  })
}

export function injectPostAuthPlex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.plex.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.auth.plex.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAuthPlexMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAuthLocalMutationKey() {
  return ['auth', '/auth/local', 'POST'] as const
}

export function getPostAuthLocalMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.local.$post>>>>>,
    TError,
    InferRequestType<typeof client.auth.local.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthLocalMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.local.$post>) {
      return parseResponse(client.auth.local.$post(args, options))
    },
  })
}

export function injectPostAuthLocal<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.local.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.auth.local.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAuthLocalMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAuthLogoutMutationKey() {
  return ['auth', '/auth/logout', 'POST'] as const
}

export function getPostAuthLogoutMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.logout.$post>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAuthLogoutMutationKey(),
    async mutationFn() {
      return parseResponse(client.auth.logout.$post(undefined, options))
    },
  })
}

export function injectPostAuthLogout<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.logout.$post>>>>
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAuthLogoutMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAuthResetPasswordMutationKey() {
  return ['auth', '/auth/reset-password', 'POST'] as const
}

export function getPostAuthResetPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.auth)['reset-password']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.auth)['reset-password']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthResetPasswordMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.auth)['reset-password']['$post']>) {
      return parseResponse(client.auth['reset-password'].$post(args, options))
    },
  })
}

export function injectPostAuthResetPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.auth)['reset-password']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.auth)['reset-password']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAuthResetPasswordMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAuthResetPasswordGuidMutationKey() {
  return ['auth', '/auth/reset-password/:guid', 'POST'] as const
}

export function getPostAuthResetPasswordGuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.auth)['reset-password'][':guid']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.auth)['reset-password'][':guid']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthResetPasswordGuidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.auth)['reset-password'][':guid']['$post']>,
    ) {
      return parseResponse(client.auth['reset-password'][':guid'].$post(args, options))
    },
  })
}

export function injectPostAuthResetPasswordGuid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.auth)['reset-password'][':guid']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.auth)['reset-password'][':guid']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAuthResetPasswordGuidMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUserQueryKey(args: InferRequestType<typeof client.user.$get>) {
  return ['user', '/user', args] as const
}

export function getUserQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.user.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUserQueryKey>
  >({
    queryKey: getUserQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUser<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.user.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUserQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutUserMutationKey() {
  return ['user', '/user', 'PUT'] as const
}

export function getPutUserMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$put>>>>>,
    TError,
    InferRequestType<typeof client.user.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutUserMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user.$put>) {
      return parseResponse(client.user.$put(args, options))
    },
  })
}

export function injectPutUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$put>>>>>,
        TError,
        InferRequestType<typeof client.user.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUserMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostUserMutationKey() {
  return ['user', '/user', 'POST'] as const
}

export function getPostUserMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$post>>>>>,
    TError,
    InferRequestType<typeof client.user.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user.$post>) {
      return parseResponse(client.user.$post(args, options))
    },
  })
}

export function injectPostUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$post>>>>>,
        TError,
        InferRequestType<typeof client.user.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostUserImportFromPlexMutationKey() {
  return ['user', '/user/import-from-plex', 'POST'] as const
}

export function getPostUserImportFromPlexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.user)['import-from-plex']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.user)['import-from-plex']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserImportFromPlexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.user)['import-from-plex']['$post']>) {
      return parseResponse(client.user['import-from-plex'].$post(args, options))
    },
  })
}

export function injectPostUserImportFromPlex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.user)['import-from-plex']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.user)['import-from-plex']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserImportFromPlexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostUserRegisterPushSubscriptionMutationKey() {
  return ['user', '/user/registerPushSubscription', 'POST'] as const
}

export function getPostUserRegisterPushSubscriptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.user.registerPushSubscription.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.user.registerPushSubscription.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserRegisterPushSubscriptionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user.registerPushSubscription.$post>) {
      return parseResponse(client.user.registerPushSubscription.$post(args, options))
    },
  })
}

export function injectPostUserRegisterPushSubscription<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.user.registerPushSubscription.$post>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.user.registerPushSubscription.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserRegisterPushSubscriptionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUserUserIdPushSubscriptionsQueryKey(
  args: InferRequestType<(typeof client.user)[':userId']['pushSubscriptions']['$get']>,
) {
  return ['user', '/user/:userId/pushSubscriptions', args] as const
}

export function getUserUserIdPushSubscriptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user)[':userId']['pushSubscriptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user)[':userId']['pushSubscriptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user)[':userId']['pushSubscriptions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserUserIdPushSubscriptionsQueryKey>
  >({
    queryKey: getUserUserIdPushSubscriptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user[':userId'].pushSubscriptions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUserUserIdPushSubscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user)[':userId']['pushSubscriptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.user)[':userId']['pushSubscriptions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.user)[':userId']['pushSubscriptions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserUserIdPushSubscriptionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUserUserIdPushSubscriptionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getUserUserIdPushSubscriptionEndpointQueryKey(
  args: InferRequestType<(typeof client.user)[':userId']['pushSubscription'][':endpoint']['$get']>,
) {
  return ['user', '/user/:userId/pushSubscription/:endpoint', args] as const
}

export function getUserUserIdPushSubscriptionEndpointQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.user)[':userId']['pushSubscription'][':endpoint']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user)[':userId']['pushSubscription'][':endpoint']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.user)[':userId']['pushSubscription'][':endpoint']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserUserIdPushSubscriptionEndpointQueryKey>
  >({
    queryKey: getUserUserIdPushSubscriptionEndpointQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user[':userId'].pushSubscription[':endpoint'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUserUserIdPushSubscriptionEndpoint<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.user)[':userId']['pushSubscription'][':endpoint']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.user)[':userId']['pushSubscription'][':endpoint']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.user)[':userId']['pushSubscription'][':endpoint']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserUserIdPushSubscriptionEndpointQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUserUserIdPushSubscriptionEndpointQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteUserUserIdPushSubscriptionEndpointMutationKey() {
  return ['user', '/user/:userId/pushSubscription/:endpoint', 'DELETE'] as const
}

export function getDeleteUserUserIdPushSubscriptionEndpointMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.user)[':userId']['pushSubscription'][':endpoint']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUserUserIdPushSubscriptionEndpointMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.user)[':userId']['pushSubscription'][':endpoint']['$delete']
      >,
    ) {
      return parseResponse(
        client.user[':userId'].pushSubscription[':endpoint'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteUserUserIdPushSubscriptionEndpoint<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.user)[':userId']['pushSubscription'][':endpoint']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUserUserIdPushSubscriptionEndpointMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectUserUserId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':userId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.user)[':userId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserUserIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutUserUserIdMutationKey() {
  return ['user', '/user/:userId', 'PUT'] as const
}

export function getPutUserUserIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':userId']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.user)[':userId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUserUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.user)[':userId']['$put']>) {
      return parseResponse(client.user[':userId'].$put(args, options))
    },
  })
}

export function injectPutUserUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':userId']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.user)[':userId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUserUserIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteUserUserIdMutationKey() {
  return ['user', '/user/:userId', 'DELETE'] as const
}

export function getDeleteUserUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':userId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.user)[':userId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUserUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.user)[':userId']['$delete']>) {
      return parseResponse(client.user[':userId'].$delete(args, options))
    },
  })
}

export function injectDeleteUserUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':userId']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.user)[':userId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUserUserIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUserUserIdRequestsQueryKey(
  args: InferRequestType<(typeof client.user)[':userId']['requests']['$get']>,
) {
  return ['user', '/user/:userId/requests', args] as const
}

export function getUserUserIdRequestsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':userId']['requests']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user)[':userId']['requests']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user)[':userId']['requests']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserUserIdRequestsQueryKey>
  >({
    queryKey: getUserUserIdRequestsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user[':userId'].requests.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUserUserIdRequests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':userId']['requests']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.user)[':userId']['requests']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.user)[':userId']['requests']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserUserIdRequestsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserUserIdRequestsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getUserUserIdQuotaQueryKey(
  args: InferRequestType<(typeof client.user)[':userId']['quota']['$get']>,
) {
  return ['user', '/user/:userId/quota', args] as const
}

export function getUserUserIdQuotaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':userId']['quota']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user)[':userId']['quota']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':userId']['quota']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserUserIdQuotaQueryKey>
  >({
    queryKey: getUserUserIdQuotaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user[':userId'].quota.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUserUserIdQuota<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':userId']['quota']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.user)[':userId']['quota']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.user)[':userId']['quota']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserUserIdQuotaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserUserIdQuotaQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getUserUserIdWatchlistQueryKey(
  args: InferRequestType<(typeof client.user)[':userId']['watchlist']['$get']>,
) {
  return ['user', '/user/:userId/watchlist', args] as const
}

export function getUserUserIdWatchlistQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user)[':userId']['watchlist']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user)[':userId']['watchlist']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user)[':userId']['watchlist']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserUserIdWatchlistQueryKey>
  >({
    queryKey: getUserUserIdWatchlistQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user[':userId'].watchlist.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUserUserIdWatchlist<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user)[':userId']['watchlist']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.user)[':userId']['watchlist']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.user)[':userId']['watchlist']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserUserIdWatchlistQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserUserIdWatchlistQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getUserUserIdSettingsMainQueryKey(
  args: InferRequestType<(typeof client.user)[':userId']['settings']['main']['$get']>,
) {
  return ['user', '/user/:userId/settings/main', args] as const
}

export function getUserUserIdSettingsMainQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user)[':userId']['settings']['main']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user)[':userId']['settings']['main']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user)[':userId']['settings']['main']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserUserIdSettingsMainQueryKey>
  >({
    queryKey: getUserUserIdSettingsMainQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user[':userId'].settings.main.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUserUserIdSettingsMain<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user)[':userId']['settings']['main']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.user)[':userId']['settings']['main']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.user)[':userId']['settings']['main']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserUserIdSettingsMainQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUserUserIdSettingsMainQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostUserUserIdSettingsMainMutationKey() {
  return ['user', '/user/:userId/settings/main', 'POST'] as const
}

export function getPostUserUserIdSettingsMainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user)[':userId']['settings']['main']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.user)[':userId']['settings']['main']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserUserIdSettingsMainMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.user)[':userId']['settings']['main']['$post']>,
    ) {
      return parseResponse(client.user[':userId'].settings.main.$post(args, options))
    },
  })
}

export function injectPostUserUserIdSettingsMain<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.user)[':userId']['settings']['main']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.user)[':userId']['settings']['main']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserUserIdSettingsMainMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUserUserIdSettingsPasswordQueryKey(
  args: InferRequestType<(typeof client.user)[':userId']['settings']['password']['$get']>,
) {
  return ['user', '/user/:userId/settings/password', args] as const
}

export function getUserUserIdSettingsPasswordQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user)[':userId']['settings']['password']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user)[':userId']['settings']['password']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user)[':userId']['settings']['password']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserUserIdSettingsPasswordQueryKey>
  >({
    queryKey: getUserUserIdSettingsPasswordQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user[':userId'].settings.password.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUserUserIdSettingsPassword<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user)[':userId']['settings']['password']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.user)[':userId']['settings']['password']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.user)[':userId']['settings']['password']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserUserIdSettingsPasswordQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUserUserIdSettingsPasswordQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostUserUserIdSettingsPasswordMutationKey() {
  return ['user', '/user/:userId/settings/password', 'POST'] as const
}

export function getPostUserUserIdSettingsPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user)[':userId']['settings']['password']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.user)[':userId']['settings']['password']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserUserIdSettingsPasswordMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.user)[':userId']['settings']['password']['$post']>,
    ) {
      return parseResponse(client.user[':userId'].settings.password.$post(args, options))
    },
  })
}

export function injectPostUserUserIdSettingsPassword<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.user)[':userId']['settings']['password']['$post']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.user)[':userId']['settings']['password']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserUserIdSettingsPasswordMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUserUserIdSettingsNotificationsQueryKey(
  args: InferRequestType<(typeof client.user)[':userId']['settings']['notifications']['$get']>,
) {
  return ['user', '/user/:userId/settings/notifications', args] as const
}

export function getUserUserIdSettingsNotificationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user)[':userId']['settings']['notifications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user)[':userId']['settings']['notifications']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user)[':userId']['settings']['notifications']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserUserIdSettingsNotificationsQueryKey>
  >({
    queryKey: getUserUserIdSettingsNotificationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user[':userId'].settings.notifications.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUserUserIdSettingsNotifications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user)[':userId']['settings']['notifications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.user)[':userId']['settings']['notifications']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.user)[':userId']['settings']['notifications']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserUserIdSettingsNotificationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUserUserIdSettingsNotificationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostUserUserIdSettingsNotificationsMutationKey() {
  return ['user', '/user/:userId/settings/notifications', 'POST'] as const
}

export function getPostUserUserIdSettingsNotificationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user)[':userId']['settings']['notifications']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.user)[':userId']['settings']['notifications']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserUserIdSettingsNotificationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.user)[':userId']['settings']['notifications']['$post']>,
    ) {
      return parseResponse(client.user[':userId'].settings.notifications.$post(args, options))
    },
  })
}

export function injectPostUserUserIdSettingsNotifications<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.user)[':userId']['settings']['notifications']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.user)[':userId']['settings']['notifications']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserUserIdSettingsNotificationsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUserUserIdSettingsPermissionsQueryKey(
  args: InferRequestType<(typeof client.user)[':userId']['settings']['permissions']['$get']>,
) {
  return ['user', '/user/:userId/settings/permissions', args] as const
}

export function getUserUserIdSettingsPermissionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user)[':userId']['settings']['permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user)[':userId']['settings']['permissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user)[':userId']['settings']['permissions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserUserIdSettingsPermissionsQueryKey>
  >({
    queryKey: getUserUserIdSettingsPermissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user[':userId'].settings.permissions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUserUserIdSettingsPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user)[':userId']['settings']['permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.user)[':userId']['settings']['permissions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.user)[':userId']['settings']['permissions']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserUserIdSettingsPermissionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUserUserIdSettingsPermissionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostUserUserIdSettingsPermissionsMutationKey() {
  return ['user', '/user/:userId/settings/permissions', 'POST'] as const
}

export function getPostUserUserIdSettingsPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user)[':userId']['settings']['permissions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.user)[':userId']['settings']['permissions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserUserIdSettingsPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.user)[':userId']['settings']['permissions']['$post']>,
    ) {
      return parseResponse(client.user[':userId'].settings.permissions.$post(args, options))
    },
  })
}

export function injectPostUserUserIdSettingsPermissions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.user)[':userId']['settings']['permissions']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.user)[':userId']['settings']['permissions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUserUserIdSettingsPermissionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUserUserIdWatchDataQueryKey(
  args: InferRequestType<(typeof client.user)[':userId']['watch_data']['$get']>,
) {
  return ['user', '/user/:userId/watch_data', args] as const
}

export function getUserUserIdWatchDataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user)[':userId']['watch_data']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.user)[':userId']['watch_data']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user)[':userId']['watch_data']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserUserIdWatchDataQueryKey>
  >({
    queryKey: getUserUserIdWatchDataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.user[':userId'].watch_data.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUserUserIdWatchData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user)[':userId']['watch_data']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.user)[':userId']['watch_data']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.user)[':userId']['watch_data']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserUserIdWatchDataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserUserIdWatchDataQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getSearchQueryKey(args: InferRequestType<typeof client.search.$get>) {
  return ['search', '/search', args] as const
}

export function getSearchQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSearchQueryKey>
  >({
    queryKey: getSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSearch<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getSearchKeywordQueryKey(
  args: InferRequestType<typeof client.search.keyword.$get>,
) {
  return ['search', '/search/keyword', args] as const
}

export function getSearchKeywordQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.keyword.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.search.keyword.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.keyword.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchKeywordQueryKey>
  >({
    queryKey: getSearchKeywordQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search.keyword.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSearchKeyword<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.keyword.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.search.keyword.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.keyword.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSearchKeywordQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSearchKeywordQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getSearchCompanyQueryKey(
  args: InferRequestType<typeof client.search.company.$get>,
) {
  return ['search', '/search/company', args] as const
}

export function getSearchCompanyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.company.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.search.company.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.company.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchCompanyQueryKey>
  >({
    queryKey: getSearchCompanyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search.company.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSearchCompany<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.company.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.search.company.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.company.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSearchCompanyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSearchCompanyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDiscoverMoviesQueryKey(
  args: InferRequestType<typeof client.discover.movies.$get>,
) {
  return ['discover', '/discover/movies', args] as const
}

export function getDiscoverMoviesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discover.movies.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.discover.movies.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discover.movies.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDiscoverMoviesQueryKey>
  >({
    queryKey: getDiscoverMoviesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.discover.movies.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDiscoverMovies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discover.movies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.discover.movies.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discover.movies.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDiscoverMoviesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDiscoverMoviesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDiscoverMoviesGenreGenreIdQueryKey(
  args: InferRequestType<(typeof client.discover.movies.genre)[':genreId']['$get']>,
) {
  return ['discover', '/discover/movies/genre/:genreId', args] as const
}

export function getDiscoverMoviesGenreGenreIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.discover.movies.genre)[':genreId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.discover.movies.genre)[':genreId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.discover.movies.genre)[':genreId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDiscoverMoviesGenreGenreIdQueryKey>
  >({
    queryKey: getDiscoverMoviesGenreGenreIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.discover.movies.genre[':genreId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDiscoverMoviesGenreGenreId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.discover.movies.genre)[':genreId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.discover.movies.genre)[':genreId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.discover.movies.genre)[':genreId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDiscoverMoviesGenreGenreIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDiscoverMoviesGenreGenreIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDiscoverMoviesLanguageLanguageQueryKey(
  args: InferRequestType<(typeof client.discover.movies.language)[':language']['$get']>,
) {
  return ['discover', '/discover/movies/language/:language', args] as const
}

export function getDiscoverMoviesLanguageLanguageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.discover.movies.language)[':language']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.discover.movies.language)[':language']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.discover.movies.language)[':language']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDiscoverMoviesLanguageLanguageQueryKey>
  >({
    queryKey: getDiscoverMoviesLanguageLanguageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.discover.movies.language[':language'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDiscoverMoviesLanguageLanguage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.discover.movies.language)[':language']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.discover.movies.language)[':language']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.discover.movies.language)[':language']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDiscoverMoviesLanguageLanguageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDiscoverMoviesLanguageLanguageQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDiscoverMoviesStudioStudioIdQueryKey(
  args: InferRequestType<(typeof client.discover.movies.studio)[':studioId']['$get']>,
) {
  return ['discover', '/discover/movies/studio/:studioId', args] as const
}

export function getDiscoverMoviesStudioStudioIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.discover.movies.studio)[':studioId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.discover.movies.studio)[':studioId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.discover.movies.studio)[':studioId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDiscoverMoviesStudioStudioIdQueryKey>
  >({
    queryKey: getDiscoverMoviesStudioStudioIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.discover.movies.studio[':studioId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDiscoverMoviesStudioStudioId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.discover.movies.studio)[':studioId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.discover.movies.studio)[':studioId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.discover.movies.studio)[':studioId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDiscoverMoviesStudioStudioIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDiscoverMoviesStudioStudioIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDiscoverMoviesUpcomingQueryKey(
  args: InferRequestType<typeof client.discover.movies.upcoming.$get>,
) {
  return ['discover', '/discover/movies/upcoming', args] as const
}

export function getDiscoverMoviesUpcomingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.discover.movies.upcoming.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.discover.movies.upcoming.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.discover.movies.upcoming.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDiscoverMoviesUpcomingQueryKey>
  >({
    queryKey: getDiscoverMoviesUpcomingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.discover.movies.upcoming.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDiscoverMoviesUpcoming<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.discover.movies.upcoming.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.discover.movies.upcoming.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.discover.movies.upcoming.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDiscoverMoviesUpcomingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDiscoverMoviesUpcomingQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDiscoverTvQueryKey(args: InferRequestType<typeof client.discover.tv.$get>) {
  return ['discover', '/discover/tv', args] as const
}

export function getDiscoverTvQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discover.tv.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.discover.tv.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discover.tv.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDiscoverTvQueryKey>
  >({
    queryKey: getDiscoverTvQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.discover.tv.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDiscoverTv<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discover.tv.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.discover.tv.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discover.tv.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDiscoverTvQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDiscoverTvQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDiscoverTvLanguageLanguageQueryKey(
  args: InferRequestType<(typeof client.discover.tv.language)[':language']['$get']>,
) {
  return ['discover', '/discover/tv/language/:language', args] as const
}

export function getDiscoverTvLanguageLanguageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.discover.tv.language)[':language']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.discover.tv.language)[':language']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.discover.tv.language)[':language']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDiscoverTvLanguageLanguageQueryKey>
  >({
    queryKey: getDiscoverTvLanguageLanguageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.discover.tv.language[':language'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDiscoverTvLanguageLanguage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.discover.tv.language)[':language']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.discover.tv.language)[':language']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.discover.tv.language)[':language']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDiscoverTvLanguageLanguageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDiscoverTvLanguageLanguageQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDiscoverTvGenreGenreIdQueryKey(
  args: InferRequestType<(typeof client.discover.tv.genre)[':genreId']['$get']>,
) {
  return ['discover', '/discover/tv/genre/:genreId', args] as const
}

export function getDiscoverTvGenreGenreIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.discover.tv.genre)[':genreId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.discover.tv.genre)[':genreId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.discover.tv.genre)[':genreId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDiscoverTvGenreGenreIdQueryKey>
  >({
    queryKey: getDiscoverTvGenreGenreIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.discover.tv.genre[':genreId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDiscoverTvGenreGenreId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.discover.tv.genre)[':genreId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.discover.tv.genre)[':genreId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.discover.tv.genre)[':genreId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDiscoverTvGenreGenreIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDiscoverTvGenreGenreIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDiscoverTvNetworkNetworkIdQueryKey(
  args: InferRequestType<(typeof client.discover.tv.network)[':networkId']['$get']>,
) {
  return ['discover', '/discover/tv/network/:networkId', args] as const
}

export function getDiscoverTvNetworkNetworkIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.discover.tv.network)[':networkId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.discover.tv.network)[':networkId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.discover.tv.network)[':networkId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDiscoverTvNetworkNetworkIdQueryKey>
  >({
    queryKey: getDiscoverTvNetworkNetworkIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.discover.tv.network[':networkId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDiscoverTvNetworkNetworkId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.discover.tv.network)[':networkId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.discover.tv.network)[':networkId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.discover.tv.network)[':networkId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDiscoverTvNetworkNetworkIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDiscoverTvNetworkNetworkIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDiscoverTvUpcomingQueryKey(
  args: InferRequestType<typeof client.discover.tv.upcoming.$get>,
) {
  return ['discover', '/discover/tv/upcoming', args] as const
}

export function getDiscoverTvUpcomingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discover.tv.upcoming.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.discover.tv.upcoming.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discover.tv.upcoming.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDiscoverTvUpcomingQueryKey>
  >({
    queryKey: getDiscoverTvUpcomingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.discover.tv.upcoming.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDiscoverTvUpcoming<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discover.tv.upcoming.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.discover.tv.upcoming.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.discover.tv.upcoming.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDiscoverTvUpcomingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDiscoverTvUpcomingQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDiscoverTrendingQueryKey(
  args: InferRequestType<typeof client.discover.trending.$get>,
) {
  return ['discover', '/discover/trending', args] as const
}

export function getDiscoverTrendingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discover.trending.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.discover.trending.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discover.trending.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDiscoverTrendingQueryKey>
  >({
    queryKey: getDiscoverTrendingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.discover.trending.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDiscoverTrending<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discover.trending.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.discover.trending.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.discover.trending.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDiscoverTrendingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDiscoverTrendingQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDiscoverKeywordKeywordIdMoviesQueryKey(
  args: InferRequestType<(typeof client.discover.keyword)[':keywordId']['movies']['$get']>,
) {
  return ['discover', '/discover/keyword/:keywordId/movies', args] as const
}

export function getDiscoverKeywordKeywordIdMoviesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.discover.keyword)[':keywordId']['movies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.discover.keyword)[':keywordId']['movies']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.discover.keyword)[':keywordId']['movies']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDiscoverKeywordKeywordIdMoviesQueryKey>
  >({
    queryKey: getDiscoverKeywordKeywordIdMoviesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.discover.keyword[':keywordId'].movies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDiscoverKeywordKeywordIdMovies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.discover.keyword)[':keywordId']['movies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.discover.keyword)[':keywordId']['movies']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.discover.keyword)[':keywordId']['movies']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDiscoverKeywordKeywordIdMoviesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDiscoverKeywordKeywordIdMoviesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDiscoverGenresliderMovieQueryKey(
  args: InferRequestType<typeof client.discover.genreslider.movie.$get>,
) {
  return ['discover', '/discover/genreslider/movie', args] as const
}

export function getDiscoverGenresliderMovieQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.discover.genreslider.movie.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.discover.genreslider.movie.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.discover.genreslider.movie.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDiscoverGenresliderMovieQueryKey>
  >({
    queryKey: getDiscoverGenresliderMovieQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.discover.genreslider.movie.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDiscoverGenresliderMovie<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.discover.genreslider.movie.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.discover.genreslider.movie.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.discover.genreslider.movie.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDiscoverGenresliderMovieQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDiscoverGenresliderMovieQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDiscoverGenresliderTvQueryKey(
  args: InferRequestType<typeof client.discover.genreslider.tv.$get>,
) {
  return ['discover', '/discover/genreslider/tv', args] as const
}

export function getDiscoverGenresliderTvQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.discover.genreslider.tv.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.discover.genreslider.tv.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.discover.genreslider.tv.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDiscoverGenresliderTvQueryKey>
  >({
    queryKey: getDiscoverGenresliderTvQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.discover.genreslider.tv.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDiscoverGenresliderTv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.discover.genreslider.tv.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.discover.genreslider.tv.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.discover.genreslider.tv.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDiscoverGenresliderTvQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDiscoverGenresliderTvQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDiscoverWatchlistQueryKey(
  args: InferRequestType<typeof client.discover.watchlist.$get>,
) {
  return ['discover', '/discover/watchlist', args] as const
}

export function getDiscoverWatchlistQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discover.watchlist.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.discover.watchlist.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discover.watchlist.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDiscoverWatchlistQueryKey>
  >({
    queryKey: getDiscoverWatchlistQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.discover.watchlist.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDiscoverWatchlist<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discover.watchlist.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.discover.watchlist.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.discover.watchlist.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDiscoverWatchlistQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDiscoverWatchlistQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getRequestQueryKey(args: InferRequestType<typeof client.request.$get>) {
  return ['request', '/request', args] as const
}

export function getRequestQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.request.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.request.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.request.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRequestQueryKey>
  >({
    queryKey: getRequestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.request.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectRequest<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.request.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.request.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.request.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getRequestQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRequestQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostRequestMutationKey() {
  return ['request', '/request', 'POST'] as const
}

export function getPostRequestMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.request.$post>>>>>,
    TError,
    InferRequestType<typeof client.request.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRequestMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.request.$post>) {
      return parseResponse(client.request.$post(args, options))
    },
  })
}

export function injectPostRequest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.request.$post>>>>>,
        TError,
        InferRequestType<typeof client.request.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRequestMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getRequestCountQueryKey() {
  return ['request', '/request/count'] as const
}

export function getRequestCountQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.request.count.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.request.count.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRequestCountQueryKey>
  >({
    queryKey: getRequestCountQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.request.count.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectRequestCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.request.count.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.request.count.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRequestCountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRequestCountQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getRequestRequestIdQueryKey(
  args: InferRequestType<(typeof client.request)[':requestId']['$get']>,
) {
  return ['request', '/request/:requestId', args] as const
}

export function getRequestRequestIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.request)[':requestId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.request)[':requestId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.request)[':requestId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRequestRequestIdQueryKey>
  >({
    queryKey: getRequestRequestIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.request[':requestId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectRequestRequestId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.request)[':requestId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.request)[':requestId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.request)[':requestId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRequestRequestIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRequestRequestIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutRequestRequestIdMutationKey() {
  return ['request', '/request/:requestId', 'PUT'] as const
}

export function getPutRequestRequestIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.request)[':requestId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.request)[':requestId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutRequestRequestIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.request)[':requestId']['$put']>) {
      return parseResponse(client.request[':requestId'].$put(args, options))
    },
  })
}

export function injectPutRequestRequestId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.request)[':requestId']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.request)[':requestId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutRequestRequestIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteRequestRequestIdMutationKey() {
  return ['request', '/request/:requestId', 'DELETE'] as const
}

export function getDeleteRequestRequestIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.request)[':requestId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.request)[':requestId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRequestRequestIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.request)[':requestId']['$delete']>) {
      return parseResponse(client.request[':requestId'].$delete(args, options))
    },
  })
}

export function injectDeleteRequestRequestId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.request)[':requestId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.request)[':requestId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteRequestRequestIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostRequestRequestIdRetryMutationKey() {
  return ['request', '/request/:requestId/retry', 'POST'] as const
}

export function getPostRequestRequestIdRetryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.request)[':requestId']['retry']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.request)[':requestId']['retry']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRequestRequestIdRetryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.request)[':requestId']['retry']['$post']>,
    ) {
      return parseResponse(client.request[':requestId'].retry.$post(args, options))
    },
  })
}

export function injectPostRequestRequestIdRetry<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.request)[':requestId']['retry']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.request)[':requestId']['retry']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRequestRequestIdRetryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostRequestRequestIdStatusMutationKey() {
  return ['request', '/request/:requestId/:status', 'POST'] as const
}

export function getPostRequestRequestIdStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.request)[':requestId'][':status']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.request)[':requestId'][':status']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRequestRequestIdStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.request)[':requestId'][':status']['$post']>,
    ) {
      return parseResponse(client.request[':requestId'][':status'].$post(args, options))
    },
  })
}

export function injectPostRequestRequestIdStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.request)[':requestId'][':status']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.request)[':requestId'][':status']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRequestRequestIdStatusMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getMovieMovieIdQueryKey(
  args: InferRequestType<(typeof client.movie)[':movieId']['$get']>,
) {
  return ['movie', '/movie/:movieId', args] as const
}

export function getMovieMovieIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.movie)[':movieId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.movie)[':movieId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.movie)[':movieId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMovieMovieIdQueryKey>
  >({
    queryKey: getMovieMovieIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.movie[':movieId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMovieMovieId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.movie)[':movieId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.movie)[':movieId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.movie)[':movieId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMovieMovieIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMovieMovieIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getMovieMovieIdRecommendationsQueryKey(
  args: InferRequestType<(typeof client.movie)[':movieId']['recommendations']['$get']>,
) {
  return ['movie', '/movie/:movieId/recommendations', args] as const
}

export function getMovieMovieIdRecommendationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.movie)[':movieId']['recommendations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.movie)[':movieId']['recommendations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.movie)[':movieId']['recommendations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMovieMovieIdRecommendationsQueryKey>
  >({
    queryKey: getMovieMovieIdRecommendationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.movie[':movieId'].recommendations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMovieMovieIdRecommendations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.movie)[':movieId']['recommendations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.movie)[':movieId']['recommendations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.movie)[':movieId']['recommendations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMovieMovieIdRecommendationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMovieMovieIdRecommendationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getMovieMovieIdSimilarQueryKey(
  args: InferRequestType<(typeof client.movie)[':movieId']['similar']['$get']>,
) {
  return ['movie', '/movie/:movieId/similar', args] as const
}

export function getMovieMovieIdSimilarQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.movie)[':movieId']['similar']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.movie)[':movieId']['similar']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.movie)[':movieId']['similar']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMovieMovieIdSimilarQueryKey>
  >({
    queryKey: getMovieMovieIdSimilarQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.movie[':movieId'].similar.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMovieMovieIdSimilar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.movie)[':movieId']['similar']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.movie)[':movieId']['similar']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.movie)[':movieId']['similar']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMovieMovieIdSimilarQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMovieMovieIdSimilarQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getMovieMovieIdRatingsQueryKey(
  args: InferRequestType<(typeof client.movie)[':movieId']['ratings']['$get']>,
) {
  return ['movie', '/movie/:movieId/ratings', args] as const
}

export function getMovieMovieIdRatingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.movie)[':movieId']['ratings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.movie)[':movieId']['ratings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.movie)[':movieId']['ratings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMovieMovieIdRatingsQueryKey>
  >({
    queryKey: getMovieMovieIdRatingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.movie[':movieId'].ratings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMovieMovieIdRatings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.movie)[':movieId']['ratings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.movie)[':movieId']['ratings']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.movie)[':movieId']['ratings']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMovieMovieIdRatingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMovieMovieIdRatingsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getMovieMovieIdRatingscombinedQueryKey(
  args: InferRequestType<(typeof client.movie)[':movieId']['ratingscombined']['$get']>,
) {
  return ['movie', '/movie/:movieId/ratingscombined', args] as const
}

export function getMovieMovieIdRatingscombinedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.movie)[':movieId']['ratingscombined']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.movie)[':movieId']['ratingscombined']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.movie)[':movieId']['ratingscombined']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMovieMovieIdRatingscombinedQueryKey>
  >({
    queryKey: getMovieMovieIdRatingscombinedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.movie[':movieId'].ratingscombined.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMovieMovieIdRatingscombined<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.movie)[':movieId']['ratingscombined']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.movie)[':movieId']['ratingscombined']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.movie)[':movieId']['ratingscombined']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMovieMovieIdRatingscombinedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMovieMovieIdRatingscombinedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getTvTvIdQueryKey(args: InferRequestType<(typeof client.tv)[':tvId']['$get']>) {
  return ['tv', '/tv/:tvId', args] as const
}

export function getTvTvIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tv)[':tvId']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.tv)[':tvId']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tv)[':tvId']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTvTvIdQueryKey>
  >({
    queryKey: getTvTvIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tv[':tvId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTvTvId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tv)[':tvId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tv)[':tvId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tv)[':tvId']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTvTvIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTvTvIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getTvTvIdSeasonSeasonIdQueryKey(
  args: InferRequestType<(typeof client.tv)[':tvId']['season'][':seasonId']['$get']>,
) {
  return ['tv', '/tv/:tvId/season/:seasonId', args] as const
}

export function getTvTvIdSeasonSeasonIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tv)[':tvId']['season'][':seasonId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tv)[':tvId']['season'][':seasonId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tv)[':tvId']['season'][':seasonId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTvTvIdSeasonSeasonIdQueryKey>
  >({
    queryKey: getTvTvIdSeasonSeasonIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tv[':tvId'].season[':seasonId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTvTvIdSeasonSeasonId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tv)[':tvId']['season'][':seasonId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tv)[':tvId']['season'][':seasonId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tv)[':tvId']['season'][':seasonId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTvTvIdSeasonSeasonIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTvTvIdSeasonSeasonIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getTvTvIdRecommendationsQueryKey(
  args: InferRequestType<(typeof client.tv)[':tvId']['recommendations']['$get']>,
) {
  return ['tv', '/tv/:tvId/recommendations', args] as const
}

export function getTvTvIdRecommendationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tv)[':tvId']['recommendations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tv)[':tvId']['recommendations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tv)[':tvId']['recommendations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTvTvIdRecommendationsQueryKey>
  >({
    queryKey: getTvTvIdRecommendationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tv[':tvId'].recommendations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTvTvIdRecommendations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tv)[':tvId']['recommendations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tv)[':tvId']['recommendations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tv)[':tvId']['recommendations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTvTvIdRecommendationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTvTvIdRecommendationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getTvTvIdSimilarQueryKey(
  args: InferRequestType<(typeof client.tv)[':tvId']['similar']['$get']>,
) {
  return ['tv', '/tv/:tvId/similar', args] as const
}

export function getTvTvIdSimilarQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tv)[':tvId']['similar']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tv)[':tvId']['similar']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tv)[':tvId']['similar']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTvTvIdSimilarQueryKey>
  >({
    queryKey: getTvTvIdSimilarQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tv[':tvId'].similar.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTvTvIdSimilar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tv)[':tvId']['similar']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tv)[':tvId']['similar']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tv)[':tvId']['similar']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTvTvIdSimilarQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTvTvIdSimilarQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getTvTvIdRatingsQueryKey(
  args: InferRequestType<(typeof client.tv)[':tvId']['ratings']['$get']>,
) {
  return ['tv', '/tv/:tvId/ratings', args] as const
}

export function getTvTvIdRatingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tv)[':tvId']['ratings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tv)[':tvId']['ratings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tv)[':tvId']['ratings']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTvTvIdRatingsQueryKey>
  >({
    queryKey: getTvTvIdRatingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tv[':tvId'].ratings.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTvTvIdRatings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tv)[':tvId']['ratings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tv)[':tvId']['ratings']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tv)[':tvId']['ratings']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTvTvIdRatingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTvTvIdRatingsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPersonPersonIdQueryKey(
  args: InferRequestType<(typeof client.person)[':personId']['$get']>,
) {
  return ['person', '/person/:personId', args] as const
}

export function getPersonPersonIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.person)[':personId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.person)[':personId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.person)[':personId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPersonPersonIdQueryKey>
  >({
    queryKey: getPersonPersonIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.person[':personId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPersonPersonId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.person)[':personId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.person)[':personId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.person)[':personId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPersonPersonIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPersonPersonIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPersonPersonIdCombinedCreditsQueryKey(
  args: InferRequestType<(typeof client.person)[':personId']['combined_credits']['$get']>,
) {
  return ['person', '/person/:personId/combined_credits', args] as const
}

export function getPersonPersonIdCombinedCreditsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.person)[':personId']['combined_credits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.person)[':personId']['combined_credits']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.person)[':personId']['combined_credits']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPersonPersonIdCombinedCreditsQueryKey>
  >({
    queryKey: getPersonPersonIdCombinedCreditsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.person[':personId'].combined_credits.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectPersonPersonIdCombinedCredits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.person)[':personId']['combined_credits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.person)[':personId']['combined_credits']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.person)[':personId']['combined_credits']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPersonPersonIdCombinedCreditsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPersonPersonIdCombinedCreditsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getMediaQueryKey(args: InferRequestType<typeof client.media.$get>) {
  return ['media', '/media', args] as const
}

export function getMediaQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.media.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMediaQueryKey>
  >({
    queryKey: getMediaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.media.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMedia<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.media.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMediaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMediaQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteMediaMediaIdMutationKey() {
  return ['media', '/media/:mediaId', 'DELETE'] as const
}

export function getDeleteMediaMediaIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.media)[':mediaId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.media)[':mediaId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMediaMediaIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.media)[':mediaId']['$delete']>) {
      return parseResponse(client.media[':mediaId'].$delete(args, options))
    },
  })
}

export function injectDeleteMediaMediaId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.media)[':mediaId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.media)[':mediaId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteMediaMediaIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostMediaMediaIdStatusMutationKey() {
  return ['media', '/media/:mediaId/:status', 'POST'] as const
}

export function getPostMediaMediaIdStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.media)[':mediaId'][':status']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.media)[':mediaId'][':status']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMediaMediaIdStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.media)[':mediaId'][':status']['$post']>,
    ) {
      return parseResponse(client.media[':mediaId'][':status'].$post(args, options))
    },
  })
}

export function injectPostMediaMediaIdStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.media)[':mediaId'][':status']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.media)[':mediaId'][':status']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMediaMediaIdStatusMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getMediaMediaIdWatchDataQueryKey(
  args: InferRequestType<(typeof client.media)[':mediaId']['watch_data']['$get']>,
) {
  return ['media', '/media/:mediaId/watch_data', args] as const
}

export function getMediaMediaIdWatchDataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.media)[':mediaId']['watch_data']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.media)[':mediaId']['watch_data']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.media)[':mediaId']['watch_data']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMediaMediaIdWatchDataQueryKey>
  >({
    queryKey: getMediaMediaIdWatchDataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.media[':mediaId'].watch_data.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMediaMediaIdWatchData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.media)[':mediaId']['watch_data']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.media)[':mediaId']['watch_data']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.media)[':mediaId']['watch_data']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMediaMediaIdWatchDataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMediaMediaIdWatchDataQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getCollectionCollectionIdQueryKey(
  args: InferRequestType<(typeof client.collection)[':collectionId']['$get']>,
) {
  return ['collection', '/collection/:collectionId', args] as const
}

export function getCollectionCollectionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.collection)[':collectionId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.collection)[':collectionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.collection)[':collectionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCollectionCollectionIdQueryKey>
  >({
    queryKey: getCollectionCollectionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.collection[':collectionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCollectionCollectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.collection)[':collectionId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.collection)[':collectionId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.collection)[':collectionId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCollectionCollectionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCollectionCollectionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getServiceRadarrQueryKey() {
  return ['service', '/service/radarr'] as const
}

export function getServiceRadarrQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.service.radarr.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.service.radarr.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getServiceRadarrQueryKey>
  >({
    queryKey: getServiceRadarrQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.service.radarr.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectServiceRadarr<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.service.radarr.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.service.radarr.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getServiceRadarrQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getServiceRadarrQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getServiceRadarrRadarrIdQueryKey(
  args: InferRequestType<(typeof client.service.radarr)[':radarrId']['$get']>,
) {
  return ['service', '/service/radarr/:radarrId', args] as const
}

export function getServiceRadarrRadarrIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.service.radarr)[':radarrId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.service.radarr)[':radarrId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.service.radarr)[':radarrId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServiceRadarrRadarrIdQueryKey>
  >({
    queryKey: getServiceRadarrRadarrIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.service.radarr[':radarrId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectServiceRadarrRadarrId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.service.radarr)[':radarrId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.service.radarr)[':radarrId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.service.radarr)[':radarrId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getServiceRadarrRadarrIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getServiceRadarrRadarrIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getServiceSonarrQueryKey() {
  return ['service', '/service/sonarr'] as const
}

export function getServiceSonarrQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.service.sonarr.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.service.sonarr.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getServiceSonarrQueryKey>
  >({
    queryKey: getServiceSonarrQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.service.sonarr.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectServiceSonarr<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.service.sonarr.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.service.sonarr.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getServiceSonarrQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getServiceSonarrQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getServiceSonarrSonarrIdQueryKey(
  args: InferRequestType<(typeof client.service.sonarr)[':sonarrId']['$get']>,
) {
  return ['service', '/service/sonarr/:sonarrId', args] as const
}

export function getServiceSonarrSonarrIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.service.sonarr)[':sonarrId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.service.sonarr)[':sonarrId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.service.sonarr)[':sonarrId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServiceSonarrSonarrIdQueryKey>
  >({
    queryKey: getServiceSonarrSonarrIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.service.sonarr[':sonarrId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectServiceSonarrSonarrId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.service.sonarr)[':sonarrId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.service.sonarr)[':sonarrId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.service.sonarr)[':sonarrId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getServiceSonarrSonarrIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getServiceSonarrSonarrIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getServiceSonarrLookupTmdbIdQueryKey(
  args: InferRequestType<(typeof client.service.sonarr.lookup)[':tmdbId']['$get']>,
) {
  return ['service', '/service/sonarr/lookup/:tmdbId', args] as const
}

export function getServiceSonarrLookupTmdbIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.service.sonarr.lookup)[':tmdbId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.service.sonarr.lookup)[':tmdbId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.service.sonarr.lookup)[':tmdbId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServiceSonarrLookupTmdbIdQueryKey>
  >({
    queryKey: getServiceSonarrLookupTmdbIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.service.sonarr.lookup[':tmdbId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectServiceSonarrLookupTmdbId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.service.sonarr.lookup)[':tmdbId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.service.sonarr.lookup)[':tmdbId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.service.sonarr.lookup)[':tmdbId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getServiceSonarrLookupTmdbIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getServiceSonarrLookupTmdbIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getRegionsQueryKey() {
  return ['regions', '/regions'] as const
}

export function getRegionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRegionsQueryKey>
  >({
    queryKey: getRegionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.regions.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectRegions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getRegionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRegionsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getLanguagesQueryKey() {
  return ['languages', '/languages'] as const
}

export function getLanguagesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.languages.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.languages.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLanguagesQueryKey>
  >({
    queryKey: getLanguagesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.languages.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectLanguages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.languages.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.languages.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLanguagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLanguagesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getStudioStudioIdQueryKey(
  args: InferRequestType<(typeof client.studio)[':studioId']['$get']>,
) {
  return ['studio', '/studio/:studioId', args] as const
}

export function getStudioStudioIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.studio)[':studioId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.studio)[':studioId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.studio)[':studioId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStudioStudioIdQueryKey>
  >({
    queryKey: getStudioStudioIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.studio[':studioId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectStudioStudioId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.studio)[':studioId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.studio)[':studioId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.studio)[':studioId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStudioStudioIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStudioStudioIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getNetworkNetworkIdQueryKey(
  args: InferRequestType<(typeof client.network)[':networkId']['$get']>,
) {
  return ['network', '/network/:networkId', args] as const
}

export function getNetworkNetworkIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.network)[':networkId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.network)[':networkId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.network)[':networkId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworkNetworkIdQueryKey>
  >({
    queryKey: getNetworkNetworkIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.network[':networkId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectNetworkNetworkId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.network)[':networkId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.network)[':networkId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.network)[':networkId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNetworkNetworkIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNetworkNetworkIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getGenresMovieQueryKey(args: InferRequestType<typeof client.genres.movie.$get>) {
  return ['genres', '/genres/movie', args] as const
}

export function getGenresMovieQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genres.movie.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.genres.movie.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genres.movie.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGenresMovieQueryKey>
  >({
    queryKey: getGenresMovieQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.genres.movie.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGenresMovie<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genres.movie.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.genres.movie.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genres.movie.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGenresMovieQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGenresMovieQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getGenresTvQueryKey(args: InferRequestType<typeof client.genres.tv.$get>) {
  return ['genres', '/genres/tv', args] as const
}

export function getGenresTvQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genres.tv.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.genres.tv.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genres.tv.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGenresTvQueryKey>
  >({
    queryKey: getGenresTvQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.genres.tv.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGenresTv<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genres.tv.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.genres.tv.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genres.tv.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGenresTvQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGenresTvQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getBackdropsQueryKey() {
  return ['backdrops', '/backdrops'] as const
}

export function getBackdropsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backdrops.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backdrops.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBackdropsQueryKey>
  >({
    queryKey: getBackdropsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.backdrops.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectBackdrops<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backdrops.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backdrops.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getBackdropsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBackdropsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getIssueQueryKey(args: InferRequestType<typeof client.issue.$get>) {
  return ['issue', '/issue', args] as const
}

export function getIssueQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issue.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.issue.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issue.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIssueQueryKey>
  >({
    queryKey: getIssueQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.issue.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectIssue<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issue.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.issue.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issue.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getIssueQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIssueQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostIssueMutationKey() {
  return ['issue', '/issue', 'POST'] as const
}

export function getPostIssueMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issue.$post>>>>>,
    TError,
    InferRequestType<typeof client.issue.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIssueMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.issue.$post>) {
      return parseResponse(client.issue.$post(args, options))
    },
  })
}

export function injectPostIssue<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issue.$post>>>>>,
        TError,
        InferRequestType<typeof client.issue.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostIssueMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getIssueCountQueryKey() {
  return ['issue', '/issue/count'] as const
}

export function getIssueCountQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issue.count.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issue.count.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIssueCountQueryKey>
  >({
    queryKey: getIssueCountQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.issue.count.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectIssueCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issue.count.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issue.count.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getIssueCountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIssueCountQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getIssueIssueIdQueryKey(
  args: InferRequestType<(typeof client.issue)[':issueId']['$get']>,
) {
  return ['issue', '/issue/:issueId', args] as const
}

export function getIssueIssueIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.issue)[':issueId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.issue)[':issueId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.issue)[':issueId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIssueIssueIdQueryKey>
  >({
    queryKey: getIssueIssueIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.issue[':issueId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectIssueIssueId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.issue)[':issueId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.issue)[':issueId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.issue)[':issueId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIssueIssueIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIssueIssueIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteIssueIssueIdMutationKey() {
  return ['issue', '/issue/:issueId', 'DELETE'] as const
}

export function getDeleteIssueIssueIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.issue)[':issueId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.issue)[':issueId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteIssueIssueIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.issue)[':issueId']['$delete']>) {
      return parseResponse(client.issue[':issueId'].$delete(args, options))
    },
  })
}

export function injectDeleteIssueIssueId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.issue)[':issueId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.issue)[':issueId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteIssueIssueIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostIssueIssueIdCommentMutationKey() {
  return ['issue', '/issue/:issueId/comment', 'POST'] as const
}

export function getPostIssueIssueIdCommentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.issue)[':issueId']['comment']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.issue)[':issueId']['comment']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIssueIssueIdCommentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.issue)[':issueId']['comment']['$post']>,
    ) {
      return parseResponse(client.issue[':issueId'].comment.$post(args, options))
    },
  })
}

export function injectPostIssueIssueIdComment<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.issue)[':issueId']['comment']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.issue)[':issueId']['comment']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostIssueIssueIdCommentMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getIssueCommentCommentIdQueryKey(
  args: InferRequestType<(typeof client.issueComment)[':commentId']['$get']>,
) {
  return ['issueComment', '/issueComment/:commentId', args] as const
}

export function getIssueCommentCommentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.issueComment)[':commentId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.issueComment)[':commentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.issueComment)[':commentId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIssueCommentCommentIdQueryKey>
  >({
    queryKey: getIssueCommentCommentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.issueComment[':commentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectIssueCommentCommentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.issueComment)[':commentId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.issueComment)[':commentId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.issueComment)[':commentId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIssueCommentCommentIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getIssueCommentCommentIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutIssueCommentCommentIdMutationKey() {
  return ['issueComment', '/issueComment/:commentId', 'PUT'] as const
}

export function getPutIssueCommentCommentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.issueComment)[':commentId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.issueComment)[':commentId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutIssueCommentCommentIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.issueComment)[':commentId']['$put']>) {
      return parseResponse(client.issueComment[':commentId'].$put(args, options))
    },
  })
}

export function injectPutIssueCommentCommentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.issueComment)[':commentId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.issueComment)[':commentId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutIssueCommentCommentIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteIssueCommentCommentIdMutationKey() {
  return ['issueComment', '/issueComment/:commentId', 'DELETE'] as const
}

export function getDeleteIssueCommentCommentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.issueComment)[':commentId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.issueComment)[':commentId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteIssueCommentCommentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.issueComment)[':commentId']['$delete']>,
    ) {
      return parseResponse(client.issueComment[':commentId'].$delete(args, options))
    },
  })
}

export function injectDeleteIssueCommentCommentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.issueComment)[':commentId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.issueComment)[':commentId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteIssueCommentCommentIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostIssueIssueIdStatusMutationKey() {
  return ['issue', '/issue/:issueId/:status', 'POST'] as const
}

export function getPostIssueIssueIdStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.issue)[':issueId'][':status']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.issue)[':issueId'][':status']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIssueIssueIdStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.issue)[':issueId'][':status']['$post']>,
    ) {
      return parseResponse(client.issue[':issueId'][':status'].$post(args, options))
    },
  })
}

export function injectPostIssueIssueIdStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.issue)[':issueId'][':status']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.issue)[':issueId'][':status']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostIssueIssueIdStatusMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getKeywordKeywordIdQueryKey(
  args: InferRequestType<(typeof client.keyword)[':keywordId']['$get']>,
) {
  return ['keyword', '/keyword/:keywordId', args] as const
}

export function getKeywordKeywordIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.keyword)[':keywordId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.keyword)[':keywordId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.keyword)[':keywordId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKeywordKeywordIdQueryKey>
  >({
    queryKey: getKeywordKeywordIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.keyword[':keywordId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectKeywordKeywordId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.keyword)[':keywordId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.keyword)[':keywordId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.keyword)[':keywordId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getKeywordKeywordIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getKeywordKeywordIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getWatchprovidersRegionsQueryKey() {
  return ['watchproviders', '/watchproviders/regions'] as const
}

export function getWatchprovidersRegionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.watchproviders.regions.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.watchproviders.regions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWatchprovidersRegionsQueryKey>
  >({
    queryKey: getWatchprovidersRegionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.watchproviders.regions.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWatchprovidersRegions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.watchproviders.regions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.watchproviders.regions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWatchprovidersRegionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWatchprovidersRegionsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getWatchprovidersMoviesQueryKey(
  args: InferRequestType<typeof client.watchproviders.movies.$get>,
) {
  return ['watchproviders', '/watchproviders/movies', args] as const
}

export function getWatchprovidersMoviesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.watchproviders.movies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.watchproviders.movies.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.watchproviders.movies.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWatchprovidersMoviesQueryKey>
  >({
    queryKey: getWatchprovidersMoviesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.watchproviders.movies.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectWatchprovidersMovies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.watchproviders.movies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.watchproviders.movies.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.watchproviders.movies.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWatchprovidersMoviesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getWatchprovidersMoviesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getWatchprovidersTvQueryKey(
  args: InferRequestType<typeof client.watchproviders.tv.$get>,
) {
  return ['watchproviders', '/watchproviders/tv', args] as const
}

export function getWatchprovidersTvQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.watchproviders.tv.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.watchproviders.tv.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.watchproviders.tv.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWatchprovidersTvQueryKey>
  >({
    queryKey: getWatchprovidersTvQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.watchproviders.tv.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectWatchprovidersTv<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.watchproviders.tv.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.watchproviders.tv.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.watchproviders.tv.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWatchprovidersTvQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWatchprovidersTvQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}
