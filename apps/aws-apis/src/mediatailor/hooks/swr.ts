import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAlertsResourceArnKey() {
  return ['alerts#resourceArn'] as const
}

export function getChannelKey() {
  return ['channel'] as const
}

export function getChannelsKey() {
  return ['channels'] as const
}

export function getConfigureLogsKey() {
  return ['configureLogs'] as const
}

export function getPlaybackConfigurationKey() {
  return ['playbackConfiguration'] as const
}

export function getPlaybackConfigurationsKey() {
  return ['playbackConfigurations'] as const
}

export function getPrefetchScheduleKey() {
  return ['prefetchSchedule'] as const
}

export function getSourceLocationKey() {
  return ['sourceLocation'] as const
}

export function getSourceLocationsKey() {
  return ['sourceLocations'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getPutConfigureLogsChannelKey() {
  return ['configureLogs', '/configureLogs/channel', 'PUT'] as const
}

export function usePutConfigureLogsChannel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.configureLogs.channel.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.configureLogs.channel.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutConfigureLogsChannelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.configureLogs.channel.$put> },
      ) => parseResponse(client.configureLogs.channel.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutConfigureLogsPlaybackConfigurationKey() {
  return ['configureLogs', '/configureLogs/playbackConfiguration', 'PUT'] as const
}

export function usePutConfigureLogsPlaybackConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.configureLogs.playbackConfiguration.$put>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.configureLogs.playbackConfiguration.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutConfigureLogsPlaybackConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.configureLogs.playbackConfiguration.$put> },
      ) => parseResponse(client.configureLogs.playbackConfiguration.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetChannelChannelNameKey(
  args: InferRequestType<(typeof client.channel)[':ChannelName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['channel', '/channel/:ChannelName', keyArgs] as const
}

export function useGetChannelChannelName<TError = unknown>(
  args: InferRequestType<(typeof client.channel)[':ChannelName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.channel)[':ChannelName']['$get']>>>
        >
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
        ? getGetChannelChannelNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.channel)[':ChannelName']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channel[':ChannelName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelChannelName<TError = unknown>(
  args: InferRequestType<(typeof client.channel)[':ChannelName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.channel)[':ChannelName']['$get']>>>
        >
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
        ? getGetChannelChannelNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.channel)[':ChannelName']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channel[':ChannelName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutChannelChannelNameKey() {
  return ['channel', '/channel/:ChannelName', 'PUT'] as const
}

export function usePutChannelChannelName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.channel)[':ChannelName']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.channel)[':ChannelName']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutChannelChannelNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.channel)[':ChannelName']['$put']> },
      ) => parseResponse(client.channel[':ChannelName'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostChannelChannelNameKey() {
  return ['channel', '/channel/:ChannelName', 'POST'] as const
}

export function usePostChannelChannelName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.channel)[':ChannelName']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.channel)[':ChannelName']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChannelChannelNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.channel)[':ChannelName']['$post']> },
      ) => parseResponse(client.channel[':ChannelName'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteChannelChannelNameKey() {
  return ['channel', '/channel/:ChannelName', 'DELETE'] as const
}

export function useDeleteChannelChannelName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channel)[':ChannelName']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.channel)[':ChannelName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteChannelChannelNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.channel)[':ChannelName']['$delete']> },
      ) => parseResponse(client.channel[':ChannelName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSourceLocationSourceLocationNameLiveSourceLiveSourceNameKey(
  args: InferRequestType<
    (typeof client.sourceLocation)[':SourceLocationName']['liveSource'][':LiveSourceName']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'sourceLocation',
    '/sourceLocation/:SourceLocationName/liveSource/:LiveSourceName',
    keyArgs,
  ] as const
}

export function useGetSourceLocationSourceLocationNameLiveSourceLiveSourceName<TError = unknown>(
  args: InferRequestType<
    (typeof client.sourceLocation)[':SourceLocationName']['liveSource'][':LiveSourceName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sourceLocation)[':SourceLocationName']['liveSource'][':LiveSourceName']['$get']
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
        ? getGetSourceLocationSourceLocationNameLiveSourceLiveSourceNameKey(args)
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
                (typeof client.sourceLocation)[':SourceLocationName']['liveSource'][':LiveSourceName']['$get']
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
          client.sourceLocation[':SourceLocationName'].liveSource[':LiveSourceName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSourceLocationSourceLocationNameLiveSourceLiveSourceName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.sourceLocation)[':SourceLocationName']['liveSource'][':LiveSourceName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sourceLocation)[':SourceLocationName']['liveSource'][':LiveSourceName']['$get']
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
        ? getGetSourceLocationSourceLocationNameLiveSourceLiveSourceNameKey(args)
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
                (typeof client.sourceLocation)[':SourceLocationName']['liveSource'][':LiveSourceName']['$get']
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
          client.sourceLocation[':SourceLocationName'].liveSource[':LiveSourceName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutSourceLocationSourceLocationNameLiveSourceLiveSourceNameKey() {
  return [
    'sourceLocation',
    '/sourceLocation/:SourceLocationName/liveSource/:LiveSourceName',
    'PUT',
  ] as const
}

export function usePutSourceLocationSourceLocationNameLiveSourceLiveSourceName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sourceLocation)[':SourceLocationName']['liveSource'][':LiveSourceName']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.sourceLocation)[':SourceLocationName']['liveSource'][':LiveSourceName']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSourceLocationSourceLocationNameLiveSourceLiveSourceNameKey()
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
            (typeof client.sourceLocation)[':SourceLocationName']['liveSource'][':LiveSourceName']['$put']
          >
        },
      ) =>
        parseResponse(
          client.sourceLocation[':SourceLocationName'].liveSource[':LiveSourceName'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSourceLocationSourceLocationNameLiveSourceLiveSourceNameKey() {
  return [
    'sourceLocation',
    '/sourceLocation/:SourceLocationName/liveSource/:LiveSourceName',
    'POST',
  ] as const
}

export function usePostSourceLocationSourceLocationNameLiveSourceLiveSourceName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sourceLocation)[':SourceLocationName']['liveSource'][':LiveSourceName']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.sourceLocation)[':SourceLocationName']['liveSource'][':LiveSourceName']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSourceLocationSourceLocationNameLiveSourceLiveSourceNameKey()
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
            (typeof client.sourceLocation)[':SourceLocationName']['liveSource'][':LiveSourceName']['$post']
          >
        },
      ) =>
        parseResponse(
          client.sourceLocation[':SourceLocationName'].liveSource[':LiveSourceName'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteSourceLocationSourceLocationNameLiveSourceLiveSourceNameKey() {
  return [
    'sourceLocation',
    '/sourceLocation/:SourceLocationName/liveSource/:LiveSourceName',
    'DELETE',
  ] as const
}

export function useDeleteSourceLocationSourceLocationNameLiveSourceLiveSourceName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sourceLocation)[':SourceLocationName']['liveSource'][':LiveSourceName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.sourceLocation)[':SourceLocationName']['liveSource'][':LiveSourceName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSourceLocationSourceLocationNameLiveSourceLiveSourceNameKey()
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
            (typeof client.sourceLocation)[':SourceLocationName']['liveSource'][':LiveSourceName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.sourceLocation[':SourceLocationName'].liveSource[':LiveSourceName'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPrefetchSchedulePlaybackConfigurationNameNameKey(
  args: InferRequestType<
    (typeof client.prefetchSchedule)[':PlaybackConfigurationName'][':Name']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'prefetchSchedule',
    '/prefetchSchedule/:PlaybackConfigurationName/:Name',
    keyArgs,
  ] as const
}

export function useGetPrefetchSchedulePlaybackConfigurationNameName<TError = unknown>(
  args: InferRequestType<
    (typeof client.prefetchSchedule)[':PlaybackConfigurationName'][':Name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.prefetchSchedule)[':PlaybackConfigurationName'][':Name']['$get']
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
        ? getGetPrefetchSchedulePlaybackConfigurationNameNameKey(args)
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
                (typeof client.prefetchSchedule)[':PlaybackConfigurationName'][':Name']['$get']
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
          client.prefetchSchedule[':PlaybackConfigurationName'][':Name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPrefetchSchedulePlaybackConfigurationNameName<TError = unknown>(
  args: InferRequestType<
    (typeof client.prefetchSchedule)[':PlaybackConfigurationName'][':Name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.prefetchSchedule)[':PlaybackConfigurationName'][':Name']['$get']
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
        ? getGetPrefetchSchedulePlaybackConfigurationNameNameKey(args)
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
                (typeof client.prefetchSchedule)[':PlaybackConfigurationName'][':Name']['$get']
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
          client.prefetchSchedule[':PlaybackConfigurationName'][':Name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostPrefetchSchedulePlaybackConfigurationNameNameKey() {
  return ['prefetchSchedule', '/prefetchSchedule/:PlaybackConfigurationName/:Name', 'POST'] as const
}

export function usePostPrefetchSchedulePlaybackConfigurationNameName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.prefetchSchedule)[':PlaybackConfigurationName'][':Name']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.prefetchSchedule)[':PlaybackConfigurationName'][':Name']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPrefetchSchedulePlaybackConfigurationNameNameKey()
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
            (typeof client.prefetchSchedule)[':PlaybackConfigurationName'][':Name']['$post']
          >
        },
      ) =>
        parseResponse(
          client.prefetchSchedule[':PlaybackConfigurationName'][':Name'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeletePrefetchSchedulePlaybackConfigurationNameNameKey() {
  return [
    'prefetchSchedule',
    '/prefetchSchedule/:PlaybackConfigurationName/:Name',
    'DELETE',
  ] as const
}

export function useDeletePrefetchSchedulePlaybackConfigurationNameName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.prefetchSchedule)[':PlaybackConfigurationName'][':Name']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.prefetchSchedule)[':PlaybackConfigurationName'][':Name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePrefetchSchedulePlaybackConfigurationNameNameKey()
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
            (typeof client.prefetchSchedule)[':PlaybackConfigurationName'][':Name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.prefetchSchedule[':PlaybackConfigurationName'][':Name'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetChannelChannelNameProgramProgramNameKey(
  args: InferRequestType<
    (typeof client.channel)[':ChannelName']['program'][':ProgramName']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['channel', '/channel/:ChannelName/program/:ProgramName', keyArgs] as const
}

export function useGetChannelChannelNameProgramProgramName<TError = unknown>(
  args: InferRequestType<
    (typeof client.channel)[':ChannelName']['program'][':ProgramName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.channel)[':ChannelName']['program'][':ProgramName']['$get']>
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
        ? getGetChannelChannelNameProgramProgramNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.channel)[':ChannelName']['program'][':ProgramName']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.channel[':ChannelName'].program[':ProgramName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelChannelNameProgramProgramName<TError = unknown>(
  args: InferRequestType<
    (typeof client.channel)[':ChannelName']['program'][':ProgramName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.channel)[':ChannelName']['program'][':ProgramName']['$get']>
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
        ? getGetChannelChannelNameProgramProgramNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.channel)[':ChannelName']['program'][':ProgramName']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.channel[':ChannelName'].program[':ProgramName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutChannelChannelNameProgramProgramNameKey() {
  return ['channel', '/channel/:ChannelName/program/:ProgramName', 'PUT'] as const
}

export function usePutChannelChannelNameProgramProgramName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.channel)[':ChannelName']['program'][':ProgramName']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.channel)[':ChannelName']['program'][':ProgramName']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutChannelChannelNameProgramProgramNameKey()
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
            (typeof client.channel)[':ChannelName']['program'][':ProgramName']['$put']
          >
        },
      ) =>
        parseResponse(
          client.channel[':ChannelName'].program[':ProgramName'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostChannelChannelNameProgramProgramNameKey() {
  return ['channel', '/channel/:ChannelName/program/:ProgramName', 'POST'] as const
}

export function usePostChannelChannelNameProgramProgramName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.channel)[':ChannelName']['program'][':ProgramName']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.channel)[':ChannelName']['program'][':ProgramName']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChannelChannelNameProgramProgramNameKey()
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
            (typeof client.channel)[':ChannelName']['program'][':ProgramName']['$post']
          >
        },
      ) =>
        parseResponse(
          client.channel[':ChannelName'].program[':ProgramName'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteChannelChannelNameProgramProgramNameKey() {
  return ['channel', '/channel/:ChannelName/program/:ProgramName', 'DELETE'] as const
}

export function useDeleteChannelChannelNameProgramProgramName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.channel)[':ChannelName']['program'][':ProgramName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.channel)[':ChannelName']['program'][':ProgramName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteChannelChannelNameProgramProgramNameKey()
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
            (typeof client.channel)[':ChannelName']['program'][':ProgramName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.channel[':ChannelName'].program[':ProgramName'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSourceLocationSourceLocationNameKey(
  args: InferRequestType<(typeof client.sourceLocation)[':SourceLocationName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['sourceLocation', '/sourceLocation/:SourceLocationName', keyArgs] as const
}

export function useGetSourceLocationSourceLocationName<TError = unknown>(
  args: InferRequestType<(typeof client.sourceLocation)[':SourceLocationName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sourceLocation)[':SourceLocationName']['$get']>>
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
        ? getGetSourceLocationSourceLocationNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sourceLocation)[':SourceLocationName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sourceLocation[':SourceLocationName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSourceLocationSourceLocationName<TError = unknown>(
  args: InferRequestType<(typeof client.sourceLocation)[':SourceLocationName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sourceLocation)[':SourceLocationName']['$get']>>
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
        ? getGetSourceLocationSourceLocationNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sourceLocation)[':SourceLocationName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sourceLocation[':SourceLocationName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSourceLocationSourceLocationNameKey() {
  return ['sourceLocation', '/sourceLocation/:SourceLocationName', 'PUT'] as const
}

export function usePutSourceLocationSourceLocationName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sourceLocation)[':SourceLocationName']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sourceLocation)[':SourceLocationName']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSourceLocationSourceLocationNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.sourceLocation)[':SourceLocationName']['$put']> },
      ) => parseResponse(client.sourceLocation[':SourceLocationName'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSourceLocationSourceLocationNameKey() {
  return ['sourceLocation', '/sourceLocation/:SourceLocationName', 'POST'] as const
}

export function usePostSourceLocationSourceLocationName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sourceLocation)[':SourceLocationName']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sourceLocation)[':SourceLocationName']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSourceLocationSourceLocationNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.sourceLocation)[':SourceLocationName']['$post']>
        },
      ) => parseResponse(client.sourceLocation[':SourceLocationName'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSourceLocationSourceLocationNameKey() {
  return ['sourceLocation', '/sourceLocation/:SourceLocationName', 'DELETE'] as const
}

export function useDeleteSourceLocationSourceLocationName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sourceLocation)[':SourceLocationName']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sourceLocation)[':SourceLocationName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSourceLocationSourceLocationNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.sourceLocation)[':SourceLocationName']['$delete']>
        },
      ) => parseResponse(client.sourceLocation[':SourceLocationName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSourceLocationSourceLocationNameVodSourceVodSourceNameKey(
  args: InferRequestType<
    (typeof client.sourceLocation)[':SourceLocationName']['vodSource'][':VodSourceName']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'sourceLocation',
    '/sourceLocation/:SourceLocationName/vodSource/:VodSourceName',
    keyArgs,
  ] as const
}

export function useGetSourceLocationSourceLocationNameVodSourceVodSourceName<TError = unknown>(
  args: InferRequestType<
    (typeof client.sourceLocation)[':SourceLocationName']['vodSource'][':VodSourceName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sourceLocation)[':SourceLocationName']['vodSource'][':VodSourceName']['$get']
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
        ? getGetSourceLocationSourceLocationNameVodSourceVodSourceNameKey(args)
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
                (typeof client.sourceLocation)[':SourceLocationName']['vodSource'][':VodSourceName']['$get']
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
          client.sourceLocation[':SourceLocationName'].vodSource[':VodSourceName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSourceLocationSourceLocationNameVodSourceVodSourceName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.sourceLocation)[':SourceLocationName']['vodSource'][':VodSourceName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sourceLocation)[':SourceLocationName']['vodSource'][':VodSourceName']['$get']
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
        ? getGetSourceLocationSourceLocationNameVodSourceVodSourceNameKey(args)
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
                (typeof client.sourceLocation)[':SourceLocationName']['vodSource'][':VodSourceName']['$get']
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
          client.sourceLocation[':SourceLocationName'].vodSource[':VodSourceName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutSourceLocationSourceLocationNameVodSourceVodSourceNameKey() {
  return [
    'sourceLocation',
    '/sourceLocation/:SourceLocationName/vodSource/:VodSourceName',
    'PUT',
  ] as const
}

export function usePutSourceLocationSourceLocationNameVodSourceVodSourceName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sourceLocation)[':SourceLocationName']['vodSource'][':VodSourceName']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.sourceLocation)[':SourceLocationName']['vodSource'][':VodSourceName']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSourceLocationSourceLocationNameVodSourceVodSourceNameKey()
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
            (typeof client.sourceLocation)[':SourceLocationName']['vodSource'][':VodSourceName']['$put']
          >
        },
      ) =>
        parseResponse(
          client.sourceLocation[':SourceLocationName'].vodSource[':VodSourceName'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSourceLocationSourceLocationNameVodSourceVodSourceNameKey() {
  return [
    'sourceLocation',
    '/sourceLocation/:SourceLocationName/vodSource/:VodSourceName',
    'POST',
  ] as const
}

export function usePostSourceLocationSourceLocationNameVodSourceVodSourceName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sourceLocation)[':SourceLocationName']['vodSource'][':VodSourceName']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.sourceLocation)[':SourceLocationName']['vodSource'][':VodSourceName']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSourceLocationSourceLocationNameVodSourceVodSourceNameKey()
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
            (typeof client.sourceLocation)[':SourceLocationName']['vodSource'][':VodSourceName']['$post']
          >
        },
      ) =>
        parseResponse(
          client.sourceLocation[':SourceLocationName'].vodSource[':VodSourceName'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteSourceLocationSourceLocationNameVodSourceVodSourceNameKey() {
  return [
    'sourceLocation',
    '/sourceLocation/:SourceLocationName/vodSource/:VodSourceName',
    'DELETE',
  ] as const
}

export function useDeleteSourceLocationSourceLocationNameVodSourceVodSourceName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sourceLocation)[':SourceLocationName']['vodSource'][':VodSourceName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.sourceLocation)[':SourceLocationName']['vodSource'][':VodSourceName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSourceLocationSourceLocationNameVodSourceVodSourceNameKey()
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
            (typeof client.sourceLocation)[':SourceLocationName']['vodSource'][':VodSourceName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.sourceLocation[':SourceLocationName'].vodSource[':VodSourceName'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetChannelChannelNamePolicyKey(
  args: InferRequestType<(typeof client.channel)[':ChannelName']['policy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['channel', '/channel/:ChannelName/policy', keyArgs] as const
}

export function useGetChannelChannelNamePolicy<TError = unknown>(
  args: InferRequestType<(typeof client.channel)[':ChannelName']['policy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channel)[':ChannelName']['policy']['$get']>>
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
        ? getGetChannelChannelNamePolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channel)[':ChannelName']['policy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channel[':ChannelName'].policy.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelChannelNamePolicy<TError = unknown>(
  args: InferRequestType<(typeof client.channel)[':ChannelName']['policy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channel)[':ChannelName']['policy']['$get']>>
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
        ? getGetChannelChannelNamePolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channel)[':ChannelName']['policy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channel[':ChannelName'].policy.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutChannelChannelNamePolicyKey() {
  return ['channel', '/channel/:ChannelName/policy', 'PUT'] as const
}

export function usePutChannelChannelNamePolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channel)[':ChannelName']['policy']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.channel)[':ChannelName']['policy']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutChannelChannelNamePolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.channel)[':ChannelName']['policy']['$put']> },
      ) => parseResponse(client.channel[':ChannelName'].policy.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteChannelChannelNamePolicyKey() {
  return ['channel', '/channel/:ChannelName/policy', 'DELETE'] as const
}

export function useDeleteChannelChannelNamePolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channel)[':ChannelName']['policy']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.channel)[':ChannelName']['policy']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteChannelChannelNamePolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.channel)[':ChannelName']['policy']['$delete']> },
      ) => parseResponse(client.channel[':ChannelName'].policy.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPlaybackConfigurationNameKey(
  args: InferRequestType<(typeof client.playbackConfiguration)[':Name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['playbackConfiguration', '/playbackConfiguration/:Name', keyArgs] as const
}

export function useGetPlaybackConfigurationName<TError = unknown>(
  args: InferRequestType<(typeof client.playbackConfiguration)[':Name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.playbackConfiguration)[':Name']['$get']>>
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
        ? getGetPlaybackConfigurationNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.playbackConfiguration)[':Name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.playbackConfiguration[':Name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlaybackConfigurationName<TError = unknown>(
  args: InferRequestType<(typeof client.playbackConfiguration)[':Name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.playbackConfiguration)[':Name']['$get']>>
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
        ? getGetPlaybackConfigurationNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.playbackConfiguration)[':Name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.playbackConfiguration[':Name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeletePlaybackConfigurationNameKey() {
  return ['playbackConfiguration', '/playbackConfiguration/:Name', 'DELETE'] as const
}

export function useDeletePlaybackConfigurationName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.playbackConfiguration)[':Name']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.playbackConfiguration)[':Name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePlaybackConfigurationNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.playbackConfiguration)[':Name']['$delete']> },
      ) => parseResponse(client.playbackConfiguration[':Name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetChannelChannelNameScheduleKey(
  args: InferRequestType<(typeof client.channel)[':ChannelName']['schedule']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['channel', '/channel/:ChannelName/schedule', keyArgs] as const
}

export function useGetChannelChannelNameSchedule<TError = unknown>(
  args: InferRequestType<(typeof client.channel)[':ChannelName']['schedule']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channel)[':ChannelName']['schedule']['$get']>>
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
        ? getGetChannelChannelNameScheduleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channel)[':ChannelName']['schedule']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channel[':ChannelName'].schedule.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChannelChannelNameSchedule<TError = unknown>(
  args: InferRequestType<(typeof client.channel)[':ChannelName']['schedule']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channel)[':ChannelName']['schedule']['$get']>>
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
        ? getGetChannelChannelNameScheduleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.channel)[':ChannelName']['schedule']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.channel[':ChannelName'].schedule.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAlertsResourceArnKey(
  args: InferRequestType<(typeof client)['alerts#resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['alerts#resourceArn', '/alerts#resourceArn', keyArgs] as const
}

export function useGetAlertsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client)['alerts#resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['alerts#resourceArn']['$get']>>>
        >
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
        ? getGetAlertsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['alerts#resourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['alerts#resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAlertsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client)['alerts#resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['alerts#resourceArn']['$get']>>>
        >
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
        ? getGetAlertsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['alerts#resourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['alerts#resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetChannelsKey(args: InferRequestType<typeof client.channels.$get>) {
  const { header: _, ...keyArgs } = args
  return ['channels', '/channels', keyArgs] as const
}

export function useGetChannels<TError = unknown>(
  args: InferRequestType<typeof client.channels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChannelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.channels.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetChannels<TError = unknown>(
  args: InferRequestType<typeof client.channels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChannelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.channels.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetSourceLocationSourceLocationNameLiveSourcesKey(
  args: InferRequestType<
    (typeof client.sourceLocation)[':SourceLocationName']['liveSources']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['sourceLocation', '/sourceLocation/:SourceLocationName/liveSources', keyArgs] as const
}

export function useGetSourceLocationSourceLocationNameLiveSources<TError = unknown>(
  args: InferRequestType<
    (typeof client.sourceLocation)[':SourceLocationName']['liveSources']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sourceLocation)[':SourceLocationName']['liveSources']['$get']
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
        ? getGetSourceLocationSourceLocationNameLiveSourcesKey(args)
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
                (typeof client.sourceLocation)[':SourceLocationName']['liveSources']['$get']
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
          client.sourceLocation[':SourceLocationName'].liveSources.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSourceLocationSourceLocationNameLiveSources<TError = unknown>(
  args: InferRequestType<
    (typeof client.sourceLocation)[':SourceLocationName']['liveSources']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sourceLocation)[':SourceLocationName']['liveSources']['$get']
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
        ? getGetSourceLocationSourceLocationNameLiveSourcesKey(args)
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
                (typeof client.sourceLocation)[':SourceLocationName']['liveSources']['$get']
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
          client.sourceLocation[':SourceLocationName'].liveSources.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetPlaybackConfigurationsKey(
  args: InferRequestType<typeof client.playbackConfigurations.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['playbackConfigurations', '/playbackConfigurations', keyArgs] as const
}

export function useGetPlaybackConfigurations<TError = unknown>(
  args: InferRequestType<typeof client.playbackConfigurations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.playbackConfigurations.$get>>>
        >
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
        ? getGetPlaybackConfigurationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.playbackConfigurations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.playbackConfigurations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlaybackConfigurations<TError = unknown>(
  args: InferRequestType<typeof client.playbackConfigurations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.playbackConfigurations.$get>>>
        >
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
        ? getGetPlaybackConfigurationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.playbackConfigurations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.playbackConfigurations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPrefetchSchedulePlaybackConfigurationNameKey() {
  return ['prefetchSchedule', '/prefetchSchedule/:PlaybackConfigurationName', 'POST'] as const
}

export function usePostPrefetchSchedulePlaybackConfigurationName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.prefetchSchedule)[':PlaybackConfigurationName']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.prefetchSchedule)[':PlaybackConfigurationName']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPrefetchSchedulePlaybackConfigurationNameKey()
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
            (typeof client.prefetchSchedule)[':PlaybackConfigurationName']['$post']
          >
        },
      ) =>
        parseResponse(
          client.prefetchSchedule[':PlaybackConfigurationName'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSourceLocationsKey(
  args: InferRequestType<typeof client.sourceLocations.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['sourceLocations', '/sourceLocations', keyArgs] as const
}

export function useGetSourceLocations<TError = unknown>(
  args: InferRequestType<typeof client.sourceLocations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sourceLocations.$get>>>>
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
        ? getGetSourceLocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sourceLocations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sourceLocations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSourceLocations<TError = unknown>(
  args: InferRequestType<typeof client.sourceLocations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sourceLocations.$get>>>>
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
        ? getGetSourceLocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sourceLocations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sourceLocations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTagsResourceArnKey(
  args: InferRequestType<(typeof client.tags)[':ResourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:ResourceArn', keyArgs] as const
}

export function useGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':ResourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
        >
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
        ? getGetTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':ResourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':ResourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
        >
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
        ? getGetTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':ResourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTagsResourceArnKey() {
  return ['tags', '/tags/:ResourceArn', 'POST'] as const
}

export function usePostTagsResourceArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$post']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':ResourceArn']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagsResourceArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':ResourceArn']['$post']> },
      ) => parseResponse(client.tags[':ResourceArn'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSourceLocationSourceLocationNameVodSourcesKey(
  args: InferRequestType<
    (typeof client.sourceLocation)[':SourceLocationName']['vodSources']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['sourceLocation', '/sourceLocation/:SourceLocationName/vodSources', keyArgs] as const
}

export function useGetSourceLocationSourceLocationNameVodSources<TError = unknown>(
  args: InferRequestType<
    (typeof client.sourceLocation)[':SourceLocationName']['vodSources']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sourceLocation)[':SourceLocationName']['vodSources']['$get']
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
        ? getGetSourceLocationSourceLocationNameVodSourcesKey(args)
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
                (typeof client.sourceLocation)[':SourceLocationName']['vodSources']['$get']
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
          client.sourceLocation[':SourceLocationName'].vodSources.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSourceLocationSourceLocationNameVodSources<TError = unknown>(
  args: InferRequestType<
    (typeof client.sourceLocation)[':SourceLocationName']['vodSources']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sourceLocation)[':SourceLocationName']['vodSources']['$get']
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
        ? getGetSourceLocationSourceLocationNameVodSourcesKey(args)
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
                (typeof client.sourceLocation)[':SourceLocationName']['vodSources']['$get']
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
          client.sourceLocation[':SourceLocationName'].vodSources.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutPlaybackConfigurationKey() {
  return ['playbackConfiguration', '/playbackConfiguration', 'PUT'] as const
}

export function usePutPlaybackConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.playbackConfiguration.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.playbackConfiguration.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPlaybackConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.playbackConfiguration.$put> },
      ) => parseResponse(client.playbackConfiguration.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutChannelChannelNameStartKey() {
  return ['channel', '/channel/:ChannelName/start', 'PUT'] as const
}

export function usePutChannelChannelNameStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channel)[':ChannelName']['start']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.channel)[':ChannelName']['start']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutChannelChannelNameStartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.channel)[':ChannelName']['start']['$put']> },
      ) => parseResponse(client.channel[':ChannelName'].start.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutChannelChannelNameStopKey() {
  return ['channel', '/channel/:ChannelName/stop', 'PUT'] as const
}

export function usePutChannelChannelNameStop<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channel)[':ChannelName']['stop']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.channel)[':ChannelName']['stop']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutChannelChannelNameStopKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.channel)[':ChannelName']['stop']['$put']> },
      ) => parseResponse(client.channel[':ChannelName'].stop.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTagsResourceArnTagKeysKey() {
  return ['tags', '/tags/:ResourceArn#tagKeys', 'DELETE'] as const
}

export function useDeleteTagsResourceArnTagKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTagsResourceArnTagKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']> },
      ) => parseResponse(client.tags[':ResourceArn#tagKeys'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
