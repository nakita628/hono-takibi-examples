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

export function getAnalyticsPreviewQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAnalyticsPreviewQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.analytics.preview.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnalyticsPreview<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.preview.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.analytics.preview.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.analytics.preview.$get>>>
            >
          >,
          ReturnType<typeof getAnalyticsPreviewQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.preview.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAnalyticsPreviewQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAnalyticsPreviewQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.analytics.preview.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAuthFirstTimeLoginQueryKey() {
  return ['auth', '/auth/first_time_login'] as const
}

export function getAuthFirstTimeLoginQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAuthFirstTimeLoginQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.auth.first_time_login.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAuthFirstTimeLogin<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.first_time_login.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.auth.first_time_login.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.auth.first_time_login.$get>>>
            >
          >,
          ReturnType<typeof getAuthFirstTimeLoginQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.auth.first_time_login.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuthFirstTimeLoginQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAuthFirstTimeLoginQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.auth.first_time_login.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAuthQueryKey() {
  return ['auth', '/auth'] as const
}

export function getAuthQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAuthQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.auth.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAuth<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.$get>>>>>,
          ReturnType<typeof getAuthQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAuthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAuthQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.auth.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProfileQueryKey() {
  return ['profile', '/profile'] as const
}

export function getProfileQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getProfileQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.profile.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProfile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.$get>>>>
          >,
          ReturnType<typeof getProfileQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProfileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getProfileQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.profile.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLogoutQueryKey() {
  return ['logout', '/logout'] as const
}

export function getLogoutQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLogoutQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.logout.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLogout<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logout.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logout.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logout.$get>>>>>,
          ReturnType<typeof getLogoutQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logout.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLogoutQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLogoutQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.logout.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostLogin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$post>>>>>,
          TError,
          InferRequestType<typeof client.login.$post>,
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
  const mutationDefaults = getPostLoginMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUsersQueryKey() {
  return ['users', '/users'] as const
}

export function getUsersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUsersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
          ReturnType<typeof getUsersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUsersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.users.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
          TError,
          InferRequestType<typeof client.users.$post>,
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
  const mutationDefaults = getPostUsersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteUsersUsername<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteUsersUsernameMutationOptions<TError, TOnMutateResult>(
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

export function usePutUsersUsernamePassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutUsersUsernamePasswordMutationOptions<TError, TOnMutateResult>(
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

export function usePutUsersUsernameRole<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutUsersUsernameRoleMutationOptions<TError, TOnMutateResult>(
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

export function getGo2rtcStreamsQueryKey() {
  return ['go2rtc', '/go2rtc/streams'] as const
}

export function getGo2rtcStreamsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getGo2rtcStreamsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.go2rtc.streams.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGo2rtcStreams<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.go2rtc.streams.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.go2rtc.streams.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.go2rtc.streams.$get>>>>
          >,
          ReturnType<typeof getGo2rtcStreamsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.go2rtc.streams.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGo2rtcStreamsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getGo2rtcStreamsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.go2rtc.streams.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGo2rtcStreamsStreamNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.go2rtc.streams)[':stream_name']['$get']>>,
) {
  return ['go2rtc', '/go2rtc/streams/:stream_name', toValue(args)] as const
}

export function getGo2rtcStreamsStreamNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.go2rtc.streams)[':stream_name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGo2rtcStreamsStreamNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.go2rtc.streams[':stream_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGo2rtcStreamsStreamName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.go2rtc.streams)[':stream_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.go2rtc.streams)[':stream_name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.go2rtc.streams)[':stream_name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.go2rtc.streams)[':stream_name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGo2rtcStreamsStreamNameQueryKey>
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
          Awaited<ReturnType<(typeof client.go2rtc.streams)[':stream_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGo2rtcStreamsStreamNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGo2rtcStreamsStreamNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.go2rtc.streams[':stream_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutGo2rtcStreamsStreamName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutGo2rtcStreamsStreamNameMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteGo2rtcStreamsStreamName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteGo2rtcStreamsStreamNameMutationOptions<TError, TOnMutateResult>(
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

export function getGo2rtcStreamsStreamNameBitrateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.go2rtc.streams)[':stream_name']['bitrate']['$get']>
  >,
) {
  return ['go2rtc', '/go2rtc/streams/:stream_name/bitrate', toValue(args)] as const
}

export function getGo2rtcStreamsStreamNameBitrateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.go2rtc.streams)[':stream_name']['bitrate']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGo2rtcStreamsStreamNameBitrateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.go2rtc.streams[':stream_name'].bitrate.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGo2rtcStreamsStreamNameBitrate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.go2rtc.streams)[':stream_name']['bitrate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.go2rtc.streams)[':stream_name']['bitrate']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.go2rtc.streams)[':stream_name']['bitrate']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getGo2rtcStreamsStreamNameBitrateQueryKey>
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
          Awaited<ReturnType<(typeof client.go2rtc.streams)[':stream_name']['bitrate']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGo2rtcStreamsStreamNameBitrateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGo2rtcStreamsStreamNameBitrateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.go2rtc.streams[':stream_name'].bitrate.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFfprobeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ffprobe.$get>>,
) {
  return ['ffprobe', '/ffprobe', toValue(args)] as const
}

export function getFfprobeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ffprobe.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFfprobeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ffprobe.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useFfprobe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ffprobe.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ffprobe.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ffprobe.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ffprobe.$get>>>>
          >,
          ReturnType<typeof getFfprobeQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ffprobe.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFfprobeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFfprobeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ffprobe.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKeyframeAnalysisQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.keyframe_analysis.$get>>,
) {
  return ['keyframe_analysis', '/keyframe_analysis', toValue(args)] as const
}

export function getKeyframeAnalysisQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.keyframe_analysis.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKeyframeAnalysisQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.keyframe_analysis.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKeyframeAnalysis<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keyframe_analysis.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.keyframe_analysis.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.keyframe_analysis.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.keyframe_analysis.$get>>>
            >
          >,
          ReturnType<typeof getKeyframeAnalysisQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keyframe_analysis.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getKeyframeAnalysisQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKeyframeAnalysisQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.keyframe_analysis.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFfprobeSnapshotQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ffprobe.snapshot.$get>>,
) {
  return ['ffprobe', '/ffprobe/snapshot', toValue(args)] as const
}

export function getFfprobeSnapshotQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ffprobe.snapshot.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFfprobeSnapshotQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ffprobe.snapshot.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFfprobeSnapshot<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ffprobe.snapshot.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ffprobe.snapshot.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ffprobe.snapshot.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ffprobe.snapshot.$get>>>
            >
          >,
          ReturnType<typeof getFfprobeSnapshotQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ffprobe.snapshot.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFfprobeSnapshotQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFfprobeSnapshotQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ffprobe.snapshot.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReolinkDetectQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.reolink.detect.$get>>,
) {
  return ['reolink', '/reolink/detect', toValue(args)] as const
}

export function getReolinkDetectQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.reolink.detect.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReolinkDetectQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.reolink.detect.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReolinkDetect<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reolink.detect.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.reolink.detect.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reolink.detect.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reolink.detect.$get>>>>
          >,
          ReturnType<typeof getReolinkDetectQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reolink.detect.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReolinkDetectQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReolinkDetectQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.reolink.detect.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOnvifProbeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.onvif.probe.$get>>,
) {
  return ['onvif', '/onvif/probe', toValue(args)] as const
}

export function getOnvifProbeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.onvif.probe.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOnvifProbeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.onvif.probe.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOnvifProbe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.onvif.probe.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.onvif.probe.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.onvif.probe.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.onvif.probe.$get>>>>
          >,
          ReturnType<typeof getOnvifProbeQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.onvif.probe.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOnvifProbeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOnvifProbeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.onvif.probe.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteCamerasCameraName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteCamerasCameraNameMutationOptions<TError, TOnMutateResult>(
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

export function usePutCameraCameraNameSetFeatureSubCommand<
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
  const mutationDefaults = getPutCameraCameraNameSetFeatureSubCommandMutationOptions<
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

export function usePutCameraCameraNameSetFeature<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutCameraCameraNameSetFeatureMutationOptions<TError, TOnMutateResult>(
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

export function getChatToolsQueryKey() {
  return ['chat', '/chat/tools'] as const
}

export function getChatToolsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getChatToolsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.chat.tools.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useChatTools<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.tools.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.tools.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.tools.$get>>>>
          >,
          ReturnType<typeof getChatToolsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.tools.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getChatToolsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getChatToolsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.chat.tools.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostChatExecute<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.execute.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.chat.execute.$post>,
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
  const mutationDefaults = getPostChatExecuteMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostChatCompletion<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.chat.completion.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.chat.completion.$post>,
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
  const mutationDefaults = getPostChatCompletionMutationOptions<TError, TOnMutateResult>(
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

export function getVlmMonitorQueryKey() {
  return ['vlm', '/vlm/monitor'] as const
}

export function getVlmMonitorQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getVlmMonitorQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vlm.monitor.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useVlmMonitor<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vlm.monitor.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vlm.monitor.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vlm.monitor.$get>>>>
          >,
          ReturnType<typeof getVlmMonitorQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vlm.monitor.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVlmMonitorQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getVlmMonitorQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.vlm.monitor.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostVlmMonitor<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vlm.monitor.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.vlm.monitor.$post>,
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
  const mutationDefaults = getPostVlmMonitorMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteVlmMonitor<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vlm.monitor.$delete>>>>
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
  const mutationDefaults = getDeleteVlmMonitorMutationOptions<TError, TOnMutateResult>(
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

export function getFacesQueryKey() {
  return ['faces', '/faces'] as const
}

export function getFacesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getFacesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.faces.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useFaces<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.faces.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.faces.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.faces.$get>>>>>,
          ReturnType<typeof getFacesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.faces.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFacesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getFacesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.faces.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostFacesReprocess<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.faces.reprocess.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.faces.reprocess.$post>,
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
  const mutationDefaults = getPostFacesReprocessMutationOptions<TError, TOnMutateResult>(
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

export function usePostFacesTrainNameClassify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostFacesTrainNameClassifyMutationOptions<TError, TOnMutateResult>(
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

export function usePostFacesNameCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostFacesNameCreateMutationOptions<TError, TOnMutateResult>(
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

export function usePostFacesNameRegister<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostFacesNameRegisterMutationOptions<TError, TOnMutateResult>(
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

export function usePostFacesRecognize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.faces.recognize.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.faces.recognize.$post>,
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
  const mutationDefaults = getPostFacesRecognizeMutationOptions<TError, TOnMutateResult>(
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

export function usePostFacesNameReclassify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostFacesNameReclassifyMutationOptions<TError, TOnMutateResult>(
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

export function usePostFacesNameDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostFacesNameDeleteMutationOptions<TError, TOnMutateResult>(
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

export function usePutFacesOldNameRename<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutFacesOldNameRenameMutationOptions<TError, TOnMutateResult>(
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

export function usePutLprReprocess<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lpr.reprocess.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.lpr.reprocess.$put>,
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
  const mutationDefaults = getPutLprReprocessMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePutReindex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reindex.$put>>>>
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
  const mutationDefaults = getPutReindexMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePutAudioTranscribe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.audio.transcribe.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.audio.transcribe.$put>,
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
  const mutationDefaults = getPutAudioTranscribeMutationOptions<TError, TOnMutateResult>(
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

export function getClassificationNameDatasetQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.classification)[':name']['dataset']['$get']>
  >,
) {
  return ['classification', '/classification/:name/dataset', toValue(args)] as const
}

export function getClassificationNameDatasetQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.classification)[':name']['dataset']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClassificationNameDatasetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.classification[':name'].dataset.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useClassificationNameDataset<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.classification)[':name']['dataset']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.classification)[':name']['dataset']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.classification)[':name']['dataset']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.classification)[':name']['dataset']['$get']>>
              >
            >
          >,
          ReturnType<typeof getClassificationNameDatasetQueryKey>
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
          Awaited<ReturnType<(typeof client.classification)[':name']['dataset']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClassificationNameDatasetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClassificationNameDatasetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.classification[':name'].dataset.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getClassificationAttributesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.classification.attributes.$get>>,
) {
  return ['classification', '/classification/attributes', toValue(args)] as const
}

export function getClassificationAttributesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.classification.attributes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClassificationAttributesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.classification.attributes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useClassificationAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.classification.attributes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.classification.attributes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.classification.attributes.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.classification.attributes.$get>>
              >
            >
          >,
          ReturnType<typeof getClassificationAttributesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.classification.attributes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClassificationAttributesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClassificationAttributesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.classification.attributes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getClassificationNameTrainQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.classification)[':name']['train']['$get']>
  >,
) {
  return ['classification', '/classification/:name/train', toValue(args)] as const
}

export function getClassificationNameTrainQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.classification)[':name']['train']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClassificationNameTrainQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.classification[':name'].train.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useClassificationNameTrain<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.classification)[':name']['train']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.classification)[':name']['train']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.classification)[':name']['train']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.classification)[':name']['train']['$get']>>
              >
            >
          >,
          ReturnType<typeof getClassificationNameTrainQueryKey>
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
          Awaited<ReturnType<(typeof client.classification)[':name']['train']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClassificationNameTrainQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClassificationNameTrainQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.classification[':name'].train.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostClassificationNameTrain<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostClassificationNameTrainMutationOptions<TError, TOnMutateResult>(
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

export function usePostClassificationNameDatasetCategoryDelete<
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
  const mutationDefaults = getPostClassificationNameDatasetCategoryDeleteMutationOptions<
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

export function usePostClassificationNameDatasetCategoryReclassify<
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
  const mutationDefaults = getPostClassificationNameDatasetCategoryReclassifyMutationOptions<
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

export function usePutClassificationNameDatasetOldCategoryRename<
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
  const mutationDefaults = getPutClassificationNameDatasetOldCategoryRenameMutationOptions<
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

export function usePostClassificationNameDatasetCategorize<
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
  const mutationDefaults = getPostClassificationNameDatasetCategorizeMutationOptions<
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

export function usePostClassificationNameDatasetCategoryCreate<
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
  const mutationDefaults = getPostClassificationNameDatasetCategoryCreateMutationOptions<
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

export function usePostClassificationNameTrainDelete<
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
                  ReturnType<(typeof client.classification)[':name']['train']['delete']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.classification)[':name']['train']['delete']['$post']>,
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
  const mutationDefaults = getPostClassificationNameTrainDeleteMutationOptions<
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

export function usePostClassificationGenerateExamplesState<
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
                Awaited<ReturnType<typeof client.classification.generate_examples.state.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.classification.generate_examples.state.$post>,
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
  const mutationDefaults = getPostClassificationGenerateExamplesStateMutationOptions<
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

export function usePostClassificationGenerateExamplesObject<
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
                Awaited<ReturnType<typeof client.classification.generate_examples.object.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.classification.generate_examples.object.$post>,
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
  const mutationDefaults = getPostClassificationGenerateExamplesObjectMutationOptions<
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

export function useDeleteClassificationName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteClassificationNameMutationOptions<TError, TOnMutateResult>(
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

export function getReviewQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.review.$get>>,
) {
  return ['review', '/review', toValue(args)] as const
}

export function getReviewQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.review.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReviewQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.review.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useReview<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.review.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.review.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.review.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.review.$get>>>>>,
          ReturnType<typeof getReviewQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.review.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getReviewQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReviewQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.review.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReviewIdsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.review_ids.$get>>,
) {
  return ['review_ids', '/review_ids', toValue(args)] as const
}

export function getReviewIdsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.review_ids.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReviewIdsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.review_ids.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useReviewIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.review_ids.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.review_ids.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.review_ids.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.review_ids.$get>>>>
          >,
          ReturnType<typeof getReviewIdsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.review_ids.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getReviewIdsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReviewIdsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.review_ids.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReviewSummaryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.review.summary.$get>>,
) {
  return ['review', '/review/summary', toValue(args)] as const
}

export function getReviewSummaryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.review.summary.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReviewSummaryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.review.summary.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReviewSummary<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.review.summary.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.review.summary.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.review.summary.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.review.summary.$get>>>>
          >,
          ReturnType<typeof getReviewSummaryQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.review.summary.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReviewSummaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReviewSummaryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.review.summary.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostReviewsViewed<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.reviews.viewed.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.reviews.viewed.$post>,
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
  const mutationDefaults = getPostReviewsViewedMutationOptions<TError, TOnMutateResult>(
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

export function usePostReviewsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.reviews.delete.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.reviews.delete.$post>,
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
  const mutationDefaults = getPostReviewsDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getReviewActivityMotionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.review.activity.motion.$get>>,
) {
  return ['review', '/review/activity/motion', toValue(args)] as const
}

export function getReviewActivityMotionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.review.activity.motion.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReviewActivityMotionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.review.activity.motion.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReviewActivityMotion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.review.activity.motion.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.review.activity.motion.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.review.activity.motion.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.review.activity.motion.$get>>>
            >
          >,
          ReturnType<typeof getReviewActivityMotionQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.review.activity.motion.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReviewActivityMotionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReviewActivityMotionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.review.activity.motion.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReviewEventEventIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.review.event)[':event_id']['$get']>>,
) {
  return ['review', '/review/event/:event_id', toValue(args)] as const
}

export function getReviewEventEventIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.review.event)[':event_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReviewEventEventIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.review.event[':event_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReviewEventEventId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.review.event)[':event_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.review.event)[':event_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.review.event)[':event_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.review.event)[':event_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getReviewEventEventIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.review.event)[':event_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReviewEventEventIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReviewEventEventIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.review.event[':event_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReviewReviewIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.review)[':review_id']['$get']>>,
) {
  return ['review', '/review/:review_id', toValue(args)] as const
}

export function getReviewReviewIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.review)[':review_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReviewReviewIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.review[':review_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReviewReviewId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.review)[':review_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.review)[':review_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.review)[':review_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.review)[':review_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getReviewReviewIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.review)[':review_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReviewReviewIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReviewReviewIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.review[':review_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutReviewReviewIdRegenerateDescription<
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
                  ReturnType<(typeof client.review)[':review_id']['regenerate_description']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.review)[':review_id']['regenerate_description']['$put']>,
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
  const mutationDefaults = getPutReviewReviewIdRegenerateDescriptionMutationOptions<
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

export function useDeleteReviewReviewIdViewed<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteReviewReviewIdViewedMutationOptions<TError, TOnMutateResult>(
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

export function usePostReviewSummarizeStartStartTsEndEndTs<
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
  const mutationDefaults = getPostReviewSummarizeStartStartTsEndEndTsMutationOptions<
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

export function getQueryKey() {
  return ['', '/'] as const
}

export function getQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function use<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
          ReturnType<typeof getQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConfigSchemaJsonQueryKey() {
  return ['config', '/config/schema.json'] as const
}

export function getConfigSchemaJsonQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getConfigSchemaJsonQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.config['schema.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConfigSchemaJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.config)['schema.json']['$get']>>>
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
                Awaited<ReturnType<(typeof client.config)['schema.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.config)['schema.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof getConfigSchemaJsonQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.config)['schema.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConfigSchemaJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getConfigSchemaJsonQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.config['schema.json'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVersionQueryKey() {
  return ['version', '/version'] as const
}

export function getVersionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getVersionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.version.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useVersion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>
          >,
          ReturnType<typeof getVersionQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getVersionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.version.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatsQueryKey() {
  return ['stats', '/stats'] as const
}

export function getStatsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStats<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
          ReturnType<typeof getStatsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.stats.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatsHistoryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stats.history.$get>>,
) {
  return ['stats', '/stats/history', toValue(args)] as const
}

export function getStatsHistoryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stats.history.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStatsHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats.history.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStatsHistory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.history.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stats.history.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.history.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.history.$get>>>>
          >,
          ReturnType<typeof getStatsHistoryQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.history.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatsHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStatsHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stats.history.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetricsQueryKey() {
  return ['metrics', '/metrics'] as const
}

export function getMetricsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMetricsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
          >,
          ReturnType<typeof getMetricsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMetricsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMetricsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGenaiModelsQueryKey() {
  return ['genai', '/genai/models'] as const
}

export function getGenaiModelsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getGenaiModelsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.genai.models.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGenaiModels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genai.models.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genai.models.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genai.models.$get>>>>
          >,
          ReturnType<typeof getGenaiModelsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genai.models.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGenaiModelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getGenaiModelsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.genai.models.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGenaiRolesQueryKey() {
  return ['genai', '/genai/roles'] as const
}

export function getGenaiRolesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getGenaiRolesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.genai.roles.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGenaiRoles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genai.roles.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genai.roles.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genai.roles.$get>>>>
          >,
          ReturnType<typeof getGenaiRolesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genai.roles.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGenaiRolesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getGenaiRolesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.genai.roles.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostGenaiProbe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genai.probe.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.genai.probe.$post>,
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
  const mutationDefaults = getPostGenaiProbeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getConfigQueryKey() {
  return ['config', '/config'] as const
}

export function getConfigQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getConfigQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.config.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useConfig<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
          ReturnType<typeof getConfigQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getConfigQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.config.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProfilesQueryKey() {
  return ['profiles', '/profiles'] as const
}

export function getProfilesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getProfilesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.profiles.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProfiles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profiles.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profiles.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profiles.$get>>>>
          >,
          ReturnType<typeof getProfilesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profiles.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProfilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getProfilesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.profiles.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProfileActiveQueryKey() {
  return ['profile', '/profile/active'] as const
}

export function getProfileActiveQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getProfileActiveQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.profile.active.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProfileActive<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.active.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.active.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.active.$get>>>>
          >,
          ReturnType<typeof getProfileActiveQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.active.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProfileActiveQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getProfileActiveQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.profile.active.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFfmpegPresetsQueryKey() {
  return ['ffmpeg', '/ffmpeg/presets'] as const
}

export function getFfmpegPresetsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getFfmpegPresetsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ffmpeg.presets.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useFfmpegPresets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ffmpeg.presets.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ffmpeg.presets.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ffmpeg.presets.$get>>>>
          >,
          ReturnType<typeof getFfmpegPresetsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ffmpeg.presets.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFfmpegPresetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getFfmpegPresetsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.ffmpeg.presets.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConfigRawPathsQueryKey() {
  return ['config', '/config/raw_paths'] as const
}

export function getConfigRawPathsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getConfigRawPathsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.config.raw_paths.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useConfigRawPaths<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.raw_paths.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.config.raw_paths.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.config.raw_paths.$get>>>
            >
          >,
          ReturnType<typeof getConfigRawPathsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.raw_paths.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getConfigRawPathsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getConfigRawPathsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.config.raw_paths.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConfigRawQueryKey() {
  return ['config', '/config/raw'] as const
}

export function getConfigRawQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getConfigRawQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.config.raw.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useConfigRaw<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.raw.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.raw.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.raw.$get>>>>
          >,
          ReturnType<typeof getConfigRawQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.raw.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getConfigRawQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getConfigRawQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.config.raw.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostConfigSave<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.save.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.config.save.$post>,
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
  const mutationDefaults = getPostConfigSaveMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePutConfigSet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.set.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.config.set.$put>,
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
  const mutationDefaults = getPutConfigSetMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getVainfoQueryKey() {
  return ['vainfo', '/vainfo'] as const
}

export function getVainfoQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getVainfoQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vainfo.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useVainfo<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vainfo.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vainfo.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vainfo.$get>>>>>,
          ReturnType<typeof getVainfoQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vainfo.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVainfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getVainfoQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.vainfo.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNvinfoQueryKey() {
  return ['nvinfo', '/nvinfo'] as const
}

export function getNvinfoQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getNvinfoQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nvinfo.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNvinfo<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nvinfo.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nvinfo.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nvinfo.$get>>>>>,
          ReturnType<typeof getNvinfoQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nvinfo.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNvinfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getNvinfoQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.nvinfo.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLogsServiceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.logs)[':service']['$get']>>,
) {
  return ['logs', '/logs/:service', toValue(args)] as const
}

export function getLogsServiceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.logs)[':service']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLogsServiceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.logs[':service'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLogsService<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':service']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.logs)[':service']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':service']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':service']['$get']>>>
            >
          >,
          ReturnType<typeof getLogsServiceQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':service']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLogsServiceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLogsServiceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.logs[':service'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostRestart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.restart.$post>>>>
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
  const mutationDefaults = getPostRestartMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostMediaSync<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media.sync.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.media.sync.$post>,
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
  const mutationDefaults = getPostMediaSyncMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMediaSyncCurrentQueryKey() {
  return ['media', '/media/sync/current'] as const
}

export function getMediaSyncCurrentQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMediaSyncCurrentQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.media.sync.current.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMediaSyncCurrent<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media.sync.current.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.media.sync.current.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.media.sync.current.$get>>>
            >
          >,
          ReturnType<typeof getMediaSyncCurrentQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media.sync.current.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMediaSyncCurrentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMediaSyncCurrentQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.media.sync.current.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMediaSyncStatusJobIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.media.sync.status)[':job_id']['$get']>>,
) {
  return ['media', '/media/sync/status/:job_id', toValue(args)] as const
}

export function getMediaSyncStatusJobIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.media.sync.status)[':job_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMediaSyncStatusJobIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.media.sync.status[':job_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMediaSyncStatusJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.media.sync.status)[':job_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.media.sync.status)[':job_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.media.sync.status)[':job_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.media.sync.status)[':job_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMediaSyncStatusJobIdQueryKey>
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
          Awaited<ReturnType<(typeof client.media.sync.status)[':job_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMediaSyncStatusJobIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMediaSyncStatusJobIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.media.sync.status[':job_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLabelsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.labels.$get>>,
) {
  return ['labels', '/labels', toValue(args)] as const
}

export function getLabelsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.labels.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLabelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.labels.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLabels<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.labels.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.$get>>>>>,
          ReturnType<typeof getLabelsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLabelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLabelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.labels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSubLabelsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sub_labels.$get>>,
) {
  return ['sub_labels', '/sub_labels', toValue(args)] as const
}

export function getSubLabelsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sub_labels.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubLabelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sub_labels.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSubLabels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sub_labels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sub_labels.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sub_labels.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sub_labels.$get>>>>
          >,
          ReturnType<typeof getSubLabelsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sub_labels.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSubLabelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubLabelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sub_labels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCategorizedObjectNamesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.categorized_object_names.$get>>,
) {
  return ['categorized_object_names', '/categorized_object_names', toValue(args)] as const
}

export function getCategorizedObjectNamesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.categorized_object_names.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCategorizedObjectNamesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.categorized_object_names.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCategorizedObjectNames<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.categorized_object_names.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.categorized_object_names.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.categorized_object_names.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.categorized_object_names.$get>>>
            >
          >,
          ReturnType<typeof getCategorizedObjectNamesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.categorized_object_names.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCategorizedObjectNamesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCategorizedObjectNamesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.categorized_object_names.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAudioLabelsQueryKey() {
  return ['audio_labels', '/audio_labels'] as const
}

export function getAudioLabelsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAudioLabelsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.audio_labels.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAudioLabels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audio_labels.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audio_labels.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audio_labels.$get>>>>
          >,
          ReturnType<typeof getAudioLabelsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audio_labels.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAudioLabelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAudioLabelsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.audio_labels.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlusModelsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.plus.models.$get>>,
) {
  return ['plus', '/plus/models', toValue(args)] as const
}

export function getPlusModelsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.plus.models.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlusModelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.plus.models.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePlusModels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plus.models.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.plus.models.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plus.models.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plus.models.$get>>>>
          >,
          ReturnType<typeof getPlusModelsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plus.models.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPlusModelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlusModelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.plus.models.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostPlusValidate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plus.validate.$post>>>>
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
  const mutationDefaults = getPostPlusValidateMutationOptions<TError, TOnMutateResult>(
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

export function getRecognizedLicensePlatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recognized_license_plates.$get>>,
) {
  return ['recognized_license_plates', '/recognized_license_plates', toValue(args)] as const
}

export function getRecognizedLicensePlatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recognized_license_plates.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecognizedLicensePlatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recognized_license_plates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecognizedLicensePlates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.recognized_license_plates.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recognized_license_plates.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.recognized_license_plates.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.recognized_license_plates.$get>>
              >
            >
          >,
          ReturnType<typeof getRecognizedLicensePlatesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.recognized_license_plates.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecognizedLicensePlatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecognizedLicensePlatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recognized_license_plates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTimelineQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.timeline.$get>>,
) {
  return ['timeline', '/timeline', toValue(args)] as const
}

export function getTimelineQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.timeline.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTimelineQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.timeline.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTimeline<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timeline.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.timeline.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timeline.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timeline.$get>>>>
          >,
          ReturnType<typeof getTimelineQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timeline.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTimelineQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTimelineQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.timeline.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTimelineHourlyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.timeline.hourly.$get>>,
) {
  return ['timeline', '/timeline/hourly', toValue(args)] as const
}

export function getTimelineHourlyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.timeline.hourly.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTimelineHourlyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.timeline.hourly.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTimelineHourly<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timeline.hourly.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.timeline.hourly.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.timeline.hourly.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.timeline.hourly.$get>>>
            >
          >,
          ReturnType<typeof getTimelineHourlyQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timeline.hourly.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTimelineHourlyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTimelineHourlyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.timeline.hourly.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPreviewCameraNameStartStartTsEndEndTsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.preview)[':camera_name']['start'][':start_ts']['end'][':end_ts']['$get']
    >
  >,
) {
  return ['preview', '/preview/:camera_name/start/:start_ts/end/:end_ts', toValue(args)] as const
}

export function getPreviewCameraNameStartStartTsEndEndTsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.preview)[':camera_name']['start'][':start_ts']['end'][':end_ts']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPreviewCameraNameStartStartTsEndEndTsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.preview[':camera_name'].start[':start_ts'].end[':end_ts'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePreviewCameraNameStartStartTsEndEndTs<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.preview)[':camera_name']['start'][':start_ts']['end'][':end_ts']['$get']
    >
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
                    (typeof client.preview)[':camera_name']['start'][':start_ts']['end'][':end_ts']['$get']
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
                    (typeof client.preview)[':camera_name']['start'][':start_ts']['end'][':end_ts']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getPreviewCameraNameStartStartTsEndEndTsQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPreviewCameraNameStartStartTsEndEndTsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.preview[':camera_name'].start[':start_ts'].end[':end_ts'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPreviewYearMonthDayHourCameraNameTzNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.preview)[':year_month'][':day'][':hour'][':camera_name'][':tz_name']['$get']
    >
  >,
) {
  return [
    'preview',
    '/preview/:year_month/:day/:hour/:camera_name/:tz_name',
    toValue(args),
  ] as const
}

export function getPreviewYearMonthDayHourCameraNameTzNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.preview)[':year_month'][':day'][':hour'][':camera_name'][':tz_name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPreviewYearMonthDayHourCameraNameTzNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.preview[':year_month'][':day'][':hour'][':camera_name'][':tz_name'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function usePreviewYearMonthDayHourCameraNameTzName<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.preview)[':year_month'][':day'][':hour'][':camera_name'][':tz_name']['$get']
    >
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
                    (typeof client.preview)[':year_month'][':day'][':hour'][':camera_name'][':tz_name']['$get']
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
                    (typeof client.preview)[':year_month'][':day'][':hour'][':camera_name'][':tz_name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getPreviewYearMonthDayHourCameraNameTzNameQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPreviewYearMonthDayHourCameraNameTzNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.preview[':year_month'][':day'][':hour'][':camera_name'][':tz_name'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPreviewCameraNameStartStartTsEndEndTsFramesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.preview)[':camera_name']['start'][':start_ts']['end'][':end_ts']['frames']['$get']
    >
  >,
) {
  return [
    'preview',
    '/preview/:camera_name/start/:start_ts/end/:end_ts/frames',
    toValue(args),
  ] as const
}

export function getPreviewCameraNameStartStartTsEndEndTsFramesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.preview)[':camera_name']['start'][':start_ts']['end'][':end_ts']['frames']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPreviewCameraNameStartStartTsEndEndTsFramesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.preview[':camera_name'].start[':start_ts'].end[':end_ts'].frames.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function usePreviewCameraNameStartStartTsEndEndTsFrames<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.preview)[':camera_name']['start'][':start_ts']['end'][':end_ts']['frames']['$get']
    >
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
                    (typeof client.preview)[':camera_name']['start'][':start_ts']['end'][':end_ts']['frames']['$get']
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
                    (typeof client.preview)[':camera_name']['start'][':start_ts']['end'][':end_ts']['frames']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getPreviewCameraNameStartStartTsEndEndTsFramesQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPreviewCameraNameStartStartTsEndEndTsFramesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.preview[':camera_name'].start[':start_ts'].end[':end_ts'].frames.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getNotificationsPubkeyQueryKey() {
  return ['notifications', '/notifications/pubkey'] as const
}

export function getNotificationsPubkeyQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getNotificationsPubkeyQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.notifications.pubkey.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNotificationsPubkey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.pubkey.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.notifications.pubkey.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.notifications.pubkey.$get>>>
            >
          >,
          ReturnType<typeof getNotificationsPubkeyQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.pubkey.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsPubkeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getNotificationsPubkeyQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.notifications.pubkey.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostNotificationsRegister<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.notifications.register.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.notifications.register.$post>,
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
  const mutationDefaults = getPostNotificationsRegisterMutationOptions<TError, TOnMutateResult>(
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

export function getExportsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.exports.$get>>,
) {
  return ['exports', '/exports', toValue(args)] as const
}

export function getExportsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.exports.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExportsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.exports.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useExports<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.exports.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.$get>>>>
          >,
          ReturnType<typeof getExportsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getExportsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExportsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.exports.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCasesQueryKey() {
  return ['cases', '/cases'] as const
}

export function getCasesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCasesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cases.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCases<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cases.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cases.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cases.$get>>>>>,
          ReturnType<typeof getCasesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cases.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCasesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.cases.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCases<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cases.$post>>>>>,
          TError,
          InferRequestType<typeof client.cases.$post>,
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
  const mutationDefaults = getPostCasesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCasesCaseIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cases)[':case_id']['$get']>>,
) {
  return ['cases', '/cases/:case_id', toValue(args)] as const
}

export function getCasesCaseIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cases)[':case_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCasesCaseIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cases[':case_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCasesCaseId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.cases)[':case_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cases)[':case_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.cases)[':case_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.cases)[':case_id']['$get']>>>
            >
          >,
          ReturnType<typeof getCasesCaseIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.cases)[':case_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCasesCaseIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCasesCaseIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cases[':case_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteCasesCaseId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteCasesCaseIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchCasesCaseId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.cases)[':case_id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.cases)[':case_id']['$patch']>,
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
  const mutationDefaults = getPatchCasesCaseIdMutationOptions<TError, TOnMutateResult>(
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

export function getCasesCaseIdDownloadQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cases)[':case_id']['download']['$get']>>,
) {
  return ['cases', '/cases/:case_id/download', toValue(args)] as const
}

export function getCasesCaseIdDownloadQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cases)[':case_id']['download']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCasesCaseIdDownloadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cases[':case_id'].download.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCasesCaseIdDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cases)[':case_id']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cases)[':case_id']['download']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cases)[':case_id']['download']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cases)[':case_id']['download']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCasesCaseIdDownloadQueryKey>
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
          Awaited<ReturnType<(typeof client.cases)[':case_id']['download']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCasesCaseIdDownloadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCasesCaseIdDownloadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cases[':case_id'].download.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getJobsExportQueryKey() {
  return ['jobs', '/jobs/export'] as const
}

export function getJobsExportQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getJobsExportQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.jobs.export.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useJobsExport<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.export.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.export.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.export.$get>>>>
          >,
          ReturnType<typeof getJobsExportQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.export.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getJobsExportQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getJobsExportQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.jobs.export.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getJobsExportExportIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.jobs.export)[':export_id']['$get']>>,
) {
  return ['jobs', '/jobs/export/:export_id', toValue(args)] as const
}

export function getJobsExportExportIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.jobs.export)[':export_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getJobsExportExportIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.jobs.export[':export_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useJobsExportExportId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.jobs.export)[':export_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.jobs.export)[':export_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.jobs.export)[':export_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.jobs.export)[':export_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getJobsExportExportIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.jobs.export)[':export_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJobsExportExportIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getJobsExportExportIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.jobs.export[':export_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostExportsBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.batch.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.exports.batch.$post>,
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
  const mutationDefaults = getPostExportsBatchMutationOptions<TError, TOnMutateResult>(
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

export function usePostExportCameraNameStartStartTimeEndEndTime<
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
  const mutationDefaults = getPostExportCameraNameStartStartTimeEndEndTimeMutationOptions<
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

export function usePatchExportEventIdRename<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPatchExportEventIdRenameMutationOptions<TError, TOnMutateResult>(
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

export function usePostExportCustomCameraNameStartStartTimeEndEndTime<
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
  const mutationDefaults = getPostExportCustomCameraNameStartStartTimeEndEndTimeMutationOptions<
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

export function getExportsExportIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.exports)[':export_id']['$get']>>,
) {
  return ['exports', '/exports/:export_id', toValue(args)] as const
}

export function getExportsExportIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.exports)[':export_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExportsExportIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.exports[':export_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useExportsExportId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.exports)[':export_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.exports)[':export_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.exports)[':export_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.exports)[':export_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getExportsExportIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.exports)[':export_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExportsExportIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExportsExportIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.exports[':export_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostExportsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.exports.delete.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.exports.delete.$post>,
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
  const mutationDefaults = getPostExportsDeleteMutationOptions<TError, TOnMutateResult>(
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

export function usePostExportsReassign<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.exports.reassign.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.exports.reassign.$post>,
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
  const mutationDefaults = getPostExportsReassignMutationOptions<TError, TOnMutateResult>(
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

export function getHardwareProbeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hardware.probe.$get>>,
) {
  return ['hardware', '/hardware/probe', toValue(args)] as const
}

export function getHardwareProbeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hardware.probe.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHardwareProbeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hardware.probe.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHardwareProbe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.probe.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hardware.probe.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.probe.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.probe.$get>>>>
          >,
          ReturnType<typeof getHardwareProbeQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.probe.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getHardwareProbeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHardwareProbeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.hardware.probe.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHardwareHwaccelQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hardware.hwaccel.$get>>,
) {
  return ['hardware', '/hardware/hwaccel', toValue(args)] as const
}

export function getHardwareHwaccelQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hardware.hwaccel.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHardwareHwaccelQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hardware.hwaccel.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useHardwareHwaccel<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.hwaccel.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.hardware.hwaccel.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.hardware.hwaccel.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.hardware.hwaccel.$get>>>
            >
          >,
          ReturnType<typeof getHardwareHwaccelQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.hwaccel.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getHardwareHwaccelQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHardwareHwaccelQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.hardware.hwaccel.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNoticesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.notices.$get>>,
) {
  return ['notices', '/notices', toValue(args)] as const
}

export function getNoticesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.notices.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNoticesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.notices.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNotices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.notices.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notices.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notices.$get>>>>
          >,
          ReturnType<typeof getNoticesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notices.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNoticesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNoticesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.notices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNoticesStatsQueryKey() {
  return ['notices', '/notices/stats'] as const
}

export function getNoticesStatsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getNoticesStatsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.notices.stats.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNoticesStats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notices.stats.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notices.stats.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notices.stats.$get>>>>
          >,
          ReturnType<typeof getNoticesStatsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notices.stats.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNoticesStatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getNoticesStatsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.notices.stats.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNoticesMutedChecksQueryKey() {
  return ['notices', '/notices/muted_checks'] as const
}

export function getNoticesMutedChecksQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getNoticesMutedChecksQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.notices.muted_checks.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNoticesMutedChecks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notices.muted_checks.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.notices.muted_checks.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.notices.muted_checks.$get>>>
            >
          >,
          ReturnType<typeof getNoticesMutedChecksQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notices.muted_checks.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNoticesMutedChecksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getNoticesMutedChecksQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.notices.muted_checks.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteNoticesHidden<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.notices.hidden.$delete>>>
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
  const mutationDefaults = getDeleteNoticesHiddenMutationOptions<TError, TOnMutateResult>(
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

export function usePostNoticesNoticeIdAcknowledge<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostNoticesNoticeIdAcknowledgeMutationOptions<
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

export function usePostNoticesNoticeIdMute<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostNoticesNoticeIdMuteMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteNoticesNoticeIdHidden<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteNoticesNoticeIdHiddenMutationOptions<TError, TOnMutateResult>(
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

export function getEventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.$get>>,
) {
  return ['events', '/events', toValue(args)] as const
}

export function getEventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.events.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEvents<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
          ReturnType<typeof getEventsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEventsExploreQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.explore.$get>>,
) {
  return ['events', '/events/explore', toValue(args)] as const
}

export function getEventsExploreQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.explore.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventsExploreQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.events.explore.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEventsExplore<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.explore.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.explore.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.explore.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.explore.$get>>>>
          >,
          ReturnType<typeof getEventsExploreQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.explore.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEventsExploreQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventsExploreQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.events.explore.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEventIdsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.event_ids.$get>>,
) {
  return ['event_ids', '/event_ids', toValue(args)] as const
}

export function getEventIdsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.event_ids.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventIdsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.event_ids.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEventIds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event_ids.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.event_ids.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event_ids.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event_ids.$get>>>>
          >,
          ReturnType<typeof getEventIdsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event_ids.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEventIdsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventIdsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.event_ids.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEventsSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.search.$get>>,
) {
  return ['events', '/events/search', toValue(args)] as const
}

export function getEventsSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventsSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.events.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEventsSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.search.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.search.$get>>>>
          >,
          ReturnType<typeof getEventsSearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEventsSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventsSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.events.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEventsSummaryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.summary.$get>>,
) {
  return ['events', '/events/summary', toValue(args)] as const
}

export function getEventsSummaryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.summary.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventsSummaryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.events.summary.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEventsSummary<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.summary.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.summary.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.summary.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.summary.$get>>>>
          >,
          ReturnType<typeof getEventsSummaryQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.summary.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEventsSummaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventsSummaryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.events.summary.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEventsEventIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.events)[':event_id']['$get']>>,
) {
  return ['events', '/events/:event_id', toValue(args)] as const
}

export function getEventsEventIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.events)[':event_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventsEventIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.events[':event_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEventsEventId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':event_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.events)[':event_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':event_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':event_id']['$get']>>>
            >
          >,
          ReturnType<typeof getEventsEventIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':event_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventsEventIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventsEventIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.events[':event_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteEventsEventId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteEventsEventIdMutationOptions<TError, TOnMutateResult>(
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

export function usePostEventsEventIdRetain<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostEventsEventIdRetainMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteEventsEventIdRetain<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteEventsEventIdRetainMutationOptions<TError, TOnMutateResult>(
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

export function usePostEventsEventIdPlus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostEventsEventIdPlusMutationOptions<TError, TOnMutateResult>(
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

export function usePutEventsEventIdFalsePositive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutEventsEventIdFalsePositiveMutationOptions<TError, TOnMutateResult>(
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

export function usePostEventsEventIdSubLabel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostEventsEventIdSubLabelMutationOptions<TError, TOnMutateResult>(
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

export function usePostEventsEventIdRecognizedLicensePlate<
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
  const mutationDefaults = getPostEventsEventIdRecognizedLicensePlateMutationOptions<
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

export function usePostEventsEventIdAttributes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostEventsEventIdAttributesMutationOptions<TError, TOnMutateResult>(
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

export function usePostEventsEventIdDescription<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostEventsEventIdDescriptionMutationOptions<TError, TOnMutateResult>(
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

export function usePutEventsEventIdDescriptionRegenerate<
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
  const mutationDefaults = getPutEventsEventIdDescriptionRegenerateMutationOptions<
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

export function usePostDescriptionGenerate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.description.generate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.description.generate.$post>,
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
  const mutationDefaults = getPostDescriptionGenerateMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteEventsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.events.index.$delete>>>
            >
          >,
          TError,
          InferRequestType<typeof client.events.index.$delete>,
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
  const mutationDefaults = getDeleteEventsIndexMutationOptions<TError, TOnMutateResult>(
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

export function usePostEventsCameraNameLabelCreate<
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
                  ReturnType<(typeof client.events)[':camera_name'][':label']['create']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.events)[':camera_name'][':label']['create']['$post']>,
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
  const mutationDefaults = getPostEventsCameraNameLabelCreateMutationOptions<
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

export function usePutEventsEventIdEnd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutEventsEventIdEndMutationOptions<TError, TOnMutateResult>(
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

export function usePostTriggerEmbedding<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.trigger.embedding.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.trigger.embedding.$post>,
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
  const mutationDefaults = getPostTriggerEmbeddingMutationOptions<TError, TOnMutateResult>(
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

export function usePutTriggerEmbeddingCameraNameName<
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
                  ReturnType<(typeof client.trigger.embedding)[':camera_name'][':name']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.trigger.embedding)[':camera_name'][':name']['$put']>,
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
  const mutationDefaults = getPutTriggerEmbeddingCameraNameNameMutationOptions<
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

export function useDeleteTriggerEmbeddingCameraNameName<
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
                  ReturnType<(typeof client.trigger.embedding)[':camera_name'][':name']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.trigger.embedding)[':camera_name'][':name']['$delete']>,
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
  const mutationDefaults = getDeleteTriggerEmbeddingCameraNameNameMutationOptions<
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

export function getTriggersStatusCameraNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.triggers.status)[':camera_name']['$get']>>,
) {
  return ['triggers', '/triggers/status/:camera_name', toValue(args)] as const
}

export function getTriggersStatusCameraNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.triggers.status)[':camera_name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTriggersStatusCameraNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.triggers.status[':camera_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTriggersStatusCameraName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.triggers.status)[':camera_name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.triggers.status)[':camera_name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.triggers.status)[':camera_name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.triggers.status)[':camera_name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTriggersStatusCameraNameQueryKey>
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
          Awaited<ReturnType<(typeof client.triggers.status)[':camera_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTriggersStatusCameraNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTriggersStatusCameraNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.triggers.status[':camera_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCameraNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':camera_name']['$get']>>,
) {
  return [':camera_name', '/:camera_name', toValue(args)] as const
}

export function getCameraNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':camera_name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCameraNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':camera_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCameraName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':camera_name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':camera_name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':camera_name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':camera_name']['$get']>>>
            >
          >,
          ReturnType<typeof getCameraNameQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':camera_name']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCameraNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCameraNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':camera_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCameraNamePtzInfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':camera_name']['ptz']['info']['$get']>>,
) {
  return [':camera_name', '/:camera_name/ptz/info', toValue(args)] as const
}

export function getCameraNamePtzInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':camera_name']['ptz']['info']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCameraNamePtzInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':camera_name'].ptz.info.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCameraNamePtzInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':camera_name']['ptz']['info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':camera_name']['ptz']['info']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':camera_name']['ptz']['info']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':camera_name']['ptz']['info']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCameraNamePtzInfoQueryKey>
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
          Awaited<ReturnType<(typeof client)[':camera_name']['ptz']['info']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCameraNamePtzInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCameraNamePtzInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':camera_name'].ptz.info.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCameraNameLatestExtensionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':camera_name']['latest.:extension']['$get']>
  >,
) {
  return [':camera_name', '/:camera_name/latest.:extension', toValue(args)] as const
}

export function getCameraNameLatestExtensionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':camera_name']['latest.:extension']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCameraNameLatestExtensionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':camera_name']['latest.:extension'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCameraNameLatestExtension<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':camera_name']['latest.:extension']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':camera_name']['latest.:extension']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':camera_name']['latest.:extension']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':camera_name']['latest.:extension']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCameraNameLatestExtensionQueryKey>
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
          Awaited<ReturnType<(typeof client)[':camera_name']['latest.:extension']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCameraNameLatestExtensionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCameraNameLatestExtensionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':camera_name']['latest.:extension'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCameraNameRecordingsFrameTimeSnapshotFormatQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':camera_name']['recordings'][':frame_time']['snapshot.:format']['$get']
    >
  >,
) {
  return [
    ':camera_name',
    '/:camera_name/recordings/:frame_time/snapshot.:format',
    toValue(args),
  ] as const
}

export function getCameraNameRecordingsFrameTimeSnapshotFormatQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':camera_name']['recordings'][':frame_time']['snapshot.:format']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCameraNameRecordingsFrameTimeSnapshotFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':camera_name'].recordings[':frame_time']['snapshot.:format'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCameraNameRecordingsFrameTimeSnapshotFormat<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':camera_name']['recordings'][':frame_time']['snapshot.:format']['$get']
    >
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
                    (typeof client)[':camera_name']['recordings'][':frame_time']['snapshot.:format']['$get']
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
                    (typeof client)[':camera_name']['recordings'][':frame_time']['snapshot.:format']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCameraNameRecordingsFrameTimeSnapshotFormatQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCameraNameRecordingsFrameTimeSnapshotFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':camera_name'].recordings[':frame_time']['snapshot.:format'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCameraNamePlusFrameTime<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostCameraNamePlusFrameTimeMutationOptions<TError, TOnMutateResult>(
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

export function getCameraNameStartStartTsEndEndTsClipMp4QueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':camera_name']['start'][':start_ts']['end'][':end_ts']['clip.mp4']['$get']
    >
  >,
) {
  return [
    ':camera_name',
    '/:camera_name/start/:start_ts/end/:end_ts/clip.mp4',
    toValue(args),
  ] as const
}

export function getCameraNameStartStartTsEndEndTsClipMp4QueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':camera_name']['start'][':start_ts']['end'][':end_ts']['clip.mp4']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCameraNameStartStartTsEndEndTsClipMp4QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':camera_name'].start[':start_ts'].end[':end_ts']['clip.mp4'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCameraNameStartStartTsEndEndTsClipMp4<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':camera_name']['start'][':start_ts']['end'][':end_ts']['clip.mp4']['$get']
    >
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
                    (typeof client)[':camera_name']['start'][':start_ts']['end'][':end_ts']['clip.mp4']['$get']
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
                    (typeof client)[':camera_name']['start'][':start_ts']['end'][':end_ts']['clip.mp4']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCameraNameStartStartTsEndEndTsClipMp4QueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCameraNameStartStartTsEndEndTsClipMp4QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':camera_name'].start[':start_ts'].end[':end_ts']['clip.mp4'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVodCameraNameStartStartTsEndEndTsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.vod)[':camera_name']['start'][':start_ts']['end'][':end_ts']['$get']
    >
  >,
) {
  return ['vod', '/vod/:camera_name/start/:start_ts/end/:end_ts', toValue(args)] as const
}

export function getVodCameraNameStartStartTsEndEndTsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.vod)[':camera_name']['start'][':start_ts']['end'][':end_ts']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVodCameraNameStartStartTsEndEndTsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vod[':camera_name'].start[':start_ts'].end[':end_ts'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVodCameraNameStartStartTsEndEndTs<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.vod)[':camera_name']['start'][':start_ts']['end'][':end_ts']['$get']
    >
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
                    (typeof client.vod)[':camera_name']['start'][':start_ts']['end'][':end_ts']['$get']
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
                    (typeof client.vod)[':camera_name']['start'][':start_ts']['end'][':end_ts']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVodCameraNameStartStartTsEndEndTsQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVodCameraNameStartStartTsEndEndTsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vod[':camera_name'].start[':start_ts'].end[':end_ts'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVodYearMonthDayHourCameraNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.vod)[':year_month'][':day'][':hour'][':camera_name']['$get']>
  >,
) {
  return ['vod', '/vod/:year_month/:day/:hour/:camera_name', toValue(args)] as const
}

export function getVodYearMonthDayHourCameraNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.vod)[':year_month'][':day'][':hour'][':camera_name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVodYearMonthDayHourCameraNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vod[':year_month'][':day'][':hour'][':camera_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVodYearMonthDayHourCameraName<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.vod)[':year_month'][':day'][':hour'][':camera_name']['$get']>
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
                    (typeof client.vod)[':year_month'][':day'][':hour'][':camera_name']['$get']
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
                    (typeof client.vod)[':year_month'][':day'][':hour'][':camera_name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVodYearMonthDayHourCameraNameQueryKey>
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
            ReturnType<(typeof client.vod)[':year_month'][':day'][':hour'][':camera_name']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVodYearMonthDayHourCameraNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVodYearMonthDayHourCameraNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vod[':year_month'][':day'][':hour'][':camera_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVodYearMonthDayHourCameraNameTzNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.vod)[':year_month'][':day'][':hour'][':camera_name'][':tz_name']['$get']
    >
  >,
) {
  return ['vod', '/vod/:year_month/:day/:hour/:camera_name/:tz_name', toValue(args)] as const
}

export function getVodYearMonthDayHourCameraNameTzNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.vod)[':year_month'][':day'][':hour'][':camera_name'][':tz_name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVodYearMonthDayHourCameraNameTzNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vod[':year_month'][':day'][':hour'][':camera_name'][':tz_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVodYearMonthDayHourCameraNameTzName<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.vod)[':year_month'][':day'][':hour'][':camera_name'][':tz_name']['$get']
    >
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
                    (typeof client.vod)[':year_month'][':day'][':hour'][':camera_name'][':tz_name']['$get']
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
                    (typeof client.vod)[':year_month'][':day'][':hour'][':camera_name'][':tz_name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVodYearMonthDayHourCameraNameTzNameQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVodYearMonthDayHourCameraNameTzNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vod[':year_month'][':day'][':hour'][':camera_name'][':tz_name'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getVodEventEventIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.vod.event)[':event_id']['$get']>>,
) {
  return ['vod', '/vod/event/:event_id', toValue(args)] as const
}

export function getVodEventEventIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.vod.event)[':event_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVodEventEventIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vod.event[':event_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVodEventEventId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.vod.event)[':event_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.vod.event)[':event_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.vod.event)[':event_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.vod.event)[':event_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVodEventEventIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.vod.event)[':event_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVodEventEventIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVodEventEventIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vod.event[':event_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVodClipCameraNameStartStartTsEndEndTsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.vod.clip)[':camera_name']['start'][':start_ts']['end'][':end_ts']['$get']
    >
  >,
) {
  return ['vod', '/vod/clip/:camera_name/start/:start_ts/end/:end_ts', toValue(args)] as const
}

export function getVodClipCameraNameStartStartTsEndEndTsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.vod.clip)[':camera_name']['start'][':start_ts']['end'][':end_ts']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVodClipCameraNameStartStartTsEndEndTsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vod.clip[':camera_name'].start[':start_ts'].end[':end_ts'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVodClipCameraNameStartStartTsEndEndTs<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.vod.clip)[':camera_name']['start'][':start_ts']['end'][':end_ts']['$get']
    >
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
                    (typeof client.vod.clip)[':camera_name']['start'][':start_ts']['end'][':end_ts']['$get']
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
                    (typeof client.vod.clip)[':camera_name']['start'][':start_ts']['end'][':end_ts']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVodClipCameraNameStartStartTsEndEndTsQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVodClipCameraNameStartStartTsEndEndTsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vod.clip[':camera_name'].start[':start_ts'].end[':end_ts'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVodCameraNameStreamStartStartTsEndEndTsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.vod)[':camera_name'][':stream']['start'][':start_ts']['end'][':end_ts']['$get']
    >
  >,
) {
  return ['vod', '/vod/:camera_name/:stream/start/:start_ts/end/:end_ts', toValue(args)] as const
}

export function getVodCameraNameStreamStartStartTsEndEndTsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.vod)[':camera_name'][':stream']['start'][':start_ts']['end'][':end_ts']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVodCameraNameStreamStartStartTsEndEndTsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vod[':camera_name'][':stream'].start[':start_ts'].end[':end_ts'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useVodCameraNameStreamStartStartTsEndEndTs<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.vod)[':camera_name'][':stream']['start'][':start_ts']['end'][':end_ts']['$get']
    >
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
                    (typeof client.vod)[':camera_name'][':stream']['start'][':start_ts']['end'][':end_ts']['$get']
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
                    (typeof client.vod)[':camera_name'][':stream']['start'][':start_ts']['end'][':end_ts']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVodCameraNameStreamStartStartTsEndEndTsQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVodCameraNameStreamStartStartTsEndEndTsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vod[':camera_name'][':stream'].start[':start_ts'].end[':end_ts'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getEventsEventIdSnapshotJpgQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.events)[':event_id']['snapshot.jpg']['$get']>
  >,
) {
  return ['events', '/events/:event_id/snapshot.jpg', toValue(args)] as const
}

export function getEventsEventIdSnapshotJpgQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.events)[':event_id']['snapshot.jpg']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventsEventIdSnapshotJpgQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.events[':event_id']['snapshot.jpg'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEventsEventIdSnapshotJpg<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.events)[':event_id']['snapshot.jpg']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.events)[':event_id']['snapshot.jpg']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.events)[':event_id']['snapshot.jpg']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.events)[':event_id']['snapshot.jpg']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEventsEventIdSnapshotJpgQueryKey>
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
          Awaited<ReturnType<(typeof client.events)[':event_id']['snapshot.jpg']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventsEventIdSnapshotJpgQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventsEventIdSnapshotJpgQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.events[':event_id']['snapshot.jpg'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEventsEventIdThumbnailExtensionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.events)[':event_id']['thumbnail.:extension']['$get']>
  >,
) {
  return ['events', '/events/:event_id/thumbnail.:extension', toValue(args)] as const
}

export function getEventsEventIdThumbnailExtensionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.events)[':event_id']['thumbnail.:extension']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventsEventIdThumbnailExtensionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.events[':event_id']['thumbnail.:extension'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEventsEventIdThumbnailExtension<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.events)[':event_id']['thumbnail.:extension']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.events)[':event_id']['thumbnail.:extension']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.events)[':event_id']['thumbnail.:extension']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getEventsEventIdThumbnailExtensionQueryKey>
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
          Awaited<ReturnType<(typeof client.events)[':event_id']['thumbnail.:extension']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventsEventIdThumbnailExtensionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventsEventIdThumbnailExtensionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.events[':event_id']['thumbnail.:extension'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCameraNameGridJpgQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':camera_name']['grid.jpg']['$get']>>,
) {
  return [':camera_name', '/:camera_name/grid.jpg', toValue(args)] as const
}

export function getCameraNameGridJpgQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':camera_name']['grid.jpg']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCameraNameGridJpgQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':camera_name']['grid.jpg'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCameraNameGridJpg<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':camera_name']['grid.jpg']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':camera_name']['grid.jpg']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':camera_name']['grid.jpg']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':camera_name']['grid.jpg']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCameraNameGridJpgQueryKey>
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
          Awaited<ReturnType<(typeof client)[':camera_name']['grid.jpg']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCameraNameGridJpgQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCameraNameGridJpgQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':camera_name']['grid.jpg'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteCameraNameRegionGrid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteCameraNameRegionGridMutationOptions<TError, TOnMutateResult>(
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

export function getEventsEventIdSnapshotCleanWebpQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.events)[':event_id']['snapshot-clean.webp']['$get']>
  >,
) {
  return ['events', '/events/:event_id/snapshot-clean.webp', toValue(args)] as const
}

export function getEventsEventIdSnapshotCleanWebpQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.events)[':event_id']['snapshot-clean.webp']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventsEventIdSnapshotCleanWebpQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.events[':event_id']['snapshot-clean.webp'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEventsEventIdSnapshotCleanWebp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.events)[':event_id']['snapshot-clean.webp']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.events)[':event_id']['snapshot-clean.webp']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.events)[':event_id']['snapshot-clean.webp']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getEventsEventIdSnapshotCleanWebpQueryKey>
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
          Awaited<ReturnType<(typeof client.events)[':event_id']['snapshot-clean.webp']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventsEventIdSnapshotCleanWebpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventsEventIdSnapshotCleanWebpQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.events[':event_id']['snapshot-clean.webp'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEventsEventIdClipMp4QueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.events)[':event_id']['clip.mp4']['$get']>>,
) {
  return ['events', '/events/:event_id/clip.mp4', toValue(args)] as const
}

export function getEventsEventIdClipMp4QueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.events)[':event_id']['clip.mp4']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventsEventIdClipMp4QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.events[':event_id']['clip.mp4'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEventsEventIdClipMp4<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.events)[':event_id']['clip.mp4']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.events)[':event_id']['clip.mp4']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.events)[':event_id']['clip.mp4']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.events)[':event_id']['clip.mp4']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEventsEventIdClipMp4QueryKey>
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
          Awaited<ReturnType<(typeof client.events)[':event_id']['clip.mp4']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventsEventIdClipMp4QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventsEventIdClipMp4QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.events[':event_id']['clip.mp4'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReviewReviewIdClipMp4QueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.review)[':review_id']['clip.mp4']['$get']>
  >,
) {
  return ['review', '/review/:review_id/clip.mp4', toValue(args)] as const
}

export function getReviewReviewIdClipMp4QueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.review)[':review_id']['clip.mp4']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReviewReviewIdClipMp4QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.review[':review_id']['clip.mp4'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReviewReviewIdClipMp4<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.review)[':review_id']['clip.mp4']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.review)[':review_id']['clip.mp4']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.review)[':review_id']['clip.mp4']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.review)[':review_id']['clip.mp4']['$get']>>
              >
            >
          >,
          ReturnType<typeof getReviewReviewIdClipMp4QueryKey>
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
          Awaited<ReturnType<(typeof client.review)[':review_id']['clip.mp4']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReviewReviewIdClipMp4QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReviewReviewIdClipMp4QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.review[':review_id']['clip.mp4'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEventsEventIdPreviewGifQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.events)[':event_id']['preview.gif']['$get']>
  >,
) {
  return ['events', '/events/:event_id/preview.gif', toValue(args)] as const
}

export function getEventsEventIdPreviewGifQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.events)[':event_id']['preview.gif']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventsEventIdPreviewGifQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.events[':event_id']['preview.gif'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEventsEventIdPreviewGif<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.events)[':event_id']['preview.gif']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.events)[':event_id']['preview.gif']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.events)[':event_id']['preview.gif']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.events)[':event_id']['preview.gif']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEventsEventIdPreviewGifQueryKey>
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
          Awaited<ReturnType<(typeof client.events)[':event_id']['preview.gif']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventsEventIdPreviewGifQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventsEventIdPreviewGifQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.events[':event_id']['preview.gif'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCameraNameStartStartTsEndEndTsPreviewGifQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':camera_name']['start'][':start_ts']['end'][':end_ts']['preview.gif']['$get']
    >
  >,
) {
  return [
    ':camera_name',
    '/:camera_name/start/:start_ts/end/:end_ts/preview.gif',
    toValue(args),
  ] as const
}

export function getCameraNameStartStartTsEndEndTsPreviewGifQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':camera_name']['start'][':start_ts']['end'][':end_ts']['preview.gif']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCameraNameStartStartTsEndEndTsPreviewGifQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':camera_name'].start[':start_ts'].end[':end_ts']['preview.gif'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useCameraNameStartStartTsEndEndTsPreviewGif<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':camera_name']['start'][':start_ts']['end'][':end_ts']['preview.gif']['$get']
    >
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
                    (typeof client)[':camera_name']['start'][':start_ts']['end'][':end_ts']['preview.gif']['$get']
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
                    (typeof client)[':camera_name']['start'][':start_ts']['end'][':end_ts']['preview.gif']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCameraNameStartStartTsEndEndTsPreviewGifQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCameraNameStartStartTsEndEndTsPreviewGifQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':camera_name'].start[':start_ts'].end[':end_ts']['preview.gif'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getCameraNameStartStartTsEndEndTsPreviewMp4QueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':camera_name']['start'][':start_ts']['end'][':end_ts']['preview.mp4']['$get']
    >
  >,
) {
  return [
    ':camera_name',
    '/:camera_name/start/:start_ts/end/:end_ts/preview.mp4',
    toValue(args),
  ] as const
}

export function getCameraNameStartStartTsEndEndTsPreviewMp4QueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':camera_name']['start'][':start_ts']['end'][':end_ts']['preview.mp4']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCameraNameStartStartTsEndEndTsPreviewMp4QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':camera_name'].start[':start_ts'].end[':end_ts']['preview.mp4'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useCameraNameStartStartTsEndEndTsPreviewMp4<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':camera_name']['start'][':start_ts']['end'][':end_ts']['preview.mp4']['$get']
    >
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
                    (typeof client)[':camera_name']['start'][':start_ts']['end'][':end_ts']['preview.mp4']['$get']
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
                    (typeof client)[':camera_name']['start'][':start_ts']['end'][':end_ts']['preview.mp4']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCameraNameStartStartTsEndEndTsPreviewMp4QueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCameraNameStartStartTsEndEndTsPreviewMp4QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':camera_name'].start[':start_ts'].end[':end_ts']['preview.mp4'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getReviewEventIdPreviewQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.review)[':event_id']['preview']['$get']>>,
) {
  return ['review', '/review/:event_id/preview', toValue(args)] as const
}

export function getReviewEventIdPreviewQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.review)[':event_id']['preview']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReviewEventIdPreviewQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.review[':event_id'].preview.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReviewEventIdPreview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.review)[':event_id']['preview']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.review)[':event_id']['preview']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.review)[':event_id']['preview']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.review)[':event_id']['preview']['$get']>>
              >
            >
          >,
          ReturnType<typeof getReviewEventIdPreviewQueryKey>
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
          Awaited<ReturnType<(typeof client.review)[':event_id']['preview']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReviewEventIdPreviewQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReviewEventIdPreviewQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.review[':event_id'].preview.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPreviewFileNameThumbnailWebpQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.preview)[':file_name']['thumbnail.webp']['$get']>
  >,
) {
  return ['preview', '/preview/:file_name/thumbnail.webp', toValue(args)] as const
}

export function getPreviewFileNameThumbnailWebpQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.preview)[':file_name']['thumbnail.webp']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPreviewFileNameThumbnailWebpQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.preview[':file_name']['thumbnail.webp'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePreviewFileNameThumbnailWebp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.preview)[':file_name']['thumbnail.webp']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.preview)[':file_name']['thumbnail.webp']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.preview)[':file_name']['thumbnail.webp']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.preview)[':file_name']['thumbnail.webp']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPreviewFileNameThumbnailWebpQueryKey>
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
          Awaited<ReturnType<(typeof client.preview)[':file_name']['thumbnail.webp']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPreviewFileNameThumbnailWebpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPreviewFileNameThumbnailWebpQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.preview[':file_name']['thumbnail.webp'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPreviewFileNameThumbnailJpgQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.preview)[':file_name']['thumbnail.jpg']['$get']>
  >,
) {
  return ['preview', '/preview/:file_name/thumbnail.jpg', toValue(args)] as const
}

export function getPreviewFileNameThumbnailJpgQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.preview)[':file_name']['thumbnail.jpg']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPreviewFileNameThumbnailJpgQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.preview[':file_name']['thumbnail.jpg'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePreviewFileNameThumbnailJpg<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.preview)[':file_name']['thumbnail.jpg']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.preview)[':file_name']['thumbnail.jpg']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.preview)[':file_name']['thumbnail.jpg']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.preview)[':file_name']['thumbnail.jpg']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPreviewFileNameThumbnailJpgQueryKey>
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
          Awaited<ReturnType<(typeof client.preview)[':file_name']['thumbnail.jpg']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPreviewFileNameThumbnailJpgQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPreviewFileNameThumbnailJpgQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.preview[':file_name']['thumbnail.jpg'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCameraNameLabelThumbnailJpgQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':camera_name'][':label']['thumbnail.jpg']['$get']>
  >,
) {
  return [':camera_name', '/:camera_name/:label/thumbnail.jpg', toValue(args)] as const
}

export function getCameraNameLabelThumbnailJpgQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':camera_name'][':label']['thumbnail.jpg']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCameraNameLabelThumbnailJpgQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':camera_name'][':label']['thumbnail.jpg'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCameraNameLabelThumbnailJpg<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':camera_name'][':label']['thumbnail.jpg']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':camera_name'][':label']['thumbnail.jpg']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':camera_name'][':label']['thumbnail.jpg']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCameraNameLabelThumbnailJpgQueryKey>
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
          Awaited<ReturnType<(typeof client)[':camera_name'][':label']['thumbnail.jpg']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCameraNameLabelThumbnailJpgQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCameraNameLabelThumbnailJpgQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':camera_name'][':label']['thumbnail.jpg'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCameraNameLabelBestJpgQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':camera_name'][':label']['best.jpg']['$get']>
  >,
) {
  return [':camera_name', '/:camera_name/:label/best.jpg', toValue(args)] as const
}

export function getCameraNameLabelBestJpgQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':camera_name'][':label']['best.jpg']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCameraNameLabelBestJpgQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':camera_name'][':label']['best.jpg'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCameraNameLabelBestJpg<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':camera_name'][':label']['best.jpg']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':camera_name'][':label']['best.jpg']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':camera_name'][':label']['best.jpg']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':camera_name'][':label']['best.jpg']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCameraNameLabelBestJpgQueryKey>
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
          Awaited<ReturnType<(typeof client)[':camera_name'][':label']['best.jpg']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCameraNameLabelBestJpgQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCameraNameLabelBestJpgQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':camera_name'][':label']['best.jpg'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCameraNameLabelClipMp4QueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':camera_name'][':label']['clip.mp4']['$get']>
  >,
) {
  return [':camera_name', '/:camera_name/:label/clip.mp4', toValue(args)] as const
}

export function getCameraNameLabelClipMp4QueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':camera_name'][':label']['clip.mp4']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCameraNameLabelClipMp4QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':camera_name'][':label']['clip.mp4'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCameraNameLabelClipMp4<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':camera_name'][':label']['clip.mp4']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':camera_name'][':label']['clip.mp4']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':camera_name'][':label']['clip.mp4']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':camera_name'][':label']['clip.mp4']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCameraNameLabelClipMp4QueryKey>
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
          Awaited<ReturnType<(typeof client)[':camera_name'][':label']['clip.mp4']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCameraNameLabelClipMp4QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCameraNameLabelClipMp4QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':camera_name'][':label']['clip.mp4'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCameraNameLabelSnapshotJpgQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':camera_name'][':label']['snapshot.jpg']['$get']>
  >,
) {
  return [':camera_name', '/:camera_name/:label/snapshot.jpg', toValue(args)] as const
}

export function getCameraNameLabelSnapshotJpgQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':camera_name'][':label']['snapshot.jpg']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCameraNameLabelSnapshotJpgQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':camera_name'][':label']['snapshot.jpg'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCameraNameLabelSnapshotJpg<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':camera_name'][':label']['snapshot.jpg']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':camera_name'][':label']['snapshot.jpg']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':camera_name'][':label']['snapshot.jpg']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCameraNameLabelSnapshotJpgQueryKey>
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
          Awaited<ReturnType<(typeof client)[':camera_name'][':label']['snapshot.jpg']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCameraNameLabelSnapshotJpgQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCameraNameLabelSnapshotJpgQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':camera_name'][':label']['snapshot.jpg'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCameraNameSearchMotion<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostCameraNameSearchMotionMutationOptions<TError, TOnMutateResult>(
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

export function getCameraNameSearchMotionJobIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':camera_name']['search']['motion'][':job_id']['$get']>
  >,
) {
  return [':camera_name', '/:camera_name/search/motion/:job_id', toValue(args)] as const
}

export function getCameraNameSearchMotionJobIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':camera_name']['search']['motion'][':job_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCameraNameSearchMotionJobIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':camera_name'].search.motion[':job_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCameraNameSearchMotionJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':camera_name']['search']['motion'][':job_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':camera_name']['search']['motion'][':job_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':camera_name']['search']['motion'][':job_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCameraNameSearchMotionJobIdQueryKey>
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
            ReturnType<(typeof client)[':camera_name']['search']['motion'][':job_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCameraNameSearchMotionJobIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCameraNameSearchMotionJobIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':camera_name'].search.motion[':job_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCameraNameSearchMotionJobIdCancel<
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
  const mutationDefaults = getPostCameraNameSearchMotionJobIdCancelMutationOptions<
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

export function getRecordingsStorageQueryKey() {
  return ['recordings', '/recordings/storage'] as const
}

export function getRecordingsStorageQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getRecordingsStorageQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recordings.storage.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecordingsStorage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recordings.storage.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recordings.storage.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recordings.storage.$get>>>
            >
          >,
          ReturnType<typeof getRecordingsStorageQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recordings.storage.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRecordingsStorageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getRecordingsStorageQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.recordings.storage.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRecordingsSummaryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recordings.summary.$get>>,
) {
  return ['recordings', '/recordings/summary', toValue(args)] as const
}

export function getRecordingsSummaryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recordings.summary.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecordingsSummaryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recordings.summary.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecordingsSummary<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recordings.summary.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recordings.summary.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recordings.summary.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recordings.summary.$get>>>
            >
          >,
          ReturnType<typeof getRecordingsSummaryQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recordings.summary.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRecordingsSummaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecordingsSummaryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recordings.summary.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCameraNameRecordingsSummaryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':camera_name']['recordings']['summary']['$get']>
  >,
) {
  return [':camera_name', '/:camera_name/recordings/summary', toValue(args)] as const
}

export function getCameraNameRecordingsSummaryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':camera_name']['recordings']['summary']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCameraNameRecordingsSummaryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':camera_name'].recordings.summary.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCameraNameRecordingsSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':camera_name']['recordings']['summary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':camera_name']['recordings']['summary']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':camera_name']['recordings']['summary']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCameraNameRecordingsSummaryQueryKey>
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
          Awaited<ReturnType<(typeof client)[':camera_name']['recordings']['summary']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCameraNameRecordingsSummaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCameraNameRecordingsSummaryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':camera_name'].recordings.summary.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCameraNameRecordingsCoverageQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':camera_name']['recordings']['coverage']['$get']>
  >,
) {
  return [':camera_name', '/:camera_name/recordings/coverage', toValue(args)] as const
}

export function getCameraNameRecordingsCoverageQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':camera_name']['recordings']['coverage']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCameraNameRecordingsCoverageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':camera_name'].recordings.coverage.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCameraNameRecordingsCoverage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':camera_name']['recordings']['coverage']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':camera_name']['recordings']['coverage']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':camera_name']['recordings']['coverage']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCameraNameRecordingsCoverageQueryKey>
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
          Awaited<ReturnType<(typeof client)[':camera_name']['recordings']['coverage']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCameraNameRecordingsCoverageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCameraNameRecordingsCoverageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':camera_name'].recordings.coverage.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCameraNameRecordingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':camera_name']['recordings']['$get']>>,
) {
  return [':camera_name', '/:camera_name/recordings', toValue(args)] as const
}

export function getCameraNameRecordingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':camera_name']['recordings']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCameraNameRecordingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':camera_name'].recordings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCameraNameRecordings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':camera_name']['recordings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':camera_name']['recordings']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':camera_name']['recordings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':camera_name']['recordings']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCameraNameRecordingsQueryKey>
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
          Awaited<ReturnType<(typeof client)[':camera_name']['recordings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCameraNameRecordingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCameraNameRecordingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':camera_name'].recordings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRecordingsUnavailableQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recordings.unavailable.$get>>,
) {
  return ['recordings', '/recordings/unavailable', toValue(args)] as const
}

export function getRecordingsUnavailableQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recordings.unavailable.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRecordingsUnavailableQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.recordings.unavailable.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecordingsUnavailable<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recordings.unavailable.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.recordings.unavailable.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recordings.unavailable.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.recordings.unavailable.$get>>>
            >
          >,
          ReturnType<typeof getRecordingsUnavailableQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.recordings.unavailable.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecordingsUnavailableQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRecordingsUnavailableQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.recordings.unavailable.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteRecordingsStartStartEndEnd<
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
                  ReturnType<(typeof client.recordings.start)[':start']['end'][':end']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.recordings.start)[':start']['end'][':end']['$delete']>,
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
  const mutationDefaults = getDeleteRecordingsStartStartEndEndMutationOptions<
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

export function usePostDebugReplayStart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.debug_replay.start.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.debug_replay.start.$post>,
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
  const mutationDefaults = getPostDebugReplayStartMutationOptions<TError, TOnMutateResult>(
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

export function usePostDebugReplayStartFromExport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostDebugReplayStartFromExportMutationOptions<
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

export function getDebugReplayStatusQueryKey() {
  return ['debug_replay', '/debug_replay/status'] as const
}

export function getDebugReplayStatusQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDebugReplayStatusQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.debug_replay.status.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDebugReplayStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug_replay.status.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.debug_replay.status.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.debug_replay.status.$get>>>
            >
          >,
          ReturnType<typeof getDebugReplayStatusQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug_replay.status.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDebugReplayStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDebugReplayStatusQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.debug_replay.status.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostDebugReplayStop<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.debug_replay.stop.$post>>>
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
  const mutationDefaults = getPostDebugReplayStopMutationOptions<TError, TOnMutateResult>(
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
