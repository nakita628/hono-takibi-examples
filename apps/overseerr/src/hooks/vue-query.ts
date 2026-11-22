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

export function getStatusQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatusQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
          ReturnType<typeof getStatusQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatusQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatusAppdataQueryKey() {
  return ['status', '/status/appdata'] as const
}

export function getStatusAppdataQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatusAppdataQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status.appdata.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatusAppdata<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.appdata.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.appdata.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.appdata.$get>>>>
          >,
          ReturnType<typeof getStatusAppdataQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.appdata.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatusAppdataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatusAppdataQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status.appdata.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSettingsMainQueryKey() {
  return ['settings', '/settings/main'] as const
}

export function getSettingsMainQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSettingsMainQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.settings.main.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSettingsMain<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.main.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.main.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.main.$get>>>>
          >,
          ReturnType<typeof getSettingsMainQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.main.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsMainQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSettingsMainQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.settings.main.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSettingsMain<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.main.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.settings.main.$post>,
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
  const mutationDefaults = getPostSettingsMainMutationOptions<TError, TOnMutateResult>(
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

export function usePostSettingsMainRegenerate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.settings.main.regenerate.$post>>
              >
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPostSettingsMainRegenerateMutationOptions<TError, TOnMutateResult>(
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

export function getSettingsPlexQueryKey() {
  return ['settings', '/settings/plex'] as const
}

export function getSettingsPlexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSettingsPlexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.settings.plex.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSettingsPlex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.plex.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.plex.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.plex.$get>>>>
          >,
          ReturnType<typeof getSettingsPlexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.plex.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsPlexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSettingsPlexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.settings.plex.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSettingsPlex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.plex.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.settings.plex.$post>,
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
  const mutationDefaults = getPostSettingsPlexMutationOptions<TError, TOnMutateResult>(
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

export function getSettingsPlexLibraryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.settings.plex.library.$get>>,
) {
  return ['settings', '/settings/plex/library', toValue(args)] as const
}

export function getSettingsPlexLibraryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.settings.plex.library.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSettingsPlexLibraryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.settings.plex.library.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSettingsPlexLibrary<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.plex.library.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.settings.plex.library.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.settings.plex.library.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.settings.plex.library.$get>>>
            >
          >,
          ReturnType<typeof getSettingsPlexLibraryQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.plex.library.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsPlexLibraryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSettingsPlexLibraryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.settings.plex.library.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSettingsPlexSyncQueryKey() {
  return ['settings', '/settings/plex/sync'] as const
}

export function getSettingsPlexSyncQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSettingsPlexSyncQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.settings.plex.sync.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSettingsPlexSync<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.plex.sync.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.settings.plex.sync.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.settings.plex.sync.$get>>>
            >
          >,
          ReturnType<typeof getSettingsPlexSyncQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.plex.sync.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsPlexSyncQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSettingsPlexSyncQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.settings.plex.sync.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSettingsPlexSync<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.settings.plex.sync.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.settings.plex.sync.$post>,
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
  const mutationDefaults = getPostSettingsPlexSyncMutationOptions<TError, TOnMutateResult>(
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

export function getSettingsPlexDevicesServersQueryKey() {
  return ['settings', '/settings/plex/devices/servers'] as const
}

export function getSettingsPlexDevicesServersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSettingsPlexDevicesServersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.settings.plex.devices.servers.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSettingsPlexDevicesServers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.settings.plex.devices.servers.$get>>>
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
                Awaited<ReturnType<typeof client.settings.plex.devices.servers.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.settings.plex.devices.servers.$get>>
              >
            >
          >,
          ReturnType<typeof getSettingsPlexDevicesServersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.plex.devices.servers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsPlexDevicesServersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSettingsPlexDevicesServersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.settings.plex.devices.servers.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSettingsPlexUsersQueryKey() {
  return ['settings', '/settings/plex/users'] as const
}

export function getSettingsPlexUsersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSettingsPlexUsersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.settings.plex.users.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSettingsPlexUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.plex.users.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.settings.plex.users.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.settings.plex.users.$get>>>
            >
          >,
          ReturnType<typeof getSettingsPlexUsersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.plex.users.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsPlexUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSettingsPlexUsersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.settings.plex.users.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSettingsTautulliQueryKey() {
  return ['settings', '/settings/tautulli'] as const
}

export function getSettingsTautulliQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSettingsTautulliQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.settings.tautulli.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSettingsTautulli<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.tautulli.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.settings.tautulli.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.settings.tautulli.$get>>>
            >
          >,
          ReturnType<typeof getSettingsTautulliQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.tautulli.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsTautulliQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSettingsTautulliQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.settings.tautulli.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSettingsTautulli<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.settings.tautulli.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.settings.tautulli.$post>,
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
  const mutationDefaults = getPostSettingsTautulliMutationOptions<TError, TOnMutateResult>(
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

export function getSettingsRadarrQueryKey() {
  return ['settings', '/settings/radarr'] as const
}

export function getSettingsRadarrQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSettingsRadarrQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.settings.radarr.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSettingsRadarr<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.radarr.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.settings.radarr.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.settings.radarr.$get>>>
            >
          >,
          ReturnType<typeof getSettingsRadarrQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.radarr.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsRadarrQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSettingsRadarrQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.settings.radarr.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSettingsRadarr<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.settings.radarr.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.settings.radarr.$post>,
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
  const mutationDefaults = getPostSettingsRadarrMutationOptions<TError, TOnMutateResult>(
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

export function usePostSettingsRadarrTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.settings.radarr.test.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.settings.radarr.test.$post>,
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
  const mutationDefaults = getPostSettingsRadarrTestMutationOptions<TError, TOnMutateResult>(
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

export function usePutSettingsRadarrRadarrId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSettingsRadarrRadarrIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteSettingsRadarrRadarrId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSettingsRadarrRadarrIdMutationOptions<TError, TOnMutateResult>(
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

export function getSettingsRadarrRadarrIdProfilesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.settings.radarr)[':radarrId']['profiles']['$get']>
  >,
) {
  return ['settings', '/settings/radarr/:radarrId/profiles', toValue(args)] as const
}

export function getSettingsRadarrRadarrIdProfilesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.settings.radarr)[':radarrId']['profiles']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSettingsRadarrRadarrIdProfilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.settings.radarr[':radarrId'].profiles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSettingsRadarrRadarrIdProfiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.settings.radarr)[':radarrId']['profiles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.settings.radarr)[':radarrId']['profiles']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.settings.radarr)[':radarrId']['profiles']['$get']>
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
                  ReturnType<(typeof client.settings.radarr)[':radarrId']['profiles']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSettingsRadarrRadarrIdProfilesQueryKey>
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
          Awaited<ReturnType<(typeof client.settings.radarr)[':radarrId']['profiles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsRadarrRadarrIdProfilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSettingsRadarrRadarrIdProfilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.settings.radarr[':radarrId'].profiles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSettingsSonarrQueryKey() {
  return ['settings', '/settings/sonarr'] as const
}

export function getSettingsSonarrQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSettingsSonarrQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.settings.sonarr.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSettingsSonarr<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.sonarr.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.settings.sonarr.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.settings.sonarr.$get>>>
            >
          >,
          ReturnType<typeof getSettingsSonarrQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.sonarr.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsSonarrQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSettingsSonarrQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.settings.sonarr.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSettingsSonarr<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.settings.sonarr.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.settings.sonarr.$post>,
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
  const mutationDefaults = getPostSettingsSonarrMutationOptions<TError, TOnMutateResult>(
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

export function usePostSettingsSonarrTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.settings.sonarr.test.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.settings.sonarr.test.$post>,
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
  const mutationDefaults = getPostSettingsSonarrTestMutationOptions<TError, TOnMutateResult>(
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

export function usePutSettingsSonarrSonarrId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSettingsSonarrSonarrIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteSettingsSonarrSonarrId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSettingsSonarrSonarrIdMutationOptions<TError, TOnMutateResult>(
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

export function getSettingsPublicQueryKey() {
  return ['settings', '/settings/public'] as const
}

export function getSettingsPublicQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSettingsPublicQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.settings.public.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSettingsPublic<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.public.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.settings.public.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.settings.public.$get>>>
            >
          >,
          ReturnType<typeof getSettingsPublicQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.public.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsPublicQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSettingsPublicQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.settings.public.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSettingsInitialize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.settings.initialize.$post>>>
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPostSettingsInitializeMutationOptions<TError, TOnMutateResult>(
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

export function getSettingsJobsQueryKey() {
  return ['settings', '/settings/jobs'] as const
}

export function getSettingsJobsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSettingsJobsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.settings.jobs.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSettingsJobs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.jobs.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.jobs.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.jobs.$get>>>>
          >,
          ReturnType<typeof getSettingsJobsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.jobs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsJobsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSettingsJobsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.settings.jobs.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSettingsJobsJobIdRun<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSettingsJobsJobIdRunMutationOptions<TError, TOnMutateResult>(
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

export function usePostSettingsJobsJobIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSettingsJobsJobIdCancelMutationOptions<TError, TOnMutateResult>(
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

export function usePostSettingsJobsJobIdSchedule<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSettingsJobsJobIdScheduleMutationOptions<TError, TOnMutateResult>(
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

export function getSettingsCacheQueryKey() {
  return ['settings', '/settings/cache'] as const
}

export function getSettingsCacheQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSettingsCacheQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.settings.cache.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSettingsCache<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.cache.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.cache.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.cache.$get>>>>
          >,
          ReturnType<typeof getSettingsCacheQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.cache.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsCacheQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSettingsCacheQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.settings.cache.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSettingsCacheCacheIdFlush<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSettingsCacheCacheIdFlushMutationOptions<TError, TOnMutateResult>(
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

export function getSettingsLogsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.settings.logs.$get>>,
) {
  return ['settings', '/settings/logs', toValue(args)] as const
}

export function getSettingsLogsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.settings.logs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSettingsLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.settings.logs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSettingsLogs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.logs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.settings.logs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.logs.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.logs.$get>>>>
          >,
          ReturnType<typeof getSettingsLogsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.logs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSettingsLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.settings.logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSettingsNotificationsEmailQueryKey() {
  return ['settings', '/settings/notifications/email'] as const
}

export function getSettingsNotificationsEmailQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSettingsNotificationsEmailQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.settings.notifications.email.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSettingsNotificationsEmail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.settings.notifications.email.$get>>>
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
                Awaited<ReturnType<typeof client.settings.notifications.email.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.settings.notifications.email.$get>>
              >
            >
          >,
          ReturnType<typeof getSettingsNotificationsEmailQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.notifications.email.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsNotificationsEmailQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSettingsNotificationsEmailQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.settings.notifications.email.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSettingsNotificationsEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSettingsNotificationsEmailMutationOptions<
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

export function usePostSettingsNotificationsEmailTest<
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
                  Awaited<ReturnType<typeof client.settings.notifications.email.test.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.settings.notifications.email.test.$post>,
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
  const mutationDefaults = getPostSettingsNotificationsEmailTestMutationOptions<
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

export function getSettingsNotificationsDiscordQueryKey() {
  return ['settings', '/settings/notifications/discord'] as const
}

export function getSettingsNotificationsDiscordQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSettingsNotificationsDiscordQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.settings.notifications.discord.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSettingsNotificationsDiscord<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.settings.notifications.discord.$get>>>
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
                Awaited<ReturnType<typeof client.settings.notifications.discord.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.settings.notifications.discord.$get>>
              >
            >
          >,
          ReturnType<typeof getSettingsNotificationsDiscordQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.notifications.discord.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsNotificationsDiscordQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSettingsNotificationsDiscordQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.settings.notifications.discord.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSettingsNotificationsDiscord<
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
                Awaited<ReturnType<typeof client.settings.notifications.discord.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.settings.notifications.discord.$post>,
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
  const mutationDefaults = getPostSettingsNotificationsDiscordMutationOptions<
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

export function usePostSettingsNotificationsDiscordTest<
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
                  Awaited<ReturnType<typeof client.settings.notifications.discord.test.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.settings.notifications.discord.test.$post>,
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
  const mutationDefaults = getPostSettingsNotificationsDiscordTestMutationOptions<
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

export function getSettingsNotificationsLunaseaQueryKey() {
  return ['settings', '/settings/notifications/lunasea'] as const
}

export function getSettingsNotificationsLunaseaQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSettingsNotificationsLunaseaQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.settings.notifications.lunasea.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSettingsNotificationsLunasea<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.settings.notifications.lunasea.$get>>>
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
                Awaited<ReturnType<typeof client.settings.notifications.lunasea.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.settings.notifications.lunasea.$get>>
              >
            >
          >,
          ReturnType<typeof getSettingsNotificationsLunaseaQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.notifications.lunasea.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsNotificationsLunaseaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSettingsNotificationsLunaseaQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.settings.notifications.lunasea.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSettingsNotificationsLunasea<
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
                Awaited<ReturnType<typeof client.settings.notifications.lunasea.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.settings.notifications.lunasea.$post>,
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
  const mutationDefaults = getPostSettingsNotificationsLunaseaMutationOptions<
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

export function usePostSettingsNotificationsLunaseaTest<
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
                  Awaited<ReturnType<typeof client.settings.notifications.lunasea.test.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.settings.notifications.lunasea.test.$post>,
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
  const mutationDefaults = getPostSettingsNotificationsLunaseaTestMutationOptions<
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

export function getSettingsNotificationsPushbulletQueryKey() {
  return ['settings', '/settings/notifications/pushbullet'] as const
}

export function getSettingsNotificationsPushbulletQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSettingsNotificationsPushbulletQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.settings.notifications.pushbullet.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSettingsNotificationsPushbullet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.settings.notifications.pushbullet.$get>>
      >
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
                Awaited<ReturnType<typeof client.settings.notifications.pushbullet.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.settings.notifications.pushbullet.$get>>
              >
            >
          >,
          ReturnType<typeof getSettingsNotificationsPushbulletQueryKey>
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
          Awaited<ReturnType<typeof client.settings.notifications.pushbullet.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsNotificationsPushbulletQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSettingsNotificationsPushbulletQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.settings.notifications.pushbullet.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSettingsNotificationsPushbullet<
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
                Awaited<ReturnType<typeof client.settings.notifications.pushbullet.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.settings.notifications.pushbullet.$post>,
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
  const mutationDefaults = getPostSettingsNotificationsPushbulletMutationOptions<
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

export function usePostSettingsNotificationsPushbulletTest<
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
                  Awaited<ReturnType<typeof client.settings.notifications.pushbullet.test.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.settings.notifications.pushbullet.test.$post>,
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
  const mutationDefaults = getPostSettingsNotificationsPushbulletTestMutationOptions<
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

export function getSettingsNotificationsPushoverQueryKey() {
  return ['settings', '/settings/notifications/pushover'] as const
}

export function getSettingsNotificationsPushoverQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSettingsNotificationsPushoverQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.settings.notifications.pushover.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSettingsNotificationsPushover<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.settings.notifications.pushover.$get>>>
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
                Awaited<ReturnType<typeof client.settings.notifications.pushover.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.settings.notifications.pushover.$get>>
              >
            >
          >,
          ReturnType<typeof getSettingsNotificationsPushoverQueryKey>
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
          Awaited<ReturnType<typeof client.settings.notifications.pushover.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsNotificationsPushoverQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSettingsNotificationsPushoverQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.settings.notifications.pushover.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSettingsNotificationsPushover<
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
                Awaited<ReturnType<typeof client.settings.notifications.pushover.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.settings.notifications.pushover.$post>,
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
  const mutationDefaults = getPostSettingsNotificationsPushoverMutationOptions<
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

export function usePostSettingsNotificationsPushoverTest<
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
                  Awaited<ReturnType<typeof client.settings.notifications.pushover.test.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.settings.notifications.pushover.test.$post>,
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
  const mutationDefaults = getPostSettingsNotificationsPushoverTestMutationOptions<
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

export function getSettingsNotificationsPushoverSoundsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.settings.notifications.pushover.sounds.$get>
  >,
) {
  return ['settings', '/settings/notifications/pushover/sounds', toValue(args)] as const
}

export function getSettingsNotificationsPushoverSoundsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.settings.notifications.pushover.sounds.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSettingsNotificationsPushoverSoundsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.settings.notifications.pushover.sounds.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSettingsNotificationsPushoverSounds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.settings.notifications.pushover.sounds.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.settings.notifications.pushover.sounds.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.settings.notifications.pushover.sounds.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.settings.notifications.pushover.sounds.$get>>
              >
            >
          >,
          ReturnType<typeof getSettingsNotificationsPushoverSoundsQueryKey>
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
          Awaited<ReturnType<typeof client.settings.notifications.pushover.sounds.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsNotificationsPushoverSoundsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSettingsNotificationsPushoverSoundsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.settings.notifications.pushover.sounds.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSettingsNotificationsGotifyQueryKey() {
  return ['settings', '/settings/notifications/gotify'] as const
}

export function getSettingsNotificationsGotifyQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSettingsNotificationsGotifyQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.settings.notifications.gotify.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSettingsNotificationsGotify<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.settings.notifications.gotify.$get>>>
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
                Awaited<ReturnType<typeof client.settings.notifications.gotify.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.settings.notifications.gotify.$get>>
              >
            >
          >,
          ReturnType<typeof getSettingsNotificationsGotifyQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.notifications.gotify.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsNotificationsGotifyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSettingsNotificationsGotifyQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.settings.notifications.gotify.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSettingsNotificationsGotify<
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
                Awaited<ReturnType<typeof client.settings.notifications.gotify.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.settings.notifications.gotify.$post>,
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
  const mutationDefaults = getPostSettingsNotificationsGotifyMutationOptions<
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

export function usePostSettingsNotificationsGotifyTest<
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
                  Awaited<ReturnType<typeof client.settings.notifications.gotify.test.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.settings.notifications.gotify.test.$post>,
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
  const mutationDefaults = getPostSettingsNotificationsGotifyTestMutationOptions<
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

export function getSettingsNotificationsSlackQueryKey() {
  return ['settings', '/settings/notifications/slack'] as const
}

export function getSettingsNotificationsSlackQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSettingsNotificationsSlackQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.settings.notifications.slack.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSettingsNotificationsSlack<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.settings.notifications.slack.$get>>>
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
                Awaited<ReturnType<typeof client.settings.notifications.slack.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.settings.notifications.slack.$get>>
              >
            >
          >,
          ReturnType<typeof getSettingsNotificationsSlackQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.notifications.slack.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsNotificationsSlackQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSettingsNotificationsSlackQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.settings.notifications.slack.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSettingsNotificationsSlack<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSettingsNotificationsSlackMutationOptions<
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

export function usePostSettingsNotificationsSlackTest<
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
                  Awaited<ReturnType<typeof client.settings.notifications.slack.test.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.settings.notifications.slack.test.$post>,
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
  const mutationDefaults = getPostSettingsNotificationsSlackTestMutationOptions<
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

export function getSettingsNotificationsTelegramQueryKey() {
  return ['settings', '/settings/notifications/telegram'] as const
}

export function getSettingsNotificationsTelegramQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSettingsNotificationsTelegramQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.settings.notifications.telegram.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSettingsNotificationsTelegram<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.settings.notifications.telegram.$get>>>
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
                Awaited<ReturnType<typeof client.settings.notifications.telegram.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.settings.notifications.telegram.$get>>
              >
            >
          >,
          ReturnType<typeof getSettingsNotificationsTelegramQueryKey>
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
          Awaited<ReturnType<typeof client.settings.notifications.telegram.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsNotificationsTelegramQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSettingsNotificationsTelegramQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.settings.notifications.telegram.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSettingsNotificationsTelegram<
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
                Awaited<ReturnType<typeof client.settings.notifications.telegram.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.settings.notifications.telegram.$post>,
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
  const mutationDefaults = getPostSettingsNotificationsTelegramMutationOptions<
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

export function usePostSettingsNotificationsTelegramTest<
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
                  Awaited<ReturnType<typeof client.settings.notifications.telegram.test.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.settings.notifications.telegram.test.$post>,
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
  const mutationDefaults = getPostSettingsNotificationsTelegramTestMutationOptions<
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

export function getSettingsNotificationsWebpushQueryKey() {
  return ['settings', '/settings/notifications/webpush'] as const
}

export function getSettingsNotificationsWebpushQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSettingsNotificationsWebpushQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.settings.notifications.webpush.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSettingsNotificationsWebpush<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.settings.notifications.webpush.$get>>>
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
                Awaited<ReturnType<typeof client.settings.notifications.webpush.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.settings.notifications.webpush.$get>>
              >
            >
          >,
          ReturnType<typeof getSettingsNotificationsWebpushQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.notifications.webpush.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsNotificationsWebpushQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSettingsNotificationsWebpushQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.settings.notifications.webpush.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSettingsNotificationsWebpush<
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
                Awaited<ReturnType<typeof client.settings.notifications.webpush.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.settings.notifications.webpush.$post>,
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
  const mutationDefaults = getPostSettingsNotificationsWebpushMutationOptions<
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

export function usePostSettingsNotificationsWebpushTest<
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
                  Awaited<ReturnType<typeof client.settings.notifications.webpush.test.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.settings.notifications.webpush.test.$post>,
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
  const mutationDefaults = getPostSettingsNotificationsWebpushTestMutationOptions<
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

export function getSettingsNotificationsWebhookQueryKey() {
  return ['settings', '/settings/notifications/webhook'] as const
}

export function getSettingsNotificationsWebhookQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSettingsNotificationsWebhookQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.settings.notifications.webhook.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSettingsNotificationsWebhook<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.settings.notifications.webhook.$get>>>
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
                Awaited<ReturnType<typeof client.settings.notifications.webhook.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.settings.notifications.webhook.$get>>
              >
            >
          >,
          ReturnType<typeof getSettingsNotificationsWebhookQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.notifications.webhook.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsNotificationsWebhookQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSettingsNotificationsWebhookQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.settings.notifications.webhook.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSettingsNotificationsWebhook<
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
                Awaited<ReturnType<typeof client.settings.notifications.webhook.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.settings.notifications.webhook.$post>,
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
  const mutationDefaults = getPostSettingsNotificationsWebhookMutationOptions<
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

export function usePostSettingsNotificationsWebhookTest<
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
                  Awaited<ReturnType<typeof client.settings.notifications.webhook.test.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.settings.notifications.webhook.test.$post>,
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
  const mutationDefaults = getPostSettingsNotificationsWebhookTestMutationOptions<
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

export function getSettingsDiscoverQueryKey() {
  return ['settings', '/settings/discover'] as const
}

export function getSettingsDiscoverQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSettingsDiscoverQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.settings.discover.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSettingsDiscover<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.discover.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.settings.discover.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.settings.discover.$get>>>
            >
          >,
          ReturnType<typeof getSettingsDiscoverQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.discover.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsDiscoverQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSettingsDiscoverQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.settings.discover.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSettingsDiscover<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.settings.discover.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.settings.discover.$post>,
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
  const mutationDefaults = getPostSettingsDiscoverMutationOptions<TError, TOnMutateResult>(
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

export function usePutSettingsDiscoverSliderId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSettingsDiscoverSliderIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteSettingsDiscoverSliderId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSettingsDiscoverSliderIdMutationOptions<
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

export function usePostSettingsDiscoverAdd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.settings.discover.add.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.settings.discover.add.$post>,
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
  const mutationDefaults = getPostSettingsDiscoverAddMutationOptions<TError, TOnMutateResult>(
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

export function getSettingsDiscoverResetQueryKey() {
  return ['settings', '/settings/discover/reset'] as const
}

export function getSettingsDiscoverResetQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSettingsDiscoverResetQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.settings.discover.reset.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSettingsDiscoverReset<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.settings.discover.reset.$get>>>
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
              typeof parseResponse<Awaited<ReturnType<typeof client.settings.discover.reset.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.settings.discover.reset.$get>>>
            >
          >,
          ReturnType<typeof getSettingsDiscoverResetQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.discover.reset.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsDiscoverResetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSettingsDiscoverResetQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.settings.discover.reset.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSettingsAboutQueryKey() {
  return ['settings', '/settings/about'] as const
}

export function getSettingsAboutQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSettingsAboutQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.settings.about.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSettingsAbout<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.about.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.about.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.about.$get>>>>
          >,
          ReturnType<typeof getSettingsAboutQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.about.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsAboutQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSettingsAboutQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.settings.about.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAuthMeQueryKey() {
  return ['auth', '/auth/me'] as const
}

export function getAuthMeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAuthMeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.auth.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAuthMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.me.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.me.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.me.$get>>>>
          >,
          ReturnType<typeof getAuthMeQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAuthMeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAuthMeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.auth.me.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAuthPlex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.plex.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.auth.plex.$post>,
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
  const mutationDefaults = getPostAuthPlexMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostAuthLocal<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.local.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.auth.local.$post>,
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
  const mutationDefaults = getPostAuthLocalMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostAuthLogout<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.logout.$post>>>>
          >,
          TError,
          void,
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
  const mutationDefaults = getPostAuthLogoutMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostAuthResetPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthResetPasswordMutationOptions<TError, TOnMutateResult>(
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

export function usePostAuthResetPasswordGuid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuthResetPasswordGuidMutationOptions<TError, TOnMutateResult>(
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

export function getUserQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.user.$get>>) {
  return ['user', '/user', toValue(args)] as const
}

export function getUserQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUser<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user.$get>>,
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
      queryKey: computed(() => getUserQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$put>>>>>,
          TError,
          InferRequestType<typeof client.user.$put>,
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
  const mutationDefaults = getPutUserMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$post>>>>>,
          TError,
          InferRequestType<typeof client.user.$post>,
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
  const mutationDefaults = getPostUserMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostUserImportFromPlex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUserImportFromPlexMutationOptions<TError, TOnMutateResult>(
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

export function usePostUserRegisterPushSubscription<
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
                  Awaited<ReturnType<typeof client.user.registerPushSubscription.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.user.registerPushSubscription.$post>,
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
  const mutationDefaults = getPostUserRegisterPushSubscriptionMutationOptions<
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

export function getUserUserIdPushSubscriptionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user)[':userId']['pushSubscriptions']['$get']>
  >,
) {
  return ['user', '/user/:userId/pushSubscriptions', toValue(args)] as const
}

export function getUserUserIdPushSubscriptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user)[':userId']['pushSubscriptions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserUserIdPushSubscriptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user[':userId'].pushSubscriptions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserUserIdPushSubscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user)[':userId']['pushSubscriptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user)[':userId']['pushSubscriptions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user)[':userId']['pushSubscriptions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user)[':userId']['pushSubscriptions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUserUserIdPushSubscriptionsQueryKey>
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
          Awaited<ReturnType<(typeof client.user)[':userId']['pushSubscriptions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserUserIdPushSubscriptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserUserIdPushSubscriptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user[':userId'].pushSubscriptions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserUserIdPushSubscriptionEndpointQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user)[':userId']['pushSubscription'][':endpoint']['$get']>
  >,
) {
  return ['user', '/user/:userId/pushSubscription/:endpoint', toValue(args)] as const
}

export function getUserUserIdPushSubscriptionEndpointQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user)[':userId']['pushSubscription'][':endpoint']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserUserIdPushSubscriptionEndpointQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user[':userId'].pushSubscription[':endpoint'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserUserIdPushSubscriptionEndpoint<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user)[':userId']['pushSubscription'][':endpoint']['$get']>
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
                    (typeof client.user)[':userId']['pushSubscription'][':endpoint']['$get']
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
                    (typeof client.user)[':userId']['pushSubscription'][':endpoint']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getUserUserIdPushSubscriptionEndpointQueryKey>
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
            ReturnType<(typeof client.user)[':userId']['pushSubscription'][':endpoint']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserUserIdPushSubscriptionEndpointQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserUserIdPushSubscriptionEndpointQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user[':userId'].pushSubscription[':endpoint'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteUserUserIdPushSubscriptionEndpoint<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteUserUserIdPushSubscriptionEndpointMutationOptions<
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user)[':userId']['$get']>>,
) {
  return ['user', '/user/:userId', toValue(args)] as const
}

export function getUserUserIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user)[':userId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user[':userId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserUserId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':userId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user)[':userId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':userId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':userId']['$get']>>>
            >
          >,
          ReturnType<typeof getUserUserIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':userId']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUserUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user[':userId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutUserUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':userId']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.user)[':userId']['$put']>,
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
  const mutationDefaults = getPutUserUserIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteUserUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':userId']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.user)[':userId']['$delete']>,
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
  const mutationDefaults = getDeleteUserUserIdMutationOptions<TError, TOnMutateResult>(
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

export function getUserUserIdRequestsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user)[':userId']['requests']['$get']>>,
) {
  return ['user', '/user/:userId/requests', toValue(args)] as const
}

export function getUserUserIdRequestsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user)[':userId']['requests']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserUserIdRequestsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user[':userId'].requests.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserUserIdRequests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':userId']['requests']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user)[':userId']['requests']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user)[':userId']['requests']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user)[':userId']['requests']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUserUserIdRequestsQueryKey>
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
          Awaited<ReturnType<(typeof client.user)[':userId']['requests']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserUserIdRequestsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserUserIdRequestsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user[':userId'].requests.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserUserIdQuotaQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user)[':userId']['quota']['$get']>>,
) {
  return ['user', '/user/:userId/quota', toValue(args)] as const
}

export function getUserUserIdQuotaQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user)[':userId']['quota']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserUserIdQuotaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user[':userId'].quota.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserUserIdQuota<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':userId']['quota']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user)[':userId']['quota']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user)[':userId']['quota']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user)[':userId']['quota']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUserUserIdQuotaQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':userId']['quota']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserUserIdQuotaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserUserIdQuotaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user[':userId'].quota.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserUserIdWatchlistQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user)[':userId']['watchlist']['$get']>>,
) {
  return ['user', '/user/:userId/watchlist', toValue(args)] as const
}

export function getUserUserIdWatchlistQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user)[':userId']['watchlist']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserUserIdWatchlistQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user[':userId'].watchlist.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserUserIdWatchlist<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user)[':userId']['watchlist']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user)[':userId']['watchlist']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user)[':userId']['watchlist']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user)[':userId']['watchlist']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUserUserIdWatchlistQueryKey>
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
          Awaited<ReturnType<(typeof client.user)[':userId']['watchlist']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserUserIdWatchlistQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserUserIdWatchlistQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user[':userId'].watchlist.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserUserIdSettingsMainQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user)[':userId']['settings']['main']['$get']>
  >,
) {
  return ['user', '/user/:userId/settings/main', toValue(args)] as const
}

export function getUserUserIdSettingsMainQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user)[':userId']['settings']['main']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserUserIdSettingsMainQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user[':userId'].settings.main.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserUserIdSettingsMain<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user)[':userId']['settings']['main']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user)[':userId']['settings']['main']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user)[':userId']['settings']['main']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user)[':userId']['settings']['main']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUserUserIdSettingsMainQueryKey>
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
          Awaited<ReturnType<(typeof client.user)[':userId']['settings']['main']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserUserIdSettingsMainQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserUserIdSettingsMainQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user[':userId'].settings.main.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostUserUserIdSettingsMain<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUserUserIdSettingsMainMutationOptions<TError, TOnMutateResult>(
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

export function getUserUserIdSettingsPasswordQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user)[':userId']['settings']['password']['$get']>
  >,
) {
  return ['user', '/user/:userId/settings/password', toValue(args)] as const
}

export function getUserUserIdSettingsPasswordQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user)[':userId']['settings']['password']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserUserIdSettingsPasswordQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user[':userId'].settings.password.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserUserIdSettingsPassword<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user)[':userId']['settings']['password']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user)[':userId']['settings']['password']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user)[':userId']['settings']['password']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user)[':userId']['settings']['password']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUserUserIdSettingsPasswordQueryKey>
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
          Awaited<ReturnType<(typeof client.user)[':userId']['settings']['password']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserUserIdSettingsPasswordQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserUserIdSettingsPasswordQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user[':userId'].settings.password.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostUserUserIdSettingsPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUserUserIdSettingsPasswordMutationOptions<
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

export function getUserUserIdSettingsNotificationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user)[':userId']['settings']['notifications']['$get']>
  >,
) {
  return ['user', '/user/:userId/settings/notifications', toValue(args)] as const
}

export function getUserUserIdSettingsNotificationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user)[':userId']['settings']['notifications']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserUserIdSettingsNotificationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user[':userId'].settings.notifications.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserUserIdSettingsNotifications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user)[':userId']['settings']['notifications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user)[':userId']['settings']['notifications']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.user)[':userId']['settings']['notifications']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getUserUserIdSettingsNotificationsQueryKey>
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
          Awaited<ReturnType<(typeof client.user)[':userId']['settings']['notifications']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserUserIdSettingsNotificationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserUserIdSettingsNotificationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user[':userId'].settings.notifications.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostUserUserIdSettingsNotifications<
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
                  ReturnType<(typeof client.user)[':userId']['settings']['notifications']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.user)[':userId']['settings']['notifications']['$post']>,
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
  const mutationDefaults = getPostUserUserIdSettingsNotificationsMutationOptions<
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

export function getUserUserIdSettingsPermissionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user)[':userId']['settings']['permissions']['$get']>
  >,
) {
  return ['user', '/user/:userId/settings/permissions', toValue(args)] as const
}

export function getUserUserIdSettingsPermissionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user)[':userId']['settings']['permissions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserUserIdSettingsPermissionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user[':userId'].settings.permissions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserUserIdSettingsPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user)[':userId']['settings']['permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.user)[':userId']['settings']['permissions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.user)[':userId']['settings']['permissions']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getUserUserIdSettingsPermissionsQueryKey>
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
          Awaited<ReturnType<(typeof client.user)[':userId']['settings']['permissions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserUserIdSettingsPermissionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserUserIdSettingsPermissionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user[':userId'].settings.permissions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostUserUserIdSettingsPermissions<
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
                  ReturnType<(typeof client.user)[':userId']['settings']['permissions']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.user)[':userId']['settings']['permissions']['$post']>,
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
  const mutationDefaults = getPostUserUserIdSettingsPermissionsMutationOptions<
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

export function getUserUserIdWatchDataQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user)[':userId']['watch_data']['$get']>>,
) {
  return ['user', '/user/:userId/watch_data', toValue(args)] as const
}

export function getUserUserIdWatchDataQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user)[':userId']['watch_data']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserUserIdWatchDataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user[':userId'].watch_data.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserUserIdWatchData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.user)[':userId']['watch_data']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.user)[':userId']['watch_data']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user)[':userId']['watch_data']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.user)[':userId']['watch_data']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUserUserIdWatchDataQueryKey>
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
          Awaited<ReturnType<(typeof client.user)[':userId']['watch_data']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserUserIdWatchDataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserUserIdWatchDataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user[':userId'].watch_data.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.$get>>,
) {
  return ['search', '/search', toValue(args)] as const
}

export function getSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSearch<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
          ReturnType<typeof getSearchQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchKeywordQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.keyword.$get>>,
) {
  return ['search', '/search/keyword', toValue(args)] as const
}

export function getSearchKeywordQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.keyword.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchKeywordQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search.keyword.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchKeyword<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.keyword.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.keyword.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.keyword.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.keyword.$get>>>>
          >,
          ReturnType<typeof getSearchKeywordQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.keyword.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchKeywordQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchKeywordQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search.keyword.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchCompanyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.company.$get>>,
) {
  return ['search', '/search/company', toValue(args)] as const
}

export function getSearchCompanyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.company.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchCompanyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search.company.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchCompany<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.company.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.company.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.company.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.company.$get>>>>
          >,
          ReturnType<typeof getSearchCompanyQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.company.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchCompanyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchCompanyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search.company.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDiscoverMoviesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.discover.movies.$get>>,
) {
  return ['discover', '/discover/movies', toValue(args)] as const
}

export function getDiscoverMoviesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.discover.movies.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDiscoverMoviesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.discover.movies.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDiscoverMovies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discover.movies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.discover.movies.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.discover.movies.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.discover.movies.$get>>>
            >
          >,
          ReturnType<typeof getDiscoverMoviesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discover.movies.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDiscoverMoviesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDiscoverMoviesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.discover.movies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDiscoverMoviesGenreGenreIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.discover.movies.genre)[':genreId']['$get']>
  >,
) {
  return ['discover', '/discover/movies/genre/:genreId', toValue(args)] as const
}

export function getDiscoverMoviesGenreGenreIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.discover.movies.genre)[':genreId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDiscoverMoviesGenreGenreIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.discover.movies.genre[':genreId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDiscoverMoviesGenreGenreId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.discover.movies.genre)[':genreId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.discover.movies.genre)[':genreId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.discover.movies.genre)[':genreId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.discover.movies.genre)[':genreId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDiscoverMoviesGenreGenreIdQueryKey>
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
          Awaited<ReturnType<(typeof client.discover.movies.genre)[':genreId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDiscoverMoviesGenreGenreIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDiscoverMoviesGenreGenreIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.discover.movies.genre[':genreId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDiscoverMoviesLanguageLanguageQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.discover.movies.language)[':language']['$get']>
  >,
) {
  return ['discover', '/discover/movies/language/:language', toValue(args)] as const
}

export function getDiscoverMoviesLanguageLanguageQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.discover.movies.language)[':language']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDiscoverMoviesLanguageLanguageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.discover.movies.language[':language'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDiscoverMoviesLanguageLanguage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.discover.movies.language)[':language']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.discover.movies.language)[':language']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.discover.movies.language)[':language']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.discover.movies.language)[':language']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDiscoverMoviesLanguageLanguageQueryKey>
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
          Awaited<ReturnType<(typeof client.discover.movies.language)[':language']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDiscoverMoviesLanguageLanguageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDiscoverMoviesLanguageLanguageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.discover.movies.language[':language'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDiscoverMoviesStudioStudioIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.discover.movies.studio)[':studioId']['$get']>
  >,
) {
  return ['discover', '/discover/movies/studio/:studioId', toValue(args)] as const
}

export function getDiscoverMoviesStudioStudioIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.discover.movies.studio)[':studioId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDiscoverMoviesStudioStudioIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.discover.movies.studio[':studioId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDiscoverMoviesStudioStudioId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.discover.movies.studio)[':studioId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.discover.movies.studio)[':studioId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.discover.movies.studio)[':studioId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.discover.movies.studio)[':studioId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDiscoverMoviesStudioStudioIdQueryKey>
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
          Awaited<ReturnType<(typeof client.discover.movies.studio)[':studioId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDiscoverMoviesStudioStudioIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDiscoverMoviesStudioStudioIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.discover.movies.studio[':studioId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDiscoverMoviesUpcomingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.discover.movies.upcoming.$get>>,
) {
  return ['discover', '/discover/movies/upcoming', toValue(args)] as const
}

export function getDiscoverMoviesUpcomingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.discover.movies.upcoming.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDiscoverMoviesUpcomingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.discover.movies.upcoming.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDiscoverMoviesUpcoming<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.discover.movies.upcoming.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.discover.movies.upcoming.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.discover.movies.upcoming.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.discover.movies.upcoming.$get>>>
            >
          >,
          ReturnType<typeof getDiscoverMoviesUpcomingQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.discover.movies.upcoming.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDiscoverMoviesUpcomingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDiscoverMoviesUpcomingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.discover.movies.upcoming.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDiscoverTvQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.discover.tv.$get>>,
) {
  return ['discover', '/discover/tv', toValue(args)] as const
}

export function getDiscoverTvQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.discover.tv.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDiscoverTvQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.discover.tv.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDiscoverTv<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discover.tv.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.discover.tv.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discover.tv.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discover.tv.$get>>>>
          >,
          ReturnType<typeof getDiscoverTvQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discover.tv.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDiscoverTvQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDiscoverTvQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.discover.tv.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDiscoverTvLanguageLanguageQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.discover.tv.language)[':language']['$get']>
  >,
) {
  return ['discover', '/discover/tv/language/:language', toValue(args)] as const
}

export function getDiscoverTvLanguageLanguageQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.discover.tv.language)[':language']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDiscoverTvLanguageLanguageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.discover.tv.language[':language'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDiscoverTvLanguageLanguage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.discover.tv.language)[':language']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.discover.tv.language)[':language']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.discover.tv.language)[':language']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.discover.tv.language)[':language']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDiscoverTvLanguageLanguageQueryKey>
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
          Awaited<ReturnType<(typeof client.discover.tv.language)[':language']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDiscoverTvLanguageLanguageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDiscoverTvLanguageLanguageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.discover.tv.language[':language'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDiscoverTvGenreGenreIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.discover.tv.genre)[':genreId']['$get']>>,
) {
  return ['discover', '/discover/tv/genre/:genreId', toValue(args)] as const
}

export function getDiscoverTvGenreGenreIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.discover.tv.genre)[':genreId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDiscoverTvGenreGenreIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.discover.tv.genre[':genreId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDiscoverTvGenreGenreId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.discover.tv.genre)[':genreId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.discover.tv.genre)[':genreId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.discover.tv.genre)[':genreId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.discover.tv.genre)[':genreId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDiscoverTvGenreGenreIdQueryKey>
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
          Awaited<ReturnType<(typeof client.discover.tv.genre)[':genreId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDiscoverTvGenreGenreIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDiscoverTvGenreGenreIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.discover.tv.genre[':genreId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDiscoverTvNetworkNetworkIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.discover.tv.network)[':networkId']['$get']>
  >,
) {
  return ['discover', '/discover/tv/network/:networkId', toValue(args)] as const
}

export function getDiscoverTvNetworkNetworkIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.discover.tv.network)[':networkId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDiscoverTvNetworkNetworkIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.discover.tv.network[':networkId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDiscoverTvNetworkNetworkId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.discover.tv.network)[':networkId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.discover.tv.network)[':networkId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.discover.tv.network)[':networkId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.discover.tv.network)[':networkId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDiscoverTvNetworkNetworkIdQueryKey>
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
          Awaited<ReturnType<(typeof client.discover.tv.network)[':networkId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDiscoverTvNetworkNetworkIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDiscoverTvNetworkNetworkIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.discover.tv.network[':networkId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDiscoverTvUpcomingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.discover.tv.upcoming.$get>>,
) {
  return ['discover', '/discover/tv/upcoming', toValue(args)] as const
}

export function getDiscoverTvUpcomingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.discover.tv.upcoming.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDiscoverTvUpcomingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.discover.tv.upcoming.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDiscoverTvUpcoming<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discover.tv.upcoming.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.discover.tv.upcoming.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.discover.tv.upcoming.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.discover.tv.upcoming.$get>>>
            >
          >,
          ReturnType<typeof getDiscoverTvUpcomingQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discover.tv.upcoming.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDiscoverTvUpcomingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDiscoverTvUpcomingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.discover.tv.upcoming.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDiscoverTrendingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.discover.trending.$get>>,
) {
  return ['discover', '/discover/trending', toValue(args)] as const
}

export function getDiscoverTrendingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.discover.trending.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDiscoverTrendingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.discover.trending.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDiscoverTrending<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discover.trending.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.discover.trending.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.discover.trending.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.discover.trending.$get>>>
            >
          >,
          ReturnType<typeof getDiscoverTrendingQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discover.trending.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDiscoverTrendingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDiscoverTrendingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.discover.trending.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDiscoverKeywordKeywordIdMoviesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.discover.keyword)[':keywordId']['movies']['$get']>
  >,
) {
  return ['discover', '/discover/keyword/:keywordId/movies', toValue(args)] as const
}

export function getDiscoverKeywordKeywordIdMoviesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.discover.keyword)[':keywordId']['movies']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDiscoverKeywordKeywordIdMoviesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.discover.keyword[':keywordId'].movies.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDiscoverKeywordKeywordIdMovies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.discover.keyword)[':keywordId']['movies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.discover.keyword)[':keywordId']['movies']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.discover.keyword)[':keywordId']['movies']['$get']>
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
                  ReturnType<(typeof client.discover.keyword)[':keywordId']['movies']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDiscoverKeywordKeywordIdMoviesQueryKey>
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
          Awaited<ReturnType<(typeof client.discover.keyword)[':keywordId']['movies']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDiscoverKeywordKeywordIdMoviesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDiscoverKeywordKeywordIdMoviesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.discover.keyword[':keywordId'].movies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDiscoverGenresliderMovieQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.discover.genreslider.movie.$get>>,
) {
  return ['discover', '/discover/genreslider/movie', toValue(args)] as const
}

export function getDiscoverGenresliderMovieQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.discover.genreslider.movie.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDiscoverGenresliderMovieQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.discover.genreslider.movie.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDiscoverGenresliderMovie<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.discover.genreslider.movie.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.discover.genreslider.movie.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.discover.genreslider.movie.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.discover.genreslider.movie.$get>>
              >
            >
          >,
          ReturnType<typeof getDiscoverGenresliderMovieQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.discover.genreslider.movie.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDiscoverGenresliderMovieQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDiscoverGenresliderMovieQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.discover.genreslider.movie.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDiscoverGenresliderTvQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.discover.genreslider.tv.$get>>,
) {
  return ['discover', '/discover/genreslider/tv', toValue(args)] as const
}

export function getDiscoverGenresliderTvQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.discover.genreslider.tv.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDiscoverGenresliderTvQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.discover.genreslider.tv.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDiscoverGenresliderTv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.discover.genreslider.tv.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.discover.genreslider.tv.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.discover.genreslider.tv.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.discover.genreslider.tv.$get>>>
            >
          >,
          ReturnType<typeof getDiscoverGenresliderTvQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.discover.genreslider.tv.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDiscoverGenresliderTvQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDiscoverGenresliderTvQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.discover.genreslider.tv.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDiscoverWatchlistQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.discover.watchlist.$get>>,
) {
  return ['discover', '/discover/watchlist', toValue(args)] as const
}

export function getDiscoverWatchlistQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.discover.watchlist.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDiscoverWatchlistQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.discover.watchlist.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDiscoverWatchlist<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discover.watchlist.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.discover.watchlist.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.discover.watchlist.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.discover.watchlist.$get>>>
            >
          >,
          ReturnType<typeof getDiscoverWatchlistQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.discover.watchlist.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDiscoverWatchlistQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDiscoverWatchlistQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.discover.watchlist.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRequestQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.request.$get>>,
) {
  return ['request', '/request', toValue(args)] as const
}

export function getRequestQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.request.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRequestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.request.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRequest<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.request.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.request.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.request.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.request.$get>>>>
          >,
          ReturnType<typeof getRequestQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.request.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRequestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRequestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.request.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostRequest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.request.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.request.$post>,
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
  const mutationDefaults = getPostRequestMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRequestCountQueryKey() {
  return ['request', '/request/count'] as const
}

export function getRequestCountQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getRequestCountQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.request.count.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRequestCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.request.count.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.request.count.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.request.count.$get>>>>
          >,
          ReturnType<typeof getRequestCountQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.request.count.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRequestCountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getRequestCountQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.request.count.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRequestRequestIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.request)[':requestId']['$get']>>,
) {
  return ['request', '/request/:requestId', toValue(args)] as const
}

export function getRequestRequestIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.request)[':requestId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRequestRequestIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.request[':requestId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRequestRequestId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.request)[':requestId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.request)[':requestId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.request)[':requestId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.request)[':requestId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRequestRequestIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.request)[':requestId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRequestRequestIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRequestRequestIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.request[':requestId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutRequestRequestId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.request)[':requestId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.request)[':requestId']['$put']>,
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
  const mutationDefaults = getPutRequestRequestIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteRequestRequestId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRequestRequestIdMutationOptions<TError, TOnMutateResult>(
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

export function usePostRequestRequestIdRetry<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRequestRequestIdRetryMutationOptions<TError, TOnMutateResult>(
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

export function usePostRequestRequestIdStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRequestRequestIdStatusMutationOptions<TError, TOnMutateResult>(
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

export function getMovieMovieIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.movie)[':movieId']['$get']>>,
) {
  return ['movie', '/movie/:movieId', toValue(args)] as const
}

export function getMovieMovieIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.movie)[':movieId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMovieMovieIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.movie[':movieId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMovieMovieId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.movie)[':movieId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.movie)[':movieId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.movie)[':movieId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.movie)[':movieId']['$get']>>>
            >
          >,
          ReturnType<typeof getMovieMovieIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.movie)[':movieId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMovieMovieIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMovieMovieIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.movie[':movieId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMovieMovieIdRecommendationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.movie)[':movieId']['recommendations']['$get']>
  >,
) {
  return ['movie', '/movie/:movieId/recommendations', toValue(args)] as const
}

export function getMovieMovieIdRecommendationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.movie)[':movieId']['recommendations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMovieMovieIdRecommendationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.movie[':movieId'].recommendations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMovieMovieIdRecommendations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.movie)[':movieId']['recommendations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.movie)[':movieId']['recommendations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.movie)[':movieId']['recommendations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.movie)[':movieId']['recommendations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMovieMovieIdRecommendationsQueryKey>
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
          Awaited<ReturnType<(typeof client.movie)[':movieId']['recommendations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMovieMovieIdRecommendationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMovieMovieIdRecommendationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.movie[':movieId'].recommendations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMovieMovieIdSimilarQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.movie)[':movieId']['similar']['$get']>>,
) {
  return ['movie', '/movie/:movieId/similar', toValue(args)] as const
}

export function getMovieMovieIdSimilarQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.movie)[':movieId']['similar']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMovieMovieIdSimilarQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.movie[':movieId'].similar.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMovieMovieIdSimilar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.movie)[':movieId']['similar']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.movie)[':movieId']['similar']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.movie)[':movieId']['similar']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.movie)[':movieId']['similar']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMovieMovieIdSimilarQueryKey>
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
          Awaited<ReturnType<(typeof client.movie)[':movieId']['similar']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMovieMovieIdSimilarQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMovieMovieIdSimilarQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.movie[':movieId'].similar.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMovieMovieIdRatingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.movie)[':movieId']['ratings']['$get']>>,
) {
  return ['movie', '/movie/:movieId/ratings', toValue(args)] as const
}

export function getMovieMovieIdRatingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.movie)[':movieId']['ratings']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMovieMovieIdRatingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.movie[':movieId'].ratings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMovieMovieIdRatings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.movie)[':movieId']['ratings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.movie)[':movieId']['ratings']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.movie)[':movieId']['ratings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.movie)[':movieId']['ratings']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMovieMovieIdRatingsQueryKey>
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
          Awaited<ReturnType<(typeof client.movie)[':movieId']['ratings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMovieMovieIdRatingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMovieMovieIdRatingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.movie[':movieId'].ratings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMovieMovieIdRatingscombinedQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.movie)[':movieId']['ratingscombined']['$get']>
  >,
) {
  return ['movie', '/movie/:movieId/ratingscombined', toValue(args)] as const
}

export function getMovieMovieIdRatingscombinedQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.movie)[':movieId']['ratingscombined']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMovieMovieIdRatingscombinedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.movie[':movieId'].ratingscombined.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMovieMovieIdRatingscombined<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.movie)[':movieId']['ratingscombined']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.movie)[':movieId']['ratingscombined']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.movie)[':movieId']['ratingscombined']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.movie)[':movieId']['ratingscombined']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMovieMovieIdRatingscombinedQueryKey>
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
          Awaited<ReturnType<(typeof client.movie)[':movieId']['ratingscombined']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMovieMovieIdRatingscombinedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMovieMovieIdRatingscombinedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.movie[':movieId'].ratingscombined.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTvTvIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tv)[':tvId']['$get']>>,
) {
  return ['tv', '/tv/:tvId', toValue(args)] as const
}

export function getTvTvIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tv)[':tvId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTvTvIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tv[':tvId'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTvTvId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tv)[':tvId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tv)[':tvId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tv)[':tvId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tv)[':tvId']['$get']>>>
            >
          >,
          ReturnType<typeof getTvTvIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tv)[':tvId']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTvTvIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTvTvIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tv[':tvId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTvTvIdSeasonSeasonIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tv)[':tvId']['season'][':seasonId']['$get']>
  >,
) {
  return ['tv', '/tv/:tvId/season/:seasonId', toValue(args)] as const
}

export function getTvTvIdSeasonSeasonIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tv)[':tvId']['season'][':seasonId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTvTvIdSeasonSeasonIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tv[':tvId'].season[':seasonId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTvTvIdSeasonSeasonId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tv)[':tvId']['season'][':seasonId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tv)[':tvId']['season'][':seasonId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tv)[':tvId']['season'][':seasonId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tv)[':tvId']['season'][':seasonId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTvTvIdSeasonSeasonIdQueryKey>
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
          Awaited<ReturnType<(typeof client.tv)[':tvId']['season'][':seasonId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTvTvIdSeasonSeasonIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTvTvIdSeasonSeasonIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tv[':tvId'].season[':seasonId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTvTvIdRecommendationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tv)[':tvId']['recommendations']['$get']>>,
) {
  return ['tv', '/tv/:tvId/recommendations', toValue(args)] as const
}

export function getTvTvIdRecommendationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tv)[':tvId']['recommendations']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTvTvIdRecommendationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tv[':tvId'].recommendations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTvTvIdRecommendations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tv)[':tvId']['recommendations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tv)[':tvId']['recommendations']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tv)[':tvId']['recommendations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tv)[':tvId']['recommendations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTvTvIdRecommendationsQueryKey>
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
          Awaited<ReturnType<(typeof client.tv)[':tvId']['recommendations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTvTvIdRecommendationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTvTvIdRecommendationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tv[':tvId'].recommendations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTvTvIdSimilarQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tv)[':tvId']['similar']['$get']>>,
) {
  return ['tv', '/tv/:tvId/similar', toValue(args)] as const
}

export function getTvTvIdSimilarQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tv)[':tvId']['similar']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTvTvIdSimilarQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tv[':tvId'].similar.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTvTvIdSimilar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tv)[':tvId']['similar']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tv)[':tvId']['similar']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tv)[':tvId']['similar']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tv)[':tvId']['similar']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTvTvIdSimilarQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tv)[':tvId']['similar']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTvTvIdSimilarQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTvTvIdSimilarQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tv[':tvId'].similar.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTvTvIdRatingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tv)[':tvId']['ratings']['$get']>>,
) {
  return ['tv', '/tv/:tvId/ratings', toValue(args)] as const
}

export function getTvTvIdRatingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tv)[':tvId']['ratings']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTvTvIdRatingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tv[':tvId'].ratings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTvTvIdRatings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tv)[':tvId']['ratings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tv)[':tvId']['ratings']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tv)[':tvId']['ratings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tv)[':tvId']['ratings']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTvTvIdRatingsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tv)[':tvId']['ratings']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTvTvIdRatingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTvTvIdRatingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tv[':tvId'].ratings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPersonPersonIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.person)[':personId']['$get']>>,
) {
  return ['person', '/person/:personId', toValue(args)] as const
}

export function getPersonPersonIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.person)[':personId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPersonPersonIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.person[':personId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePersonPersonId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.person)[':personId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.person)[':personId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.person)[':personId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.person)[':personId']['$get']>>>
            >
          >,
          ReturnType<typeof getPersonPersonIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.person)[':personId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPersonPersonIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPersonPersonIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.person[':personId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPersonPersonIdCombinedCreditsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.person)[':personId']['combined_credits']['$get']>
  >,
) {
  return ['person', '/person/:personId/combined_credits', toValue(args)] as const
}

export function getPersonPersonIdCombinedCreditsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.person)[':personId']['combined_credits']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPersonPersonIdCombinedCreditsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.person[':personId'].combined_credits.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePersonPersonIdCombinedCredits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.person)[':personId']['combined_credits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.person)[':personId']['combined_credits']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.person)[':personId']['combined_credits']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.person)[':personId']['combined_credits']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPersonPersonIdCombinedCreditsQueryKey>
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
          Awaited<ReturnType<(typeof client.person)[':personId']['combined_credits']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPersonPersonIdCombinedCreditsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPersonPersonIdCombinedCreditsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.person[':personId'].combined_credits.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMediaQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.media.$get>>,
) {
  return ['media', '/media', toValue(args)] as const
}

export function getMediaQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.media.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMediaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.media.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMedia<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.media.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media.$get>>>>>,
          ReturnType<typeof getMediaQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMediaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMediaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.media.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteMediaMediaId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMediaMediaIdMutationOptions<TError, TOnMutateResult>(
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

export function usePostMediaMediaIdStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMediaMediaIdStatusMutationOptions<TError, TOnMutateResult>(
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

export function getMediaMediaIdWatchDataQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.media)[':mediaId']['watch_data']['$get']>>,
) {
  return ['media', '/media/:mediaId/watch_data', toValue(args)] as const
}

export function getMediaMediaIdWatchDataQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.media)[':mediaId']['watch_data']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMediaMediaIdWatchDataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.media[':mediaId'].watch_data.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMediaMediaIdWatchData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.media)[':mediaId']['watch_data']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.media)[':mediaId']['watch_data']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.media)[':mediaId']['watch_data']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.media)[':mediaId']['watch_data']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMediaMediaIdWatchDataQueryKey>
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
          Awaited<ReturnType<(typeof client.media)[':mediaId']['watch_data']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMediaMediaIdWatchDataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMediaMediaIdWatchDataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.media[':mediaId'].watch_data.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCollectionCollectionIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.collection)[':collectionId']['$get']>>,
) {
  return ['collection', '/collection/:collectionId', toValue(args)] as const
}

export function getCollectionCollectionIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.collection)[':collectionId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCollectionCollectionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.collection[':collectionId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCollectionCollectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.collection)[':collectionId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.collection)[':collectionId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.collection)[':collectionId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.collection)[':collectionId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCollectionCollectionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.collection)[':collectionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCollectionCollectionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCollectionCollectionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.collection[':collectionId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getServiceRadarrQueryKey() {
  return ['service', '/service/radarr'] as const
}

export function getServiceRadarrQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getServiceRadarrQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.service.radarr.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useServiceRadarr<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.service.radarr.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.service.radarr.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.service.radarr.$get>>>>
          >,
          ReturnType<typeof getServiceRadarrQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.service.radarr.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getServiceRadarrQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getServiceRadarrQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.service.radarr.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getServiceRadarrRadarrIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.service.radarr)[':radarrId']['$get']>>,
) {
  return ['service', '/service/radarr/:radarrId', toValue(args)] as const
}

export function getServiceRadarrRadarrIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.service.radarr)[':radarrId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServiceRadarrRadarrIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.service.radarr[':radarrId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServiceRadarrRadarrId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.service.radarr)[':radarrId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.service.radarr)[':radarrId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.service.radarr)[':radarrId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.service.radarr)[':radarrId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getServiceRadarrRadarrIdQueryKey>
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
          Awaited<ReturnType<(typeof client.service.radarr)[':radarrId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServiceRadarrRadarrIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServiceRadarrRadarrIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.service.radarr[':radarrId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getServiceSonarrQueryKey() {
  return ['service', '/service/sonarr'] as const
}

export function getServiceSonarrQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getServiceSonarrQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.service.sonarr.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useServiceSonarr<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.service.sonarr.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.service.sonarr.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.service.sonarr.$get>>>>
          >,
          ReturnType<typeof getServiceSonarrQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.service.sonarr.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getServiceSonarrQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getServiceSonarrQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.service.sonarr.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getServiceSonarrSonarrIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.service.sonarr)[':sonarrId']['$get']>>,
) {
  return ['service', '/service/sonarr/:sonarrId', toValue(args)] as const
}

export function getServiceSonarrSonarrIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.service.sonarr)[':sonarrId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServiceSonarrSonarrIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.service.sonarr[':sonarrId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServiceSonarrSonarrId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.service.sonarr)[':sonarrId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.service.sonarr)[':sonarrId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.service.sonarr)[':sonarrId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.service.sonarr)[':sonarrId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getServiceSonarrSonarrIdQueryKey>
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
          Awaited<ReturnType<(typeof client.service.sonarr)[':sonarrId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServiceSonarrSonarrIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServiceSonarrSonarrIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.service.sonarr[':sonarrId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getServiceSonarrLookupTmdbIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.service.sonarr.lookup)[':tmdbId']['$get']>
  >,
) {
  return ['service', '/service/sonarr/lookup/:tmdbId', toValue(args)] as const
}

export function getServiceSonarrLookupTmdbIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.service.sonarr.lookup)[':tmdbId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServiceSonarrLookupTmdbIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.service.sonarr.lookup[':tmdbId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServiceSonarrLookupTmdbId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.service.sonarr.lookup)[':tmdbId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.service.sonarr.lookup)[':tmdbId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.service.sonarr.lookup)[':tmdbId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.service.sonarr.lookup)[':tmdbId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getServiceSonarrLookupTmdbIdQueryKey>
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
          Awaited<ReturnType<(typeof client.service.sonarr.lookup)[':tmdbId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServiceSonarrLookupTmdbIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServiceSonarrLookupTmdbIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.service.sonarr.lookup[':tmdbId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRegionsQueryKey() {
  return ['regions', '/regions'] as const
}

export function getRegionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getRegionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.regions.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRegions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>
          >,
          ReturnType<typeof getRegionsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRegionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getRegionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.regions.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLanguagesQueryKey() {
  return ['languages', '/languages'] as const
}

export function getLanguagesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLanguagesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.languages.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLanguages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.languages.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.languages.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.languages.$get>>>>
          >,
          ReturnType<typeof getLanguagesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.languages.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLanguagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLanguagesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.languages.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStudioStudioIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.studio)[':studioId']['$get']>>,
) {
  return ['studio', '/studio/:studioId', toValue(args)] as const
}

export function getStudioStudioIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.studio)[':studioId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStudioStudioIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.studio[':studioId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStudioStudioId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.studio)[':studioId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.studio)[':studioId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.studio)[':studioId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.studio)[':studioId']['$get']>>>
            >
          >,
          ReturnType<typeof getStudioStudioIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.studio)[':studioId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStudioStudioIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStudioStudioIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.studio[':studioId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworkNetworkIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.network)[':networkId']['$get']>>,
) {
  return ['network', '/network/:networkId', toValue(args)] as const
}

export function getNetworkNetworkIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.network)[':networkId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworkNetworkIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.network[':networkId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworkNetworkId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.network)[':networkId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.network)[':networkId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.network)[':networkId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.network)[':networkId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNetworkNetworkIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.network)[':networkId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworkNetworkIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworkNetworkIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.network[':networkId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGenresMovieQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.genres.movie.$get>>,
) {
  return ['genres', '/genres/movie', toValue(args)] as const
}

export function getGenresMovieQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.genres.movie.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGenresMovieQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.genres.movie.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGenresMovie<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genres.movie.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.genres.movie.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genres.movie.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genres.movie.$get>>>>
          >,
          ReturnType<typeof getGenresMovieQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genres.movie.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGenresMovieQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGenresMovieQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.genres.movie.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGenresTvQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.genres.tv.$get>>,
) {
  return ['genres', '/genres/tv', toValue(args)] as const
}

export function getGenresTvQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.genres.tv.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGenresTvQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.genres.tv.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGenresTv<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genres.tv.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.genres.tv.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genres.tv.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genres.tv.$get>>>>
          >,
          ReturnType<typeof getGenresTvQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genres.tv.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGenresTvQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGenresTvQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.genres.tv.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBackdropsQueryKey() {
  return ['backdrops', '/backdrops'] as const
}

export function getBackdropsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getBackdropsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.backdrops.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBackdrops<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backdrops.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backdrops.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backdrops.$get>>>>
          >,
          ReturnType<typeof getBackdropsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backdrops.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBackdropsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getBackdropsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.backdrops.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIssueQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.issue.$get>>,
) {
  return ['issue', '/issue', toValue(args)] as const
}

export function getIssueQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.issue.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIssueQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.issue.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useIssue<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issue.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.issue.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issue.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issue.$get>>>>>,
          ReturnType<typeof getIssueQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issue.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIssueQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIssueQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.issue.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostIssue<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issue.$post>>>>>,
          TError,
          InferRequestType<typeof client.issue.$post>,
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
  const mutationDefaults = getPostIssueMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getIssueCountQueryKey() {
  return ['issue', '/issue/count'] as const
}

export function getIssueCountQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getIssueCountQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.issue.count.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useIssueCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issue.count.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issue.count.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issue.count.$get>>>>
          >,
          ReturnType<typeof getIssueCountQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issue.count.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIssueCountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getIssueCountQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.issue.count.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIssueIssueIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.issue)[':issueId']['$get']>>,
) {
  return ['issue', '/issue/:issueId', toValue(args)] as const
}

export function getIssueIssueIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.issue)[':issueId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIssueIssueIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.issue[':issueId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIssueIssueId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.issue)[':issueId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.issue)[':issueId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.issue)[':issueId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.issue)[':issueId']['$get']>>>
            >
          >,
          ReturnType<typeof getIssueIssueIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.issue)[':issueId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIssueIssueIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIssueIssueIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.issue[':issueId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteIssueIssueId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteIssueIssueIdMutationOptions<TError, TOnMutateResult>(
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

export function usePostIssueIssueIdComment<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIssueIssueIdCommentMutationOptions<TError, TOnMutateResult>(
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

export function getIssueCommentCommentIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.issueComment)[':commentId']['$get']>>,
) {
  return ['issueComment', '/issueComment/:commentId', toValue(args)] as const
}

export function getIssueCommentCommentIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.issueComment)[':commentId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIssueCommentCommentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.issueComment[':commentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIssueCommentCommentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.issueComment)[':commentId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.issueComment)[':commentId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.issueComment)[':commentId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.issueComment)[':commentId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getIssueCommentCommentIdQueryKey>
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
          Awaited<ReturnType<(typeof client.issueComment)[':commentId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIssueCommentCommentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIssueCommentCommentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.issueComment[':commentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutIssueCommentCommentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutIssueCommentCommentIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteIssueCommentCommentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteIssueCommentCommentIdMutationOptions<TError, TOnMutateResult>(
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

export function usePostIssueIssueIdStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIssueIssueIdStatusMutationOptions<TError, TOnMutateResult>(
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

export function getKeywordKeywordIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.keyword)[':keywordId']['$get']>>,
) {
  return ['keyword', '/keyword/:keywordId', toValue(args)] as const
}

export function getKeywordKeywordIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.keyword)[':keywordId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKeywordKeywordIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.keyword[':keywordId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKeywordKeywordId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.keyword)[':keywordId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.keyword)[':keywordId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.keyword)[':keywordId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.keyword)[':keywordId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKeywordKeywordIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.keyword)[':keywordId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKeywordKeywordIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKeywordKeywordIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.keyword[':keywordId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWatchprovidersRegionsQueryKey() {
  return ['watchproviders', '/watchproviders/regions'] as const
}

export function getWatchprovidersRegionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getWatchprovidersRegionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.watchproviders.regions.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWatchprovidersRegions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.watchproviders.regions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.watchproviders.regions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.watchproviders.regions.$get>>>
            >
          >,
          ReturnType<typeof getWatchprovidersRegionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.watchproviders.regions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWatchprovidersRegionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getWatchprovidersRegionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.watchproviders.regions.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWatchprovidersMoviesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.watchproviders.movies.$get>>,
) {
  return ['watchproviders', '/watchproviders/movies', toValue(args)] as const
}

export function getWatchprovidersMoviesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.watchproviders.movies.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWatchprovidersMoviesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.watchproviders.movies.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWatchprovidersMovies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.watchproviders.movies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.watchproviders.movies.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.watchproviders.movies.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.watchproviders.movies.$get>>>
            >
          >,
          ReturnType<typeof getWatchprovidersMoviesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.watchproviders.movies.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWatchprovidersMoviesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWatchprovidersMoviesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.watchproviders.movies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWatchprovidersTvQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.watchproviders.tv.$get>>,
) {
  return ['watchproviders', '/watchproviders/tv', toValue(args)] as const
}

export function getWatchprovidersTvQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.watchproviders.tv.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWatchprovidersTvQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.watchproviders.tv.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWatchprovidersTv<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.watchproviders.tv.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.watchproviders.tv.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.watchproviders.tv.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.watchproviders.tv.$get>>>
            >
          >,
          ReturnType<typeof getWatchprovidersTvQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.watchproviders.tv.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWatchprovidersTvQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWatchprovidersTvQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.watchproviders.tv.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
