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

export function getPutConfigureLogsChannelMutationKey() {
  return ['configureLogs', '/configureLogs/channel', 'PUT'] as const
}

export function getPutConfigureLogsChannelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.configureLogs.channel.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.configureLogs.channel.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutConfigureLogsChannelMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.configureLogs.channel.$put>) {
      return parseResponse(client.configureLogs.channel.$put(args, options))
    },
  })
}

export function usePutConfigureLogsChannel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.configureLogs.channel.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.configureLogs.channel.$put>,
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
  const mutationDefaults = getPutConfigureLogsChannelMutationOptions<TError, TOnMutateResult>(
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

export function getPutConfigureLogsPlaybackConfigurationMutationKey() {
  return ['configureLogs', '/configureLogs/playbackConfiguration', 'PUT'] as const
}

export function getPutConfigureLogsPlaybackConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.configureLogs.playbackConfiguration.$put>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.configureLogs.playbackConfiguration.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutConfigureLogsPlaybackConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.configureLogs.playbackConfiguration.$put>,
    ) {
      return parseResponse(client.configureLogs.playbackConfiguration.$put(args, options))
    },
  })
}

export function usePutConfigureLogsPlaybackConfiguration<
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
                Awaited<ReturnType<typeof client.configureLogs.playbackConfiguration.$put>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.configureLogs.playbackConfiguration.$put>,
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
  const mutationDefaults = getPutConfigureLogsPlaybackConfigurationMutationOptions<
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

export function getChannelChannelNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.channel)[':ChannelName']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['channel', '/channel/:ChannelName', keyArgs] as const
}

export function getChannelChannelNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.channel)[':ChannelName']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelChannelNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channel[':ChannelName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChannelChannelName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.channel)[':ChannelName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.channel)[':ChannelName']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channel)[':ChannelName']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channel)[':ChannelName']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChannelChannelNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.channel)[':ChannelName']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelChannelNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelChannelNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channel[':ChannelName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutChannelChannelNameMutationKey() {
  return ['channel', '/channel/:ChannelName', 'PUT'] as const
}

export function getPutChannelChannelNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.channel)[':ChannelName']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.channel)[':ChannelName']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutChannelChannelNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.channel)[':ChannelName']['$put']>) {
      return parseResponse(client.channel[':ChannelName'].$put(args, options))
    },
  })
}

export function usePutChannelChannelName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channel)[':ChannelName']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.channel)[':ChannelName']['$put']>,
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
  const mutationDefaults = getPutChannelChannelNameMutationOptions<TError, TOnMutateResult>(
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

export function getPostChannelChannelNameMutationKey() {
  return ['channel', '/channel/:ChannelName', 'POST'] as const
}

export function getPostChannelChannelNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.channel)[':ChannelName']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.channel)[':ChannelName']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelChannelNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.channel)[':ChannelName']['$post']>) {
      return parseResponse(client.channel[':ChannelName'].$post(args, options))
    },
  })
}

export function usePostChannelChannelName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channel)[':ChannelName']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.channel)[':ChannelName']['$post']>,
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
  const mutationDefaults = getPostChannelChannelNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteChannelChannelNameMutationKey() {
  return ['channel', '/channel/:ChannelName', 'DELETE'] as const
}

export function getDeleteChannelChannelNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channel)[':ChannelName']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.channel)[':ChannelName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteChannelChannelNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.channel)[':ChannelName']['$delete']>) {
      return parseResponse(client.channel[':ChannelName'].$delete(args, options))
    },
  })
}

export function useDeleteChannelChannelName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channel)[':ChannelName']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.channel)[':ChannelName']['$delete']>,
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
  const mutationDefaults = getDeleteChannelChannelNameMutationOptions<TError, TOnMutateResult>(
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

export function getSourceLocationSourceLocationNameLiveSourceLiveSourceNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sourceLocation)[':SourceLocationName']['liveSource'][':LiveSourceName']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'sourceLocation',
    '/sourceLocation/:SourceLocationName/liveSource/:LiveSourceName',
    keyArgs,
  ] as const
}

export function getSourceLocationSourceLocationNameLiveSourceLiveSourceNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sourceLocation)[':SourceLocationName']['liveSource'][':LiveSourceName']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getSourceLocationSourceLocationNameLiveSourceLiveSourceNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sourceLocation[':SourceLocationName'].liveSource[':LiveSourceName'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useSourceLocationSourceLocationNameLiveSourceLiveSourceName<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sourceLocation)[':SourceLocationName']['liveSource'][':LiveSourceName']['$get']
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
                    (typeof client.sourceLocation)[':SourceLocationName']['liveSource'][':LiveSourceName']['$get']
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
                    (typeof client.sourceLocation)[':SourceLocationName']['liveSource'][':LiveSourceName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSourceLocationSourceLocationNameLiveSourceLiveSourceNameQueryKey>
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
              (typeof client.sourceLocation)[':SourceLocationName']['liveSource'][':LiveSourceName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSourceLocationSourceLocationNameLiveSourceLiveSourceNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getSourceLocationSourceLocationNameLiveSourceLiveSourceNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.sourceLocation[':SourceLocationName'].liveSource[':LiveSourceName'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutSourceLocationSourceLocationNameLiveSourceLiveSourceNameMutationKey() {
  return [
    'sourceLocation',
    '/sourceLocation/:SourceLocationName/liveSource/:LiveSourceName',
    'PUT',
  ] as const
}

export function getPutSourceLocationSourceLocationNameLiveSourceLiveSourceNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.sourceLocation)[':SourceLocationName']['liveSource'][':LiveSourceName']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutSourceLocationSourceLocationNameLiveSourceLiveSourceNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sourceLocation)[':SourceLocationName']['liveSource'][':LiveSourceName']['$put']
      >,
    ) {
      return parseResponse(
        client.sourceLocation[':SourceLocationName'].liveSource[':LiveSourceName'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutSourceLocationSourceLocationNameLiveSourceLiveSourceName<
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
                    (typeof client.sourceLocation)[':SourceLocationName']['liveSource'][':LiveSourceName']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sourceLocation)[':SourceLocationName']['liveSource'][':LiveSourceName']['$put']
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
  const mutationDefaults =
    getPutSourceLocationSourceLocationNameLiveSourceLiveSourceNameMutationOptions<
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

export function getPostSourceLocationSourceLocationNameLiveSourceLiveSourceNameMutationKey() {
  return [
    'sourceLocation',
    '/sourceLocation/:SourceLocationName/liveSource/:LiveSourceName',
    'POST',
  ] as const
}

export function getPostSourceLocationSourceLocationNameLiveSourceLiveSourceNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.sourceLocation)[':SourceLocationName']['liveSource'][':LiveSourceName']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSourceLocationSourceLocationNameLiveSourceLiveSourceNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sourceLocation)[':SourceLocationName']['liveSource'][':LiveSourceName']['$post']
      >,
    ) {
      return parseResponse(
        client.sourceLocation[':SourceLocationName'].liveSource[':LiveSourceName'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostSourceLocationSourceLocationNameLiveSourceLiveSourceName<
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
                    (typeof client.sourceLocation)[':SourceLocationName']['liveSource'][':LiveSourceName']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sourceLocation)[':SourceLocationName']['liveSource'][':LiveSourceName']['$post']
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
  const mutationDefaults =
    getPostSourceLocationSourceLocationNameLiveSourceLiveSourceNameMutationOptions<
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

export function getDeleteSourceLocationSourceLocationNameLiveSourceLiveSourceNameMutationKey() {
  return [
    'sourceLocation',
    '/sourceLocation/:SourceLocationName/liveSource/:LiveSourceName',
    'DELETE',
  ] as const
}

export function getDeleteSourceLocationSourceLocationNameLiveSourceLiveSourceNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.sourceLocation)[':SourceLocationName']['liveSource'][':LiveSourceName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteSourceLocationSourceLocationNameLiveSourceLiveSourceNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sourceLocation)[':SourceLocationName']['liveSource'][':LiveSourceName']['$delete']
      >,
    ) {
      return parseResponse(
        client.sourceLocation[':SourceLocationName'].liveSource[':LiveSourceName'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteSourceLocationSourceLocationNameLiveSourceLiveSourceName<
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
                    (typeof client.sourceLocation)[':SourceLocationName']['liveSource'][':LiveSourceName']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sourceLocation)[':SourceLocationName']['liveSource'][':LiveSourceName']['$delete']
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
  const mutationDefaults =
    getDeleteSourceLocationSourceLocationNameLiveSourceLiveSourceNameMutationOptions<
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

export function getPrefetchSchedulePlaybackConfigurationNameNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.prefetchSchedule)[':PlaybackConfigurationName'][':Name']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'prefetchSchedule',
    '/prefetchSchedule/:PlaybackConfigurationName/:Name',
    keyArgs,
  ] as const
}

export function getPrefetchSchedulePlaybackConfigurationNameNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.prefetchSchedule)[':PlaybackConfigurationName'][':Name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPrefetchSchedulePlaybackConfigurationNameNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.prefetchSchedule[':PlaybackConfigurationName'][':Name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePrefetchSchedulePlaybackConfigurationNameName<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.prefetchSchedule)[':PlaybackConfigurationName'][':Name']['$get']
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
                    (typeof client.prefetchSchedule)[':PlaybackConfigurationName'][':Name']['$get']
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
                    (typeof client.prefetchSchedule)[':PlaybackConfigurationName'][':Name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getPrefetchSchedulePlaybackConfigurationNameNameQueryKey>
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
              (typeof client.prefetchSchedule)[':PlaybackConfigurationName'][':Name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPrefetchSchedulePlaybackConfigurationNameNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPrefetchSchedulePlaybackConfigurationNameNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.prefetchSchedule[':PlaybackConfigurationName'][':Name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPrefetchSchedulePlaybackConfigurationNameNameMutationKey() {
  return ['prefetchSchedule', '/prefetchSchedule/:PlaybackConfigurationName/:Name', 'POST'] as const
}

export function getPostPrefetchSchedulePlaybackConfigurationNameNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.prefetchSchedule)[':PlaybackConfigurationName'][':Name']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostPrefetchSchedulePlaybackConfigurationNameNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.prefetchSchedule)[':PlaybackConfigurationName'][':Name']['$post']
      >,
    ) {
      return parseResponse(
        client.prefetchSchedule[':PlaybackConfigurationName'][':Name'].$post(args, options),
      )
    },
  })
}

export function usePostPrefetchSchedulePlaybackConfigurationNameName<
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
                    (typeof client.prefetchSchedule)[':PlaybackConfigurationName'][':Name']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.prefetchSchedule)[':PlaybackConfigurationName'][':Name']['$post']
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
  const mutationDefaults = getPostPrefetchSchedulePlaybackConfigurationNameNameMutationOptions<
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

export function getDeletePrefetchSchedulePlaybackConfigurationNameNameMutationKey() {
  return [
    'prefetchSchedule',
    '/prefetchSchedule/:PlaybackConfigurationName/:Name',
    'DELETE',
  ] as const
}

export function getDeletePrefetchSchedulePlaybackConfigurationNameNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.prefetchSchedule)[':PlaybackConfigurationName'][':Name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeletePrefetchSchedulePlaybackConfigurationNameNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.prefetchSchedule)[':PlaybackConfigurationName'][':Name']['$delete']
      >,
    ) {
      return parseResponse(
        client.prefetchSchedule[':PlaybackConfigurationName'][':Name'].$delete(args, options),
      )
    },
  })
}

export function useDeletePrefetchSchedulePlaybackConfigurationNameName<
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
                      (typeof client.prefetchSchedule)[':PlaybackConfigurationName'][':Name']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.prefetchSchedule)[':PlaybackConfigurationName'][':Name']['$delete']
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
  const mutationDefaults = getDeletePrefetchSchedulePlaybackConfigurationNameNameMutationOptions<
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

export function getChannelChannelNameProgramProgramNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channel)[':ChannelName']['program'][':ProgramName']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['channel', '/channel/:ChannelName/program/:ProgramName', keyArgs] as const
}

export function getChannelChannelNameProgramProgramNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channel)[':ChannelName']['program'][':ProgramName']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelChannelNameProgramProgramNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channel[':ChannelName'].program[':ProgramName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChannelChannelNameProgramProgramName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.channel)[':ChannelName']['program'][':ProgramName']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channel)[':ChannelName']['program'][':ProgramName']['$get']>
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
                    (typeof client.channel)[':ChannelName']['program'][':ProgramName']['$get']
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
                    (typeof client.channel)[':ChannelName']['program'][':ProgramName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getChannelChannelNameProgramProgramNameQueryKey>
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
            ReturnType<(typeof client.channel)[':ChannelName']['program'][':ProgramName']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelChannelNameProgramProgramNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelChannelNameProgramProgramNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channel[':ChannelName'].program[':ProgramName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutChannelChannelNameProgramProgramNameMutationKey() {
  return ['channel', '/channel/:ChannelName/program/:ProgramName', 'PUT'] as const
}

export function getPutChannelChannelNameProgramProgramNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.channel)[':ChannelName']['program'][':ProgramName']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutChannelChannelNameProgramProgramNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.channel)[':ChannelName']['program'][':ProgramName']['$put']
      >,
    ) {
      return parseResponse(
        client.channel[':ChannelName'].program[':ProgramName'].$put(args, options),
      )
    },
  })
}

export function usePutChannelChannelNameProgramProgramName<
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
                    (typeof client.channel)[':ChannelName']['program'][':ProgramName']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.channel)[':ChannelName']['program'][':ProgramName']['$put']
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
  const mutationDefaults = getPutChannelChannelNameProgramProgramNameMutationOptions<
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

export function getPostChannelChannelNameProgramProgramNameMutationKey() {
  return ['channel', '/channel/:ChannelName/program/:ProgramName', 'POST'] as const
}

export function getPostChannelChannelNameProgramProgramNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.channel)[':ChannelName']['program'][':ProgramName']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelChannelNameProgramProgramNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.channel)[':ChannelName']['program'][':ProgramName']['$post']
      >,
    ) {
      return parseResponse(
        client.channel[':ChannelName'].program[':ProgramName'].$post(args, options),
      )
    },
  })
}

export function usePostChannelChannelNameProgramProgramName<
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
                    (typeof client.channel)[':ChannelName']['program'][':ProgramName']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.channel)[':ChannelName']['program'][':ProgramName']['$post']
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
  const mutationDefaults = getPostChannelChannelNameProgramProgramNameMutationOptions<
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

export function getDeleteChannelChannelNameProgramProgramNameMutationKey() {
  return ['channel', '/channel/:ChannelName/program/:ProgramName', 'DELETE'] as const
}

export function getDeleteChannelChannelNameProgramProgramNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.channel)[':ChannelName']['program'][':ProgramName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteChannelChannelNameProgramProgramNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.channel)[':ChannelName']['program'][':ProgramName']['$delete']
      >,
    ) {
      return parseResponse(
        client.channel[':ChannelName'].program[':ProgramName'].$delete(args, options),
      )
    },
  })
}

export function useDeleteChannelChannelNameProgramProgramName<
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
                    (typeof client.channel)[':ChannelName']['program'][':ProgramName']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.channel)[':ChannelName']['program'][':ProgramName']['$delete']
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
  const mutationDefaults = getDeleteChannelChannelNameProgramProgramNameMutationOptions<
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

export function getSourceLocationSourceLocationNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sourceLocation)[':SourceLocationName']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['sourceLocation', '/sourceLocation/:SourceLocationName', keyArgs] as const
}

export function getSourceLocationSourceLocationNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sourceLocation)[':SourceLocationName']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSourceLocationSourceLocationNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sourceLocation[':SourceLocationName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSourceLocationSourceLocationName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sourceLocation)[':SourceLocationName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sourceLocation)[':SourceLocationName']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sourceLocation)[':SourceLocationName']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sourceLocation)[':SourceLocationName']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSourceLocationSourceLocationNameQueryKey>
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
          Awaited<ReturnType<(typeof client.sourceLocation)[':SourceLocationName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSourceLocationSourceLocationNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSourceLocationSourceLocationNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sourceLocation[':SourceLocationName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSourceLocationSourceLocationNameMutationKey() {
  return ['sourceLocation', '/sourceLocation/:SourceLocationName', 'PUT'] as const
}

export function getPutSourceLocationSourceLocationNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sourceLocation)[':SourceLocationName']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sourceLocation)[':SourceLocationName']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSourceLocationSourceLocationNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sourceLocation)[':SourceLocationName']['$put']>,
    ) {
      return parseResponse(client.sourceLocation[':SourceLocationName'].$put(args, options))
    },
  })
}

export function usePutSourceLocationSourceLocationName<
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
                Awaited<ReturnType<(typeof client.sourceLocation)[':SourceLocationName']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sourceLocation)[':SourceLocationName']['$put']>,
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
  const mutationDefaults = getPutSourceLocationSourceLocationNameMutationOptions<
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

export function getPostSourceLocationSourceLocationNameMutationKey() {
  return ['sourceLocation', '/sourceLocation/:SourceLocationName', 'POST'] as const
}

export function getPostSourceLocationSourceLocationNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sourceLocation)[':SourceLocationName']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sourceLocation)[':SourceLocationName']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSourceLocationSourceLocationNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sourceLocation)[':SourceLocationName']['$post']>,
    ) {
      return parseResponse(client.sourceLocation[':SourceLocationName'].$post(args, options))
    },
  })
}

export function usePostSourceLocationSourceLocationName<
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
                Awaited<ReturnType<(typeof client.sourceLocation)[':SourceLocationName']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sourceLocation)[':SourceLocationName']['$post']>,
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
  const mutationDefaults = getPostSourceLocationSourceLocationNameMutationOptions<
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

export function getDeleteSourceLocationSourceLocationNameMutationKey() {
  return ['sourceLocation', '/sourceLocation/:SourceLocationName', 'DELETE'] as const
}

export function getDeleteSourceLocationSourceLocationNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sourceLocation)[':SourceLocationName']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sourceLocation)[':SourceLocationName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSourceLocationSourceLocationNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sourceLocation)[':SourceLocationName']['$delete']>,
    ) {
      return parseResponse(client.sourceLocation[':SourceLocationName'].$delete(args, options))
    },
  })
}

export function useDeleteSourceLocationSourceLocationName<
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
                  ReturnType<(typeof client.sourceLocation)[':SourceLocationName']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sourceLocation)[':SourceLocationName']['$delete']>,
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
  const mutationDefaults = getDeleteSourceLocationSourceLocationNameMutationOptions<
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

export function getSourceLocationSourceLocationNameVodSourceVodSourceNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sourceLocation)[':SourceLocationName']['vodSource'][':VodSourceName']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'sourceLocation',
    '/sourceLocation/:SourceLocationName/vodSource/:VodSourceName',
    keyArgs,
  ] as const
}

export function getSourceLocationSourceLocationNameVodSourceVodSourceNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sourceLocation)[':SourceLocationName']['vodSource'][':VodSourceName']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getSourceLocationSourceLocationNameVodSourceVodSourceNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sourceLocation[':SourceLocationName'].vodSource[':VodSourceName'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useSourceLocationSourceLocationNameVodSourceVodSourceName<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.sourceLocation)[':SourceLocationName']['vodSource'][':VodSourceName']['$get']
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
                    (typeof client.sourceLocation)[':SourceLocationName']['vodSource'][':VodSourceName']['$get']
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
                    (typeof client.sourceLocation)[':SourceLocationName']['vodSource'][':VodSourceName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSourceLocationSourceLocationNameVodSourceVodSourceNameQueryKey>
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
              (typeof client.sourceLocation)[':SourceLocationName']['vodSource'][':VodSourceName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSourceLocationSourceLocationNameVodSourceVodSourceNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getSourceLocationSourceLocationNameVodSourceVodSourceNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.sourceLocation[':SourceLocationName'].vodSource[':VodSourceName'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutSourceLocationSourceLocationNameVodSourceVodSourceNameMutationKey() {
  return [
    'sourceLocation',
    '/sourceLocation/:SourceLocationName/vodSource/:VodSourceName',
    'PUT',
  ] as const
}

export function getPutSourceLocationSourceLocationNameVodSourceVodSourceNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.sourceLocation)[':SourceLocationName']['vodSource'][':VodSourceName']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutSourceLocationSourceLocationNameVodSourceVodSourceNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sourceLocation)[':SourceLocationName']['vodSource'][':VodSourceName']['$put']
      >,
    ) {
      return parseResponse(
        client.sourceLocation[':SourceLocationName'].vodSource[':VodSourceName'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutSourceLocationSourceLocationNameVodSourceVodSourceName<
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
                    (typeof client.sourceLocation)[':SourceLocationName']['vodSource'][':VodSourceName']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sourceLocation)[':SourceLocationName']['vodSource'][':VodSourceName']['$put']
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
  const mutationDefaults =
    getPutSourceLocationSourceLocationNameVodSourceVodSourceNameMutationOptions<
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

export function getPostSourceLocationSourceLocationNameVodSourceVodSourceNameMutationKey() {
  return [
    'sourceLocation',
    '/sourceLocation/:SourceLocationName/vodSource/:VodSourceName',
    'POST',
  ] as const
}

export function getPostSourceLocationSourceLocationNameVodSourceVodSourceNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.sourceLocation)[':SourceLocationName']['vodSource'][':VodSourceName']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSourceLocationSourceLocationNameVodSourceVodSourceNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sourceLocation)[':SourceLocationName']['vodSource'][':VodSourceName']['$post']
      >,
    ) {
      return parseResponse(
        client.sourceLocation[':SourceLocationName'].vodSource[':VodSourceName'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostSourceLocationSourceLocationNameVodSourceVodSourceName<
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
                    (typeof client.sourceLocation)[':SourceLocationName']['vodSource'][':VodSourceName']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sourceLocation)[':SourceLocationName']['vodSource'][':VodSourceName']['$post']
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
  const mutationDefaults =
    getPostSourceLocationSourceLocationNameVodSourceVodSourceNameMutationOptions<
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

export function getDeleteSourceLocationSourceLocationNameVodSourceVodSourceNameMutationKey() {
  return [
    'sourceLocation',
    '/sourceLocation/:SourceLocationName/vodSource/:VodSourceName',
    'DELETE',
  ] as const
}

export function getDeleteSourceLocationSourceLocationNameVodSourceVodSourceNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.sourceLocation)[':SourceLocationName']['vodSource'][':VodSourceName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteSourceLocationSourceLocationNameVodSourceVodSourceNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sourceLocation)[':SourceLocationName']['vodSource'][':VodSourceName']['$delete']
      >,
    ) {
      return parseResponse(
        client.sourceLocation[':SourceLocationName'].vodSource[':VodSourceName'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteSourceLocationSourceLocationNameVodSourceVodSourceName<
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
                    (typeof client.sourceLocation)[':SourceLocationName']['vodSource'][':VodSourceName']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sourceLocation)[':SourceLocationName']['vodSource'][':VodSourceName']['$delete']
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
  const mutationDefaults =
    getDeleteSourceLocationSourceLocationNameVodSourceVodSourceNameMutationOptions<
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

export function getChannelChannelNamePolicyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channel)[':ChannelName']['policy']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['channel', '/channel/:ChannelName/policy', keyArgs] as const
}

export function getChannelChannelNamePolicyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channel)[':ChannelName']['policy']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelChannelNamePolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channel[':ChannelName'].policy.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChannelChannelNamePolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channel)[':ChannelName']['policy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channel)[':ChannelName']['policy']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channel)[':ChannelName']['policy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channel)[':ChannelName']['policy']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChannelChannelNamePolicyQueryKey>
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
          Awaited<ReturnType<(typeof client.channel)[':ChannelName']['policy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelChannelNamePolicyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelChannelNamePolicyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channel[':ChannelName'].policy.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutChannelChannelNamePolicyMutationKey() {
  return ['channel', '/channel/:ChannelName/policy', 'PUT'] as const
}

export function getPutChannelChannelNamePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channel)[':ChannelName']['policy']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.channel)[':ChannelName']['policy']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutChannelChannelNamePolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.channel)[':ChannelName']['policy']['$put']>,
    ) {
      return parseResponse(client.channel[':ChannelName'].policy.$put(args, options))
    },
  })
}

export function usePutChannelChannelNamePolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channel)[':ChannelName']['policy']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.channel)[':ChannelName']['policy']['$put']>,
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
  const mutationDefaults = getPutChannelChannelNamePolicyMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteChannelChannelNamePolicyMutationKey() {
  return ['channel', '/channel/:ChannelName/policy', 'DELETE'] as const
}

export function getDeleteChannelChannelNamePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channel)[':ChannelName']['policy']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.channel)[':ChannelName']['policy']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteChannelChannelNamePolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.channel)[':ChannelName']['policy']['$delete']>,
    ) {
      return parseResponse(client.channel[':ChannelName'].policy.$delete(args, options))
    },
  })
}

export function useDeleteChannelChannelNamePolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channel)[':ChannelName']['policy']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.channel)[':ChannelName']['policy']['$delete']>,
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
  const mutationDefaults = getDeleteChannelChannelNamePolicyMutationOptions<
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

export function getPlaybackConfigurationNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.playbackConfiguration)[':Name']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['playbackConfiguration', '/playbackConfiguration/:Name', keyArgs] as const
}

export function getPlaybackConfigurationNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.playbackConfiguration)[':Name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlaybackConfigurationNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.playbackConfiguration[':Name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlaybackConfigurationName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.playbackConfiguration)[':Name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.playbackConfiguration)[':Name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.playbackConfiguration)[':Name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.playbackConfiguration)[':Name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPlaybackConfigurationNameQueryKey>
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
          Awaited<ReturnType<(typeof client.playbackConfiguration)[':Name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlaybackConfigurationNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlaybackConfigurationNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.playbackConfiguration[':Name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeletePlaybackConfigurationNameMutationKey() {
  return ['playbackConfiguration', '/playbackConfiguration/:Name', 'DELETE'] as const
}

export function getDeletePlaybackConfigurationNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.playbackConfiguration)[':Name']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.playbackConfiguration)[':Name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePlaybackConfigurationNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.playbackConfiguration)[':Name']['$delete']>,
    ) {
      return parseResponse(client.playbackConfiguration[':Name'].$delete(args, options))
    },
  })
}

export function useDeletePlaybackConfigurationName<
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
                  Awaited<ReturnType<(typeof client.playbackConfiguration)[':Name']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.playbackConfiguration)[':Name']['$delete']>,
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
  const mutationDefaults = getDeletePlaybackConfigurationNameMutationOptions<
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

export function getChannelChannelNameScheduleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channel)[':ChannelName']['schedule']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['channel', '/channel/:ChannelName/schedule', keyArgs] as const
}

export function getChannelChannelNameScheduleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channel)[':ChannelName']['schedule']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelChannelNameScheduleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channel[':ChannelName'].schedule.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChannelChannelNameSchedule<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channel)[':ChannelName']['schedule']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.channel)[':ChannelName']['schedule']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channel)[':ChannelName']['schedule']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channel)[':ChannelName']['schedule']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChannelChannelNameScheduleQueryKey>
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
          Awaited<ReturnType<(typeof client.channel)[':ChannelName']['schedule']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelChannelNameScheduleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelChannelNameScheduleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channel[':ChannelName'].schedule.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAlertsResourceArnQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['alerts#resourceArn']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['alerts#resourceArn', '/alerts#resourceArn', keyArgs] as const
}

export function getAlertsResourceArnQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['alerts#resourceArn']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAlertsResourceArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['alerts#resourceArn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAlertsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['alerts#resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['alerts#resourceArn']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['alerts#resourceArn']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['alerts#resourceArn']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAlertsResourceArnQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['alerts#resourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAlertsResourceArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAlertsResourceArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['alerts#resourceArn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChannelsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.channels.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['channels', '/channels', keyArgs] as const
}

export function getChannelsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.channels.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChannelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.channels.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useChannels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.channels.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>
          >,
          ReturnType<typeof getChannelsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getChannelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChannelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.channels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSourceLocationSourceLocationNameLiveSourcesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sourceLocation)[':SourceLocationName']['liveSources']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['sourceLocation', '/sourceLocation/:SourceLocationName/liveSources', keyArgs] as const
}

export function getSourceLocationSourceLocationNameLiveSourcesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sourceLocation)[':SourceLocationName']['liveSources']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSourceLocationSourceLocationNameLiveSourcesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sourceLocation[':SourceLocationName'].liveSources.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSourceLocationSourceLocationNameLiveSources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sourceLocation)[':SourceLocationName']['liveSources']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sourceLocation)[':SourceLocationName']['liveSources']['$get']>
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
                    (typeof client.sourceLocation)[':SourceLocationName']['liveSources']['$get']
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
                    (typeof client.sourceLocation)[':SourceLocationName']['liveSources']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSourceLocationSourceLocationNameLiveSourcesQueryKey>
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
            ReturnType<(typeof client.sourceLocation)[':SourceLocationName']['liveSources']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSourceLocationSourceLocationNameLiveSourcesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSourceLocationSourceLocationNameLiveSourcesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sourceLocation[':SourceLocationName'].liveSources.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlaybackConfigurationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.playbackConfigurations.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['playbackConfigurations', '/playbackConfigurations', keyArgs] as const
}

export function getPlaybackConfigurationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.playbackConfigurations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlaybackConfigurationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.playbackConfigurations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlaybackConfigurations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.playbackConfigurations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.playbackConfigurations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.playbackConfigurations.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.playbackConfigurations.$get>>>
            >
          >,
          ReturnType<typeof getPlaybackConfigurationsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.playbackConfigurations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlaybackConfigurationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlaybackConfigurationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.playbackConfigurations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPrefetchSchedulePlaybackConfigurationNameMutationKey() {
  return ['prefetchSchedule', '/prefetchSchedule/:PlaybackConfigurationName', 'POST'] as const
}

export function getPostPrefetchSchedulePlaybackConfigurationNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.prefetchSchedule)[':PlaybackConfigurationName']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPrefetchSchedulePlaybackConfigurationNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.prefetchSchedule)[':PlaybackConfigurationName']['$post']
      >,
    ) {
      return parseResponse(
        client.prefetchSchedule[':PlaybackConfigurationName'].$post(args, options),
      )
    },
  })
}

export function usePostPrefetchSchedulePlaybackConfigurationName<
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
                    (typeof client.prefetchSchedule)[':PlaybackConfigurationName']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.prefetchSchedule)[':PlaybackConfigurationName']['$post']>,
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
  const mutationDefaults = getPostPrefetchSchedulePlaybackConfigurationNameMutationOptions<
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

export function getSourceLocationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sourceLocations.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['sourceLocations', '/sourceLocations', keyArgs] as const
}

export function getSourceLocationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sourceLocations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSourceLocationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sourceLocations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSourceLocations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sourceLocations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sourceLocations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sourceLocations.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sourceLocations.$get>>>
            >
          >,
          ReturnType<typeof getSourceLocationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sourceLocations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSourceLocationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSourceLocationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sourceLocations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTagsResourceArnQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':ResourceArn']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['tags', '/tags/:ResourceArn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':ResourceArn']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsResourceArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tags[':ResourceArn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':ResourceArn']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTagsResourceArnQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagsResourceArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tags[':ResourceArn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTagsResourceArnMutationKey() {
  return ['tags', '/tags/:ResourceArn', 'POST'] as const
}

export function getPostTagsResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$post']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.tags)[':ResourceArn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsResourceArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)[':ResourceArn']['$post']>) {
      return parseResponse(client.tags[':ResourceArn'].$post(args, options))
    },
  })
}

export function usePostTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.tags)[':ResourceArn']['$post']>,
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
  const mutationDefaults = getPostTagsResourceArnMutationOptions<TError, TOnMutateResult>(
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

export function getSourceLocationSourceLocationNameVodSourcesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sourceLocation)[':SourceLocationName']['vodSources']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['sourceLocation', '/sourceLocation/:SourceLocationName/vodSources', keyArgs] as const
}

export function getSourceLocationSourceLocationNameVodSourcesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sourceLocation)[':SourceLocationName']['vodSources']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSourceLocationSourceLocationNameVodSourcesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sourceLocation[':SourceLocationName'].vodSources.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSourceLocationSourceLocationNameVodSources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.sourceLocation)[':SourceLocationName']['vodSources']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sourceLocation)[':SourceLocationName']['vodSources']['$get']>
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
                    (typeof client.sourceLocation)[':SourceLocationName']['vodSources']['$get']
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
                    (typeof client.sourceLocation)[':SourceLocationName']['vodSources']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSourceLocationSourceLocationNameVodSourcesQueryKey>
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
            ReturnType<(typeof client.sourceLocation)[':SourceLocationName']['vodSources']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSourceLocationSourceLocationNameVodSourcesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSourceLocationSourceLocationNameVodSourcesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sourceLocation[':SourceLocationName'].vodSources.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutPlaybackConfigurationMutationKey() {
  return ['playbackConfiguration', '/playbackConfiguration', 'PUT'] as const
}

export function getPutPlaybackConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.playbackConfiguration.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.playbackConfiguration.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutPlaybackConfigurationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.playbackConfiguration.$put>) {
      return parseResponse(client.playbackConfiguration.$put(args, options))
    },
  })
}

export function usePutPlaybackConfiguration<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.playbackConfiguration.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.playbackConfiguration.$put>,
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
  const mutationDefaults = getPutPlaybackConfigurationMutationOptions<TError, TOnMutateResult>(
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

export function getPutChannelChannelNameStartMutationKey() {
  return ['channel', '/channel/:ChannelName/start', 'PUT'] as const
}

export function getPutChannelChannelNameStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channel)[':ChannelName']['start']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.channel)[':ChannelName']['start']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutChannelChannelNameStartMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.channel)[':ChannelName']['start']['$put']>,
    ) {
      return parseResponse(client.channel[':ChannelName'].start.$put(args, options))
    },
  })
}

export function usePutChannelChannelNameStart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channel)[':ChannelName']['start']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.channel)[':ChannelName']['start']['$put']>,
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
  const mutationDefaults = getPutChannelChannelNameStartMutationOptions<TError, TOnMutateResult>(
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

export function getPutChannelChannelNameStopMutationKey() {
  return ['channel', '/channel/:ChannelName/stop', 'PUT'] as const
}

export function getPutChannelChannelNameStopMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channel)[':ChannelName']['stop']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.channel)[':ChannelName']['stop']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutChannelChannelNameStopMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.channel)[':ChannelName']['stop']['$put']>,
    ) {
      return parseResponse(client.channel[':ChannelName'].stop.$put(args, options))
    },
  })
}

export function usePutChannelChannelNameStop<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channel)[':ChannelName']['stop']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.channel)[':ChannelName']['stop']['$put']>,
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
  const mutationDefaults = getPutChannelChannelNameStopMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteTagsResourceArnTagKeysMutationKey() {
  return ['tags', '/tags/:ResourceArn#tagKeys', 'DELETE'] as const
}

export function getDeleteTagsResourceArnTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTagsResourceArnTagKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>,
    ) {
      return parseResponse(client.tags[':ResourceArn#tagKeys'].$delete(args, options))
    },
  })
}

export function useDeleteTagsResourceArnTagKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>,
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
  const mutationDefaults = getDeleteTagsResourceArnTagKeysMutationOptions<TError, TOnMutateResult>(
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
