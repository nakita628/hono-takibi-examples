import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetAnalyticsPreviewKey() {
  return ['analytics', '/analytics/preview'] as const
}

export function useGetAnalyticsPreview<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.preview.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAnalyticsPreviewKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.preview.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.analytics.preview.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnalyticsPreview<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.preview.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAnalyticsPreviewKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analytics.preview.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.analytics.preview.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAuthFirstTimeLoginKey() {
  return ['auth', '/auth/first_time_login'] as const
}

export function useGetAuthFirstTimeLogin<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.auth.first_time_login.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAuthFirstTimeLoginKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.auth.first_time_login.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.auth.first_time_login.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuthFirstTimeLogin<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.auth.first_time_login.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAuthFirstTimeLoginKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.auth.first_time_login.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.auth.first_time_login.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAuthKey() {
  return ['auth', '/auth'] as const
}

export function useGetAuth<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetAuthKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.auth.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuth<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetAuthKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.auth.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProfileKey() {
  return ['profile', '/profile'] as const
}

export function useGetProfile<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProfileKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.profile.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProfile<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProfileKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.profile.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLogoutKey() {
  return ['logout', '/logout'] as const
}

export function useGetLogout<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logout.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLogoutKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logout.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.logout.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLogout<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logout.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLogoutKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logout.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.logout.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLoginKey() {
  return ['login', '/login', 'POST'] as const
}

export function usePostLogin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.login.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.login.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLoginKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.login.$post> }) =>
        parseResponse(client.login.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersKey() {
  return ['users', '/users'] as const
}

export function useGetUsers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetUsersKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetUsersKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsersKey() {
  return ['users', '/users', 'POST'] as const
}

export function usePostUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.users.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.users.$post> }) =>
        parseResponse(client.users.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersUsernameKey() {
  return ['users', '/users/:username', 'DELETE'] as const
}

export function useDeleteUsersUsername<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':username']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':username']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersUsernameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':username']['$delete']> },
      ) => parseResponse(client.users[':username'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutUsersUsernamePasswordKey() {
  return ['users', '/users/:username/password', 'PUT'] as const
}

export function usePutUsersUsernamePassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':username']['password']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':username']['password']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUsersUsernamePasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':username']['password']['$put']> },
      ) => parseResponse(client.users[':username'].password.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutUsersUsernameRoleKey() {
  return ['users', '/users/:username/role', 'PUT'] as const
}

export function usePutUsersUsernameRole<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':username']['role']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':username']['role']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUsersUsernameRoleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':username']['role']['$put']> },
      ) => parseResponse(client.users[':username'].role.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGo2rtcStreamsKey() {
  return ['go2rtc', '/go2rtc/streams'] as const
}

export function useGetGo2rtcStreams<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.go2rtc.streams.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGo2rtcStreamsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.go2rtc.streams.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.go2rtc.streams.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGo2rtcStreams<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.go2rtc.streams.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGo2rtcStreamsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.go2rtc.streams.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.go2rtc.streams.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGo2rtcStreamsStreamNameKey(
  args: InferRequestType<(typeof client.go2rtc.streams)[':stream_name']['$get']>,
) {
  return ['go2rtc', '/go2rtc/streams/:stream_name', args] as const
}

export function useGetGo2rtcStreamsStreamName<TError = unknown>(
  args: InferRequestType<(typeof client.go2rtc.streams)[':stream_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.go2rtc.streams)[':stream_name']['$get']>>
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
        ? getGetGo2rtcStreamsStreamNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.go2rtc.streams)[':stream_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.go2rtc.streams[':stream_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGo2rtcStreamsStreamName<TError = unknown>(
  args: InferRequestType<(typeof client.go2rtc.streams)[':stream_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.go2rtc.streams)[':stream_name']['$get']>>
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
        ? getGetGo2rtcStreamsStreamNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.go2rtc.streams)[':stream_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.go2rtc.streams[':stream_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutGo2rtcStreamsStreamNameKey() {
  return ['go2rtc', '/go2rtc/streams/:stream_name', 'PUT'] as const
}

export function usePutGo2rtcStreamsStreamName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.go2rtc.streams)[':stream_name']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.go2rtc.streams)[':stream_name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGo2rtcStreamsStreamNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.go2rtc.streams)[':stream_name']['$put']> },
      ) => parseResponse(client.go2rtc.streams[':stream_name'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteGo2rtcStreamsStreamNameKey() {
  return ['go2rtc', '/go2rtc/streams/:stream_name', 'DELETE'] as const
}

export function useDeleteGo2rtcStreamsStreamName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.go2rtc.streams)[':stream_name']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.go2rtc.streams)[':stream_name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGo2rtcStreamsStreamNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.go2rtc.streams)[':stream_name']['$delete']> },
      ) => parseResponse(client.go2rtc.streams[':stream_name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGo2rtcStreamsStreamNameBitrateKey(
  args: InferRequestType<(typeof client.go2rtc.streams)[':stream_name']['bitrate']['$get']>,
) {
  return ['go2rtc', '/go2rtc/streams/:stream_name/bitrate', args] as const
}

export function useGetGo2rtcStreamsStreamNameBitrate<TError = unknown>(
  args: InferRequestType<(typeof client.go2rtc.streams)[':stream_name']['bitrate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.go2rtc.streams)[':stream_name']['bitrate']['$get']>>
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
        ? getGetGo2rtcStreamsStreamNameBitrateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.go2rtc.streams)[':stream_name']['bitrate']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.go2rtc.streams[':stream_name'].bitrate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGo2rtcStreamsStreamNameBitrate<TError = unknown>(
  args: InferRequestType<(typeof client.go2rtc.streams)[':stream_name']['bitrate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.go2rtc.streams)[':stream_name']['bitrate']['$get']>>
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
        ? getGetGo2rtcStreamsStreamNameBitrateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.go2rtc.streams)[':stream_name']['bitrate']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.go2rtc.streams[':stream_name'].bitrate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFfprobeKey(args: InferRequestType<typeof client.ffprobe.$get>) {
  return ['ffprobe', '/ffprobe', args] as const
}

export function useGetFfprobe<TError = unknown>(
  args: InferRequestType<typeof client.ffprobe.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ffprobe.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFfprobeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ffprobe.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.ffprobe.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetFfprobe<TError = unknown>(
  args: InferRequestType<typeof client.ffprobe.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ffprobe.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFfprobeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ffprobe.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.ffprobe.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetKeyframeAnalysisKey(
  args: InferRequestType<typeof client.keyframe_analysis.$get>,
) {
  return ['keyframe_analysis', '/keyframe_analysis', args] as const
}

export function useGetKeyframeAnalysis<TError = unknown>(
  args: InferRequestType<typeof client.keyframe_analysis.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keyframe_analysis.$get>>>>
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
        ? getGetKeyframeAnalysisKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keyframe_analysis.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.keyframe_analysis.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKeyframeAnalysis<TError = unknown>(
  args: InferRequestType<typeof client.keyframe_analysis.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keyframe_analysis.$get>>>>
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
        ? getGetKeyframeAnalysisKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keyframe_analysis.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.keyframe_analysis.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFfprobeSnapshotKey(
  args: InferRequestType<typeof client.ffprobe.snapshot.$get>,
) {
  return ['ffprobe', '/ffprobe/snapshot', args] as const
}

export function useGetFfprobeSnapshot<TError = unknown>(
  args: InferRequestType<typeof client.ffprobe.snapshot.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ffprobe.snapshot.$get>>>>
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
        ? getGetFfprobeSnapshotKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ffprobe.snapshot.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ffprobe.snapshot.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFfprobeSnapshot<TError = unknown>(
  args: InferRequestType<typeof client.ffprobe.snapshot.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ffprobe.snapshot.$get>>>>
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
        ? getGetFfprobeSnapshotKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ffprobe.snapshot.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ffprobe.snapshot.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReolinkDetectKey(args: InferRequestType<typeof client.reolink.detect.$get>) {
  return ['reolink', '/reolink/detect', args] as const
}

export function useGetReolinkDetect<TError = unknown>(
  args: InferRequestType<typeof client.reolink.detect.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reolink.detect.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReolinkDetectKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reolink.detect.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reolink.detect.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReolinkDetect<TError = unknown>(
  args: InferRequestType<typeof client.reolink.detect.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reolink.detect.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReolinkDetectKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reolink.detect.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reolink.detect.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOnvifProbeKey(args: InferRequestType<typeof client.onvif.probe.$get>) {
  return ['onvif', '/onvif/probe', args] as const
}

export function useGetOnvifProbe<TError = unknown>(
  args: InferRequestType<typeof client.onvif.probe.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.onvif.probe.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOnvifProbeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.onvif.probe.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.onvif.probe.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOnvifProbe<TError = unknown>(
  args: InferRequestType<typeof client.onvif.probe.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.onvif.probe.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOnvifProbeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.onvif.probe.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.onvif.probe.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteCamerasCameraNameKey() {
  return ['cameras', '/cameras/:camera_name', 'DELETE'] as const
}

export function useDeleteCamerasCameraName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cameras)[':camera_name']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cameras)[':camera_name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCamerasCameraNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.cameras)[':camera_name']['$delete']> },
      ) => parseResponse(client.cameras[':camera_name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutCameraCameraNameSetFeatureSubCommandKey() {
  return ['camera', '/camera/:camera_name/set/:feature/:sub_command', 'PUT'] as const
}

export function usePutCameraCameraNameSetFeatureSubCommand<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.camera)[':camera_name']['set'][':feature'][':sub_command']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCameraCameraNameSetFeatureSubCommandKey()
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
            (typeof client.camera)[':camera_name']['set'][':feature'][':sub_command']['$put']
          >
        },
      ) =>
        parseResponse(
          client.camera[':camera_name'].set[':feature'][':sub_command'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutCameraCameraNameSetFeatureKey() {
  return ['camera', '/camera/:camera_name/set/:feature', 'PUT'] as const
}

export function usePutCameraCameraNameSetFeature<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.camera)[':camera_name']['set'][':feature']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.camera)[':camera_name']['set'][':feature']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCameraCameraNameSetFeatureKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.camera)[':camera_name']['set'][':feature']['$put']>
        },
      ) => parseResponse(client.camera[':camera_name'].set[':feature'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetChatToolsKey() {
  return ['chat', '/chat/tools'] as const
}

export function useGetChatTools<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.tools.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChatToolsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.tools.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.chat.tools.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChatTools<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.tools.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChatToolsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.tools.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.chat.tools.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostChatExecuteKey() {
  return ['chat', '/chat/execute', 'POST'] as const
}

export function usePostChatExecute<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.execute.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.chat.execute.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChatExecuteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.chat.execute.$post> }) =>
        parseResponse(client.chat.execute.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostChatCompletionKey() {
  return ['chat', '/chat/completion', 'POST'] as const
}

export function usePostChatCompletion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chat.completion.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.chat.completion.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChatCompletionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.chat.completion.$post> }) =>
        parseResponse(client.chat.completion.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVlmMonitorKey() {
  return ['vlm', '/vlm/monitor'] as const
}

export function useGetVlmMonitor<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vlm.monitor.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVlmMonitorKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vlm.monitor.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vlm.monitor.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVlmMonitor<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vlm.monitor.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVlmMonitorKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vlm.monitor.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vlm.monitor.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostVlmMonitorKey() {
  return ['vlm', '/vlm/monitor', 'POST'] as const
}

export function usePostVlmMonitor<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vlm.monitor.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.vlm.monitor.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVlmMonitorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.vlm.monitor.$post> }) =>
        parseResponse(client.vlm.monitor.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteVlmMonitorKey() {
  return ['vlm', '/vlm/monitor', 'DELETE'] as const
}

export function useDeleteVlmMonitor<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vlm.monitor.$delete>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVlmMonitorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.vlm.monitor.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFacesKey() {
  return ['faces', '/faces'] as const
}

export function useGetFaces<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.faces.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetFacesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.faces.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.faces.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFaces<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.faces.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetFacesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.faces.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.faces.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostFacesReprocessKey() {
  return ['faces', '/faces/reprocess', 'POST'] as const
}

export function usePostFacesReprocess<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.faces.reprocess.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.faces.reprocess.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFacesReprocessKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.faces.reprocess.$post> }) =>
        parseResponse(client.faces.reprocess.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFacesTrainNameClassifyKey() {
  return ['faces', '/faces/train/:name/classify', 'POST'] as const
}

export function usePostFacesTrainNameClassify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.faces.train)[':name']['classify']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.faces.train)[':name']['classify']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFacesTrainNameClassifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.faces.train)[':name']['classify']['$post']> },
      ) => parseResponse(client.faces.train[':name'].classify.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFacesNameCreateKey() {
  return ['faces', '/faces/:name/create', 'POST'] as const
}

export function usePostFacesNameCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.faces)[':name']['create']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.faces)[':name']['create']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFacesNameCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.faces)[':name']['create']['$post']> },
      ) => parseResponse(client.faces[':name'].create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFacesNameRegisterKey() {
  return ['faces', '/faces/:name/register', 'POST'] as const
}

export function usePostFacesNameRegister<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.faces)[':name']['register']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.faces)[':name']['register']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFacesNameRegisterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.faces)[':name']['register']['$post']> },
      ) => parseResponse(client.faces[':name'].register.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFacesRecognizeKey() {
  return ['faces', '/faces/recognize', 'POST'] as const
}

export function usePostFacesRecognize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.faces.recognize.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.faces.recognize.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFacesRecognizeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.faces.recognize.$post> }) =>
        parseResponse(client.faces.recognize.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFacesNameReclassifyKey() {
  return ['faces', '/faces/:name/reclassify', 'POST'] as const
}

export function usePostFacesNameReclassify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.faces)[':name']['reclassify']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.faces)[':name']['reclassify']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFacesNameReclassifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.faces)[':name']['reclassify']['$post']> },
      ) => parseResponse(client.faces[':name'].reclassify.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFacesNameDeleteKey() {
  return ['faces', '/faces/:name/delete', 'POST'] as const
}

export function usePostFacesNameDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.faces)[':name']['delete']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.faces)[':name']['delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFacesNameDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.faces)[':name']['delete']['$post']> },
      ) => parseResponse(client.faces[':name'].delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutFacesOldNameRenameKey() {
  return ['faces', '/faces/:old_name/rename', 'PUT'] as const
}

export function usePutFacesOldNameRename<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.faces)[':old_name']['rename']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.faces)[':old_name']['rename']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutFacesOldNameRenameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.faces)[':old_name']['rename']['$put']> },
      ) => parseResponse(client.faces[':old_name'].rename.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutLprReprocessKey() {
  return ['lpr', '/lpr/reprocess', 'PUT'] as const
}

export function usePutLprReprocess<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lpr.reprocess.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.lpr.reprocess.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutLprReprocessKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.lpr.reprocess.$put> }) =>
        parseResponse(client.lpr.reprocess.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutReindexKey() {
  return ['reindex', '/reindex', 'PUT'] as const
}

export function usePutReindex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reindex.$put>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutReindexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.reindex.$put(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutAudioTranscribeKey() {
  return ['audio', '/audio/transcribe', 'PUT'] as const
}

export function usePutAudioTranscribe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audio.transcribe.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.audio.transcribe.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAudioTranscribeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.audio.transcribe.$put> }) =>
        parseResponse(client.audio.transcribe.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetClassificationNameDatasetKey(
  args: InferRequestType<(typeof client.classification)[':name']['dataset']['$get']>,
) {
  return ['classification', '/classification/:name/dataset', args] as const
}

export function useGetClassificationNameDataset<TError = unknown>(
  args: InferRequestType<(typeof client.classification)[':name']['dataset']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.classification)[':name']['dataset']['$get']>>
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
        ? getGetClassificationNameDatasetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.classification)[':name']['dataset']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.classification[':name'].dataset.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClassificationNameDataset<TError = unknown>(
  args: InferRequestType<(typeof client.classification)[':name']['dataset']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.classification)[':name']['dataset']['$get']>>
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
        ? getGetClassificationNameDatasetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.classification)[':name']['dataset']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.classification[':name'].dataset.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetClassificationAttributesKey(
  args: InferRequestType<typeof client.classification.attributes.$get>,
) {
  return ['classification', '/classification/attributes', args] as const
}

export function useGetClassificationAttributes<TError = unknown>(
  args: InferRequestType<typeof client.classification.attributes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.classification.attributes.$get>>>
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
        ? getGetClassificationAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.classification.attributes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.classification.attributes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClassificationAttributes<TError = unknown>(
  args: InferRequestType<typeof client.classification.attributes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.classification.attributes.$get>>>
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
        ? getGetClassificationAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.classification.attributes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.classification.attributes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetClassificationNameTrainKey(
  args: InferRequestType<(typeof client.classification)[':name']['train']['$get']>,
) {
  return ['classification', '/classification/:name/train', args] as const
}

export function useGetClassificationNameTrain<TError = unknown>(
  args: InferRequestType<(typeof client.classification)[':name']['train']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.classification)[':name']['train']['$get']>>
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
        ? getGetClassificationNameTrainKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.classification)[':name']['train']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.classification[':name'].train.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClassificationNameTrain<TError = unknown>(
  args: InferRequestType<(typeof client.classification)[':name']['train']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.classification)[':name']['train']['$get']>>
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
        ? getGetClassificationNameTrainKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.classification)[':name']['train']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.classification[':name'].train.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostClassificationNameTrainKey() {
  return ['classification', '/classification/:name/train', 'POST'] as const
}

export function usePostClassificationNameTrain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.classification)[':name']['train']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.classification)[':name']['train']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostClassificationNameTrainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.classification)[':name']['train']['$post']> },
      ) => parseResponse(client.classification[':name'].train.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostClassificationNameDatasetCategoryDeleteKey() {
  return ['classification', '/classification/:name/dataset/:category/delete', 'POST'] as const
}

export function usePostClassificationNameDatasetCategoryDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.classification)[':name']['dataset'][':category']['delete']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostClassificationNameDatasetCategoryDeleteKey()
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
            (typeof client.classification)[':name']['dataset'][':category']['delete']['$post']
          >
        },
      ) =>
        parseResponse(
          client.classification[':name'].dataset[':category'].delete.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostClassificationNameDatasetCategoryReclassifyKey() {
  return ['classification', '/classification/:name/dataset/:category/reclassify', 'POST'] as const
}

export function usePostClassificationNameDatasetCategoryReclassify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.classification)[':name']['dataset'][':category']['reclassify']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostClassificationNameDatasetCategoryReclassifyKey()
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
            (typeof client.classification)[':name']['dataset'][':category']['reclassify']['$post']
          >
        },
      ) =>
        parseResponse(
          client.classification[':name'].dataset[':category'].reclassify.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutClassificationNameDatasetOldCategoryRenameKey() {
  return ['classification', '/classification/:name/dataset/:old_category/rename', 'PUT'] as const
}

export function usePutClassificationNameDatasetOldCategoryRename<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.classification)[':name']['dataset'][':old_category']['rename']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutClassificationNameDatasetOldCategoryRenameKey()
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
            (typeof client.classification)[':name']['dataset'][':old_category']['rename']['$put']
          >
        },
      ) =>
        parseResponse(
          client.classification[':name'].dataset[':old_category'].rename.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostClassificationNameDatasetCategorizeKey() {
  return ['classification', '/classification/:name/dataset/categorize', 'POST'] as const
}

export function usePostClassificationNameDatasetCategorize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.classification)[':name']['dataset']['categorize']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostClassificationNameDatasetCategorizeKey()
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
            (typeof client.classification)[':name']['dataset']['categorize']['$post']
          >
        },
      ) =>
        parseResponse(client.classification[':name'].dataset.categorize.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostClassificationNameDatasetCategoryCreateKey() {
  return ['classification', '/classification/:name/dataset/:category/create', 'POST'] as const
}

export function usePostClassificationNameDatasetCategoryCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.classification)[':name']['dataset'][':category']['create']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostClassificationNameDatasetCategoryCreateKey()
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
            (typeof client.classification)[':name']['dataset'][':category']['create']['$post']
          >
        },
      ) =>
        parseResponse(
          client.classification[':name'].dataset[':category'].create.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostClassificationNameTrainDeleteKey() {
  return ['classification', '/classification/:name/train/delete', 'POST'] as const
}

export function usePostClassificationNameTrainDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.classification)[':name']['train']['delete']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.classification)[':name']['train']['delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostClassificationNameTrainDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.classification)[':name']['train']['delete']['$post']>
        },
      ) => parseResponse(client.classification[':name'].train.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostClassificationGenerateExamplesStateKey() {
  return ['classification', '/classification/generate_examples/state', 'POST'] as const
}

export function usePostClassificationGenerateExamplesState<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.classification.generate_examples.state.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.classification.generate_examples.state.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostClassificationGenerateExamplesStateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.classification.generate_examples.state.$post> },
      ) => parseResponse(client.classification.generate_examples.state.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostClassificationGenerateExamplesObjectKey() {
  return ['classification', '/classification/generate_examples/object', 'POST'] as const
}

export function usePostClassificationGenerateExamplesObject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.classification.generate_examples.object.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.classification.generate_examples.object.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostClassificationGenerateExamplesObjectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.classification.generate_examples.object.$post> },
      ) => parseResponse(client.classification.generate_examples.object.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteClassificationNameKey() {
  return ['classification', '/classification/:name', 'DELETE'] as const
}

export function useDeleteClassificationName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.classification)[':name']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.classification)[':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteClassificationNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.classification)[':name']['$delete']> },
      ) => parseResponse(client.classification[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetReviewKey(args: InferRequestType<typeof client.review.$get>) {
  return ['review', '/review', args] as const
}

export function useGetReview<TError = unknown>(
  args: InferRequestType<typeof client.review.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.review.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReviewKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.review.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.review.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetReview<TError = unknown>(
  args: InferRequestType<typeof client.review.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.review.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReviewKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.review.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.review.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetReviewIdsKey(args: InferRequestType<typeof client.review_ids.$get>) {
  return ['review_ids', '/review_ids', args] as const
}

export function useGetReviewIds<TError = unknown>(
  args: InferRequestType<typeof client.review_ids.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.review_ids.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReviewIdsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.review_ids.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.review_ids.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReviewIds<TError = unknown>(
  args: InferRequestType<typeof client.review_ids.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.review_ids.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReviewIdsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.review_ids.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.review_ids.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReviewSummaryKey(args: InferRequestType<typeof client.review.summary.$get>) {
  return ['review', '/review/summary', args] as const
}

export function useGetReviewSummary<TError = unknown>(
  args: InferRequestType<typeof client.review.summary.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.review.summary.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReviewSummaryKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.review.summary.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.review.summary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReviewSummary<TError = unknown>(
  args: InferRequestType<typeof client.review.summary.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.review.summary.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReviewSummaryKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.review.summary.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.review.summary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostReviewsViewedKey() {
  return ['reviews', '/reviews/viewed', 'POST'] as const
}

export function usePostReviewsViewed<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.viewed.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.reviews.viewed.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostReviewsViewedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.reviews.viewed.$post> }) =>
        parseResponse(client.reviews.viewed.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostReviewsDeleteKey() {
  return ['reviews', '/reviews/delete', 'POST'] as const
}

export function usePostReviewsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.delete.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.reviews.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostReviewsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.reviews.delete.$post> }) =>
        parseResponse(client.reviews.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetReviewActivityMotionKey(
  args: InferRequestType<typeof client.review.activity.motion.$get>,
) {
  return ['review', '/review/activity/motion', args] as const
}

export function useGetReviewActivityMotion<TError = unknown>(
  args: InferRequestType<typeof client.review.activity.motion.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.review.activity.motion.$get>>>
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
        ? getGetReviewActivityMotionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.review.activity.motion.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.review.activity.motion.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReviewActivityMotion<TError = unknown>(
  args: InferRequestType<typeof client.review.activity.motion.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.review.activity.motion.$get>>>
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
        ? getGetReviewActivityMotionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.review.activity.motion.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.review.activity.motion.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReviewEventEventIdKey(
  args: InferRequestType<(typeof client.review.event)[':event_id']['$get']>,
) {
  return ['review', '/review/event/:event_id', args] as const
}

export function useGetReviewEventEventId<TError = unknown>(
  args: InferRequestType<(typeof client.review.event)[':event_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.review.event)[':event_id']['$get']>>
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
        ? getGetReviewEventEventIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.review.event)[':event_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.review.event[':event_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReviewEventEventId<TError = unknown>(
  args: InferRequestType<(typeof client.review.event)[':event_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.review.event)[':event_id']['$get']>>
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
        ? getGetReviewEventEventIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.review.event)[':event_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.review.event[':event_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReviewReviewIdKey(
  args: InferRequestType<(typeof client.review)[':review_id']['$get']>,
) {
  return ['review', '/review/:review_id', args] as const
}

export function useGetReviewReviewId<TError = unknown>(
  args: InferRequestType<(typeof client.review)[':review_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.review)[':review_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetReviewReviewIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.review)[':review_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.review[':review_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReviewReviewId<TError = unknown>(
  args: InferRequestType<(typeof client.review)[':review_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.review)[':review_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetReviewReviewIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.review)[':review_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.review[':review_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutReviewReviewIdRegenerateDescriptionKey() {
  return ['review', '/review/:review_id/regenerate_description', 'PUT'] as const
}

export function usePutReviewReviewIdRegenerateDescription<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.review)[':review_id']['regenerate_description']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutReviewReviewIdRegenerateDescriptionKey()
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
            (typeof client.review)[':review_id']['regenerate_description']['$put']
          >
        },
      ) =>
        parseResponse(client.review[':review_id'].regenerate_description.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteReviewReviewIdViewedKey() {
  return ['review', '/review/:review_id/viewed', 'DELETE'] as const
}

export function useDeleteReviewReviewIdViewed<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.review)[':review_id']['viewed']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.review)[':review_id']['viewed']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteReviewReviewIdViewedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.review)[':review_id']['viewed']['$delete']> },
      ) => parseResponse(client.review[':review_id'].viewed.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostReviewSummarizeStartStartTsEndEndTsKey() {
  return ['review', '/review/summarize/start/:start_ts/end/:end_ts', 'POST'] as const
}

export function usePostReviewSummarizeStartStartTsEndEndTs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.review.summarize.start)[':start_ts']['end'][':end_ts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostReviewSummarizeStartStartTsEndEndTsKey()
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
            (typeof client.review.summarize.start)[':start_ts']['end'][':end_ts']['$post']
          >
        },
      ) =>
        parseResponse(
          client.review.summarize.start[':start_ts'].end[':end_ts'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetKey() {
  return ['', '/'] as const
}

export function useGet<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetConfigSchemaJsonKey() {
  return ['config', '/config/schema.json'] as const
}

export function useGetConfigSchemaJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.config)['schema.json']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConfigSchemaJsonKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.config)['schema.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.config['schema.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConfigSchemaJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.config)['schema.json']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConfigSchemaJsonKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.config)['schema.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.config['schema.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVersionKey() {
  return ['version', '/version'] as const
}

export function useGetVersion<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVersion<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatsKey() {
  return ['stats', '/stats'] as const
}

export function useGetStats<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetStatsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stats.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStats<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetStatsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stats.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStatsHistoryKey(args: InferRequestType<typeof client.stats.history.$get>) {
  return ['stats', '/stats/history', args] as const
}

export function useGetStatsHistory<TError = unknown>(
  args: InferRequestType<typeof client.stats.history.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.history.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatsHistoryKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.history.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stats.history.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatsHistory<TError = unknown>(
  args: InferRequestType<typeof client.stats.history.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.history.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatsHistoryKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.history.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.stats.history.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMetricsKey() {
  return ['metrics', '/metrics'] as const
}

export function useGetMetrics<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMetricsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetrics<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMetricsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGenaiModelsKey() {
  return ['genai', '/genai/models'] as const
}

export function useGetGenaiModels<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genai.models.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGenaiModelsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genai.models.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.genai.models.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGenaiModels<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genai.models.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGenaiModelsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genai.models.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.genai.models.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGenaiRolesKey() {
  return ['genai', '/genai/roles'] as const
}

export function useGetGenaiRoles<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genai.roles.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGenaiRolesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genai.roles.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.genai.roles.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGenaiRoles<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genai.roles.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGenaiRolesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genai.roles.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.genai.roles.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGenaiProbeKey() {
  return ['genai', '/genai/probe', 'POST'] as const
}

export function usePostGenaiProbe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.genai.probe.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.genai.probe.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGenaiProbeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.genai.probe.$post> }) =>
        parseResponse(client.genai.probe.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConfigKey() {
  return ['config', '/config'] as const
}

export function useGetConfig<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConfigKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.config.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConfig<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConfigKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.config.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProfilesKey() {
  return ['profiles', '/profiles'] as const
}

export function useGetProfiles<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profiles.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProfilesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profiles.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.profiles.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProfiles<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profiles.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProfilesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profiles.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.profiles.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProfileActiveKey() {
  return ['profile', '/profile/active'] as const
}

export function useGetProfileActive<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.active.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProfileActiveKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.active.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.profile.active.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProfileActive<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.active.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProfileActiveKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profile.active.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.profile.active.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFfmpegPresetsKey() {
  return ['ffmpeg', '/ffmpeg/presets'] as const
}

export function useGetFfmpegPresets<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ffmpeg.presets.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFfmpegPresetsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ffmpeg.presets.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ffmpeg.presets.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFfmpegPresets<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ffmpeg.presets.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFfmpegPresetsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ffmpeg.presets.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ffmpeg.presets.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetConfigRawPathsKey() {
  return ['config', '/config/raw_paths'] as const
}

export function useGetConfigRawPaths<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.raw_paths.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConfigRawPathsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.raw_paths.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.config.raw_paths.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConfigRawPaths<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.raw_paths.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConfigRawPathsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.raw_paths.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.config.raw_paths.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetConfigRawKey() {
  return ['config', '/config/raw'] as const
}

export function useGetConfigRaw<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.raw.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConfigRawKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.raw.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.config.raw.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConfigRaw<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.raw.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConfigRawKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.raw.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.config.raw.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostConfigSaveKey() {
  return ['config', '/config/save', 'POST'] as const
}

export function usePostConfigSave<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.save.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.config.save.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConfigSaveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.config.save.$post> }) =>
        parseResponse(client.config.save.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutConfigSetKey() {
  return ['config', '/config/set', 'PUT'] as const
}

export function usePutConfigSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.set.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.config.set.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutConfigSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.config.set.$put> }) =>
        parseResponse(client.config.set.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVainfoKey() {
  return ['vainfo', '/vainfo'] as const
}

export function useGetVainfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vainfo.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVainfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vainfo.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vainfo.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVainfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vainfo.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVainfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vainfo.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vainfo.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNvinfoKey() {
  return ['nvinfo', '/nvinfo'] as const
}

export function useGetNvinfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nvinfo.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNvinfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nvinfo.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nvinfo.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNvinfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nvinfo.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNvinfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nvinfo.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nvinfo.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLogsServiceKey(
  args: InferRequestType<(typeof client.logs)[':service']['$get']>,
) {
  return ['logs', '/logs/:service', args] as const
}

export function useGetLogsService<TError = unknown>(
  args: InferRequestType<(typeof client.logs)[':service']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':service']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetLogsServiceKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':service']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.logs[':service'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLogsService<TError = unknown>(
  args: InferRequestType<(typeof client.logs)[':service']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':service']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetLogsServiceKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':service']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.logs[':service'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRestartKey() {
  return ['restart', '/restart', 'POST'] as const
}

export function usePostRestart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.restart.$post>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRestartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.restart.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMediaSyncKey() {
  return ['media', '/media/sync', 'POST'] as const
}

export function usePostMediaSync<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media.sync.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.media.sync.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMediaSyncKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.media.sync.$post> }) =>
        parseResponse(client.media.sync.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMediaSyncCurrentKey() {
  return ['media', '/media/sync/current'] as const
}

export function useGetMediaSyncCurrent<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media.sync.current.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMediaSyncCurrentKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media.sync.current.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.media.sync.current.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMediaSyncCurrent<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media.sync.current.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMediaSyncCurrentKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media.sync.current.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.media.sync.current.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMediaSyncStatusJobIdKey(
  args: InferRequestType<(typeof client.media.sync.status)[':job_id']['$get']>,
) {
  return ['media', '/media/sync/status/:job_id', args] as const
}

export function useGetMediaSyncStatusJobId<TError = unknown>(
  args: InferRequestType<(typeof client.media.sync.status)[':job_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.media.sync.status)[':job_id']['$get']>>
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
        ? getGetMediaSyncStatusJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.media.sync.status)[':job_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.media.sync.status[':job_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMediaSyncStatusJobId<TError = unknown>(
  args: InferRequestType<(typeof client.media.sync.status)[':job_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.media.sync.status)[':job_id']['$get']>>
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
        ? getGetMediaSyncStatusJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.media.sync.status)[':job_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.media.sync.status[':job_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLabelsKey(args: InferRequestType<typeof client.labels.$get>) {
  return ['labels', '/labels', args] as const
}

export function useGetLabels<TError = unknown>(
  args: InferRequestType<typeof client.labels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLabelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.labels.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetLabels<TError = unknown>(
  args: InferRequestType<typeof client.labels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLabelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.labels.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetSubLabelsKey(args: InferRequestType<typeof client.sub_labels.$get>) {
  return ['sub_labels', '/sub_labels', args] as const
}

export function useGetSubLabels<TError = unknown>(
  args: InferRequestType<typeof client.sub_labels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sub_labels.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSubLabelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sub_labels.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sub_labels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubLabels<TError = unknown>(
  args: InferRequestType<typeof client.sub_labels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sub_labels.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSubLabelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sub_labels.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sub_labels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCategorizedObjectNamesKey(
  args: InferRequestType<typeof client.categorized_object_names.$get>,
) {
  return ['categorized_object_names', '/categorized_object_names', args] as const
}

export function useGetCategorizedObjectNames<TError = unknown>(
  args: InferRequestType<typeof client.categorized_object_names.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.categorized_object_names.$get>>>
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
        ? getGetCategorizedObjectNamesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.categorized_object_names.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.categorized_object_names.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCategorizedObjectNames<TError = unknown>(
  args: InferRequestType<typeof client.categorized_object_names.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.categorized_object_names.$get>>>
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
        ? getGetCategorizedObjectNamesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.categorized_object_names.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.categorized_object_names.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAudioLabelsKey() {
  return ['audio_labels', '/audio_labels'] as const
}

export function useGetAudioLabels<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audio_labels.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAudioLabelsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audio_labels.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.audio_labels.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAudioLabels<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audio_labels.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAudioLabelsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audio_labels.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.audio_labels.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPlusModelsKey(args: InferRequestType<typeof client.plus.models.$get>) {
  return ['plus', '/plus/models', args] as const
}

export function useGetPlusModels<TError = unknown>(
  args: InferRequestType<typeof client.plus.models.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plus.models.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPlusModelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plus.models.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.plus.models.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlusModels<TError = unknown>(
  args: InferRequestType<typeof client.plus.models.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plus.models.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPlusModelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plus.models.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.plus.models.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPlusValidateKey() {
  return ['plus', '/plus/validate', 'POST'] as const
}

export function usePostPlusValidate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plus.validate.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPlusValidateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.plus.validate.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRecognizedLicensePlatesKey(
  args: InferRequestType<typeof client.recognized_license_plates.$get>,
) {
  return ['recognized_license_plates', '/recognized_license_plates', args] as const
}

export function useGetRecognizedLicensePlates<TError = unknown>(
  args: InferRequestType<typeof client.recognized_license_plates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recognized_license_plates.$get>>>
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
        ? getGetRecognizedLicensePlatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recognized_license_plates.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recognized_license_plates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecognizedLicensePlates<TError = unknown>(
  args: InferRequestType<typeof client.recognized_license_plates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recognized_license_plates.$get>>>
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
        ? getGetRecognizedLicensePlatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recognized_license_plates.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recognized_license_plates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTimelineKey(args: InferRequestType<typeof client.timeline.$get>) {
  return ['timeline', '/timeline', args] as const
}

export function useGetTimeline<TError = unknown>(
  args: InferRequestType<typeof client.timeline.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timeline.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTimelineKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timeline.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.timeline.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetTimeline<TError = unknown>(
  args: InferRequestType<typeof client.timeline.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timeline.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTimelineKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timeline.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.timeline.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetTimelineHourlyKey(
  args: InferRequestType<typeof client.timeline.hourly.$get>,
) {
  return ['timeline', '/timeline/hourly', args] as const
}

export function useGetTimelineHourly<TError = unknown>(
  args: InferRequestType<typeof client.timeline.hourly.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timeline.hourly.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTimelineHourlyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timeline.hourly.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.timeline.hourly.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTimelineHourly<TError = unknown>(
  args: InferRequestType<typeof client.timeline.hourly.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timeline.hourly.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTimelineHourlyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timeline.hourly.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.timeline.hourly.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPreviewCameraNameStartStartTsEndEndTsKey(
  args: InferRequestType<
    (typeof client.preview)[':camera_name']['start'][':start_ts']['end'][':end_ts']['$get']
  >,
) {
  return ['preview', '/preview/:camera_name/start/:start_ts/end/:end_ts', args] as const
}

export function useGetPreviewCameraNameStartStartTsEndEndTs<TError = unknown>(
  args: InferRequestType<
    (typeof client.preview)[':camera_name']['start'][':start_ts']['end'][':end_ts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetPreviewCameraNameStartStartTsEndEndTsKey(args)
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
                (typeof client.preview)[':camera_name']['start'][':start_ts']['end'][':end_ts']['$get']
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
          client.preview[':camera_name'].start[':start_ts'].end[':end_ts'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPreviewCameraNameStartStartTsEndEndTs<TError = unknown>(
  args: InferRequestType<
    (typeof client.preview)[':camera_name']['start'][':start_ts']['end'][':end_ts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetPreviewCameraNameStartStartTsEndEndTsKey(args)
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
                (typeof client.preview)[':camera_name']['start'][':start_ts']['end'][':end_ts']['$get']
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
          client.preview[':camera_name'].start[':start_ts'].end[':end_ts'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetPreviewYearMonthDayHourCameraNameTzNameKey(
  args: InferRequestType<
    (typeof client.preview)[':year_month'][':day'][':hour'][':camera_name'][':tz_name']['$get']
  >,
) {
  return ['preview', '/preview/:year_month/:day/:hour/:camera_name/:tz_name', args] as const
}

export function useGetPreviewYearMonthDayHourCameraNameTzName<TError = unknown>(
  args: InferRequestType<
    (typeof client.preview)[':year_month'][':day'][':hour'][':camera_name'][':tz_name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetPreviewYearMonthDayHourCameraNameTzNameKey(args)
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
                (typeof client.preview)[':year_month'][':day'][':hour'][':camera_name'][':tz_name']['$get']
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
          client.preview[':year_month'][':day'][':hour'][':camera_name'][':tz_name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPreviewYearMonthDayHourCameraNameTzName<TError = unknown>(
  args: InferRequestType<
    (typeof client.preview)[':year_month'][':day'][':hour'][':camera_name'][':tz_name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetPreviewYearMonthDayHourCameraNameTzNameKey(args)
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
                (typeof client.preview)[':year_month'][':day'][':hour'][':camera_name'][':tz_name']['$get']
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
          client.preview[':year_month'][':day'][':hour'][':camera_name'][':tz_name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetPreviewCameraNameStartStartTsEndEndTsFramesKey(
  args: InferRequestType<
    (typeof client.preview)[':camera_name']['start'][':start_ts']['end'][':end_ts']['frames']['$get']
  >,
) {
  return ['preview', '/preview/:camera_name/start/:start_ts/end/:end_ts/frames', args] as const
}

export function useGetPreviewCameraNameStartStartTsEndEndTsFrames<TError = unknown>(
  args: InferRequestType<
    (typeof client.preview)[':camera_name']['start'][':start_ts']['end'][':end_ts']['frames']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetPreviewCameraNameStartStartTsEndEndTsFramesKey(args)
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
                (typeof client.preview)[':camera_name']['start'][':start_ts']['end'][':end_ts']['frames']['$get']
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
          client.preview[':camera_name'].start[':start_ts'].end[':end_ts'].frames.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPreviewCameraNameStartStartTsEndEndTsFrames<TError = unknown>(
  args: InferRequestType<
    (typeof client.preview)[':camera_name']['start'][':start_ts']['end'][':end_ts']['frames']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetPreviewCameraNameStartStartTsEndEndTsFramesKey(args)
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
                (typeof client.preview)[':camera_name']['start'][':start_ts']['end'][':end_ts']['frames']['$get']
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
          client.preview[':camera_name'].start[':start_ts'].end[':end_ts'].frames.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNotificationsPubkeyKey() {
  return ['notifications', '/notifications/pubkey'] as const
}

export function useGetNotificationsPubkey<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.pubkey.$get>>>>
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
        ? getGetNotificationsPubkeyKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.notifications.pubkey.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notifications.pubkey.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationsPubkey<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.pubkey.$get>>>>
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
        ? getGetNotificationsPubkeyKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.notifications.pubkey.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notifications.pubkey.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNotificationsRegisterKey() {
  return ['notifications', '/notifications/register', 'POST'] as const
}

export function usePostNotificationsRegister<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.notifications.register.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.notifications.register.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNotificationsRegisterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.notifications.register.$post> },
      ) => parseResponse(client.notifications.register.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetExportsKey(args: InferRequestType<typeof client.exports.$get>) {
  return ['exports', '/exports', args] as const
}

export function useGetExports<TError = unknown>(
  args: InferRequestType<typeof client.exports.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetExportsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.exports.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetExports<TError = unknown>(
  args: InferRequestType<typeof client.exports.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetExportsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.exports.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetCasesKey() {
  return ['cases', '/cases'] as const
}

export function useGetCases<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cases.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetCasesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cases.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cases.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCases<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cases.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetCasesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cases.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cases.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCasesKey() {
  return ['cases', '/cases', 'POST'] as const
}

export function usePostCases<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cases.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.cases.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCasesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.cases.$post> }) =>
        parseResponse(client.cases.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCasesCaseIdKey(
  args: InferRequestType<(typeof client.cases)[':case_id']['$get']>,
) {
  return ['cases', '/cases/:case_id', args] as const
}

export function useGetCasesCaseId<TError = unknown>(
  args: InferRequestType<(typeof client.cases)[':case_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cases)[':case_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetCasesCaseIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cases)[':case_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cases[':case_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCasesCaseId<TError = unknown>(
  args: InferRequestType<(typeof client.cases)[':case_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cases)[':case_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetCasesCaseIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cases)[':case_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cases[':case_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteCasesCaseIdKey() {
  return ['cases', '/cases/:case_id', 'DELETE'] as const
}

export function useDeleteCasesCaseId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.cases)[':case_id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cases)[':case_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCasesCaseIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.cases)[':case_id']['$delete']> },
      ) => parseResponse(client.cases[':case_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchCasesCaseIdKey() {
  return ['cases', '/cases/:case_id', 'PATCH'] as const
}

export function usePatchCasesCaseId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.cases)[':case_id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cases)[':case_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCasesCaseIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.cases)[':case_id']['$patch']> },
      ) => parseResponse(client.cases[':case_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCasesCaseIdDownloadKey(
  args: InferRequestType<(typeof client.cases)[':case_id']['download']['$get']>,
) {
  return ['cases', '/cases/:case_id/download', args] as const
}

export function useGetCasesCaseIdDownload<TError = unknown>(
  args: InferRequestType<(typeof client.cases)[':case_id']['download']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cases)[':case_id']['download']['$get']>>
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
        ? getGetCasesCaseIdDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cases)[':case_id']['download']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cases[':case_id'].download.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCasesCaseIdDownload<TError = unknown>(
  args: InferRequestType<(typeof client.cases)[':case_id']['download']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cases)[':case_id']['download']['$get']>>
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
        ? getGetCasesCaseIdDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cases)[':case_id']['download']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cases[':case_id'].download.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetJobsExportKey() {
  return ['jobs', '/jobs/export'] as const
}

export function useGetJobsExport<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.export.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetJobsExportKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.export.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.jobs.export.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJobsExport<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.export.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetJobsExportKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.export.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.jobs.export.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetJobsExportExportIdKey(
  args: InferRequestType<(typeof client.jobs.export)[':export_id']['$get']>,
) {
  return ['jobs', '/jobs/export/:export_id', args] as const
}

export function useGetJobsExportExportId<TError = unknown>(
  args: InferRequestType<(typeof client.jobs.export)[':export_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.jobs.export)[':export_id']['$get']>>
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
        ? getGetJobsExportExportIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.jobs.export)[':export_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.jobs.export[':export_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJobsExportExportId<TError = unknown>(
  args: InferRequestType<(typeof client.jobs.export)[':export_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.jobs.export)[':export_id']['$get']>>
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
        ? getGetJobsExportExportIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.jobs.export)[':export_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.jobs.export[':export_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostExportsBatchKey() {
  return ['exports', '/exports/batch', 'POST'] as const
}

export function usePostExportsBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.batch.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.exports.batch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostExportsBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.exports.batch.$post> }) =>
        parseResponse(client.exports.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostExportCameraNameStartStartTimeEndEndTimeKey() {
  return ['export', '/export/:camera_name/start/:start_time/end/:end_time', 'POST'] as const
}

export function usePostExportCameraNameStartStartTimeEndEndTime<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.export)[':camera_name']['start'][':start_time']['end'][':end_time']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostExportCameraNameStartStartTimeEndEndTimeKey()
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
            (typeof client.export)[':camera_name']['start'][':start_time']['end'][':end_time']['$post']
          >
        },
      ) =>
        parseResponse(
          client.export[':camera_name'].start[':start_time'].end[':end_time'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchExportEventIdRenameKey() {
  return ['export', '/export/:event_id/rename', 'PATCH'] as const
}

export function usePatchExportEventIdRename<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.export)[':event_id']['rename']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.export)[':event_id']['rename']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchExportEventIdRenameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.export)[':event_id']['rename']['$patch']> },
      ) => parseResponse(client.export[':event_id'].rename.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostExportCustomCameraNameStartStartTimeEndEndTimeKey() {
  return ['export', '/export/custom/:camera_name/start/:start_time/end/:end_time', 'POST'] as const
}

export function usePostExportCustomCameraNameStartStartTimeEndEndTime<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.export.custom)[':camera_name']['start'][':start_time']['end'][':end_time']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostExportCustomCameraNameStartStartTimeEndEndTimeKey()
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
            (typeof client.export.custom)[':camera_name']['start'][':start_time']['end'][':end_time']['$post']
          >
        },
      ) =>
        parseResponse(
          client.export.custom[':camera_name'].start[':start_time'].end[':end_time'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetExportsExportIdKey(
  args: InferRequestType<(typeof client.exports)[':export_id']['$get']>,
) {
  return ['exports', '/exports/:export_id', args] as const
}

export function useGetExportsExportId<TError = unknown>(
  args: InferRequestType<(typeof client.exports)[':export_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.exports)[':export_id']['$get']>>>
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
        ? getGetExportsExportIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.exports)[':export_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.exports[':export_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExportsExportId<TError = unknown>(
  args: InferRequestType<(typeof client.exports)[':export_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.exports)[':export_id']['$get']>>>
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
        ? getGetExportsExportIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.exports)[':export_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.exports[':export_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostExportsDeleteKey() {
  return ['exports', '/exports/delete', 'POST'] as const
}

export function usePostExportsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.delete.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.exports.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostExportsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.exports.delete.$post> }) =>
        parseResponse(client.exports.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostExportsReassignKey() {
  return ['exports', '/exports/reassign', 'POST'] as const
}

export function usePostExportsReassign<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.reassign.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.exports.reassign.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostExportsReassignKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.exports.reassign.$post> }) =>
        parseResponse(client.exports.reassign.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetHardwareProbeKey(args: InferRequestType<typeof client.hardware.probe.$get>) {
  return ['hardware', '/hardware/probe', args] as const
}

export function useGetHardwareProbe<TError = unknown>(
  args: InferRequestType<typeof client.hardware.probe.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.probe.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHardwareProbeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.probe.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hardware.probe.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHardwareProbe<TError = unknown>(
  args: InferRequestType<typeof client.hardware.probe.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.probe.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHardwareProbeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.probe.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hardware.probe.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHardwareHwaccelKey(
  args: InferRequestType<typeof client.hardware.hwaccel.$get>,
) {
  return ['hardware', '/hardware/hwaccel', args] as const
}

export function useGetHardwareHwaccel<TError = unknown>(
  args: InferRequestType<typeof client.hardware.hwaccel.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.hwaccel.$get>>>>
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
        ? getGetHardwareHwaccelKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.hwaccel.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hardware.hwaccel.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHardwareHwaccel<TError = unknown>(
  args: InferRequestType<typeof client.hardware.hwaccel.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.hwaccel.$get>>>>
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
        ? getGetHardwareHwaccelKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hardware.hwaccel.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hardware.hwaccel.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNoticesKey(args: InferRequestType<typeof client.notices.$get>) {
  return ['notices', '/notices', args] as const
}

export function useGetNotices<TError = unknown>(
  args: InferRequestType<typeof client.notices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notices.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNoticesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notices.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.notices.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetNotices<TError = unknown>(
  args: InferRequestType<typeof client.notices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notices.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNoticesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notices.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.notices.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetNoticesStatsKey() {
  return ['notices', '/notices/stats'] as const
}

export function useGetNoticesStats<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notices.stats.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNoticesStatsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notices.stats.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notices.stats.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNoticesStats<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notices.stats.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNoticesStatsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notices.stats.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notices.stats.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNoticesMutedChecksKey() {
  return ['notices', '/notices/muted_checks'] as const
}

export function useGetNoticesMutedChecks<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notices.muted_checks.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNoticesMutedChecksKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.notices.muted_checks.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notices.muted_checks.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNoticesMutedChecks<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notices.muted_checks.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNoticesMutedChecksKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.notices.muted_checks.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notices.muted_checks.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteNoticesHiddenKey() {
  return ['notices', '/notices/hidden', 'DELETE'] as const
}

export function useDeleteNoticesHidden<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notices.hidden.$delete>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteNoticesHiddenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.notices.hidden.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostNoticesNoticeIdAcknowledgeKey() {
  return ['notices', '/notices/:notice_id/acknowledge', 'POST'] as const
}

export function usePostNoticesNoticeIdAcknowledge<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notices)[':notice_id']['acknowledge']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.notices)[':notice_id']['acknowledge']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNoticesNoticeIdAcknowledgeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.notices)[':notice_id']['acknowledge']['$post']> },
      ) => parseResponse(client.notices[':notice_id'].acknowledge.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostNoticesNoticeIdMuteKey() {
  return ['notices', '/notices/:notice_id/mute', 'POST'] as const
}

export function usePostNoticesNoticeIdMute<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notices)[':notice_id']['mute']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.notices)[':notice_id']['mute']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNoticesNoticeIdMuteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.notices)[':notice_id']['mute']['$post']> },
      ) => parseResponse(client.notices[':notice_id'].mute.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteNoticesNoticeIdHiddenKey() {
  return ['notices', '/notices/:notice_id/hidden', 'DELETE'] as const
}

export function useDeleteNoticesNoticeIdHidden<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notices)[':notice_id']['hidden']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.notices)[':notice_id']['hidden']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteNoticesNoticeIdHiddenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.notices)[':notice_id']['hidden']['$delete']> },
      ) => parseResponse(client.notices[':notice_id'].hidden.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEventsKey(args: InferRequestType<typeof client.events.$get>) {
  return ['events', '/events', args] as const
}

export function useGetEvents<TError = unknown>(
  args: InferRequestType<typeof client.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.events.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetEvents<TError = unknown>(
  args: InferRequestType<typeof client.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.events.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetEventsExploreKey(args: InferRequestType<typeof client.events.explore.$get>) {
  return ['events', '/events/explore', args] as const
}

export function useGetEventsExplore<TError = unknown>(
  args: InferRequestType<typeof client.events.explore.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.explore.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEventsExploreKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.explore.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events.explore.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventsExplore<TError = unknown>(
  args: InferRequestType<typeof client.events.explore.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.explore.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEventsExploreKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.explore.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events.explore.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEventIdsKey(args: InferRequestType<typeof client.event_ids.$get>) {
  return ['event_ids', '/event_ids', args] as const
}

export function useGetEventIds<TError = unknown>(
  args: InferRequestType<typeof client.event_ids.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event_ids.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEventIdsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event_ids.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.event_ids.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventIds<TError = unknown>(
  args: InferRequestType<typeof client.event_ids.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event_ids.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEventIdsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event_ids.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.event_ids.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEventsSearchKey(args: InferRequestType<typeof client.events.search.$get>) {
  return ['events', '/events/search', args] as const
}

export function useGetEventsSearch<TError = unknown>(
  args: InferRequestType<typeof client.events.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEventsSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventsSearch<TError = unknown>(
  args: InferRequestType<typeof client.events.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEventsSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEventsSummaryKey(args: InferRequestType<typeof client.events.summary.$get>) {
  return ['events', '/events/summary', args] as const
}

export function useGetEventsSummary<TError = unknown>(
  args: InferRequestType<typeof client.events.summary.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.summary.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEventsSummaryKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.summary.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events.summary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventsSummary<TError = unknown>(
  args: InferRequestType<typeof client.events.summary.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.summary.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEventsSummaryKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.summary.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events.summary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEventsEventIdKey(
  args: InferRequestType<(typeof client.events)[':event_id']['$get']>,
) {
  return ['events', '/events/:event_id', args] as const
}

export function useGetEventsEventId<TError = unknown>(
  args: InferRequestType<(typeof client.events)[':event_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':event_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetEventsEventIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':event_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events[':event_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventsEventId<TError = unknown>(
  args: InferRequestType<(typeof client.events)[':event_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':event_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetEventsEventIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':event_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events[':event_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteEventsEventIdKey() {
  return ['events', '/events/:event_id', 'DELETE'] as const
}

export function useDeleteEventsEventId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.events)[':event_id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.events)[':event_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEventsEventIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.events)[':event_id']['$delete']> },
      ) => parseResponse(client.events[':event_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEventsEventIdRetainKey() {
  return ['events', '/events/:event_id/retain', 'POST'] as const
}

export function usePostEventsEventIdRetain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.events)[':event_id']['retain']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.events)[':event_id']['retain']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEventsEventIdRetainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.events)[':event_id']['retain']['$post']> },
      ) => parseResponse(client.events[':event_id'].retain.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteEventsEventIdRetainKey() {
  return ['events', '/events/:event_id/retain', 'DELETE'] as const
}

export function useDeleteEventsEventIdRetain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.events)[':event_id']['retain']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.events)[':event_id']['retain']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEventsEventIdRetainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.events)[':event_id']['retain']['$delete']> },
      ) => parseResponse(client.events[':event_id'].retain.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEventsEventIdPlusKey() {
  return ['events', '/events/:event_id/plus', 'POST'] as const
}

export function usePostEventsEventIdPlus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.events)[':event_id']['plus']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.events)[':event_id']['plus']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEventsEventIdPlusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.events)[':event_id']['plus']['$post']> },
      ) => parseResponse(client.events[':event_id'].plus.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutEventsEventIdFalsePositiveKey() {
  return ['events', '/events/:event_id/false_positive', 'PUT'] as const
}

export function usePutEventsEventIdFalsePositive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.events)[':event_id']['false_positive']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.events)[':event_id']['false_positive']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEventsEventIdFalsePositiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.events)[':event_id']['false_positive']['$put']> },
      ) => parseResponse(client.events[':event_id'].false_positive.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEventsEventIdSubLabelKey() {
  return ['events', '/events/:event_id/sub_label', 'POST'] as const
}

export function usePostEventsEventIdSubLabel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.events)[':event_id']['sub_label']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.events)[':event_id']['sub_label']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEventsEventIdSubLabelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.events)[':event_id']['sub_label']['$post']> },
      ) => parseResponse(client.events[':event_id'].sub_label.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEventsEventIdRecognizedLicensePlateKey() {
  return ['events', '/events/:event_id/recognized_license_plate', 'POST'] as const
}

export function usePostEventsEventIdRecognizedLicensePlate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.events)[':event_id']['recognized_license_plate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEventsEventIdRecognizedLicensePlateKey()
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
            (typeof client.events)[':event_id']['recognized_license_plate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.events[':event_id'].recognized_license_plate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostEventsEventIdAttributesKey() {
  return ['events', '/events/:event_id/attributes', 'POST'] as const
}

export function usePostEventsEventIdAttributes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.events)[':event_id']['attributes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.events)[':event_id']['attributes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEventsEventIdAttributesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.events)[':event_id']['attributes']['$post']> },
      ) => parseResponse(client.events[':event_id'].attributes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEventsEventIdDescriptionKey() {
  return ['events', '/events/:event_id/description', 'POST'] as const
}

export function usePostEventsEventIdDescription<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.events)[':event_id']['description']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.events)[':event_id']['description']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEventsEventIdDescriptionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.events)[':event_id']['description']['$post']> },
      ) => parseResponse(client.events[':event_id'].description.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutEventsEventIdDescriptionRegenerateKey() {
  return ['events', '/events/:event_id/description/regenerate', 'PUT'] as const
}

export function usePutEventsEventIdDescriptionRegenerate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.events)[':event_id']['description']['regenerate']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEventsEventIdDescriptionRegenerateKey()
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
            (typeof client.events)[':event_id']['description']['regenerate']['$put']
          >
        },
      ) =>
        parseResponse(client.events[':event_id'].description.regenerate.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDescriptionGenerateKey() {
  return ['description', '/description/generate', 'POST'] as const
}

export function usePostDescriptionGenerate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.description.generate.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.description.generate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDescriptionGenerateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.description.generate.$post> },
      ) => parseResponse(client.description.generate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteEventsIndexKey() {
  return ['events', '/events/', 'DELETE'] as const
}

export function useDeleteEventsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.index.$delete>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.events.index.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEventsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.events.index.$delete> }) =>
        parseResponse(client.events.index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEventsCameraNameLabelCreateKey() {
  return ['events', '/events/:camera_name/:label/create', 'POST'] as const
}

export function usePostEventsCameraNameLabelCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.events)[':camera_name'][':label']['create']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.events)[':camera_name'][':label']['create']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEventsCameraNameLabelCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.events)[':camera_name'][':label']['create']['$post']>
        },
      ) => parseResponse(client.events[':camera_name'][':label'].create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutEventsEventIdEndKey() {
  return ['events', '/events/:event_id/end', 'PUT'] as const
}

export function usePutEventsEventIdEnd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.events)[':event_id']['end']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.events)[':event_id']['end']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEventsEventIdEndKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.events)[':event_id']['end']['$put']> },
      ) => parseResponse(client.events[':event_id'].end.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTriggerEmbeddingKey() {
  return ['trigger', '/trigger/embedding', 'POST'] as const
}

export function usePostTriggerEmbedding<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trigger.embedding.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.trigger.embedding.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTriggerEmbeddingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.trigger.embedding.$post> }) =>
        parseResponse(client.trigger.embedding.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutTriggerEmbeddingCameraNameNameKey() {
  return ['trigger', '/trigger/embedding/:camera_name/:name', 'PUT'] as const
}

export function usePutTriggerEmbeddingCameraNameName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.trigger.embedding)[':camera_name'][':name']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.trigger.embedding)[':camera_name'][':name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTriggerEmbeddingCameraNameNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.trigger.embedding)[':camera_name'][':name']['$put']>
        },
      ) =>
        parseResponse(client.trigger.embedding[':camera_name'][':name'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTriggerEmbeddingCameraNameNameKey() {
  return ['trigger', '/trigger/embedding/:camera_name/:name', 'DELETE'] as const
}

export function useDeleteTriggerEmbeddingCameraNameName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.trigger.embedding)[':camera_name'][':name']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.trigger.embedding)[':camera_name'][':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTriggerEmbeddingCameraNameNameKey()
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
            (typeof client.trigger.embedding)[':camera_name'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.trigger.embedding[':camera_name'][':name'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetTriggersStatusCameraNameKey(
  args: InferRequestType<(typeof client.triggers.status)[':camera_name']['$get']>,
) {
  return ['triggers', '/triggers/status/:camera_name', args] as const
}

export function useGetTriggersStatusCameraName<TError = unknown>(
  args: InferRequestType<(typeof client.triggers.status)[':camera_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.triggers.status)[':camera_name']['$get']>>
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
        ? getGetTriggersStatusCameraNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.triggers.status)[':camera_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.triggers.status[':camera_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTriggersStatusCameraName<TError = unknown>(
  args: InferRequestType<(typeof client.triggers.status)[':camera_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.triggers.status)[':camera_name']['$get']>>
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
        ? getGetTriggersStatusCameraNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.triggers.status)[':camera_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.triggers.status[':camera_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCameraNameKey(
  args: InferRequestType<(typeof client)[':camera_name']['$get']>,
) {
  return [':camera_name', '/:camera_name', args] as const
}

export function useGetCameraName<TError = unknown>(
  args: InferRequestType<(typeof client)[':camera_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':camera_name']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetCameraNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':camera_name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':camera_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCameraName<TError = unknown>(
  args: InferRequestType<(typeof client)[':camera_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':camera_name']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetCameraNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':camera_name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':camera_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCameraNamePtzInfoKey(
  args: InferRequestType<(typeof client)[':camera_name']['ptz']['info']['$get']>,
) {
  return [':camera_name', '/:camera_name/ptz/info', args] as const
}

export function useGetCameraNamePtzInfo<TError = unknown>(
  args: InferRequestType<(typeof client)[':camera_name']['ptz']['info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':camera_name']['ptz']['info']['$get']>>
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
        ? getGetCameraNamePtzInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':camera_name']['ptz']['info']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':camera_name'].ptz.info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCameraNamePtzInfo<TError = unknown>(
  args: InferRequestType<(typeof client)[':camera_name']['ptz']['info']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':camera_name']['ptz']['info']['$get']>>
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
        ? getGetCameraNamePtzInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':camera_name']['ptz']['info']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':camera_name'].ptz.info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCameraNameLatestExtensionKey(
  args: InferRequestType<(typeof client)[':camera_name']['latest.:extension']['$get']>,
) {
  return [':camera_name', '/:camera_name/latest.:extension', args] as const
}

export function useGetCameraNameLatestExtension<TError = unknown>(
  args: InferRequestType<(typeof client)[':camera_name']['latest.:extension']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':camera_name']['latest.:extension']['$get']>>
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
        ? getGetCameraNameLatestExtensionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':camera_name']['latest.:extension']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':camera_name']['latest.:extension'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCameraNameLatestExtension<TError = unknown>(
  args: InferRequestType<(typeof client)[':camera_name']['latest.:extension']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':camera_name']['latest.:extension']['$get']>>
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
        ? getGetCameraNameLatestExtensionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':camera_name']['latest.:extension']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':camera_name']['latest.:extension'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCameraNameRecordingsFrameTimeSnapshotFormatKey(
  args: InferRequestType<
    (typeof client)[':camera_name']['recordings'][':frame_time']['snapshot.:format']['$get']
  >,
) {
  return [':camera_name', '/:camera_name/recordings/:frame_time/snapshot.:format', args] as const
}

export function useGetCameraNameRecordingsFrameTimeSnapshotFormat<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':camera_name']['recordings'][':frame_time']['snapshot.:format']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCameraNameRecordingsFrameTimeSnapshotFormatKey(args)
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
                (typeof client)[':camera_name']['recordings'][':frame_time']['snapshot.:format']['$get']
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
          client[':camera_name'].recordings[':frame_time']['snapshot.:format'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCameraNameRecordingsFrameTimeSnapshotFormat<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':camera_name']['recordings'][':frame_time']['snapshot.:format']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCameraNameRecordingsFrameTimeSnapshotFormatKey(args)
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
                (typeof client)[':camera_name']['recordings'][':frame_time']['snapshot.:format']['$get']
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
          client[':camera_name'].recordings[':frame_time']['snapshot.:format'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostCameraNamePlusFrameTimeKey() {
  return [':camera_name', '/:camera_name/plus/:frame_time', 'POST'] as const
}

export function usePostCameraNamePlusFrameTime<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':camera_name']['plus'][':frame_time']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':camera_name']['plus'][':frame_time']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCameraNamePlusFrameTimeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':camera_name']['plus'][':frame_time']['$post']>
        },
      ) => parseResponse(client[':camera_name'].plus[':frame_time'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCameraNameStartStartTsEndEndTsClipMp4Key(
  args: InferRequestType<
    (typeof client)[':camera_name']['start'][':start_ts']['end'][':end_ts']['clip.mp4']['$get']
  >,
) {
  return [':camera_name', '/:camera_name/start/:start_ts/end/:end_ts/clip.mp4', args] as const
}

export function useGetCameraNameStartStartTsEndEndTsClipMp4<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':camera_name']['start'][':start_ts']['end'][':end_ts']['clip.mp4']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCameraNameStartStartTsEndEndTsClipMp4Key(args)
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
                (typeof client)[':camera_name']['start'][':start_ts']['end'][':end_ts']['clip.mp4']['$get']
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
          client[':camera_name'].start[':start_ts'].end[':end_ts']['clip.mp4'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCameraNameStartStartTsEndEndTsClipMp4<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':camera_name']['start'][':start_ts']['end'][':end_ts']['clip.mp4']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCameraNameStartStartTsEndEndTsClipMp4Key(args)
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
                (typeof client)[':camera_name']['start'][':start_ts']['end'][':end_ts']['clip.mp4']['$get']
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
          client[':camera_name'].start[':start_ts'].end[':end_ts']['clip.mp4'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetVodCameraNameStartStartTsEndEndTsKey(
  args: InferRequestType<
    (typeof client.vod)[':camera_name']['start'][':start_ts']['end'][':end_ts']['$get']
  >,
) {
  return ['vod', '/vod/:camera_name/start/:start_ts/end/:end_ts', args] as const
}

export function useGetVodCameraNameStartStartTsEndEndTs<TError = unknown>(
  args: InferRequestType<
    (typeof client.vod)[':camera_name']['start'][':start_ts']['end'][':end_ts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetVodCameraNameStartStartTsEndEndTsKey(args)
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
                (typeof client.vod)[':camera_name']['start'][':start_ts']['end'][':end_ts']['$get']
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
          client.vod[':camera_name'].start[':start_ts'].end[':end_ts'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVodCameraNameStartStartTsEndEndTs<TError = unknown>(
  args: InferRequestType<
    (typeof client.vod)[':camera_name']['start'][':start_ts']['end'][':end_ts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetVodCameraNameStartStartTsEndEndTsKey(args)
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
                (typeof client.vod)[':camera_name']['start'][':start_ts']['end'][':end_ts']['$get']
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
          client.vod[':camera_name'].start[':start_ts'].end[':end_ts'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetVodYearMonthDayHourCameraNameKey(
  args: InferRequestType<
    (typeof client.vod)[':year_month'][':day'][':hour'][':camera_name']['$get']
  >,
) {
  return ['vod', '/vod/:year_month/:day/:hour/:camera_name', args] as const
}

export function useGetVodYearMonthDayHourCameraName<TError = unknown>(
  args: InferRequestType<
    (typeof client.vod)[':year_month'][':day'][':hour'][':camera_name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetVodYearMonthDayHourCameraNameKey(args)
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
                (typeof client.vod)[':year_month'][':day'][':hour'][':camera_name']['$get']
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
          client.vod[':year_month'][':day'][':hour'][':camera_name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVodYearMonthDayHourCameraName<TError = unknown>(
  args: InferRequestType<
    (typeof client.vod)[':year_month'][':day'][':hour'][':camera_name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetVodYearMonthDayHourCameraNameKey(args)
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
                (typeof client.vod)[':year_month'][':day'][':hour'][':camera_name']['$get']
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
          client.vod[':year_month'][':day'][':hour'][':camera_name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetVodYearMonthDayHourCameraNameTzNameKey(
  args: InferRequestType<
    (typeof client.vod)[':year_month'][':day'][':hour'][':camera_name'][':tz_name']['$get']
  >,
) {
  return ['vod', '/vod/:year_month/:day/:hour/:camera_name/:tz_name', args] as const
}

export function useGetVodYearMonthDayHourCameraNameTzName<TError = unknown>(
  args: InferRequestType<
    (typeof client.vod)[':year_month'][':day'][':hour'][':camera_name'][':tz_name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetVodYearMonthDayHourCameraNameTzNameKey(args)
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
                (typeof client.vod)[':year_month'][':day'][':hour'][':camera_name'][':tz_name']['$get']
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
          client.vod[':year_month'][':day'][':hour'][':camera_name'][':tz_name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVodYearMonthDayHourCameraNameTzName<TError = unknown>(
  args: InferRequestType<
    (typeof client.vod)[':year_month'][':day'][':hour'][':camera_name'][':tz_name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetVodYearMonthDayHourCameraNameTzNameKey(args)
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
                (typeof client.vod)[':year_month'][':day'][':hour'][':camera_name'][':tz_name']['$get']
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
          client.vod[':year_month'][':day'][':hour'][':camera_name'][':tz_name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetVodEventEventIdKey(
  args: InferRequestType<(typeof client.vod.event)[':event_id']['$get']>,
) {
  return ['vod', '/vod/event/:event_id', args] as const
}

export function useGetVodEventEventId<TError = unknown>(
  args: InferRequestType<(typeof client.vod.event)[':event_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.vod.event)[':event_id']['$get']>>>
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
        ? getGetVodEventEventIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.vod.event)[':event_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vod.event[':event_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVodEventEventId<TError = unknown>(
  args: InferRequestType<(typeof client.vod.event)[':event_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.vod.event)[':event_id']['$get']>>>
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
        ? getGetVodEventEventIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.vod.event)[':event_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vod.event[':event_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVodClipCameraNameStartStartTsEndEndTsKey(
  args: InferRequestType<
    (typeof client.vod.clip)[':camera_name']['start'][':start_ts']['end'][':end_ts']['$get']
  >,
) {
  return ['vod', '/vod/clip/:camera_name/start/:start_ts/end/:end_ts', args] as const
}

export function useGetVodClipCameraNameStartStartTsEndEndTs<TError = unknown>(
  args: InferRequestType<
    (typeof client.vod.clip)[':camera_name']['start'][':start_ts']['end'][':end_ts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetVodClipCameraNameStartStartTsEndEndTsKey(args)
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
                (typeof client.vod.clip)[':camera_name']['start'][':start_ts']['end'][':end_ts']['$get']
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
          client.vod.clip[':camera_name'].start[':start_ts'].end[':end_ts'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVodClipCameraNameStartStartTsEndEndTs<TError = unknown>(
  args: InferRequestType<
    (typeof client.vod.clip)[':camera_name']['start'][':start_ts']['end'][':end_ts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetVodClipCameraNameStartStartTsEndEndTsKey(args)
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
                (typeof client.vod.clip)[':camera_name']['start'][':start_ts']['end'][':end_ts']['$get']
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
          client.vod.clip[':camera_name'].start[':start_ts'].end[':end_ts'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetVodCameraNameStreamStartStartTsEndEndTsKey(
  args: InferRequestType<
    (typeof client.vod)[':camera_name'][':stream']['start'][':start_ts']['end'][':end_ts']['$get']
  >,
) {
  return ['vod', '/vod/:camera_name/:stream/start/:start_ts/end/:end_ts', args] as const
}

export function useGetVodCameraNameStreamStartStartTsEndEndTs<TError = unknown>(
  args: InferRequestType<
    (typeof client.vod)[':camera_name'][':stream']['start'][':start_ts']['end'][':end_ts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetVodCameraNameStreamStartStartTsEndEndTsKey(args)
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
                (typeof client.vod)[':camera_name'][':stream']['start'][':start_ts']['end'][':end_ts']['$get']
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
          client.vod[':camera_name'][':stream'].start[':start_ts'].end[':end_ts'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVodCameraNameStreamStartStartTsEndEndTs<TError = unknown>(
  args: InferRequestType<
    (typeof client.vod)[':camera_name'][':stream']['start'][':start_ts']['end'][':end_ts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetVodCameraNameStreamStartStartTsEndEndTsKey(args)
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
                (typeof client.vod)[':camera_name'][':stream']['start'][':start_ts']['end'][':end_ts']['$get']
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
          client.vod[':camera_name'][':stream'].start[':start_ts'].end[':end_ts'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEventsEventIdSnapshotJpgKey(
  args: InferRequestType<(typeof client.events)[':event_id']['snapshot.jpg']['$get']>,
) {
  return ['events', '/events/:event_id/snapshot.jpg', args] as const
}

export function useGetEventsEventIdSnapshotJpg<TError = unknown>(
  args: InferRequestType<(typeof client.events)[':event_id']['snapshot.jpg']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events)[':event_id']['snapshot.jpg']['$get']>>
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
        ? getGetEventsEventIdSnapshotJpgKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events)[':event_id']['snapshot.jpg']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.events[':event_id']['snapshot.jpg'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventsEventIdSnapshotJpg<TError = unknown>(
  args: InferRequestType<(typeof client.events)[':event_id']['snapshot.jpg']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events)[':event_id']['snapshot.jpg']['$get']>>
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
        ? getGetEventsEventIdSnapshotJpgKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events)[':event_id']['snapshot.jpg']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.events[':event_id']['snapshot.jpg'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEventsEventIdThumbnailExtensionKey(
  args: InferRequestType<(typeof client.events)[':event_id']['thumbnail.:extension']['$get']>,
) {
  return ['events', '/events/:event_id/thumbnail.:extension', args] as const
}

export function useGetEventsEventIdThumbnailExtension<TError = unknown>(
  args: InferRequestType<(typeof client.events)[':event_id']['thumbnail.:extension']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events)[':event_id']['thumbnail.:extension']['$get']>>
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
        ? getGetEventsEventIdThumbnailExtensionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events)[':event_id']['thumbnail.:extension']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.events[':event_id']['thumbnail.:extension'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventsEventIdThumbnailExtension<TError = unknown>(
  args: InferRequestType<(typeof client.events)[':event_id']['thumbnail.:extension']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events)[':event_id']['thumbnail.:extension']['$get']>>
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
        ? getGetEventsEventIdThumbnailExtensionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events)[':event_id']['thumbnail.:extension']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.events[':event_id']['thumbnail.:extension'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCameraNameGridJpgKey(
  args: InferRequestType<(typeof client)[':camera_name']['grid.jpg']['$get']>,
) {
  return [':camera_name', '/:camera_name/grid.jpg', args] as const
}

export function useGetCameraNameGridJpg<TError = unknown>(
  args: InferRequestType<(typeof client)[':camera_name']['grid.jpg']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':camera_name']['grid.jpg']['$get']>>
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
        ? getGetCameraNameGridJpgKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':camera_name']['grid.jpg']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':camera_name']['grid.jpg'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCameraNameGridJpg<TError = unknown>(
  args: InferRequestType<(typeof client)[':camera_name']['grid.jpg']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':camera_name']['grid.jpg']['$get']>>
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
        ? getGetCameraNameGridJpgKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':camera_name']['grid.jpg']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':camera_name']['grid.jpg'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteCameraNameRegionGridKey() {
  return [':camera_name', '/:camera_name/region_grid', 'DELETE'] as const
}

export function useDeleteCameraNameRegionGrid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':camera_name']['region_grid']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':camera_name']['region_grid']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCameraNameRegionGridKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)[':camera_name']['region_grid']['$delete']> },
      ) => parseResponse(client[':camera_name'].region_grid.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEventsEventIdSnapshotCleanWebpKey(
  args: InferRequestType<(typeof client.events)[':event_id']['snapshot-clean.webp']['$get']>,
) {
  return ['events', '/events/:event_id/snapshot-clean.webp', args] as const
}

export function useGetEventsEventIdSnapshotCleanWebp<TError = unknown>(
  args: InferRequestType<(typeof client.events)[':event_id']['snapshot-clean.webp']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events)[':event_id']['snapshot-clean.webp']['$get']>>
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
        ? getGetEventsEventIdSnapshotCleanWebpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events)[':event_id']['snapshot-clean.webp']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.events[':event_id']['snapshot-clean.webp'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventsEventIdSnapshotCleanWebp<TError = unknown>(
  args: InferRequestType<(typeof client.events)[':event_id']['snapshot-clean.webp']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events)[':event_id']['snapshot-clean.webp']['$get']>>
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
        ? getGetEventsEventIdSnapshotCleanWebpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events)[':event_id']['snapshot-clean.webp']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.events[':event_id']['snapshot-clean.webp'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEventsEventIdClipMp4Key(
  args: InferRequestType<(typeof client.events)[':event_id']['clip.mp4']['$get']>,
) {
  return ['events', '/events/:event_id/clip.mp4', args] as const
}

export function useGetEventsEventIdClipMp4<TError = unknown>(
  args: InferRequestType<(typeof client.events)[':event_id']['clip.mp4']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events)[':event_id']['clip.mp4']['$get']>>
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
        ? getGetEventsEventIdClipMp4Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events)[':event_id']['clip.mp4']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events[':event_id']['clip.mp4'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventsEventIdClipMp4<TError = unknown>(
  args: InferRequestType<(typeof client.events)[':event_id']['clip.mp4']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events)[':event_id']['clip.mp4']['$get']>>
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
        ? getGetEventsEventIdClipMp4Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events)[':event_id']['clip.mp4']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events[':event_id']['clip.mp4'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReviewReviewIdClipMp4Key(
  args: InferRequestType<(typeof client.review)[':review_id']['clip.mp4']['$get']>,
) {
  return ['review', '/review/:review_id/clip.mp4', args] as const
}

export function useGetReviewReviewIdClipMp4<TError = unknown>(
  args: InferRequestType<(typeof client.review)[':review_id']['clip.mp4']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.review)[':review_id']['clip.mp4']['$get']>>
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
        ? getGetReviewReviewIdClipMp4Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.review)[':review_id']['clip.mp4']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.review[':review_id']['clip.mp4'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReviewReviewIdClipMp4<TError = unknown>(
  args: InferRequestType<(typeof client.review)[':review_id']['clip.mp4']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.review)[':review_id']['clip.mp4']['$get']>>
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
        ? getGetReviewReviewIdClipMp4Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.review)[':review_id']['clip.mp4']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.review[':review_id']['clip.mp4'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEventsEventIdPreviewGifKey(
  args: InferRequestType<(typeof client.events)[':event_id']['preview.gif']['$get']>,
) {
  return ['events', '/events/:event_id/preview.gif', args] as const
}

export function useGetEventsEventIdPreviewGif<TError = unknown>(
  args: InferRequestType<(typeof client.events)[':event_id']['preview.gif']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events)[':event_id']['preview.gif']['$get']>>
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
        ? getGetEventsEventIdPreviewGifKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events)[':event_id']['preview.gif']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.events[':event_id']['preview.gif'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventsEventIdPreviewGif<TError = unknown>(
  args: InferRequestType<(typeof client.events)[':event_id']['preview.gif']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events)[':event_id']['preview.gif']['$get']>>
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
        ? getGetEventsEventIdPreviewGifKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events)[':event_id']['preview.gif']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.events[':event_id']['preview.gif'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCameraNameStartStartTsEndEndTsPreviewGifKey(
  args: InferRequestType<
    (typeof client)[':camera_name']['start'][':start_ts']['end'][':end_ts']['preview.gif']['$get']
  >,
) {
  return [':camera_name', '/:camera_name/start/:start_ts/end/:end_ts/preview.gif', args] as const
}

export function useGetCameraNameStartStartTsEndEndTsPreviewGif<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':camera_name']['start'][':start_ts']['end'][':end_ts']['preview.gif']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCameraNameStartStartTsEndEndTsPreviewGifKey(args)
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
                (typeof client)[':camera_name']['start'][':start_ts']['end'][':end_ts']['preview.gif']['$get']
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
          client[':camera_name'].start[':start_ts'].end[':end_ts']['preview.gif'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCameraNameStartStartTsEndEndTsPreviewGif<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':camera_name']['start'][':start_ts']['end'][':end_ts']['preview.gif']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCameraNameStartStartTsEndEndTsPreviewGifKey(args)
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
                (typeof client)[':camera_name']['start'][':start_ts']['end'][':end_ts']['preview.gif']['$get']
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
          client[':camera_name'].start[':start_ts'].end[':end_ts']['preview.gif'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetCameraNameStartStartTsEndEndTsPreviewMp4Key(
  args: InferRequestType<
    (typeof client)[':camera_name']['start'][':start_ts']['end'][':end_ts']['preview.mp4']['$get']
  >,
) {
  return [':camera_name', '/:camera_name/start/:start_ts/end/:end_ts/preview.mp4', args] as const
}

export function useGetCameraNameStartStartTsEndEndTsPreviewMp4<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':camera_name']['start'][':start_ts']['end'][':end_ts']['preview.mp4']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCameraNameStartStartTsEndEndTsPreviewMp4Key(args)
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
                (typeof client)[':camera_name']['start'][':start_ts']['end'][':end_ts']['preview.mp4']['$get']
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
          client[':camera_name'].start[':start_ts'].end[':end_ts']['preview.mp4'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCameraNameStartStartTsEndEndTsPreviewMp4<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':camera_name']['start'][':start_ts']['end'][':end_ts']['preview.mp4']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetCameraNameStartStartTsEndEndTsPreviewMp4Key(args)
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
                (typeof client)[':camera_name']['start'][':start_ts']['end'][':end_ts']['preview.mp4']['$get']
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
          client[':camera_name'].start[':start_ts'].end[':end_ts']['preview.mp4'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetReviewEventIdPreviewKey(
  args: InferRequestType<(typeof client.review)[':event_id']['preview']['$get']>,
) {
  return ['review', '/review/:event_id/preview', args] as const
}

export function useGetReviewEventIdPreview<TError = unknown>(
  args: InferRequestType<(typeof client.review)[':event_id']['preview']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.review)[':event_id']['preview']['$get']>>
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
        ? getGetReviewEventIdPreviewKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.review)[':event_id']['preview']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.review[':event_id'].preview.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReviewEventIdPreview<TError = unknown>(
  args: InferRequestType<(typeof client.review)[':event_id']['preview']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.review)[':event_id']['preview']['$get']>>
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
        ? getGetReviewEventIdPreviewKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.review)[':event_id']['preview']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.review[':event_id'].preview.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPreviewFileNameThumbnailWebpKey(
  args: InferRequestType<(typeof client.preview)[':file_name']['thumbnail.webp']['$get']>,
) {
  return ['preview', '/preview/:file_name/thumbnail.webp', args] as const
}

export function useGetPreviewFileNameThumbnailWebp<TError = unknown>(
  args: InferRequestType<(typeof client.preview)[':file_name']['thumbnail.webp']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.preview)[':file_name']['thumbnail.webp']['$get']>>
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
        ? getGetPreviewFileNameThumbnailWebpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.preview)[':file_name']['thumbnail.webp']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.preview[':file_name']['thumbnail.webp'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPreviewFileNameThumbnailWebp<TError = unknown>(
  args: InferRequestType<(typeof client.preview)[':file_name']['thumbnail.webp']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.preview)[':file_name']['thumbnail.webp']['$get']>>
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
        ? getGetPreviewFileNameThumbnailWebpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.preview)[':file_name']['thumbnail.webp']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.preview[':file_name']['thumbnail.webp'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPreviewFileNameThumbnailJpgKey(
  args: InferRequestType<(typeof client.preview)[':file_name']['thumbnail.jpg']['$get']>,
) {
  return ['preview', '/preview/:file_name/thumbnail.jpg', args] as const
}

export function useGetPreviewFileNameThumbnailJpg<TError = unknown>(
  args: InferRequestType<(typeof client.preview)[':file_name']['thumbnail.jpg']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.preview)[':file_name']['thumbnail.jpg']['$get']>>
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
        ? getGetPreviewFileNameThumbnailJpgKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.preview)[':file_name']['thumbnail.jpg']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.preview[':file_name']['thumbnail.jpg'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPreviewFileNameThumbnailJpg<TError = unknown>(
  args: InferRequestType<(typeof client.preview)[':file_name']['thumbnail.jpg']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.preview)[':file_name']['thumbnail.jpg']['$get']>>
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
        ? getGetPreviewFileNameThumbnailJpgKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.preview)[':file_name']['thumbnail.jpg']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.preview[':file_name']['thumbnail.jpg'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCameraNameLabelThumbnailJpgKey(
  args: InferRequestType<(typeof client)[':camera_name'][':label']['thumbnail.jpg']['$get']>,
) {
  return [':camera_name', '/:camera_name/:label/thumbnail.jpg', args] as const
}

export function useGetCameraNameLabelThumbnailJpg<TError = unknown>(
  args: InferRequestType<(typeof client)[':camera_name'][':label']['thumbnail.jpg']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':camera_name'][':label']['thumbnail.jpg']['$get']>>
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
        ? getGetCameraNameLabelThumbnailJpgKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':camera_name'][':label']['thumbnail.jpg']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':camera_name'][':label']['thumbnail.jpg'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCameraNameLabelThumbnailJpg<TError = unknown>(
  args: InferRequestType<(typeof client)[':camera_name'][':label']['thumbnail.jpg']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':camera_name'][':label']['thumbnail.jpg']['$get']>>
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
        ? getGetCameraNameLabelThumbnailJpgKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':camera_name'][':label']['thumbnail.jpg']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':camera_name'][':label']['thumbnail.jpg'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCameraNameLabelBestJpgKey(
  args: InferRequestType<(typeof client)[':camera_name'][':label']['best.jpg']['$get']>,
) {
  return [':camera_name', '/:camera_name/:label/best.jpg', args] as const
}

export function useGetCameraNameLabelBestJpg<TError = unknown>(
  args: InferRequestType<(typeof client)[':camera_name'][':label']['best.jpg']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':camera_name'][':label']['best.jpg']['$get']>>
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
        ? getGetCameraNameLabelBestJpgKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':camera_name'][':label']['best.jpg']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':camera_name'][':label']['best.jpg'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCameraNameLabelBestJpg<TError = unknown>(
  args: InferRequestType<(typeof client)[':camera_name'][':label']['best.jpg']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':camera_name'][':label']['best.jpg']['$get']>>
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
        ? getGetCameraNameLabelBestJpgKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':camera_name'][':label']['best.jpg']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':camera_name'][':label']['best.jpg'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCameraNameLabelClipMp4Key(
  args: InferRequestType<(typeof client)[':camera_name'][':label']['clip.mp4']['$get']>,
) {
  return [':camera_name', '/:camera_name/:label/clip.mp4', args] as const
}

export function useGetCameraNameLabelClipMp4<TError = unknown>(
  args: InferRequestType<(typeof client)[':camera_name'][':label']['clip.mp4']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':camera_name'][':label']['clip.mp4']['$get']>>
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
        ? getGetCameraNameLabelClipMp4Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':camera_name'][':label']['clip.mp4']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':camera_name'][':label']['clip.mp4'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCameraNameLabelClipMp4<TError = unknown>(
  args: InferRequestType<(typeof client)[':camera_name'][':label']['clip.mp4']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':camera_name'][':label']['clip.mp4']['$get']>>
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
        ? getGetCameraNameLabelClipMp4Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':camera_name'][':label']['clip.mp4']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':camera_name'][':label']['clip.mp4'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCameraNameLabelSnapshotJpgKey(
  args: InferRequestType<(typeof client)[':camera_name'][':label']['snapshot.jpg']['$get']>,
) {
  return [':camera_name', '/:camera_name/:label/snapshot.jpg', args] as const
}

export function useGetCameraNameLabelSnapshotJpg<TError = unknown>(
  args: InferRequestType<(typeof client)[':camera_name'][':label']['snapshot.jpg']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':camera_name'][':label']['snapshot.jpg']['$get']>>
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
        ? getGetCameraNameLabelSnapshotJpgKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':camera_name'][':label']['snapshot.jpg']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':camera_name'][':label']['snapshot.jpg'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCameraNameLabelSnapshotJpg<TError = unknown>(
  args: InferRequestType<(typeof client)[':camera_name'][':label']['snapshot.jpg']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':camera_name'][':label']['snapshot.jpg']['$get']>>
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
        ? getGetCameraNameLabelSnapshotJpgKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':camera_name'][':label']['snapshot.jpg']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':camera_name'][':label']['snapshot.jpg'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCameraNameSearchMotionKey() {
  return [':camera_name', '/:camera_name/search/motion', 'POST'] as const
}

export function usePostCameraNameSearchMotion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':camera_name']['search']['motion']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':camera_name']['search']['motion']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCameraNameSearchMotionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)[':camera_name']['search']['motion']['$post']> },
      ) => parseResponse(client[':camera_name'].search.motion.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCameraNameSearchMotionJobIdKey(
  args: InferRequestType<(typeof client)[':camera_name']['search']['motion'][':job_id']['$get']>,
) {
  return [':camera_name', '/:camera_name/search/motion/:job_id', args] as const
}

export function useGetCameraNameSearchMotionJobId<TError = unknown>(
  args: InferRequestType<(typeof client)[':camera_name']['search']['motion'][':job_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':camera_name']['search']['motion'][':job_id']['$get']>
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
        ? getGetCameraNameSearchMotionJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':camera_name']['search']['motion'][':job_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':camera_name'].search.motion[':job_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCameraNameSearchMotionJobId<TError = unknown>(
  args: InferRequestType<(typeof client)[':camera_name']['search']['motion'][':job_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':camera_name']['search']['motion'][':job_id']['$get']>
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
        ? getGetCameraNameSearchMotionJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':camera_name']['search']['motion'][':job_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':camera_name'].search.motion[':job_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCameraNameSearchMotionJobIdCancelKey() {
  return [':camera_name', '/:camera_name/search/motion/:job_id/cancel', 'POST'] as const
}

export function usePostCameraNameSearchMotionJobIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)[':camera_name']['search']['motion'][':job_id']['cancel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCameraNameSearchMotionJobIdCancelKey()
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
            (typeof client)[':camera_name']['search']['motion'][':job_id']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':camera_name'].search.motion[':job_id'].cancel.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRecordingsStorageKey() {
  return ['recordings', '/recordings/storage'] as const
}

export function useGetRecordingsStorage<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recordings.storage.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRecordingsStorageKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recordings.storage.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recordings.storage.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecordingsStorage<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recordings.storage.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRecordingsStorageKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recordings.storage.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recordings.storage.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRecordingsSummaryKey(
  args: InferRequestType<typeof client.recordings.summary.$get>,
) {
  return ['recordings', '/recordings/summary', args] as const
}

export function useGetRecordingsSummary<TError = unknown>(
  args: InferRequestType<typeof client.recordings.summary.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recordings.summary.$get>>>>
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
        ? getGetRecordingsSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recordings.summary.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recordings.summary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecordingsSummary<TError = unknown>(
  args: InferRequestType<typeof client.recordings.summary.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recordings.summary.$get>>>>
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
        ? getGetRecordingsSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recordings.summary.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recordings.summary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCameraNameRecordingsSummaryKey(
  args: InferRequestType<(typeof client)[':camera_name']['recordings']['summary']['$get']>,
) {
  return [':camera_name', '/:camera_name/recordings/summary', args] as const
}

export function useGetCameraNameRecordingsSummary<TError = unknown>(
  args: InferRequestType<(typeof client)[':camera_name']['recordings']['summary']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':camera_name']['recordings']['summary']['$get']>>
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
        ? getGetCameraNameRecordingsSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':camera_name']['recordings']['summary']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':camera_name'].recordings.summary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCameraNameRecordingsSummary<TError = unknown>(
  args: InferRequestType<(typeof client)[':camera_name']['recordings']['summary']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':camera_name']['recordings']['summary']['$get']>>
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
        ? getGetCameraNameRecordingsSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':camera_name']['recordings']['summary']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':camera_name'].recordings.summary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCameraNameRecordingsCoverageKey(
  args: InferRequestType<(typeof client)[':camera_name']['recordings']['coverage']['$get']>,
) {
  return [':camera_name', '/:camera_name/recordings/coverage', args] as const
}

export function useGetCameraNameRecordingsCoverage<TError = unknown>(
  args: InferRequestType<(typeof client)[':camera_name']['recordings']['coverage']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':camera_name']['recordings']['coverage']['$get']>>
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
        ? getGetCameraNameRecordingsCoverageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':camera_name']['recordings']['coverage']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':camera_name'].recordings.coverage.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCameraNameRecordingsCoverage<TError = unknown>(
  args: InferRequestType<(typeof client)[':camera_name']['recordings']['coverage']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':camera_name']['recordings']['coverage']['$get']>>
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
        ? getGetCameraNameRecordingsCoverageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':camera_name']['recordings']['coverage']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':camera_name'].recordings.coverage.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCameraNameRecordingsKey(
  args: InferRequestType<(typeof client)[':camera_name']['recordings']['$get']>,
) {
  return [':camera_name', '/:camera_name/recordings', args] as const
}

export function useGetCameraNameRecordings<TError = unknown>(
  args: InferRequestType<(typeof client)[':camera_name']['recordings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':camera_name']['recordings']['$get']>>
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
        ? getGetCameraNameRecordingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':camera_name']['recordings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':camera_name'].recordings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCameraNameRecordings<TError = unknown>(
  args: InferRequestType<(typeof client)[':camera_name']['recordings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':camera_name']['recordings']['$get']>>
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
        ? getGetCameraNameRecordingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':camera_name']['recordings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':camera_name'].recordings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRecordingsUnavailableKey(
  args: InferRequestType<typeof client.recordings.unavailable.$get>,
) {
  return ['recordings', '/recordings/unavailable', args] as const
}

export function useGetRecordingsUnavailable<TError = unknown>(
  args: InferRequestType<typeof client.recordings.unavailable.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recordings.unavailable.$get>>>
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
        ? getGetRecordingsUnavailableKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recordings.unavailable.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recordings.unavailable.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecordingsUnavailable<TError = unknown>(
  args: InferRequestType<typeof client.recordings.unavailable.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recordings.unavailable.$get>>>
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
        ? getGetRecordingsUnavailableKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.recordings.unavailable.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.recordings.unavailable.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteRecordingsStartStartEndEndKey() {
  return ['recordings', '/recordings/start/:start/end/:end', 'DELETE'] as const
}

export function useDeleteRecordingsStartStartEndEnd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.recordings.start)[':start']['end'][':end']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.recordings.start)[':start']['end'][':end']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRecordingsStartStartEndEndKey()
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
            (typeof client.recordings.start)[':start']['end'][':end']['$delete']
          >
        },
      ) => parseResponse(client.recordings.start[':start'].end[':end'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDebugReplayStartKey() {
  return ['debug_replay', '/debug_replay/start', 'POST'] as const
}

export function usePostDebugReplayStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug_replay.start.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.debug_replay.start.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDebugReplayStartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.debug_replay.start.$post> }) =>
        parseResponse(client.debug_replay.start.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDebugReplayStartFromExportKey() {
  return ['debug_replay', '/debug_replay/start_from_export', 'POST'] as const
}

export function usePostDebugReplayStartFromExport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.debug_replay.start_from_export.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.debug_replay.start_from_export.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDebugReplayStartFromExportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.debug_replay.start_from_export.$post> },
      ) => parseResponse(client.debug_replay.start_from_export.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDebugReplayStatusKey() {
  return ['debug_replay', '/debug_replay/status'] as const
}

export function useGetDebugReplayStatus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug_replay.status.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDebugReplayStatusKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.debug_replay.status.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.debug_replay.status.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDebugReplayStatus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug_replay.status.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDebugReplayStatusKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.debug_replay.status.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.debug_replay.status.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDebugReplayStopKey() {
  return ['debug_replay', '/debug_replay/stop', 'POST'] as const
}

export function usePostDebugReplayStop<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.debug_replay.stop.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDebugReplayStopKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.debug_replay.stop.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}
