import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAnalyticsKey() {
  return ['analytics'] as const
}

export function getAudioKey() {
  return ['audio'] as const
}

export function getAudioLabelsKey() {
  return ['audio_labels'] as const
}

export function getAuthKey() {
  return ['auth'] as const
}

export function getCameraKey() {
  return ['camera'] as const
}

export function getCamerasKey() {
  return ['cameras'] as const
}

export function getCasesKey() {
  return ['cases'] as const
}

export function getCategorizedObjectNamesKey() {
  return ['categorized_object_names'] as const
}

export function getChatKey() {
  return ['chat'] as const
}

export function getClassificationKey() {
  return ['classification'] as const
}

export function getConfigKey() {
  return ['config'] as const
}

export function getDebugReplayKey() {
  return ['debug_replay'] as const
}

export function getDescriptionKey() {
  return ['description'] as const
}

export function getEventIdsKey() {
  return ['event_ids'] as const
}

export function getEventsKey() {
  return ['events'] as const
}

export function getExportKey() {
  return ['export'] as const
}

export function getExportsKey() {
  return ['exports'] as const
}

export function getFacesKey() {
  return ['faces'] as const
}

export function getFfmpegKey() {
  return ['ffmpeg'] as const
}

export function getFfprobeKey() {
  return ['ffprobe'] as const
}

export function getGenaiKey() {
  return ['genai'] as const
}

export function getGo2rtcKey() {
  return ['go2rtc'] as const
}

export function getHardwareKey() {
  return ['hardware'] as const
}

export function getJobsKey() {
  return ['jobs'] as const
}

export function getKeyframeAnalysisKey() {
  return ['keyframe_analysis'] as const
}

export function getLabelsKey() {
  return ['labels'] as const
}

export function getLoginKey() {
  return ['login'] as const
}

export function getLogoutKey() {
  return ['logout'] as const
}

export function getLogsKey() {
  return ['logs'] as const
}

export function getLprKey() {
  return ['lpr'] as const
}

export function getMediaKey() {
  return ['media'] as const
}

export function getMetricsKey() {
  return ['metrics'] as const
}

export function getNoticesKey() {
  return ['notices'] as const
}

export function getNotificationsKey() {
  return ['notifications'] as const
}

export function getNvinfoKey() {
  return ['nvinfo'] as const
}

export function getOnvifKey() {
  return ['onvif'] as const
}

export function getPlusKey() {
  return ['plus'] as const
}

export function getPreviewKey() {
  return ['preview'] as const
}

export function getProfileKey() {
  return ['profile'] as const
}

export function getProfilesKey() {
  return ['profiles'] as const
}

export function getRecognizedLicensePlatesKey() {
  return ['recognized_license_plates'] as const
}

export function getRecordingsKey() {
  return ['recordings'] as const
}

export function getReindexKey() {
  return ['reindex'] as const
}

export function getReolinkKey() {
  return ['reolink'] as const
}

export function getRestartKey() {
  return ['restart'] as const
}

export function getReviewKey() {
  return ['review'] as const
}

export function getReviewIdsKey() {
  return ['review_ids'] as const
}

export function getReviewsKey() {
  return ['reviews'] as const
}

export function getStatsKey() {
  return ['stats'] as const
}

export function getSubLabelsKey() {
  return ['sub_labels'] as const
}

export function getTimelineKey() {
  return ['timeline'] as const
}

export function getTriggerKey() {
  return ['trigger'] as const
}

export function getTriggersKey() {
  return ['triggers'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getVainfoKey() {
  return ['vainfo'] as const
}

export function getVersionKey() {
  return ['version'] as const
}

export function getVlmKey() {
  return ['vlm'] as const
}

export function getVodKey() {
  return ['vod'] as const
}

export function getCameraNameKey() {
  return ['{camera_name}'] as const
}

export function getAnalyticsPreviewQueryKey() {
  return ['analytics', '/analytics/preview'] as const
}

export function getAnalyticsPreviewQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.preview.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.preview.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAnalyticsPreviewQueryKey>
  >({
    queryKey: getAnalyticsPreviewQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.analytics.preview.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAnalyticsPreview<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.preview.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.analytics.preview.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAnalyticsPreviewQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAnalyticsPreviewQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getAuthFirstTimeLoginQueryKey() {
  return ['auth', '/auth/first_time_login'] as const
}

export function getAuthFirstTimeLoginQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.first_time_login.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.auth.first_time_login.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuthFirstTimeLoginQueryKey>
  >({
    queryKey: getAuthFirstTimeLoginQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.auth.first_time_login.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAuthFirstTimeLogin<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.first_time_login.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.auth.first_time_login.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAuthFirstTimeLoginQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAuthFirstTimeLoginQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getAuthQueryKey() {
  return ['auth', '/auth'] as const
}

export function getAuthQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAuthQueryKey>
  >({
    queryKey: getAuthQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.auth.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAuth<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getAuthQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAuthQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getProfileQueryKey() {
  return ['profile', '/profile'] as const
}

export function getProfileQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProfileQueryKey>
  >({
    queryKey: getProfileQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.profile.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProfile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getProfileQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProfileQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getLogoutQueryKey() {
  return ['logout', '/logout'] as const
}

export function getLogoutQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logout.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logout.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLogoutQueryKey>
  >({
    queryKey: getLogoutQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.logout.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLogout<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logout.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logout.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getLogoutQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLogoutQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostLoginMutationKey() {
  return ['login', '/login', 'POST'] as const
}

export function getPostLoginMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$post>>>>>,
    TError,
    InferRequestType<typeof client.login.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLoginMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.login.$post>) {
      return parseResponse(client.login.$post(args, options))
    },
  })
}

export function createPostLogin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$post>>>>>,
          TError,
          InferRequestType<typeof client.login.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLoginMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUsersQueryKey() {
  return ['users', '/users'] as const
}

export function getUsersQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersQueryKey>
  >({
    queryKey: getUsersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.users.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getUsersQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostUsersMutationKey() {
  return ['users', '/users', 'POST'] as const
}

export function getPostUsersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
    TError,
    InferRequestType<typeof client.users.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.$post>) {
      return parseResponse(client.users.$post(args, options))
    },
  })
}

export function createPostUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
          TError,
          InferRequestType<typeof client.users.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteUsersUsernameMutationKey() {
  return ['users', '/users/:username', 'DELETE'] as const
}

export function getDeleteUsersUsernameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':username']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':username']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersUsernameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':username']['$delete']>) {
      return parseResponse(client.users[':username'].$delete(args, options))
    },
  })
}

export function createDeleteUsersUsername<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':username']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':username']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUsersUsernameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutUsersUsernamePasswordMutationKey() {
  return ['users', '/users/:username/password', 'PUT'] as const
}

export function getPutUsersUsernamePasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':username']['password']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':username']['password']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUsersUsernamePasswordMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':username']['password']['$put']>,
    ) {
      return parseResponse(client.users[':username'].password.$put(args, options))
    },
  })
}

export function createPutUsersUsernamePassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':username']['password']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':username']['password']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUsersUsernamePasswordMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutUsersUsernameRoleMutationKey() {
  return ['users', '/users/:username/role', 'PUT'] as const
}

export function getPutUsersUsernameRoleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':username']['role']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':username']['role']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUsersUsernameRoleMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':username']['role']['$put']>) {
      return parseResponse(client.users[':username'].role.$put(args, options))
    },
  })
}

export function createPutUsersUsernameRole<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':username']['role']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':username']['role']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUsersUsernameRoleMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getGo2rtcStreamsQueryKey() {
  return ['go2rtc', '/go2rtc/streams'] as const
}

export function getGo2rtcStreamsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.go2rtc.streams.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.go2rtc.streams.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGo2rtcStreamsQueryKey>
  >({
    queryKey: getGo2rtcStreamsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.go2rtc.streams.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGo2rtcStreams<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.go2rtc.streams.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.go2rtc.streams.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getGo2rtcStreamsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGo2rtcStreamsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getGo2rtcStreamsStreamNameQueryKey(
  args: InferRequestType<(typeof client.go2rtc.streams)[':stream_name']['$get']>,
) {
  return ['go2rtc', '/go2rtc/streams/:stream_name', args] as const
}

export function getGo2rtcStreamsStreamNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.go2rtc.streams)[':stream_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.go2rtc.streams)[':stream_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.go2rtc.streams)[':stream_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGo2rtcStreamsStreamNameQueryKey>
  >({
    queryKey: getGo2rtcStreamsStreamNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.go2rtc.streams[':stream_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createGo2rtcStreamsStreamName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.go2rtc.streams)[':stream_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.go2rtc.streams)[':stream_name']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.go2rtc.streams)[':stream_name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getGo2rtcStreamsStreamNameQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGo2rtcStreamsStreamNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutGo2rtcStreamsStreamNameMutationKey() {
  return ['go2rtc', '/go2rtc/streams/:stream_name', 'PUT'] as const
}

export function getPutGo2rtcStreamsStreamNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.go2rtc.streams)[':stream_name']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.go2rtc.streams)[':stream_name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutGo2rtcStreamsStreamNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.go2rtc.streams)[':stream_name']['$put']>,
    ) {
      return parseResponse(client.go2rtc.streams[':stream_name'].$put(args, options))
    },
  })
}

export function createPutGo2rtcStreamsStreamName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.go2rtc.streams)[':stream_name']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.go2rtc.streams)[':stream_name']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutGo2rtcStreamsStreamNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteGo2rtcStreamsStreamNameMutationKey() {
  return ['go2rtc', '/go2rtc/streams/:stream_name', 'DELETE'] as const
}

export function getDeleteGo2rtcStreamsStreamNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.go2rtc.streams)[':stream_name']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.go2rtc.streams)[':stream_name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteGo2rtcStreamsStreamNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.go2rtc.streams)[':stream_name']['$delete']>,
    ) {
      return parseResponse(client.go2rtc.streams[':stream_name'].$delete(args, options))
    },
  })
}

export function createDeleteGo2rtcStreamsStreamName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.go2rtc.streams)[':stream_name']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.go2rtc.streams)[':stream_name']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteGo2rtcStreamsStreamNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getGo2rtcStreamsStreamNameBitrateQueryKey(
  args: InferRequestType<(typeof client.go2rtc.streams)[':stream_name']['bitrate']['$get']>,
) {
  return ['go2rtc', '/go2rtc/streams/:stream_name/bitrate', args] as const
}

export function getGo2rtcStreamsStreamNameBitrateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.go2rtc.streams)[':stream_name']['bitrate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.go2rtc.streams)[':stream_name']['bitrate']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.go2rtc.streams)[':stream_name']['bitrate']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGo2rtcStreamsStreamNameBitrateQueryKey>
  >({
    queryKey: getGo2rtcStreamsStreamNameBitrateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.go2rtc.streams[':stream_name'].bitrate.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createGo2rtcStreamsStreamNameBitrate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.go2rtc.streams)[':stream_name']['bitrate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.go2rtc.streams)[':stream_name']['bitrate']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.go2rtc.streams)[':stream_name']['bitrate']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getGo2rtcStreamsStreamNameBitrateQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGo2rtcStreamsStreamNameBitrateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFfprobeQueryKey(args: InferRequestType<typeof client.ffprobe.$get>) {
  return ['ffprobe', '/ffprobe', args] as const
}

export function getFfprobeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ffprobe.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ffprobe.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ffprobe.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFfprobeQueryKey>
  >({
    queryKey: getFfprobeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ffprobe.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFfprobe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ffprobe.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.ffprobe.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ffprobe.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getFfprobeQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFfprobeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getKeyframeAnalysisQueryKey(
  args: InferRequestType<typeof client.keyframe_analysis.$get>,
) {
  return ['keyframe_analysis', '/keyframe_analysis', args] as const
}

export function getKeyframeAnalysisQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keyframe_analysis.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.keyframe_analysis.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keyframe_analysis.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getKeyframeAnalysisQueryKey>
  >({
    queryKey: getKeyframeAnalysisQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.keyframe_analysis.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createKeyframeAnalysis<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keyframe_analysis.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.keyframe_analysis.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.keyframe_analysis.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getKeyframeAnalysisQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getKeyframeAnalysisQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getFfprobeSnapshotQueryKey(
  args: InferRequestType<typeof client.ffprobe.snapshot.$get>,
) {
  return ['ffprobe', '/ffprobe/snapshot', args] as const
}

export function getFfprobeSnapshotQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ffprobe.snapshot.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ffprobe.snapshot.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ffprobe.snapshot.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFfprobeSnapshotQueryKey>
  >({
    queryKey: getFfprobeSnapshotQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ffprobe.snapshot.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFfprobeSnapshot<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ffprobe.snapshot.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.ffprobe.snapshot.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ffprobe.snapshot.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFfprobeSnapshotQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFfprobeSnapshotQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getReolinkDetectQueryKey(
  args: InferRequestType<typeof client.reolink.detect.$get>,
) {
  return ['reolink', '/reolink/detect', args] as const
}

export function getReolinkDetectQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reolink.detect.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.reolink.detect.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reolink.detect.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReolinkDetectQueryKey>
  >({
    queryKey: getReolinkDetectQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.reolink.detect.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createReolinkDetect<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reolink.detect.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.reolink.detect.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reolink.detect.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getReolinkDetectQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReolinkDetectQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getOnvifProbeQueryKey(args: InferRequestType<typeof client.onvif.probe.$get>) {
  return ['onvif', '/onvif/probe', args] as const
}

export function getOnvifProbeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.onvif.probe.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.onvif.probe.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.onvif.probe.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOnvifProbeQueryKey>
  >({
    queryKey: getOnvifProbeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.onvif.probe.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOnvifProbe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.onvif.probe.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.onvif.probe.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.onvif.probe.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getOnvifProbeQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOnvifProbeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteCamerasCameraNameMutationKey() {
  return ['cameras', '/cameras/:camera_name', 'DELETE'] as const
}

export function getDeleteCamerasCameraNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cameras)[':camera_name']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cameras)[':camera_name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCamerasCameraNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.cameras)[':camera_name']['$delete']>) {
      return parseResponse(client.cameras[':camera_name'].$delete(args, options))
    },
  })
}

export function createDeleteCamerasCameraName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cameras)[':camera_name']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.cameras)[':camera_name']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCamerasCameraNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutCameraCameraNameSetFeatureSubCommandMutationKey() {
  return ['camera', '/camera/:camera_name/set/:feature/:sub_command', 'PUT'] as const
}

export function getPutCameraCameraNameSetFeatureSubCommandMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.camera)[':camera_name']['set'][':feature'][':sub_command']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.camera)[':camera_name']['set'][':feature'][':sub_command']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutCameraCameraNameSetFeatureSubCommandMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.camera)[':camera_name']['set'][':feature'][':sub_command']['$put']
      >,
    ) {
      return parseResponse(
        client.camera[':camera_name'].set[':feature'][':sub_command'].$put(args, options),
      )
    },
  })
}

export function createPutCameraCameraNameSetFeatureSubCommand<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.camera)[':camera_name']['set'][':feature'][':sub_command']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.camera)[':camera_name']['set'][':feature'][':sub_command']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCameraCameraNameSetFeatureSubCommandMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutCameraCameraNameSetFeatureMutationKey() {
  return ['camera', '/camera/:camera_name/set/:feature', 'PUT'] as const
}

export function getPutCameraCameraNameSetFeatureMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.camera)[':camera_name']['set'][':feature']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.camera)[':camera_name']['set'][':feature']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCameraCameraNameSetFeatureMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.camera)[':camera_name']['set'][':feature']['$put']>,
    ) {
      return parseResponse(client.camera[':camera_name'].set[':feature'].$put(args, options))
    },
  })
}

export function createPutCameraCameraNameSetFeature<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.camera)[':camera_name']['set'][':feature']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.camera)[':camera_name']['set'][':feature']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCameraCameraNameSetFeatureMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getChatToolsQueryKey() {
  return ['chat', '/chat/tools'] as const
}

export function getChatToolsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.tools.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.tools.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getChatToolsQueryKey>
  >({
    queryKey: getChatToolsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.chat.tools.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createChatTools<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.tools.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.tools.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getChatToolsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChatToolsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostChatExecuteMutationKey() {
  return ['chat', '/chat/execute', 'POST'] as const
}

export function getPostChatExecuteMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.execute.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.chat.execute.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChatExecuteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.chat.execute.$post>) {
      return parseResponse(client.chat.execute.$post(args, options))
    },
  })
}

export function createPostChatExecute<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.execute.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.chat.execute.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostChatExecuteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostChatCompletionMutationKey() {
  return ['chat', '/chat/completion', 'POST'] as const
}

export function getPostChatCompletionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.completion.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.chat.completion.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChatCompletionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.chat.completion.$post>) {
      return parseResponse(client.chat.completion.$post(args, options))
    },
  })
}

export function createPostChatCompletion<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.chat.completion.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.chat.completion.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostChatCompletionMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getVlmMonitorQueryKey() {
  return ['vlm', '/vlm/monitor'] as const
}

export function getVlmMonitorQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vlm.monitor.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vlm.monitor.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVlmMonitorQueryKey>
  >({
    queryKey: getVlmMonitorQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.vlm.monitor.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createVlmMonitor<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vlm.monitor.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vlm.monitor.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getVlmMonitorQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVlmMonitorQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostVlmMonitorMutationKey() {
  return ['vlm', '/vlm/monitor', 'POST'] as const
}

export function getPostVlmMonitorMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vlm.monitor.$post>>>>>,
    TError,
    InferRequestType<typeof client.vlm.monitor.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVlmMonitorMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.vlm.monitor.$post>) {
      return parseResponse(client.vlm.monitor.$post(args, options))
    },
  })
}

export function createPostVlmMonitor<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vlm.monitor.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.vlm.monitor.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostVlmMonitorMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteVlmMonitorMutationKey() {
  return ['vlm', '/vlm/monitor', 'DELETE'] as const
}

export function getDeleteVlmMonitorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vlm.monitor.$delete>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteVlmMonitorMutationKey(),
    async mutationFn() {
      return parseResponse(client.vlm.monitor.$delete(undefined, options))
    },
  })
}

export function createDeleteVlmMonitor<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vlm.monitor.$delete>>>>
          >,
          TError,
          void,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteVlmMonitorMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getFacesQueryKey() {
  return ['faces', '/faces'] as const
}

export function getFacesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.faces.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.faces.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFacesQueryKey>
  >({
    queryKey: getFacesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.faces.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFaces<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.faces.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.faces.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getFacesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFacesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostFacesReprocessMutationKey() {
  return ['faces', '/faces/reprocess', 'POST'] as const
}

export function getPostFacesReprocessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.faces.reprocess.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.faces.reprocess.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFacesReprocessMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.faces.reprocess.$post>) {
      return parseResponse(client.faces.reprocess.$post(args, options))
    },
  })
}

export function createPostFacesReprocess<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.faces.reprocess.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.faces.reprocess.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFacesReprocessMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostFacesTrainNameClassifyMutationKey() {
  return ['faces', '/faces/train/:name/classify', 'POST'] as const
}

export function getPostFacesTrainNameClassifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.faces.train)[':name']['classify']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.faces.train)[':name']['classify']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFacesTrainNameClassifyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.faces.train)[':name']['classify']['$post']>,
    ) {
      return parseResponse(client.faces.train[':name'].classify.$post(args, options))
    },
  })
}

export function createPostFacesTrainNameClassify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.faces.train)[':name']['classify']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.faces.train)[':name']['classify']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFacesTrainNameClassifyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostFacesNameCreateMutationKey() {
  return ['faces', '/faces/:name/create', 'POST'] as const
}

export function getPostFacesNameCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.faces)[':name']['create']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.faces)[':name']['create']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFacesNameCreateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.faces)[':name']['create']['$post']>) {
      return parseResponse(client.faces[':name'].create.$post(args, options))
    },
  })
}

export function createPostFacesNameCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.faces)[':name']['create']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.faces)[':name']['create']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFacesNameCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostFacesNameRegisterMutationKey() {
  return ['faces', '/faces/:name/register', 'POST'] as const
}

export function getPostFacesNameRegisterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.faces)[':name']['register']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.faces)[':name']['register']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFacesNameRegisterMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.faces)[':name']['register']['$post']>) {
      return parseResponse(client.faces[':name'].register.$post(args, options))
    },
  })
}

export function createPostFacesNameRegister<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.faces)[':name']['register']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.faces)[':name']['register']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFacesNameRegisterMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostFacesRecognizeMutationKey() {
  return ['faces', '/faces/recognize', 'POST'] as const
}

export function getPostFacesRecognizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.faces.recognize.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.faces.recognize.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFacesRecognizeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.faces.recognize.$post>) {
      return parseResponse(client.faces.recognize.$post(args, options))
    },
  })
}

export function createPostFacesRecognize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.faces.recognize.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.faces.recognize.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFacesRecognizeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostFacesNameReclassifyMutationKey() {
  return ['faces', '/faces/:name/reclassify', 'POST'] as const
}

export function getPostFacesNameReclassifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.faces)[':name']['reclassify']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.faces)[':name']['reclassify']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFacesNameReclassifyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.faces)[':name']['reclassify']['$post']>,
    ) {
      return parseResponse(client.faces[':name'].reclassify.$post(args, options))
    },
  })
}

export function createPostFacesNameReclassify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.faces)[':name']['reclassify']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.faces)[':name']['reclassify']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFacesNameReclassifyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostFacesNameDeleteMutationKey() {
  return ['faces', '/faces/:name/delete', 'POST'] as const
}

export function getPostFacesNameDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.faces)[':name']['delete']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.faces)[':name']['delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFacesNameDeleteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.faces)[':name']['delete']['$post']>) {
      return parseResponse(client.faces[':name'].delete.$post(args, options))
    },
  })
}

export function createPostFacesNameDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.faces)[':name']['delete']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.faces)[':name']['delete']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFacesNameDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutFacesOldNameRenameMutationKey() {
  return ['faces', '/faces/:old_name/rename', 'PUT'] as const
}

export function getPutFacesOldNameRenameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.faces)[':old_name']['rename']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.faces)[':old_name']['rename']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutFacesOldNameRenameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.faces)[':old_name']['rename']['$put']>) {
      return parseResponse(client.faces[':old_name'].rename.$put(args, options))
    },
  })
}

export function createPutFacesOldNameRename<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.faces)[':old_name']['rename']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.faces)[':old_name']['rename']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutFacesOldNameRenameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutLprReprocessMutationKey() {
  return ['lpr', '/lpr/reprocess', 'PUT'] as const
}

export function getPutLprReprocessMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lpr.reprocess.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.lpr.reprocess.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutLprReprocessMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.lpr.reprocess.$put>) {
      return parseResponse(client.lpr.reprocess.$put(args, options))
    },
  })
}

export function createPutLprReprocess<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lpr.reprocess.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.lpr.reprocess.$put>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutLprReprocessMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutReindexMutationKey() {
  return ['reindex', '/reindex', 'PUT'] as const
}

export function getPutReindexMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reindex.$put>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPutReindexMutationKey(),
    async mutationFn() {
      return parseResponse(client.reindex.$put(undefined, options))
    },
  })
}

export function createPutReindex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reindex.$put>>>>
          >,
          TError,
          void,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutReindexMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutAudioTranscribeMutationKey() {
  return ['audio', '/audio/transcribe', 'PUT'] as const
}

export function getPutAudioTranscribeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audio.transcribe.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.audio.transcribe.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutAudioTranscribeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.audio.transcribe.$put>) {
      return parseResponse(client.audio.transcribe.$put(args, options))
    },
  })
}

export function createPutAudioTranscribe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.audio.transcribe.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.audio.transcribe.$put>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAudioTranscribeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getClassificationNameDatasetQueryKey(
  args: InferRequestType<(typeof client.classification)[':name']['dataset']['$get']>,
) {
  return ['classification', '/classification/:name/dataset', args] as const
}

export function getClassificationNameDatasetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.classification)[':name']['dataset']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.classification)[':name']['dataset']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.classification)[':name']['dataset']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClassificationNameDatasetQueryKey>
  >({
    queryKey: getClassificationNameDatasetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.classification[':name'].dataset.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createClassificationNameDataset<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.classification)[':name']['dataset']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.classification)[':name']['dataset']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.classification)[':name']['dataset']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getClassificationNameDatasetQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getClassificationNameDatasetQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getClassificationAttributesQueryKey(
  args: InferRequestType<typeof client.classification.attributes.$get>,
) {
  return ['classification', '/classification/attributes', args] as const
}

export function getClassificationAttributesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.classification.attributes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.classification.attributes.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.classification.attributes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClassificationAttributesQueryKey>
  >({
    queryKey: getClassificationAttributesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.classification.attributes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createClassificationAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.classification.attributes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.classification.attributes.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.classification.attributes.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getClassificationAttributesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getClassificationAttributesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getClassificationNameTrainQueryKey(
  args: InferRequestType<(typeof client.classification)[':name']['train']['$get']>,
) {
  return ['classification', '/classification/:name/train', args] as const
}

export function getClassificationNameTrainQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.classification)[':name']['train']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.classification)[':name']['train']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.classification)[':name']['train']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClassificationNameTrainQueryKey>
  >({
    queryKey: getClassificationNameTrainQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.classification[':name'].train.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createClassificationNameTrain<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.classification)[':name']['train']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.classification)[':name']['train']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.classification)[':name']['train']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getClassificationNameTrainQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getClassificationNameTrainQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostClassificationNameTrainMutationKey() {
  return ['classification', '/classification/:name/train', 'POST'] as const
}

export function getPostClassificationNameTrainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.classification)[':name']['train']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.classification)[':name']['train']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostClassificationNameTrainMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.classification)[':name']['train']['$post']>,
    ) {
      return parseResponse(client.classification[':name'].train.$post(args, options))
    },
  })
}

export function createPostClassificationNameTrain<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.classification)[':name']['train']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.classification)[':name']['train']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostClassificationNameTrainMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostClassificationNameDatasetCategoryDeleteMutationKey() {
  return ['classification', '/classification/:name/dataset/:category/delete', 'POST'] as const
}

export function getPostClassificationNameDatasetCategoryDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.classification)[':name']['dataset'][':category']['delete']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.classification)[':name']['dataset'][':category']['delete']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostClassificationNameDatasetCategoryDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.classification)[':name']['dataset'][':category']['delete']['$post']
      >,
    ) {
      return parseResponse(
        client.classification[':name'].dataset[':category'].delete.$post(args, options),
      )
    },
  })
}

export function createPostClassificationNameDatasetCategoryDelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.classification)[':name']['dataset'][':category']['delete']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.classification)[':name']['dataset'][':category']['delete']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostClassificationNameDatasetCategoryDeleteMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostClassificationNameDatasetCategoryReclassifyMutationKey() {
  return ['classification', '/classification/:name/dataset/:category/reclassify', 'POST'] as const
}

export function getPostClassificationNameDatasetCategoryReclassifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.classification)[':name']['dataset'][':category']['reclassify']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.classification)[':name']['dataset'][':category']['reclassify']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostClassificationNameDatasetCategoryReclassifyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.classification)[':name']['dataset'][':category']['reclassify']['$post']
      >,
    ) {
      return parseResponse(
        client.classification[':name'].dataset[':category'].reclassify.$post(args, options),
      )
    },
  })
}

export function createPostClassificationNameDatasetCategoryReclassify<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.classification)[':name']['dataset'][':category']['reclassify']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.classification)[':name']['dataset'][':category']['reclassify']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostClassificationNameDatasetCategoryReclassifyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutClassificationNameDatasetOldCategoryRenameMutationKey() {
  return ['classification', '/classification/:name/dataset/:old_category/rename', 'PUT'] as const
}

export function getPutClassificationNameDatasetOldCategoryRenameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.classification)[':name']['dataset'][':old_category']['rename']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.classification)[':name']['dataset'][':old_category']['rename']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutClassificationNameDatasetOldCategoryRenameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.classification)[':name']['dataset'][':old_category']['rename']['$put']
      >,
    ) {
      return parseResponse(
        client.classification[':name'].dataset[':old_category'].rename.$put(args, options),
      )
    },
  })
}

export function createPutClassificationNameDatasetOldCategoryRename<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.classification)[':name']['dataset'][':old_category']['rename']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.classification)[':name']['dataset'][':old_category']['rename']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutClassificationNameDatasetOldCategoryRenameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostClassificationNameDatasetCategorizeMutationKey() {
  return ['classification', '/classification/:name/dataset/categorize', 'POST'] as const
}

export function getPostClassificationNameDatasetCategorizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.classification)[':name']['dataset']['categorize']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.classification)[':name']['dataset']['categorize']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostClassificationNameDatasetCategorizeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.classification)[':name']['dataset']['categorize']['$post']
      >,
    ) {
      return parseResponse(client.classification[':name'].dataset.categorize.$post(args, options))
    },
  })
}

export function createPostClassificationNameDatasetCategorize<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.classification)[':name']['dataset']['categorize']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.classification)[':name']['dataset']['categorize']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostClassificationNameDatasetCategorizeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostClassificationNameDatasetCategoryCreateMutationKey() {
  return ['classification', '/classification/:name/dataset/:category/create', 'POST'] as const
}

export function getPostClassificationNameDatasetCategoryCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.classification)[':name']['dataset'][':category']['create']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.classification)[':name']['dataset'][':category']['create']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostClassificationNameDatasetCategoryCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.classification)[':name']['dataset'][':category']['create']['$post']
      >,
    ) {
      return parseResponse(
        client.classification[':name'].dataset[':category'].create.$post(args, options),
      )
    },
  })
}

export function createPostClassificationNameDatasetCategoryCreate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.classification)[':name']['dataset'][':category']['create']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.classification)[':name']['dataset'][':category']['create']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostClassificationNameDatasetCategoryCreateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostClassificationNameTrainDeleteMutationKey() {
  return ['classification', '/classification/:name/train/delete', 'POST'] as const
}

export function getPostClassificationNameTrainDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.classification)[':name']['train']['delete']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.classification)[':name']['train']['delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostClassificationNameTrainDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.classification)[':name']['train']['delete']['$post']>,
    ) {
      return parseResponse(client.classification[':name'].train.delete.$post(args, options))
    },
  })
}

export function createPostClassificationNameTrainDelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.classification)[':name']['train']['delete']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.classification)[':name']['train']['delete']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostClassificationNameTrainDeleteMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostClassificationGenerateExamplesStateMutationKey() {
  return ['classification', '/classification/generate_examples/state', 'POST'] as const
}

export function getPostClassificationGenerateExamplesStateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.classification.generate_examples.state.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.classification.generate_examples.state.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostClassificationGenerateExamplesStateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.classification.generate_examples.state.$post>,
    ) {
      return parseResponse(client.classification.generate_examples.state.$post(args, options))
    },
  })
}

export function createPostClassificationGenerateExamplesState<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.classification.generate_examples.state.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.classification.generate_examples.state.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostClassificationGenerateExamplesStateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostClassificationGenerateExamplesObjectMutationKey() {
  return ['classification', '/classification/generate_examples/object', 'POST'] as const
}

export function getPostClassificationGenerateExamplesObjectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.classification.generate_examples.object.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.classification.generate_examples.object.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostClassificationGenerateExamplesObjectMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.classification.generate_examples.object.$post>,
    ) {
      return parseResponse(client.classification.generate_examples.object.$post(args, options))
    },
  })
}

export function createPostClassificationGenerateExamplesObject<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.classification.generate_examples.object.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.classification.generate_examples.object.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostClassificationGenerateExamplesObjectMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteClassificationNameMutationKey() {
  return ['classification', '/classification/:name', 'DELETE'] as const
}

export function getDeleteClassificationNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.classification)[':name']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.classification)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteClassificationNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.classification)[':name']['$delete']>) {
      return parseResponse(client.classification[':name'].$delete(args, options))
    },
  })
}

export function createDeleteClassificationName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.classification)[':name']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.classification)[':name']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteClassificationNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getReviewQueryKey(args: InferRequestType<typeof client.review.$get>) {
  return ['review', '/review', args] as const
}

export function getReviewQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.review.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.review.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.review.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getReviewQueryKey>
  >({
    queryKey: getReviewQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.review.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createReview<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.review.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.review.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.review.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getReviewQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReviewQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getReviewIdsQueryKey(args: InferRequestType<typeof client.review_ids.$get>) {
  return ['review_ids', '/review_ids', args] as const
}

export function getReviewIdsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.review_ids.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.review_ids.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.review_ids.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getReviewIdsQueryKey>
  >({
    queryKey: getReviewIdsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.review_ids.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createReviewIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.review_ids.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.review_ids.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.review_ids.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getReviewIdsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReviewIdsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getReviewSummaryQueryKey(
  args: InferRequestType<typeof client.review.summary.$get>,
) {
  return ['review', '/review/summary', args] as const
}

export function getReviewSummaryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.review.summary.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.review.summary.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.review.summary.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReviewSummaryQueryKey>
  >({
    queryKey: getReviewSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.review.summary.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createReviewSummary<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.review.summary.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.review.summary.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.review.summary.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getReviewSummaryQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReviewSummaryQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostReviewsViewedMutationKey() {
  return ['reviews', '/reviews/viewed', 'POST'] as const
}

export function getPostReviewsViewedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.viewed.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.reviews.viewed.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostReviewsViewedMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.reviews.viewed.$post>) {
      return parseResponse(client.reviews.viewed.$post(args, options))
    },
  })
}

export function createPostReviewsViewed<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.reviews.viewed.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.reviews.viewed.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostReviewsViewedMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostReviewsDeleteMutationKey() {
  return ['reviews', '/reviews/delete', 'POST'] as const
}

export function getPostReviewsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.delete.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.reviews.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostReviewsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.reviews.delete.$post>) {
      return parseResponse(client.reviews.delete.$post(args, options))
    },
  })
}

export function createPostReviewsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.reviews.delete.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.reviews.delete.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostReviewsDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getReviewActivityMotionQueryKey(
  args: InferRequestType<typeof client.review.activity.motion.$get>,
) {
  return ['review', '/review/activity/motion', args] as const
}

export function getReviewActivityMotionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.review.activity.motion.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.review.activity.motion.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.review.activity.motion.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReviewActivityMotionQueryKey>
  >({
    queryKey: getReviewActivityMotionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.review.activity.motion.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createReviewActivityMotion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.review.activity.motion.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.review.activity.motion.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.review.activity.motion.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getReviewActivityMotionQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getReviewActivityMotionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getReviewEventEventIdQueryKey(
  args: InferRequestType<(typeof client.review.event)[':event_id']['$get']>,
) {
  return ['review', '/review/event/:event_id', args] as const
}

export function getReviewEventEventIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.review.event)[':event_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.review.event)[':event_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.review.event)[':event_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReviewEventEventIdQueryKey>
  >({
    queryKey: getReviewEventEventIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.review.event[':event_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createReviewEventEventId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.review.event)[':event_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.review.event)[':event_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.review.event)[':event_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getReviewEventEventIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReviewEventEventIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getReviewReviewIdQueryKey(
  args: InferRequestType<(typeof client.review)[':review_id']['$get']>,
) {
  return ['review', '/review/:review_id', args] as const
}

export function getReviewReviewIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.review)[':review_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.review)[':review_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.review)[':review_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReviewReviewIdQueryKey>
  >({
    queryKey: getReviewReviewIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.review[':review_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createReviewReviewId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.review)[':review_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.review)[':review_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.review)[':review_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getReviewReviewIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReviewReviewIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutReviewReviewIdRegenerateDescriptionMutationKey() {
  return ['review', '/review/:review_id/regenerate_description', 'PUT'] as const
}

export function getPutReviewReviewIdRegenerateDescriptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.review)[':review_id']['regenerate_description']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.review)[':review_id']['regenerate_description']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutReviewReviewIdRegenerateDescriptionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.review)[':review_id']['regenerate_description']['$put']
      >,
    ) {
      return parseResponse(client.review[':review_id'].regenerate_description.$put(args, options))
    },
  })
}

export function createPutReviewReviewIdRegenerateDescription<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.review)[':review_id']['regenerate_description']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.review)[':review_id']['regenerate_description']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutReviewReviewIdRegenerateDescriptionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteReviewReviewIdViewedMutationKey() {
  return ['review', '/review/:review_id/viewed', 'DELETE'] as const
}

export function getDeleteReviewReviewIdViewedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.review)[':review_id']['viewed']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.review)[':review_id']['viewed']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteReviewReviewIdViewedMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.review)[':review_id']['viewed']['$delete']>,
    ) {
      return parseResponse(client.review[':review_id'].viewed.$delete(args, options))
    },
  })
}

export function createDeleteReviewReviewIdViewed<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.review)[':review_id']['viewed']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.review)[':review_id']['viewed']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteReviewReviewIdViewedMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostReviewSummarizeStartStartTsEndEndTsMutationKey() {
  return ['review', '/review/summarize/start/:start_ts/end/:end_ts', 'POST'] as const
}

export function getPostReviewSummarizeStartStartTsEndEndTsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.review.summarize.start)[':start_ts']['end'][':end_ts']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.review.summarize.start)[':start_ts']['end'][':end_ts']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostReviewSummarizeStartStartTsEndEndTsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.review.summarize.start)[':start_ts']['end'][':end_ts']['$post']
      >,
    ) {
      return parseResponse(
        client.review.summarize.start[':start_ts'].end[':end_ts'].$post(args, options),
      )
    },
  })
}

export function createPostReviewSummarizeStartStartTsEndEndTs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.review.summarize.start)[':start_ts']['end'][':end_ts']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.review.summarize.start)[':start_ts']['end'][':end_ts']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostReviewSummarizeStartStartTsEndEndTsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getQueryKey() {
  return ['', '/'] as const
}

export function getQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryKey>
  >({
    queryKey: getQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function create<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getConfigSchemaJsonQueryKey() {
  return ['config', '/config/schema.json'] as const
}

export function getConfigSchemaJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.config)['schema.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.config)['schema.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConfigSchemaJsonQueryKey>
  >({
    queryKey: getConfigSchemaJsonQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.config['schema.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createConfigSchemaJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.config)['schema.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.config)['schema.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getConfigSchemaJsonQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getConfigSchemaJsonQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getVersionQueryKey() {
  return ['version', '/version'] as const
}

export function getVersionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVersionQueryKey>
  >({
    queryKey: getVersionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.version.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createVersion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getVersionQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVersionQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatsQueryKey() {
  return ['stats', '/stats'] as const
}

export function getStatsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStatsQueryKey>
  >({
    queryKey: getStatsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.stats.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStats<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getStatsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStatsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getStatsHistoryQueryKey(args: InferRequestType<typeof client.stats.history.$get>) {
  return ['stats', '/stats/history', args] as const
}

export function getStatsHistoryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.history.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.stats.history.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.history.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatsHistoryQueryKey>
  >({
    queryKey: getStatsHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stats.history.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatsHistory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.history.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.stats.history.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.history.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getStatsHistoryQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStatsHistoryQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMetricsQueryKey() {
  return ['metrics', '/metrics'] as const
}

export function getMetricsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMetricsQueryKey>
  >({
    queryKey: getMetricsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getMetricsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMetricsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getGenaiModelsQueryKey() {
  return ['genai', '/genai/models'] as const
}

export function getGenaiModelsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genai.models.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genai.models.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGenaiModelsQueryKey>
  >({
    queryKey: getGenaiModelsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.genai.models.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGenaiModels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genai.models.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genai.models.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getGenaiModelsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGenaiModelsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getGenaiRolesQueryKey() {
  return ['genai', '/genai/roles'] as const
}

export function getGenaiRolesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genai.roles.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genai.roles.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGenaiRolesQueryKey>
  >({
    queryKey: getGenaiRolesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.genai.roles.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGenaiRoles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genai.roles.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genai.roles.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getGenaiRolesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGenaiRolesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostGenaiProbeMutationKey() {
  return ['genai', '/genai/probe', 'POST'] as const
}

export function getPostGenaiProbeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genai.probe.$post>>>>>,
    TError,
    InferRequestType<typeof client.genai.probe.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGenaiProbeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.genai.probe.$post>) {
      return parseResponse(client.genai.probe.$post(args, options))
    },
  })
}

export function createPostGenaiProbe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genai.probe.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.genai.probe.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGenaiProbeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getConfigQueryKey() {
  return ['config', '/config'] as const
}

export function getConfigQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getConfigQueryKey>
  >({
    queryKey: getConfigQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.config.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createConfig<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getConfigQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getConfigQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getProfilesQueryKey() {
  return ['profiles', '/profiles'] as const
}

export function getProfilesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profiles.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profiles.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProfilesQueryKey>
  >({
    queryKey: getProfilesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.profiles.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProfiles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profiles.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profiles.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getProfilesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProfilesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getProfileActiveQueryKey() {
  return ['profile', '/profile/active'] as const
}

export function getProfileActiveQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.active.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.active.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProfileActiveQueryKey>
  >({
    queryKey: getProfileActiveQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.profile.active.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProfileActive<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.active.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.active.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getProfileActiveQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProfileActiveQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getFfmpegPresetsQueryKey() {
  return ['ffmpeg', '/ffmpeg/presets'] as const
}

export function getFfmpegPresetsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ffmpeg.presets.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ffmpeg.presets.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFfmpegPresetsQueryKey>
  >({
    queryKey: getFfmpegPresetsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.ffmpeg.presets.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFfmpegPresets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ffmpeg.presets.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ffmpeg.presets.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getFfmpegPresetsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFfmpegPresetsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getConfigRawPathsQueryKey() {
  return ['config', '/config/raw_paths'] as const
}

export function getConfigRawPathsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.raw_paths.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.raw_paths.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getConfigRawPathsQueryKey>
  >({
    queryKey: getConfigRawPathsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.config.raw_paths.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createConfigRawPaths<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.raw_paths.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.config.raw_paths.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getConfigRawPathsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getConfigRawPathsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getConfigRawQueryKey() {
  return ['config', '/config/raw'] as const
}

export function getConfigRawQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.raw.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.raw.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getConfigRawQueryKey>
  >({
    queryKey: getConfigRawQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.config.raw.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createConfigRaw<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.raw.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.raw.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getConfigRawQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getConfigRawQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostConfigSaveMutationKey() {
  return ['config', '/config/save', 'POST'] as const
}

export function getPostConfigSaveMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.save.$post>>>>>,
    TError,
    InferRequestType<typeof client.config.save.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConfigSaveMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.config.save.$post>) {
      return parseResponse(client.config.save.$post(args, options))
    },
  })
}

export function createPostConfigSave<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.save.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.config.save.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostConfigSaveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutConfigSetMutationKey() {
  return ['config', '/config/set', 'PUT'] as const
}

export function getPutConfigSetMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.set.$put>>>>>,
    TError,
    InferRequestType<typeof client.config.set.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutConfigSetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.config.set.$put>) {
      return parseResponse(client.config.set.$put(args, options))
    },
  })
}

export function createPutConfigSet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.set.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.config.set.$put>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutConfigSetMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getVainfoQueryKey() {
  return ['vainfo', '/vainfo'] as const
}

export function getVainfoQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vainfo.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vainfo.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVainfoQueryKey>
  >({
    queryKey: getVainfoQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.vainfo.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createVainfo<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vainfo.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vainfo.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getVainfoQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVainfoQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getNvinfoQueryKey() {
  return ['nvinfo', '/nvinfo'] as const
}

export function getNvinfoQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nvinfo.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nvinfo.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNvinfoQueryKey>
  >({
    queryKey: getNvinfoQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.nvinfo.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createNvinfo<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nvinfo.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nvinfo.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getNvinfoQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNvinfoQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getLogsServiceQueryKey(
  args: InferRequestType<(typeof client.logs)[':service']['$get']>,
) {
  return ['logs', '/logs/:service', args] as const
}

export function getLogsServiceQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':service']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.logs)[':service']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':service']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLogsServiceQueryKey>
  >({
    queryKey: getLogsServiceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.logs[':service'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLogsService<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':service']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.logs)[':service']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':service']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getLogsServiceQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLogsServiceQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostRestartMutationKey() {
  return ['restart', '/restart', 'POST'] as const
}

export function getPostRestartMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.restart.$post>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostRestartMutationKey(),
    async mutationFn() {
      return parseResponse(client.restart.$post(undefined, options))
    },
  })
}

export function createPostRestart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.restart.$post>>>>
          >,
          TError,
          void,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRestartMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostMediaSyncMutationKey() {
  return ['media', '/media/sync', 'POST'] as const
}

export function getPostMediaSyncMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media.sync.$post>>>>>,
    TError,
    InferRequestType<typeof client.media.sync.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMediaSyncMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.media.sync.$post>) {
      return parseResponse(client.media.sync.$post(args, options))
    },
  })
}

export function createPostMediaSync<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media.sync.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.media.sync.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMediaSyncMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMediaSyncCurrentQueryKey() {
  return ['media', '/media/sync/current'] as const
}

export function getMediaSyncCurrentQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media.sync.current.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media.sync.current.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMediaSyncCurrentQueryKey>
  >({
    queryKey: getMediaSyncCurrentQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.media.sync.current.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMediaSyncCurrent<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media.sync.current.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.media.sync.current.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMediaSyncCurrentQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMediaSyncCurrentQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getMediaSyncStatusJobIdQueryKey(
  args: InferRequestType<(typeof client.media.sync.status)[':job_id']['$get']>,
) {
  return ['media', '/media/sync/status/:job_id', args] as const
}

export function getMediaSyncStatusJobIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.media.sync.status)[':job_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.media.sync.status)[':job_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.media.sync.status)[':job_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMediaSyncStatusJobIdQueryKey>
  >({
    queryKey: getMediaSyncStatusJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.media.sync.status[':job_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMediaSyncStatusJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.media.sync.status)[':job_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.media.sync.status)[':job_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.media.sync.status)[':job_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMediaSyncStatusJobIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getMediaSyncStatusJobIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getLabelsQueryKey(args: InferRequestType<typeof client.labels.$get>) {
  return ['labels', '/labels', args] as const
}

export function getLabelsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.labels.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLabelsQueryKey>
  >({
    queryKey: getLabelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.labels.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLabels<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.labels.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getLabelsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLabelsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSubLabelsQueryKey(args: InferRequestType<typeof client.sub_labels.$get>) {
  return ['sub_labels', '/sub_labels', args] as const
}

export function getSubLabelsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sub_labels.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sub_labels.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sub_labels.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSubLabelsQueryKey>
  >({
    queryKey: getSubLabelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sub_labels.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSubLabels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sub_labels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.sub_labels.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sub_labels.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getSubLabelsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSubLabelsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCategorizedObjectNamesQueryKey(
  args: InferRequestType<typeof client.categorized_object_names.$get>,
) {
  return ['categorized_object_names', '/categorized_object_names', args] as const
}

export function getCategorizedObjectNamesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.categorized_object_names.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.categorized_object_names.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.categorized_object_names.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCategorizedObjectNamesQueryKey>
  >({
    queryKey: getCategorizedObjectNamesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.categorized_object_names.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCategorizedObjectNames<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.categorized_object_names.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.categorized_object_names.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.categorized_object_names.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCategorizedObjectNamesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCategorizedObjectNamesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAudioLabelsQueryKey() {
  return ['audio_labels', '/audio_labels'] as const
}

export function getAudioLabelsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audio_labels.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audio_labels.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAudioLabelsQueryKey>
  >({
    queryKey: getAudioLabelsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.audio_labels.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAudioLabels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audio_labels.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audio_labels.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getAudioLabelsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAudioLabelsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPlusModelsQueryKey(args: InferRequestType<typeof client.plus.models.$get>) {
  return ['plus', '/plus/models', args] as const
}

export function getPlusModelsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plus.models.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.plus.models.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plus.models.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPlusModelsQueryKey>
  >({
    queryKey: getPlusModelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.plus.models.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPlusModels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plus.models.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.plus.models.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plus.models.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getPlusModelsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPlusModelsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostPlusValidateMutationKey() {
  return ['plus', '/plus/validate', 'POST'] as const
}

export function getPostPlusValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plus.validate.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostPlusValidateMutationKey(),
    async mutationFn() {
      return parseResponse(client.plus.validate.$post(undefined, options))
    },
  })
}

export function createPostPlusValidate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plus.validate.$post>>>>
          >,
          TError,
          void,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPlusValidateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getRecognizedLicensePlatesQueryKey(
  args: InferRequestType<typeof client.recognized_license_plates.$get>,
) {
  return ['recognized_license_plates', '/recognized_license_plates', args] as const
}

export function getRecognizedLicensePlatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.recognized_license_plates.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.recognized_license_plates.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.recognized_license_plates.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecognizedLicensePlatesQueryKey>
  >({
    queryKey: getRecognizedLicensePlatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recognized_license_plates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRecognizedLicensePlates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.recognized_license_plates.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.recognized_license_plates.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.recognized_license_plates.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRecognizedLicensePlatesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRecognizedLicensePlatesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTimelineQueryKey(args: InferRequestType<typeof client.timeline.$get>) {
  return ['timeline', '/timeline', args] as const
}

export function getTimelineQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timeline.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.timeline.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timeline.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTimelineQueryKey>
  >({
    queryKey: getTimelineQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.timeline.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTimeline<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timeline.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.timeline.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timeline.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getTimelineQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTimelineQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTimelineHourlyQueryKey(
  args: InferRequestType<typeof client.timeline.hourly.$get>,
) {
  return ['timeline', '/timeline/hourly', args] as const
}

export function getTimelineHourlyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timeline.hourly.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.timeline.hourly.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timeline.hourly.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTimelineHourlyQueryKey>
  >({
    queryKey: getTimelineHourlyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.timeline.hourly.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTimelineHourly<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timeline.hourly.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.timeline.hourly.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.timeline.hourly.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTimelineHourlyQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTimelineHourlyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPreviewCameraNameStartStartTsEndEndTsQueryKey(
  args: InferRequestType<
    (typeof client.preview)[':camera_name']['start'][':start_ts']['end'][':end_ts']['$get']
  >,
) {
  return ['preview', '/preview/:camera_name/start/:start_ts/end/:end_ts', args] as const
}

export function getPreviewCameraNameStartStartTsEndEndTsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.preview)[':camera_name']['start'][':start_ts']['end'][':end_ts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.preview)[':camera_name']['start'][':start_ts']['end'][':end_ts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.preview)[':camera_name']['start'][':start_ts']['end'][':end_ts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPreviewCameraNameStartStartTsEndEndTsQueryKey>
  >({
    queryKey: getPreviewCameraNameStartStartTsEndEndTsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.preview[':camera_name'].start[':start_ts'].end[':end_ts'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPreviewCameraNameStartStartTsEndEndTs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.preview)[':camera_name']['start'][':start_ts']['end'][':end_ts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.preview)[':camera_name']['start'][':start_ts']['end'][':end_ts']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.preview)[':camera_name']['start'][':start_ts']['end'][':end_ts']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPreviewCameraNameStartStartTsEndEndTsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPreviewCameraNameStartStartTsEndEndTsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPreviewYearMonthDayHourCameraNameTzNameQueryKey(
  args: InferRequestType<
    (typeof client.preview)[':year_month'][':day'][':hour'][':camera_name'][':tz_name']['$get']
  >,
) {
  return ['preview', '/preview/:year_month/:day/:hour/:camera_name/:tz_name', args] as const
}

export function getPreviewYearMonthDayHourCameraNameTzNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.preview)[':year_month'][':day'][':hour'][':camera_name'][':tz_name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.preview)[':year_month'][':day'][':hour'][':camera_name'][':tz_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.preview)[':year_month'][':day'][':hour'][':camera_name'][':tz_name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPreviewYearMonthDayHourCameraNameTzNameQueryKey>
  >({
    queryKey: getPreviewYearMonthDayHourCameraNameTzNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.preview[':year_month'][':day'][':hour'][':camera_name'][':tz_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPreviewYearMonthDayHourCameraNameTzName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.preview)[':year_month'][':day'][':hour'][':camera_name'][':tz_name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.preview)[':year_month'][':day'][':hour'][':camera_name'][':tz_name']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.preview)[':year_month'][':day'][':hour'][':camera_name'][':tz_name']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPreviewYearMonthDayHourCameraNameTzNameQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPreviewYearMonthDayHourCameraNameTzNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPreviewCameraNameStartStartTsEndEndTsFramesQueryKey(
  args: InferRequestType<
    (typeof client.preview)[':camera_name']['start'][':start_ts']['end'][':end_ts']['frames']['$get']
  >,
) {
  return ['preview', '/preview/:camera_name/start/:start_ts/end/:end_ts/frames', args] as const
}

export function getPreviewCameraNameStartStartTsEndEndTsFramesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.preview)[':camera_name']['start'][':start_ts']['end'][':end_ts']['frames']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.preview)[':camera_name']['start'][':start_ts']['end'][':end_ts']['frames']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.preview)[':camera_name']['start'][':start_ts']['end'][':end_ts']['frames']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPreviewCameraNameStartStartTsEndEndTsFramesQueryKey>
  >({
    queryKey: getPreviewCameraNameStartStartTsEndEndTsFramesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.preview[':camera_name'].start[':start_ts'].end[':end_ts'].frames.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPreviewCameraNameStartStartTsEndEndTsFrames<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.preview)[':camera_name']['start'][':start_ts']['end'][':end_ts']['frames']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.preview)[':camera_name']['start'][':start_ts']['end'][':end_ts']['frames']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.preview)[':camera_name']['start'][':start_ts']['end'][':end_ts']['frames']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPreviewCameraNameStartStartTsEndEndTsFramesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPreviewCameraNameStartStartTsEndEndTsFramesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getNotificationsPubkeyQueryKey() {
  return ['notifications', '/notifications/pubkey'] as const
}

export function getNotificationsPubkeyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.pubkey.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.pubkey.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsPubkeyQueryKey>
  >({
    queryKey: getNotificationsPubkeyQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.notifications.pubkey.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNotificationsPubkey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.pubkey.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.notifications.pubkey.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNotificationsPubkeyQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNotificationsPubkeyQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostNotificationsRegisterMutationKey() {
  return ['notifications', '/notifications/register', 'POST'] as const
}

export function getPostNotificationsRegisterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.notifications.register.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.notifications.register.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNotificationsRegisterMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.notifications.register.$post>) {
      return parseResponse(client.notifications.register.$post(args, options))
    },
  })
}

export function createPostNotificationsRegister<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.notifications.register.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.notifications.register.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostNotificationsRegisterMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getExportsQueryKey(args: InferRequestType<typeof client.exports.$get>) {
  return ['exports', '/exports', args] as const
}

export function getExportsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.exports.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getExportsQueryKey>
  >({
    queryKey: getExportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.exports.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createExports<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.exports.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getExportsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getExportsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCasesQueryKey() {
  return ['cases', '/cases'] as const
}

export function getCasesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cases.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cases.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCasesQueryKey>
  >({
    queryKey: getCasesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.cases.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCases<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cases.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cases.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getCasesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCasesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostCasesMutationKey() {
  return ['cases', '/cases', 'POST'] as const
}

export function getPostCasesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cases.$post>>>>>,
    TError,
    InferRequestType<typeof client.cases.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCasesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.cases.$post>) {
      return parseResponse(client.cases.$post(args, options))
    },
  })
}

export function createPostCases<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cases.$post>>>>>,
          TError,
          InferRequestType<typeof client.cases.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCasesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCasesCaseIdQueryKey(
  args: InferRequestType<(typeof client.cases)[':case_id']['$get']>,
) {
  return ['cases', '/cases/:case_id', args] as const
}

export function getCasesCaseIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.cases)[':case_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cases)[':case_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.cases)[':case_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCasesCaseIdQueryKey>
  >({
    queryKey: getCasesCaseIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cases[':case_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCasesCaseId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.cases)[':case_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.cases)[':case_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.cases)[':case_id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCasesCaseIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCasesCaseIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteCasesCaseIdMutationKey() {
  return ['cases', '/cases/:case_id', 'DELETE'] as const
}

export function getDeleteCasesCaseIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.cases)[':case_id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.cases)[':case_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCasesCaseIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.cases)[':case_id']['$delete']>) {
      return parseResponse(client.cases[':case_id'].$delete(args, options))
    },
  })
}

export function createDeleteCasesCaseId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cases)[':case_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.cases)[':case_id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCasesCaseIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchCasesCaseIdMutationKey() {
  return ['cases', '/cases/:case_id', 'PATCH'] as const
}

export function getPatchCasesCaseIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.cases)[':case_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.cases)[':case_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCasesCaseIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.cases)[':case_id']['$patch']>) {
      return parseResponse(client.cases[':case_id'].$patch(args, options))
    },
  })
}

export function createPatchCasesCaseId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.cases)[':case_id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.cases)[':case_id']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchCasesCaseIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCasesCaseIdDownloadQueryKey(
  args: InferRequestType<(typeof client.cases)[':case_id']['download']['$get']>,
) {
  return ['cases', '/cases/:case_id/download', args] as const
}

export function getCasesCaseIdDownloadQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cases)[':case_id']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cases)[':case_id']['download']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cases)[':case_id']['download']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCasesCaseIdDownloadQueryKey>
  >({
    queryKey: getCasesCaseIdDownloadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cases[':case_id'].download.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCasesCaseIdDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cases)[':case_id']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.cases)[':case_id']['download']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cases)[':case_id']['download']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCasesCaseIdDownloadQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCasesCaseIdDownloadQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getJobsExportQueryKey() {
  return ['jobs', '/jobs/export'] as const
}

export function getJobsExportQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.export.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.export.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getJobsExportQueryKey>
  >({
    queryKey: getJobsExportQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.jobs.export.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createJobsExport<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.export.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.export.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getJobsExportQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getJobsExportQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getJobsExportExportIdQueryKey(
  args: InferRequestType<(typeof client.jobs.export)[':export_id']['$get']>,
) {
  return ['jobs', '/jobs/export/:export_id', args] as const
}

export function getJobsExportExportIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.jobs.export)[':export_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.jobs.export)[':export_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.jobs.export)[':export_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJobsExportExportIdQueryKey>
  >({
    queryKey: getJobsExportExportIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.jobs.export[':export_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createJobsExportExportId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.jobs.export)[':export_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.jobs.export)[':export_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.jobs.export)[':export_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getJobsExportExportIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getJobsExportExportIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostExportsBatchMutationKey() {
  return ['exports', '/exports/batch', 'POST'] as const
}

export function getPostExportsBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.batch.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.exports.batch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostExportsBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.exports.batch.$post>) {
      return parseResponse(client.exports.batch.$post(args, options))
    },
  })
}

export function createPostExportsBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.batch.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.exports.batch.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostExportsBatchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostExportCameraNameStartStartTimeEndEndTimeMutationKey() {
  return ['export', '/export/:camera_name/start/:start_time/end/:end_time', 'POST'] as const
}

export function getPostExportCameraNameStartStartTimeEndEndTimeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.export)[':camera_name']['start'][':start_time']['end'][':end_time']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.export)[':camera_name']['start'][':start_time']['end'][':end_time']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostExportCameraNameStartStartTimeEndEndTimeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.export)[':camera_name']['start'][':start_time']['end'][':end_time']['$post']
      >,
    ) {
      return parseResponse(
        client.export[':camera_name'].start[':start_time'].end[':end_time'].$post(args, options),
      )
    },
  })
}

export function createPostExportCameraNameStartStartTimeEndEndTime<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.export)[':camera_name']['start'][':start_time']['end'][':end_time']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.export)[':camera_name']['start'][':start_time']['end'][':end_time']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostExportCameraNameStartStartTimeEndEndTimeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchExportEventIdRenameMutationKey() {
  return ['export', '/export/:event_id/rename', 'PATCH'] as const
}

export function getPatchExportEventIdRenameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.export)[':event_id']['rename']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.export)[':event_id']['rename']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchExportEventIdRenameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.export)[':event_id']['rename']['$patch']>,
    ) {
      return parseResponse(client.export[':event_id'].rename.$patch(args, options))
    },
  })
}

export function createPatchExportEventIdRename<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.export)[':event_id']['rename']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.export)[':event_id']['rename']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchExportEventIdRenameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostExportCustomCameraNameStartStartTimeEndEndTimeMutationKey() {
  return ['export', '/export/custom/:camera_name/start/:start_time/end/:end_time', 'POST'] as const
}

export function getPostExportCustomCameraNameStartStartTimeEndEndTimeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.export.custom)[':camera_name']['start'][':start_time']['end'][':end_time']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.export.custom)[':camera_name']['start'][':start_time']['end'][':end_time']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostExportCustomCameraNameStartStartTimeEndEndTimeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.export.custom)[':camera_name']['start'][':start_time']['end'][':end_time']['$post']
      >,
    ) {
      return parseResponse(
        client.export.custom[':camera_name'].start[':start_time'].end[':end_time'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostExportCustomCameraNameStartStartTimeEndEndTime<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.export.custom)[':camera_name']['start'][':start_time']['end'][':end_time']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.export.custom)[':camera_name']['start'][':start_time']['end'][':end_time']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostExportCustomCameraNameStartStartTimeEndEndTimeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getExportsExportIdQueryKey(
  args: InferRequestType<(typeof client.exports)[':export_id']['$get']>,
) {
  return ['exports', '/exports/:export_id', args] as const
}

export function getExportsExportIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.exports)[':export_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.exports)[':export_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.exports)[':export_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExportsExportIdQueryKey>
  >({
    queryKey: getExportsExportIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.exports[':export_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createExportsExportId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.exports)[':export_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.exports)[':export_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.exports)[':export_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getExportsExportIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getExportsExportIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostExportsDeleteMutationKey() {
  return ['exports', '/exports/delete', 'POST'] as const
}

export function getPostExportsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.delete.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.exports.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostExportsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.exports.delete.$post>) {
      return parseResponse(client.exports.delete.$post(args, options))
    },
  })
}

export function createPostExportsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.exports.delete.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.exports.delete.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostExportsDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostExportsReassignMutationKey() {
  return ['exports', '/exports/reassign', 'POST'] as const
}

export function getPostExportsReassignMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.reassign.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.exports.reassign.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostExportsReassignMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.exports.reassign.$post>) {
      return parseResponse(client.exports.reassign.$post(args, options))
    },
  })
}

export function createPostExportsReassign<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.exports.reassign.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.exports.reassign.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostExportsReassignMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getHardwareProbeQueryKey(
  args: InferRequestType<typeof client.hardware.probe.$get>,
) {
  return ['hardware', '/hardware/probe', args] as const
}

export function getHardwareProbeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.probe.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.hardware.probe.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.probe.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getHardwareProbeQueryKey>
  >({
    queryKey: getHardwareProbeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.hardware.probe.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createHardwareProbe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.probe.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.hardware.probe.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.probe.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getHardwareProbeQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHardwareProbeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getHardwareHwaccelQueryKey(
  args: InferRequestType<typeof client.hardware.hwaccel.$get>,
) {
  return ['hardware', '/hardware/hwaccel', args] as const
}

export function getHardwareHwaccelQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.hwaccel.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.hardware.hwaccel.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.hwaccel.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getHardwareHwaccelQueryKey>
  >({
    queryKey: getHardwareHwaccelQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.hardware.hwaccel.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createHardwareHwaccel<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.hwaccel.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.hardware.hwaccel.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.hardware.hwaccel.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getHardwareHwaccelQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHardwareHwaccelQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getNoticesQueryKey(args: InferRequestType<typeof client.notices.$get>) {
  return ['notices', '/notices', args] as const
}

export function getNoticesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notices.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.notices.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notices.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNoticesQueryKey>
  >({
    queryKey: getNoticesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notices.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createNotices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.notices.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notices.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getNoticesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNoticesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getNoticesStatsQueryKey() {
  return ['notices', '/notices/stats'] as const
}

export function getNoticesStatsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notices.stats.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notices.stats.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNoticesStatsQueryKey>
  >({
    queryKey: getNoticesStatsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.notices.stats.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createNoticesStats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notices.stats.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notices.stats.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getNoticesStatsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNoticesStatsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getNoticesMutedChecksQueryKey() {
  return ['notices', '/notices/muted_checks'] as const
}

export function getNoticesMutedChecksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notices.muted_checks.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notices.muted_checks.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNoticesMutedChecksQueryKey>
  >({
    queryKey: getNoticesMutedChecksQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.notices.muted_checks.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNoticesMutedChecks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notices.muted_checks.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.notices.muted_checks.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNoticesMutedChecksQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNoticesMutedChecksQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getDeleteNoticesHiddenMutationKey() {
  return ['notices', '/notices/hidden', 'DELETE'] as const
}

export function getDeleteNoticesHiddenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notices.hidden.$delete>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteNoticesHiddenMutationKey(),
    async mutationFn() {
      return parseResponse(client.notices.hidden.$delete(undefined, options))
    },
  })
}

export function createDeleteNoticesHidden<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.notices.hidden.$delete>>>
            >
          >,
          TError,
          void,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteNoticesHiddenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostNoticesNoticeIdAcknowledgeMutationKey() {
  return ['notices', '/notices/:notice_id/acknowledge', 'POST'] as const
}

export function getPostNoticesNoticeIdAcknowledgeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notices)[':notice_id']['acknowledge']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.notices)[':notice_id']['acknowledge']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNoticesNoticeIdAcknowledgeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.notices)[':notice_id']['acknowledge']['$post']>,
    ) {
      return parseResponse(client.notices[':notice_id'].acknowledge.$post(args, options))
    },
  })
}

export function createPostNoticesNoticeIdAcknowledge<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.notices)[':notice_id']['acknowledge']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.notices)[':notice_id']['acknowledge']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostNoticesNoticeIdAcknowledgeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostNoticesNoticeIdMuteMutationKey() {
  return ['notices', '/notices/:notice_id/mute', 'POST'] as const
}

export function getPostNoticesNoticeIdMuteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notices)[':notice_id']['mute']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.notices)[':notice_id']['mute']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNoticesNoticeIdMuteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.notices)[':notice_id']['mute']['$post']>,
    ) {
      return parseResponse(client.notices[':notice_id'].mute.$post(args, options))
    },
  })
}

export function createPostNoticesNoticeIdMute<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.notices)[':notice_id']['mute']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.notices)[':notice_id']['mute']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostNoticesNoticeIdMuteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteNoticesNoticeIdHiddenMutationKey() {
  return ['notices', '/notices/:notice_id/hidden', 'DELETE'] as const
}

export function getDeleteNoticesNoticeIdHiddenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notices)[':notice_id']['hidden']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.notices)[':notice_id']['hidden']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteNoticesNoticeIdHiddenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.notices)[':notice_id']['hidden']['$delete']>,
    ) {
      return parseResponse(client.notices[':notice_id'].hidden.$delete(args, options))
    },
  })
}

export function createDeleteNoticesNoticeIdHidden<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.notices)[':notice_id']['hidden']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.notices)[':notice_id']['hidden']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteNoticesNoticeIdHiddenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getEventsQueryKey(args: InferRequestType<typeof client.events.$get>) {
  return ['events', '/events', args] as const
}

export function getEventsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.events.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEventsQueryKey>
  >({
    queryKey: getEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.events.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEvents<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.events.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getEventsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEventsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getEventsExploreQueryKey(
  args: InferRequestType<typeof client.events.explore.$get>,
) {
  return ['events', '/events/explore', args] as const
}

export function getEventsExploreQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.explore.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.events.explore.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.explore.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEventsExploreQueryKey>
  >({
    queryKey: getEventsExploreQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.events.explore.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEventsExplore<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.explore.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.events.explore.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.explore.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getEventsExploreQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEventsExploreQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getEventIdsQueryKey(args: InferRequestType<typeof client.event_ids.$get>) {
  return ['event_ids', '/event_ids', args] as const
}

export function getEventIdsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event_ids.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.event_ids.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event_ids.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEventIdsQueryKey>
  >({
    queryKey: getEventIdsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.event_ids.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEventIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event_ids.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.event_ids.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event_ids.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getEventIdsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEventIdsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getEventsSearchQueryKey(args: InferRequestType<typeof client.events.search.$get>) {
  return ['events', '/events/search', args] as const
}

export function getEventsSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.events.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEventsSearchQueryKey>
  >({
    queryKey: getEventsSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.events.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEventsSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.events.search.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.search.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getEventsSearchQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEventsSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getEventsSummaryQueryKey(
  args: InferRequestType<typeof client.events.summary.$get>,
) {
  return ['events', '/events/summary', args] as const
}

export function getEventsSummaryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.summary.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.events.summary.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.summary.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEventsSummaryQueryKey>
  >({
    queryKey: getEventsSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.events.summary.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEventsSummary<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.summary.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.events.summary.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.summary.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getEventsSummaryQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEventsSummaryQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getEventsEventIdQueryKey(
  args: InferRequestType<(typeof client.events)[':event_id']['$get']>,
) {
  return ['events', '/events/:event_id', args] as const
}

export function getEventsEventIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':event_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.events)[':event_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':event_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventsEventIdQueryKey>
  >({
    queryKey: getEventsEventIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.events[':event_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEventsEventId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':event_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.events)[':event_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':event_id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEventsEventIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEventsEventIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteEventsEventIdMutationKey() {
  return ['events', '/events/:event_id', 'DELETE'] as const
}

export function getDeleteEventsEventIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':event_id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.events)[':event_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteEventsEventIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.events)[':event_id']['$delete']>) {
      return parseResponse(client.events[':event_id'].$delete(args, options))
    },
  })
}

export function createDeleteEventsEventId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.events)[':event_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.events)[':event_id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteEventsEventIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostEventsEventIdRetainMutationKey() {
  return ['events', '/events/:event_id/retain', 'POST'] as const
}

export function getPostEventsEventIdRetainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.events)[':event_id']['retain']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.events)[':event_id']['retain']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEventsEventIdRetainMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.events)[':event_id']['retain']['$post']>,
    ) {
      return parseResponse(client.events[':event_id'].retain.$post(args, options))
    },
  })
}

export function createPostEventsEventIdRetain<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.events)[':event_id']['retain']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.events)[':event_id']['retain']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEventsEventIdRetainMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteEventsEventIdRetainMutationKey() {
  return ['events', '/events/:event_id/retain', 'DELETE'] as const
}

export function getDeleteEventsEventIdRetainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.events)[':event_id']['retain']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.events)[':event_id']['retain']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteEventsEventIdRetainMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.events)[':event_id']['retain']['$delete']>,
    ) {
      return parseResponse(client.events[':event_id'].retain.$delete(args, options))
    },
  })
}

export function createDeleteEventsEventIdRetain<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.events)[':event_id']['retain']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.events)[':event_id']['retain']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteEventsEventIdRetainMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostEventsEventIdPlusMutationKey() {
  return ['events', '/events/:event_id/plus', 'POST'] as const
}

export function getPostEventsEventIdPlusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.events)[':event_id']['plus']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.events)[':event_id']['plus']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEventsEventIdPlusMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.events)[':event_id']['plus']['$post']>) {
      return parseResponse(client.events[':event_id'].plus.$post(args, options))
    },
  })
}

export function createPostEventsEventIdPlus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.events)[':event_id']['plus']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.events)[':event_id']['plus']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEventsEventIdPlusMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutEventsEventIdFalsePositiveMutationKey() {
  return ['events', '/events/:event_id/false_positive', 'PUT'] as const
}

export function getPutEventsEventIdFalsePositiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.events)[':event_id']['false_positive']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.events)[':event_id']['false_positive']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutEventsEventIdFalsePositiveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.events)[':event_id']['false_positive']['$put']>,
    ) {
      return parseResponse(client.events[':event_id'].false_positive.$put(args, options))
    },
  })
}

export function createPutEventsEventIdFalsePositive<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.events)[':event_id']['false_positive']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.events)[':event_id']['false_positive']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutEventsEventIdFalsePositiveMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostEventsEventIdSubLabelMutationKey() {
  return ['events', '/events/:event_id/sub_label', 'POST'] as const
}

export function getPostEventsEventIdSubLabelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.events)[':event_id']['sub_label']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.events)[':event_id']['sub_label']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEventsEventIdSubLabelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.events)[':event_id']['sub_label']['$post']>,
    ) {
      return parseResponse(client.events[':event_id'].sub_label.$post(args, options))
    },
  })
}

export function createPostEventsEventIdSubLabel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.events)[':event_id']['sub_label']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.events)[':event_id']['sub_label']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEventsEventIdSubLabelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostEventsEventIdRecognizedLicensePlateMutationKey() {
  return ['events', '/events/:event_id/recognized_license_plate', 'POST'] as const
}

export function getPostEventsEventIdRecognizedLicensePlateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.events)[':event_id']['recognized_license_plate']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.events)[':event_id']['recognized_license_plate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEventsEventIdRecognizedLicensePlateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.events)[':event_id']['recognized_license_plate']['$post']
      >,
    ) {
      return parseResponse(client.events[':event_id'].recognized_license_plate.$post(args, options))
    },
  })
}

export function createPostEventsEventIdRecognizedLicensePlate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.events)[':event_id']['recognized_license_plate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.events)[':event_id']['recognized_license_plate']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEventsEventIdRecognizedLicensePlateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostEventsEventIdAttributesMutationKey() {
  return ['events', '/events/:event_id/attributes', 'POST'] as const
}

export function getPostEventsEventIdAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.events)[':event_id']['attributes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.events)[':event_id']['attributes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEventsEventIdAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.events)[':event_id']['attributes']['$post']>,
    ) {
      return parseResponse(client.events[':event_id'].attributes.$post(args, options))
    },
  })
}

export function createPostEventsEventIdAttributes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.events)[':event_id']['attributes']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.events)[':event_id']['attributes']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEventsEventIdAttributesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostEventsEventIdDescriptionMutationKey() {
  return ['events', '/events/:event_id/description', 'POST'] as const
}

export function getPostEventsEventIdDescriptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.events)[':event_id']['description']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.events)[':event_id']['description']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEventsEventIdDescriptionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.events)[':event_id']['description']['$post']>,
    ) {
      return parseResponse(client.events[':event_id'].description.$post(args, options))
    },
  })
}

export function createPostEventsEventIdDescription<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.events)[':event_id']['description']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.events)[':event_id']['description']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEventsEventIdDescriptionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutEventsEventIdDescriptionRegenerateMutationKey() {
  return ['events', '/events/:event_id/description/regenerate', 'PUT'] as const
}

export function getPutEventsEventIdDescriptionRegenerateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.events)[':event_id']['description']['regenerate']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.events)[':event_id']['description']['regenerate']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutEventsEventIdDescriptionRegenerateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.events)[':event_id']['description']['regenerate']['$put']
      >,
    ) {
      return parseResponse(client.events[':event_id'].description.regenerate.$put(args, options))
    },
  })
}

export function createPutEventsEventIdDescriptionRegenerate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.events)[':event_id']['description']['regenerate']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.events)[':event_id']['description']['regenerate']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutEventsEventIdDescriptionRegenerateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostDescriptionGenerateMutationKey() {
  return ['description', '/description/generate', 'POST'] as const
}

export function getPostDescriptionGenerateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.description.generate.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.description.generate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDescriptionGenerateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.description.generate.$post>) {
      return parseResponse(client.description.generate.$post(args, options))
    },
  })
}

export function createPostDescriptionGenerate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.description.generate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.description.generate.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDescriptionGenerateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteEventsIndexMutationKey() {
  return ['events', '/events/', 'DELETE'] as const
}

export function getDeleteEventsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.index.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.events.index.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteEventsIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.events.index.$delete>) {
      return parseResponse(client.events.index.$delete(args, options))
    },
  })
}

export function createDeleteEventsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.events.index.$delete>>>
            >
          >,
          TError,
          InferRequestType<typeof client.events.index.$delete>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteEventsIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostEventsCameraNameLabelCreateMutationKey() {
  return ['events', '/events/:camera_name/:label/create', 'POST'] as const
}

export function getPostEventsCameraNameLabelCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.events)[':camera_name'][':label']['create']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.events)[':camera_name'][':label']['create']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEventsCameraNameLabelCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.events)[':camera_name'][':label']['create']['$post']>,
    ) {
      return parseResponse(client.events[':camera_name'][':label'].create.$post(args, options))
    },
  })
}

export function createPostEventsCameraNameLabelCreate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.events)[':camera_name'][':label']['create']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.events)[':camera_name'][':label']['create']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEventsCameraNameLabelCreateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutEventsEventIdEndMutationKey() {
  return ['events', '/events/:event_id/end', 'PUT'] as const
}

export function getPutEventsEventIdEndMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.events)[':event_id']['end']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.events)[':event_id']['end']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutEventsEventIdEndMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.events)[':event_id']['end']['$put']>) {
      return parseResponse(client.events[':event_id'].end.$put(args, options))
    },
  })
}

export function createPutEventsEventIdEnd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.events)[':event_id']['end']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.events)[':event_id']['end']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutEventsEventIdEndMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostTriggerEmbeddingMutationKey() {
  return ['trigger', '/trigger/embedding', 'POST'] as const
}

export function getPostTriggerEmbeddingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trigger.embedding.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.trigger.embedding.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTriggerEmbeddingMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.trigger.embedding.$post>) {
      return parseResponse(client.trigger.embedding.$post(args, options))
    },
  })
}

export function createPostTriggerEmbedding<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.trigger.embedding.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.trigger.embedding.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTriggerEmbeddingMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutTriggerEmbeddingCameraNameNameMutationKey() {
  return ['trigger', '/trigger/embedding/:camera_name/:name', 'PUT'] as const
}

export function getPutTriggerEmbeddingCameraNameNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.trigger.embedding)[':camera_name'][':name']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.trigger.embedding)[':camera_name'][':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTriggerEmbeddingCameraNameNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.trigger.embedding)[':camera_name'][':name']['$put']>,
    ) {
      return parseResponse(client.trigger.embedding[':camera_name'][':name'].$put(args, options))
    },
  })
}

export function createPutTriggerEmbeddingCameraNameName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.trigger.embedding)[':camera_name'][':name']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.trigger.embedding)[':camera_name'][':name']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutTriggerEmbeddingCameraNameNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteTriggerEmbeddingCameraNameNameMutationKey() {
  return ['trigger', '/trigger/embedding/:camera_name/:name', 'DELETE'] as const
}

export function getDeleteTriggerEmbeddingCameraNameNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.trigger.embedding)[':camera_name'][':name']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.trigger.embedding)[':camera_name'][':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTriggerEmbeddingCameraNameNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.trigger.embedding)[':camera_name'][':name']['$delete']>,
    ) {
      return parseResponse(client.trigger.embedding[':camera_name'][':name'].$delete(args, options))
    },
  })
}

export function createDeleteTriggerEmbeddingCameraNameName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.trigger.embedding)[':camera_name'][':name']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.trigger.embedding)[':camera_name'][':name']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTriggerEmbeddingCameraNameNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTriggersStatusCameraNameQueryKey(
  args: InferRequestType<(typeof client.triggers.status)[':camera_name']['$get']>,
) {
  return ['triggers', '/triggers/status/:camera_name', args] as const
}

export function getTriggersStatusCameraNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.triggers.status)[':camera_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.triggers.status)[':camera_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.triggers.status)[':camera_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTriggersStatusCameraNameQueryKey>
  >({
    queryKey: getTriggersStatusCameraNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.triggers.status[':camera_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTriggersStatusCameraName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.triggers.status)[':camera_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.triggers.status)[':camera_name']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.triggers.status)[':camera_name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTriggersStatusCameraNameQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTriggersStatusCameraNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCameraNameQueryKey(
  args: InferRequestType<(typeof client)[':camera_name']['$get']>,
) {
  return [':camera_name', '/:camera_name', args] as const
}

export function getCameraNameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':camera_name']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)[':camera_name']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':camera_name']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCameraNameQueryKey>
  >({
    queryKey: getCameraNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':camera_name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCameraName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':camera_name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':camera_name']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':camera_name']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCameraNameQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCameraNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCameraNamePtzInfoQueryKey(
  args: InferRequestType<(typeof client)[':camera_name']['ptz']['info']['$get']>,
) {
  return [':camera_name', '/:camera_name/ptz/info', args] as const
}

export function getCameraNamePtzInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':camera_name']['ptz']['info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':camera_name']['ptz']['info']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':camera_name']['ptz']['info']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCameraNamePtzInfoQueryKey>
  >({
    queryKey: getCameraNamePtzInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':camera_name'].ptz.info.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCameraNamePtzInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':camera_name']['ptz']['info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':camera_name']['ptz']['info']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':camera_name']['ptz']['info']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCameraNamePtzInfoQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCameraNamePtzInfoQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCameraNameLatestExtensionQueryKey(
  args: InferRequestType<(typeof client)[':camera_name']['latest.:extension']['$get']>,
) {
  return [':camera_name', '/:camera_name/latest.:extension', args] as const
}

export function getCameraNameLatestExtensionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':camera_name']['latest.:extension']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':camera_name']['latest.:extension']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':camera_name']['latest.:extension']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCameraNameLatestExtensionQueryKey>
  >({
    queryKey: getCameraNameLatestExtensionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':camera_name']['latest.:extension'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCameraNameLatestExtension<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':camera_name']['latest.:extension']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':camera_name']['latest.:extension']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':camera_name']['latest.:extension']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCameraNameLatestExtensionQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCameraNameLatestExtensionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCameraNameRecordingsFrameTimeSnapshotFormatQueryKey(
  args: InferRequestType<
    (typeof client)[':camera_name']['recordings'][':frame_time']['snapshot.:format']['$get']
  >,
) {
  return [':camera_name', '/:camera_name/recordings/:frame_time/snapshot.:format', args] as const
}

export function getCameraNameRecordingsFrameTimeSnapshotFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':camera_name']['recordings'][':frame_time']['snapshot.:format']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':camera_name']['recordings'][':frame_time']['snapshot.:format']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':camera_name']['recordings'][':frame_time']['snapshot.:format']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCameraNameRecordingsFrameTimeSnapshotFormatQueryKey>
  >({
    queryKey: getCameraNameRecordingsFrameTimeSnapshotFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':camera_name'].recordings[':frame_time']['snapshot.:format'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCameraNameRecordingsFrameTimeSnapshotFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':camera_name']['recordings'][':frame_time']['snapshot.:format']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':camera_name']['recordings'][':frame_time']['snapshot.:format']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)[':camera_name']['recordings'][':frame_time']['snapshot.:format']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCameraNameRecordingsFrameTimeSnapshotFormatQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCameraNameRecordingsFrameTimeSnapshotFormatQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostCameraNamePlusFrameTimeMutationKey() {
  return [':camera_name', '/:camera_name/plus/:frame_time', 'POST'] as const
}

export function getPostCameraNamePlusFrameTimeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':camera_name']['plus'][':frame_time']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':camera_name']['plus'][':frame_time']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCameraNamePlusFrameTimeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':camera_name']['plus'][':frame_time']['$post']>,
    ) {
      return parseResponse(client[':camera_name'].plus[':frame_time'].$post(args, options))
    },
  })
}

export function createPostCameraNamePlusFrameTime<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':camera_name']['plus'][':frame_time']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':camera_name']['plus'][':frame_time']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCameraNamePlusFrameTimeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCameraNameStartStartTsEndEndTsClipMp4QueryKey(
  args: InferRequestType<
    (typeof client)[':camera_name']['start'][':start_ts']['end'][':end_ts']['clip.mp4']['$get']
  >,
) {
  return [':camera_name', '/:camera_name/start/:start_ts/end/:end_ts/clip.mp4', args] as const
}

export function getCameraNameStartStartTsEndEndTsClipMp4QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':camera_name']['start'][':start_ts']['end'][':end_ts']['clip.mp4']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':camera_name']['start'][':start_ts']['end'][':end_ts']['clip.mp4']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':camera_name']['start'][':start_ts']['end'][':end_ts']['clip.mp4']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCameraNameStartStartTsEndEndTsClipMp4QueryKey>
  >({
    queryKey: getCameraNameStartStartTsEndEndTsClipMp4QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':camera_name'].start[':start_ts'].end[':end_ts']['clip.mp4'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCameraNameStartStartTsEndEndTsClipMp4<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':camera_name']['start'][':start_ts']['end'][':end_ts']['clip.mp4']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':camera_name']['start'][':start_ts']['end'][':end_ts']['clip.mp4']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)[':camera_name']['start'][':start_ts']['end'][':end_ts']['clip.mp4']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCameraNameStartStartTsEndEndTsClipMp4QueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCameraNameStartStartTsEndEndTsClipMp4QueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getVodCameraNameStartStartTsEndEndTsQueryKey(
  args: InferRequestType<
    (typeof client.vod)[':camera_name']['start'][':start_ts']['end'][':end_ts']['$get']
  >,
) {
  return ['vod', '/vod/:camera_name/start/:start_ts/end/:end_ts', args] as const
}

export function getVodCameraNameStartStartTsEndEndTsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.vod)[':camera_name']['start'][':start_ts']['end'][':end_ts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.vod)[':camera_name']['start'][':start_ts']['end'][':end_ts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.vod)[':camera_name']['start'][':start_ts']['end'][':end_ts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVodCameraNameStartStartTsEndEndTsQueryKey>
  >({
    queryKey: getVodCameraNameStartStartTsEndEndTsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vod[':camera_name'].start[':start_ts'].end[':end_ts'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createVodCameraNameStartStartTsEndEndTs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.vod)[':camera_name']['start'][':start_ts']['end'][':end_ts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.vod)[':camera_name']['start'][':start_ts']['end'][':end_ts']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.vod)[':camera_name']['start'][':start_ts']['end'][':end_ts']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getVodCameraNameStartStartTsEndEndTsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVodCameraNameStartStartTsEndEndTsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getVodYearMonthDayHourCameraNameQueryKey(
  args: InferRequestType<
    (typeof client.vod)[':year_month'][':day'][':hour'][':camera_name']['$get']
  >,
) {
  return ['vod', '/vod/:year_month/:day/:hour/:camera_name', args] as const
}

export function getVodYearMonthDayHourCameraNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.vod)[':year_month'][':day'][':hour'][':camera_name']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.vod)[':year_month'][':day'][':hour'][':camera_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.vod)[':year_month'][':day'][':hour'][':camera_name']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVodYearMonthDayHourCameraNameQueryKey>
  >({
    queryKey: getVodYearMonthDayHourCameraNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vod[':year_month'][':day'][':hour'][':camera_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createVodYearMonthDayHourCameraName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.vod)[':year_month'][':day'][':hour'][':camera_name']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.vod)[':year_month'][':day'][':hour'][':camera_name']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.vod)[':year_month'][':day'][':hour'][':camera_name']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getVodYearMonthDayHourCameraNameQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVodYearMonthDayHourCameraNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getVodYearMonthDayHourCameraNameTzNameQueryKey(
  args: InferRequestType<
    (typeof client.vod)[':year_month'][':day'][':hour'][':camera_name'][':tz_name']['$get']
  >,
) {
  return ['vod', '/vod/:year_month/:day/:hour/:camera_name/:tz_name', args] as const
}

export function getVodYearMonthDayHourCameraNameTzNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.vod)[':year_month'][':day'][':hour'][':camera_name'][':tz_name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.vod)[':year_month'][':day'][':hour'][':camera_name'][':tz_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.vod)[':year_month'][':day'][':hour'][':camera_name'][':tz_name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVodYearMonthDayHourCameraNameTzNameQueryKey>
  >({
    queryKey: getVodYearMonthDayHourCameraNameTzNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vod[':year_month'][':day'][':hour'][':camera_name'][':tz_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createVodYearMonthDayHourCameraNameTzName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.vod)[':year_month'][':day'][':hour'][':camera_name'][':tz_name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.vod)[':year_month'][':day'][':hour'][':camera_name'][':tz_name']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.vod)[':year_month'][':day'][':hour'][':camera_name'][':tz_name']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getVodYearMonthDayHourCameraNameTzNameQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVodYearMonthDayHourCameraNameTzNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getVodEventEventIdQueryKey(
  args: InferRequestType<(typeof client.vod.event)[':event_id']['$get']>,
) {
  return ['vod', '/vod/event/:event_id', args] as const
}

export function getVodEventEventIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.vod.event)[':event_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.vod.event)[':event_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.vod.event)[':event_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVodEventEventIdQueryKey>
  >({
    queryKey: getVodEventEventIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vod.event[':event_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createVodEventEventId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.vod.event)[':event_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.vod.event)[':event_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.vod.event)[':event_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getVodEventEventIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVodEventEventIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getVodClipCameraNameStartStartTsEndEndTsQueryKey(
  args: InferRequestType<
    (typeof client.vod.clip)[':camera_name']['start'][':start_ts']['end'][':end_ts']['$get']
  >,
) {
  return ['vod', '/vod/clip/:camera_name/start/:start_ts/end/:end_ts', args] as const
}

export function getVodClipCameraNameStartStartTsEndEndTsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.vod.clip)[':camera_name']['start'][':start_ts']['end'][':end_ts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.vod.clip)[':camera_name']['start'][':start_ts']['end'][':end_ts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.vod.clip)[':camera_name']['start'][':start_ts']['end'][':end_ts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVodClipCameraNameStartStartTsEndEndTsQueryKey>
  >({
    queryKey: getVodClipCameraNameStartStartTsEndEndTsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vod.clip[':camera_name'].start[':start_ts'].end[':end_ts'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createVodClipCameraNameStartStartTsEndEndTs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.vod.clip)[':camera_name']['start'][':start_ts']['end'][':end_ts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.vod.clip)[':camera_name']['start'][':start_ts']['end'][':end_ts']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.vod.clip)[':camera_name']['start'][':start_ts']['end'][':end_ts']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getVodClipCameraNameStartStartTsEndEndTsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVodClipCameraNameStartStartTsEndEndTsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getVodCameraNameStreamStartStartTsEndEndTsQueryKey(
  args: InferRequestType<
    (typeof client.vod)[':camera_name'][':stream']['start'][':start_ts']['end'][':end_ts']['$get']
  >,
) {
  return ['vod', '/vod/:camera_name/:stream/start/:start_ts/end/:end_ts', args] as const
}

export function getVodCameraNameStreamStartStartTsEndEndTsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.vod)[':camera_name'][':stream']['start'][':start_ts']['end'][':end_ts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.vod)[':camera_name'][':stream']['start'][':start_ts']['end'][':end_ts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.vod)[':camera_name'][':stream']['start'][':start_ts']['end'][':end_ts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVodCameraNameStreamStartStartTsEndEndTsQueryKey>
  >({
    queryKey: getVodCameraNameStreamStartStartTsEndEndTsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vod[':camera_name'][':stream'].start[':start_ts'].end[':end_ts'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createVodCameraNameStreamStartStartTsEndEndTs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.vod)[':camera_name'][':stream']['start'][':start_ts']['end'][':end_ts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.vod)[':camera_name'][':stream']['start'][':start_ts']['end'][':end_ts']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.vod)[':camera_name'][':stream']['start'][':start_ts']['end'][':end_ts']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getVodCameraNameStreamStartStartTsEndEndTsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVodCameraNameStreamStartStartTsEndEndTsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getEventsEventIdSnapshotJpgQueryKey(
  args: InferRequestType<(typeof client.events)[':event_id']['snapshot.jpg']['$get']>,
) {
  return ['events', '/events/:event_id/snapshot.jpg', args] as const
}

export function getEventsEventIdSnapshotJpgQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.events)[':event_id']['snapshot.jpg']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.events)[':event_id']['snapshot.jpg']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.events)[':event_id']['snapshot.jpg']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventsEventIdSnapshotJpgQueryKey>
  >({
    queryKey: getEventsEventIdSnapshotJpgQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.events[':event_id']['snapshot.jpg'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEventsEventIdSnapshotJpg<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.events)[':event_id']['snapshot.jpg']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.events)[':event_id']['snapshot.jpg']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.events)[':event_id']['snapshot.jpg']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEventsEventIdSnapshotJpgQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEventsEventIdSnapshotJpgQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getEventsEventIdThumbnailExtensionQueryKey(
  args: InferRequestType<(typeof client.events)[':event_id']['thumbnail.:extension']['$get']>,
) {
  return ['events', '/events/:event_id/thumbnail.:extension', args] as const
}

export function getEventsEventIdThumbnailExtensionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.events)[':event_id']['thumbnail.:extension']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.events)[':event_id']['thumbnail.:extension']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.events)[':event_id']['thumbnail.:extension']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventsEventIdThumbnailExtensionQueryKey>
  >({
    queryKey: getEventsEventIdThumbnailExtensionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.events[':event_id']['thumbnail.:extension'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEventsEventIdThumbnailExtension<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.events)[':event_id']['thumbnail.:extension']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.events)[':event_id']['thumbnail.:extension']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.events)[':event_id']['thumbnail.:extension']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEventsEventIdThumbnailExtensionQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEventsEventIdThumbnailExtensionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCameraNameGridJpgQueryKey(
  args: InferRequestType<(typeof client)[':camera_name']['grid.jpg']['$get']>,
) {
  return [':camera_name', '/:camera_name/grid.jpg', args] as const
}

export function getCameraNameGridJpgQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':camera_name']['grid.jpg']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':camera_name']['grid.jpg']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':camera_name']['grid.jpg']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCameraNameGridJpgQueryKey>
  >({
    queryKey: getCameraNameGridJpgQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':camera_name']['grid.jpg'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCameraNameGridJpg<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':camera_name']['grid.jpg']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':camera_name']['grid.jpg']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':camera_name']['grid.jpg']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCameraNameGridJpgQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCameraNameGridJpgQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteCameraNameRegionGridMutationKey() {
  return [':camera_name', '/:camera_name/region_grid', 'DELETE'] as const
}

export function getDeleteCameraNameRegionGridMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':camera_name']['region_grid']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':camera_name']['region_grid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCameraNameRegionGridMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':camera_name']['region_grid']['$delete']>,
    ) {
      return parseResponse(client[':camera_name'].region_grid.$delete(args, options))
    },
  })
}

export function createDeleteCameraNameRegionGrid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':camera_name']['region_grid']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':camera_name']['region_grid']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCameraNameRegionGridMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getEventsEventIdSnapshotCleanWebpQueryKey(
  args: InferRequestType<(typeof client.events)[':event_id']['snapshot-clean.webp']['$get']>,
) {
  return ['events', '/events/:event_id/snapshot-clean.webp', args] as const
}

export function getEventsEventIdSnapshotCleanWebpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.events)[':event_id']['snapshot-clean.webp']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.events)[':event_id']['snapshot-clean.webp']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.events)[':event_id']['snapshot-clean.webp']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventsEventIdSnapshotCleanWebpQueryKey>
  >({
    queryKey: getEventsEventIdSnapshotCleanWebpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.events[':event_id']['snapshot-clean.webp'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEventsEventIdSnapshotCleanWebp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.events)[':event_id']['snapshot-clean.webp']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.events)[':event_id']['snapshot-clean.webp']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.events)[':event_id']['snapshot-clean.webp']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEventsEventIdSnapshotCleanWebpQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEventsEventIdSnapshotCleanWebpQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getEventsEventIdClipMp4QueryKey(
  args: InferRequestType<(typeof client.events)[':event_id']['clip.mp4']['$get']>,
) {
  return ['events', '/events/:event_id/clip.mp4', args] as const
}

export function getEventsEventIdClipMp4QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.events)[':event_id']['clip.mp4']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.events)[':event_id']['clip.mp4']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.events)[':event_id']['clip.mp4']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventsEventIdClipMp4QueryKey>
  >({
    queryKey: getEventsEventIdClipMp4QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.events[':event_id']['clip.mp4'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEventsEventIdClipMp4<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.events)[':event_id']['clip.mp4']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.events)[':event_id']['clip.mp4']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.events)[':event_id']['clip.mp4']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEventsEventIdClipMp4QueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEventsEventIdClipMp4QueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getReviewReviewIdClipMp4QueryKey(
  args: InferRequestType<(typeof client.review)[':review_id']['clip.mp4']['$get']>,
) {
  return ['review', '/review/:review_id/clip.mp4', args] as const
}

export function getReviewReviewIdClipMp4QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.review)[':review_id']['clip.mp4']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.review)[':review_id']['clip.mp4']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.review)[':review_id']['clip.mp4']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReviewReviewIdClipMp4QueryKey>
  >({
    queryKey: getReviewReviewIdClipMp4QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.review[':review_id']['clip.mp4'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createReviewReviewIdClipMp4<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.review)[':review_id']['clip.mp4']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.review)[':review_id']['clip.mp4']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.review)[':review_id']['clip.mp4']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getReviewReviewIdClipMp4QueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getReviewReviewIdClipMp4QueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getEventsEventIdPreviewGifQueryKey(
  args: InferRequestType<(typeof client.events)[':event_id']['preview.gif']['$get']>,
) {
  return ['events', '/events/:event_id/preview.gif', args] as const
}

export function getEventsEventIdPreviewGifQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.events)[':event_id']['preview.gif']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.events)[':event_id']['preview.gif']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.events)[':event_id']['preview.gif']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventsEventIdPreviewGifQueryKey>
  >({
    queryKey: getEventsEventIdPreviewGifQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.events[':event_id']['preview.gif'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEventsEventIdPreviewGif<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.events)[':event_id']['preview.gif']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.events)[':event_id']['preview.gif']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.events)[':event_id']['preview.gif']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEventsEventIdPreviewGifQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEventsEventIdPreviewGifQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCameraNameStartStartTsEndEndTsPreviewGifQueryKey(
  args: InferRequestType<
    (typeof client)[':camera_name']['start'][':start_ts']['end'][':end_ts']['preview.gif']['$get']
  >,
) {
  return [':camera_name', '/:camera_name/start/:start_ts/end/:end_ts/preview.gif', args] as const
}

export function getCameraNameStartStartTsEndEndTsPreviewGifQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':camera_name']['start'][':start_ts']['end'][':end_ts']['preview.gif']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':camera_name']['start'][':start_ts']['end'][':end_ts']['preview.gif']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':camera_name']['start'][':start_ts']['end'][':end_ts']['preview.gif']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCameraNameStartStartTsEndEndTsPreviewGifQueryKey>
  >({
    queryKey: getCameraNameStartStartTsEndEndTsPreviewGifQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':camera_name'].start[':start_ts'].end[':end_ts']['preview.gif'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCameraNameStartStartTsEndEndTsPreviewGif<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':camera_name']['start'][':start_ts']['end'][':end_ts']['preview.gif']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':camera_name']['start'][':start_ts']['end'][':end_ts']['preview.gif']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)[':camera_name']['start'][':start_ts']['end'][':end_ts']['preview.gif']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCameraNameStartStartTsEndEndTsPreviewGifQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCameraNameStartStartTsEndEndTsPreviewGifQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getCameraNameStartStartTsEndEndTsPreviewMp4QueryKey(
  args: InferRequestType<
    (typeof client)[':camera_name']['start'][':start_ts']['end'][':end_ts']['preview.mp4']['$get']
  >,
) {
  return [':camera_name', '/:camera_name/start/:start_ts/end/:end_ts/preview.mp4', args] as const
}

export function getCameraNameStartStartTsEndEndTsPreviewMp4QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':camera_name']['start'][':start_ts']['end'][':end_ts']['preview.mp4']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':camera_name']['start'][':start_ts']['end'][':end_ts']['preview.mp4']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':camera_name']['start'][':start_ts']['end'][':end_ts']['preview.mp4']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCameraNameStartStartTsEndEndTsPreviewMp4QueryKey>
  >({
    queryKey: getCameraNameStartStartTsEndEndTsPreviewMp4QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':camera_name'].start[':start_ts'].end[':end_ts']['preview.mp4'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCameraNameStartStartTsEndEndTsPreviewMp4<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':camera_name']['start'][':start_ts']['end'][':end_ts']['preview.mp4']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':camera_name']['start'][':start_ts']['end'][':end_ts']['preview.mp4']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)[':camera_name']['start'][':start_ts']['end'][':end_ts']['preview.mp4']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCameraNameStartStartTsEndEndTsPreviewMp4QueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCameraNameStartStartTsEndEndTsPreviewMp4QueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getReviewEventIdPreviewQueryKey(
  args: InferRequestType<(typeof client.review)[':event_id']['preview']['$get']>,
) {
  return ['review', '/review/:event_id/preview', args] as const
}

export function getReviewEventIdPreviewQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.review)[':event_id']['preview']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.review)[':event_id']['preview']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.review)[':event_id']['preview']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReviewEventIdPreviewQueryKey>
  >({
    queryKey: getReviewEventIdPreviewQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.review[':event_id'].preview.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createReviewEventIdPreview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.review)[':event_id']['preview']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.review)[':event_id']['preview']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.review)[':event_id']['preview']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getReviewEventIdPreviewQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getReviewEventIdPreviewQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPreviewFileNameThumbnailWebpQueryKey(
  args: InferRequestType<(typeof client.preview)[':file_name']['thumbnail.webp']['$get']>,
) {
  return ['preview', '/preview/:file_name/thumbnail.webp', args] as const
}

export function getPreviewFileNameThumbnailWebpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.preview)[':file_name']['thumbnail.webp']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.preview)[':file_name']['thumbnail.webp']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.preview)[':file_name']['thumbnail.webp']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPreviewFileNameThumbnailWebpQueryKey>
  >({
    queryKey: getPreviewFileNameThumbnailWebpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.preview[':file_name']['thumbnail.webp'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPreviewFileNameThumbnailWebp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.preview)[':file_name']['thumbnail.webp']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.preview)[':file_name']['thumbnail.webp']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.preview)[':file_name']['thumbnail.webp']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPreviewFileNameThumbnailWebpQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPreviewFileNameThumbnailWebpQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPreviewFileNameThumbnailJpgQueryKey(
  args: InferRequestType<(typeof client.preview)[':file_name']['thumbnail.jpg']['$get']>,
) {
  return ['preview', '/preview/:file_name/thumbnail.jpg', args] as const
}

export function getPreviewFileNameThumbnailJpgQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.preview)[':file_name']['thumbnail.jpg']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.preview)[':file_name']['thumbnail.jpg']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.preview)[':file_name']['thumbnail.jpg']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPreviewFileNameThumbnailJpgQueryKey>
  >({
    queryKey: getPreviewFileNameThumbnailJpgQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.preview[':file_name']['thumbnail.jpg'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPreviewFileNameThumbnailJpg<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.preview)[':file_name']['thumbnail.jpg']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.preview)[':file_name']['thumbnail.jpg']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.preview)[':file_name']['thumbnail.jpg']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPreviewFileNameThumbnailJpgQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPreviewFileNameThumbnailJpgQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCameraNameLabelThumbnailJpgQueryKey(
  args: InferRequestType<(typeof client)[':camera_name'][':label']['thumbnail.jpg']['$get']>,
) {
  return [':camera_name', '/:camera_name/:label/thumbnail.jpg', args] as const
}

export function getCameraNameLabelThumbnailJpgQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':camera_name'][':label']['thumbnail.jpg']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':camera_name'][':label']['thumbnail.jpg']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':camera_name'][':label']['thumbnail.jpg']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCameraNameLabelThumbnailJpgQueryKey>
  >({
    queryKey: getCameraNameLabelThumbnailJpgQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':camera_name'][':label']['thumbnail.jpg'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCameraNameLabelThumbnailJpg<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':camera_name'][':label']['thumbnail.jpg']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':camera_name'][':label']['thumbnail.jpg']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':camera_name'][':label']['thumbnail.jpg']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCameraNameLabelThumbnailJpgQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCameraNameLabelThumbnailJpgQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCameraNameLabelBestJpgQueryKey(
  args: InferRequestType<(typeof client)[':camera_name'][':label']['best.jpg']['$get']>,
) {
  return [':camera_name', '/:camera_name/:label/best.jpg', args] as const
}

export function getCameraNameLabelBestJpgQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':camera_name'][':label']['best.jpg']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':camera_name'][':label']['best.jpg']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':camera_name'][':label']['best.jpg']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCameraNameLabelBestJpgQueryKey>
  >({
    queryKey: getCameraNameLabelBestJpgQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':camera_name'][':label']['best.jpg'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCameraNameLabelBestJpg<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':camera_name'][':label']['best.jpg']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':camera_name'][':label']['best.jpg']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':camera_name'][':label']['best.jpg']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCameraNameLabelBestJpgQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCameraNameLabelBestJpgQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCameraNameLabelClipMp4QueryKey(
  args: InferRequestType<(typeof client)[':camera_name'][':label']['clip.mp4']['$get']>,
) {
  return [':camera_name', '/:camera_name/:label/clip.mp4', args] as const
}

export function getCameraNameLabelClipMp4QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':camera_name'][':label']['clip.mp4']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':camera_name'][':label']['clip.mp4']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':camera_name'][':label']['clip.mp4']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCameraNameLabelClipMp4QueryKey>
  >({
    queryKey: getCameraNameLabelClipMp4QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':camera_name'][':label']['clip.mp4'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCameraNameLabelClipMp4<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':camera_name'][':label']['clip.mp4']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':camera_name'][':label']['clip.mp4']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':camera_name'][':label']['clip.mp4']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCameraNameLabelClipMp4QueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCameraNameLabelClipMp4QueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCameraNameLabelSnapshotJpgQueryKey(
  args: InferRequestType<(typeof client)[':camera_name'][':label']['snapshot.jpg']['$get']>,
) {
  return [':camera_name', '/:camera_name/:label/snapshot.jpg', args] as const
}

export function getCameraNameLabelSnapshotJpgQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':camera_name'][':label']['snapshot.jpg']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':camera_name'][':label']['snapshot.jpg']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':camera_name'][':label']['snapshot.jpg']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCameraNameLabelSnapshotJpgQueryKey>
  >({
    queryKey: getCameraNameLabelSnapshotJpgQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':camera_name'][':label']['snapshot.jpg'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCameraNameLabelSnapshotJpg<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':camera_name'][':label']['snapshot.jpg']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':camera_name'][':label']['snapshot.jpg']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':camera_name'][':label']['snapshot.jpg']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCameraNameLabelSnapshotJpgQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCameraNameLabelSnapshotJpgQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostCameraNameSearchMotionMutationKey() {
  return [':camera_name', '/:camera_name/search/motion', 'POST'] as const
}

export function getPostCameraNameSearchMotionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':camera_name']['search']['motion']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':camera_name']['search']['motion']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCameraNameSearchMotionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':camera_name']['search']['motion']['$post']>,
    ) {
      return parseResponse(client[':camera_name'].search.motion.$post(args, options))
    },
  })
}

export function createPostCameraNameSearchMotion<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':camera_name']['search']['motion']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)[':camera_name']['search']['motion']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCameraNameSearchMotionMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCameraNameSearchMotionJobIdQueryKey(
  args: InferRequestType<(typeof client)[':camera_name']['search']['motion'][':job_id']['$get']>,
) {
  return [':camera_name', '/:camera_name/search/motion/:job_id', args] as const
}

export function getCameraNameSearchMotionJobIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':camera_name']['search']['motion'][':job_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':camera_name']['search']['motion'][':job_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':camera_name']['search']['motion'][':job_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCameraNameSearchMotionJobIdQueryKey>
  >({
    queryKey: getCameraNameSearchMotionJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':camera_name'].search.motion[':job_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCameraNameSearchMotionJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':camera_name']['search']['motion'][':job_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':camera_name']['search']['motion'][':job_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':camera_name']['search']['motion'][':job_id']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCameraNameSearchMotionJobIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCameraNameSearchMotionJobIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostCameraNameSearchMotionJobIdCancelMutationKey() {
  return [':camera_name', '/:camera_name/search/motion/:job_id/cancel', 'POST'] as const
}

export function getPostCameraNameSearchMotionJobIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':camera_name']['search']['motion'][':job_id']['cancel']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)[':camera_name']['search']['motion'][':job_id']['cancel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCameraNameSearchMotionJobIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':camera_name']['search']['motion'][':job_id']['cancel']['$post']
      >,
    ) {
      return parseResponse(
        client[':camera_name'].search.motion[':job_id'].cancel.$post(args, options),
      )
    },
  })
}

export function createPostCameraNameSearchMotionJobIdCancel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)[':camera_name']['search']['motion'][':job_id']['cancel']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)[':camera_name']['search']['motion'][':job_id']['cancel']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCameraNameSearchMotionJobIdCancelMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getRecordingsStorageQueryKey() {
  return ['recordings', '/recordings/storage'] as const
}

export function getRecordingsStorageQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recordings.storage.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recordings.storage.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRecordingsStorageQueryKey>
  >({
    queryKey: getRecordingsStorageQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.recordings.storage.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRecordingsStorage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recordings.storage.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recordings.storage.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRecordingsStorageQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRecordingsStorageQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getRecordingsSummaryQueryKey(
  args: InferRequestType<typeof client.recordings.summary.$get>,
) {
  return ['recordings', '/recordings/summary', args] as const
}

export function getRecordingsSummaryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recordings.summary.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.recordings.summary.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recordings.summary.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRecordingsSummaryQueryKey>
  >({
    queryKey: getRecordingsSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recordings.summary.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRecordingsSummary<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recordings.summary.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.recordings.summary.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recordings.summary.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRecordingsSummaryQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRecordingsSummaryQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCameraNameRecordingsSummaryQueryKey(
  args: InferRequestType<(typeof client)[':camera_name']['recordings']['summary']['$get']>,
) {
  return [':camera_name', '/:camera_name/recordings/summary', args] as const
}

export function getCameraNameRecordingsSummaryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':camera_name']['recordings']['summary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':camera_name']['recordings']['summary']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':camera_name']['recordings']['summary']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCameraNameRecordingsSummaryQueryKey>
  >({
    queryKey: getCameraNameRecordingsSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':camera_name'].recordings.summary.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCameraNameRecordingsSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':camera_name']['recordings']['summary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':camera_name']['recordings']['summary']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':camera_name']['recordings']['summary']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCameraNameRecordingsSummaryQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCameraNameRecordingsSummaryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCameraNameRecordingsCoverageQueryKey(
  args: InferRequestType<(typeof client)[':camera_name']['recordings']['coverage']['$get']>,
) {
  return [':camera_name', '/:camera_name/recordings/coverage', args] as const
}

export function getCameraNameRecordingsCoverageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':camera_name']['recordings']['coverage']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':camera_name']['recordings']['coverage']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':camera_name']['recordings']['coverage']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCameraNameRecordingsCoverageQueryKey>
  >({
    queryKey: getCameraNameRecordingsCoverageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':camera_name'].recordings.coverage.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCameraNameRecordingsCoverage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':camera_name']['recordings']['coverage']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':camera_name']['recordings']['coverage']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':camera_name']['recordings']['coverage']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCameraNameRecordingsCoverageQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCameraNameRecordingsCoverageQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCameraNameRecordingsQueryKey(
  args: InferRequestType<(typeof client)[':camera_name']['recordings']['$get']>,
) {
  return [':camera_name', '/:camera_name/recordings', args] as const
}

export function getCameraNameRecordingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':camera_name']['recordings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':camera_name']['recordings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':camera_name']['recordings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCameraNameRecordingsQueryKey>
  >({
    queryKey: getCameraNameRecordingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':camera_name'].recordings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCameraNameRecordings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':camera_name']['recordings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':camera_name']['recordings']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':camera_name']['recordings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCameraNameRecordingsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCameraNameRecordingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRecordingsUnavailableQueryKey(
  args: InferRequestType<typeof client.recordings.unavailable.$get>,
) {
  return ['recordings', '/recordings/unavailable', args] as const
}

export function getRecordingsUnavailableQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recordings.unavailable.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.recordings.unavailable.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.recordings.unavailable.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecordingsUnavailableQueryKey>
  >({
    queryKey: getRecordingsUnavailableQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recordings.unavailable.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRecordingsUnavailable<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recordings.unavailable.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.recordings.unavailable.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recordings.unavailable.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRecordingsUnavailableQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getRecordingsUnavailableQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteRecordingsStartStartEndEndMutationKey() {
  return ['recordings', '/recordings/start/:start/end/:end', 'DELETE'] as const
}

export function getDeleteRecordingsStartStartEndEndMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.recordings.start)[':start']['end'][':end']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.recordings.start)[':start']['end'][':end']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRecordingsStartStartEndEndMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.recordings.start)[':start']['end'][':end']['$delete']>,
    ) {
      return parseResponse(client.recordings.start[':start'].end[':end'].$delete(args, options))
    },
  })
}

export function createDeleteRecordingsStartStartEndEnd<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.recordings.start)[':start']['end'][':end']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.recordings.start)[':start']['end'][':end']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteRecordingsStartStartEndEndMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostDebugReplayStartMutationKey() {
  return ['debug_replay', '/debug_replay/start', 'POST'] as const
}

export function getPostDebugReplayStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug_replay.start.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.debug_replay.start.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDebugReplayStartMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.debug_replay.start.$post>) {
      return parseResponse(client.debug_replay.start.$post(args, options))
    },
  })
}

export function createPostDebugReplayStart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.debug_replay.start.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.debug_replay.start.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDebugReplayStartMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostDebugReplayStartFromExportMutationKey() {
  return ['debug_replay', '/debug_replay/start_from_export', 'POST'] as const
}

export function getPostDebugReplayStartFromExportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.debug_replay.start_from_export.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.debug_replay.start_from_export.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDebugReplayStartFromExportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.debug_replay.start_from_export.$post>) {
      return parseResponse(client.debug_replay.start_from_export.$post(args, options))
    },
  })
}

export function createPostDebugReplayStartFromExport<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.debug_replay.start_from_export.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.debug_replay.start_from_export.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDebugReplayStartFromExportMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDebugReplayStatusQueryKey() {
  return ['debug_replay', '/debug_replay/status'] as const
}

export function getDebugReplayStatusQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug_replay.status.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug_replay.status.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDebugReplayStatusQueryKey>
  >({
    queryKey: getDebugReplayStatusQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.debug_replay.status.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDebugReplayStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug_replay.status.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.debug_replay.status.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getDebugReplayStatusQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDebugReplayStatusQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostDebugReplayStopMutationKey() {
  return ['debug_replay', '/debug_replay/stop', 'POST'] as const
}

export function getPostDebugReplayStopMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug_replay.stop.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostDebugReplayStopMutationKey(),
    async mutationFn() {
      return parseResponse(client.debug_replay.stop.$post(undefined, options))
    },
  })
}

export function createPostDebugReplayStop<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.debug_replay.stop.$post>>>
            >
          >,
          TError,
          void,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDebugReplayStopMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
